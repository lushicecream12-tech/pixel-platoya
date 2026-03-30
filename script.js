const TOTAL_LOADING_TIME = 10000;
const STEP_INTERVAL_MIN = 200;
const STEP_INTERVAL_MAX = 950;
const STORAGE_KEY = "pixel-platoya-save-v1";
const SUPER_ALLEY_DIAMOND_PRICE = 119;
const SUPER_ALLEY_CASH_PRICE_LABEL = "19,99zł";
const MAGICIANS_WORLD_END_TROPHIES = 2000;
const WINTER_WORLD_START_TROPHIES = 2050;
const WINTER_WORLD_UNLOCK_REWARD_ID = "alley-2000-millo-jako-elfie";
const TROPHY_NODE_WIDTH = 220;
const TROPHY_NODE_GAP = 20;
const TROPHY_DIAMOND_IMAGE = "./diamenty_.png";
const SUPER_ALLEY_REWARD_THRESHOLDS = {
  alley: new Set([100, 250, 350, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1750, 1850, 1950]),
  winter: new Set([2100, 2250, 2350, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3750, 3850, 3950]),
};
const SOUND_EFFECT_SOURCES = {
  shot2: ["./strzał_2.mp3", "./strzal_2.mp3"],
  shot3: ["./strzał_3.mp3", "./strzal_3.mp3"],
  shot4: ["./strzał_4.mp3", "./strzal_4.mp3"],
  shotNora: ["./strzał_nora.mp3", "./strzal_nora.mp3"],
  walkingLoop: ["./chodzenie_1.mp3"],
  coins: ["./dźwięk_1.mp3", "./dzwiek_1.mp3"],
  characterUnlock: ["./character_1.mp3"],
  superIntro: ["./super_1.mp3"],
  victoryResult: ["./kn_1.mp3"],
  defeatResult: ["./kn_2.mp3"],
  roundEndResult: ["./kn_3.mp3"],
  crateAward: ["./skrzynia_1.mp3"],
  crateOpen: ["./skrzynia_2.mp3"],
  dogVoice: ["./pies_1.mp3"],
  parrotVoice: ["./papuga_1.mp3"],
  catVoice: ["./kot_1.mp3"],
  snowflakeVoice: ["./kot_2.mp3"],
  crowVoice: ["./kruk_1.mp3"],
  bearVoice: ["./niedzwiedz_1.mp3"],
  owlVoice: ["./sowa_1.mp3"],
  monkeyVoice: ["./małpka_1.mp3", "./malpka_1.mp3"],
};

const GAME_RULES = {
  playerMaxHp: 3000,
  robotMaxHp: 1000,
  robotSpawnMs: 6000,
  robotMaxCount: 4,
  robotSpeed: 78,
  robotDamagePerSecond: 250,
  projectileDamage: 200,
  projectileSpeed: 580,
  playerSpeed: 230,
  baseAmmoCount: 3,
  ammoRechargeSeconds: 3,
  hamsterAmmoPenaltySeconds: 0.8,
  hamsterDamageMultiplier: 1.5,
  fireIntervalMs: 1000,
  dogSpeed: 180,
  dogDamagePerSecond: 100,
  monkeyLeapSpeed: 320,
  monkeyDamagePerSecond: 200,
  monkeyHealPerSecond: 200,
  parrotCastIntervalMs: 4000,
  parrotStunDurationMs: 4000,
  parrotRangeAreaFactor: 0.33,
  polarBearCastIntervalMs: 4000,
  polarBearSecondShotDelayMs: 500,
  polarBearProjectileDamage: 50,
  snowflakeShieldDurationMs: 3000,
  snowflakeShieldCooldownMs: 10000,
  owlShieldDurationMs: 3000,
  owlShieldCooldownMs: 10000,
  owlHealAmount: Math.round(3000 * 0.2),
  lpsotkaCastIntervalMs: 5000,
  snakeWallActiveMs: 5000,
  snakeWallCooldownMs: 5000,
  snakeCageSize: 132,
  snakeCageHp: 400,
  snakeCageMaxCount: 2,
  olympianSpeedMultiplier: 1.6,
  energySpawnMs: 10000,
  energyBuffMs: 10000,
  catHealIntervalMs: 3000,
  catHealAmount: 300,
  catShieldDurationMs: 8000,
  catShieldCooldownMs: 16000,
  catShieldDamageReduction: 0.33,
  catSAttackIntervalMs: 3000,
  catSAttackDamage: 150,
  lpsotkaBubbleRewindMs: 2000,
};

const CATALOG = {
  characters: [
    {
      id: "magik-millo",
      name: "Magik Millo",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_1.png",
      storeNote: "Postac startowa z magicznym atakiem.",
    },
    {
      id: "elfie",
      name: "Elfie",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_2.png",
      unlockWorld: "alley",
      storeNote: "Zdobadz w Alei Pucharow.",
    },
    {
      id: "linda",
      name: "Linda",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_3.png",
      unlockWorld: "alley",
      storeNote: "Zdobadz na koncu Alei Pucharow.",
    },
    {
      id: "roslinna-krolowa-linda",
      name: "Roslinna Krolowa Linda",
      price: 10000,
      cashPriceLabel: "",
      image: "./postac_4.png",
      storeNote: "Skorka premium Lindy z królewskim atakiem natury.",
    },
    {
      id: "magiczna-lidsay",
      name: "Magiczna Lidsay",
      price: 10000,
      cashPriceLabel: "",
      image: "./postac_10.png",
      storeNote: "Magiczna postac sklepowa z atakiem jak Magik Millo.",
    },
    {
      id: "elfie-wojowniczka",
      name: "Elfie Wojowniczka",
      price: 10000,
      cashPriceLabel: "",
      image: "./postac_5.png",
      storeNote: "Skorka Elfie gotowa do walki.",
    },
    {
      id: "elfie-w-swojej-naturze",
      name: "Elfie w swojej naturze",
      price: 10000,
      cashPriceLabel: "",
      image: "./postac_6.png",
      storeNote: "Naturalna wersja Elfie ze swoim atakiem.",
    },
    {
      id: "elfie-jako-linda",
      name: "Elfie jako Linda",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_7.png",
      unlockWorld: "alley",
      storeNote: "Skorka z konca Alei Pucharow.",
    },
    {
      id: "millo-jako-elfie",
      name: "Millo jako Elfie",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_8.png",
      unlockWorld: "alley",
      storeNote: "Nagroda za dalsza czesc Alei Pucharow.",
    },
    {
      id: "linda-wojownicza-ksiezniczka",
      name: "Linda Wojownicza Ksiezniczka",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_9.png",
      unlockWorld: "alley",
      storeNote: "Nagroda z dalszej czesci Alei Pucharow.",
    },
    {
      id: "lily",
      name: "Lily",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_11.png",
      unlockWorld: "winter",
      storeNote: "Nagroda z konca Swiata Zimowego.",
    },
    {
      id: "tricky",
      name: "Tricky",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_12.png",
      unlockWorld: "winter",
      storeNote: "Nagroda z dalszego konca Swiata Zimowego.",
    },
    {
      id: "tricky-renifer",
      name: "Tricky Renifer",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_13.png",
      unlockWorld: "winter",
      storeNote: "Nagroda za sam koniec Swiata Zimowego.",
    },
    {
      id: "leo",
      name: "Leo",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_17.png",
      unlockWorld: "winter",
      storeNote: "Nagroda za final Swiata Zimowego.",
    },
    {
      id: "leo-skoczek-narciarski",
      name: "Leo Skoczek Narciarski",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_14.png",
      unlockWorld: "winter",
      storeNote: "Nagroda Super ze Swiata Zimowego.",
    },
    {
      id: "lyzwiarka-lily",
      name: "Łyżwiarka Lily",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_15.png",
      unlockWorld: "winter",
      storeNote: "Postac z zimowego pakietu.",
    },
    {
      id: "lyzwiarz-leo",
      name: "Łyżwiaż Leo",
      price: 0,
      cashPriceLabel: "",
      image: "./postac_16.png",
      unlockWorld: "winter",
      storeNote: "Postac z zimowego pakietu.",
    },
    {
      id: "mistrzyni-lyzwiarstwa-lily",
      name: "Mistrzyni Łyżwiarstwa Lily",
      price: 10000,
      cashPriceLabel: "",
      image: "./postac_18.png",
      unlockWorld: "winter",
      storeNote: "Zimowa sklepowa postac z atakiem jak Lily.",
    },
    {
      id: "nora",
      name: "NORA",
      price: 20000,
      cashPriceLabel: "",
      image: "./postac_nora.png",
      previewVideo: "./nora_1.mov",
      unlockWorld: "winter",
      storeWorld: "winter",
      storeNote: "Animowany zimowy skin z własnym atakiem i dźwiękiem.",
    },
  ],
  pets: [
    {
      id: "pies-magik",
      name: "Pies Magik",
      price: 500,
      image: "./platoya_1.png",
      categoryId: "magicy",
      unlockWorld: "alley",
      rarityLabel: "Pospolity PlatoYa",
      rarityClass: "common",
      description: "Biegnie do robotow i stale zadaje 100 pz na sekunde, dopoki na mapie sa przeciwnicy.",
    },
    {
      id: "papuga-manipulantka",
      name: "Papuga Manipulantka",
      price: 500,
      image: "./platoya_2.png",
      categoryId: "magicy",
      unlockWorld: "alley",
      rarityLabel: "Pospolity PlatoYa",
      rarityClass: "common",
      description: "Co 4 sekundy wyrzuca gwiazdki w najblizszego robota. Trafiony robot przez 4 sekundy nie rusza sie i nie atakuje.",
    },
    {
      id: "l-psotka",
      name: "L'Psotka",
      price: 0,
      image: "./platoya_3.png",
      categoryId: "magicy",
      unlockWorld: "alley",
      rarityLabel: "Pospolity PlatoYa",
      rarityClass: "common",
      description: "Co 5 sekund psoci najblizszemu robotowi podobnie do papugi i na chwile go zatrzymuje.",
    },
    {
      id: "el-kruk",
      name: "El Kruk",
      price: 0,
      image: "./platoya_4.png",
      categoryId: "magicy",
      unlockWorld: "alley",
      rarityLabel: "Pospolity PlatoYa",
      rarityClass: "common",
      description: "Leczy o 500 co 5 sekund po utracie zycia, a przy skinach Elfie przyspiesza zielona amunicje.",
    },
    {
      id: "malpka-jasnoksieznik",
      name: "Małpka Jasnoksiężnik",
      price: 2500,
      originalPrice: 3000,
      image: "./platoya_malpka.png",
      categoryId: "magicy",
      rarityLabel: "Legendarny PlatoYa",
      rarityClass: "legendary",
      description: "Przeskakuje na najblizszego robota i zadaje mu 200 pz na sekunde. Po pokonaniu celu wraca do ciebie i leczy o 200 pz na sekunde, dopoki nie odzyskasz calego zycia.",
    },
    {
      id: "niedzwiedz-polarny",
      name: "Niedźwiedź Polarny",
      price: 0,
      image: "./platoya_6.png",
      categoryId: "balonowi",
      unlockWorld: "winter",
      rarityLabel: "Zimowy PlatoYa",
      rarityClass: "legendary",
      description: "Co 4 sekundy wypuszcza dwa lodowe strzaly po 50 pz z opoznieniem 0,5 s.",
    },
    {
      id: "sniezynka",
      name: "Śnieżynka",
      price: 0,
      image: "./platoya_7.png",
      categoryId: "balonowi",
      unlockWorld: "winter",
      rarityLabel: "Super PlatoYa",
      rarityClass: "ultra",
      description: "Co 10 sekund daje ci na 3 sekundy zimowa tarcze, ktora chroni przed obrazeniami.",
    },
    {
      id: "sowa",
      name: "Sowa",
      price: 0,
      image: "./platoya_9.png",
      categoryId: "balonowi",
      unlockWorld: "winter",
      rarityLabel: "Super PlatoYa",
      rarityClass: "ultra",
      description: "Wcisnij W, aby na 3 sekundy zatrzymac ruch, wlaczyc zimowa tarcze i po niej odnowic 20% zycia.",
    },
  ],
  coins: [
    { id: "coins-3000", name: "3000 monet", priceLabel: "4,99 zl", amount: 3000, image: "./monety_1.png" },
    { id: "coins-10000", name: "10000 monet", priceLabel: "11,99 zl", amount: 10000, image: "./monety_1.png" },
  ],
  trophies: [
    { id: "trophies-1000", name: "1000 pucharow", price: 1, amount: 1000, image: "./monety_1.png" },
  ],
  bundles: [
    {
      id: "winter-ice-pack",
      name: "Pakiet Zimowego Swiata",
      cashPriceLabel: "19,99zł",
      image: "./pakiet_1.png",
      storeWorld: "winter",
      rewardCharacterIds: ["lyzwiarka-lily", "lyzwiarz-leo"],
      description: "Zawiera postacie Łyżwiarka Lily i Łyżwiaż Leo.",
    },
  ],
  crates: [
    {
      id: "drewniana-skrzynia",
      name: "Drewniana Skrzynia",
      image: "./skrzynia_1.png",
      fallbackText: "SKRZYNIA",
      betaFreeClaims: 3,
      description: "Nowość beta. Odbierz darmowe skrzynie z oferty i sprawdź, co jest w środku.",
    },
  ],
  weapons: [
    { id: "atak-1", name: "Atak 1", price: 0, image: "./atak_1.png" },
  ],
};

const PET_CATEGORIES = [
  {
    id: "magicy",
    name: "Magicy",
    image: "./ikona_1.png",
    fallbackText: "MAGICY",
  },
  {
    id: "roslinozercy",
    name: "Roslinozercy",
    image: "./ikona_2.png",
    fallbackText: "ROSLINOZERCY",
  },
  {
    id: "miasto-chomikow",
    name: "Miasto Chomikow",
    image: "./ikona_3.png",
    fallbackText: "MIASTO CHOMIKOW",
  },
  {
    id: "balonowi",
    name: "Balonowi",
    image: "./ikona_4.png",
    fallbackText: "BALONOWI",
  },
  {
    id: "podwodni-nurkowie",
    name: "Podwodni Nurkowie",
    image: "./ikona_5.png",
    fallbackText: "PODWODNI NURKOWIE",
  },
];

const INVENTORY_WORLD_GROUPS = [
  {
    id: "magicians",
    label: "Swiat Magikow",
  },
  {
    id: "winter",
    label: "Swiat Zimowy",
  },
];

const TROPHY_WORLDS = [
  {
    id: "alley",
    name: "Swiat Magikow",
    threshold: 0,
    rewards: [
      { id: "alley-50-coins", trophies: 50, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-100-crate", trophies: 100, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "alley-150-diamonds", trophies: 150, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-200-pies-magik", trophies: 200, type: "pet", itemId: "pies-magik", label: "Pies Magik" },
      { id: "alley-250-crate", trophies: 250, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "alley-300-coins", trophies: 300, type: "coins", amount: 3000, label: "3000 monet" },
      { id: "alley-350-crate", trophies: 350, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "alley-400-diamonds", trophies: 400, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-450-crate", trophies: 450, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "alley-500-elfie", trophies: 500, type: "character", itemId: "elfie", label: "Elfie" },
      { id: "alley-550-coins", trophies: 550, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-600-crate", trophies: 600, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "alley-650-diamonds", trophies: 650, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-700-crate", trophies: 700, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "alley-750-coins", trophies: 750, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-800-l-psotka", trophies: 800, type: "pet", itemId: "l-psotka", label: "PlatoYa L'Psotka" },
      { id: "alley-850-diamonds", trophies: 850, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-900-crate", trophies: 900, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "alley-950-coins", trophies: 950, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-1000-linda", trophies: 1000, type: "character", itemId: "linda", label: "Linda" },
      { id: "alley-1050-diamonds", trophies: 1050, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-1100-crate", trophies: 1100, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "alley-1150-coins", trophies: 1150, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-1200-crate", trophies: 1200, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "alley-1250-diamonds", trophies: 1250, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-1300-el-kruk", trophies: 1300, type: "pet", itemId: "el-kruk", label: "El Kruk" },
      { id: "alley-1350-coins", trophies: 1350, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-1400-crate", trophies: 1400, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "alley-1450-diamonds", trophies: 1450, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-1500-elfie-jako-linda", trophies: 1500, type: "character", itemId: "elfie-jako-linda", label: "Elfie jako Linda" },
      { id: "alley-1550-coins", trophies: 1550, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-1600-crate", trophies: 1600, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "alley-1650-diamonds", trophies: 1650, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-1700-crate", trophies: 1700, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "alley-1750-linda-wojownicza-ksiezniczka", trophies: 1750, type: "character", itemId: "linda-wojownicza-ksiezniczka", label: "Linda Wojownicza Księżniczka" },
      { id: "alley-1800-coins", trophies: 1800, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-1850-crate", trophies: 1850, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "alley-1900-diamonds", trophies: 1900, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-1950-coins", trophies: 1950, type: "coins", amount: 5000, label: "5000 monet" },
      { id: "alley-2000-millo-jako-elfie", trophies: 2000, type: "character", itemId: "millo-jako-elfie", label: "Millo jako Elfie" },
    ],
  },
  {
    id: "winter",
    name: "Swiat Zimowy",
    threshold: MAGICIANS_WORLD_END_TROPHIES,
    rewards: [
      { id: "winter-2050-coins", trophies: 2050, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-2100-crate", trophies: 2100, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "winter-2150-diamonds", trophies: 2150, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-2200-niedzwiedz-polarny", trophies: 2200, type: "pet", itemId: "niedzwiedz-polarny", label: "Niedźwiedź Polarny" },
      { id: "winter-2250-crate", trophies: 2250, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "winter-2300-coins", trophies: 2300, type: "coins", amount: 3000, label: "3000 monet" },
      { id: "winter-2350-crate", trophies: 2350, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "winter-2400-diamonds", trophies: 2400, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-2450-crate", trophies: 2450, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "winter-2500-lily", trophies: 2500, type: "character", itemId: "lily", label: "Lily" },
      { id: "winter-2550-coins", trophies: 2550, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-2600-crate", trophies: 2600, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "winter-2650-diamonds", trophies: 2650, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-2700-crate", trophies: 2700, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "winter-2750-coins", trophies: 2750, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-2800-sniezynka", trophies: 2800, type: "pet", itemId: "sniezynka", label: "PlatoYa Śnieżynka" },
      { id: "winter-2850-diamonds", trophies: 2850, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-2900-crate", trophies: 2900, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "winter-2950-coins", trophies: 2950, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-3000-tricky", trophies: 3000, type: "character", itemId: "tricky", label: "Tricky" },
      { id: "winter-3050-diamonds", trophies: 3050, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-3100-crate", trophies: 3100, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "winter-3150-coins", trophies: 3150, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-3200-crate", trophies: 3200, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "winter-3250-diamonds", trophies: 3250, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-3300-sowa", trophies: 3300, type: "pet", itemId: "sowa", label: "PlatoYa Sowa" },
      { id: "winter-3350-coins", trophies: 3350, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-3400-crate", trophies: 3400, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "winter-3450-diamonds", trophies: 3450, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-3500-tricky-renifer", trophies: 3500, type: "character", itemId: "tricky-renifer", label: "Tricky Renifer" },
      { id: "winter-3550-coins", trophies: 3550, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-3600-crate", trophies: 3600, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "winter-3650-diamonds", trophies: 3650, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-3700-crate", trophies: 3700, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "winter-3750-leo-skoczek-narciarski", trophies: 3750, type: "character", itemId: "leo-skoczek-narciarski", label: "Leo Skoczek Narciarski" },
      { id: "winter-3800-coins", trophies: 3800, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-3850-crate", trophies: 3850, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "winter-3900-diamonds", trophies: 3900, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-3950-coins", trophies: 3950, type: "coins", amount: 5000, label: "5000 monet" },
      { id: "winter-4000-leo", trophies: 4000, type: "character", itemId: "leo", label: "Leo" },
    ],
  },
];

const state = loadState();
const ui = {
  currentView: "lobby",
  inventoryTab: "characters",
  trophyWorldId: state.activeTrophyWorld || "alley",
};

const game = createGameState();

const loadingScreen = document.getElementById("loading-screen");
const appScreen = document.getElementById("app-screen");
const loadingFillText = document.getElementById("loading-fill-text");
const loadingProgressFill = document.getElementById("loading-progress-fill");
const progressValue = document.getElementById("progress-value");
const alleyIntroBackdrop = document.getElementById("alley-intro-backdrop");
const alleyIntroScene = document.getElementById("alley-intro-scene");
const alleyIntroImage = document.getElementById("alley-intro-image");
const alleyIntroTitle = document.getElementById("alley-intro-title");
const superAlleyButton = document.getElementById("super-alley-button");
const superAlleyStatus = document.getElementById("super-alley-status");
const superAlleyBackdrop = document.getElementById("super-alley-backdrop");
const superAlleyScene = document.getElementById("super-alley-scene");
const superAlleyImage = document.getElementById("super-alley-image");
const superAlleyTitle = document.getElementById("super-alley-title");
const superAlleyCopy = document.getElementById("super-alley-copy");
const superAlleyActions = document.getElementById("super-alley-actions");
const superAlleyCoinsButton = document.getElementById("super-alley-coins-button");
const superAlleyCashButton = document.getElementById("super-alley-cash-button");
const winterBundleBackdrop = document.getElementById("winter-bundle-backdrop");
const winterBundleScene = document.getElementById("winter-bundle-scene");
const winterBundleImage = document.getElementById("winter-bundle-image");
const winterBundleTitle = document.getElementById("winter-bundle-title");
const winterBundleCopy = document.getElementById("winter-bundle-copy");
const winterBundleActions = document.getElementById("winter-bundle-actions");
const winterBundleConfirmButton = document.getElementById("winter-bundle-confirm-button");
const storeCharacterPurchaseBackdrop = document.getElementById("store-character-purchase-backdrop");
const storeCharacterPurchaseScene = document.getElementById("store-character-purchase-scene");
const storeCharacterPurchaseImage = document.getElementById("store-character-purchase-image");
const storeCharacterPurchaseArtFrame = storeCharacterPurchaseImage?.parentElement || null;
const storeCharacterPurchaseTitle = document.getElementById("store-character-purchase-title");
const storeCharacterPurchaseCopy = document.getElementById("store-character-purchase-copy");
const storeCharacterPurchaseActions = document.getElementById("store-character-purchase-actions");
const storeCharacterPurchaseConfirmButton = document.getElementById("store-character-purchase-confirm-button");
const storeCharacterPurchaseMissing = document.getElementById("store-character-purchase-missing");
const coinBalance = document.getElementById("coin-balance");
const trophyBalance = document.getElementById("trophy-balance");
const diamondBalance = document.getElementById("diamond-balance");
const balanceTarget = document.getElementById("balance-target");
const trophyBalanceTarget = trophyBalance?.closest(".balance-box") || null;
const lobbySettingsButton = document.getElementById("lobby-settings-button");
const accountResetButton = document.getElementById("account-reset-button");
const settingsBackdrop = document.getElementById("settings-backdrop");
const settingsCloseButton = document.getElementById("settings-close-button");
const settingsPhoneStatus = document.getElementById("settings-phone-status");
const phoneModeToggle = document.getElementById("phone-mode-toggle");
const lobbyAvatar = document.getElementById("lobby-avatar");
const lobbyAvatarFrame = lobbyAvatar?.parentElement || null;
const lobbyPet = document.getElementById("lobby-pet");
const petWrapper = document.getElementById("pet-wrapper");
const storeGrid = document.getElementById("store-grid");
const inventoryGrid = document.getElementById("inventory-grid");
const wardrobeOverview = document.getElementById("wardrobe-overview");
const trophyGrid = document.getElementById("trophy-grid");
const worldTitle = document.getElementById("world-title");
const worldProgressValue = document.getElementById("world-progress-value");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalBox = document.getElementById("modal-box");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const modalConfirm = document.getElementById("modal-confirm");
const modalVisual = document.getElementById("modal-visual");
const modalImage = document.getElementById("modal-image");
const modalSpinner = document.getElementById("modal-spinner");
const chestBackdrop = document.getElementById("chest-backdrop");
const chestBox = document.getElementById("chest-box");
const chestTitle = document.getElementById("chest-title");
const chestScene = document.getElementById("chest-scene");
const chestOpenButton = document.getElementById("chest-open-button");
const chestImage = document.getElementById("chest-image");
const chestLeftImage = document.getElementById("chest-left-image");
const chestRightImage = document.getElementById("chest-right-image");
const chestRemaining = document.getElementById("chest-remaining");
const chestMessage = document.getElementById("chest-message");
const chestRewardCard = document.getElementById("chest-reward-card");
const chestRewardImage = document.getElementById("chest-reward-image");
const chestRewardTitle = document.getElementById("chest-reward-title");
const chestRewardCount = document.getElementById("chest-reward-count");
const chestRewardNote = document.getElementById("chest-reward-note");
const chestCloseButton = document.getElementById("chest-close-button");
const chestBurstLayer = document.getElementById("chest-burst-layer");
const alleyRewardBackdrop = document.getElementById("alley-reward-backdrop");
const alleyRewardCard = document.getElementById("alley-reward-card");
const alleyRewardImage = document.getElementById("alley-reward-image");
const alleyRewardArtFrame = alleyRewardImage?.parentElement || null;
const alleyRewardName = document.getElementById("alley-reward-name");
const alleyRewardCount = document.getElementById("alley-reward-count");
const alleyRewardBurstLayer = document.getElementById("alley-reward-burst-layer");
const bundleUnlockBackdrop = document.getElementById("bundle-unlock-backdrop");
const bundleUnlockCard = document.getElementById("bundle-unlock-card");
const bundleUnlockImageLeft = document.getElementById("bundle-unlock-image-left");
const bundleUnlockImageRight = document.getElementById("bundle-unlock-image-right");
const bundleUnlockNameLeft = document.getElementById("bundle-unlock-name-left");
const bundleUnlockNameRight = document.getElementById("bundle-unlock-name-right");

const gameStage = document.getElementById("game-stage");
const gameMap = document.getElementById("game-map");
const waveBanner = document.getElementById("wave-banner");
const waveBannerTitle = document.getElementById("wave-banner-title");
const waveBannerCountdown = document.getElementById("wave-banner-countdown");
const gameBackButton = document.getElementById("game-back-button");
const playerEntity = document.getElementById("player-entity");
const playerHealthLabel = document.getElementById("player-health-label");
const playerShield = document.getElementById("player-shield");
const gamePlayerImage = document.getElementById("game-player-image");
const gamePlayerFrame = gamePlayerImage?.parentElement || null;
const gamePetEntity = document.getElementById("game-pet-entity");
const gamePetImage = document.getElementById("game-pet-image");
const petCooldownBar = document.getElementById("pet-cooldown-bar");
const petCooldownFill = document.getElementById("pet-cooldown-fill");
const ammoBars = document.getElementById("ammo-bars");
const gameModeInfo = document.getElementById("game-mode-info");
const touchControls = document.getElementById("touch-controls");
const touchJoystick = document.getElementById("touch-joystick");
const touchJoystickThumb = document.getElementById("touch-joystick-thumb");
const touchFireButton = document.getElementById("touch-fire-button");
const petPackLayer = document.getElementById("pet-pack-layer");
const barriersLayer = document.getElementById("barriers-layer");
const pickupsLayer = document.getElementById("pickups-layer");
const waterFieldsLayer = document.getElementById("water-fields-layer");
const projectilesLayer = document.getElementById("projectiles-layer");
const robotsLayer = document.getElementById("robots-layer");
const effectsLayer = document.getElementById("effects-layer");
const gameResultOverlay = document.getElementById("game-result-overlay");
const gameResultImage = document.getElementById("game-result-image");
const gameResultAvatarFrame = gameResultImage?.parentElement || null;
const gameResultStatus = document.getElementById("game-result-status");
const gameResultNote = document.getElementById("game-result-note");
const gameResultWave = document.getElementById("game-result-wave");
const gameResultRobots = document.getElementById("game-result-robots");
const gameResultTrophies = document.getElementById("game-result-trophies");
const gameResultButton = document.getElementById("game-result-button");

const viewNodes = {
  lobby: document.getElementById("lobby-view"),
  store: document.getElementById("store-view"),
  inventory: document.getElementById("inventory-view"),
  game: document.getElementById("game-view"),
  trophies: document.getElementById("trophies-view"),
};

const backgroundMusic = new Audio("./muzyka_1.mp3");
backgroundMusic.loop = true;
backgroundMusic.preload = "auto";
backgroundMusic.volume = 0.42;

const loadingPoints = buildLoadingPoints(TOTAL_LOADING_TIME);
const unavailableSoundSources = new Set();
let modalAction = null;
let modalDismissible = true;
let ammoFills = [];
let chestSession = null;
let alleyIntroSequenceId = 0;
let alleyRewardTimer = null;
let alleyRewardResolve = null;
let alleyRewardInteractionMode = "auto";
let alleyRewardAction = null;
let alleyRewardBusy = false;
let introSequenceRunning = false;
let resultReturnBusy = false;
let backgroundMusicReady = false;
let superAlleyBusy = false;
let winterBundleBusy = false;
let winterBundleStage = "offer";
let activeWinterBundle = null;
let storeCharacterPurchaseBusy = false;
let activeStoreCharacterPurchase = null;
let trophyWorldBatchClaimBusy = false;
let winterWorldRevealPending = false;
let walkingLoopAudio = null;
let soundEffectsAudioContext = null;
let bundleUnlockTimer = null;
let bundleUnlockResolve = null;
const audioBoostMap = new WeakMap();

bindEvents();
renderAll();
bootApp();

function bindEvents() {
  document.querySelectorAll(".lobby-nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.view);
    });
  });

  document.querySelectorAll("[data-view='lobby']").forEach((button) => {
    button.addEventListener("click", () => {
      if (button === gameBackButton && ui.currentView === "game" && game.active) {
        requestExitGame();
        return;
      }

      showView("lobby");
    });
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.tabGroup;
      const tab = button.dataset.tab;

      if (group === "store") {
        ui.storeTab = tab;
        if (tab === "pets") {
          ui.storePetCategory = null;
        }
        renderStore();
      }

      if (group === "inventory") {
        ui.inventoryTab = tab;
        renderInventory();
      }

      syncTabs();
    });
  });

  storeGrid.addEventListener("click", handleStoreClick);
  inventoryGrid.addEventListener("click", handleInventoryClick);
  trophyGrid.addEventListener("click", handleTrophyClick);
  trophyGrid.addEventListener("scroll", () => {
    clampTrophyRoadScrollPosition();
    syncTrophyRoadThemeFromScroll();
  }, { passive: true });
  if (lobbySettingsButton) {
    lobbySettingsButton.addEventListener("click", () => {
      openSettingsPanel();
    });
  }

  if (accountResetButton) {
    accountResetButton.addEventListener("click", () => {
      closeSettingsPanel();
      confirmAccountReset();
    });
  }

  if (settingsCloseButton) {
    settingsCloseButton.addEventListener("click", () => {
      closeSettingsPanel();
    });
  }

  if (phoneModeToggle) {
    phoneModeToggle.addEventListener("click", () => {
      togglePhoneMode();
    });
  }

  gameResultButton.addEventListener("click", async () => {
    await returnToLobbyFromResult();
  });

  if (superAlleyButton) {
    superAlleyButton.addEventListener("click", () => {
      openSuperAlleyOffer();
    });
  }

  if (superAlleyCoinsButton) {
    superAlleyCoinsButton.addEventListener("click", async () => {
      await activateSuperAlley("coins");
    });
  }

  if (superAlleyCashButton) {
    superAlleyCashButton.addEventListener("click", async () => {
      await activateSuperAlley("cash");
    });
  }

  if (winterBundleConfirmButton) {
    winterBundleConfirmButton.addEventListener("click", async () => {
      await confirmWinterBundlePurchase();
    });
  }

  if (storeCharacterPurchaseConfirmButton) {
    storeCharacterPurchaseConfirmButton.addEventListener("click", async () => {
      await confirmStoreCharacterPurchase();
    });
  }

  modalConfirm.addEventListener("click", async () => {
    if (typeof modalAction === "function") {
      await modalAction();
    }
  });

  chestOpenButton.addEventListener("click", async () => {
    await revealChestReward();
  });

  chestRewardCard.addEventListener("click", async () => {
    await revealChestReward();
  });

  chestCloseButton.addEventListener("click", () => {
    closeChestScene();
  });

  if (alleyRewardBackdrop) {
    alleyRewardBackdrop.addEventListener("click", (event) => {
      if (event.target === alleyRewardBackdrop && alleyRewardInteractionMode !== "manual") {
        closeAlleyRewardScene();
      }
    });
  }

  if (superAlleyBackdrop) {
    superAlleyBackdrop.addEventListener("click", (event) => {
      if (event.target === superAlleyBackdrop && !superAlleyBusy) {
        closeSuperAlleyBackdrop();
      }
    });
  }

  if (winterBundleBackdrop) {
    winterBundleBackdrop.addEventListener("click", (event) => {
      if (event.target === winterBundleBackdrop && !winterBundleBusy && winterBundleStage === "offer") {
        closeWinterBundlePurchase();
      }
    });
  }

  if (storeCharacterPurchaseBackdrop) {
    storeCharacterPurchaseBackdrop.addEventListener("click", (event) => {
      if (event.target === storeCharacterPurchaseBackdrop && !storeCharacterPurchaseBusy) {
        closeStoreCharacterPurchase();
      }
    });
  }

  if (bundleUnlockBackdrop) {
    bundleUnlockBackdrop.addEventListener("click", (event) => {
      if (event.target === bundleUnlockBackdrop) {
        closeBundleUnlockScene();
      }
    });
  }

  if (alleyRewardCard) {
    alleyRewardCard.addEventListener("click", async () => {
      await handleAlleyRewardInteraction();
    });
  }

  modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop && modalDismissible) {
      closeModal();
    }
  });

  if (settingsBackdrop) {
    settingsBackdrop.addEventListener("click", (event) => {
      if (event.target === settingsBackdrop) {
        closeSettingsPanel();
      }
    });
  }

  if (touchJoystick) {
    touchJoystick.addEventListener("pointerdown", handleTouchJoystickStart);
    touchJoystick.addEventListener("pointermove", handleTouchJoystickMove);
    touchJoystick.addEventListener("pointerup", handleTouchJoystickEnd);
    touchJoystick.addEventListener("pointercancel", handleTouchJoystickEnd);
  }

  if (touchFireButton) {
    touchFireButton.addEventListener("pointerdown", handleTouchFireStart);
    touchFireButton.addEventListener("pointerup", handleTouchFireEnd);
    touchFireButton.addEventListener("pointercancel", handleTouchFireEnd);
  }

  window.addEventListener("keydown", (event) => {
    handleGameKey(event, true);

    if (
      event.key === "Escape" &&
      alleyRewardBackdrop &&
      !alleyRewardBackdrop.hidden &&
      alleyRewardInteractionMode !== "manual"
    ) {
      closeAlleyRewardScene();
      return;
    }

    if (
      (event.key === "Enter" || event.key === " ") &&
      alleyRewardBackdrop &&
      !alleyRewardBackdrop.hidden &&
      alleyRewardInteractionMode === "manual"
    ) {
      event.preventDefault();
      void handleAlleyRewardInteraction();
      return;
    }

    if (
      event.key === "Escape" &&
      superAlleyBackdrop &&
      !superAlleyBackdrop.hidden &&
      !superAlleyBusy
    ) {
      closeSuperAlleyBackdrop();
      return;
    }

    if (
      event.key === "Escape" &&
      winterBundleBackdrop &&
      !winterBundleBackdrop.hidden &&
      !winterBundleBusy &&
      winterBundleStage === "offer"
    ) {
      closeWinterBundlePurchase();
      return;
    }

    if (
      event.key === "Escape" &&
      storeCharacterPurchaseBackdrop &&
      !storeCharacterPurchaseBackdrop.hidden &&
      !storeCharacterPurchaseBusy
    ) {
      closeStoreCharacterPurchase();
      return;
    }

    if (event.key === "Escape" && bundleUnlockBackdrop && !bundleUnlockBackdrop.hidden) {
      closeBundleUnlockScene();
      return;
    }

    if (
      (event.key === "Enter" || event.key === " ") &&
      winterBundleBackdrop &&
      !winterBundleBackdrop.hidden &&
      winterBundleStage === "offer" &&
      !winterBundleBusy
    ) {
      event.preventDefault();
      void confirmWinterBundlePurchase();
      return;
    }

    if (
      (event.key === "Enter" || event.key === " ") &&
      storeCharacterPurchaseBackdrop &&
      !storeCharacterPurchaseBackdrop.hidden &&
      !storeCharacterPurchaseBusy &&
      storeCharacterPurchaseActions &&
      !storeCharacterPurchaseActions.hidden
    ) {
      event.preventDefault();
      void confirmStoreCharacterPurchase();
      return;
    }

    if (event.key === "Escape" && settingsBackdrop && !settingsBackdrop.hidden) {
      closeSettingsPanel();
      return;
    }

    if (event.key === "Escape" && !modalBackdrop.hidden && modalDismissible) {
      closeModal();
    }
  });

  window.addEventListener("keyup", (event) => {
    handleGameKey(event, false);
  });

  window.addEventListener("resize", () => {
    if (game.active) {
      updateGameBounds();
      clampGameEntities();
      renderGameScene();
    }
  });

  window.addEventListener("pointerdown", syncBackgroundMusic, { passive: true });
  window.addEventListener("keydown", syncBackgroundMusic);
  window.addEventListener("blur", () => {
    resetGameKeys();
    resetTouchControls();
  });

  window.setInterval(() => {
    if (ui.currentView === "store") {
      refreshStoreViewTick();
    }
  }, 1000);
}

function buildLoadingPoints(totalTime) {
  const points = [];
  let elapsed = 0;
  let percent = 0;

  while (elapsed < totalTime) {
    const remainingTime = totalTime - elapsed;
    const remainingPercent = 100 - percent;

    if (remainingTime <= STEP_INTERVAL_MAX || remainingPercent <= 8) {
      points.push({ delay: remainingTime, value: 100 });
      break;
    }

    const nextDelay = randomBetween(
      STEP_INTERVAL_MIN,
      Math.min(STEP_INTERVAL_MAX, remainingTime - STEP_INTERVAL_MIN)
    );
    const maxJump = Math.min(18, remainingPercent - 1);
    const minJump = Math.min(4, maxJump);
    const jump = randomBetween(minJump, maxJump);

    elapsed += nextDelay;
    percent += jump;
    points.push({ delay: nextDelay, value: Math.min(percent, 99) });
  }

  return points;
}

function shouldUseLoadingScreen() {
  return Boolean(
    loadingScreen &&
    !loadingScreen.hidden &&
    loadingScreen.classList.contains("active")
  );
}

function bootApp() {
  if (!shouldUseLoadingScreen()) {
    updateProgress(100);
    showApp();
    return;
  }

  loadingScreen.hidden = false;
  loadingScreen.setAttribute("aria-hidden", "false");
  appScreen.classList.remove("active");
  appScreen.setAttribute("aria-hidden", "true");
  updateProgress(0);
  startLoadingSequence();
}

function startLoadingSequence() {
  let accumulatedDelay = 0;

  loadingPoints.forEach((point, index) => {
    accumulatedDelay += point.delay;

    window.setTimeout(() => {
      updateProgress(point.value);

      if (index === loadingPoints.length - 1) {
        window.setTimeout(showApp, 320);
      }
    }, accumulatedDelay);
  });
}

function shouldPlayBackgroundMusic() {
  return (
    backgroundMusicReady &&
    ui.currentView !== "game" &&
    appScreen.classList.contains("active") &&
    (!alleyIntroBackdrop || alleyIntroBackdrop.hidden) &&
    (!superAlleyBackdrop || superAlleyBackdrop.hidden) &&
    (!winterBundleBackdrop || winterBundleBackdrop.hidden) &&
    (!bundleUnlockBackdrop || bundleUnlockBackdrop.hidden)
  );
}

function syncBackgroundMusic() {
  if (shouldPlayBackgroundMusic()) {
    const playAttempt = backgroundMusic.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {});
    }
    return;
  }

  backgroundMusic.pause();
}

function getAvailableSoundSource(effectName) {
  const sources = SOUND_EFFECT_SOURCES[effectName] || [];
  return sources.find((entry) => entry && !unavailableSoundSources.has(entry)) || null;
}

function getSoundEffectsAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!soundEffectsAudioContext) {
    soundEffectsAudioContext = new AudioContextClass();
  }

  return soundEffectsAudioContext;
}

function ensureBoostedMediaElement(audio, gainValue = 1) {
  if (!audio) {
    return null;
  }

  const context = getSoundEffectsAudioContext();

  if (!context) {
    return null;
  }

  let entry = audioBoostMap.get(audio);

  if (!entry) {
    const sourceNode = context.createMediaElementSource(audio);
    const gainNode = context.createGain();
    sourceNode.connect(gainNode);
    gainNode.connect(context.destination);
    entry = { gainNode };
    audioBoostMap.set(audio, entry);
  }

  entry.gainNode.gain.value = gainValue;
  return context;
}

function playOneShotSound(effectName, volume = 0.74, gainBoost = 1) {
  const source = getAvailableSoundSource(effectName);

  if (!source) {
    return;
  }

  const audio = new Audio(source);
  audio.preload = "auto";
  audio.volume = volume;
  if (gainBoost > 1) {
    const context = ensureBoostedMediaElement(audio, gainBoost);
    if (context && context.state === "suspended") {
      void context.resume().catch(() => {});
    }
  }
  audio.addEventListener("error", () => {
    unavailableSoundSources.add(source);
  }, { once: true });
  const playAttempt = audio.play();

  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {});
  }
}

function startWalkingLoop() {
  const source = getAvailableSoundSource("walkingLoop");

  if (!source) {
    return;
  }

  if (!walkingLoopAudio || walkingLoopAudio.codexSource !== source) {
    const audio = new Audio(source);
    audio.preload = "auto";
    audio.loop = true;
    audio.volume = 1;
    audio.codexSource = source;
    audio.addEventListener("error", () => {
      unavailableSoundSources.add(source);
      if (walkingLoopAudio?.codexSource === source) {
        walkingLoopAudio = null;
      }
    }, { once: true });
    walkingLoopAudio = audio;
    ensureBoostedMediaElement(audio, 3);
  }

  if (!walkingLoopAudio.paused) {
    return;
  }

  const context = ensureBoostedMediaElement(walkingLoopAudio, 3);

  if (context && context.state === "suspended") {
    void context.resume().catch(() => {});
  }

  const playAttempt = walkingLoopAudio.play();

  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {});
  }
}

function stopWalkingLoop() {
  if (!walkingLoopAudio) {
    return;
  }

  walkingLoopAudio.pause();
  walkingLoopAudio.currentTime = 0;
}

function hasMovementInput() {
  if (isOwlShieldActive()) {
    return false;
  }

  return Boolean(
    game.keys.up
    || game.keys.down
    || game.keys.left
    || game.keys.right
    || Math.abs(game.touch.moveX) > 0.05
    || Math.abs(game.touch.moveY) > 0.05
  );
}

function syncWalkingLoop() {
  const shouldPlay = ui.currentView === "game" && game.active && hasMovementInput();

  if (shouldPlay) {
    startWalkingLoop();
    return;
  }

  stopWalkingLoop();
}

function isFireInputActive() {
  return Boolean(game.keys.fire || game.touch.firePressed);
}

function updateTouchJoystickVisual(offsetX = 0, offsetY = 0) {
  if (!touchJoystickThumb) {
    return;
  }

  touchJoystickThumb.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
}

function resetTouchControls() {
  const movePointerId = game.touch.movePointerId;
  const firePointerId = game.touch.firePointerId;

  if (touchJoystick && movePointerId !== null) {
    try {
      if (touchJoystick.hasPointerCapture(movePointerId)) {
        touchJoystick.releasePointerCapture(movePointerId);
      }
    } catch (error) {}
  }

  if (touchFireButton && firePointerId !== null) {
    try {
      if (touchFireButton.hasPointerCapture(firePointerId)) {
        touchFireButton.releasePointerCapture(firePointerId);
      }
    } catch (error) {}
  }

  game.touch.moveX = 0;
  game.touch.moveY = 0;
  game.touch.movePointerId = null;
  game.touch.firePressed = false;
  game.touch.firePointerId = null;

  if (touchFireButton) {
    touchFireButton.classList.remove("pressed");
  }

  updateTouchJoystickVisual(0, 0);
  syncWalkingLoop();
}

function syncTouchControlsVisibility() {
  const shouldShow = Boolean(touchControls) && ui.currentView === "game" && game.active && state.phoneModeEnabled;

  if (touchControls) {
    touchControls.hidden = !shouldShow;
  }

  if (gameStage) {
    gameStage.classList.toggle("phone-mode-active", shouldShow);
  }

  if (!shouldShow) {
    resetTouchControls();
  }
}

function updateTouchMovementFromPointer(clientX, clientY) {
  if (!touchJoystick) {
    return;
  }

  const rect = touchJoystick.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const maxDistance = Math.max(30, rect.width * 0.26);
  const rawX = clientX - centerX;
  const rawY = clientY - centerY;
  const distance = Math.hypot(rawX, rawY);
  const limitedDistance = Math.min(distance, maxDistance);
  const ratio = distance > 0 ? limitedDistance / distance : 0;
  const offsetX = rawX * ratio;
  const offsetY = rawY * ratio;

  game.touch.moveX = clamp(offsetX / maxDistance, -1, 1);
  game.touch.moveY = clamp(offsetY / maxDistance, -1, 1);
  updateTouchJoystickVisual(offsetX, offsetY);
  syncWalkingLoop();
}

function handleTouchJoystickStart(event) {
  if (!state.phoneModeEnabled || ui.currentView !== "game" || !game.active) {
    return;
  }

  if (game.touch.movePointerId !== null && game.touch.movePointerId !== event.pointerId) {
    return;
  }

  event.preventDefault();
  game.touch.movePointerId = event.pointerId;
  touchJoystick.setPointerCapture(event.pointerId);
  updateTouchMovementFromPointer(event.clientX, event.clientY);
}

function handleTouchJoystickMove(event) {
  if (event.pointerId !== game.touch.movePointerId) {
    return;
  }

  event.preventDefault();
  updateTouchMovementFromPointer(event.clientX, event.clientY);
}

function handleTouchJoystickEnd(event) {
  if (event.pointerId !== game.touch.movePointerId) {
    return;
  }

  event.preventDefault();

  try {
    if (touchJoystick.hasPointerCapture(event.pointerId)) {
      touchJoystick.releasePointerCapture(event.pointerId);
    }
  } catch (error) {}

  game.touch.moveX = 0;
  game.touch.moveY = 0;
  game.touch.movePointerId = null;
  updateTouchJoystickVisual(0, 0);
  syncWalkingLoop();
}

function handleTouchFireStart(event) {
  if (!state.phoneModeEnabled || ui.currentView !== "game" || !game.active) {
    return;
  }

  if (game.touch.firePointerId !== null && game.touch.firePointerId !== event.pointerId) {
    return;
  }

  event.preventDefault();
  game.touch.firePointerId = event.pointerId;
  game.touch.firePressed = true;
  touchFireButton.classList.add("pressed");
  touchFireButton.setPointerCapture(event.pointerId);
}

function handleTouchFireEnd(event) {
  if (event.pointerId !== game.touch.firePointerId) {
    return;
  }

  event.preventDefault();

  try {
    if (touchFireButton.hasPointerCapture(event.pointerId)) {
      touchFireButton.releasePointerCapture(event.pointerId);
    }
  } catch (error) {}

  game.touch.firePointerId = null;
  game.touch.firePressed = false;
  touchFireButton.classList.remove("pressed");
}

function getPetVoiceEffect(petId) {
  if (petId === "pies-magik") {
    return "dogVoice";
  }

  if (petId === "niedzwiedz-polarny") {
    return "bearVoice";
  }

  if (petId === "papuga-manipulantka") {
    return "parrotVoice";
  }

  if (petId === "sniezynka") {
    return "snowflakeVoice";
  }

  if (petId === "sowa") {
    return "owlVoice";
  }

  if (petId === "l-psotka") {
    return "catVoice";
  }

  if (petId === "el-kruk") {
    return "crowVoice";
  }

  if (petId === "malpka-jasnoksieznik") {
    return "monkeyVoice";
  }

  return null;
}

function getGameResultSoundEffect(status) {
  if (status === "Zwyciestwo" || status === "Zwycięstwo") {
    return "victoryResult";
  }

  if (status === "Przegrana") {
    return "defeatResult";
  }

  if (status === "Zakonczyles runde" || status === "Zakończyłeś rundę") {
    return "roundEndResult";
  }

  return null;
}

function playWaveIntroSound() {
  playOneShotSound("roundEndResult", 0.82);
}

function updatePetVoiceAmbient(deltaMs) {
  const pet = getEquippedPet();
  const soundEffect = getPetVoiceEffect(pet?.id);

  if (!soundEffect) {
    game.pet.voiceTimerMs = 0;
    return;
  }

  game.pet.voiceTimerMs += deltaMs;

  while (game.pet.voiceTimerMs >= 10000) {
    game.pet.voiceTimerMs -= 10000;
    playOneShotSound(soundEffect, 0.74);
  }
}

function updateProgress(value) {
  if (loadingFillText) {
    loadingFillText.textContent = `Ladowanie... ${value}%`;
  }

  if (loadingProgressFill) {
    loadingProgressFill.style.width = `${value}%`;
  }

  if (progressValue) {
    progressValue.textContent = `${value}%`;
  }
}

function showApp() {
  if (loadingScreen) {
    loadingScreen.classList.remove("active");
    loadingScreen.hidden = true;
    loadingScreen.setAttribute("aria-hidden", "true");
  }

  appScreen.classList.add("active");
  appScreen.setAttribute("aria-hidden", "false");
  backgroundMusicReady = true;
  showView("lobby");
  maybeRunIntro();
}

function showView(viewName) {
  const previousView = ui.currentView;

  if (previousView === "game" && viewName !== "game") {
    stopGameSession();
  }

  if (viewName !== "trophies") {
    closeAlleyIntro(false, false);
  }

  if (viewName !== "lobby") {
    closeSettingsPanel();
  }

  ui.currentView = viewName;

  Object.entries(viewNodes).forEach(([name, node]) => {
    const isActive = name === viewName;
    node.classList.toggle("active", isActive);
    node.setAttribute("aria-hidden", String(!isActive));
  });

  if (viewName === "game") {
    startGameSession();
    syncTouchControlsVisibility();
    syncBackgroundMusic();
    return;
  }

  if (viewName === "store") {
    renderStore();
    syncTouchControlsVisibility();
    syncBackgroundMusic();
    return;
  }

  if (viewName === "trophies") {
    renderTrophyRoad();
    syncTouchControlsVisibility();
    syncBackgroundMusic();
    openTrophyRoadIntro();
    return;
  }

  syncTouchControlsVisibility();
  syncBackgroundMusic();
}

function renderAll() {
  syncGlobalVisualTheme();
  coinBalance.textContent = String(state.coins);
  trophyBalance.textContent = String(state.trophies);
  diamondBalance.textContent = String(state.diamonds);
  renderLobby();
  renderStore();
  renderInventory();
  renderTrophyRoad();
  renderGameLoadout();
  renderSettingsPanel();
  syncTouchControlsVisibility();
  syncTabs();
  syncBrokenAssets(document);
  syncAnimatedAssets(document);
}

function getTrophyWorldById(worldId) {
  return TROPHY_WORLDS.find((world) => world.id === worldId) || TROPHY_WORLDS[0];
}

function hasClaimedWinterUnlockReward() {
  return isTrophyRewardClaimed("alley", WINTER_WORLD_UNLOCK_REWARD_ID);
}

function isWinterWorldUnlocked() {
  return hasClaimedWinterUnlockReward() && !winterWorldRevealPending;
}

function getGlobalVisualWorldTheme() {
  return isWinterWorldUnlocked() ? "winter" : "alley";
}

function syncGlobalVisualTheme() {
  if (!appScreen) {
    return;
  }

  appScreen.dataset.visualWorld = getGlobalVisualWorldTheme();
}

function getActiveTrophyWorldId() {
  const worldId = ui.trophyWorldId || state.activeTrophyWorld || TROPHY_WORLDS[0].id;
  return worldId === "winter" && !isWinterWorldUnlocked() ? "alley" : worldId;
}

function getActiveTrophyWorld() {
  return getTrophyWorldById(getActiveTrophyWorldId());
}

function getTrophyRoadThemeFromScroll() {
  if (!isWinterWorldUnlocked()) {
    return "alley";
  }
  return "winter";
}

function setActiveTrophyWorld(worldId) {
  const normalizedWorldId = worldId === "winter" && !isWinterWorldUnlocked() ? "alley" : worldId;
  const world = getTrophyWorldById(normalizedWorldId);

  ui.trophyWorldId = world.id;
  state.activeTrophyWorld = world.id;

  if (viewNodes.trophies) {
    viewNodes.trophies.dataset.roadTheme = world.id;
  }

  if (trophyGrid) {
    trophyGrid.dataset.roadTheme = world.id;
  }

  if (worldTitle) {
    worldTitle.textContent = world.name;
  }

  renderSuperAlleyControls();
}

function getTrophyWorldSection(worldId) {
  if (!trophyGrid) {
    return null;
  }

  return trophyGrid.querySelector(`[data-trophy-world="${worldId}"]`);
}

function getTrophyRoadPeekWidth(mode = "locked") {
  if (!trophyGrid) {
    return mode === "completed" ? 540 : 360;
  }

  if (mode === "completed") {
    const twoRewardPeek = (TROPHY_NODE_WIDTH * 2) + TROPHY_NODE_GAP + 80;
    return clamp(Math.min(twoRewardPeek, trophyGrid.clientWidth - 44), 360, 620);
  }

  return Math.max(320, Math.min(420, Math.round(trophyGrid.clientWidth * 0.38)));
}

function scrollTrophyRoadToWorld(worldId) {
  if (!trophyGrid) {
    return;
  }

  const section = getTrophyWorldSection(worldId);

  if (!section) {
    return;
  }

  const maxScroll = Math.max(0, trophyGrid.scrollWidth - trophyGrid.clientWidth);
  let targetScrollLeft = section.offsetLeft;

  if (worldId === "winter") {
    targetScrollLeft = isWinterWorldUnlocked()
      ? section.offsetLeft - getTrophyRoadPeekWidth("completed")
      : section.offsetLeft - trophyGrid.clientWidth + getTrophyRoadPeekWidth("locked");
  }

  trophyGrid.scrollLeft = clamp(targetScrollLeft, 0, maxScroll);
  clampTrophyRoadScrollPosition();
  syncTrophyRoadThemeFromScroll();
}

function clampTrophyRoadScrollPosition() {
  if (!trophyGrid) {
    return;
  }

  const maxScroll = Math.max(0, trophyGrid.scrollWidth - trophyGrid.clientWidth);
  let nextScrollLeft = clamp(trophyGrid.scrollLeft, 0, maxScroll);
  const winterSection = getTrophyWorldSection("winter");

  if (winterSection) {
    const winterStart = winterSection.offsetLeft;

    if (isWinterWorldUnlocked()) {
      const peekWidth = getTrophyRoadPeekWidth("completed");
      const minScroll = clamp(winterStart - peekWidth, 0, maxScroll);
      nextScrollLeft = Math.max(nextScrollLeft, minScroll);
    } else {
      const peekWidth = getTrophyRoadPeekWidth("locked");
      const maxLockedScroll = clamp(winterStart - trophyGrid.clientWidth + peekWidth, 0, maxScroll);
      nextScrollLeft = Math.min(nextScrollLeft, maxLockedScroll);
    }
  }

  if (Math.abs(nextScrollLeft - trophyGrid.scrollLeft) > 1) {
    trophyGrid.scrollLeft = nextScrollLeft;
  }
}

function syncTrophyRoadThemeFromScroll() {
  setActiveTrophyWorld(getTrophyRoadThemeFromScroll());
}

function isSuperAlleyActiveForWorld(worldId = getActiveTrophyWorldId()) {
  return worldId === "winter"
    ? Boolean(state.superAlleyWinterActive)
    : Boolean(state.superAlleyActive);
}

function setSuperAlleyActiveForWorld(worldId, isActive) {
  if (worldId === "winter") {
    state.superAlleyWinterActive = Boolean(isActive);
    return;
  }

  state.superAlleyActive = Boolean(isActive);
}

function getSuperAlleyOfferCopy(worldId) {
  return worldId === "winter"
    ? `Wybierz aktywację za ${SUPER_ALLEY_DIAMOND_PRICE} klejnotow lub ${SUPER_ALLEY_CASH_PRICE_LABEL} i odblokuj jasnoniebieskie nagrody premium.`
    : `Wybierz aktywację za ${SUPER_ALLEY_DIAMOND_PRICE} klejnotow lub ${SUPER_ALLEY_CASH_PRICE_LABEL} i odblokuj różowe nagrody premium.`;
}

function getSuperAlleyUnlockedCopy(worldId) {
  return worldId === "winter"
    ? "Nagrody Super w Świecie Zimowym są już odblokowane."
    : "Nagrody Super w Alei Pucharów są już odblokowane.";
}

function getSuperAlleySceneVisual(worldId) {
  return worldId === "winter"
    ? {
        image: "./ładowanie_2.png",
        fallbackText: "ZIMA",
      }
    : {
        image: "./ładowanie_1.png",
        fallbackText: "SUPER",
      };
}

function getSuperAlleyBlockedContent(worldId) {
  if (worldId === "winter" && !isWinterWorldUnlocked()) {
    return {
      title: "Najpierw ukoncz Swiat Magikow",
      copy: "Po odebraniu Millo jako Elfie odblokujesz zimowa Aleje Super i jej jasnoniebieskie nagrody premium.",
    };
  }

  if (worldId === "alley" && isWinterWorldUnlocked()) {
    return {
      title: "Ukończyles juz Swiat Magikow, nie mozesz go aktywowac",
      copy: "Po odebraniu Millo jako Elfie mozesz aktywowac juz tylko zimowa Aleje Super.",
    };
  }

  return null;
}

function openSettingsPanel() {
  if (!settingsBackdrop) {
    return;
  }

  renderSettingsPanel();
  settingsBackdrop.hidden = false;
}

function closeSettingsPanel() {
  if (!settingsBackdrop) {
    return;
  }

  settingsBackdrop.hidden = true;
}

function setPhoneModeEnabled(isEnabled) {
  state.phoneModeEnabled = Boolean(isEnabled);
  saveState();
  renderSettingsPanel();
  syncTouchControlsVisibility();
  renderGameModeInfo();
}

function togglePhoneMode() {
  setPhoneModeEnabled(!state.phoneModeEnabled);
}

function renderSettingsPanel() {
  if (!phoneModeToggle || !settingsPhoneStatus) {
    return;
  }

  const isEnabled = Boolean(state.phoneModeEnabled);
  phoneModeToggle.textContent = isEnabled ? "WYLACZ" : "WLACZ";
  phoneModeToggle.classList.toggle("active", isEnabled);
  settingsPhoneStatus.textContent = isEnabled
    ? "Wlaczony. W grze po lewej pojawi sie joystick, a po prawej przycisk strzalu."
    : "Wylaczony. Sterowanie zostaje na strzalkach i spacji.";
}

function renderLobby() {
  const equippedCharacter = getOwnedItem("characters", state.equippedCharacter);
  const equippedPet = getOwnedItem("pets", state.equippedPet);

  renderPreviewAssetIntoFrame(lobbyAvatarFrame, equippedCharacter, {
    elementId: "lobby-avatar",
    imageClass: "avatar-image asset-image",
    videoClass: "avatar-image asset-video",
    fallbackText: "POSTAC",
    alt: equippedCharacter?.name || "Postac",
  });

  if (equippedPet) {
    petWrapper.hidden = false;
    lobbyPet.src = equippedPet.image;
    lobbyPet.alt = equippedPet.name;
    lobbyPet.classList.remove("broken");
  } else {
    petWrapper.hidden = true;
    lobbyPet.src = "";
    lobbyPet.alt = "PlatoYa";
    lobbyPet.classList.add("broken");
  }
}

function renderStore() {
  ensureStoreOffersCurrent();
  storeGrid.className = "store-main";
  const crate = CATALOG.crates[0];
  const winterBundle = CATALOG.bundles[0];
  const dailyCharacters = getCurrentStoreOfferItems("characters", { includeOwned: true });

  const booths = [
    buildWinterBundleBooth(winterBundle),
    buildDailyCharacterBooth(dailyCharacters),
    buildCrateShopBooth(crate),
    buildCoinBooth(),
    buildTrophyBooth(),
    buildStoreCatalogBooth(),
  ].filter(Boolean);

  storeGrid.innerHTML = booths.join("");
  syncBrokenAssets(storeGrid);
  syncAnimatedAssets(storeGrid);
}

function getStoreOffersSignature() {
  const characterIds = Array.isArray(state.storeOffers?.characterIds)
    ? state.storeOffers.characterIds.join("|")
    : "";
  const nextRefreshAt = Number(state.storeOffers?.nextRefreshAt || 0);
  return `${characterIds}@${nextRefreshAt}`;
}

function updateStoreRefreshNote() {
  if (!storeGrid) {
    return;
  }

  const refreshNote = storeGrid.querySelector(".store-refresh-note");

  if (!refreshNote) {
    return;
  }

  refreshNote.textContent = `Nowe oferty codziennie o 09:00. Za ${formatRemainingTime(getStoreRefreshRemainingMs())}.`;
}

function refreshStoreViewTick() {
  const previousSignature = getStoreOffersSignature();
  ensureStoreOffersCurrent();

  if (previousSignature !== getStoreOffersSignature()) {
    renderStore();
    return;
  }

  updateStoreRefreshNote();
}

function hasCompletedMagiciansWorld() {
  return hasClaimedWinterUnlockReward();
}

function getCurrencyIconSrc(currency = "coins") {
  return currency === "diamonds" ? TROPHY_DIAMOND_IMAGE : "./monety_1.png";
}

function getCurrencyIconAlt(currency = "coins") {
  return currency === "diamonds" ? "Diamenty" : "Monety";
}

function buildCurrencyAmountMarkup(amount, currency = "coins") {
  return `
    <span class="price-inline" data-currency="${currency}">
      <span class="price-amount">${amount} x</span>
      <img class="price-icon" src="${getCurrencyIconSrc(currency)}" alt="${getCurrencyIconAlt(currency)}" />
    </span>
  `;
}

function buildCurrencyPriceChipMarkup(amount, currency = "coins") {
  return `
    <div class="item-price price-chip" data-currency="${currency}">
      ${buildCurrencyAmountMarkup(amount, currency)}
    </div>
  `;
}

function buildPreviewAssetMarkup(item, options = {}) {
  const fallbackText = options.fallbackText || item?.name || "NAGRODA";
  const alt = options.alt || item?.name || fallbackText;
  const imageClass = options.imageClass || "item-image asset-image";
  const videoClass = options.videoClass || imageClass.replace("asset-image", "asset-video");
  const imageSrc = options.imageSrc || item?.image || "";
  const previewVideo = options.usePreviewVideo === false ? "" : item?.previewVideo || "";
  const elementId = options.elementId ? ` id="${options.elementId}"` : "";

  if (previewVideo) {
    return `
      <video
        ${elementId}
        class="${videoClass}"
        src="${previewVideo}"
        poster="${imageSrc}"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        aria-label="${alt}"
      ></video>
      <div class="asset-fallback">${fallbackText}</div>
    `;
  }

  return `
    <img
      ${elementId}
      class="${imageClass}"
      src="${imageSrc}"
      alt="${alt}"
      data-fallback-text="${fallbackText}"
    />
    <div class="asset-fallback">${fallbackText}</div>
  `;
}

function renderPreviewAssetIntoFrame(frame, item, options = {}) {
  if (!frame) {
    return;
  }

  if (!item) {
    const fallbackText = options.fallbackText || "POSTAC";
    frame.innerHTML = `
      <img
        ${options.elementId ? `id="${options.elementId}"` : ""}
        class="${options.imageClass || "avatar-image asset-image"} broken"
        src=""
        alt="${fallbackText}"
        data-fallback-text="${fallbackText}"
      />
      <div class="asset-fallback">${fallbackText}</div>
    `;
    return;
  }

  frame.innerHTML = buildPreviewAssetMarkup(item, options);
  syncBrokenAssets(frame);
  syncAnimatedAssets(frame);
}

function isStoreCharacterVisibleInShop(item) {
  if (!item) {
    return false;
  }

  const worldTheme = getStoreCharacterWorldTheme(item).id;
  return isWinterWorldUnlocked() ? worldTheme === "winter" : worldTheme === "magicians";
}

function buildStoreOfferCard(kind, item, options = {}) {
  const price = Number(options.price ?? item.price ?? 0);
  const currency = options.currency || "coins";
  const alreadyOwned = isSinglePurchaseStoreItem(kind) && isOwned(kind, item.id);
  const buttonLabel = alreadyOwned
    ? "POSIADASZ"
    : options.buttonLabel || buildCurrencyAmountMarkup(price, currency);
  const disabled =
    alreadyOwned ||
    Boolean(options.disabled) ||
    (!options.allowInsufficientPreview && state.coins < price);
  const note =
    Object.prototype.hasOwnProperty.call(options, "note")
      ? options.note
      : item.storeNote || item.description || "";
  const badge = options.badge
    ? `<p class="item-note store-offer-badge">${options.badge}</p>`
    : "";
  const oldPrice = options.oldPrice
    ? `<p class="item-note store-price-old">${options.oldPrice}</p>`
    : "";
  const extraAction = options.extraAction || "";
  const worldTheme = kind === "characters" ? getStoreCharacterWorldTheme(item) : null;
  const worldRibbon = worldTheme
    ? `<p class="store-world-ribbon" data-store-world="${worldTheme.id}">${worldTheme.label}</p>`
    : "";
  const worldAttr = worldTheme ? ` data-store-world="${worldTheme.id}"` : "";
  const worldCardClass = worldTheme ? " store-world-card" : "";
  const buttonAttributes = options.buttonAttributes || "";

  return `
    <article class="item-card store-compact-card${worldCardClass}"${worldAttr}>
      ${worldRibbon}
      <div class="item-art">
        ${buildPreviewAssetMarkup(item, {
          imageClass: "item-image asset-image",
          videoClass: "item-image asset-video",
          fallbackText: item.name,
          alt: item.name,
        })}
      </div>
      <p class="item-title">${item.name}</p>
      ${badge}
      ${oldPrice}
      ${note ? `<p class="item-note">${note}</p>` : ""}
      <div class="card-actions">
        <button
          class="pixel-button small-button"
          data-store-buy="${item.id}"
          data-store-kind="${kind}"
          ${buttonAttributes}
          ${disabled ? "disabled" : ""}
        >
          ${buttonLabel}
        </button>
        ${extraAction}
      </div>
    </article>
  `;
}

function isBundleOwned(bundle) {
  if (!bundle || !Array.isArray(bundle.rewardCharacterIds) || bundle.rewardCharacterIds.length === 0) {
    return false;
  }

  return bundle.rewardCharacterIds.every((characterId) => state.ownedCharacters.includes(characterId));
}

function getBundleRewardCharacters(bundle) {
  if (!bundle || !Array.isArray(bundle.rewardCharacterIds)) {
    return [];
  }

  return bundle.rewardCharacterIds
    .map((characterId) => CATALOG.characters.find((item) => item.id === characterId) || null)
    .filter(Boolean);
}

function getStoreCharacterWorldTheme(item) {
  const worldId = item?.storeWorld || item?.worldTheme || item?.unlockWorld;

  if (worldId === "winter") {
    return { id: "winter", label: "SWIAT ZIMOWY" };
  }

  return { id: "magicians", label: "SWIAT MAGIKOW" };
}

function buildWinterBundleBooth(bundle) {
  if (!bundle || !hasCompletedMagiciansWorld() || isBundleOwned(bundle)) {
    return "";
  }

  const worldTheme = getStoreCharacterWorldTheme(bundle);
  const buttonLabel = bundle.cashPriceLabel;

  return `
    <section class="store-booth store-package-booth">
      <div class="store-booth-copy">
        <p class="item-title">Pakiet przedpremierowy</p>
        <p class="item-note">Zimowy pakiet z dwiema postaciami i wspolna wizualizacja nagrod.</p>
      </div>
      <div class="store-booth-grid">
        <article class="item-card store-compact-card store-package-card">
          <p class="store-world-ribbon" data-store-world="${worldTheme.id}">${worldTheme.label}</p>
          <div class="item-art">
            ${buildPreviewAssetMarkup(bundle, {
              imageClass: "item-image asset-image",
              videoClass: "item-image asset-video",
              fallbackText: bundle.name,
              alt: bundle.name,
              usePreviewVideo: false,
            })}
          </div>
          <p class="item-title">${bundle.name}</p>
          <p class="item-note">${bundle.description}</p>
          <div class="card-actions">
            <button
              class="pixel-button small-button"
              data-store-cash-buy="${bundle.id}"
              data-store-cash-kind="bundles"
            >
              ${buttonLabel}
            </button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function buildDailyCharacterBooth(items = []) {
  const refreshIn = formatRemainingTime(getStoreRefreshRemainingMs());
  const cards = items.length > 0
    ? items
      .slice(0, 2)
      .map((item) => buildStoreOfferCard("characters", item, {
        price: item.price,
        note: "",
        allowInsufficientPreview: true,
        buttonAttributes: 'data-store-offer-source="daily-characters"',
      }))
      .join("")
    : `
      <article class="item-card store-empty-card">
        <p class="item-title">Brak dzisiejszych ofert</p>
        <p class="item-note">Wszystkie sklepowe postacie sa juz u ciebie albo czekamy na kolejne odswiezenie.</p>
      </article>
    `;

  return `
    <section class="store-booth store-character-booth">
      <div class="store-booth-copy">
        <p class="item-title">2 dzisiejsze postacie sklepu</p>
        <p class="item-note store-refresh-note">Nowe oferty codziennie o 09:00. Za ${refreshIn}.</p>
      </div>
      <div class="store-booth-grid">
        ${cards}
      </div>
    </section>
  `;
}

function getStoreCatalogCharacters() {
  return getStoreOfferCandidates("characters");
}

function buildStoreCatalogBooth() {
  const items = getStoreCatalogCharacters();

  if (items.length === 0) {
    return "";
  }

  return `
    <section class="store-booth store-catalog-booth">
      <div class="store-booth-copy">
        <p class="item-title">Katalog sklepowych skinow</p>
        <p class="item-note">Tutaj zobaczysz wszystkie sklepowe postacie. Ten katalog sluzy tylko do podgladu.</p>
      </div>
      <div class="store-catalog-grid">
        ${items
          .map((item) => {
            const worldTheme = getStoreCharacterWorldTheme(item);

            return `
            <article class="item-card store-compact-card store-catalog-card store-world-card" data-store-world="${worldTheme.id}">
              <p class="store-world-ribbon" data-store-world="${worldTheme.id}">${worldTheme.label}</p>
              <div class="item-art">
                ${buildPreviewAssetMarkup(item, {
                  imageClass: "item-image asset-image",
                  videoClass: "item-image asset-video",
                  fallbackText: item.name,
                  alt: item.name,
                })}
              </div>
              <p class="item-title">${item.name}</p>
              ${buildCurrencyPriceChipMarkup(item.price, "coins")}
              <p class="item-note">${item.storeNote || "Sklepowa postac kolekcjonerska."}</p>
              <span class="item-badge">${isOwned("characters", item.id) ? "POSIADASZ" : "KATALOG"}</span>
            </article>
          `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function buildCrateShopBooth(crate) {
  const packs = [
    { id: "crate-pack-1", amount: 1, price: 20 },
    { id: "crate-pack-2", amount: 2, price: 35 },
  ];

  return `
    <section class="store-booth">
      <div class="store-booth-copy">
        <div class="store-booth-head">
          <p class="item-title">Skrzynie</p>
          <button class="circle-icon-button" data-chest-odds="store" aria-label="Szanse skrzyni">?</button>
        </div>
      </div>
      <div class="store-booth-grid">
        ${packs
          .map(
            (pack) => `
              <article class="item-card store-compact-card">
                <div class="item-art">
                  <img
                    class="item-image asset-image"
                    src="${crate.image}"
                    alt="${crate.name}"
                    data-fallback-text="${crate.fallbackText}"
                  />
                  <div class="asset-fallback">${crate.fallbackText}</div>
                </div>
                <p class="item-title">${pack.amount} x Drewniana Skrzynia</p>
                <div class="card-actions">
                  <button class="pixel-button small-button" data-buy-crate-pack="${pack.id}" ${state.diamonds >= pack.price ? "" : "disabled"}>
                    ${buildCurrencyAmountMarkup(pack.price, "diamonds")}
                  </button>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function buildCoinBooth() {
  return `
    <section class="store-booth">
      <div class="store-booth-copy">
        <p class="item-title">Kupno Monet</p>
        <p class="item-note">Pakiety monet do szybszych zakupow.</p>
      </div>
      <div class="store-booth-grid">
        ${CATALOG.coins
          .map(
            (item) => `
              <article class="item-card store-compact-card">
                <div class="item-art">
                  <img
                    class="item-image asset-image"
                    src="${item.image}"
                    alt="${item.name}"
                    data-fallback-text="${item.name}"
                  />
                  <div class="asset-fallback">${item.name}</div>
                </div>
                <p class="item-title">${item.name}</p>
                <div class="card-actions">
                  <button class="pixel-button small-button" data-store-buy="${item.id}" data-store-kind="coins">
                    ${item.priceLabel}
                  </button>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function buildTrophyBooth() {
  const item = CATALOG.trophies[0];

  if (!item) {
    return "";
  }

  return `
    <section class="store-booth">
      <div class="store-booth-grid">
        ${buildStoreOfferCard("trophies", item, {
          price: 1,
          note: "",
        })}
      </div>
    </section>
  `;
}

function ensureStoreOffersCurrent(force = false) {
  const now = Date.now();
  const characterPool = getStoreOfferCandidates("characters");
  const characterPoolIds = new Set(characterPool.map((item) => item.id));
  const expectedCharacterCount = Math.min(2, characterPool.length);
  if (
    force ||
    !state.storeOffers ||
    !Array.isArray(state.storeOffers.characterIds) ||
    state.storeOffers.characterIds.length !== expectedCharacterCount ||
    state.storeOffers.characterIds.some((itemId) => !characterPoolIds.has(itemId)) ||
    now >= Number(state.storeOffers.nextRefreshAt || 0)
  ) {
    regenerateStoreOffers(now);
  }
}

function regenerateStoreOffers(now = Date.now()) {
  const characterIds = pickRandomItems(getStoreOfferCandidates("characters"), 2).map((item) => item.id);
  state.storeOffers = {
    characterIds,
    petIds: [],
    nextRefreshAt: getNextStoreRefreshAt(now),
  };
  saveState();
}

function getStoreOfferCandidates(kind) {
  const items = CATALOG[kind];
  return items.filter((item) => (
    Number(item.price || 0) > 0 &&
    !isWorldLockedItem(item) &&
    (kind !== "characters" || isStoreCharacterVisibleInShop(item))
  ));
}

function getCurrentStoreOfferItems(kind, options = {}) {
  const includeOwned = Boolean(options.includeOwned);
  const ids = kind === "characters" ? state.storeOffers.characterIds : state.storeOffers.petIds;
  return (Array.isArray(ids) ? ids : [])
    .map((itemId) => CATALOG[kind].find((item) => item.id === itemId))
    .filter((item) => (
      item &&
      (kind !== "characters" || isStoreCharacterVisibleInShop(item)) &&
      (includeOwned || !isOwned(kind, item.id))
    ));
}

function pickRandomItems(items, count) {
  const pool = [...items];
  const result = [];

  while (pool.length > 0 && result.length < count) {
    const index = randomBetween(0, pool.length - 1);
    result.push(pool.splice(index, 1)[0]);
  }

  return result;
}

function getNextStoreRefreshAt(now = Date.now()) {
  const date = new Date(now);
  const next = new Date(date);
  next.setHours(9, 0, 0, 0);

  if (date >= next) {
    next.setDate(next.getDate() + 1);
  }

  return next.getTime();
}

function getStoreRefreshRemainingMs() {
  ensureStoreOffersCurrent();
  return Math.max(0, Number(state.storeOffers.nextRefreshAt || 0) - Date.now());
}

function formatRemainingTime(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

function getClaimableTrophyRewards(worldId) {
  const world = getTrophyWorldById(worldId);

  if (!world) {
    return [];
  }

  return world.rewards.filter((reward) => {
    if (state.trophies < reward.trophies || isTrophyRewardClaimed(worldId, reward)) {
      return false;
    }

    if (isSuperAlleyReward(worldId, reward) && !isSuperAlleyActiveForWorld(worldId)) {
      return false;
    }

    return true;
  });
}

function getTrophyWorldProgressPercent(world) {
  const rewards = Array.isArray(world?.rewards) ? world.rewards : [];

  if (rewards.length === 0) {
    return 0;
  }

  const totalWidth = (rewards.length * TROPHY_NODE_WIDTH) + (Math.max(0, rewards.length - 1) * TROPHY_NODE_GAP);
  const getRewardCenterPercent = (index) => {
    const center = (index * (TROPHY_NODE_WIDTH + TROPHY_NODE_GAP)) + (TROPHY_NODE_WIDTH / 2);
    return clamp((center / totalWidth) * 100, 0, 100);
  };

  if (state.trophies <= world.threshold) {
    return 0;
  }

  for (let index = 0; index < rewards.length; index += 1) {
    const reward = rewards[index];
    const previousThreshold = index === 0 ? world.threshold : rewards[index - 1].trophies;
    const previousPercent = index === 0 ? 0 : getRewardCenterPercent(index - 1);
    const nextPercent = getRewardCenterPercent(index);

    if (state.trophies <= reward.trophies) {
      const localProgress = clamp(
        (state.trophies - previousThreshold) / Math.max(1, reward.trophies - previousThreshold),
        0,
        1
      );
      return previousPercent + ((nextPercent - previousPercent) * localProgress);
    }
  }

  return 100;
}

function getTrophyWorldOverlayConfig(worldId) {
  if (worldId === "winter" && !isWinterWorldUnlocked()) {
    return {
      theme: "winter",
      visibility: "always",
      align: "start",
      image: "./ładowanie_2.png",
      fallbackText: "ZIMA",
      message: "NAJPIERW ZAKOŃCZ ŚWIAT MAGIKÓW",
    };
  }

  if (worldId === "alley" && isWinterWorldUnlocked()) {
    const claimableRewards = getClaimableTrophyRewards("alley");

    return {
      theme: "alley",
      visibility: "always",
      align: "end",
      image: "./ładowanie_1.png",
      fallbackText: "MAGIA",
      message: "UKOŃCZYŁEŚ JUŻ ŚWIAT MAGIKÓW",
      actionWorldId: claimableRewards.length > 0 ? "alley" : "",
      actionLabel: claimableRewards.length > 0 ? "Odbierz nagrody ze Świata Magików" : "",
    };
  }

  return null;
}

function renderTrophyWorldOverlay(overlay) {
  if (!overlay) {
    return "";
  }

  return `
    <div
      class="trophy-world-overlay"
      data-overlay-theme="${overlay.theme}"
      data-overlay-align="${overlay.align}"
    >
      <div class="trophy-world-overlay-scrim"></div>
      <div class="trophy-world-overlay-panel" data-overlay-align="${overlay.align}">
        <div class="trophy-world-overlay-visual">
          <div class="trophy-world-overlay-glow" data-overlay-theme="${overlay.theme}"></div>
          <div class="trophy-world-overlay-art">
            <img
              class="item-image asset-image"
              src="${overlay.image}"
              alt="${overlay.message}"
              data-fallback-text="${overlay.fallbackText}"
            />
            <div class="asset-fallback">${overlay.fallbackText}</div>
          </div>
        </div>
        <p class="trophy-world-overlay-copy" data-overlay-theme="${overlay.theme}">${overlay.message}</p>
        ${overlay.actionWorldId && overlay.actionLabel ? `
          <button
            class="pixel-button trophy-world-overlay-action"
            data-batch-claim-world="${overlay.actionWorldId}"
            ${trophyWorldBatchClaimBusy ? "disabled" : ""}
          >
            ${overlay.actionLabel}
          </button>
        ` : ""}
      </div>
    </div>
  `;
}

function getTrophyRewardUiState(worldId, reward) {
  const claimed = isTrophyRewardClaimed(worldId, reward);
  const unlocked = state.trophies >= reward.trophies;
  const requiresSuperAlley = isSuperAlleyReward(worldId, reward);
  const superAlleyBlocked = requiresSuperAlley && !isSuperAlleyActiveForWorld(worldId);
  const missingTrophies = Math.max(0, reward.trophies - state.trophies);

  if (claimed) {
    return {
      claimed,
      unlocked,
      requiresSuperAlley,
      superAlleyBlocked,
      stateId: "claimed",
      statusLabel: "ODEBRANE",
      buttonLabel: "ODEBRANE",
      buttonDisabled: true,
    };
  }

  if (!unlocked) {
    return {
      claimed,
      unlocked,
      requiresSuperAlley,
      superAlleyBlocked,
      stateId: "locked",
      statusLabel: "JESZCZE ZBIERAJ",
      buttonLabel: `BRAKUJE ${missingTrophies}`,
      buttonDisabled: true,
    };
  }

  if (superAlleyBlocked) {
    return {
      claimed,
      unlocked,
      requiresSuperAlley,
      superAlleyBlocked,
      stateId: "super-locked",
      statusLabel: "TYLKO Z AKTYWACJĄ SUPER",
      buttonLabel: "TYLKO SUPER",
      buttonDisabled: true,
    };
  }

  return {
    claimed,
    unlocked,
    requiresSuperAlley,
    superAlleyBlocked,
    stateId: "ready",
    statusLabel: "GOTOWE DO ODBIORU",
    buttonLabel: "ODBIERZ",
    buttonDisabled: false,
  };
}

function renderTrophyRoad() {
  if (!trophyGrid || !worldProgressValue || !worldTitle) {
    return;
  }

  const previousScrollLeft = trophyGrid.scrollLeft;
  worldProgressValue.textContent = String(state.trophies);
  const roadParts = [];

  TROPHY_WORLDS.forEach((world) => {
    const worldParts = [];
    const worldProgress = getTrophyWorldProgressPercent(world);
    const progressLabels = world.rewards.map((reward) => `
      <span class="trophy-world-progress-label">${reward.trophies}</span>
    `).join("");

    world.rewards.forEach((reward) => {
      const rewardUiState = getTrophyRewardUiState(world.id, reward);
      const rewardImage = getTrophyRewardImage(reward);

      worldParts.push(`
        <article
          class="item-card trophy-node ${rewardUiState.requiresSuperAlley ? "super-alley-reward" : ""}"
          data-world-theme="${world.id}"
          data-node-state="${rewardUiState.stateId}"
          ${rewardUiState.requiresSuperAlley ? `data-super-theme="${world.id}"` : ""}
        >
          ${rewardUiState.stateId === "claimed" ? `<p class="trophy-node-check" aria-hidden="true">✓</p>` : ""}
          <p class="trophy-node-status" data-node-state="${rewardUiState.stateId}">${rewardUiState.statusLabel}</p>
          <div class="item-art">
            <img
              class="item-image asset-image"
              src="${rewardImage.src}"
              alt="${reward.label}"
              data-fallback-text="${rewardImage.fallbackText}"
            />
            <div class="asset-fallback">${rewardImage.fallbackText}</div>
          </div>
          <p class="trophy-node-reward">${reward.label}</p>
          <div class="card-actions">
            <button
              class="pixel-button small-button"
              data-trophy-claim="${world.id}:${reward.id}"
              ${rewardUiState.buttonDisabled ? "disabled" : ""}
            >
              ${rewardUiState.buttonLabel}
            </button>
          </div>
        </article>
      `);
    });

    const worldOverlay = getTrophyWorldOverlayConfig(world.id);

    roadParts.push(`
      <section
        class="trophy-world-section"
        data-trophy-world="${world.id}"
        data-overlay-visibility="${worldOverlay ? worldOverlay.visibility : "never"}"
      >
        <div class="trophy-world-cards">
          ${worldParts.join("")}
        </div>
        <div class="trophy-world-progress" data-world-theme="${world.id}">
          <div class="trophy-world-progress-track">
            <div class="trophy-world-progress-fill" style="width:${worldProgress}%;"></div>
          </div>
          <div class="trophy-world-progress-labels">
            ${progressLabels}
          </div>
        </div>
        ${renderTrophyWorldOverlay(worldOverlay)}
      </section>
    `);
  });

  trophyGrid.innerHTML = roadParts.join("");
  trophyGrid.scrollLeft = Math.min(previousScrollLeft, Math.max(0, trophyGrid.scrollWidth - trophyGrid.clientWidth));
  clampTrophyRoadScrollPosition();

  syncBrokenAssets(trophyGrid);
  syncTrophyRoadThemeFromScroll();
}

function renderInventory() {
  renderWardrobeOverview();
  const items = getOwnedItems(ui.inventoryTab);

  if (ui.inventoryTab === "characters" || ui.inventoryTab === "pets") {
    inventoryGrid.className = "inventory-world-sections";
    inventoryGrid.innerHTML = buildInventoryWorldSections(ui.inventoryTab);
    syncBrokenAssets(inventoryGrid);
    return;
  }

  inventoryGrid.className = "card-grid wardrobe-grid";

  if (items.length === 0) {
    inventoryGrid.innerHTML = `
      <article class="empty-card wardrobe-empty-card">
        <div class="empty-card-art"></div>
        <p class="empty-card-title">Szafa jest pusta</p>
        <p class="empty-card-note">Kup cos w sklepie albo odbierz nagrode z Alei.</p>
      </article>
    `;
    return;
  }

  inventoryGrid.innerHTML = buildInventoryCards(ui.inventoryTab, items);

  syncBrokenAssets(inventoryGrid);
}

function getInventoryItemWorldFilterId(kind, item) {
  if (!item || (kind !== "characters" && kind !== "pets")) {
    return null;
  }

  return item.unlockWorld === "winter" ? "winter" : "magicians";
}

function buildInventoryCards(kind, items) {
  return items
    .map((item) => {
      const equipped = isEquipped(kind, item.id);
      const buttonLabel = equipped ? "AKTYWNE" : "ZALOZ";
      const note = getInventoryNote(kind, equipped);

      return `
        <article class="item-card wardrobe-card ${equipped ? "active" : ""}">
          <div class="item-art">
            ${buildPreviewAssetMarkup(item, {
              imageClass: "item-image asset-image",
              videoClass: "item-image asset-video",
              fallbackText: item.name,
              alt: item.name,
            })}
          </div>
          <p class="item-title">${item.name}</p>
          ${
            kind === "pets"
              ? `<span class="rarity-badge ${item.rarityClass}">${item.rarityLabel}</span>`
              : ""
          }
          <p class="item-note">${note}</p>
          <div class="card-actions">
            <span class="item-badge">${equipped ? "Aktywne" : "Posiadasz"}</span>
            <button
              class="pixel-button small-button"
              data-inventory-equip="${item.id}"
              data-inventory-kind="${kind}"
              ${equipped ? "disabled" : ""}
            >
              ${buttonLabel}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function buildInventoryWorldSections(kind) {
  const items = getOwnedItems(kind);

  return INVENTORY_WORLD_GROUPS.map((group) => {
    const groupItems = items.filter((item) => getInventoryItemWorldFilterId(kind, item) === group.id);
    const content = groupItems.length > 0
      ? buildInventoryCards(kind, groupItems)
      : buildInventoryWorldEmptyCard(kind, group.label);

    return `
      <section class="inventory-world-section">
        <p class="inventory-world-heading">${group.label}:</p>
        <div class="card-grid wardrobe-grid inventory-world-grid">
          ${content}
        </div>
      </section>
    `;
  }).join("");
}

function buildInventoryWorldEmptyCard(kind, worldLabel) {
  const title = kind === "pets"
    ? `Brak PlatoYasow z ${worldLabel}`
    : `Brak postaci z ${worldLabel}`;
  const note = worldLabel === "Swiat Zimowy"
    ? "Gdy odblokujesz kolejne zimowe nagrody, pojawia sie tutaj."
    : "Kup cos w sklepie albo odbierz nagrode z Alei, aby uzupelnic te miejsce.";

  return `
    <article class="empty-card wardrobe-empty-card">
      <div class="empty-card-art"></div>
      <p class="empty-card-title">${title}</p>
      <p class="empty-card-note">${note}</p>
    </article>
  `;
}

function getInventoryNote(kind, equipped) {
  if (kind === "weapons") {
    return equipped
      ? "Ta bron jest teraz zalozona do walki."
      : "Nacisnij, aby zalozyc te bron.";
  }

  if (kind === "pets") {
    return equipped
      ? "Ten PlatoYa jest teraz aktywny."
      : "Nacisnij, aby ustawic tego PlatoYasa.";
  }

  return equipped
    ? "Ta postac jest teraz aktywna."
    : "Nacisnij, aby zalozyc te postac.";
}

function renderWardrobeOverview() {
  if (!wardrobeOverview) {
    return;
  }

  const slots = [
    {
      label: "Postac",
      item: getOwnedItem("characters", state.equippedCharacter),
      emptyLabel: "Brak postaci",
      emptyNote: "Wybierz postac w szafie.",
    },
    {
      label: "PlatoYa",
      item: getOwnedItem("pets", state.equippedPet),
      emptyLabel: "Bez PlatoYasa",
      emptyNote: "Mozesz grac bez pomocnika.",
    },
    {
      label: "Bron",
      item: getOwnedItem("weapons", state.equippedWeapon),
      emptyLabel: "Brak broni",
      emptyNote: "Wybierz bron w szafie.",
    },
  ];

  wardrobeOverview.innerHTML = slots
    .map((slot) => {
      const item = slot.item;
      const name = item?.name || slot.emptyLabel;
      const note = item ? "Teraz zalozone" : slot.emptyNote;
      const image = item?.image || "";
      const fallback = item?.name || slot.emptyLabel;

      return `
        <article class="wardrobe-slot">
          <p class="wardrobe-slot-label">${slot.label}</p>
          <div class="item-art wardrobe-slot-art">
            ${item
              ? buildPreviewAssetMarkup(item, {
                imageClass: "item-image asset-image",
                videoClass: "item-image asset-video",
                fallbackText: fallback,
                alt: name,
              })
              : `
                <img
                  class="item-image asset-image broken"
                  src="${image}"
                  alt="${name}"
                  data-fallback-text="${fallback}"
                />
                <div class="asset-fallback">${fallback}</div>
              `}
          </div>
          <p class="item-title">${name}</p>
          <p class="wardrobe-slot-note">${note}</p>
        </article>
      `;
    })
    .join("");

  syncBrokenAssets(wardrobeOverview);
}

function renderGameLoadout() {
  const character = getOwnedItem("characters", state.equippedCharacter);
  const pet = getOwnedItem("pets", state.equippedPet);
  syncAmmoSlotsUI();

  renderPreviewAssetIntoFrame(gamePlayerFrame, character, {
    elementId: "game-player-image",
    imageClass: "entity-image asset-image",
    videoClass: "entity-image asset-video",
    fallbackText: character?.name || "POSTAC",
    alt: character?.name || "Postac",
  });

  if (pet) {
    gamePetEntity.hidden = false;
    gamePetImage.src = pet.image;
    gamePetImage.alt = pet.name;
    gamePetImage.classList.remove("broken");
  } else {
    gamePetEntity.hidden = true;
    gamePetImage.src = "";
    gamePetImage.alt = "PlatoYa";
    gamePetImage.classList.add("broken");
  }
}

function handleStoreClick(event) {
  const chestOddsButton = event.target.closest("[data-chest-odds]");

  if (chestOddsButton) {
    openChestOddsModal();
    return;
  }

  const cratePackButton = event.target.closest("[data-buy-crate-pack]");

  if (cratePackButton) {
    void buyDiamondCratePack(cratePackButton.dataset.buyCratePack);
    return;
  }

  const cashButton = event.target.closest("[data-store-cash-buy]");

  if (cashButton) {
    const kind = cashButton.dataset.storeCashKind;
    const itemId = cashButton.dataset.storeCashBuy;
    const item = CATALOG[kind].find((entry) => entry.id === itemId);

    if (item) {
      buyCashUnlock(kind, item);
    }
    return;
  }

  const descriptionButton = event.target.closest("[data-pet-description]");

  if (descriptionButton) {
    const petId = descriptionButton.dataset.petDescription;
    const pet = CATALOG.pets.find((entry) => entry.id === petId);

    if (pet) {
      openModal({
        title: pet.name,
        message: pet.description,
        image: pet.image,
        imageAlt: pet.name,
        buttonText: "OK",
        dismissible: true,
        onConfirm: closeModal,
      });
    }
    return;
  }

  const button = event.target.closest("[data-store-buy]");

  if (!button) {
    return;
  }

  const kind = button.dataset.storeKind;
  const itemId = button.dataset.storeBuy;
  const item = CATALOG[kind].find((entry) => entry.id === itemId);

  if (!item) {
    return;
  }

  if (isWorldLockedItem(item)) {
    openModal({
      title: item.name,
      message: getWorldLockedMessage(item),
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  if (kind === "coins") {
    buyCoinPack(item);
    return;
  }

  if (kind === "trophies") {
    buyTrophyPack(item);
    return;
  }

  if (kind === "characters" && button.dataset.storeOfferSource === "daily-characters") {
    openStoreCharacterPurchase(item);
    return;
  }

  if (state.coins < item.price) {
    openModal({
      title: "Za malo monet",
      message: "Na razie nie masz tyle monet, aby kupic ten przedmiot.",
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  buyItem(kind, item);
}

function confirmAccountReset() {
  openModal({
    title: "Restart konta",
    message: "Czy na pewno chcesz wyczyscic cale konto i zaczac od nowa?",
    buttonText: "RESETUJ",
    dismissible: true,
    onConfirm: () => {
      window.localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    },
  });
}

function handleInventoryClick(event) {
  const button = event.target.closest("[data-inventory-equip]");

  if (!button) {
    return;
  }

  const kind = button.dataset.inventoryKind;
  const itemId = button.dataset.inventoryEquip;

  if (!isOwned(kind, itemId)) {
    return;
  }

  if (kind === "characters") {
    state.equippedCharacter = itemId;
  } else if (kind === "pets") {
    state.equippedPet = itemId;
  } else if (kind === "weapons") {
    state.equippedWeapon = itemId;
  }

  saveState();
  renderAll();
}

function handleTrophyClick(event) {
  const batchClaimButton = event.target.closest("[data-batch-claim-world]");

  if (batchClaimButton) {
    if (trophyWorldBatchClaimBusy) {
      return;
    }

    void claimWorldRewardsSequentially(batchClaimButton.dataset.batchClaimWorld);
    return;
  }

  const chestOddsButton = event.target.closest("[data-chest-odds]");

  if (chestOddsButton) {
    openChestOddsModal();
    return;
  }

  const claimButton = event.target.closest("[data-trophy-claim]");

  if (!claimButton) {
    return;
  }

  const [worldId, rewardId] = claimButton.dataset.trophyClaim.split(":");
  const world = TROPHY_WORLDS.find((entry) => entry.id === worldId);
  const reward = world?.rewards.find((entry) => entry.id === rewardId);

  if (trophyWorldBatchClaimBusy || !world || !reward || state.trophies < reward.trophies || isTrophyRewardClaimed(worldId, reward)) {
    return;
  }

  void claimTrophyReward(world, reward);
}

function buyItem(kind, item) {
  if (isWorldLockedItem(item)) {
    return;
  }

  if (isSinglePurchaseStoreItem(kind) && isOwned(kind, item.id)) {
    openModal({
      title: "Juz masz ten przedmiot",
      message: `${item.name} jest juz w twojej szafie.`,
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  if (state.coins < item.price) {
    return;
  }

  state.coins -= item.price;
  ui.inventoryTab = kind;

  if (kind === "characters") {
    if (!state.ownedCharacters.includes(item.id)) {
      state.ownedCharacters.push(item.id);
    }
    state.equippedCharacter = item.id;
  } else if (kind === "pets") {
    if (!state.ownedPets.includes(item.id)) {
      state.ownedPets.push(item.id);
    }
    state.equippedPet = item.id;
  }

  saveState();
  renderAll();
  showView("inventory");

  void showRewardShowcase({
    image: item.image,
    name: item.name,
    previewVideo: item.previewVideo || "",
    soundEffectName:
      kind === "pets"
        ? getPetVoiceEffect(item.id)
        : kind === "characters"
          ? "characterUnlock"
          : null,
  });
}

function openTrophyRoadIntro() {
  if (hasClaimedWinterUnlockReward() && !state.seenWinterWorldIntro) {
    winterWorldRevealPending = true;
    renderAll();
    void playWinterWorldUnlockSequence();
    return;
  }

  if (state.seenTrophyRoadIntro) {
    return;
  }

  state.seenTrophyRoadIntro = true;
  saveState();

  void playAlleyIntro();
}

async function playWinterWorldUnlockSequence() {
  state.seenTrophyRoadIntro = true;
  state.seenWinterWorldIntro = true;
  saveState();

  await playAlleyIntroSequence([
    {
      title: "To koniec Świata Magików",
      image: "./ładowanie_1.png",
      fallbackText: "MAGICY",
      theme: "alley",
      durationMs: 2400,
    },
    {
      title: "Odblokowano Świat Zimowy!",
      image: "./ładowanie_2.png",
      fallbackText: "ZIMA",
      theme: "winter",
      durationMs: 3000,
    },
  ]);

  winterWorldRevealPending = false;
  setActiveTrophyWorld("winter");
  saveState();
  renderAll();
  scrollTrophyRoadToWorld("winter");
}

function setAlleyIntroStep({
  title,
  image,
  fallbackText = "MAGICY",
  theme = "alley",
}) {
  if (!alleyIntroBackdrop || !alleyIntroImage || !alleyIntroTitle) {
    return;
  }

  alleyIntroBackdrop.dataset.theme = theme;
  if (alleyIntroScene) {
    alleyIntroScene.dataset.theme = theme;
  }

  alleyIntroImage.src = image;
  alleyIntroImage.alt = title;
  alleyIntroImage.dataset.fallbackText = fallbackText;
  const introFallback = alleyIntroImage.nextElementSibling;
  if (introFallback) {
    introFallback.textContent = fallbackText;
  }

  alleyIntroTitle.textContent = title;
  alleyIntroBackdrop.hidden = false;
  syncBrokenAssets(alleyIntroBackdrop);
}

async function playAlleyIntroSequence(steps = []) {
  if (!alleyIntroBackdrop || steps.length === 0) {
    return;
  }

  const sequenceId = ++alleyIntroSequenceId;
  playOneShotSound("superIntro", 0.82);
  alleyIntroBackdrop.hidden = false;
  syncBackgroundMusic();

  for (const step of steps) {
    if (sequenceId !== alleyIntroSequenceId) {
      return;
    }

    setAlleyIntroStep(step);
    await wait(step.durationMs || 4200);

    if (sequenceId !== alleyIntroSequenceId) {
      return;
    }
  }

  closeAlleyIntro(false, true);
}

function playAlleyIntro() {
  return playAlleyIntroSequence([
    {
      title: "Witaj w Świecie Magików",
      image: "./ładowanie_1.png",
      fallbackText: "MAGICY",
      theme: "alley",
      durationMs: 4200,
    },
  ]);
}

function closeAlleyIntro(resetVideo = true, shouldSyncMusic = true) {
  if (!alleyIntroBackdrop) {
    return;
  }

  alleyIntroSequenceId += 1;
  alleyIntroBackdrop.hidden = true;
  delete alleyIntroBackdrop.dataset.theme;
  if (alleyIntroScene) {
    delete alleyIntroScene.dataset.theme;
  }

  if (shouldSyncMusic) {
    syncBackgroundMusic();
  }
}

function renderSuperAlleyControls() {
  if (!superAlleyButton || !superAlleyStatus) {
    return;
  }

  const world = getActiveTrophyWorld();
  const isWinterWorld = world.id === "winter";
  const isActive = isSuperAlleyActiveForWorld(world.id);
  const blockedContent = isActive ? null : getSuperAlleyBlockedContent(world.id);

  superAlleyButton.dataset.theme = world.id;
  superAlleyStatus.dataset.theme = world.id;

  if (isActive) {
    superAlleyStatus.textContent = isWinterWorld
      ? "Aleja Super Swiata Zimowego aktywna. Super nagrody sa odblokowane."
      : "Aleja Super aktywna. Super nagrody sa odblokowane.";
    superAlleyButton.textContent = "ALEJA SUPER AKTYWNA";
    superAlleyButton.disabled = true;
    superAlleyButton.classList.add("active");
    return;
  }

  if (blockedContent) {
    superAlleyStatus.textContent = blockedContent.title;
    superAlleyButton.textContent = "AKTYWUJ ALEJĘ SUPER";
    superAlleyButton.disabled = false;
    superAlleyButton.classList.remove("active");
    return;
  }

  superAlleyStatus.textContent = isWinterWorld
    ? "Aktywuj Aleję Super, aby odbierac jasnoniebieskie nagrody premium."
    : "Aktywuj Aleję Super, aby odbierac rozowe nagrody premium.";
  superAlleyButton.textContent = "AKTYWUJ ALEJĘ SUPER";
  superAlleyButton.disabled = false;
  superAlleyButton.classList.remove("active");
}

function isSuperAlleyReward(worldId, reward) {
  return Boolean(SUPER_ALLEY_REWARD_THRESHOLDS[worldId]?.has(reward.trophies));
}

function setSuperAlleySceneMode(mode = "offer", worldId = getActiveTrophyWorldId()) {
  if (!superAlleyScene || !superAlleyTitle || !superAlleyCopy || !superAlleyActions) {
    return;
  }

  const world = getTrophyWorldById(worldId);
  const successMode = mode === "success";
  const blockedContent = mode === "blocked" ? getSuperAlleyBlockedContent(world.id) : null;
  const visual = getSuperAlleySceneVisual(world.id);
  superAlleyScene.dataset.theme = world.id;
  if (superAlleyBackdrop) {
    superAlleyBackdrop.dataset.theme = world.id;
  }
  superAlleyScene.classList.toggle("success-mode", successMode);
  if (superAlleyImage) {
    superAlleyImage.src = visual.image;
    superAlleyImage.alt = successMode ? "Aktywowano Aleje Super" : "Aktywacja Alei Super";
    superAlleyImage.dataset.fallbackText = visual.fallbackText;
    const fallback = superAlleyImage.nextElementSibling;
    if (fallback) {
      fallback.textContent = visual.fallbackText;
    }
  }
  superAlleyTitle.textContent = successMode
    ? "AKTYWOWANO!"
    : blockedContent
      ? blockedContent.title
      : "Aktywuj Aleję Super";
  superAlleyCopy.textContent = successMode
    ? getSuperAlleyUnlockedCopy(world.id)
    : blockedContent
      ? blockedContent.copy
      : getSuperAlleyOfferCopy(world.id);
  superAlleyActions.hidden = successMode || Boolean(blockedContent);

  if (superAlleyCoinsButton) {
    superAlleyCoinsButton.innerHTML = buildCurrencyAmountMarkup(SUPER_ALLEY_DIAMOND_PRICE, "diamonds");
    superAlleyCoinsButton.disabled = superAlleyBusy;
  }

  if (superAlleyCashButton) {
    superAlleyCashButton.textContent = SUPER_ALLEY_CASH_PRICE_LABEL;
    superAlleyCashButton.disabled = superAlleyBusy;
  }
}

function openSuperAlleyOffer(worldId = getActiveTrophyWorldId()) {
  if (!superAlleyBackdrop || isSuperAlleyActiveForWorld(worldId) || superAlleyBusy) {
    return;
  }

  const blockedContent = getSuperAlleyBlockedContent(worldId);
  playOneShotSound("superIntro", 0.82);
  superAlleyBackdrop.dataset.worldId = worldId;
  setSuperAlleySceneMode(blockedContent ? "blocked" : "offer", worldId);
  superAlleyBackdrop.hidden = false;
  syncBrokenAssets(superAlleyBackdrop);
  syncBackgroundMusic();
}

function closeSuperAlleyBackdrop(shouldSyncMusic = true) {
  if (!superAlleyBackdrop) {
    return;
  }

  superAlleyBackdrop.hidden = true;
  delete superAlleyBackdrop.dataset.worldId;
  delete superAlleyBackdrop.dataset.theme;
  if (superAlleyScene) {
    delete superAlleyScene.dataset.theme;
  }

  if (shouldSyncMusic) {
    syncBackgroundMusic();
  }
}

async function showSuperAlleySuccessScene(worldId = getActiveTrophyWorldId()) {
  if (!superAlleyBackdrop) {
    openModal({
      title: "Aleja Super",
      message: "AKTYWOWANO!",
      buttonText: "SUPER",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  playOneShotSound("characterUnlock", 0.8);
  setSuperAlleySceneMode("success", worldId);
  superAlleyBackdrop.hidden = false;
  syncBrokenAssets(superAlleyBackdrop);
  syncBackgroundMusic();
  await wait(3200);
  closeSuperAlleyBackdrop();
}

async function activateSuperAlley(paymentMethod) {
  const worldId = superAlleyBackdrop?.dataset.worldId || getActiveTrophyWorldId();

  if (isSuperAlleyActiveForWorld(worldId) || superAlleyBusy) {
    return;
  }

  if (paymentMethod === "coins" && state.diamonds < SUPER_ALLEY_DIAMOND_PRICE) {
    openModal({
      title: "Za mało klejnotow",
      message: `Potrzebujesz ${SUPER_ALLEY_DIAMOND_PRICE} klejnotow, aby aktywowac Aleje Super tego swiata.`,
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  superAlleyBusy = true;
  setSuperAlleySceneMode("offer", worldId);

  if (paymentMethod === "coins") {
    state.diamonds -= SUPER_ALLEY_DIAMOND_PRICE;
  }

  setSuperAlleyActiveForWorld(worldId, true);
  saveState();
  renderAll();
  closeSuperAlleyBackdrop(false);
  await wait(80);
  await showSuperAlleySuccessScene(worldId);
  superAlleyBusy = false;
  renderSuperAlleyControls();
}

async function claimWorldRewardsSequentially(worldId) {
  if (trophyWorldBatchClaimBusy) {
    return;
  }

  const world = getTrophyWorldById(worldId);
  const rewards = getClaimableTrophyRewards(worldId);

  if (!world || rewards.length === 0) {
    return;
  }

  trophyWorldBatchClaimBusy = true;
  renderTrophyRoad();

  try {
    for (const reward of rewards) {
      await claimTrophyReward(world, reward, { batchMode: true });
      await wait(120);
    }
  } finally {
    trophyWorldBatchClaimBusy = false;
    renderAll();
  }
}

async function claimTrophyCrateRewardInBatch(crate, rewards = []) {
  await showRewardShowcase({
    image: crate.image,
    name: crate.name,
    countLabel: "Skrzynia z Alei",
    mode: "crate",
    autoCloseMs: 1500,
    soundEffectName: "crateAward",
  });
  playOneShotSound("crateOpen", 0.84);
  incrementOpenedCrateCount(crate.id);
  saveState();
  await wait(120);
  await grantChestRewardsDirect(rewards);
}

async function claimTrophyReward(world, reward, options = {}) {
  const batchMode = Boolean(options.batchMode);
  const hadWinterUnlockRewardClaimed = hasClaimedWinterUnlockReward();

  if (isSuperAlleyReward(world.id, reward) && !isSuperAlleyActiveForWorld(world.id)) {
    openSuperAlleyOffer(world.id);
    return;
  }

  if (!Array.isArray(state.claimedTrophyRewards[world.id])) {
    state.claimedTrophyRewards[world.id] = [];
  }

  state.claimedTrophyRewards[world.id].push(reward.id);
  const winterUnlockClaimedNow = !hadWinterUnlockRewardClaimed && hasClaimedWinterUnlockReward();

  if (winterUnlockClaimedNow) {
    winterWorldRevealPending = true;
    state.seenWinterWorldIntro = false;
  }

  if (reward.type === "coins") {
    state.coins += reward.amount;
  } else if (reward.type === "diamonds") {
    state.diamonds += reward.amount;
  } else if (reward.type === "crate") {
    const crate = CATALOG.crates.find((entry) => entry.id === reward.crateId);
    saveState();
    renderAll();

    if (crate) {
      const preparedSession = createChestSession(crate);
      if (batchMode) {
        await claimTrophyCrateRewardInBatch(crate, preparedSession.rewards);
      } else {
        void showCrateRewardScene(crate, preparedSession.rewards, preparedSession.chestNumber);
      }
    }
    return;
  } else if (reward.type === "pet") {
    if (!state.ownedPets.includes(reward.itemId)) {
      state.ownedPets.push(reward.itemId);
    }
  } else if (reward.type === "character") {
    if (!state.ownedCharacters.includes(reward.itemId)) {
      state.ownedCharacters.push(reward.itemId);
    }
  }

  saveState();
  renderAll();

  if (reward.type === "pet" || reward.type === "character") {
    const finishWinterUnlock = async () => {
      if (!winterUnlockClaimedNow) {
        return;
      }

      if (ui.currentView === "trophies") {
        await wait(140);
        await playWinterWorldUnlockSequence();
      }
    };

    if (batchMode) {
      await showAlleyRewardScene(reward);
      await finishWinterUnlock();
    } else {
      void Promise.resolve(showAlleyRewardScene(reward)).then(finishWinterUnlock);
    }
    return;
  }

  if (reward.type === "coins") {
    if (batchMode) {
      await showCoinRewardScene(reward.amount, {
        title: "Monety z Alei",
        autoCloseMs: 2200,
      });
      await animateCoinsToBalance();
    } else {
      void showCoinRewardScene(reward.amount, {
        title: "Monety z Alei",
        autoCloseMs: 2500,
      }).then(async () => {
        await animateCoinsToBalance();
      });
    }
    return;
  }

  if (reward.type === "diamonds") {
    if (batchMode) {
      await showDiamondRewardScene(reward.amount, {
        title: "Diamenty z Alei",
        autoCloseMs: 2200,
      });
    } else {
      void showDiamondRewardScene(reward.amount, {
        title: "Diamenty z Alei",
        autoCloseMs: 2500,
      });
    }
    return;
  }

  openModal({
    title: "Nagroda odebrana",
    message: `${reward.label} trafia teraz na twoje konto.`,
    buttonText: "SUPER",
    dismissible: true,
    onConfirm: closeModal,
  });
}

function isTrophyRewardClaimed(worldId, reward) {
  const rewardId = typeof reward === "object" ? reward.id : reward;
  const rewardThreshold = typeof reward === "object" ? reward.trophies : reward;

  return (
    Array.isArray(state.claimedTrophyRewards[worldId]) &&
    (
      state.claimedTrophyRewards[worldId].includes(rewardId) ||
      state.claimedTrophyRewards[worldId].includes(rewardThreshold)
    )
  );
}

function isWorldLockedItem(item) {
  if (!item || !item.unlockWorld) {
    return false;
  }

  if (item.unlockWorld === "winter") {
    return !isWinterWorldUnlocked();
  }

  return false;
}

function getTrophyRewardImage(reward) {
  if (reward.type === "coins") {
    return { src: "./monety_1.png", fallbackText: "MONETY" };
  }

  if (reward.type === "diamonds") {
    return { src: TROPHY_DIAMOND_IMAGE, fallbackText: "DIAMENTY" };
  }

  if (reward.type === "crate") {
    return { src: "./skrzynia_1.png", fallbackText: "SKRZYNIA" };
  }

  if (reward.type === "pet") {
    const pet = CATALOG.pets.find((item) => item.id === reward.itemId);
    return { src: pet?.image || "", fallbackText: pet?.name || "PLATOYA" };
  }

  if (reward.type === "character") {
    const character = CATALOG.characters.find((item) => item.id === reward.itemId);
    return { src: character?.image || "", fallbackText: character?.name || "POSTAC" };
  }

  return { src: "", fallbackText: "NAGRODA" };
}

function isWorldRewardClaimed(worldId, rewardId) {
  return Array.isArray(state.claimedTrophyRewards[worldId]) &&
    state.claimedTrophyRewards[worldId].includes(rewardId);
}

function getWorldLockedMessage(item) {
  if (!item || !item.unlockWorld) {
    return "Ten przedmiot jest teraz zablokowany.";
  }

  if (item.unlockWorld === "alley" || item.unlockWorld === "magicians") {
    return "Ten przedmiot odblokujesz w dalszej części Alei Pucharów.";
  }

  if (item.unlockWorld === "winter") {
    return "Ten przedmiot odblokujesz w dalszej części Świata Zimowego.";
  }

  return "Ten przedmiot odblokujesz w dalszej części Alei Pucharów.";
}

function setWinterBundleSceneMode(mode = "offer", bundle = activeWinterBundle) {
  if (
    !bundle ||
    !winterBundleScene ||
    !winterBundleTitle ||
    !winterBundleCopy ||
    !winterBundleActions ||
    !winterBundleImage
  ) {
    return;
  }

  const successMode = mode === "success";
  winterBundleStage = successMode ? "success" : "offer";
  winterBundleScene.dataset.theme = "winter";
  if (winterBundleBackdrop) {
    winterBundleBackdrop.dataset.theme = "winter";
  }
  winterBundleScene.classList.toggle("success-mode", successMode);
  winterBundleImage.src = bundle.image;
  winterBundleImage.alt = bundle.name;
  winterBundleImage.dataset.fallbackText = "PAKIET";
  const fallback = winterBundleImage.nextElementSibling;
  if (fallback) {
    fallback.textContent = "PAKIET";
  }
  winterBundleTitle.textContent = successMode ? "Kupiono Pakiet" : "Kup Pakiet Zimowego Świata";
  winterBundleCopy.textContent = successMode
    ? "Łyżwiarka Lily i Łyżwiaż Leo trafiaja do zimowej szafy."
    : "Potwierdz zakup, aby odblokowac Łyżwiarkę Lily i Łyżwiaża Leo.";
  winterBundleActions.hidden = successMode;

  if (winterBundleConfirmButton) {
    winterBundleConfirmButton.textContent = "Potwierdz zakup";
    winterBundleConfirmButton.disabled = winterBundleBusy;
  }
}

function openWinterBundlePurchase(bundle) {
  if (
    !bundle ||
    !winterBundleBackdrop ||
    winterBundleBusy ||
    isBundleOwned(bundle) ||
    !hasCompletedMagiciansWorld()
  ) {
    return;
  }

  activeWinterBundle = bundle;
  winterBundleBusy = false;
  setWinterBundleSceneMode("offer", bundle);
  playOneShotSound("superIntro", 0.82);
  winterBundleBackdrop.hidden = false;
  syncBrokenAssets(winterBundleBackdrop);
  syncBackgroundMusic();
}

function closeWinterBundlePurchase(shouldSyncMusic = true, options = {}) {
  const keepBundle = Boolean(options.keepBundle);
  const resetBusy = Object.prototype.hasOwnProperty.call(options, "resetBusy")
    ? Boolean(options.resetBusy)
    : true;

  if (!winterBundleBackdrop || !winterBundleScene) {
    return;
  }

  winterBundleBackdrop.hidden = true;
  delete winterBundleBackdrop.dataset.theme;
  delete winterBundleScene.dataset.theme;
  winterBundleScene.classList.remove("success-mode");
  winterBundleStage = "offer";

  if (winterBundleConfirmButton) {
    winterBundleConfirmButton.disabled = false;
  }

  if (!keepBundle) {
    activeWinterBundle = null;
  }

  if (resetBusy) {
    winterBundleBusy = false;
  }

  if (shouldSyncMusic) {
    syncBackgroundMusic();
  }
}

async function confirmWinterBundlePurchase() {
  if (!activeWinterBundle || !winterBundleBackdrop || winterBundleBusy || winterBundleStage !== "offer") {
    return;
  }

  winterBundleBusy = true;

  if (winterBundleConfirmButton) {
    winterBundleConfirmButton.disabled = true;
  }

  const bundle = activeWinterBundle;
  const rewardCharacters = getBundleRewardCharacters(bundle);

  rewardCharacters.forEach((character) => {
    if (!state.ownedCharacters.includes(character.id)) {
      state.ownedCharacters.push(character.id);
    }
  });

  saveState();
  playOneShotSound("characterUnlock", 0.8);
  setWinterBundleSceneMode("success", bundle);
  syncBrokenAssets(winterBundleBackdrop);
  await wait(2800);
  closeWinterBundlePurchase(false, { keepBundle: true, resetBusy: false });
  await showBundleUnlockScene(rewardCharacters);
  activeWinterBundle = null;
  winterBundleBusy = false;
  renderAll();
  syncBackgroundMusic();
}

function showBundleUnlockScene(characters = []) {
  if (
    characters.length < 2 ||
    !bundleUnlockBackdrop ||
    !bundleUnlockCard ||
    !bundleUnlockImageLeft ||
    !bundleUnlockImageRight ||
    !bundleUnlockNameLeft ||
    !bundleUnlockNameRight
  ) {
    return Promise.resolve();
  }

  closeBundleUnlockScene();
  const [leftCharacter, rightCharacter] = characters;

  bundleUnlockImageLeft.src = leftCharacter.image;
  bundleUnlockImageLeft.alt = leftCharacter.name;
  bundleUnlockImageLeft.dataset.fallbackText = leftCharacter.name;
  bundleUnlockNameLeft.textContent = leftCharacter.name;

  bundleUnlockImageRight.src = rightCharacter.image;
  bundleUnlockImageRight.alt = rightCharacter.name;
  bundleUnlockImageRight.dataset.fallbackText = rightCharacter.name;
  bundleUnlockNameRight.textContent = rightCharacter.name;

  bundleUnlockBackdrop.hidden = false;
  bundleUnlockCard.classList.remove("show");
  void bundleUnlockCard.offsetWidth;
  bundleUnlockCard.classList.add("show");
  syncBrokenAssets(bundleUnlockBackdrop);

  return new Promise((resolve) => {
    bundleUnlockResolve = resolve;
    bundleUnlockTimer = window.setTimeout(() => {
      closeBundleUnlockScene();
    }, 3400);
  });
}

function closeBundleUnlockScene() {
  if (bundleUnlockTimer) {
    window.clearTimeout(bundleUnlockTimer);
    bundleUnlockTimer = null;
  }

  if (!bundleUnlockBackdrop || !bundleUnlockCard) {
    return;
  }

  bundleUnlockBackdrop.hidden = true;
  bundleUnlockCard.classList.remove("show");

  if (typeof bundleUnlockResolve === "function") {
    const resolve = bundleUnlockResolve;
    bundleUnlockResolve = null;
    resolve();
  }

  syncBackgroundMusic();
}

function setStoreCharacterPurchaseScene(item = activeStoreCharacterPurchase) {
  if (
    !item ||
    !storeCharacterPurchaseScene ||
    !storeCharacterPurchaseArtFrame ||
    !storeCharacterPurchaseTitle ||
    !storeCharacterPurchaseCopy ||
    !storeCharacterPurchaseActions ||
    !storeCharacterPurchaseMissing
  ) {
    return;
  }

  const worldTheme = getStoreCharacterWorldTheme(item);
  const missingCoins = Math.max(0, Number(item.price || 0) - state.coins);
  const canAfford = missingCoins === 0;

  if (worldTheme.id === "winter") {
    storeCharacterPurchaseScene.dataset.theme = "winter";
    if (storeCharacterPurchaseBackdrop) {
      storeCharacterPurchaseBackdrop.dataset.theme = "winter";
    }
  } else {
    delete storeCharacterPurchaseScene.dataset.theme;
    if (storeCharacterPurchaseBackdrop) {
      delete storeCharacterPurchaseBackdrop.dataset.theme;
    }
  }

  renderPreviewAssetIntoFrame(storeCharacterPurchaseArtFrame, item, {
    elementId: "store-character-purchase-image",
    imageClass: "modal-image asset-image",
    videoClass: "modal-image asset-video",
    fallbackText: item.name,
    alt: item.name,
  });

  storeCharacterPurchaseTitle.textContent = item.name;
  storeCharacterPurchaseCopy.textContent = "Potwierdz zakup tej postaci.";
  storeCharacterPurchaseActions.hidden = !canAfford;
  storeCharacterPurchaseMissing.hidden = canAfford;
  storeCharacterPurchaseMissing.textContent = `Brakuje ci ${missingCoins} monet.`;

  if (storeCharacterPurchaseConfirmButton) {
    storeCharacterPurchaseConfirmButton.disabled = storeCharacterPurchaseBusy;
    storeCharacterPurchaseConfirmButton.textContent = "Potwierdz zakup";
  }
}

function openStoreCharacterPurchase(item) {
  if (!item || !storeCharacterPurchaseBackdrop || storeCharacterPurchaseBusy) {
    return;
  }

  activeStoreCharacterPurchase = item;
  storeCharacterPurchaseBusy = false;
  setStoreCharacterPurchaseScene(item);
  storeCharacterPurchaseBackdrop.hidden = false;
  syncBrokenAssets(storeCharacterPurchaseBackdrop);
  syncAnimatedAssets(storeCharacterPurchaseBackdrop);
}

function closeStoreCharacterPurchase() {
  if (!storeCharacterPurchaseBackdrop || !storeCharacterPurchaseScene) {
    return;
  }

  storeCharacterPurchaseBackdrop.hidden = true;
  delete storeCharacterPurchaseBackdrop.dataset.theme;
  delete storeCharacterPurchaseScene.dataset.theme;
  activeStoreCharacterPurchase = null;
  storeCharacterPurchaseBusy = false;

  if (storeCharacterPurchaseConfirmButton) {
    storeCharacterPurchaseConfirmButton.disabled = false;
  }
}

async function confirmStoreCharacterPurchase() {
  if (
    !activeStoreCharacterPurchase ||
    !storeCharacterPurchaseBackdrop ||
    storeCharacterPurchaseBackdrop.hidden ||
    storeCharacterPurchaseBusy
  ) {
    return;
  }

  if (state.coins < activeStoreCharacterPurchase.price) {
    setStoreCharacterPurchaseScene(activeStoreCharacterPurchase);
    return;
  }

  storeCharacterPurchaseBusy = true;
  if (storeCharacterPurchaseConfirmButton) {
    storeCharacterPurchaseConfirmButton.disabled = true;
  }

  const item = activeStoreCharacterPurchase;
  closeStoreCharacterPurchase();
  buyItem("characters", item);
}

function buyCashUnlock(kind, item) {
  if (kind === "bundles") {
    openWinterBundlePurchase(item);
    return;
  }

  openModal({
    title: item.name,
    message: "Autoryzowanie transakcji...",
    buttonText: "CZEKAJ",
    dismissible: false,
    showSpinner: true,
    onConfirm: async () => {},
  });

  modalConfirm.disabled = true;

  window.setTimeout(() => {
    openModal({
      title: item.name,
      message: "Przekaz pieniadze autorowi",
      buttonText: "ODBLOKUJ",
      dismissible: false,
      image: item.image,
      imageAlt: item.name,
      onConfirm: async () => {
        modalConfirm.disabled = true;
        closeModal();
        buyItem(kind, { ...item, price: 0 });
      },
    });
  }, 3000);
}

function buyCoinPack(item) {
  openModal({
    title: "Zakup monet",
    message: "Przekaz pieniadze autorowi",
    buttonText: `ODBIERZ ${item.amount}`,
    dismissible: false,
    image: item.image,
    imageAlt: item.name,
    onConfirm: async () => {
      modalConfirm.disabled = true;
      closeModal();
      await showRewardShowcase({
        image: item.image,
        name: "Platnosc przyjeta",
        countLabel: item.priceLabel,
        mode: "payment",
        autoCloseMs: 1700,
      });
      await showCoinRewardScene(item.amount, {
        title: "Monety",
        autoCloseMs: 2500,
      });
      await animateCoinsToBalance();
      state.coins += item.amount;
      saveState();
      renderAll();
    },
  });
}

function buyTrophyPack(item) {
  if (state.coins < item.price) {
    openModal({
      title: "Za malo monet",
      message: "Nie masz teraz tylu monet, zeby kupic ten pakiet pucharow.",
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  state.coins -= item.price;
  state.trophies += item.amount;
  saveState();
  renderAll();

  openModal({
    title: "Kupiono puchary",
    message: `Na konto trafia ${item.amount} pucharow.`,
    image: item.image,
    imageAlt: item.name,
    buttonText: "SUPER",
    dismissible: true,
    onConfirm: closeModal,
  });
}

async function buyDiamondCratePack(packId) {
  const packs = {
    "crate-pack-1": { amount: 1, price: 20 },
    "crate-pack-2": { amount: 2, price: 35 },
  };
  const pack = packs[packId];
  const crate = CATALOG.crates.find((entry) => entry.id === "drewniana-skrzynia");

  if (!pack) {
    return;
  }

  if (state.diamonds < pack.price) {
    openModal({
      title: "Za malo diamentow",
      message: "Nie masz teraz tylu diamentow, zeby kupic te paczke skrzyn.",
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  state.diamonds -= pack.price;
  saveState();
  renderAll();

  if (crate) {
    await openPurchasedCrates(crate, pack.amount);
    return;
  }
}

async function openPurchasedCrates(crate, amount = 1) {
  for (let index = 0; index < amount; index += 1) {
    const preparedSession = createChestSession(crate);
    await showCrateRewardScene(crate, preparedSession.rewards, preparedSession.chestNumber);
    await wait(120);
  }
}

function claimFreeCrate(crate) {
  const offerRemaining = getFreeCrateCount(crate.id);
  const inventoryCount = getCrateInventoryCount(crate.id);

  if (offerRemaining <= 0 && inventoryCount <= 0) {
    openModal({
      title: crate.name,
      message: "Wszystkie darmowe skrzynie z tej oferty zostały już odebrane.",
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  if (inventoryCount > 0) {
    state.crateInventory[crate.id] = inventoryCount - 1;
  } else {
    state.freeCrates[crate.id] = offerRemaining - 1;
  }

  saveState();
  renderAll();
  const preparedSession = createChestSession(crate);
  void showCrateRewardScene(crate, preparedSession.rewards, preparedSession.chestNumber);
}

function createChestSession(crate) {
  const chestNumber = getOpenedCrateCount(crate.id) + 1;

  return {
    crate,
    chestNumber,
    rewards: buildChestRewards(crate, chestNumber),
    nextRewardIndex: 0,
    shownRewards: [],
    busy: false,
    opened: false,
    summaryShown: false,
  };
}

function openChestScene(crate, preparedSession = null) {
  chestSession = preparedSession || createChestSession(crate);

  chestTitle.textContent = crate.name;
  chestMessage.textContent = "Kliknij skrzynie, aby ja otworzyc.";
  chestScene.hidden = false;
  chestRewardCard.hidden = true;
  chestRewardCard.disabled = false;
  chestRewardCard.classList.remove("reveal");
  chestCloseButton.hidden = true;
  chestOpenButton.hidden = false;
  chestOpenButton.disabled = false;
  chestOpenButton.classList.remove("opened");
  chestImage.src = crate.image;
  chestImage.alt = crate.name;
  chestImage.classList.remove("broken");
  chestLeftImage.src = crate.image;
  chestRightImage.src = crate.image;
  chestRemaining.textContent = String(chestSession.rewards.length);
  if (chestBurstLayer) {
    chestBurstLayer.innerHTML = "";
  }
  chestBackdrop.hidden = false;
  syncBrokenAssets(chestBox);
  incrementOpenedCrateCount(crate.id);
  saveState();
}

async function revealChestReward() {
  if (!chestSession || chestSession.busy) {
    return;
  }

  if (chestSession.summaryShown) {
    return;
  }

  chestSession.busy = true;
  chestOpenButton.disabled = true;
  chestRewardCard.disabled = true;

  if (!chestSession.opened) {
    chestSession.opened = true;
    chestOpenButton.classList.add("opened");
    playOneShotSound("crateOpen", 0.84);
    await wait(260);
    await animateChestBurst(chestSession.rewards, chestBurstLayer);
    chestMessage.textContent = "Nagrody wypadly ze skrzyni.";
  }

  if (chestSession.nextRewardIndex >= chestSession.rewards.length) {
    chestSession.summaryShown = true;
    chestRemaining.textContent = "0";
    chestMessage.textContent = "To już wszystkie nagrody z tej skrzyni.";
    chestRewardCard.disabled = true;
    chestCloseButton.hidden = false;
    chestSession.busy = false;
    return;
  }

  const reward = chestSession.rewards[chestSession.nextRewardIndex];
  await grantChestReward(reward);
  chestSession.nextRewardIndex += 1;
  chestSession.shownRewards.push(reward);
  renderChestReward(reward);
  chestSession.busy = false;

  const rewardsLeft = chestSession.rewards.length - chestSession.nextRewardIndex;
  chestRemaining.textContent = String(rewardsLeft);
  chestOpenButton.disabled = true;

  if (rewardsLeft <= 0) {
    chestSession.summaryShown = true;
    chestRewardCard.disabled = true;
    chestCloseButton.hidden = false;
    chestMessage.textContent = "To już wszystkie nagrody z tej skrzyni.";
    return;
  }

  chestRewardCard.disabled = false;
  chestMessage.textContent = "Naciśnij jeszcze raz, aby zobaczyć kolejną nagrodę.";
}

function renderChestReward(reward) {
  chestRewardCard.hidden = false;
  chestRewardCard.classList.remove("reveal");
  chestRewardImage.src = reward.image;
  chestRewardImage.alt = reward.title;
  chestRewardImage.classList.remove("broken");
  chestRewardTitle.textContent = reward.title;
  chestRewardCount.textContent = reward.countLabel || "";
  chestRewardNote.textContent = reward.note;
  void chestRewardCard.offsetWidth;
  chestRewardCard.classList.add("reveal");
  syncBrokenAssets(chestRewardCard);
}

function renderChestSummary() {
  const rewards = chestSession?.shownRewards || [];
  const summaryLines = rewards.map((reward) => reward.summaryLabel).join(", ");

  chestRewardCard.hidden = false;
  chestRewardImage.src = "./skrzynia_1.png";
  chestRewardImage.alt = "Podsumowanie nagród";
  chestRewardImage.classList.remove("broken");
  chestRewardTitle.textContent = "Podsumowanie";
  chestRewardCount.textContent = `${rewards.length} nagr.`;
  chestRewardNote.textContent = summaryLines || "Brak nagród.";
  chestRewardCard.classList.remove("reveal");
  syncBrokenAssets(chestRewardCard);
}

async function grantChestReward(reward) {
  applyChestReward(reward);
}

function closeChestScene() {
  if (chestBurstLayer) {
    chestBurstLayer.innerHTML = "";
  }
  chestRewardCard.classList.remove("reveal");
  chestBackdrop.hidden = true;
  chestSession = null;
}

function buildChestRewards(crate, chestNumber) {
  if (crate.id !== "drewniana-skrzynia") {
    return [];
  }

  const rewards = [];
  const coinAmount = rollChestCoinAmount();

  rewards.push({
    type: "coins",
    amount: coinAmount,
    image: "./monety_1.png",
    title: "Monety",
    countLabel: `+${coinAmount} monet`,
    note: "Monety ze skrzyni trafiaja prosto do twojego salda.",
    summaryLabel: `${coinAmount} monet`,
  });

  const bonusReward = rollChestBonusReward();

  if (bonusReward) {
    rewards.push(bonusReward);
  }

  return rewards;
}

function rollChestCoinAmount() {
  const roll = Math.random() * 98;

  if (roll < 90) {
    return randomBetween(100, 2000);
  }

  if (roll < 95) {
    return randomBetween(2001, 4000);
  }

  return randomBetween(4001, 10000);
}

function getChestEligibleItems(kind) {
  return CATALOG[kind].filter(
    (item) =>
      !item.unlockWorld &&
      Number(item.price || 0) > 0 &&
      !isOwned(kind, item.id)
  );
}

function buildChestItemReward(kind, item) {
  return {
    type: "item",
    kind,
    item,
    image: item.image,
    title: item.name,
    countLabel: kind === "characters" ? "Postac ze skrzyni" : "PlatoYa ze skrzyni",
    note: "Nagroda bonusowa ze skrzyni trafia do twojej szafy.",
    summaryLabel: item.name,
  };
}

function rollChestBonusReward() {
  const petPool = getChestEligibleItems("pets");
  const characterPool = getChestEligibleItems("characters");
  const roll = Math.random() * 100;

  if (roll < 1.5) {
    if (petPool.length === 0) {
      return null;
    }

    const item = petPool[randomBetween(0, petPool.length - 1)];
    return buildChestItemReward("pets", item);
  }

  if (roll < 3) {
    if (characterPool.length === 0) {
      return null;
    }

    const item = characterPool[randomBetween(0, characterPool.length - 1)];
    return buildChestItemReward("characters", item);
  }

  return null;
}

function getFreeCrateCount(crateId) {
  return Number(state.freeCrates?.[crateId] || 0);
}

function getCrateInventoryCount(crateId) {
  return Number(state.crateInventory?.[crateId] || 0);
}

function addCrateToInventory(crateId, amount = 1) {
  state.crateInventory[crateId] = getCrateInventoryCount(crateId) + amount;
}

function getOpenedCrateCount(crateId) {
  return Number(state.openedCrates?.[crateId] || 0);
}

function incrementOpenedCrateCount(crateId) {
  state.openedCrates[crateId] = getOpenedCrateCount(crateId) + 1;
}

async function maybeRunIntro() {
  if (state.seenIntro || introSequenceRunning) {
    return;
  }

  introSequenceRunning = true;
  closeModal();

  try {
    if (state.introStep <= 1) {
      if (!state.ownedCharacters.includes("magik-millo")) {
        state.ownedCharacters.push("magik-millo");
      }

      state.equippedCharacter = "magik-millo";
      state.introStep = 2;
      saveState();
      renderAll();

      await showRewardShowcase({
        image: "./postac_1.png",
        name: "Magik Millo",
        soundEffectName: "characterUnlock",
      });
    }

    if (state.introStep <= 2) {
      await showCoinRewardScene(300, {
        title: "Monety na start",
        autoCloseMs: 2400,
      });
      await animateCoinsToBalance();
      state.coins += 300;
      state.introStep = 3;
      state.seenIntro = true;
      saveState();
      renderAll();
      return;
    }

    state.seenIntro = true;
    saveState();
    renderAll();
  } finally {
    introSequenceRunning = false;
  }
}

function openModal({
  title,
  message,
  image,
  imageAlt,
  buttonText,
  onConfirm,
  dismissible = true,
  showSpinner = false,
}) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modalConfirm.textContent = buttonText;
  modalConfirm.disabled = false;
  modalAction = onConfirm;
  modalDismissible = dismissible;
  modalBackdrop.hidden = false;
  modalSpinner.hidden = !showSpinner;
  modalBackdrop.classList.toggle("processing", showSpinner);
  modalBox.classList.toggle("processing", showSpinner);

  if (image) {
    modalVisual.hidden = false;
    modalImage.src = image;
    modalImage.alt = imageAlt || title;
    modalImage.classList.remove("broken");
  } else {
    modalVisual.hidden = true;
    modalImage.src = "";
    modalImage.alt = "";
  }

  syncBrokenAssets(modalBox);
}

function closeModal() {
  modalBackdrop.hidden = true;
  modalBackdrop.classList.remove("processing");
  modalBox.classList.remove("processing");
  modalAction = null;
  modalDismissible = true;
}

function showRewardShowcase({
  image,
  name,
  previewVideo = "",
  countLabel = "",
  mode = "default",
  autoCloseMs = 2800,
  interactionMode = "auto",
  onInteract = null,
  soundEffectName = null,
}) {
  if (!image || !name || !alleyRewardBackdrop || !alleyRewardCard) {
    return Promise.resolve();
  }

  if (soundEffectName) {
    playOneShotSound(soundEffectName, mode === "coin" || mode === "diamond" ? 0.82 : 0.8);
  }

  closeAlleyRewardScene();
  alleyRewardBackdrop.classList.toggle("coin-mode", mode === "coin");
  alleyRewardBackdrop.classList.toggle("diamond-mode", mode === "diamond");
  alleyRewardBackdrop.classList.toggle("trophy-mode", mode === "trophy");
  alleyRewardBackdrop.classList.toggle("payment-mode", mode === "payment");
  alleyRewardBackdrop.classList.toggle("crate-mode", mode === "crate");
  renderPreviewAssetIntoFrame(
    alleyRewardArtFrame,
    {
      image,
      name,
      previewVideo,
    },
    {
      elementId: "alley-reward-image",
      imageClass: "modal-image asset-image",
      videoClass: "modal-image asset-video",
      fallbackText: name,
      alt: name,
    },
  );
  alleyRewardName.textContent = name;
  alleyRewardCount.textContent = countLabel;
  alleyRewardCount.hidden = !countLabel;
  alleyRewardCard.classList.toggle("interactive", interactionMode === "manual");
  alleyRewardCard.classList.remove("show");
  alleyRewardCard.classList.remove("manual-show");
  alleyRewardCard.classList.remove("opening");
  alleyRewardBackdrop.hidden = false;
  alleyRewardInteractionMode = interactionMode;
  alleyRewardAction = onInteract;
  alleyRewardBusy = false;
  void alleyRewardCard.offsetWidth;
  if (interactionMode === "manual") {
    alleyRewardCard.classList.add("manual-show");
  } else {
    alleyRewardCard.classList.add("show");
  }
  syncBrokenAssets(alleyRewardBackdrop);
  syncAnimatedAssets(alleyRewardBackdrop);

  return new Promise((resolve) => {
    alleyRewardResolve = resolve;

    if (interactionMode !== "manual") {
      alleyRewardTimer = window.setTimeout(() => {
        closeAlleyRewardScene();
      }, autoCloseMs);
    }
  });
}

function getAlleyRewardItem(reward) {
  if (reward.type === "pet") {
    return CATALOG.pets.find((item) => item.id === reward.itemId) || null;
  }

  if (reward.type === "character") {
    return CATALOG.characters.find((item) => item.id === reward.itemId) || null;
  }

  return null;
}

function showAlleyRewardScene(reward) {
  const item = getAlleyRewardItem(reward);

  if (!item) {
    openModal({
      title: "Nagroda odebrana",
      message: `${reward.label} trafia teraz na twoje konto.`,
      buttonText: "SUPER",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  return showRewardShowcase({
    image: item.image,
    name: item.name,
    previewVideo: item.previewVideo || "",
    soundEffectName:
      reward.type === "pet"
        ? getPetVoiceEffect(item.id)
        : reward.type === "character"
          ? "characterUnlock"
          : null,
  });
}

function showCoinRewardScene(amount, options = {}) {
  const title = options.title || "Monety z Alei";
  const autoCloseMs = options.autoCloseMs || 2500;

  return showRewardShowcase({
    image: "./monety_1.png",
    name: title,
    countLabel: `+${amount} monet`,
    mode: "coin",
    autoCloseMs,
    soundEffectName: "coins",
  });
}

function showDiamondRewardScene(amount, options = {}) {
  const title = options.title || "Diamenty z Alei";
  const autoCloseMs = options.autoCloseMs || 2500;

  return showRewardShowcase({
    image: TROPHY_DIAMOND_IMAGE,
    name: title,
    countLabel: `+${amount} diamenty`,
    mode: "diamond",
    autoCloseMs,
    soundEffectName: "coins",
  });
}

function showTrophyRewardScene(amount, options = {}) {
  const title = options.title || "Puchary z rundy";
  const autoCloseMs = options.autoCloseMs || 2400;

  return showRewardShowcase({
    image: "./monety_2.png",
    name: title,
    countLabel: `+${amount} pucharow`,
    mode: "trophy",
    autoCloseMs,
    soundEffectName: "coins",
  });
}

function showCrateRewardScene(crate, rewards = []) {
  return showRewardShowcase({
    image: crate.image,
    name: crate.name,
    countLabel: "Nacisnij!",
    mode: "crate",
    interactionMode: "manual",
    soundEffectName: "crateAward",
    onInteract: async () => {
      playOneShotSound("crateOpen", 0.84);
      incrementOpenedCrateCount(crate.id);
      saveState();
      alleyRewardCard.classList.add("opening");
      await wait(160);
      await animateChestBurst(rewards, alleyRewardBurstLayer);
      closeAlleyRewardScene();
      await grantChestRewardsDirect(rewards);
      return false;
    },
  });
}

function closeAlleyRewardScene() {
  if (alleyRewardTimer) {
    window.clearTimeout(alleyRewardTimer);
    alleyRewardTimer = null;
  }

  if (!alleyRewardBackdrop || !alleyRewardCard) {
    return;
  }

  alleyRewardBackdrop.classList.remove("coin-mode");
  alleyRewardBackdrop.classList.remove("diamond-mode");
  alleyRewardBackdrop.classList.remove("trophy-mode");
  alleyRewardBackdrop.classList.remove("payment-mode");
  alleyRewardBackdrop.classList.remove("crate-mode");
  alleyRewardBackdrop.hidden = true;
  alleyRewardCard.classList.remove("show");
  alleyRewardCard.classList.remove("manual-show");
  alleyRewardCard.classList.remove("opening");
  alleyRewardCard.classList.remove("interactive");
  alleyRewardCount.hidden = true;
  alleyRewardCount.textContent = "";
  if (alleyRewardBurstLayer) {
    alleyRewardBurstLayer.innerHTML = "";
  }
  alleyRewardInteractionMode = "auto";
  alleyRewardAction = null;
  alleyRewardBusy = false;

  if (typeof alleyRewardResolve === "function") {
    const resolve = alleyRewardResolve;
    alleyRewardResolve = null;
    resolve();
  }
}

async function handleAlleyRewardInteraction() {
  if (
    !alleyRewardBackdrop ||
    alleyRewardBackdrop.hidden ||
    alleyRewardInteractionMode !== "manual" ||
    alleyRewardBusy
  ) {
    return;
  }

  alleyRewardBusy = true;
  let shouldClose = true;

  if (typeof alleyRewardAction === "function") {
    shouldClose = await alleyRewardAction();
  }

  if (shouldClose !== false) {
    closeAlleyRewardScene();
  }
}

async function animateChestBurst(rewards = [], burstLayer = alleyRewardBurstLayer || chestBurstLayer) {

  if (!burstLayer) {
    await wait(900);
    return;
  }

  burstLayer.innerHTML = "";
  const tokens = [];

  for (let index = 0; index < 10; index += 1) {
    const token = document.createElement("div");
    token.className = "alley-reward-burst-token coin";
    token.style.transform = `translate(-50%, -50%) scale(${randomBetween(70, 120) / 100}) rotate(${randomBetween(-20, 20)}deg)`;
    burstLayer.appendChild(token);
    tokens.push(token);
  }

  rewards
    .filter((reward) => reward.type === "item")
    .slice(0, 2)
    .forEach((reward) => {
      const token = document.createElement("div");
      token.className = "alley-reward-burst-token item";
      token.style.backgroundImage = `url("${reward.image}")`;
      token.style.transform = `translate(-50%, -50%) scale(0.5) rotate(${randomBetween(-8, 8)}deg)`;
      burstLayer.appendChild(token);
      tokens.push(token);
    });

  await wait(40);

  tokens.forEach((token, index) => {
    const isCoin = token.classList.contains("coin");
    const distanceX = isCoin
      ? randomBetween(-190, 190)
      : randomBetween(-150, 150);
    const distanceY = isCoin
      ? randomBetween(-180, 30)
      : randomBetween(-210, -20);
    const rotation = randomBetween(120, 340);
    const scale = isCoin ? randomBetween(30, 55) / 100 : randomBetween(80, 108) / 100;
    const duration = isCoin ? 820 + index * 20 : 940;
    token.style.transition = `transform ${duration}ms cubic-bezier(0.18, 0.82, 0.14, 1), opacity ${duration}ms linear`;
    token.style.opacity = "1";
    token.style.transform = `translate(calc(-50% + ${distanceX}px), calc(-50% + ${distanceY}px)) scale(${scale}) rotate(${rotation}deg)`;

    window.setTimeout(() => {
      token.style.opacity = "0";
    }, 120);
  });

  await wait(980);
  burstLayer.innerHTML = "";
}

function applyChestReward(reward) {
  if (reward.type === "coins") {
    state.coins += reward.amount;
    saveState();
    renderAll();
    return;
  }

  if (reward.type === "diamonds") {
    state.diamonds += reward.amount;
    saveState();
    renderAll();
    return;
  }

  if (reward.kind === "characters" && !state.ownedCharacters.includes(reward.item.id)) {
    state.ownedCharacters.push(reward.item.id);
  }

  if (reward.kind === "pets" && !state.ownedPets.includes(reward.item.id)) {
    state.ownedPets.push(reward.item.id);
  }

  saveState();
  renderAll();
}

async function grantChestRewardsDirect(rewards = []) {
  const hasBonusReward = rewards.some((reward) => reward.type === "item");

  for (const reward of rewards) {
    if (reward.type === "coins") {
      await showCoinRewardScene(reward.amount, {
        title: "Monety ze skrzyni",
        autoCloseMs: hasBonusReward ? 1850 : 2500,
      });
      await animateCoinsToBalance(hasBonusReward);
      applyChestReward(reward);
      continue;
    }

    if (reward.type === "diamonds") {
      applyChestReward(reward);
      await showDiamondRewardScene(reward.amount, {
        title: reward.title || "Diamenty ze skrzyni",
        autoCloseMs: 2500,
      });
      continue;
    }

    applyChestReward(reward);
    await showRewardShowcase({
      image: reward.image,
      name: reward.title,
      previewVideo: reward.item?.previewVideo || "",
      countLabel: reward.countLabel || "Nagroda ze skrzyni",
      autoCloseMs: 2300,
      soundEffectName:
        reward.kind === "pets"
          ? getPetVoiceEffect(reward.item.id)
          : reward.kind === "characters"
            ? "characterUnlock"
            : null,
    });
  }
}

function openChestOddsModal() {
  openModal({
    title: "Szanse skrzyni",
    message: "Skrzynia zawsze daje monety: 90% na 100-2000, 5% na 2001-4000, 3% na 4001-10000. Dodatkowo jest 1,5% na sklepowego PlatoYa i 1,5% na sklepowa postac. Przedmioty z Alei nie wypadaja ze skrzyni.",
    image: "./skrzynia_1.png",
    imageAlt: "Szanse skrzyni",
    buttonText: "OK",
    dismissible: true,
    onConfirm: closeModal,
  });
}

async function animateCoinsToBalance(fastMode = false) {
  const target = balanceTarget.getBoundingClientRect();
  const startX = window.innerWidth / 2 - 24;
  const startY = window.innerHeight / 2 - 24;
  const targetX = target.left + target.width / 2 - 24;
  const targetY = target.top + target.height / 2 - 24;
  const flyers = [];
  const baseDuration = fastMode ? 520 : 760;
  const endWait = fastMode ? 760 : 1100;

  for (let index = 0; index < 10; index += 1) {
    const flyer = document.createElement("div");
    flyer.className = "coin-flyer";
    const size = randomBetween(38, 52);
    const offsetX = randomBetween(-50, 50);
    const offsetY = randomBetween(-36, 36);
    const scale = randomBetween(75, 120) / 100;
    const rotation = randomBetween(-26, 26);
    flyer.style.left = `${startX}px`;
    flyer.style.top = `${startY}px`;
    flyer.style.width = `${size}px`;
    flyer.style.height = `${size}px`;
    flyer.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale}) rotate(${rotation}deg)`;
    flyer.style.opacity = "0";
    document.body.appendChild(flyer);
    flyers.push(flyer);
  }

  await wait(70);

  flyers.forEach((flyer, index) => {
    const arcX = targetX - startX + randomBetween(-18, 18) + index * 2;
    const arcY = targetY - startY - randomBetween(8, 26) - index * 4;
    const duration = baseDuration + index * (fastMode ? 18 : 28);
    flyer.style.transition = `transform ${duration}ms cubic-bezier(0.18, 0.82, 0.14, 1), opacity ${duration}ms linear`;
    flyer.style.transform = `translate(${arcX}px, ${arcY}px) scale(0.2) rotate(${randomBetween(180, 420)}deg)`;
    flyer.style.opacity = "1";

    window.setTimeout(() => {
      flyer.style.opacity = "0";
    }, 60);
  });

  await wait(endWait);
  flyers.forEach((flyer) => flyer.remove());
}

async function animateTrophiesToBalance() {
  if (!trophyBalanceTarget) {
    await wait(700);
    return;
  }

  const target = trophyBalanceTarget.getBoundingClientRect();
  const startX = window.innerWidth / 2 - 24;
  const startY = window.innerHeight / 2 - 24;
  const targetX = target.left + target.width / 2 - 24;
  const targetY = target.top + target.height / 2 - 24;
  const flyers = [];

  for (let index = 0; index < 8; index += 1) {
    const flyer = document.createElement("div");
    flyer.className = "trophy-flyer";
    const size = randomBetween(40, 54);
    const offsetX = randomBetween(-42, 42);
    const offsetY = randomBetween(-34, 34);
    const scale = randomBetween(75, 118) / 100;
    const rotation = randomBetween(-20, 20);
    flyer.style.left = `${startX}px`;
    flyer.style.top = `${startY}px`;
    flyer.style.width = `${size}px`;
    flyer.style.height = `${size}px`;
    flyer.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale}) rotate(${rotation}deg)`;
    flyer.style.opacity = "0";
    document.body.appendChild(flyer);
    flyers.push(flyer);
  }

  await wait(70);

  flyers.forEach((flyer, index) => {
    const arcX = targetX - startX + randomBetween(-14, 14) + index * 2;
    const arcY = targetY - startY - randomBetween(12, 34) - index * 5;
    const duration = 720 + index * 24;
    flyer.style.transition = `transform ${duration}ms cubic-bezier(0.18, 0.82, 0.14, 1), opacity ${duration}ms linear`;
    flyer.style.transform = `translate(${arcX}px, ${arcY}px) scale(0.2) rotate(${randomBetween(180, 420)}deg)`;
    flyer.style.opacity = "1";

    window.setTimeout(() => {
      flyer.style.opacity = "0";
    }, 60);
  });

  await wait(1080);
  flyers.forEach((flyer) => flyer.remove());
}

function createGameState() {
  return {
    active: false,
    animationId: 0,
    lastFrameTime: 0,
    lastShotAt: -Infinity,
    nextRobotId: 1,
    nextProjectileId: 1,
    width: 0,
    height: 0,
    keys: {
      up: false,
      down: false,
      left: false,
      right: false,
      fire: false,
    },
    touch: {
      moveX: 0,
      moveY: 0,
      movePointerId: null,
      firePressed: false,
      firePointerId: null,
    },
    player: {
      x: 0,
      y: 0,
      hp: GAME_RULES.playerMaxHp,
    },
    pet: {
      x: 0,
      y: 0,
      attackTimer: 0,
      attackTimerMs: 0,
      castTimerMsSecondary: 0,
      pickupSpawnTimerMs: 0,
      healTimerMs: 0,
      castTimerMs: 0,
      voiceTimerMs: 0,
      mode: "a",
      shieldActive: false,
      shieldTimerMs: 0,
      shieldCooldownMs: 0,
      targetId: null,
    },
    petPack: [],
    hadActiveRobots: false,
    ammo: [],
    ammoRechargeDurations: [],
    ammoUiKey: "",
    energyBuffMs: 0,
    currentWave: 0,
    pendingWave: 1,
    waveIntroMs: 3000,
    waveSpawnTimerMs: 0,
    waveRobotsRemaining: 0,
    currentWaveConfig: null,
    robotsKilledTotal: 0,
    trophiesEarnedRun: 0,
    resultStatus: "Koniec rundy",
    resultNote: "Twoje statystyki z tej rundy.",
    resultTimeouts: [],
    robots: [],
    projectiles: [],
    pickups: [],
    barriers: [],
    waterFields: [],
  };
}

function startGameSession() {
  stopGameSession();
  updateGameBounds();
  resetGameSession();
  game.active = true;
  renderGameLoadout();
  hideGameResult();
  renderGameScene();
  syncTouchControlsVisibility();
  playWaveIntroSound();
  game.lastFrameTime = performance.now();
  game.animationId = window.requestAnimationFrame(runGameFrame);
}

function stopGameSession() {
  if (!game.active && !game.animationId) {
    return;
  }

  game.active = false;
  window.cancelAnimationFrame(game.animationId);
  game.animationId = 0;
  resetGameKeys();
  petPackLayer.innerHTML = "";
  barriersLayer.innerHTML = "";
  pickupsLayer.innerHTML = "";
  waterFieldsLayer.innerHTML = "";
  robotsLayer.innerHTML = "";
  projectilesLayer.innerHTML = "";
  effectsLayer.innerHTML = "";
  hideGameResult();
  resetTouchControls();
}

function resetGameSession() {
  game.lastShotAt = -Infinity;
  game.nextRobotId = 1;
  game.nextProjectileId = 1;
  game.hadActiveRobots = false;
  game.currentWave = 0;
  game.pendingWave = 1;
  game.waveIntroMs = 3000;
  game.waveSpawnTimerMs = 0;
  game.waveRobotsRemaining = 0;
  game.currentWaveConfig = null;
  game.robotsKilledTotal = 0;
  game.trophiesEarnedRun = 0;
  game.resultStatus = "Koniec rundy";
  game.resultNote = "Twoje statystyki z tej rundy.";
  clearGameResultTimers();
  game.robots = [];
  game.projectiles = [];
  game.pickups = [];
  game.barriers = [];
  game.waterFields = [];
  setupGameAmmo();
  game.player.hp = getPlayerMaxHp();
  game.player.x = game.width / 2;
  game.player.y = game.height / 2;
  game.pet.attackTimer = 0;
  game.pet.attackTimerMs = 0;
  game.pet.castTimerMsSecondary = 0;
  game.pet.pickupSpawnTimerMs = 0;
  game.pet.healTimerMs = 0;
  game.energyBuffMs = 0;
  game.pet.castTimerMs = 0;
  game.pet.voiceTimerMs = 0;
  game.pet.mode = "a";
  game.pet.shieldActive = false;
  game.pet.shieldTimerMs = 0;
  game.pet.shieldCooldownMs = 0;
  game.pet.targetId = null;
  game.touch.moveX = 0;
  game.touch.moveY = 0;
  game.touch.movePointerId = null;
  game.touch.firePressed = false;
  game.touch.firePointerId = null;
  game.pet.x = game.player.x + 70;
  game.pet.y = game.player.y + 36;
  game.petPack = [];

  if (getEquippedPet()?.id === "sniezynka") {
    game.pet.shieldCooldownMs = GAME_RULES.snowflakeShieldCooldownMs;
  }

  updateTouchJoystickVisual(0, 0);

  if (touchFireButton) {
    touchFireButton.classList.remove("pressed");
  }
}

function setupGameAmmo() {
  game.ammoRechargeDurations = new Array(GAME_RULES.baseAmmoCount).fill(GAME_RULES.ammoRechargeSeconds);
  game.ammo = new Array(GAME_RULES.baseAmmoCount).fill(1);
  refreshAmmoConfig();
}

function syncAmmoSlotsUI() {
  if (!ammoBars) {
    return;
  }

  const slotConfig = getAmmoSlotConfig();

  ammoBars.innerHTML = slotConfig.slotTypes
    .map((slotType) => {
      const styleClass = slotType ? ` ${slotType}` : "";
      return `<div class="ammo-bar${styleClass}"><div class="ammo-fill"></div></div>`;
    })
    .join("");

  ammoFills = Array.from(ammoBars.querySelectorAll(".ammo-fill"));
  game.ammoUiKey = getAmmoUiKey(slotConfig);
}

function getAmmoSlotConfig() {
  const pet = getEquippedPet();

  if (isElKrukElfieSkinBoostActive()) {
    return {
      slotTypes: new Array(GAME_RULES.baseAmmoCount).fill("elfie-bonus"),
      rechargeDurations: new Array(GAME_RULES.baseAmmoCount).fill(
        Math.max(0.4, GAME_RULES.ammoRechargeSeconds - 0.7)
      ),
    };
  }

  if (pet && pet.id === "chomik-strazak") {
    return {
      slotTypes: new Array(GAME_RULES.baseAmmoCount).fill("bonus"),
      rechargeDurations: new Array(GAME_RULES.baseAmmoCount).fill(
        GAME_RULES.ammoRechargeSeconds + GAME_RULES.hamsterAmmoPenaltySeconds
      ),
    };
  }

  if (pet && pet.id === "waz-kaktus") {
    return {
      slotTypes: ["slow", "", ""],
      rechargeDurations: [
        GAME_RULES.ammoRechargeSeconds + 1.2,
        GAME_RULES.ammoRechargeSeconds,
        GAME_RULES.ammoRechargeSeconds,
      ],
    };
  }

  if (isCatHealingBoostActive()) {
    return {
      slotTypes: new Array(GAME_RULES.baseAmmoCount).fill("heal"),
      rechargeDurations: new Array(GAME_RULES.baseAmmoCount).fill(
        GAME_RULES.ammoRechargeSeconds / 1.33
      ),
    };
  }

  return {
    slotTypes: new Array(GAME_RULES.baseAmmoCount).fill(""),
    rechargeDurations: new Array(GAME_RULES.baseAmmoCount).fill(GAME_RULES.ammoRechargeSeconds),
  };
}

function getAmmoUiKey(slotConfig = getAmmoSlotConfig()) {
  return `${slotConfig.slotTypes.join("|")}:${slotConfig.rechargeDurations
    .map((duration) => duration.toFixed(3))
    .join("|")}`;
}

function refreshAmmoConfig() {
  const slotConfig = getAmmoSlotConfig();
  game.ammoRechargeDurations = [...slotConfig.rechargeDurations];

  if (game.ammoUiKey !== getAmmoUiKey(slotConfig)) {
    syncAmmoSlotsUI();
  }
}

function updateGameBounds() {
  const rect = gameMap.getBoundingClientRect();
  game.width = rect.width;
  game.height = rect.height;
}

function clampGameEntities() {
  game.player.x = clamp(game.player.x, 48, Math.max(48, game.width - 48));
  game.player.y = clamp(game.player.y, 90, Math.max(90, game.height - 40));
  game.pet.x = clamp(game.pet.x, 36, Math.max(36, game.width - 36));
  game.pet.y = clamp(game.pet.y, 72, Math.max(72, game.height - 36));
  game.petPack.forEach((dog) => {
    dog.x = clamp(dog.x, 36, Math.max(36, game.width - 36));
    dog.y = clamp(dog.y, 72, Math.max(72, game.height - 36));
  });
}

function runGameFrame(timestamp) {
  if (!game.active) {
    return;
  }

  const deltaMs = Math.min(40, timestamp - game.lastFrameTime || 16);
  const deltaSeconds = deltaMs / 1000;
  game.lastFrameTime = timestamp;

  updateWaveProgress(deltaMs);

  if (!game.active) {
    return;
  }

  updatePlayerMovement(deltaSeconds);
  updateAmmo(deltaSeconds);
  tryAutoFire(timestamp);
  updatePet(deltaSeconds, deltaMs);
  updatePetVoiceAmbient(deltaMs);
  updateBarriers(deltaMs);
  updatePickups(deltaMs);
  updateWaterFields(deltaSeconds);
  updateRobots(deltaSeconds);
  updateProjectiles(deltaSeconds);
  clampGameEntities();
  cleanupDeadRobots();
  renderGameScene();

  if (game.player.hp <= 0) {
    finishGameLoss();
    return;
  }

  game.animationId = window.requestAnimationFrame(runGameFrame);
}

function handleGameKey(event, isPressed) {
  if (ui.currentView !== "game") {
    return;
  }

  const key = event.key;

  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "a", "A", "s", "S", "w", "W"].includes(key)) {
    event.preventDefault();
  }

  if (key === "ArrowUp") {
    game.keys.up = isPressed;
  } else if (key === "ArrowDown") {
    game.keys.down = isPressed;
  } else if (key === "ArrowLeft") {
    game.keys.left = isPressed;
  } else if (key === "ArrowRight") {
    game.keys.right = isPressed;
  } else if (key === " ") {
    game.keys.fire = isPressed;
  } else if (isPressed && (key === "w" || key === "W")) {
    tryActivateOwlAbility();
  } else if (isPressed && (key === "a" || key === "A")) {
    setCatMode("a");
  } else if (isPressed && (key === "s" || key === "S")) {
    setCatMode("s");
  }

  syncWalkingLoop();
}

function resetGameKeys() {
  game.keys.up = false;
  game.keys.down = false;
  game.keys.left = false;
  game.keys.right = false;
  game.keys.fire = false;
  syncWalkingLoop();
}

function updatePlayerMovement(deltaSeconds) {
  if (isOwlShieldActive()) {
    return;
  }

  let dx = 0;
  let dy = 0;

  if (game.keys.left) {
    dx -= 1;
  }
  if (game.keys.right) {
    dx += 1;
  }
  if (game.keys.up) {
    dy -= 1;
  }
  if (game.keys.down) {
    dy += 1;
  }

  dx += game.touch.moveX;
  dy += game.touch.moveY;

  if (dx === 0 && dy === 0) {
    return;
  }

  const length = Math.hypot(dx, dy) || 1;
  const speed = GAME_RULES.playerSpeed * getPlayerSpeedMultiplier() * deltaSeconds;

  game.player.x += (dx / length) * speed;
  game.player.y += (dy / length) * speed;
}

function updateAmmo(deltaSeconds) {
  refreshAmmoConfig();
  game.ammo = game.ammo.map((slot, index) => {
    const rechargeDuration = game.ammoRechargeDurations[index] || GAME_RULES.ammoRechargeSeconds;
    const refillPerSecond = 1 / rechargeDuration;
    return Math.min(1, slot + refillPerSecond * deltaSeconds);
  });
}

function tryAutoFire(timestamp) {
  if (!isFireInputActive()) {
    return;
  }

  if (timestamp - game.lastShotAt < GAME_RULES.fireIntervalMs) {
    return;
  }

  const target = findNearestRobot(game.player.x, game.player.y);
  const ammoIndex = game.ammo.findIndex((slot) => slot >= 1);

  if (!target || ammoIndex === -1) {
    return;
  }

  game.ammo[ammoIndex] = 0;
  game.lastShotAt = timestamp;

  spawnProjectile({
    x: game.player.x,
    y: game.player.y - 10,
    targetId: target.id,
    kind: getPlayerProjectileKind(ammoIndex),
  });
}

function updateWaveProgress(deltaMs) {
  if (game.waveIntroMs > 0) {
    game.waveIntroMs = Math.max(0, game.waveIntroMs - deltaMs);

    if (game.waveIntroMs === 0) {
      beginWave(game.pendingWave);
    }

    return;
  }

  const waveConfig = game.currentWaveConfig || getWaveConfig(game.currentWave || 1);

  if (game.waveRobotsRemaining > 0) {
    game.waveSpawnTimerMs += deltaMs;
    const spawnIntervalMs = waveConfig.spawnIntervalMs || 2000;
    const spawnBatch = Math.max(1, waveConfig.spawnBatch || 1);

    while (game.waveRobotsRemaining > 0 && game.waveSpawnTimerMs >= spawnIntervalMs) {
      const spawnCount = Math.min(spawnBatch, game.waveRobotsRemaining);
      spawnRobotBatch(spawnCount, waveConfig);
      game.waveRobotsRemaining -= spawnCount;
      game.waveSpawnTimerMs -= spawnIntervalMs;
    }

    return;
  }

  if (game.currentWave > 0 && game.waveRobotsRemaining === 0 && game.robots.length === 0) {
    finishWave(game.currentWaveConfig || getWaveConfig(game.currentWave));
  }
}

function queueNextWave(waveNumber) {
  game.pendingWave = waveNumber;
  game.waveIntroMs = 3000;
  game.waveSpawnTimerMs = 0;
  playWaveIntroSound();
}

function beginWave(waveNumber) {
  const waveConfig = getWaveConfig(waveNumber);
  game.currentWave = waveNumber;
  game.currentWaveConfig = waveConfig;
  const initialBatch = Math.min(waveConfig.robotCount, Math.max(1, waveConfig.spawnBatch || 1));
  game.waveRobotsRemaining = Math.max(0, waveConfig.robotCount - initialBatch);
  game.waveSpawnTimerMs = 0;
  spawnRobotBatch(initialBatch, waveConfig);
}

function spawnRobotBatch(count, waveConfig) {
  for (let index = 0; index < count; index += 1) {
    spawnRobot(waveConfig);
  }
}

function finishWave(waveConfig) {
  const completionReward = waveConfig.completionReward || 0;

  if (completionReward > 0) {
    awardTrophies(completionReward);
    spawnFloatingText(game.player.x, game.player.y - 150, `+${completionReward} PUCHARÓW`, "heal");
  }

  if (waveConfig.wave >= 6) {
    finishGameVictory();
    return;
  }

  queueNextWave(waveConfig.wave + 1);
}

function spawnRobot(waveConfig = getWaveConfig(game.currentWave || 1)) {
  const robotStats = getRobotStats(waveConfig);
  const margin = 30;
  const side = randomBetween(0, 3);
  let x = margin;
  let y = margin;

  if (side === 0) {
    x = randomBetween(margin, Math.max(margin, game.width - margin));
    y = margin;
  } else if (side === 1) {
    x = Math.max(margin, game.width - margin);
    y = randomBetween(margin, Math.max(margin, game.height - margin));
  } else if (side === 2) {
    x = randomBetween(margin, Math.max(margin, game.width - margin));
    y = Math.max(margin, game.height - margin);
  } else {
    x = margin;
    y = randomBetween(margin, Math.max(margin, game.height - margin));
  }

  game.robots.push({
    id: game.nextRobotId,
    x,
    y,
    hp: robotStats.hp,
    damage: robotStats.damage,
    speed: robotStats.speed,
    rewardTrophies: waveConfig.killReward,
    attackTimer: 0,
    fieldDamageTimer: 0,
    poisonTimerMs: 0,
    poisonDamageTimer: 0,
    slowTimerMs: 0,
    slowMultiplier: 1,
    stunTimerMs: 0,
    history: [],
    bubbleTimerMs: 0,
    rewindElapsedMs: 0,
    rewindDurationMs: 0,
    rewindFromX: x,
    rewindFromY: y,
    rewindTargetX: x,
    rewindTargetY: y,
    dead: false,
  });
  game.nextRobotId += 1;
}

function updateRobots(deltaSeconds) {
  const deltaMs = deltaSeconds * 1000;

  game.robots.forEach((robot) => {
    if (robot.dead) {
      return;
    }

    rememberRobotPosition(robot, deltaMs);

    if (robot.bubbleTimerMs > 0) {
      robot.bubbleTimerMs = Math.max(0, robot.bubbleTimerMs - deltaMs);
    }

    if (robot.rewindDurationMs > 0) {
      robot.rewindElapsedMs = Math.min(robot.rewindDurationMs, robot.rewindElapsedMs + deltaMs);
      const progress = clamp(robot.rewindElapsedMs / robot.rewindDurationMs, 0, 1);
      robot.x = robot.rewindFromX + (robot.rewindTargetX - robot.rewindFromX) * progress;
      robot.y = robot.rewindFromY + (robot.rewindTargetY - robot.rewindFromY) * progress;
      robot.attackTimer = 0;

      if (progress >= 1) {
        robot.rewindDurationMs = 0;
        robot.rewindElapsedMs = 0;
      }

      return;
    }

    if (robot.stunTimerMs > 0) {
      robot.stunTimerMs = Math.max(0, robot.stunTimerMs - deltaMs);
    }

    if (robot.slowTimerMs > 0) {
      robot.slowTimerMs = Math.max(0, robot.slowTimerMs - deltaMs);
      if (robot.slowTimerMs === 0) {
        robot.slowMultiplier = 1;
      }
    }

    if (robot.poisonTimerMs > 0) {
      robot.poisonTimerMs = Math.max(0, robot.poisonTimerMs - deltaMs);
      robot.poisonDamageTimer += deltaSeconds;

      while (robot.poisonDamageTimer >= 1 && robot.poisonTimerMs > 0) {
        robot.poisonDamageTimer -= 1;
        damageRobot(robot, 45, "poison");
      }
    } else {
      robot.poisonDamageTimer = 0;
    }

    const fieldEffect = getWaterFieldEffect(robot.x, robot.y);
    robot.fieldDamageTimer = fieldEffect.insideField ? robot.fieldDamageTimer + deltaSeconds : 0;

    while (robot.fieldDamageTimer >= 1) {
      robot.fieldDamageTimer -= 1;
      damageRobot(robot, 50, "krab-syrena");
    }

    if (robot.dead) {
      return;
    }

    const contactDamage = Math.round(robot.damage * fieldEffect.damageMultiplier);

    if (robot.stunTimerMs > 0) {
      robot.attackTimer = 0;
      return;
    }

    const cage = getRobotCage(robot);

    if (cage) {
      robot.attackTimer += deltaSeconds;

      while (robot.attackTimer >= 0.1) {
        robot.attackTimer -= 0.1;
        damageBarrier(cage, contactDamage);
      }

      return;
    }

    const dx = game.player.x - robot.x;
    const dy = game.player.y - robot.y;
    const distance = Math.hypot(dx, dy) || 1;
    const moveSpeed =
      robot.speed * fieldEffect.speedMultiplier * getRobotSlowMultiplier(robot);

    if (distance > 70) {
      const step = moveSpeed * deltaSeconds;
      robot.x += (dx / distance) * step;
      robot.y += (dy / distance) * step;
      robot.attackTimer = 0;
      return;
    }

    robot.attackTimer += deltaSeconds;

    while (robot.attackTimer >= 0.1) {
      robot.attackTimer -= 0.1;
      damagePlayer(contactDamage);
    }
  });
}

function updateProjectiles(deltaSeconds) {
  const survivors = [];

  game.projectiles.forEach((projectile) => {
    const target = typeof projectile.targetId === "number"
      ? game.robots.find((robot) => robot.id === projectile.targetId && !robot.dead)
      : null;

    if (!target && projectile.kind !== "papuga-miss") {
      return;
    }

    const targetX = target ? target.x : projectile.targetX;
    const targetY = target ? target.y : projectile.targetY;
    const dx = targetX - projectile.x;
    const dy = targetY - projectile.y;
    const distance = Math.hypot(dx, dy) || 1;
    const step = GAME_RULES.projectileSpeed * deltaSeconds;

    if (distance <= step + 20) {
      if (projectile.kind === "papuga") {
        stunRobot(target, GAME_RULES.parrotStunDurationMs);
      } else if (projectile.kind === "polar-bear-shot") {
        damageRobot(target, GAME_RULES.polarBearProjectileDamage, "niedzwiedz-polarny");
      } else if (projectile.kind === "lpsotka") {
        damageRobot(target, 150, "l-psotka");

        if (!target.dead) {
          applyLpsotkaBubble(target);
        }
      } else if (projectile.kind === "papuga-miss") {
        spawnFloatingText(projectile.targetX, projectile.targetY - 24, "NIE TRAFIONO", "hit");
      } else if (projectile.kind === "snake-shot") {
        damageRobot(target, getProjectileDamage(), "player");
        slowRobot(target, 3000, 0.5);
      } else {
        damageRobot(target, getProjectileDamage(), "player");
      }
      return;
    }

    projectile.x += (dx / distance) * step;
    projectile.y += (dy / distance) * step;
    survivors.push(projectile);
  });

  game.projectiles = survivors;
}

function updatePet(deltaSeconds, deltaMs) {
  const pet = getEquippedPet();

  if (!pet) {
    game.hadActiveRobots = false;
    return;
  }

  const hasRobots = game.robots.some((robot) => !robot.dead);

  if (pet.id === "pies-magik") {
    updateDogPet(deltaSeconds);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "niedzwiedz-polarny") {
    updatePolarBearPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "kot-roslina") {
    updateCatPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "sniezynka") {
    updateSnowflakePet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "sowa") {
    updateOwlPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "papuga-manipulantka") {
    updateParrotPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "l-psotka") {
    updateLpsotkaPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "el-kruk") {
    updateElKrukPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "malpka-jasnoksieznik") {
    updateMonkeyMagePet(deltaSeconds);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "waz-kaktus") {
    updateSnakePet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "chomik-olimpijczyk") {
    updateOlympianPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "krab-syrena") {
    updateCrabPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  game.hadActiveRobots = hasRobots;
}

function updateDogPet(deltaSeconds) {
  let target = game.robots.find((robot) => robot.id === game.pet.targetId && !robot.dead);

  if (!target) {
    target = findNearestRobot(game.pet.x, game.pet.y);
    game.pet.targetId = target ? target.id : null;
  }

  const fallbackX = game.player.x + 70;
  const fallbackY = game.player.y + 34;

  if (!target) {
    movePetTowards(fallbackX, fallbackY, deltaSeconds);
    game.pet.targetId = null;
    game.pet.attackTimer = 0;
    return;
  }

  const dx = target.x - game.pet.x;
  const dy = target.y - game.pet.y;
  const distance = Math.hypot(dx, dy) || 1;

  if (distance > 58) {
    const step = GAME_RULES.dogSpeed * deltaSeconds;
    game.pet.x += (dx / distance) * step;
    game.pet.y += (dy / distance) * step;
    game.pet.attackTimer = 0;
    return;
  }

    game.pet.attackTimer += deltaSeconds;

  while (game.pet.attackTimer >= 1) {
    game.pet.attackTimer -= 1;
    damageRobot(target, GAME_RULES.dogDamagePerSecond, "pies-magik");

    if (target.dead) {
      const nextTarget = findNearestRobot(game.pet.x, game.pet.y);
      game.pet.targetId = nextTarget ? nextTarget.id : null;
      target = nextTarget;

      if (!target) {
        game.pet.attackTimer = 0;
        break;
      }
    }
  }
}

function firePolarBearShot() {
  const target = findNearestRobot(game.pet.x, game.pet.y);

  if (!target) {
    return;
  }

  spawnProjectile({
    x: game.pet.x,
    y: game.pet.y - 10,
    targetId: target.id,
    kind: "polar-bear-shot",
  });
}

function updatePolarBearPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  game.pet.castTimerMsSecondary += deltaMs;

  if (game.pet.castTimerMs > 0) {
    game.pet.castTimerMs = Math.max(0, game.pet.castTimerMs - deltaMs);

    if (game.pet.castTimerMs === 0) {
      firePolarBearShot();
    }
  }

  while (game.pet.castTimerMsSecondary >= GAME_RULES.polarBearCastIntervalMs) {
    game.pet.castTimerMsSecondary -= GAME_RULES.polarBearCastIntervalMs;
    firePolarBearShot();
    game.pet.castTimerMs = GAME_RULES.polarBearSecondShotDelayMs;
  }
}

function updateCatPet(deltaSeconds, deltaMs) {
  updateCatShield(deltaMs);

  if (getCatMode() === "s") {
    updateCatAttackMode(deltaSeconds, deltaMs);
    game.pet.healTimerMs = 0;
    return;
  }

  game.pet.attackTimerMs = 0;
  game.pet.targetId = null;
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);

  if (game.player.hp >= getPlayerMaxHp()) {
    game.pet.healTimerMs = 0;
    return;
  }

  game.pet.healTimerMs += deltaMs;

  while (game.pet.healTimerMs >= GAME_RULES.catHealIntervalMs) {
    game.pet.healTimerMs -= GAME_RULES.catHealIntervalMs;
    healPlayer(GAME_RULES.catHealAmount);
  }
}

function updateSnowflakePet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  updateSnowflakeShield(deltaMs);
}

function updateCrabPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  game.waterFields = [
    {
      x: game.player.x,
      y: game.player.y,
      radius: 156,
    },
  ];
}

function updateParrotPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  game.pet.castTimerMsSecondary += deltaMs;

  while (game.pet.castTimerMsSecondary >= GAME_RULES.parrotCastIntervalMs) {
    game.pet.castTimerMsSecondary -= GAME_RULES.parrotCastIntervalMs;
    const target = findNearestRobot(game.pet.x, game.pet.y);

    if (!target) {
      continue;
    }

    const range = getParrotRange();
    const distance = Math.hypot(target.x - game.pet.x, target.y - game.pet.y);

    if (distance > range) {
      const angle = Math.atan2(target.y - game.pet.y, target.x - game.pet.x);
      spawnProjectile({
        x: game.pet.x,
        y: game.pet.y - 10,
        targetX: game.pet.x + Math.cos(angle) * range,
        targetY: game.pet.y - 10 + Math.sin(angle) * range,
        kind: "papuga-miss",
      });
      continue;
    }

    spawnProjectile({
      x: game.pet.x,
      y: game.pet.y - 10,
      targetId: target.id,
      kind: "papuga",
    });
  }
}

function updateLpsotkaPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  game.pet.castTimerMsSecondary += deltaMs;

  while (game.pet.castTimerMsSecondary >= GAME_RULES.lpsotkaCastIntervalMs) {
    game.pet.castTimerMsSecondary -= GAME_RULES.lpsotkaCastIntervalMs;
    const target = findNearestRobot(game.pet.x, game.pet.y);

    if (!target) {
      continue;
    }

    spawnProjectile({
      x: game.pet.x,
      y: game.pet.y - 10,
      targetId: target.id,
      kind: "lpsotka",
    });
  }
}

function updateElKrukPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);

  if (game.player.hp >= getPlayerMaxHp()) {
    game.pet.healTimerMs = 0;
    return;
  }

  game.pet.healTimerMs += deltaMs;

  while (game.pet.healTimerMs >= 5000) {
    game.pet.healTimerMs -= 5000;
    healPlayer(500);
  }
}

function updateMonkeyMagePet(deltaSeconds) {
  let target = game.robots.find((robot) => robot.id === game.pet.targetId && !robot.dead);
  const playerNeedsHeal = game.player.hp < getPlayerMaxHp();

  if (!target && playerNeedsHeal) {
    movePetTowardsWithSpeed(
      game.player.x + 48,
      game.player.y - 10,
      deltaSeconds,
      GAME_RULES.monkeyLeapSpeed
    );

    const distanceToPlayer = Math.hypot(game.pet.x - game.player.x, game.pet.y - game.player.y);

    if (distanceToPlayer > 56) {
      game.pet.attackTimer = 0;
      return;
    }

    game.pet.attackTimer += deltaSeconds;

    while (game.pet.attackTimer >= 1 && game.player.hp < getPlayerMaxHp()) {
      game.pet.attackTimer -= 1;
      healPlayer(GAME_RULES.monkeyHealPerSecond);
    }

    if (game.player.hp >= getPlayerMaxHp()) {
      game.pet.attackTimer = 0;
    }

    return;
  }

  if (!target) {
    target = findNearestRobot(game.pet.x, game.pet.y);
    game.pet.targetId = target ? target.id : null;
  }

  if (!target) {
    game.pet.targetId = null;
    game.pet.attackTimer = 0;
    movePetTowardsWithSpeed(
      game.player.x + 70,
      game.player.y + 34,
      deltaSeconds,
      GAME_RULES.monkeyLeapSpeed
    );
    return;
  }

  const dx = target.x - game.pet.x;
  const dy = target.y - game.pet.y;
  const distance = Math.hypot(dx, dy) || 1;

  if (distance > 58) {
    const step = GAME_RULES.monkeyLeapSpeed * deltaSeconds;
    game.pet.x += (dx / distance) * Math.min(step, distance);
    game.pet.y += (dy / distance) * Math.min(step, distance);
    game.pet.attackTimer = 0;
    return;
  }

  game.pet.attackTimer += deltaSeconds;

  while (game.pet.attackTimer >= 1) {
    game.pet.attackTimer -= 1;
    damageRobot(target, GAME_RULES.monkeyDamagePerSecond, "malpka-jasnoksieznik");

    if (target.dead) {
      game.pet.targetId = null;
      game.pet.attackTimer = 0;
      break;
    }
  }
}

function updateSnakePet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
}

function updateOlympianPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);

  if (isOlympianBuffActive() || game.pickups.length > 0) {
    return;
  }

  game.pet.pickupSpawnTimerMs += deltaMs;

  while (game.pet.pickupSpawnTimerMs >= GAME_RULES.energySpawnMs) {
    game.pet.pickupSpawnTimerMs -= GAME_RULES.energySpawnMs;
    spawnEnergyPickup();
  }
}

function movePetTowards(targetX, targetY, deltaSeconds) {
  movePetTowardsWithSpeed(
    targetX,
    targetY,
    deltaSeconds,
    GAME_RULES.dogSpeed * getPetFollowSpeedMultiplier()
  );
}

function movePetTowardsWithSpeed(targetX, targetY, deltaSeconds, speed) {
  const dx = targetX - game.pet.x;
  const dy = targetY - game.pet.y;
  const distance = Math.hypot(dx, dy) || 1;

  if (distance < 6) {
    game.pet.x = targetX;
    game.pet.y = targetY;
    return;
  }

  const step = speed * deltaSeconds;
  game.pet.x += (dx / distance) * Math.min(step, distance);
  game.pet.y += (dy / distance) * Math.min(step, distance);
}

function damagePlayer(amount) {
  if (game.player.hp <= 0) {
    return;
  }

  if (isSnowflakeShieldActive() || isOwlShieldActive()) {
    return;
  }

  const reducedAmount = isCatShieldActive()
    ? Math.max(1, Math.round(amount * (1 - GAME_RULES.catShieldDamageReduction)))
    : amount;

  game.player.hp = Math.max(0, game.player.hp - reducedAmount);
  spawnFloatingText(game.player.x, game.player.y - 120, `-${reducedAmount}`, "hit");
}

function awardCoins(amount) {
  state.coins += amount;
  coinBalance.textContent = String(state.coins);
  saveState();
}

function awardTrophies(amount) {
  state.trophies += amount;
  game.trophiesEarnedRun += amount;
  trophyBalance.textContent = String(state.trophies);
  saveState();
}

function getRobotKillReward() {
  const baseReward = getWaveConfig(game.currentWave || 1).killReward;
  return baseReward + (getEquippedPet()?.id === "waz-kaktus" ? 1 : 0);
}

function healPlayer(amount) {
  const boostedAmount = isOlympianBuffActive() ? amount * 2 : amount;
  const realHeal = Math.min(boostedAmount, getPlayerMaxHp() - game.player.hp);

  if (realHeal <= 0) {
    return;
  }

  game.player.hp += realHeal;
  spawnFloatingText(game.player.x, game.player.y - 120, `+${realHeal}`, "heal");
}

function damageRobot(robot, amount, source = "generic") {
  if (!robot || robot.dead) {
    return;
  }

  const appliedDamage = Math.min(amount, robot.hp);
  robot.hp = Math.max(0, robot.hp - amount);
  spawnFloatingText(robot.x, robot.y - 92, `-${appliedDamage}`, "hit");

  if (robot.hp <= 0) {
    robot.dead = true;
    game.robotsKilledTotal += 1;
    awardTrophies(getRobotKillReward());
  }
}

function damageBarrier(barrier, amount) {
  if (!barrier) {
    return;
  }

  barrier.hp = Math.max(0, barrier.hp - amount);
  spawnFloatingText(barrier.x, barrier.y - barrier.size / 2 - 22, `-${amount}`, "hit");
}

function stunRobot(robot, durationMs) {
  if (!robot || robot.dead) {
    return;
  }

  robot.stunTimerMs = Math.max(robot.stunTimerMs || 0, durationMs);
  spawnFloatingText(robot.x, robot.y - 118, "STOP", "heal");
}

function rememberRobotPosition(robot, deltaMs) {
  if (!robot || robot.dead) {
    return;
  }

  const history = Array.isArray(robot.history) ? robot.history : [];
  history.forEach((entry) => {
    entry.ageMs += deltaMs;
  });
  history.push({ x: robot.x, y: robot.y, ageMs: 0 });
  robot.history = history.filter((entry) => entry.ageMs <= GAME_RULES.lpsotkaBubbleRewindMs + 250);
}

function getRobotPastPosition(robot, lookbackMs) {
  const history = Array.isArray(robot?.history) ? robot.history : [];

  if (history.length === 0) {
    return { x: robot.x, y: robot.y };
  }

  let bestEntry = history[0];
  let bestDiff = Math.abs(bestEntry.ageMs - lookbackMs);

  history.forEach((entry) => {
    const diff = Math.abs(entry.ageMs - lookbackMs);

    if (diff < bestDiff) {
      bestEntry = entry;
      bestDiff = diff;
    }
  });

  return { x: bestEntry.x, y: bestEntry.y };
}

function applyLpsotkaBubble(robot) {
  if (!robot || robot.dead) {
    return;
  }

  const pastPosition = getRobotPastPosition(robot, GAME_RULES.lpsotkaBubbleRewindMs);
  robot.bubbleTimerMs = Math.max(robot.bubbleTimerMs || 0, GAME_RULES.lpsotkaBubbleRewindMs);
  robot.rewindFromX = robot.x;
  robot.rewindFromY = robot.y;
  robot.rewindTargetX = pastPosition.x;
  robot.rewindTargetY = pastPosition.y;
  robot.rewindElapsedMs = 0;
  robot.rewindDurationMs = GAME_RULES.lpsotkaBubbleRewindMs;
  robot.stunTimerMs = Math.max(robot.stunTimerMs || 0, GAME_RULES.lpsotkaBubbleRewindMs);
  spawnFloatingText(robot.x, robot.y - 118, "PSOTKA", "heal");
}

function poisonRobot(robot, durationMs) {
  if (!robot || robot.dead) {
    return;
  }

  robot.poisonTimerMs = Math.max(robot.poisonTimerMs || 0, durationMs);
  robot.poisonDamageTimer = 0;
  spawnFloatingText(robot.x, robot.y - 118, "TRUCIZNA", "heal");
}

function slowRobot(robot, durationMs, speedMultiplier = 0.5) {
  if (!robot || robot.dead) {
    return;
  }

  robot.slowTimerMs = Math.max(robot.slowTimerMs || 0, durationMs);
  robot.slowMultiplier = Math.min(robot.slowMultiplier || 1, speedMultiplier);
  spawnFloatingText(robot.x, robot.y - 118, "SLOW", "heal");
}

function updateBarriers(deltaMs) {
  game.barriers = game.barriers
    .map((barrier) => ({
      ...barrier,
      ttlMs: barrier.ttlMs - deltaMs,
    }))
    .filter((barrier) => barrier.ttlMs > 0 && barrier.hp > 0);
}

function placeSnakeCage(target) {
  const size = GAME_RULES.snakeCageSize;
  game.barriers.push({
    id: `barrier-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    x: clamp(target.x, size / 2 + 8, Math.max(size / 2 + 8, game.width - size / 2 - 8)),
    y: clamp(target.y, size / 2 + 8, Math.max(size / 2 + 8, game.height - size / 2 - 8)),
    size,
    hp: GAME_RULES.snakeCageHp,
    ttlMs: GAME_RULES.snakeWallActiveMs,
  });
}

function getRobotCage(robot) {
  return game.barriers.find((barrier) => {
    const half = barrier.size / 2;
    return (
      robot.x >= barrier.x - half &&
      robot.x <= barrier.x + half &&
      robot.y >= barrier.y - half &&
      robot.y <= barrier.y + half
    );
  }) || null;
}

function findNearestUncagedRobots(x, y) {
  return game.robots
    .filter((robot) => !robot.dead && !getRobotCage(robot))
    .sort(
      (first, second) =>
        Math.hypot(first.x - x, first.y - y) - Math.hypot(second.x - x, second.y - y)
    );
}

function updatePickups(deltaMs) {
  const wasBuffActive = game.energyBuffMs > 0;

  if (game.energyBuffMs > 0) {
    game.energyBuffMs = Math.max(0, game.energyBuffMs - deltaMs);
  }

  const pet = getEquippedPet();

  if (!pet || pet.id !== "chomik-olimpijczyk") {
    game.pickups = [];
    game.energyBuffMs = 0;
    return;
  }

  if (wasBuffActive && game.energyBuffMs === 0) {
    game.player.hp = Math.min(game.player.hp, getPlayerMaxHp());
    game.pet.pickupSpawnTimerMs = 0;
  }

  game.pickups = game.pickups.filter((pickup) => {
    const touched = Math.hypot(pickup.x - game.player.x, pickup.y - game.player.y) <= 44;

    if (touched) {
      game.energyBuffMs = GAME_RULES.energyBuffMs;
      game.pet.pickupSpawnTimerMs = 0;
      game.player.hp = Math.min(getPlayerMaxHp(), game.player.hp * 2);
      spawnFloatingText(game.player.x, game.player.y - 132, "ENERGY", "heal");
      return false;
    }

    return true;
  });
}

function spawnEnergyPickup() {
  if (game.pickups.length > 0) {
    return;
  }

  game.pickups.push({
    id: `pickup-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    x: randomBetween(52, Math.max(52, game.width - 52)),
    y: randomBetween(92, Math.max(92, game.height - 52)),
  });
}

function cleanupDeadRobots() {
  game.robots = game.robots.filter((robot) => !robot.dead);
}

function finishGameLoss() {
  concludeGameSession("Przegrana", "Twoje statystyki z tej rundy.");
}

function finishGameVictory() {
  concludeGameSession("Zwyciestwo", "Przeszedles wszystkie 6 fal.");
}

function requestExitGame() {
  openModal({
    title: "Zakonczyc runde?",
    message: "Najpierw zobaczysz wynik rundy.",
    buttonText: "WYJDZ",
    dismissible: true,
    onConfirm: () => {
      closeModal();
      concludeGameSession("Zakonczyles runde", "Twoje statystyki z tej rundy.");
    },
  });
}

function concludeGameSession(status, note) {
  game.active = false;
  window.cancelAnimationFrame(game.animationId);
  game.animationId = 0;
  resetGameKeys();
  syncTouchControlsVisibility();
  game.resultStatus = status;
  game.resultNote = note;
  showGameResult();
}

function findNearestRobot(x, y) {
  let nearest = null;
  let nearestDistance = Infinity;

  game.robots.forEach((robot) => {
    if (robot.dead) {
      return;
    }

    const distance = Math.hypot(robot.x - x, robot.y - y);

    if (distance < nearestDistance) {
      nearest = robot;
      nearestDistance = distance;
    }
  });

  return nearest;
}

function getEquippedPet() {
  return getOwnedItem("pets", state.equippedPet);
}

function getEquippedCharacter() {
  return getOwnedItem("characters", state.equippedCharacter);
}

function getPlayerMaxHp() {
  const baseHp = getEquippedCharacter()?.id === "talia" ? 4000 : GAME_RULES.playerMaxHp;
  return isOlympianBuffActive() ? baseHp * 2 : baseHp;
}

function getWaveConfig(waveNumber) {
  const normalizedWave = clamp(Math.round(waveNumber || 1), 1, 6);
  const waveConfigs = {
    1: {
      wave: 1,
      robotCount: 5,
      robotHp: 200,
      robotDamage: 20,
      killReward: 1,
      completionReward: 3,
      spawnIntervalMs: 2000,
      spawnBatch: 1,
    },
    2: {
      wave: 2,
      robotCount: 5,
      robotHp: 500,
      robotDamage: 25,
      killReward: 2,
      completionReward: 5,
      spawnIntervalMs: 2000,
      spawnBatch: 1,
    },
    3: {
      wave: 3,
      robotCount: 5,
      robotHp: 800,
      robotDamage: 30,
      killReward: 3,
      completionReward: 7,
      spawnIntervalMs: 2000,
      spawnBatch: 1,
    },
    4: {
      wave: 4,
      robotCount: 8,
      robotHp: 1000,
      robotDamage: 30,
      killReward: 3,
      completionReward: 7,
      spawnIntervalMs: 1800,
      spawnBatch: 1,
    },
    5: {
      wave: 5,
      robotCount: 10,
      robotHp: 800,
      robotDamage: 31,
      killReward: 4,
      completionReward: 8,
      spawnIntervalMs: 1600,
      spawnBatch: 1,
    },
    6: {
      wave: 6,
      robotCount: 12,
      robotHp: 700,
      robotDamage: 40,
      killReward: 5,
      completionReward: 15,
      spawnIntervalMs: 1500,
      spawnBatch: 2,
    },
  };

  return { ...waveConfigs[normalizedWave] };
}

function getRobotStats(waveConfig = getWaveConfig(game.currentWave || 1)) {
  if (getEquippedCharacter()?.id === "talia") {
    return {
      hp: waveConfig.robotHp + 500,
      damage: waveConfig.robotDamage + 20,
      speed: GAME_RULES.robotSpeed,
    };
  }

  return {
    hp: waveConfig.robotHp,
    damage: waveConfig.robotDamage,
    speed: GAME_RULES.robotSpeed,
  };
}

function getProjectileDamage() {
  const pet = getEquippedPet();
  let damage = GAME_RULES.projectileDamage;

  if (pet && pet.id === "chomik-strazak") {
    damage = Math.round(damage * GAME_RULES.hamsterDamageMultiplier);
  }

  if (isOlympianBuffActive()) {
    damage *= 2;
  }

  return damage;
}

function spawnProjectile(projectileConfig) {
  const projectile = {
    id: game.nextProjectileId++,
    ...projectileConfig,
  };

  game.projectiles.push(projectile);
  playProjectileSound(projectile);
}

function playProjectileSound(projectile) {
  const visual = getProjectileVisual(projectile);

  if (visual.src === "./atak_2.png") {
    playOneShotSound("shot2", 0.76);
    return;
  }

  if (visual.src === "./atak_3.png") {
    playOneShotSound("shot3", 0.76);
    return;
  }

  if (visual.src === "./atak_4.png") {
    playOneShotSound("shot4", 0.55);
    return;
  }

  if (visual.src === "./atak_nora.png") {
    playOneShotSound("shotNora", 1, 3);
    return;
  }

  if (visual.src === "./atak_5.png") {
    playOneShotSound("shot4", 0.55);
  }
}

function getPlayerProjectileKind(ammoIndex) {
  const pet = getEquippedPet();
  const slotConfig = getAmmoSlotConfig();
  const character = getEquippedCharacter();

  if (pet && pet.id === "waz-kaktus" && slotConfig.slotTypes[ammoIndex] === "slow") {
    return "snake-shot";
  }

  if (
    character?.id === "elfie" ||
    character?.id === "elfie-wojowniczka" ||
    character?.id === "elfie-w-swojej-naturze"
  ) {
    return "elfie-shot";
  }

  if (character?.id === "millo-jako-elfie") {
    return "millo-elfie-shot";
  }

  if (character?.id === "nora") {
    return "nora-shot";
  }

  if (
    character?.id === "linda" ||
    character?.id === "roslinna-krolowa-linda" ||
    character?.id === "elfie-jako-linda" ||
    character?.id === "linda-wojownicza-ksiezniczka"
  ) {
    return "linda-shot";
  }

  if (
    character?.id === "lily" ||
    character?.id === "leo" ||
    character?.id === "leo-skoczek-narciarski" ||
    character?.id === "lyzwiarka-lily" ||
    character?.id === "lyzwiarz-leo" ||
    character?.id === "mistrzyni-lyzwiarstwa-lily"
  ) {
    return "lily-shot";
  }

  if (character?.id === "tricky" || character?.id === "tricky-renifer") {
    return "tricky-shot";
  }

  return "player";
}

function getPlayerSpeedMultiplier() {
  return getEquippedPet()?.id === "chomik-olimpijczyk"
    ? GAME_RULES.olympianSpeedMultiplier
    : 1;
}

function getPetFollowSpeedMultiplier() {
  return getEquippedPet()?.id === "chomik-olimpijczyk"
    ? GAME_RULES.olympianSpeedMultiplier
    : 1;
}

function isOlympianBuffActive() {
  return getEquippedPet()?.id === "chomik-olimpijczyk" && game.energyBuffMs > 0;
}

function getParrotRange() {
  const area = game.width * game.height * GAME_RULES.parrotRangeAreaFactor;
  return Math.sqrt(area / Math.PI);
}

function getRobotSlowMultiplier(robot) {
  if (!robot || robot.dead || robot.slowTimerMs <= 0) {
    return 1;
  }

  return robot.slowMultiplier || 1;
}

function getPetCooldownState() {
  const pet = getEquippedPet();

  if (!pet) {
    return null;
  }

  if (pet.id === "papuga-manipulantka") {
    return {
      progress: clamp(game.pet.castTimerMsSecondary / GAME_RULES.parrotCastIntervalMs, 0, 1),
      kind: "papuga",
    };
  }

  if (pet.id === "l-psotka") {
    return {
      progress: clamp(game.pet.castTimerMsSecondary / GAME_RULES.lpsotkaCastIntervalMs, 0, 1),
      kind: "lpsotka",
    };
  }

  if (pet.id === "sniezynka") {
    return {
      progress: game.pet.shieldActive
        ? clamp(game.pet.shieldTimerMs / GAME_RULES.snowflakeShieldDurationMs, 0, 1)
        : clamp(1 - (game.pet.shieldCooldownMs / GAME_RULES.snowflakeShieldCooldownMs), 0, 1),
      kind: "sniezynka",
    };
  }

  if (pet.id === "sowa") {
    return {
      progress: game.pet.shieldActive
        ? clamp(game.pet.shieldTimerMs / GAME_RULES.owlShieldDurationMs, 0, 1)
        : clamp(1 - (game.pet.shieldCooldownMs / GAME_RULES.owlShieldCooldownMs), 0, 1),
      kind: "sowa",
    };
  }

  return null;
}

function getWaterFieldEffect(x, y) {
  const insideField = game.waterFields.some((field) => {
    return Math.hypot(field.x - x, field.y - y) <= field.radius;
  });

  if (!insideField) {
    return {
      insideField: false,
      speedMultiplier: 1,
      damageMultiplier: 1,
    };
  }

  return {
    insideField: true,
    speedMultiplier: 0.4,
    damageMultiplier: 0.95,
  };
}

function updateWaterFields(deltaSeconds) {
  const pet = getEquippedPet();

  if (pet && pet.id === "krab-syrena") {
    game.waterFields = [
      {
        x: game.player.x,
        y: game.player.y,
        radius: 156,
      },
    ];
    return;
  }

  game.waterFields = [];
}

function renderGameScene() {
  refreshAmmoConfig();
  delete gameMap.dataset.worldTheme;
  waveBanner.hidden = game.waveIntroMs <= 0;
  waveBannerTitle.textContent = `FALA ${game.pendingWave}`;
  waveBannerCountdown.textContent = String(Math.max(1, Math.ceil(game.waveIntroMs / 1000)));
  playerEntity.style.left = `${game.player.x}px`;
  playerEntity.style.top = `${game.player.y}px`;
  playerHealthLabel.textContent = `${Math.ceil(game.player.hp)} pz`;
  const winterShieldActive = isSnowflakeShieldActive() || isOwlShieldActive();
  playerShield.hidden = !isCatShieldActive() && !winterShieldActive;
  playerShield.dataset.kind = winterShieldActive ? "winter" : "default";
  playerShield.classList.toggle(
    "blinking",
    (isCatShieldActive() && game.pet.shieldTimerMs <= 2000) ||
      (winterShieldActive && game.pet.shieldTimerMs <= 800)
  );

  ammoFills.forEach((fill, index) => {
    fill.style.transform = `scaleX(${clamp(game.ammo[index] ?? 0, 0, 1)})`;
  });

  const pet = getEquippedPet();
  const petCooldownState = getPetCooldownState();

  if (pet) {
    gamePetEntity.hidden = false;
    gamePetEntity.style.left = `${game.pet.x}px`;
    gamePetEntity.style.top = `${game.pet.y}px`;
    petCooldownBar.hidden = petCooldownState === null;
    petCooldownBar.dataset.kind = petCooldownState?.kind || "";
    petCooldownFill.style.transform = `scaleY(${petCooldownState === null ? 0 : petCooldownState.progress})`;
    petPackLayer.innerHTML = "";
  } else {
    gamePetEntity.hidden = true;
    petCooldownBar.hidden = true;
    petCooldownBar.dataset.kind = "";
    delete playerShield.dataset.kind;
  }

  barriersLayer.innerHTML = game.barriers
    .map(
      (barrier) => `
        <div
          class="barrier-wall cage"
          style="left:${barrier.x}px; top:${barrier.y}px; width:${barrier.size}px; height:${barrier.size}px;"
        >
          <p class="barrier-health">${Math.ceil(barrier.hp)} pz</p>
        </div>
      `
    )
    .join("");

  pickupsLayer.innerHTML = game.pickups
    .map(
      (pickup) => `
        <div class="energy-pickup" style="left:${pickup.x}px; top:${pickup.y}px;"></div>
      `
    )
    .join("");

  waterFieldsLayer.innerHTML = game.waterFields
    .map(
      (field) => `
        <div
          class="water-field"
          style="left:${field.x}px; top:${field.y}px; width:${field.radius * 2}px; height:${field.radius * 2}px;"
        ></div>
      `
    )
    .join("");

  robotsLayer.innerHTML = game.robots
    .map(
      (robot) => `
        <div class="robot-entity${robot.poisonTimerMs > 0 ? " poisoned" : ""}" style="left:${robot.x}px; top:${robot.y}px;">
          <p class="robot-health">${Math.ceil(robot.hp)} pz</p>
          <div class="robot-sprite-frame">
            <div class="robot-core"></div>
            ${robot.stunTimerMs > 0 ? `<div class="robot-stun-dots"><span></span><span></span><span></span></div>` : ""}
          </div>
          ${robot.bubbleTimerMs > 0 ? `<div class="robot-bubble"></div>` : ""}
        </div>
      `
    )
    .join("");

  projectilesLayer.innerHTML = game.projectiles
    .map(
      (projectile) => {
        const visual = getProjectileVisual(projectile);
        return `
        <div class="projectile" style="left:${projectile.x}px; top:${projectile.y}px;">
          <div class="projectile-shell${projectile.kind === "snake-shot" ? " snake-shot" : projectile.kind === "elfie-shot" ? " elfie-shot" : projectile.kind === "millo-elfie-shot" ? " millo-elfie-shot" : projectile.kind === "lpsotka" ? " lpsotka-shot" : projectile.kind === "linda-shot" ? " linda-shot" : projectile.kind === "lily-shot" ? " lily-shot" : projectile.kind === "nora-shot" ? " nora-shot" : projectile.kind === "polar-bear-shot" ? " polar-bear-shot" : projectile.kind === "tricky-shot" ? " tricky-shot" : ""}">
            <img
              class="projectile-image asset-image"
              src="${visual.src}"
              alt="${visual.alt}"
              data-fallback-text="${visual.fallbackText}"
            />
            <div class="asset-fallback">${visual.fallbackText}</div>
          </div>
        </div>
      `;
      }
    )
    .join("");

  renderGameModeInfo();
  syncBrokenAssets(gameMap);
}

function showGameResult() {
  const character = getOwnedItem("characters", state.equippedCharacter) || CATALOG.characters[0];
  const resultSoundEffect = getGameResultSoundEffect(game.resultStatus);
  renderPreviewAssetIntoFrame(gameResultAvatarFrame, character, {
    elementId: "game-result-image",
    imageClass: "avatar-image asset-image",
    videoClass: "avatar-image asset-video",
    fallbackText: "POSTAC",
    alt: character.name,
  });
  gameResultStatus.textContent = game.resultStatus || "Koniec rundy";
  gameResultNote.textContent = game.resultNote || "Twoje statystyki z tej rundy.";
  gameResultWave.textContent = "0";
  gameResultRobots.textContent = "0";
  gameResultTrophies.textContent = "0";
  gameResultButton.hidden = true;
  gameResultOverlay.hidden = false;
  playOneShotSound(resultSoundEffect, 0.82);
  syncBrokenAssets(gameResultOverlay);

  const survivedWaves = Math.max(0, game.currentWave);
  animateResultCounter(gameResultWave, survivedWaves, 0, () => {
    animateResultCounter(gameResultRobots, game.robotsKilledTotal, 500, () => {
      animateResultCounter(gameResultTrophies, game.trophiesEarnedRun, 1000, () => {
        gameResultButton.hidden = false;
      });
    });
  });
}

function animateResultCounter(node, targetValue, delayMs, onDone) {
  const startTimeout = window.setTimeout(() => {
    if (targetValue <= 0) {
      node.textContent = "0";
      if (typeof onDone === "function") {
        onDone();
      }
      return;
    }

    let current = 0;
    const interval = window.setInterval(() => {
      current += 1;
      node.textContent = String(current);

      if (current >= targetValue) {
        window.clearInterval(interval);
        if (typeof onDone === "function") {
          onDone();
        }
      }
    }, 70);
    game.resultTimeouts.push(interval);
  }, delayMs);

  game.resultTimeouts.push(startTimeout);
}

function clearGameResultTimers() {
  game.resultTimeouts.forEach((timerId) => {
    window.clearTimeout(timerId);
    window.clearInterval(timerId);
  });
  game.resultTimeouts = [];
}

async function returnToLobbyFromResult() {
  if (resultReturnBusy) {
    return;
  }

  resultReturnBusy = true;
  gameResultButton.disabled = true;

  try {
    const earnedTrophies = Math.max(0, game.trophiesEarnedRun);
    hideGameResult();
    showView("lobby");

    if (earnedTrophies > 0) {
      await wait(60);
      await showTrophyRewardScene(earnedTrophies, {
        title: game.resultStatus === "Zwyciestwo" ? "Puchary za zwyciestwo" : "Puchary z rundy",
        autoCloseMs: 2300,
      });
      await animateTrophiesToBalance();
    }
  } finally {
    resultReturnBusy = false;
    gameResultButton.disabled = false;
  }
}

function hideGameResult() {
  clearGameResultTimers();
  gameResultOverlay.hidden = true;
  gameResultButton.hidden = true;
}

function setCatMode(mode) {
  const pet = getEquippedPet();

  if (!pet || pet.id !== "kot-roslina") {
    return;
  }

  game.pet.mode = mode;
  game.pet.healTimerMs = 0;
  game.pet.attackTimerMs = 0;
  game.pet.targetId = null;

  if (mode !== "s") {
    game.pet.shieldActive = false;
    game.pet.shieldTimerMs = 0;
  }
}

function getCatMode() {
  return game.pet.mode === "s" ? "s" : "a";
}

function isCatHealingBoostActive() {
  const pet = getEquippedPet();
  return Boolean(
    pet &&
      pet.id === "kot-roslina" &&
      getCatMode() === "a" &&
      game.player.hp < getPlayerMaxHp()
  );
}

function isElfieSkinEquipped() {
  const characterId = getEquippedCharacter()?.id;
  return (
    characterId === "elfie" ||
    characterId === "elfie-wojowniczka" ||
    characterId === "elfie-w-swojej-naturze" ||
    characterId === "elfie-jako-linda"
  );
}

function isElKrukElfieSkinBoostActive() {
  const pet = getEquippedPet();
  return Boolean(pet && pet.id === "el-kruk" && isElfieSkinEquipped());
}

function getCatShieldThreshold() {
  return getPlayerMaxHp() >= 4000 ? 3000 : 2000;
}

function isCatShieldActive() {
  const pet = getEquippedPet();
  return Boolean(pet && pet.id === "kot-roslina" && getCatMode() === "s" && game.pet.shieldActive);
}

function isSnowflakeShieldActive() {
  const pet = getEquippedPet();
  return Boolean(pet && pet.id === "sniezynka" && game.pet.shieldActive);
}

function updateCatShield(deltaMs) {
  if (game.pet.shieldActive) {
    game.pet.shieldTimerMs = Math.max(0, game.pet.shieldTimerMs - deltaMs);

    if (game.pet.shieldTimerMs === 0) {
      game.pet.shieldActive = false;
      game.pet.shieldCooldownMs = GAME_RULES.catShieldCooldownMs;
    }

    return;
  }

  if (game.pet.shieldCooldownMs > 0) {
    game.pet.shieldCooldownMs = Math.max(0, game.pet.shieldCooldownMs - deltaMs);
  }

  if (
    getCatMode() === "s" &&
    game.pet.shieldCooldownMs === 0 &&
    game.player.hp <= getCatShieldThreshold()
  ) {
    game.pet.shieldActive = true;
    game.pet.shieldTimerMs = GAME_RULES.catShieldDurationMs;
  }
}

function updateSnowflakeShield(deltaMs) {
  if (game.pet.shieldActive) {
    game.pet.shieldTimerMs = Math.max(0, game.pet.shieldTimerMs - deltaMs);

    if (game.pet.shieldTimerMs === 0) {
      game.pet.shieldActive = false;
      game.pet.shieldCooldownMs = GAME_RULES.snowflakeShieldCooldownMs;
    }

    return;
  }

  if (game.pet.shieldCooldownMs > 0) {
    game.pet.shieldCooldownMs = Math.max(0, game.pet.shieldCooldownMs - deltaMs);
  }

  if (game.pet.shieldCooldownMs === 0) {
    game.pet.shieldActive = true;
    game.pet.shieldTimerMs = GAME_RULES.snowflakeShieldDurationMs;
  }
}

function isOwlShieldActive() {
  const pet = getEquippedPet();
  return Boolean(pet && pet.id === "sowa" && game.pet.shieldActive);
}

function tryActivateOwlAbility() {
  const pet = getEquippedPet();

  if (
    !pet ||
    pet.id !== "sowa" ||
    game.pet.shieldActive ||
    game.pet.shieldCooldownMs > 0 ||
    ui.currentView !== "game" ||
    !game.active
  ) {
    return;
  }

  game.pet.shieldActive = true;
  game.pet.shieldTimerMs = GAME_RULES.owlShieldDurationMs;
  game.pet.shieldCooldownMs = 0;
  syncWalkingLoop();
}

function updateOwlShield(deltaMs) {
  if (game.pet.shieldActive) {
    game.pet.shieldTimerMs = Math.max(0, game.pet.shieldTimerMs - deltaMs);

    if (game.pet.shieldTimerMs === 0) {
      game.pet.shieldActive = false;
      game.pet.shieldCooldownMs = GAME_RULES.owlShieldCooldownMs;

      if (game.player.hp < GAME_RULES.playerMaxHp) {
        healPlayer(GAME_RULES.owlHealAmount);
      }

      syncWalkingLoop();
    }

    return;
  }

  if (game.pet.shieldCooldownMs > 0) {
    game.pet.shieldCooldownMs = Math.max(0, game.pet.shieldCooldownMs - deltaMs);
  }
}

function updateOwlPet(deltaSeconds, deltaMs) {
  updateOwlShield(deltaMs);
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
}

function updateCatAttackMode(deltaSeconds, deltaMs) {
  let target = game.robots.find((robot) => robot.id === game.pet.targetId && !robot.dead);

  if (!target) {
    target = findNearestRobot(game.pet.x, game.pet.y);
    game.pet.targetId = target ? target.id : null;
  }

  if (!target) {
    movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
    game.pet.attackTimerMs = 0;
    return;
  }

  const dx = target.x - game.pet.x;
  const dy = target.y - game.pet.y;
  const distance = Math.hypot(dx, dy) || 1;

  if (distance > 58) {
    const step = GAME_RULES.dogSpeed * deltaSeconds;
    game.pet.x += (dx / distance) * step;
    game.pet.y += (dy / distance) * step;
    game.pet.attackTimerMs = 0;
    return;
  }

  game.pet.attackTimerMs += deltaMs;

  while (game.pet.attackTimerMs >= GAME_RULES.catSAttackIntervalMs) {
    game.pet.attackTimerMs -= GAME_RULES.catSAttackIntervalMs;
    damageRobot(target, GAME_RULES.catSAttackDamage, "kot-roslina");

    if (target.dead) {
      const nextTarget = findNearestRobot(game.pet.x, game.pet.y);
      game.pet.targetId = nextTarget ? nextTarget.id : null;
      target = nextTarget;

      if (!target) {
        game.pet.attackTimerMs = 0;
        break;
      }
    }
  }
}

function renderGameModeInfo() {
  if (!gameModeInfo) {
    return;
  }

  const pet = getEquippedPet();

  if (!pet || pet.id !== "kot-roslina") {
    if (pet && pet.id === "waz-kaktus") {
      gameModeInfo.textContent =
        "Waz Kaktus: +1 puchar za robota i jedna zielona amunicja, ktora spowalnia roboty o 50% na 3 s.";
      return;
    }

    if (pet && pet.id === "chomik-olimpijczyk") {
      gameModeInfo.textContent = isOlympianBuffActive()
        ? `Chomik Olimpijczyk: buff aktywny jeszcze ${(game.energyBuffMs / 1000).toFixed(1)} s.`
        : game.pickups.length > 0
          ? "Chomik Olimpijczyk: energetyk czeka na mapie."
          : `Chomik Olimpijczyk: ruch +60%, kolejny energetyk za ${Math.max(0, ((GAME_RULES.energySpawnMs - game.pet.pickupSpawnTimerMs) / 1000)).toFixed(1)} s.`;
      return;
    }

    if (pet && pet.id === "malpka-jasnoksieznik") {
      gameModeInfo.textContent = game.player.hp < getPlayerMaxHp()
        ? "Małpka Jasnoksiężnik: po walce wróci do ciebie i leczy cię o 200 pz na sekundę."
        : "Małpka Jasnoksiężnik: skacze po najbliższych robotach i zadaje 200 pz na sekundę.";
      return;
    }

    if (pet && pet.id === "niedzwiedz-polarny") {
      gameModeInfo.textContent = "Niedźwiedź Polarny: co 4 s wypuszcza dwa strzaly po 50 pz z opoznieniem 0,5 s.";
      return;
    }

    if (pet && pet.id === "sniezynka") {
      gameModeInfo.textContent = game.pet.shieldActive
        ? `Śnieżynka: zimowa tarcza aktywna jeszcze ${(game.pet.shieldTimerMs / 1000).toFixed(1)} s.`
        : `Śnieżynka: kolejna zimowa tarcza za ${(game.pet.shieldCooldownMs / 1000).toFixed(1)} s.`;
      return;
    }

    if (pet && pet.id === "sowa") {
      gameModeInfo.textContent = game.pet.shieldActive
        ? `Sowa: tarcza aktywna jeszcze ${(game.pet.shieldTimerMs / 1000).toFixed(1)} s. Po niej odzyskasz 20% zycia.`
        : game.pet.shieldCooldownMs > 0
          ? `Sowa: moc laduje sie ${(game.pet.shieldCooldownMs / 1000).toFixed(1)} s.`
          : "Sowa: wcisnij W, aby na 3 s zatrzymac ruch, wlaczyc tarcze i odzyskac 20% zycia.";
      return;
    }

    if (pet && pet.id === "l-psotka") {
      gameModeInfo.textContent = "L'Psotka: co 5 s wypuszcza bańkę, zabiera 150 pz i cofa robota o 2 s wstecz.";
      return;
    }

    if (pet && pet.id === "el-kruk") {
      gameModeInfo.textContent = isElKrukElfieSkinBoostActive()
        ? "El Kruk: leczy o 500 co 5 s i daje zielona amunicje z przeladowaniem szybszym o 0,7 s."
        : "El Kruk: po utracie zycia leczy o 500 co 5 s.";
      return;
    }

    gameModeInfo.textContent = "";
    return;
  }

  if (getCatMode() === "a") {
    const boostActive = isCatHealingBoostActive();
    gameModeInfo.textContent = boostActive
      ? "Kot Roslina: tryb A. Leczenie 300 co 3 s, zielona amunicja i szybsze przeladowanie aktywne."
      : "Kot Roslina: tryb A. Leczenie 300 co 3 s po utracie zycia. Wcisnij S, aby wlaczyc tarcze i atak.";
    return;
  }

  if (game.pet.shieldActive) {
    gameModeInfo.textContent = `Kot Roslina: tryb S. Tarcza aktywna jeszcze ${(game.pet.shieldTimerMs / 1000).toFixed(1)} s.`;
    return;
  }

  if (game.pet.shieldCooldownMs > 0) {
    gameModeInfo.textContent = `Kot Roslina: tryb S. Tarcza laduje sie ${(game.pet.shieldCooldownMs / 1000).toFixed(1)} s.`;
    return;
  }

  gameModeInfo.textContent = `Kot Roslina: tryb S. Tarcza wlaczy sie ponizej ${getCatShieldThreshold()} pz.`;
}

function spawnFloatingText(x, y, text, kind) {
  const node = document.createElement("div");
  node.className = `floating-text ${kind}`;
  node.textContent = text;
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;
  effectsLayer.appendChild(node);

  window.setTimeout(() => {
    node.remove();
  }, 900);
}

function syncTabs() {
  document.querySelectorAll("[data-tab-group='store']").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === ui.storeTab);
  });

  document.querySelectorAll("[data-tab-group='inventory']").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === ui.inventoryTab);
  });
}

function syncBrokenAssets(scope) {
  scope.querySelectorAll(".asset-image").forEach((image) => {
    image.onload = () => {
      image.classList.remove("broken");
    };

    image.onerror = () => {
      image.classList.add("broken");
    };

    if (!image.getAttribute("src")) {
      image.classList.add("broken");
      return;
    }

    if (image.complete && image.naturalWidth === 0) {
      image.classList.add("broken");
    }
  });
}

function syncAnimatedAssets(scope) {
  scope.querySelectorAll(".asset-video").forEach((video) => {
    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.addEventListener("error", () => {
      video.classList.add("broken");
    }, { once: true });

    const startPlayback = () => {
      video.classList.remove("broken");
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {});
      }
    };

    if (video.readyState >= 2) {
      startPlayback();
      return;
    }

    video.addEventListener("loadeddata", startPlayback, { once: true });
  });
}

function getProjectileVisual(projectile) {
  if (projectile.kind && projectile.kind.startsWith("papuga")) {
    return { src: "./atak_2.png", alt: "Gwiazdy papugi", fallbackText: "GWIAZDY" };
  }

  if (projectile.kind === "elfie-shot") {
    return { src: "./atak_2.png", alt: "Atak Elfie", fallbackText: "ELFIE" };
  }

  if (projectile.kind === "millo-elfie-shot") {
    return { src: "./atak_2.png", alt: "Atak Millo jako Elfie", fallbackText: "MILLO ELFIE" };
  }

  if (projectile.kind === "lpsotka") {
    return { src: "./atak_3.png", alt: "Atak L'Psotki", fallbackText: "PSOTKA" };
  }

  if (projectile.kind === "linda-shot") {
    return { src: "./atak_3.png", alt: "Atak Lindy", fallbackText: "LINDA" };
  }

  if (projectile.kind === "lily-shot") {
    const equippedCharacter = getEquippedCharacter();
    const isLeoVariant =
      equippedCharacter?.id === "leo" ||
      equippedCharacter?.id === "leo-skoczek-narciarski" ||
      equippedCharacter?.id === "lyzwiarz-leo";
    const isLilySkaterVariant = equippedCharacter?.id === "lyzwiarka-lily";
    const isLilyMasterVariant = equippedCharacter?.id === "mistrzyni-lyzwiarstwa-lily";
    const isSkiJumperVariant = equippedCharacter?.id === "leo-skoczek-narciarski";
    const isSkaterLeoVariant = equippedCharacter?.id === "lyzwiarz-leo";
    return {
      src: "./atak_4.png",
      alt: isSkiJumperVariant
        ? "Atak Leo Skoczek Narciarski"
        : isSkaterLeoVariant
          ? "Atak Łyżwiaża Leo"
          : isLilyMasterVariant
            ? "Atak Mistrzyni Łyżwiarstwa Lily"
          : isLilySkaterVariant
            ? "Atak Łyżwiarki Lily"
            : isLeoVariant
              ? "Atak Leo"
              : "Atak Lily",
      fallbackText: isLeoVariant ? "LEO" : "LILY",
    };
  }

  if (projectile.kind === "nora-shot") {
    return {
      src: "./atak_nora.png",
      alt: "Atak Nory",
      fallbackText: "NORA",
    };
  }

  if (projectile.kind === "polar-bear-shot") {
    return {
      src: "./atak_4.png",
      alt: "Atak Niedźwiedzia Polarnego",
      fallbackText: "NIEDZWIEDZ",
    };
  }

  if (projectile.kind === "tricky-shot") {
    const equippedCharacter = getEquippedCharacter();
    const isReindeerVariant = equippedCharacter?.id === "tricky-renifer";
    return {
      src: "./atak_5.png",
      alt: isReindeerVariant ? "Atak Tricky Renifer" : "Atak Tricky",
      fallbackText: isReindeerVariant ? "RENIFER" : "TRICKY",
    };
  }

  const character = getEquippedCharacter();

  if (character?.id === "magik-millo") {
    return { src: "./atak_2.png", alt: "Atak Magika Millo", fallbackText: "MILLO" };
  }

  if (character?.id === "magiczna-lidsay") {
    return { src: "./atak_2.png", alt: "Atak Magicznej Lidsay", fallbackText: "LIDSAY" };
  }

  const weapon = getOwnedItem("weapons", state.equippedWeapon) || CATALOG.weapons[0];
  return { src: weapon.image, alt: weapon.name, fallbackText: weapon.name };
}

function loadState() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));

    if (!saved) {
      return defaultState();
    }

    const merged = {
      ...defaultState(),
      ...saved,
      ownedCharacters: Array.isArray(saved.ownedCharacters) ? saved.ownedCharacters : [],
      ownedPets: Array.isArray(saved.ownedPets) ? saved.ownedPets : [],
      ownedWeapons: Array.isArray(saved.ownedWeapons) ? saved.ownedWeapons : ["atak-1"],
      crateInventory:
        saved.crateInventory && typeof saved.crateInventory === "object"
          ? { ...defaultState().crateInventory, ...saved.crateInventory }
          : { ...defaultState().crateInventory },
      openedCrates:
        saved.openedCrates && typeof saved.openedCrates === "object"
          ? { ...defaultState().openedCrates, ...saved.openedCrates }
          : { ...defaultState().openedCrates },
      freeCrates:
        saved.freeCrates && typeof saved.freeCrates === "object"
          ? { ...defaultState().freeCrates, ...saved.freeCrates }
          : { ...defaultState().freeCrates },
      claimedTrophyRewards:
        saved.claimedTrophyRewards && typeof saved.claimedTrophyRewards === "object"
          ? { ...defaultState().claimedTrophyRewards, ...saved.claimedTrophyRewards }
          : { ...defaultState().claimedTrophyRewards },
      storeOffers:
        saved.storeOffers && typeof saved.storeOffers === "object"
          ? { ...defaultState().storeOffers, ...saved.storeOffers }
          : { ...defaultState().storeOffers },
    };

    merged.claimedTrophyRewards = migrateClaimedTrophyRewards(saved.claimedTrophyRewards);
    merged.activeTrophyWorld = normalizeTrophyWorldId(saved.activeTrophyWorld);
    merged.superAlleyActive = Boolean(saved.superAlleyActive);
    merged.superAlleyWinterActive = Boolean(saved.superAlleyWinterActive);
    merged.phoneModeEnabled = Boolean(saved.phoneModeEnabled);
    merged.seenWinterWorldIntro = Boolean(saved.seenWinterWorldIntro);
    merged.ownedCharacters = sanitizeOwnedIds(merged.ownedCharacters, CATALOG.characters);
    merged.ownedPets = sanitizeOwnedIds(merged.ownedPets, CATALOG.pets);
    merged.ownedWeapons = sanitizeOwnedIds(merged.ownedWeapons, CATALOG.weapons);

    if (!merged.ownedWeapons.includes("atak-1")) {
      merged.ownedWeapons.push("atak-1");
    }

    if (!merged.ownedCharacters.includes("magik-millo")) {
      merged.ownedCharacters.unshift("magik-millo");
    }

    if (!merged.ownedCharacters.includes(merged.equippedCharacter)) {
      merged.equippedCharacter = null;
    }

    if (!merged.ownedPets.includes(merged.equippedPet)) {
      merged.equippedPet = null;
    }

    if (!merged.ownedWeapons.includes(merged.equippedWeapon)) {
      merged.equippedWeapon = "atak-1";
    }

    if (!merged.equippedWeapon) {
      merged.equippedWeapon = "atak-1";
    }

    if (!merged.equippedCharacter) {
      merged.equippedCharacter = "magik-millo";
    }

    merged.freeCrates["drewniana-skrzynia"] = 0;

    return merged;
  } catch (error) {
    return defaultState();
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function defaultState() {
  return {
    coins: 0,
    trophies: 0,
    diamonds: 0,
    seenIntro: false,
    seenTrophyRoadIntro: false,
    superAlleyActive: false,
    superAlleyWinterActive: false,
    phoneModeEnabled: false,
    introStep: 0,
    seenWinterWorldIntro: false,
    ownedCharacters: [],
    ownedPets: [],
    ownedWeapons: ["atak-1"],
    equippedCharacter: null,
    equippedPet: null,
    equippedWeapon: "atak-1",
    crateInventory: {
      "drewniana-skrzynia": 0,
    },
    openedCrates: {
      "drewniana-skrzynia": 0,
    },
    freeCrates: {
      "drewniana-skrzynia": 0,
    },
    claimedTrophyRewards: {
      alley: [],
      winter: [],
    },
    activeTrophyWorld: "alley",
    storeOffers: {
      characterIds: [],
      petIds: [],
      nextRefreshAt: 0,
    },
  };
}

function hasDiamondAccess() {
  return state.diamonds > 0;
}

function normalizeTrophyWorldId(worldId) {
  return TROPHY_WORLDS.some((world) => world.id === worldId) ? worldId : TROPHY_WORLDS[0].id;
}

function sanitizeOwnedIds(ids, catalog) {
  if (!Array.isArray(ids)) {
    return [];
  }

  const allowedIds = new Set(catalog.map((item) => item.id));
  return ids.filter((id, index) => allowedIds.has(id) && ids.indexOf(id) === index);
}

function migrateClaimedTrophyRewards(savedRewards) {
  const allowedRewardIds = new Set(
    TROPHY_WORLDS.flatMap((world) => world.rewards.map((reward) => reward.id))
  );
  const alleyRewards = [
    ...(Array.isArray(savedRewards?.alley) ? savedRewards.alley : []),
    ...(Array.isArray(savedRewards?.magicians) ? savedRewards.magicians : []),
    ...(Array.isArray(savedRewards?.lovers) ? savedRewards.lovers : []),
  ].filter((rewardId) => allowedRewardIds.has(rewardId));
  const winterRewards = [
    ...(Array.isArray(savedRewards?.winter) ? savedRewards.winter : []),
  ].filter((rewardId) => allowedRewardIds.has(rewardId));

  return {
    alley: alleyRewards.filter((rewardId, index) => alleyRewards.indexOf(rewardId) === index),
    winter: winterRewards.filter((rewardId, index) => winterRewards.indexOf(rewardId) === index),
  };
}

function getOwnedItems(kind) {
  const ownedIds =
    kind === "characters"
      ? state.ownedCharacters
      : kind === "pets"
        ? state.ownedPets
        : kind === "weapons"
          ? state.ownedWeapons
          : [];

  return CATALOG[kind].filter((item) => ownedIds.includes(item.id));
}

function getOwnedItem(kind, itemId) {
  if (!itemId) {
    return null;
  }

  return getOwnedItems(kind).find((item) => item.id === itemId) || null;
}

function isOwned(kind, itemId) {
  if (kind === "coins") {
    return false;
  }

  return getOwnedItems(kind).some((item) => item.id === itemId);
}

function isSinglePurchaseStoreItem(kind) {
  return kind === "characters" || kind === "pets" || kind === "weapons";
}

function isEquipped(kind, itemId) {
  if (kind === "characters") {
    return state.equippedCharacter === itemId;
  }

  if (kind === "pets") {
    return state.equippedPet === itemId;
  }

  if (kind === "weapons") {
    return state.equippedWeapon === itemId;
  }

  return false;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function wait(duration) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}
