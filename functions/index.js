"use strict";

const admin = require("firebase-admin");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { defineSecret } = require("firebase-functions/params");
const Stripe = require("stripe");

admin.initializeApp();

const REGION = "europe-west1";
const CURRENCY = "pln";
const DEFAULT_SUCCESS_PATH = "/index.html";
const STRIPE_SECRET_KEY = defineSecret("STRIPE_SECRET_KEY");
const STRIPE_WEBHOOK_SECRET = defineSecret("STRIPE_WEBHOOK_SECRET");

function getSecretValue(secretParam, envName) {
  try {
    return process.env[envName] || secretParam.value() || "";
  } catch (error) {
    return process.env[envName] || "";
  }
}

function getStripeSecretKey() {
  return getSecretValue(STRIPE_SECRET_KEY, "STRIPE_SECRET_KEY");
}

function getStripeWebhookSecret() {
  return getSecretValue(STRIPE_WEBHOOK_SECRET, "STRIPE_WEBHOOK_SECRET");
}

function getStripeClient() {
  const secretKey = getStripeSecretKey();
  if (!secretKey) {
    throw new Error("Missing Stripe secret key. Set STRIPE_SECRET_KEY with Firebase Functions secrets.");
  }
  return new Stripe(secretKey, { apiVersion: "2024-06-20" });
}

const PAID_PRODUCTS = {
  "premium-alley-cash": {
    title: "Aleja Premium",
    unitAmount: 1999,
    grant: { type: "superAlley" },
  },
  "ranking-premium-cash": {
    title: "Rankingowa Premium",
    unitAmount: 3399,
    grant: { type: "rankingPremium" },
  },
  "winter-premium-boost": {
    title: "Aleja Premium + 5 poziomów",
    unitAmount: 2499,
    grant: { type: "premiumBoost", worldId: "winter", trophyBoost: 250 },
  },
  "starter-pack": {
    title: "Starter Pack",
    unitAmount: 699,
    grant: {
      type: "bundle",
      storeFlag: "storeStarterPackPurchased",
      rewards: [
        { type: "coins", amount: 600 },
        { type: "elixirs", amount: 1 },
        { type: "machineRoll", worldId: "magicians" },
      ],
    },
  },
  "max-platoya": {
    title: "Wymaksuj PlatoYĘ!",
    unitAmount: 499,
    grant: {
      type: "bundle",
      dailyFlag: "maxPlatoyaPurchasedCycleKey",
      rewards: [
        { type: "coins", amount: 12600 },
        { type: "elixirs", amount: 20 },
      ],
    },
  },
  "special-coins-10000": {
    title: "10000 monet",
    unitAmount: 499,
    grant: { type: "coins", amount: 10000, dailySpecialId: "special-coins-10000" },
  },
  "special-diamonds-99": {
    title: "99 diamentów",
    unitAmount: 499,
    grant: { type: "diamonds", amount: 99, dailySpecialId: "special-diamonds-99" },
  },
  "special-elixirs-34": {
    title: "34 eliksiry",
    unitAmount: 499,
    grant: { type: "elixirs", amount: 34, dailySpecialId: "special-elixirs-34" },
  },
  "coins-10000": {
    title: "10000 monet",
    unitAmount: 1399,
    grant: { type: "coins", amount: 10000 },
  },
  "coins-20000": {
    title: "20000 monet",
    unitAmount: 2499,
    grant: { type: "coins", amount: 20000 },
  },
  "diamonds-35": {
    title: "35 klejnotów",
    unitAmount: 599,
    grant: { type: "diamonds", amount: 35 },
  },
  "diamonds-119": {
    title: "119 klejnotów",
    unitAmount: 1999,
    grant: { type: "diamonds", amount: 119 },
  },
  "winter-ice-pack": {
    title: "Pakiet Zimowego Świata",
    unitAmount: 1999,
    grant: {
      type: "bundle",
      rewards: [
        { type: "character", itemId: "lyzwiarka-lily" },
        { type: "character", itemId: "lyzwiarz-leo" },
      ],
    },
  },
  "high-tower-spark-pack": {
    title: "Wzbogać się o błysk!",
    unitAmount: 1199,
    grant: {
      type: "bundle",
      storeFlag: "highTowerSparkPackPurchased",
      rewards: [
        { type: "highTowerChest", amount: 1 },
        { type: "highTowerSparkles", amount: 30000 },
      ],
    },
  },
  "high-tower-flaro-cash": {
    title: "Flaro Płoń!",
    unitAmount: 1199,
    grant: { type: "pet", itemId: "flaro" },
  },
};

function setCors(response) {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Headers", "Content-Type");
  response.set("Access-Control-Allow-Methods", "POST, OPTIONS");
}

function sendJson(response, status, payload) {
  setCors(response);
  response.status(status).json(payload);
}

function sanitizeId(value, maxLength = 120) {
  return String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, maxLength);
}

function sanitizeReturnUrl(value) {
  try {
    const parsed = new URL(String(value || ""));
    if (parsed.protocol !== "https:" && parsed.hostname !== "localhost" && parsed.hostname !== "127.0.0.1") {
      return "";
    }
    parsed.hash = "";
    return parsed.toString();
  } catch (error) {
    return "";
  }
}

function appendReturnParams(returnUrl, params) {
  const base = new URL(returnUrl || DEFAULT_SUCCESS_PATH);
  Object.entries(params).forEach(([key, value]) => base.searchParams.set(key, value));
  return base.toString();
}

function normalizeProductContext(productId, context = {}) {
  const normalized = {};

  if (productId === "premium-alley-cash") {
    normalized.worldId = context.worldId === "winter" ? "winter" : "alley";
  }

  return normalized;
}

function buildGrant(product, productId, context = {}) {
  const grant = JSON.parse(JSON.stringify(product.grant || {}));

  if (grant.type === "superAlley") {
    grant.worldId = context.worldId === "winter" ? "winter" : "alley";
  }

  grant.productId = productId;
  grant.title = product.title;
  return grant;
}

exports.createCheckoutSession = onRequest({ region: REGION, secrets: [STRIPE_SECRET_KEY] }, async (request, response) => {
  setCors(response);

  if (request.method === "OPTIONS") {
    response.status(204).send("");
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "method-not-allowed" });
    return;
  }

  try {
    const body = request.body || {};
    const productId = sanitizeId(body.productId);
    const profileId = sanitizeId(body.profileId);
    const publicId = sanitizeId(body.publicId, 32);
    const nickname = String(body.nickname || "Gracz").trim().slice(0, 80);
    const product = PAID_PRODUCTS[productId];
    const returnUrl = sanitizeReturnUrl(body.returnUrl);

    if (!product || !profileId || !returnUrl) {
      sendJson(response, 400, { error: "invalid-request" });
      return;
    }

    const context = normalizeProductContext(productId, body.context || {});
    const orderRef = admin.database().ref("paymentOrders").push();
    const orderId = orderRef.key;
    const grant = buildGrant(product, productId, context);

    await orderRef.set({
      id: orderId,
      profileId,
      publicId,
      nickname,
      productId,
      title: product.title,
      amountTotal: product.unitAmount,
      currency: CURRENCY,
      context,
      grant,
      status: "pending",
      createdAt: admin.database.ServerValue.TIMESTAMP,
    });

    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      automatic_payment_methods: {
        enabled: true,
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            unit_amount: product.unitAmount,
            product_data: {
              name: product.title,
              metadata: { productId },
            },
          },
        },
      ],
      success_url: appendReturnParams(returnUrl, {
        payment: "success",
        order_id: orderId,
        session_id: "{CHECKOUT_SESSION_ID}",
      }),
      cancel_url: appendReturnParams(returnUrl, {
        payment: "cancelled",
        order_id: orderId,
      }),
      metadata: {
        orderId,
        productId,
        profileId,
      },
    });

    await orderRef.update({
      stripeSessionId: session.id,
      updatedAt: admin.database.ServerValue.TIMESTAMP,
    });

    sendJson(response, 200, { url: session.url, orderId });
  } catch (error) {
    logger.error("createCheckoutSession failed", error);
    sendJson(response, 500, { error: "checkout-session-failed" });
  }
});

async function markOrderPaidFromCheckoutSession(session) {
  const orderId = sanitizeId(session?.metadata?.orderId);
  const productId = sanitizeId(session?.metadata?.productId);
  const profileId = sanitizeId(session?.metadata?.profileId);
  const product = PAID_PRODUCTS[productId];

  if (!orderId || !product || !profileId) {
    logger.warn("Stripe session without valid metadata", { orderId, productId, profileId });
    return;
  }

  const amountTotal = Number(session.amount_total || 0);
  const currency = String(session.currency || "").toLowerCase();
  const isPaid = session.payment_status === "paid";
  const orderRef = admin.database().ref(`paymentOrders/${orderId}`);

  await orderRef.transaction((order) => {
    if (!order || order.profileId !== profileId || order.productId !== productId) {
      return order;
    }

    if (order.status === "claimed") {
      return order;
    }

    if (!isPaid || amountTotal !== product.unitAmount || currency !== CURRENCY) {
      return {
        ...order,
        status: "verification_failed",
        verificationError: {
          isPaid,
          amountTotal,
          currency,
          expectedAmount: product.unitAmount,
          expectedCurrency: CURRENCY,
        },
        updatedAt: admin.database.ServerValue.TIMESTAMP,
      };
    }

    return {
      ...order,
      status: "paid",
      stripePaymentIntentId: session.payment_intent || "",
      paidAt: admin.database.ServerValue.TIMESTAMP,
      updatedAt: admin.database.ServerValue.TIMESTAMP,
    };
  });
}

exports.stripeWebhook = onRequest({ region: REGION, secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET] }, async (request, response) => {
  if (request.method !== "POST") {
    response.status(405).send("Method not allowed");
    return;
  }

  const webhookSecret = getStripeWebhookSecret();
  if (!webhookSecret) {
    logger.error("Missing Stripe webhook secret");
    response.status(500).send("Webhook secret missing");
    return;
  }

  let event;
  try {
    const stripe = getStripeClient();
    const signature = request.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(request.rawBody, signature, webhookSecret);
  } catch (error) {
    logger.warn("Stripe webhook signature verification failed", error.message);
    response.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  try {
    const eventRef = admin.database().ref(`stripeEvents/${event.id}`);
    const eventTransaction = await eventRef.transaction((current) => {
      if (current) {
        return undefined;
      }
      return {
        type: event.type,
        createdAt: admin.database.ServerValue.TIMESTAMP,
      };
    });

    if (!eventTransaction.committed) {
      response.json({ received: true, duplicate: true });
      return;
    }

    if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
      await markOrderPaidFromCheckoutSession(event.data.object);
    }

    response.json({ received: true });
  } catch (error) {
    logger.error("Stripe webhook processing failed", error);
    response.status(500).send("Webhook processing failed");
  }
});

exports.claimPaidPurchase = onRequest({ region: REGION }, async (request, response) => {
  setCors(response);

  if (request.method === "OPTIONS") {
    response.status(204).send("");
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "method-not-allowed" });
    return;
  }

  try {
    const orderId = sanitizeId(request.body?.orderId);
    const profileId = sanitizeId(request.body?.profileId);

    if (!orderId || !profileId) {
      sendJson(response, 400, { error: "invalid-request" });
      return;
    }

    const orderRef = admin.database().ref(`paymentOrders/${orderId}`);
    let grantedOrder = null;
    const claimTransaction = await orderRef.transaction((order) => {
      if (!order || order.profileId !== profileId || order.status !== "paid" || order.claimedAt) {
        return undefined;
      }

      grantedOrder = order;
      return {
        ...order,
        status: "claimed",
        claimedAt: admin.database.ServerValue.TIMESTAMP,
        updatedAt: admin.database.ServerValue.TIMESTAMP,
      };
    });

    if (!claimTransaction.committed || !grantedOrder) {
      const snapshot = await orderRef.once("value");
      const order = snapshot.val();
      sendJson(response, 409, {
        error: order?.status === "pending" ? "payment-not-confirmed" : "purchase-not-claimable",
        status: order?.status || "missing",
      });
      return;
    }

    sendJson(response, 200, {
      orderId,
      productId: grantedOrder.productId,
      title: grantedOrder.title,
      grant: grantedOrder.grant,
    });
  } catch (error) {
    logger.error("claimPaidPurchase failed", error);
    sendJson(response, 500, { error: "claim-failed" });
  }
});
