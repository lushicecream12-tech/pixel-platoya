const TOTAL_LOADING_TIME = 10000;
const STEP_INTERVAL_MIN = 200;
const STEP_INTERVAL_MAX = 950;
const STORAGE_KEY = "pixel-platoya-save-v1";
const FIREBASE_MULTIPLAYER_CONFIG = null;
const FIREBASE_SOCIAL_CONFIG = window.PIXEL_PLATOYA_FIREBASE_CONFIG || null;
const PROFILE_SYNC_DEBOUNCE_MS = 900;
const PROFILE_PRESENCE_HEARTBEAT_MS = 10000;
const PROFILE_ACTIVE_WINDOW_MS = 20000;
const PARTY_MEMBER_SYNC_MS = 180;
const PARTY_SESSION_SYNC_MS = 260;
const PARTY_INVITE_EXPIRY_MS = 5 * 60 * 1000;
const PARTY_PLAYER_STALE_MS = 6000;
const SUPER_ALLEY_DIAMOND_PRICE = 119;
const SUPER_ALLEY_CASH_PRICE_LABEL = "19,99zł";
const MAGICIANS_WORLD_END_TROPHIES = 2000;
const WINTER_WORLD_START_TROPHIES = 2050;
const TOTAL_GAME_WAVES = 5;
const MULTIPLAYER_QUEUE_DURATION_MS = 10000;
const MULTIPLAYER_START_COUNTDOWN_MS = 5000;
const MULTIPLAYER_MAX_PLAYERS = 6;
const MULTIPLAYER_HEARTBEAT_MS = 1500;
const MULTIPLAYER_QUEUE_TICK_MS = 500;
const MULTIPLAYER_PLAYER_STALE_MS = 6000;
const MULTIPLAYER_ROOM_STALE_MS = 45000;
const TROPHY_NODE_WIDTH = 220;
const TROPHY_NODE_GAP = 20;
const TROPHY_ICON_IMAGE = "./assets/currencies/monety_2.png";
const TROPHY_DIAMOND_IMAGE = "./assets/currencies/diamenty_.png";
const COIN_REWARD_IMAGE = "./assets/currencies/wymiatanie.png";
const DIAMOND_REWARD_IMAGE = "./assets/currencies/wypaddanie.png";
const MAGICIANS_PLATOYA_KEY_IMAGE = "./klucz.magikow.png";
const WINTER_PLATOYA_KEY_IMAGE = "./klucz.zimowy.png";
const TROPHY_STORE_CODE = "2010";
const DEFAULT_STORE_MODE = "default";
const MAGICIANS_PET_STORE_MODE = "magicians-pets";
const WINTER_PET_STORE_MODE = "winter-pets";
const MAGIC_MACHINE_PRICE = 2;
const MAGIC_MACHINE_FIRST_PRICE = 1;
const MAGIC_MACHINE_FIRST_REWARD_PET_ID = "pies-magik";
const MAGIC_MACHINE_IMAGE = "./automat.1.png";
const MAGIC_MACHINE_BALL_IMAGE = "./kulka.1.png";
const SUPER_ALLEY_REWARD_THRESHOLDS = {
  alley: new Set([100, 250, 350, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1750, 1850, 1950]),
  winter: new Set([2100, 2250, 2350, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3750, 3850, 3950]),
  tower: new Set([4150, 4250, 4350, 4500, 4650, 4800, 5000, 5100, 5200, 5300, 5400, 5500, 5600, 5750, 5850, 6150, 6250, 6400, 6500, 6600, 6750, 6850]),
};
const SOUND_EFFECT_SOURCES = {
  shot2: ["./assets/sounds/attacks/strzał_2.mp3", "./assets/sounds/attacks/strzał_2.mp3"],
  shot3: ["./assets/sounds/attacks/strzał_3.mp3", "./assets/sounds/attacks/strzał_3.mp3"],
  shot4: ["./assets/sounds/attacks/strzał_4.mp3", "./assets/sounds/attacks/strzał_4.mp3"],
  shotElfie: ["./assets/sounds/attacks/strzał_elfie.mp3", "./assets/sounds/attacks/strzał_elfie.mp3"],
  shotNora: ["./assets/sounds/attacks/strzał_nora.mp3", "./assets/sounds/attacks/strzał_nora.mp3"],
  shotCloud: ["./assets/sounds/attacks/strzał_cloud.mp3", "./assets/sounds/attacks/strzał_cloud.mp3"],
  shotAnn: ["./assets/sounds/attacks/strzał_ann.mp3", "./assets/sounds/attacks/strzał_ann.mp3"],
  shotIceSkater: ["./assets/sounds/attacks/strzał_leołyżwiaż.mp3", "./assets/sounds/attacks/strzał_leołyżwiaż.mp3"],
  shotIvy: ["./assets/sounds/attacks/strzal_ivy.mp3"],
  shotCoco: ["./assets/sounds/characters/coco_dzwiek.mp3"],
  shotAslan: ["./assets/sounds/characters/aslan.mp3"],
  shotKora: ["./assets/sounds/characters/kora.mp3"],
  shotWodzu: ["./assets/sounds/attacks/strzalwodza.mp3"],
  walkingLoop: ["./assets/sounds/game/chodzenie_1.mp3"],
  coins: ["./assets/sounds/game/dźwięk_1.mp3", "./assets/sounds/game/dźwięk_1.mp3"],
  diamondShine: ["./benkirb-shine-2-268904.mp3"],
  characterUnlock: ["./assets/sounds/game/character_1.mp3"],
  superIntro: ["./assets/sounds/game/super_1.mp3"],
  magicMachineRoll: ["./losowanie.mp3"],
  magicMachineOpen: ["./losowanie2.mp3"],
  victoryResult: ["./assets/sounds/game/kn_1.mp3"],
  defeatResult: ["./assets/sounds/game/kn_2.mp3"],
  roundEndResult: ["./assets/sounds/game/kn_3.mp3"],
  crateAward: ["./assets/sounds/game/skrzynia_1.mp3"],
  crateOpen: ["./assets/sounds/game/skrzynia_2.mp3"],
  dogVoice: ["./assets/sounds/pets/pies_1.mp3"],
  parrotVoice: ["./assets/sounds/pets/papuga_1.mp3"],
  catVoice: ["./assets/sounds/pets/kot_1.mp3"],
  snowflakeVoice: ["./assets/sounds/pets/kot_2.mp3"],
  crowVoice: ["./assets/sounds/pets/kruk_1.mp3"],
  bearVoice: ["./assets/sounds/pets/niedzwiedz_1.mp3"],
  owlVoice: ["./assets/sounds/pets/sowa_1.mp3"],
  monkeyVoice: ["./assets/sounds/pets/małpka_1.mp3", "./assets/sounds/pets/małpka_1.mp3"],
};
const BACKGROUND_MUSIC_SOURCES = {
  alley: ["./assets/sounds/game/muzyka_1.mp3"],
  winter: ["./assets/sounds/game/zima_mp4.mp4", "./zima_mp4", "./assets/sounds/game/zima_mp4.mp4"],
  tower: ["./assets/sounds/game/dzungla.mp4", "./dzungla", "./assets/sounds/game/muzyka_1.mp3"],
};
const GAMEPLAY_BACKGROUND_MUSIC_SOURCES = [
  "./gra_1.ogg",
  "./assets/sounds/game/gra_1.ogg",
  "./assets/sounds/game/muzyka_1.mp3",
];
const BACKGROUND_MUSIC_DEFAULT_VOLUME = 0.42;
const BACKGROUND_MUSIC_DUCKED_VOLUME = 0.22;
const ATTACK_SOUND_VOLUME_MULTIPLIER = 1.5;

const GAME_RULES = {
  playerMaxHp: 3000,
  robotMaxHp: 1000,
  robotSpawnMs: 6000,
  robotMaxCount: 4,
  robotSpeed: 117,
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
  jaguarFieldRadius: 128,
  jaguarFieldDurationMs: 5000,
  frogPuddleRadius: 86,
  frogPuddleDurationMs: 6000,
  frogPuddleIntervalMs: 5000,
  frogPuddleHealIntervalMs: 2000,
  frogPuddleHealAmount: 50,
  frogPuddleRobotDamagePerSecond: 100,
  jungleParrotHealMultiplier: 0.1,
  jungleMonkeyMarkedTargets: 2,
  jungleMonkeyDamageMultiplier: 1.5,
  jungleSnakeCastIntervalMs: 6000,
  jungleSnakeTargetCount: 2,
  jungleSnakeDurationMs: 5000,
  jungleSnakeSlowMultiplier: 0.2,
  jungleSnakeDamageMultiplier: 0.5,
  elephantRideCooldownMs: 10000,
  elephantRideDurationMs: 10000,
  elephantRideSpeed: 300,
  slothSlowCooldownMs: 10000,
  slothSlowDurationMs: 8000,
  slothSlowMultiplier: 0.45,
  tigerDamagePerStep: 4,
  tigerDamageStepHp: 50,
  crocodileSurfaceDurationMs: 5000,
  crocodileBurrowDurationMs: 3000,
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
  profilePhotos: [
    {
      id: "drzemka-pod-golym-niebem",
      name: "Drzemka pod gołym niebem",
      image: "./assets/profile-images/drzemka.jpeg",
      unlockWorld: "tower",
    },
    {
      id: "raj-dla-papug",
      name: "Raj dla papug",
      image: "./assets/profile-images/papug.jpeg",
      unlockWorld: "tower",
    },
    {
      id: "bagienna-kapiel",
      name: "Bagienna Kąpiel",
      image: "./assets/profile-images/kapiel.jpeg",
      unlockWorld: "tower",
    },
    {
      id: "sledztwo-w-sprawie",
      name: "Śledztwo w sprawie",
      image: "./assets/profile-images/sledztwo.jpeg",
      unlockWorld: "tower",
    },
  ],
  characters: [
    {
      id: "magik-millo",
      name: "Magik Millo",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_1.png",
      storeNote: "Postac startowa z magicznym atakiem.",
    },
    {
      id: "elfie",
      name: "Elfie",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_2.png",
      unlockWorld: "alley",
      storeNote: "Zdobadz w Alei Pucharow.",
    },
    {
      id: "linda",
      name: "Linda",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_3.png",
      unlockWorld: "alley",
      storeNote: "Zdobadz na koncu Alei Pucharow.",
    },
    {
      id: "roslinna-krolowa-linda",
      name: "Roslinna Krolowa Linda",
      price: 10000,
      cashPriceLabel: "",
      image: "./assets/characters/postac_4.png",
      storeNote: "Skorka premium Lindy z królewskim atakiem natury.",
    },
    {
      id: "magiczna-lidsay",
      name: "Magiczna Lidsay",
      price: 10000,
      cashPriceLabel: "",
      image: "./assets/characters/postac_10.png",
      storeNote: "Magiczna postac sklepowa z atakiem jak Magik Millo.",
    },
    {
      id: "elfie-wojowniczka",
      name: "Elfie Wojowniczka",
      price: 10000,
      cashPriceLabel: "",
      image: "./assets/characters/postac_5.png",
      storeNote: "Skorka Elfie gotowa do walki.",
    },
    {
      id: "elfie-w-swojej-naturze",
      name: "Elfie w swojej naturze",
      price: 10000,
      cashPriceLabel: "",
      image: "./assets/characters/postac_6.png",
      storeNote: "Naturalna wersja Elfie ze swoim atakiem.",
    },
    {
      id: "elfie-jako-linda",
      name: "Elfie jako Linda",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_7.png",
      unlockWorld: "alley",
      storeNote: "Skorka z konca Alei Pucharow.",
    },
    {
      id: "millo-jako-elfie",
      name: "Millo jako Elfie",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_8.png",
      unlockWorld: "alley",
      storeNote: "Nagroda za dalsza czesc Alei Pucharow.",
    },
    {
      id: "linda-wojownicza-ksiezniczka",
      name: "Linda Wojownicza Ksiezniczka",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_9.png",
      unlockWorld: "alley",
      storeNote: "Nagroda z dalszej czesci Alei Pucharow.",
    },
    {
      id: "lily",
      name: "Lily",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_11.png",
      unlockWorld: "winter",
      storeNote: "Nagroda z konca Swiata Zimowego.",
    },
    {
      id: "tricky",
      name: "Tricky",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_12.png",
      unlockWorld: "winter",
      storeNote: "Nagroda z dalszego konca Swiata Zimowego.",
    },
    {
      id: "tricky-renifer",
      name: "Tricky Renifer",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_13.png",
      unlockWorld: "winter",
      storeNote: "Nagroda za sam koniec Swiata Zimowego.",
    },
    {
      id: "leo",
      name: "Leo",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_17.png",
      unlockWorld: "winter",
      storeNote: "Nagroda za final Swiata Zimowego.",
    },
    {
      id: "leo-skoczek-narciarski",
      name: "Leo Skoczek Narciarski",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_14.png",
      unlockWorld: "winter",
      storeNote: "Nagroda Super ze Swiata Zimowego.",
    },
    {
      id: "lyzwiarka-lily",
      name: "Łyżwiarka Lily",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_15.png",
      unlockWorld: "winter",
      storeNote: "Postac z zimowego pakietu.",
    },
    {
      id: "lyzwiarz-leo",
      name: "Łyżwiaż Leo",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/postac_16.png",
      unlockWorld: "winter",
      storeNote: "Postac z zimowego pakietu.",
    },
    {
      id: "mistrzyni-lyzwiarstwa-lily",
      name: "Mistrzyni Łyżwiarstwa Lily",
      price: 10000,
      cashPriceLabel: "",
      image: "./assets/characters/postac_18.png",
      unlockWorld: "winter",
      storeNote: "Zimowa sklepowa postac z atakiem jak Lily.",
    },
    {
      id: "nora",
      name: "NORA",
      price: 20000,
      cashPriceLabel: "",
      image: "./assets/characters/postac_nora.png",
      previewVideo: "./assets/characters/nora_1.mov",
      unlockWorld: "winter",
      storeWorld: "winter",
      storeNote: "Animowany zimowy skin z własnym atakiem i dźwiękiem.",
    },
    {
      id: "cloud",
      name: "Cloud",
      price: 20000,
      cashPriceLabel: "",
      image: "./assets/characters/postac_cloud.mp4",
      previewVideo: "./assets/characters/postac_cloud.mp4",
      unlockWorld: "winter",
      storeWorld: "winter",
      storeNote: "Animowany zimowy skin z własnym atakiem chmur.",
    },
    {
      id: "ann",
      name: "Ann",
      price: 20000,
      cashPriceLabel: "",
      image: "./assets/characters/postac_ann.mov",
      previewVideo: "./assets/characters/postac_ann.mov",
      unlockWorld: "winter",
      storeWorld: "winter",
      storeNote: "Animowany zimowy skin z własnym atakiem.",
    },
    {
      id: "ivy",
      name: "Ivy",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/ivy.jpeg",
      unlockWorld: "tower",
      storeNote: "Nagroda Super ze Świata Dżungli.",
    },
    {
      id: "coco-nkosi",
      name: "Coco N'Kosi",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/ivy.jpeg",
      previewVideo: "./assets/characters/coco.mp4",
      previewPoster: false,
      unlockWorld: "tower",
      storeNote: "Darmowa animowana postać za zebranie wszystkich zwierząt z Księgi Dżungli.",
    },
    {
      id: "aslan",
      name: "Aslan",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/aslan.jpeg",
      unlockWorld: "tower",
      storeNote: "Nagroda Super ze Świata Dżungli.",
    },
    {
      id: "ozdobiona-ivy",
      name: "Ozdobiona Ivy",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/ozdobiona.jpeg",
      unlockWorld: "tower",
      storeNote: "Nagroda Super z dalszej części Świata Dżungli.",
    },
    {
      id: "aslan-za-mlodu",
      name: "Aslan za Młodu",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/mlodu.jpeg",
      unlockWorld: "tower",
      storeNote: "Nagroda za koniec dalszej części Świata Dżungli.",
    },
    {
      id: "ivy-obronczyni-dzungli",
      name: "Ivy Obrończyni Dżunglii",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/obronczyni.jpeg",
      unlockWorld: "tower",
      storeNote: "Nagroda Super z dalszej części Świata Dżungli.",
    },
    {
      id: "kora",
      name: "Kora",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/kora.jpeg",
      unlockWorld: "tower",
      storeNote: "Nagroda Super ze Świata Dżungli z własnym atakiem.",
    },
    {
      id: "krolowa-kora",
      name: "Królowa Kora",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/krolowa.jpeg",
      unlockWorld: "tower",
      storeNote: "Nagroda Super z końcówki Świata Dżungli.",
    },
    {
      id: "wojownik-aslan",
      name: "Wojownik Aslan",
      price: 0,
      cashPriceLabel: "",
      image: "./assets/characters/wojownik.jpeg",
      unlockWorld: "tower",
      storeNote: "Nagroda za finał dalszej części Świata Dżungli.",
    },
    {
      id: "roco-nkosi",
      name: "Roco N'kosi",
      price: 20000,
      cashPriceLabel: "",
      image: "./assets/characters/ivy.jpeg",
      previewVideo: "./assets/characters/roco.mp4",
      previewPoster: false,
      unlockWorld: "tower",
      storeWorld: "tower",
      storeNote: "Animowana dżunglowa postać sklepowa z atakiem jak Coco.",
    },
    {
      id: "wodzu",
      name: "Wodzu",
      price: 20000,
      cashPriceLabel: "",
      image: "./assets/attacks/wodza.jpeg",
      previewVideo: "./assets/characters/wodzu.mp4",
      previewPoster: false,
      unlockWorld: "tower",
      storeWorld: "tower",
      storeNote: "Animowana dżunglowa postać sklepowa z własnym atakiem wodza.",
    },
    {
      id: "naomi",
      name: "Naomi",
      price: 20000,
      cashPriceLabel: "",
      image: "./assets/characters/aslan.jpeg",
      previewVideo: "./assets/characters/naomi.mp4",
      previewPoster: false,
      unlockWorld: "tower",
      storeWorld: "tower",
      storeNote: "Animowana dżunglowa postać sklepowa z atakiem jak Aslan.",
    },
    {
      id: "kira",
      name: "Kira",
      price: 10000,
      cashPriceLabel: "",
      image: "./assets/characters/kira.jpeg",
      unlockWorld: "tower",
      storeWorld: "tower",
      storeNote: "Dżunglowa sklepowa postać z własnym atakiem i dźwiękiem jak Aslan.",
    },
  ],
  pets: [
    {
      id: "pies-magik",
      name: "Pies Magik",
      price: 500,
      image: "./assets/pets/platoya_1.png",
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
      image: "./assets/pets/platoya_2.png",
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
      image: "./assets/pets/platoya_3.png",
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
      image: "./assets/pets/platoya_4.png",
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
      image: "./assets/pets/platoya_malpka.png",
      categoryId: "magicy",
      rarityLabel: "Legendarny PlatoYa",
      rarityClass: "legendary",
      description: "Przeskakuje na najblizszego robota i zadaje mu 200 pz na sekunde. Po pokonaniu celu wraca do ciebie i leczy o 200 pz na sekunde, dopoki nie odzyskasz calego zycia.",
    },
    {
      id: "niedzwiedz-polarny",
      name: "Niedźwiedź Polarny",
      price: 0,
      image: "./assets/pets/platoya_6.png",
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
      image: "./assets/pets/platoya_7.png",
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
      image: "./assets/pets/platoya_9.png",
      categoryId: "balonowi",
      unlockWorld: "winter",
      rarityLabel: "Super PlatoYa",
      rarityClass: "ultra",
      description: "Wcisnij W, aby na 3 sekundy zatrzymac ruch, wlaczyc zimowa tarcze i po niej odnowic 20% zycia.",
    },
    {
      id: "jaguar",
      name: "Jaguar",
      price: 100,
      image: "./assets/pets/jaguar.jpeg",
      categoryId: "dzungla",
      unlockWorld: "tower",
      rarityLabel: "Dżunglowy PlatoYa",
      rarityClass: "legendary",
      description: "Po spadku poniżej kolejnych progów życia tworzy zielone pole, które odpycha roboty od ciebie przez 5 sekund.",
    },
    {
      id: "papuga-dzungli",
      name: "Papuga",
      price: 100,
      image: "./assets/pets/papuga.jpeg",
      categoryId: "dzungla",
      unlockWorld: "tower",
      rarityLabel: "Dżunglowy PlatoYa",
      rarityClass: "legendary",
      description: "Za każdym razem leczy cię o 10% obrażeń zadanych ci przez roboty.",
    },
    {
      id: "malpa-dzungli",
      name: "Małpa",
      price: 100,
      image: "./assets/pets/małpka.jpeg",
      categoryId: "dzungla",
      unlockWorld: "tower",
      rarityLabel: "Dżunglowy PlatoYa",
      rarityClass: "legendary",
      description: "Oznacza na zielono dwa roboty, którym zadajesz o 50% więcej obrażeń.",
    },
    {
      id: "waz-dzungli",
      name: "Wąż",
      price: 100,
      image: "./assets/pets/wąż.jpeg",
      categoryId: "dzungla",
      unlockWorld: "tower",
      rarityLabel: "Dżunglowy PlatoYa",
      rarityClass: "legendary",
      description: "Co 6 sekund zatruwa dwa najbliższe roboty, mocno je spowalnia i osłabia ich obrażenia na 5 sekund.",
    },
    {
      id: "slon-dzungli",
      name: "Słoń",
      price: 100,
      image: "./assets/pets/słoń.jpeg",
      categoryId: "dzungla",
      unlockWorld: "tower",
      rarityLabel: "Dżunglowy PlatoYa",
      rarityClass: "legendary",
      description: "Co 10 sekund porywa jednego robota na dziką przejażdżkę po mapie, a po 10 sekundach go eliminuje.",
    },
    {
      id: "zaba-dzungli",
      name: "Żaba",
      price: 100,
      image: "./assets/pets/żaba.jpeg",
      categoryId: "dzungla",
      unlockWorld: "tower",
      rarityLabel: "Dżunglowy PlatoYa",
      rarityClass: "legendary",
      description: "Co 5 sekund tworzy małą toksyczną kałużę, która leczy graczy i rani roboty.",
    },
    {
      id: "leniwiec-dzungli",
      name: "Leniwiec",
      price: 100,
      image: "./assets/pets/leniwiec.jpeg",
      categoryId: "dzungla",
      unlockWorld: "tower",
      rarityLabel: "Dżunglowy PlatoYa",
      rarityClass: "legendary",
      description: "Co 10 sekund spowalnia wszystko poza graczami na 8 sekund.",
    },
    {
      id: "tygrys-dzungli",
      name: "Tygrys",
      price: 100,
      image: "./assets/pets/tygrys.jpeg",
      categoryId: "dzungla",
      unlockWorld: "tower",
      rarityLabel: "Dżunglowy PlatoYa",
      rarityClass: "legendary",
      description: "Im mniej życia ci brakuje, tym więcej dodatkowych obrażeń zadajesz robotom.",
    },
    {
      id: "krokodyl-dzungli",
      name: "Krokodyl",
      price: 100,
      image: "./assets/pets/krokodyl.jpeg",
      categoryId: "dzungla",
      unlockWorld: "tower",
      rarityLabel: "Dżunglowy PlatoYa",
      rarityClass: "legendary",
      description: "Po krótkiej ochronie przy graczu chowa się pod ziemię, tropi robota i zabija go jednym wyskokiem.",
    },
  ],
  coins: [
    { id: "coins-10000", name: "10000 monet", priceLabel: "13,99zł", amount: 10000, image: COIN_REWARD_IMAGE },
    { id: "coins-20000", name: "20000 monet", priceLabel: "24,99zł", amount: 20000, image: COIN_REWARD_IMAGE },
  ],
  diamonds: [
    { id: "diamonds-35", name: "35 klejnotow", priceLabel: "5,99zł", amount: 35, image: DIAMOND_REWARD_IMAGE },
    { id: "diamonds-119", name: "119 klejnotow", priceLabel: "19,99zł", amount: 119, image: DIAMOND_REWARD_IMAGE },
  ],
  trophies: [
    {
      id: "trophies-500-code",
      name: "500 pucharow",
      price: 1,
      amount: 500,
      image: TROPHY_ICON_IMAGE,
      description: "Specjalna oferta, ktora wymaga wpisania kodu.",
    },
  ],
  bundles: [
    {
      id: "winter-ice-pack",
      name: "Pakiet Zimowego Swiata",
      cashPriceLabel: "19,99zł",
      image: "./assets/shop/pakiet_1.png",
      storeWorld: "winter",
      rewardCharacterIds: ["lyzwiarka-lily", "lyzwiarz-leo"],
      description: "Zawiera postacie Łyżwiarka Lily i Łyżwiaż Leo.",
    },
  ],
  crates: [
    {
      id: "drewniana-skrzynia",
      name: "Drewniana Skrzynia",
      image: "./assets/shop/skrzynia_1.png",
      fallbackText: "SKRZYNIA",
      betaFreeClaims: 3,
      description: "Nowość beta. Odbierz darmowe skrzynie z oferty i sprawdź, co jest w środku.",
    },
    {
      id: "dzunglowa-skrzynia",
      name: "Skrzynia Dżungli",
      image: "./assets/shop/skrzyniadzungla.jpeg",
      fallbackText: "DZUNGLA",
      betaFreeClaims: 0,
      description: "Daje wyłącznie diamenty oraz ma szansę na dżunglowego PlatoYasa.",
    },
  ],
  weapons: [
    { id: "atak-1", name: "Atak 1", price: 0, image: "./assets/attacks/atak_2.png" },
  ],
};

const PET_CATEGORIES = [
  {
    id: "magicy",
    name: "Magicy",
    image: "./assets/pets/platoya_1.png",
    fallbackText: "MAGICY",
  },
  {
    id: "roslinozercy",
    name: "Roslinozercy",
    image: "./assets/pets/platoya_2.png",
    fallbackText: "ROSLINOZERCY",
  },
  {
    id: "miasto-chomikow",
    name: "Miasto Chomikow",
    image: "./assets/pets/platoya_3.png",
    fallbackText: "MIASTO CHOMIKOW",
  },
  {
    id: "balonowi",
    name: "Balonowi",
    image: "./assets/pets/platoya_4.png",
    fallbackText: "BALONOWI",
  },
  {
    id: "podwodni-nurkowie",
    name: "Podwodni Nurkowie",
    image: "./assets/pets/platoya_6.png",
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
  {
    id: "tower",
    label: "Swiat Dzungli",
  },
];

const TROPHY_WORLDS = [
  {
    id: "alley",
    name: "Świat Magików",
    threshold: 0,
    rewards: [
      { id: "alley-50-coins", trophies: 50, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-100-crate", trophies: 100, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "alley-150-diamonds", trophies: 150, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-200-pies-magik", trophies: 200, type: "plato-keys", amount: 1, label: "1 klucz PlatoYI", keyTheme: "magicians" },
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
      { id: "alley-800-l-psotka", trophies: 800, type: "plato-keys", amount: 2, label: "2 klucze PlatoYI", keyTheme: "magicians" },
      { id: "alley-850-diamonds", trophies: 850, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-900-crate", trophies: 900, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "alley-950-coins", trophies: 950, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-1000-linda", trophies: 1000, type: "character", itemId: "linda", label: "Linda" },
      { id: "alley-1050-diamonds", trophies: 1050, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-1100-crate", trophies: 1100, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "alley-1150-coins", trophies: 1150, type: "coins", amount: 300, label: "300 monet" },
      { id: "alley-1200-crate", trophies: 1200, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "alley-1250-diamonds", trophies: 1250, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "alley-1300-el-kruk", trophies: 1300, type: "plato-keys", amount: 2, label: "2 klucze PlatoYI", keyTheme: "magicians" },
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
      { id: "alley-1900-diamonds", trophies: 1900, type: "plato-keys", amount: 1, label: "1 klucz PlatoYI", keyTheme: "magicians" },
      { id: "alley-1950-coins", trophies: 1950, type: "coins", amount: 5000, label: "5000 monet" },
      { id: "alley-2000-millo-jako-elfie", trophies: 2000, type: "character", itemId: "millo-jako-elfie", label: "Millo jako Elfie" },
    ],
  },
  {
    id: "winter",
    name: "Świat Zimowy",
    threshold: MAGICIANS_WORLD_END_TROPHIES,
    rewards: [
      { id: "winter-2050-coins", trophies: 2050, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-2100-crate", trophies: 2100, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "winter-2150-diamonds", trophies: 2150, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-2200-niedzwiedz-polarny", trophies: 2200, type: "plato-keys", amount: 1, label: "1 klucz PlatoYI", keyTheme: "winter" },
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
      { id: "winter-2800-sniezynka", trophies: 2800, type: "plato-keys", amount: 2, label: "2 klucze PlatoYI", keyTheme: "winter" },
      { id: "winter-2850-diamonds", trophies: 2850, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-2900-crate", trophies: 2900, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "winter-2950-coins", trophies: 2950, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-3000-tricky", trophies: 3000, type: "character", itemId: "tricky", label: "Tricky" },
      { id: "winter-3050-diamonds", trophies: 3050, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-3100-crate", trophies: 3100, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "winter-3150-coins", trophies: 3150, type: "coins", amount: 300, label: "300 monet" },
      { id: "winter-3200-crate", trophies: 3200, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Skrzynia" },
      { id: "winter-3250-diamonds", trophies: 3250, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "winter-3300-sowa", trophies: 3300, type: "plato-keys", amount: 2, label: "2 klucze PlatoYI", keyTheme: "winter" },
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
      { id: "winter-3900-diamonds", trophies: 3900, type: "plato-keys", amount: 1, label: "1 darmowy klucz PlatoYI", keyTheme: "winter" },
      { id: "winter-3950-coins", trophies: 3950, type: "coins", amount: 5000, label: "5000 monet" },
      { id: "winter-4000-leo", trophies: 4000, type: "character", itemId: "leo", label: "Leo" },
    ],
  },
  {
    id: "tower",
    name: "Świat Dżungli",
    threshold: 4000,
    rewards: [
      { id: "tower-4050-jungle-crate", trophies: 4050, type: "crate", crateId: "dzunglowa-skrzynia", amount: 1, label: "Skrzynia Dżungli" },
      { id: "tower-4100-coins", trophies: 4100, type: "coins", amount: 500, label: "500 monet" },
      { id: "tower-4150-diamonds", trophies: 4150, type: "diamonds", amount: 10, label: "10 diamentów" },
      { id: "tower-4200-profile-photo-drzemka", trophies: 4200, type: "profile-photo", itemId: "drzemka-pod-golym-niebem", label: "Drzemka pod gołym niebem" },
      { id: "tower-4250-diamonds", trophies: 4250, type: "diamonds", amount: 10, label: "10 diamentów" },
      { id: "tower-4300-jungle-crate", trophies: 4300, type: "crate", crateId: "dzunglowa-skrzynia", amount: 1, label: "Skrzynia Dżungli" },
      { id: "tower-4350-wood-crate", trophies: 4350, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-4400-diamonds", trophies: 4400, type: "diamonds", amount: 5, label: "5 diamentów" },
      { id: "tower-4450-coins", trophies: 4450, type: "coins", amount: 300, label: "300 monet" },
      { id: "tower-4500-ivy", trophies: 4500, type: "character", itemId: "ivy", label: "Ivy" },
      { id: "tower-4550-jungle-crate", trophies: 4550, type: "crate", crateId: "dzunglowa-skrzynia", amount: 1, label: "Skrzynia Dżungli" },
      { id: "tower-4600-diamonds", trophies: 4600, type: "diamonds", amount: 10, label: "10 diamentów" },
      { id: "tower-4650-profile-photo-papugi", trophies: 4650, type: "profile-photo", itemId: "raj-dla-papug", label: "Raj dla papug" },
      { id: "tower-4700-coins", trophies: 4700, type: "coins", amount: 500, label: "500 monet" },
      { id: "tower-4750-jungle-crate", trophies: 4750, type: "crate", crateId: "dzunglowa-skrzynia", amount: 1, label: "Skrzynia Dżungli" },
      { id: "tower-4800-diamonds", trophies: 4800, type: "diamonds", amount: 10, label: "10 diamentów" },
      { id: "tower-4850-coins", trophies: 4850, type: "coins", amount: 300, label: "300 monet" },
      { id: "tower-4900-jungle-crate", trophies: 4900, type: "crate", crateId: "dzunglowa-skrzynia", amount: 1, label: "Skrzynia Dżungli" },
      { id: "tower-4950-diamonds", trophies: 4950, type: "diamonds", amount: 10, label: "10 diamentów" },
      { id: "tower-5000-aslan", trophies: 5000, type: "character", itemId: "aslan", label: "Aslan" },
      { id: "tower-5050-diamonds", trophies: 5050, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "tower-5100-wood-crate", trophies: 5100, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-5150-coins", trophies: 5150, type: "coins", amount: 300, label: "300 monet" },
      { id: "tower-5200-wood-crate", trophies: 5200, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-5250-diamonds", trophies: 5250, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "tower-5300-profile-photo-kapiel", trophies: 5300, type: "profile-photo", itemId: "bagienna-kapiel", label: "Bagienna Kąpiel" },
      { id: "tower-5350-coins", trophies: 5350, type: "coins", amount: 300, label: "300 monet" },
      { id: "tower-5400-wood-crate", trophies: 5400, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-5450-diamonds", trophies: 5450, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "tower-5500-ozdobiona-ivy", trophies: 5500, type: "character", itemId: "ozdobiona-ivy", label: "Ozdobiona Ivy" },
      { id: "tower-5550-coins", trophies: 5550, type: "coins", amount: 300, label: "300 monet" },
      { id: "tower-5600-wood-crate", trophies: 5600, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-5650-diamonds", trophies: 5650, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "tower-5700-wood-crate-free", trophies: 5700, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-5750-profile-photo-sledztwo", trophies: 5750, type: "profile-photo", itemId: "sledztwo-w-sprawie", label: "Śledztwo w sprawie" },
      { id: "tower-5800-coins", trophies: 5800, type: "coins", amount: 300, label: "300 monet" },
      { id: "tower-5850-wood-crate", trophies: 5850, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-5900-diamonds", trophies: 5900, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "tower-5950-coins", trophies: 5950, type: "coins", amount: 300, label: "300 monet" },
      { id: "tower-6000-aslan-za-mlodu", trophies: 6000, type: "character", itemId: "aslan-za-mlodu", label: "Aslan za Młodu" },
      { id: "tower-6050-diamonds", trophies: 6050, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "tower-6100-coins", trophies: 6100, type: "coins", amount: 800, label: "800 monet" },
      { id: "tower-6150-wood-crate", trophies: 6150, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-6200-diamonds", trophies: 6200, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "tower-6250-ivy-obronczyni-dzungli", trophies: 6250, type: "character", itemId: "ivy-obronczyni-dzungli", label: "Ivy Obrończyni Dżunglii" },
      { id: "tower-6300-coins", trophies: 6300, type: "coins", amount: 800, label: "800 monet" },
      { id: "tower-6350-jungle-crate", trophies: 6350, type: "crate", crateId: "dzunglowa-skrzynia", amount: 1, label: "Skrzynia Dżungli" },
      { id: "tower-6400-diamonds", trophies: 6400, type: "diamonds", amount: 10, label: "10 diamentów" },
      { id: "tower-6450-coins", trophies: 6450, type: "coins", amount: 800, label: "800 monet" },
      { id: "tower-6500-kora", trophies: 6500, type: "character", itemId: "kora", label: "Kora" },
      { id: "tower-6550-diamonds", trophies: 6550, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "tower-6600-wood-crate", trophies: 6600, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-6700-coins", trophies: 6700, type: "coins", amount: 800, label: "800 monet" },
      { id: "tower-6750-krolowa-kora", trophies: 6750, type: "character", itemId: "krolowa-kora", label: "Królowa Kora" },
      { id: "tower-6800-wood-crate-free", trophies: 6800, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-6850-coins", trophies: 6850, type: "coins", amount: 5000, label: "5000 monet" },
      { id: "tower-6900-diamonds", trophies: 6900, type: "diamonds", amount: 3, label: "3 diamenty" },
      { id: "tower-6950-wood-crate-free", trophies: 6950, type: "crate", crateId: "drewniana-skrzynia", amount: 1, label: "Drewniana Skrzynia" },
      { id: "tower-7000-wojownik-aslan", trophies: 7000, type: "character", itemId: "wojownik-aslan", label: "Wojownik Aslan" },
    ],
  },
];

const state = loadState();
const ui = {
  currentView: "lobby",
  storeTab: "characters",
  storeMode: DEFAULT_STORE_MODE,
  storeScrollLeft: null,
  inventoryTab: "characters",
  friendsTab: "friends",
  bookTab: "book",
  trophyWorldId: state.activeTrophyWorld || "alley",
  nextGameMode: "solo",
  pendingMultiplayerLaunch: null,
  pendingPartyLaunch: null,
  profileTab: "me",
  profileEditMode: false,
  profileEditSection: "",
};

const game = createGameState();
const multiplayer = createMultiplayerState();
const socialProfile = createSocialProfileState();
const party = createPartyState();

const loadingScreen = document.getElementById("loading-screen");
const orientationLockOverlay = document.getElementById("orientation-lock-overlay");
const gameLaunchBackdrop = document.getElementById("game-launch-backdrop");
const gameLaunchKicker = document.getElementById("game-launch-kicker");
const gameLaunchTitle = document.getElementById("game-launch-title");
const gameLaunchCopy = document.getElementById("game-launch-copy");
const gameLaunchStage = document.getElementById("game-launch-stage");
const appScreen = document.getElementById("app-screen");
const appShell = document.querySelector(".app-shell");
const loadingFillText = document.getElementById("loading-fill-text");
const loadingProgressFill = document.getElementById("loading-progress-fill");
const progressValue = document.getElementById("progress-value");
const alleyIntroBackdrop = document.getElementById("alley-intro-backdrop");
const alleyIntroScene = document.getElementById("alley-intro-scene");
const alleyIntroImage = document.getElementById("alley-intro-image");
const alleyIntroTitle = document.getElementById("alley-intro-title");
const alleyIntroCopy = document.getElementById("alley-intro-copy");
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
const storeCharacterPurchaseKicker = document.getElementById("store-character-purchase-kicker");
const storeCharacterPurchaseTitle = document.getElementById("store-character-purchase-title");
const storeCharacterPurchaseCopy = document.getElementById("store-character-purchase-copy");
const storeCharacterPurchaseActions = document.getElementById("store-character-purchase-actions");
const storeCharacterPurchaseConfirmButton = document.getElementById("store-character-purchase-confirm-button");
const storeCharacterPurchaseMissing = document.getElementById("store-character-purchase-missing");
const magicMachineBackdrop = document.getElementById("magic-machine-backdrop");
const magicMachineScene = document.getElementById("magic-machine-scene");
const magicMachineCard = document.getElementById("magic-machine-card");
const magicMachineArt = document.getElementById("magic-machine-art");
const magicMachineImage = document.getElementById("magic-machine-image");
const magicMachineLaunchBall = document.getElementById("magic-machine-launch-ball");
const magicMachineBallSplit = document.getElementById("magic-machine-ball-split");
const magicMachineRewardGlow = document.getElementById("magic-machine-reward-glow");
const magicMachineRewardImage = document.getElementById("magic-machine-reward-image");
const magicMachineLabel = document.getElementById("magic-machine-label");
const magicMachineCloseButton = document.getElementById("magic-machine-close-button");
const magicMachineWord = document.getElementById("magic-machine-word");
const magicMachineNote = document.getElementById("magic-machine-note");
const magicMachinePrice = document.getElementById("magic-machine-price");
const coinBalance = document.getElementById("coin-balance");
const trophyBalance = document.getElementById("trophy-balance");
const diamondBalance = document.getElementById("diamond-balance");
const balanceTarget = document.getElementById("balance-target");
const lobbyBalanceTarget = document.getElementById("lobby-balance-target");
const lobbyCoinBalance = document.getElementById("lobby-coin-balance");
const lobbyDiamondBalance = document.getElementById("lobby-diamond-balance");
const storeBalanceTarget = document.getElementById("store-balance-target");
const storeCoinBalance = document.getElementById("store-coin-balance");
const storeDiamondBalance = document.getElementById("store-diamond-balance");
const trophyBalanceTarget = trophyBalance?.closest(".balance-box") || null;
const lobbyPlayButton = document.getElementById("lobby-play-button");
const lobbyFriendsButton = document.getElementById("lobby-friends-button");
const lobbyBookButton = document.getElementById("lobby-book-button");
const lobbyLayout = document.querySelector(".lobby-layout");
const lobbyProfileButton = document.getElementById("lobby-profile-button");
const lobbyNickname = document.getElementById("lobby-nickname");
const firstGameGuide = document.getElementById("first-game-guide");
const bookGuidePrompt = document.getElementById("book-guide-prompt");
const bookGuideBackdrop = document.getElementById("book-guide-backdrop");
const bookGuideScene = document.getElementById("book-guide-scene");
const bookGuideCard = document.getElementById("book-guide-card");
const bookGuideImage = document.getElementById("book-guide-image");
const bookGuideArtFrame = bookGuideImage?.parentElement || null;
const bookGuideTitle = document.getElementById("book-guide-title");
const bookGuideCopy = document.getElementById("book-guide-copy");
const bookGuideConfirmButton = document.getElementById("book-guide-confirm-button");
const lobbySettingsButton = document.getElementById("lobby-settings-button");
const accountResetButton = document.getElementById("account-reset-button");
const settingsBackdrop = document.getElementById("settings-backdrop");
const settingsCloseButton = document.getElementById("settings-close-button");
const settingsPhoneStatus = document.getElementById("settings-phone-status");
const phoneModeToggle = document.getElementById("phone-mode-toggle");
const settingsAccountStatus = document.getElementById("settings-account-status");
const settingsNewPassword = document.getElementById("settings-new-password");
const settingsSetPasswordButton = document.getElementById("settings-set-password-button");
const settingsLoginNickname = document.getElementById("settings-login-nickname");
const settingsLoginPassword = document.getElementById("settings-login-password");
const settingsLoginButton = document.getElementById("settings-login-button");
const lobbyAvatar = document.getElementById("lobby-avatar");
const lobbyAvatarFrame = lobbyAvatar?.parentElement || null;
const lobbyPet = document.getElementById("lobby-pet");
const petWrapper = document.getElementById("pet-wrapper");
const lobbySelfReadyBadge = document.getElementById("lobby-self-ready-badge");
const partyTeammateShowcase = document.getElementById("party-teammate-showcase");
const partyTeammateReadyBadge = document.getElementById("lobby-party-ready-badge");
const partyTeammateAvatarFrame = document.getElementById("party-teammate-avatar-frame");
const partyTeammatePetFrame = document.getElementById("party-teammate-pet-frame");
const partyTeammateName = document.getElementById("party-teammate-name");
const partyLeaveButton = document.getElementById("party-leave-button");
const profileBackdrop = document.getElementById("profile-backdrop");
const profileCloseButton = document.getElementById("profile-close-button");
const profileMainCard = document.getElementById("profile-main-card");
const profileEditCard = document.getElementById("profile-edit-card");
const profileTabMeButton = document.getElementById("profile-tab-me");
const profileTabUsersButton = document.getElementById("profile-tab-users");
const profileTabPanelMe = document.getElementById("profile-tab-panel-me");
const profileTabPanelUsers = document.getElementById("profile-tab-panel-users");
const profileCloudStatus = document.getElementById("profile-cloud-status");
const profileNameHeading = document.getElementById("profile-name-heading");
const profileNameButton = document.getElementById("profile-name-button");
const profileWorldBar = document.getElementById("profile-world-bar");
const profileThemeButton = document.getElementById("profile-theme-button");
const profileThemePicker = document.getElementById("profile-theme-picker");
const profileHeroNote = document.getElementById("profile-hero-note");
const profileSummaryName = document.getElementById("profile-summary-name");
const profileSummaryCharacter = document.getElementById("profile-summary-character");
const profileSummaryPet = document.getElementById("profile-summary-pet");
const profileEditButton = document.getElementById("profile-edit-button");
const profileEditPanel = document.getElementById("profile-edit-panel");
const profileEditKicker = document.getElementById("profile-edit-kicker");
const profileEditCloseButton = document.getElementById("profile-edit-close-button");
const profileCancelEditButton = document.getElementById("profile-cancel-edit-button");
const profileNameInput = document.getElementById("profile-name-input");
const profileSaveNameButton = document.getElementById("profile-save-name-button");
const profileFavoriteCharacterSelect = document.getElementById("profile-favorite-character-select");
const profileFavoritePetSelect = document.getElementById("profile-favorite-pet-select");
const profileSaveFavoritesButton = document.getElementById("profile-save-favorites-button");
const profileFavoriteCharacterFrame = document.getElementById("profile-favorite-character-frame");
const profileCharacterButton = document.getElementById("profile-character-button");
const profileFavoriteCharacterLabel = document.getElementById("profile-favorite-character-label");
const profileFavoritePetFrame = document.getElementById("profile-favorite-pet-frame");
const profileFavoritePetLabel = document.getElementById("profile-favorite-pet-label");
const profileStatTrophies = document.getElementById("profile-stat-trophies");
const profileStatWorld = document.getElementById("profile-stat-world");
const profileStatGames = document.getElementById("profile-stat-games");
const profileStatRobots = document.getElementById("profile-stat-robots");
const profileStatCharacters = document.getElementById("profile-stat-characters");
const profileStatPets = document.getElementById("profile-stat-pets");
const profileUsersList = document.getElementById("profile-users-list");
const profileUserPreviewCard = document.getElementById("profile-user-preview-card");
const profileOtherMainCard = document.getElementById("profile-other-main-card");
const profileOtherName = document.getElementById("profile-other-name");
const profileOtherWorldBar = document.getElementById("profile-other-world-bar");
const profileOtherCharacterFrame = document.getElementById("profile-other-character-frame");
const profileOtherCharacterLabel = document.getElementById("profile-other-character-label");
const profileOtherPetFrame = document.getElementById("profile-other-pet-frame");
const profileOtherPetLabel = document.getElementById("profile-other-pet-label");
const profileOtherTrophies = document.getElementById("profile-other-trophies");
const profileOtherWorld = document.getElementById("profile-other-world");
const profileOtherGames = document.getElementById("profile-other-games");
const profileOtherRobots = document.getElementById("profile-other-robots");
const profileOtherCharacters = document.getElementById("profile-other-characters");
const profileOtherPets = document.getElementById("profile-other-pets");
const friendsContent = document.getElementById("friends-content");
const friendsSelfId = document.getElementById("friends-self-id");
const friendsCopyIdButton = document.getElementById("friends-copy-id-button");
const friendsInviteIdInput = document.getElementById("friends-invite-id-input");
const friendsInviteIdButton = document.getElementById("friends-invite-id-button");
const bookContent = document.getElementById("book-content");
const storeGridWrap = document.getElementById("store-grid-wrap");
const storeGrid = document.getElementById("store-grid");
const inventoryGrid = document.getElementById("inventory-grid");
const wardrobeOverview = document.getElementById("wardrobe-overview");
const trophyGrid = document.getElementById("trophy-grid");
const worldHeaderPanel = document.getElementById("world-header-panel");
const trophyRoadTitleBadge = document.getElementById("trophy-road-title-badge");
const worldTitle = document.getElementById("world-title");
const worldProgressValue = document.getElementById("world-progress-value");
const worldHeaderActions = document.getElementById("world-header-actions");
const worldHeaderMiniProgress = document.getElementById("world-header-mini-progress");
const worldHeaderMiniProgressFill = document.getElementById("world-header-mini-progress-fill");
const worldHeaderMachineButton = document.getElementById("world-header-machine-button");
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
const storeDragState = {
  active: false,
  pointerId: null,
  startX: 0,
  startScrollLeft: 0,
  moved: false,
  suppressClickUntil: 0,
};
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
const nicknameBackdrop = document.getElementById("nickname-backdrop");
const nicknameInput = document.getElementById("nickname-input");
const nicknameNote = document.getElementById("nickname-note");
const nicknameSaveButton = document.getElementById("nickname-save-button");
const multiplayerBackdrop = document.getElementById("multiplayer-backdrop");
const multiplayerCloseButton = document.getElementById("multiplayer-close-button");
const multiplayerTitle = document.getElementById("multiplayer-title");
const playModeChoice = document.getElementById("play-mode-choice");
const playRobotsButton = document.getElementById("play-robots-button");
const playPlayersButton = document.getElementById("play-players-button");
const multiplayerQueuePanel = document.getElementById("multiplayer-queue-panel");
const multiplayerOwnNick = document.getElementById("multiplayer-own-nick");
const multiplayerStatusChip = document.getElementById("multiplayer-status-chip");
const multiplayerNote = document.getElementById("multiplayer-note");
const multiplayerTimer = document.getElementById("multiplayer-timer");
const multiplayerPlayerList = document.getElementById("multiplayer-player-list");
const multiplayerEditNickButton = document.getElementById("multiplayer-edit-nick-button");
const multiplayerCancelButton = document.getElementById("multiplayer-cancel-button");

const gameStage = document.getElementById("game-stage");
const gameMap = document.getElementById("game-map");
const waveBanner = document.getElementById("wave-banner");
const waveBannerTitle = document.getElementById("wave-banner-title");
const waveBannerLabel = document.getElementById("wave-banner-label");
const waveBannerCountdown = document.getElementById("wave-banner-countdown");
const waveBannerPlayers = document.getElementById("wave-banner-players");
const gameBackButton = document.getElementById("game-back-button");
const multiplayerPlayersLayer = document.getElementById("multiplayer-players-layer");
const playerEntity = document.getElementById("player-entity");
const playerHealthLabel = document.getElementById("player-health-label");
const playerShield = document.getElementById("player-shield");
const gamePlayerImage = document.getElementById("game-player-image");
const gamePlayerFrame = gamePlayerImage?.parentElement || null;
const opponentEntity = document.getElementById("opponent-entity");
const opponentHealthLabel = document.getElementById("opponent-health-label");
const opponentNickname = document.getElementById("opponent-nickname");
const opponentImage = document.getElementById("opponent-image");
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
const jungleFieldsLayer = document.getElementById("jungle-fields-layer");
const projectilesLayer = document.getElementById("projectiles-layer");
const robotsLayer = document.getElementById("robots-layer");
const effectsLayer = document.getElementById("effects-layer");
const gameTutorialOverlay = document.getElementById("game-tutorial-overlay");
const gameTutorialSpotlight = document.getElementById("game-tutorial-spotlight");
const gameTutorialMessage = document.getElementById("game-tutorial-message");
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
  friends: document.getElementById("friends-view"),
  book: document.getElementById("book-view"),
  game: document.getElementById("game-view"),
  trophies: document.getElementById("trophies-view"),
};

const backgroundMusic = new Audio(BACKGROUND_MUSIC_SOURCES.alley[0]);
backgroundMusic.loop = true;
backgroundMusic.preload = "auto";
backgroundMusic.volume = BACKGROUND_MUSIC_DEFAULT_VOLUME;
backgroundMusic.dataset.currentSource = BACKGROUND_MUSIC_SOURCES.alley[0];
backgroundMusic.addEventListener("error", () => {
  const failedSource = backgroundMusic.dataset.currentSource || "";
  if (failedSource) {
    unavailableSoundSources.add(failedSource);
  }
  syncBackgroundMusic();
});

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
let magicMachineBusy = false;
let magicMachineStage = "buy";
let magicMachineRewardPetId = "";
let magicMachineSequenceId = 0;
let bookGuideSequenceRunning = false;
let bookGuideStageResolve = null;
let trophyWorldBatchClaimBusy = false;
let trophyWorldTransitionBusy = false;
let walkingLoopAudio = null;
let soundEffectsAudioContext = null;
let bundleUnlockTimer = null;
let bundleUnlockResolve = null;
let nicknamePromptAfterSave = null;
let remoteProfileSyncSuspendLevel = 0;
let gameLaunchTransitionBusy = false;
let gameLaunchTransitionToken = 0;
const audioBoostMap = new WeakMap();

bindEvents();
renderAll();
syncOrientationLock();
bootApp();

function bindEvents() {
  document.querySelectorAll(".lobby-nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button === lobbyBookButton && shouldShowJungleBookGuidePrompt()) {
        void startJungleBookGuideFlow();
        return;
      }

      if (button.dataset.view) {
        if (button.dataset.view === "store") {
          ui.storeMode = DEFAULT_STORE_MODE;
        }
        ui.nextGameMode = button.dataset.view === "game" ? "solo" : ui.nextGameMode;
        showView(button.dataset.view);
      }
    });
  });

  if (lobbyPlayButton) {
    lobbyPlayButton.addEventListener("click", () => {
      ui.pendingMultiplayerLaunch = null;
      ui.nextGameMode = "solo";
      togglePartyReady();
    });
  }

  if (partyLeaveButton) {
    partyLeaveButton.addEventListener("click", () => {
      leaveParty();
    });
  }

  if (gameBackButton) {
    gameBackButton.addEventListener("click", () => {
      if (!game.active) {
        return;
      }

      requestPauseGame();
    });
  }

  if (bookGuideConfirmButton) {
    bookGuideConfirmButton.addEventListener("click", () => {
      advanceJungleBookGuideStage();
    });
  }

  document.querySelectorAll("[data-view='lobby']").forEach((button) => {
    button.addEventListener("click", () => {
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

      if (group === "friends") {
        ui.friendsTab = tab;
        renderFriendsView();
      }

      syncTabs();
    });
  });

  storeGrid.addEventListener("click", handleStoreClick);
  storeGridWrap.addEventListener("pointerdown", handleStoreDragStart);
  storeGridWrap.addEventListener("pointermove", handleStoreDragMove);
  storeGridWrap.addEventListener("pointerup", handleStoreDragEnd);
  storeGridWrap.addEventListener("pointercancel", handleStoreDragEnd);
  storeGridWrap.addEventListener("scroll", handleStoreScroll, { passive: true });
  storeGridWrap.addEventListener("wheel", handleStoreWheelScroll, { passive: false });
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

  if (lobbyProfileButton) {
    lobbyProfileButton.addEventListener("click", () => {
      openProfilePanel("me");
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

  if (profileCloseButton) {
    profileCloseButton.addEventListener("click", () => {
      closeProfilePanel();
    });
  }

  if (profileBackdrop) {
    profileBackdrop.addEventListener("click", (event) => {
      if (event.target === profileBackdrop) {
        closeProfilePanel();
      }
    });
  }

  if (profileTabMeButton) {
    profileTabMeButton.addEventListener("click", () => {
      ui.profileEditMode = false;
      ui.profileEditSection = "";
      openProfilePanel("me");
    });
  }

  if (profileTabUsersButton) {
    profileTabUsersButton.addEventListener("click", () => {
      openProfilePanel("users");
    });
  }

  if (profileSaveNameButton) {
    profileSaveNameButton.addEventListener("click", () => {
      saveProfileDetails();
    });
  }

  if (profileCharacterButton) {
    profileCharacterButton.addEventListener("click", () => {
      openProfileEditSection("character");
    });
  }

  if (profileNameButton) {
    profileNameButton.addEventListener("click", () => {
      openProfileEditSection("name");
    });
  }

  if (profileThemeButton) {
    profileThemeButton.addEventListener("click", () => {
      openProfileEditSection("theme");
    });
  }

  if (profileEditCloseButton) {
    profileEditCloseButton.addEventListener("click", () => {
      closeProfileEditSection();
    });
  }

  if (profileEditButton) {
    profileEditButton.addEventListener("click", () => {
      openProfileEditSection("name");
    });
  }

  if (profileCancelEditButton) {
    profileCancelEditButton.addEventListener("click", () => {
      closeProfileEditSection();
    });
  }

  if (profileEditPanel) {
    profileEditPanel.addEventListener("click", (event) => {
      const photoChoice = event.target.closest("[data-profile-photo-choice]");
      if (photoChoice) {
        applyProfilePhotoChange(photoChoice.dataset.profilePhotoChoice || "");
        return;
      }

      const characterChoice = event.target.closest("[data-profile-character-choice]");
      if (characterChoice) {
        applyProfileFavoriteCharacterChange(characterChoice.dataset.profileCharacterChoice || "");
        return;
      }

      const themeChoice = event.target.closest("[data-profile-theme-choice]");
      if (themeChoice) {
        applyProfileThemeChange(themeChoice.dataset.profileThemeChoice || "");
        return;
      }

      if (event.target.closest("[data-profile-name-save]")) {
        saveProfileDetails();
        return;
      }

      if (event.target.closest("[data-profile-edit-cancel]")) {
        closeProfileEditSection();
      }
    });

    profileEditPanel.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && event.target instanceof HTMLInputElement && event.target.id === "profile-name-input-dynamic") {
        event.preventDefault();
        saveProfileDetails();
      }
    });
  }

  if (settingsSetPasswordButton) {
    settingsSetPasswordButton.addEventListener("click", () => {
      setCurrentAccountPassword();
    });
  }

  if (settingsLoginButton) {
    settingsLoginButton.addEventListener("click", () => {
      loginToExistingAccount();
    });
  }

  if (friendsCopyIdButton) {
    friendsCopyIdButton.addEventListener("click", () => {
      copyOwnProfileId();
    });
  }

  if (friendsInviteIdButton) {
    friendsInviteIdButton.addEventListener("click", () => {
      sendFriendInviteFromInput();
    });
  }

  if (friendsInviteIdInput) {
    friendsInviteIdInput.addEventListener("input", () => {
      friendsInviteIdInput.value = sanitizePublicPlayerId(friendsInviteIdInput.value);
    });

    friendsInviteIdInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        sendFriendInviteFromInput();
      }
    });
  }

  if (friendsContent) {
    friendsContent.addEventListener("click", (event) => {
      const inviteProfileButton = event.target.closest("[data-friend-invite-profile]");
      if (inviteProfileButton) {
        sendFriendInviteToResolvedProfileId(inviteProfileButton.dataset.friendInviteProfile || "");
        return;
      }

      const inviteButton = event.target.closest("[data-friend-invite]");
      if (inviteButton) {
        sendFriendInviteByProfileId(inviteButton.dataset.friendInvite || "");
        return;
      }

      const acceptButton = event.target.closest("[data-friend-accept]");
      if (acceptButton) {
        acceptFriendInvite(acceptButton.dataset.friendAccept || "");
        return;
      }

      const rejectButton = event.target.closest("[data-friend-reject]");
      if (rejectButton) {
        rejectFriendInvite(rejectButton.dataset.friendReject || "");
        return;
      }

      const partyInviteButton = event.target.closest("[data-party-invite]");
      if (partyInviteButton) {
        sendPartyInvite(partyInviteButton.dataset.partyInvite || "");
        return;
      }

      const partyCancelButton = event.target.closest("[data-party-cancel]");
      if (partyCancelButton) {
        cancelPartyInvite(partyCancelButton.dataset.partyCancel || "");
        return;
      }

      const partyAcceptButton = event.target.closest("[data-party-accept]");
      if (partyAcceptButton) {
        acceptPartyInvite(partyAcceptButton.dataset.partyAccept || "");
        return;
      }

      const partyRejectButton = event.target.closest("[data-party-reject]");
      if (partyRejectButton) {
        rejectPartyInvite(partyRejectButton.dataset.partyReject || "");
      }
    });
  }

  if (bookContent) {
    bookContent.addEventListener("click", (event) => {
      const bookTabButton = event.target.closest("[data-book-tab]");
      if (bookTabButton) {
        ui.bookTab = bookTabButton.dataset.bookTab === "missions" ? "missions" : "book";
        renderBookView();
        return;
      }

      const missionClaimButton = event.target.closest("[data-book-mission-claim]");
      if (missionClaimButton) {
        void claimBookMission(missionClaimButton.dataset.bookMissionClaim || "");
        return;
      }

      const grandRewardButton = event.target.closest("[data-book-grand-reward]");
      if (grandRewardButton) {
        openBookGrandRewardModal(grandRewardButton.dataset.bookGrandReward || "");
        return;
      }

      const petButton = event.target.closest("[data-book-pet]");
      if (!petButton) {
        return;
      }

      openBookPetPurchaseModal(petButton.dataset.bookPet || "");
    });
  }

  [settingsNewPassword, settingsLoginNickname, settingsLoginPassword].forEach((field) => {
    if (!field) {
      return;
    }

    field.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      if (field === settingsNewPassword) {
        setCurrentAccountPassword();
      } else {
        loginToExistingAccount();
      }
    });
  });

  if (nicknameSaveButton) {
    nicknameSaveButton.addEventListener("click", () => {
      submitNicknamePrompt();
    });
  }

  if (nicknameInput) {
    nicknameInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        submitNicknamePrompt();
      }
    });
  }

  if (nicknameBackdrop) {
    nicknameBackdrop.addEventListener("click", (event) => {
      if (event.target === nicknameBackdrop && state.nicknamePromptSeen) {
        closeNicknamePrompt();
      }
    });
  }

  if (multiplayerCloseButton) {
    multiplayerCloseButton.addEventListener("click", () => {
      closeMultiplayerLobby();
    });
  }

  if (multiplayerBackdrop) {
    multiplayerBackdrop.addEventListener("click", (event) => {
      if (event.target === multiplayerBackdrop) {
        closeMultiplayerLobby();
      }
    });
  }

  if (playRobotsButton) {
    playRobotsButton.addEventListener("click", () => {
      if (!canUseMultiplayerChooserButton()) {
        return;
      }

      closeMultiplayerLobby({ cancelWaiting: false });
      ui.nextGameMode = "solo";
      showView("game");
    });
  }

  if (playPlayersButton) {
    playPlayersButton.addEventListener("click", () => {
      if (!canUseMultiplayerChooserButton()) {
        return;
      }

      if (!hasPlayerNickname()) {
        openNicknamePrompt(() => {
          startMultiplayerAction("queue");
        });
        return;
      }

      startMultiplayerAction("queue");
    });
  }

  if (multiplayerEditNickButton) {
    multiplayerEditNickButton.addEventListener("click", () => {
      const reopenLobby = !multiplayerBackdrop?.hidden;
      closeMultiplayerLobby({ cancelWaiting: false });
      openNicknamePrompt(() => {
        if (reopenLobby) {
          if (multiplayer.waiting && !multiplayer.matchActive) {
            startMultiplayerAction("queue");
          } else {
            openMultiplayerLobby();
          }
        }
      });
    });
  }

  if (multiplayerCancelButton) {
    multiplayerCancelButton.addEventListener("click", () => {
      cancelMultiplayerWaitingRoom();
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

  if (worldHeaderMachineButton) {
    worldHeaderMachineButton.addEventListener("click", () => {
      openMagicMachine();
    });
  }

  if (magicMachineArt) {
    magicMachineArt.addEventListener("click", async () => {
      await handleMagicMachineAction();
    });

    magicMachineArt.addEventListener("keydown", async (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      await handleMagicMachineAction();
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

  if (magicMachineBackdrop) {
    magicMachineBackdrop.addEventListener("click", (event) => {
      if (event.target === magicMachineBackdrop && canCloseMagicMachineBackdrop()) {
        closeMagicMachineBackdrop();
      }
    });
  }

  if (magicMachineScene) {
    magicMachineScene.addEventListener("click", (event) => {
      if (!canCloseMagicMachineBackdrop()) {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      if (!target || target.closest("#magic-machine-art")) {
        return;
      }

      closeMagicMachineBackdrop();
    });
  }

  if (magicMachineCloseButton) {
    magicMachineCloseButton.addEventListener("click", () => {
      closeMagicMachineBackdrop();
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
      magicMachineBackdrop &&
      !magicMachineBackdrop.hidden &&
      canCloseMagicMachineBackdrop()
    ) {
      closeMagicMachineBackdrop();
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

    if (
      (event.key === "Enter" || event.key === " ") &&
      magicMachineBackdrop &&
      !magicMachineBackdrop.hidden &&
      !magicMachineBusy
    ) {
      event.preventDefault();
      void handleMagicMachineAction();
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
    syncOrientationLock();
    if (game.active) {
      updateGameBounds();
      clampGameEntities();
      renderGameScene();
    }
  });
  window.addEventListener("orientationchange", syncOrientationLock);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", syncOrientationLock);
  }

  window.addEventListener("pointerdown", syncBackgroundMusic, { passive: true });
  window.addEventListener("keydown", syncBackgroundMusic);
  window.addEventListener("blur", () => {
    resetGameKeys();
    resetTouchControls();
    scheduleRemoteProfileSync(true);
  });

  window.addEventListener("focus", () => {
    scheduleRemoteProfileSync(true);
  });

  if (typeof document !== "undefined") {
    document.addEventListener("visibilitychange", () => {
      scheduleRemoteProfileSync(true);
    });
  }

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

function shouldBlockPortraitMobileView() {
  const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches || Number(navigator.maxTouchPoints || 0) > 0;
  const handheldViewport = Math.max(window.innerWidth || 0, window.innerHeight || 0) <= 1100;
  const isPortrait = (window.innerHeight || 0) > (window.innerWidth || 0);

  return hasCoarsePointer && handheldViewport && isPortrait;
}

function syncOrientationLock() {
  const shouldBlock = shouldBlockPortraitMobileView();

  if (document.body) {
    document.body.classList.toggle("mobile-portrait-blocked", shouldBlock);
  }

  if (orientationLockOverlay) {
    orientationLockOverlay.hidden = !shouldBlock;
    orientationLockOverlay.setAttribute("aria-hidden", shouldBlock ? "false" : "true");
  }
}

function shouldPlayBackgroundMusic() {
  return (
    backgroundMusicReady &&
    appScreen.classList.contains("active") &&
    (!alleyIntroBackdrop || alleyIntroBackdrop.hidden) &&
    (!superAlleyBackdrop || superAlleyBackdrop.hidden) &&
    (!magicMachineBackdrop || magicMachineBackdrop.hidden) &&
    (!winterBundleBackdrop || winterBundleBackdrop.hidden) &&
    (!bundleUnlockBackdrop || bundleUnlockBackdrop.hidden)
  );
}

function isWaveBannerAnnouncementActive() {
  if (ui.currentView !== "game") {
    return false;
  }

  const multiplayerCountdownActive = game.mode === "multiplayer" && game.multiplayerStartCountdownMs > 0;
  const pauseResumeCountdownActive = game.mode !== "multiplayer" && game.pauseResumeCountdownMs > 0;

  return multiplayerCountdownActive || pauseResumeCountdownActive || game.waveIntroMs > 0;
}

function getBackgroundMusicTargetVolume() {
  return isWaveBannerAnnouncementActive()
    ? BACKGROUND_MUSIC_DUCKED_VOLUME
    : BACKGROUND_MUSIC_DEFAULT_VOLUME;
}

function syncBackgroundMusicVolume(smoothing = 1) {
  const targetVolume = getBackgroundMusicTargetVolume();

  if (smoothing >= 1) {
    backgroundMusic.volume = targetVolume;
    return;
  }

  const currentVolume = Number.isFinite(backgroundMusic.volume)
    ? backgroundMusic.volume
    : BACKGROUND_MUSIC_DEFAULT_VOLUME;
  const nextVolume = currentVolume + ((targetVolume - currentVolume) * smoothing);

  backgroundMusic.volume = Math.abs(targetVolume - nextVolume) <= 0.01
    ? targetVolume
    : nextVolume;
}

function syncBackgroundMusic() {
  const preferredSource = getAvailableBackgroundMusicSource();

  if (preferredSource && backgroundMusic.dataset.currentSource !== preferredSource) {
    const wasPlaying = !backgroundMusic.paused;
    backgroundMusic.src = preferredSource;
    backgroundMusic.dataset.currentSource = preferredSource;
    backgroundMusic.load();

    if (wasPlaying && shouldPlayBackgroundMusic()) {
      syncBackgroundMusicVolume(ui.currentView === "game" ? 0.18 : 1);
      const replayAttempt = backgroundMusic.play();
      if (replayAttempt && typeof replayAttempt.catch === "function") {
        replayAttempt.catch(() => {});
      }
      return;
    }
  }

  if (shouldPlayBackgroundMusic()) {
    syncBackgroundMusicVolume(ui.currentView === "game" ? 0.18 : 1);
    const playAttempt = backgroundMusic.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {});
    }
    return;
  }

  backgroundMusic.pause();
}

function getAvailableBackgroundMusicSource() {
  if (ui.currentView === "game") {
    return GAMEPLAY_BACKGROUND_MUSIC_SOURCES.find((entry) => entry && !unavailableSoundSources.has(entry))
      || GAMEPLAY_BACKGROUND_MUSIC_SOURCES[GAMEPLAY_BACKGROUND_MUSIC_SOURCES.length - 1];
  }

  const worldId = state.activeTrophyWorld === "tower"
    ? "tower"
    : state.activeTrophyWorld === "winter"
      ? "winter"
      : "alley";
  const sources = BACKGROUND_MUSIC_SOURCES[worldId] || BACKGROUND_MUSIC_SOURCES.alley;
  return sources.find((entry) => entry && !unavailableSoundSources.has(entry)) || BACKGROUND_MUSIC_SOURCES.alley[0];
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
  stopWalkingLoop();
}

function getBoostedAttackSoundVolume(baseVolume) {
  return Math.min(1, Math.max(0, baseVolume * ATTACK_SOUND_VOLUME_MULTIPLIER));
}

function stopWalkingLoop() {
  if (!walkingLoopAudio) {
    return;
  }

  walkingLoopAudio.pause();
  walkingLoopAudio.currentTime = 0;
}

function hasMovementInput() {
  if (isFirstRobotTutorialPaused()) {
    return false;
  }

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
  if (isFirstRobotTutorialPaused() || isFirstRobotTutorialPending()) {
    return false;
  }

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

  if (isFirstRobotTutorialPaused()) {
    event.preventDefault();
    fireFirstRobotTutorialShot();
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

  if (petId === "papuga-dzungli") {
    return "parrotVoice";
  }

  if (petId === "sniezynka") {
    return "snowflakeVoice";
  }

  if (petId === "sowa") {
    return "owlVoice";
  }

  if (petId === "norka") {
    return "norkaVoice";
  }

  if (petId === "pascal") {
    return "pascalVoice";
  }

  if (petId === "wrobelek") {
    return "wrobelekVoice";
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

  if (petId === "malpa-dzungli") {
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
  initSocialProfileSync();
  maybeRunIntro();
}

function updateBalanceDisplays() {
  const coinsText = String(state.coins);
  const trophiesText = String(state.trophies);
  const diamondsText = String(state.diamonds);

  if (coinBalance) {
    coinBalance.textContent = coinsText;
  }

  if (lobbyCoinBalance) {
    lobbyCoinBalance.textContent = coinsText;
  }

  if (storeCoinBalance) {
    storeCoinBalance.textContent = coinsText;
  }

  if (trophyBalance) {
    trophyBalance.textContent = trophiesText;
  }

  if (diamondBalance) {
    diamondBalance.textContent = diamondsText;
  }

  if (lobbyDiamondBalance) {
    lobbyDiamondBalance.textContent = diamondsText;
  }

  if (storeDiamondBalance) {
    storeDiamondBalance.textContent = diamondsText;
  }
}

function getCoinFlyTargetElement() {
  if (ui.currentView === "lobby" && lobbyBalanceTarget && !lobbyBalanceTarget.hidden) {
    return lobbyBalanceTarget;
  }

  if (ui.currentView === "store" && storeBalanceTarget && !storeBalanceTarget.hidden) {
    return storeBalanceTarget;
  }

  return balanceTarget;
}

function showView(viewName) {
  const previousView = ui.currentView;

  if (viewName !== "game" && gameLaunchTransitionBusy) {
    cancelGameLaunchTransition();
  }

  if (previousView === "game" && viewName !== "game") {
    stopGameSession();
  }

  if (viewName !== "trophies") {
    closeAlleyIntro(false, false);
    closeMagicMachineBackdrop(false);
  }

  if (viewName !== "lobby") {
    closeSettingsPanel();
    closeProfilePanel();
  }

  ui.currentView = viewName;
  syncCurrentViewChrome();
  syncGlobalVisualTheme();

  if (viewName === "game" && !state.playedFirstGame) {
    state.playedFirstGame = true;
    saveState();
  }

  Object.entries(viewNodes).forEach(([name, node]) => {
    const isActive = name === viewName;
    node.classList.toggle("active", isActive);
    node.setAttribute("aria-hidden", String(!isActive));
  });

  syncFirstGameGuide();
  syncJungleBookGuidePrompt();
  schedulePartyMemberSync(true);

  if (viewName === "game") {
    startGameSession();
    syncTouchControlsVisibility();
    syncBackgroundMusic();
    scheduleRemoteProfileSync(true);
    return;
  }

  if (viewName === "store") {
    ui.storeScrollLeft = 0;
    renderStore();
    const storePanel = viewNodes.store?.querySelector(".section-panel");
    if (storePanel) {
      window.requestAnimationFrame(() => {
        storePanel.scrollTop = 0;
      });
    }
    if (storeGridWrap) {
      window.requestAnimationFrame(() => {
        storeGridWrap.scrollLeft = 0;
      });
    }
    syncTouchControlsVisibility();
    syncBackgroundMusic();
    scheduleRemoteProfileSync(true);
    return;
  }

  if (viewName === "friends") {
    initSocialProfileSync().catch(() => {});
    renderFriendsView();
    syncTouchControlsVisibility();
    syncBackgroundMusic();
    scheduleRemoteProfileSync(true);
    return;
  }

  if (viewName === "book") {
    renderBookView();
    syncTouchControlsVisibility();
    syncBackgroundMusic();
    scheduleRemoteProfileSync(true);
    return;
  }

  if (viewName === "trophies") {
    renderTrophyRoad();
    syncTouchControlsVisibility();
    syncBackgroundMusic();
    openTrophyRoadIntro();
    scheduleRemoteProfileSync(true);
    return;
  }

  syncTouchControlsVisibility();
  syncBackgroundMusic();
  scheduleRemoteProfileSync(true);
}

function renderAll() {
  syncCurrentViewChrome();
  syncGlobalVisualTheme();
  updateBalanceDisplays();
  renderLobby();
  renderStore();
  renderInventory();
  renderFriendsView();
  renderBookView();
  renderTrophyRoad();
  renderGameLoadout();
  renderSettingsPanel();
  renderProfilePanel();
  syncTouchControlsVisibility();
  syncTabs();
  syncBrokenAssets(document);
  syncAnimatedAssets(document);
  syncFirstGameGuide();
  syncJungleBookGuidePrompt();
  syncBackgroundMusic();
}

function syncCurrentViewChrome() {
  const isGameView = ui.currentView === "game";
  const isStoreView = ui.currentView === "store";

  if (appScreen) {
    appScreen.dataset.currentView = ui.currentView;
  }

  if (document.body) {
    document.body.classList.toggle("game-view-active", isGameView);
    document.body.classList.toggle("store-view-active", isStoreView);
  }

  if (appShell) {
    appShell.classList.toggle("game-view-active", isGameView);
    appShell.classList.toggle("store-view-active", isStoreView);
  }
}

function shouldShowFirstGameGuide() {
  return Boolean(
    firstGameGuide &&
    lobbyPlayButton &&
    state.seenIntro &&
    !state.playedFirstGame &&
    ui.currentView === "lobby" &&
    !introSequenceRunning
  );
}

function syncFirstGameGuide() {
  const shouldShow = shouldShowFirstGameGuide();

  if (firstGameGuide) {
    firstGameGuide.hidden = !shouldShow;
  }

  if (lobbyPlayButton) {
    lobbyPlayButton.classList.toggle("first-game-guide-target", shouldShow);
  }
}

function shouldShowJungleBookGuidePrompt() {
  return Boolean(
    bookGuidePrompt &&
    lobbyBookButton &&
    isTowerWorldUnlocked() &&
    ui.currentView === "lobby" &&
    !state.seenJungleBookGuide &&
    !introSequenceRunning &&
    !bookGuideSequenceRunning
  );
}

function syncJungleBookGuidePrompt() {
  const shouldShow = shouldShowJungleBookGuidePrompt();

  if (bookGuidePrompt) {
    bookGuidePrompt.hidden = !shouldShow;
  }

  if (lobbyBookButton) {
    lobbyBookButton.classList.toggle("book-guide-target", shouldShow);
  }
}

function closeJungleBookGuideBackdrop() {
  if (!bookGuideBackdrop || !bookGuideCard) {
    return;
  }

  bookGuideBackdrop.hidden = true;
  bookGuideCard.classList.remove("show");
}

function showJungleBookGuideStage({ item, title, copy, buttonLabel }) {
  if (
    !bookGuideBackdrop ||
    !bookGuideCard ||
    !bookGuideArtFrame ||
    !bookGuideTitle ||
    !bookGuideCopy ||
    !bookGuideConfirmButton
  ) {
    return Promise.resolve();
  }

  renderPreviewAssetIntoFrame(bookGuideArtFrame, item, {
    elementId: "book-guide-image",
    imageClass: "modal-image asset-image",
    videoClass: "modal-image asset-video",
    fallbackText: item?.name || title,
    alt: item?.name || title,
  });

  bookGuideTitle.textContent = title;
  bookGuideCopy.textContent = copy;
  bookGuideConfirmButton.textContent = buttonLabel;

  bookGuideBackdrop.hidden = false;
  bookGuideCard.classList.remove("show");
  void bookGuideCard.offsetWidth;
  bookGuideCard.classList.add("show");
  syncBrokenAssets(bookGuideBackdrop);
  syncAnimatedAssets(bookGuideBackdrop);

  return new Promise((resolve) => {
    bookGuideStageResolve = resolve;
  });
}

function advanceJungleBookGuideStage() {
  if (typeof bookGuideStageResolve !== "function") {
    return;
  }

  const resolve = bookGuideStageResolve;
  bookGuideStageResolve = null;
  closeJungleBookGuideBackdrop();
  resolve();
}

async function startJungleBookGuideFlow() {
  if (bookGuideSequenceRunning) {
    return;
  }

  if (state.seenJungleBookGuide) {
    showView("book");
    return;
  }

  const rewardCharacter = getBookGrandRewardCharacter();
  const animalsTotal = getBookAnimals().length;

  if (
    !bookGuideBackdrop ||
    !bookGuideCard ||
    !bookGuideArtFrame ||
    !bookGuideTitle ||
    !bookGuideCopy ||
    !bookGuideConfirmButton ||
    !rewardCharacter
  ) {
    state.seenJungleBookGuide = true;
    saveState();
    renderAll();
    showView("book");
    return;
  }

  bookGuideSequenceRunning = true;
  syncJungleBookGuidePrompt();

  try {
    if (ui.currentView !== "book") {
      showView("book");
      await wait(80);
    }

    await showJungleBookGuideStage({
      item: { name: "Księga Dżungli", image: "./assets/alley/księga.jpeg" },
      title: "Księga Dżungli",
      copy: `ZBIERZ WSZYSTKIE ${animalsTotal} ZWIERZĄT, KUPUJĄC JE LUB TRAFIAJĄC Z DŻUNGLOWEJ SKRZYNI, ABY...`,
      buttonLabel: "KONTYNUUJ",
    });

    await showJungleBookGuideStage({
      item: rewardCharacter,
      title: "Coco N'Kosi",
      copy: "...ODBLOKOWAĆ ZA DARMO COCO N'KOSI",
      buttonLabel: "DO DZIEŁA",
    });

    state.seenJungleBookGuide = true;
    saveState();
    renderAll();
    showView("book");
  } finally {
    bookGuideSequenceRunning = false;
    closeJungleBookGuideBackdrop();
    syncJungleBookGuidePrompt();
  }
}

function isFirstRobotTutorialPaused() {
  return Boolean(game.firstRobotTutorialActive && !state.seenFirstRobotTutorial);
}

function isFirstRobotPreludeActive() {
  return Boolean(game.firstRobotPreludeActive && !state.seenFirstRobotTutorial);
}

function isFirstRobotTutorialPending() {
  const trackedRobot = getTrackedFirstRobotTutorialRobot();

  return Boolean(
    isFirstRobotPreludeActive() &&
    !game.firstRobotTutorialActive &&
    !game.firstRobotTutorialPromptUsed &&
    trackedRobot &&
    game.robotsKilledTotal === 0
  );
}

function getTrackedFirstRobotTutorialRobot() {
  if (game.firstRobotTutorialRobotId === null) {
    return null;
  }

  return (
    game.robots.find(
      (robot) => robot.id === game.firstRobotTutorialRobotId && !robot.dead
    ) || null
  );
}

function getFirstRobotTutorialTarget() {
  return getTrackedFirstRobotTutorialRobot() || findNearestRobot(game.player.x, game.player.y);
}

function rememberFirstRobotTutorialTarget(robot) {
  if (!robot || state.seenFirstRobotTutorial || game.firstRobotTutorialRobotId !== null) {
    return;
  }

  game.firstRobotTutorialRobotId = robot.id;
}

function activateFirstRobotTutorial(robot) {
  if (
    !robot ||
    state.seenFirstRobotTutorial ||
    game.firstRobotTutorialActive ||
    game.firstRobotTutorialPromptUsed
  ) {
    return;
  }

  game.firstRobotTutorialRobotId = robot.id;
  game.firstRobotTutorialActive = true;
  resetGameKeys();
  resetTouchControls();
  syncWalkingLoop();
}

function dismissFirstRobotTutorialPrompt() {
  game.firstRobotTutorialActive = false;
  game.firstRobotTutorialPromptUsed = true;
  syncWalkingLoop();
}

function finishFirstRobotTutorial(markAsSeen = true) {
  game.firstRobotPreludeActive = false;
  game.firstRobotTutorialActive = false;
  game.firstRobotTutorialPromptUsed = false;
  game.firstRobotTutorialDelayMs = 0;
  game.firstRobotTutorialRobotId = null;
  game.firstRobotTutorialInitialDistance = 0;

  if (markAsSeen && !state.seenFirstRobotTutorial) {
    state.seenFirstRobotTutorial = true;
    saveState();
  }

  syncWalkingLoop();
}

function startFirstRobotPrelude() {
  const waveConfig = getWaveConfig(1);
  const robot = spawnRobot(waveConfig);

  game.firstRobotPreludeActive = true;
  game.firstRobotTutorialActive = false;
  game.firstRobotTutorialPromptUsed = false;
  game.firstRobotTutorialDelayMs = 300;
  game.waveIntroMs = 0;
  game.waveSpawnTimerMs = 0;
  game.waveRobotsRemaining = 0;
  game.currentWave = 0;
  game.currentWaveConfig = null;
  rememberFirstRobotTutorialTarget(robot);
}

function updateFirstRobotPrelude(deltaMs) {
  if (!isFirstRobotPreludeActive()) {
    return;
  }

  const trackedRobot = getTrackedFirstRobotTutorialRobot();

  if (!trackedRobot) {
    finishFirstRobotTutorial(true);
    queueNextWave(1);
    return;
  }

  if (game.firstRobotTutorialPromptUsed || game.firstRobotTutorialActive) {
    return;
  }

  game.firstRobotTutorialDelayMs = Math.max(0, game.firstRobotTutorialDelayMs - deltaMs);

  if (game.firstRobotTutorialDelayMs === 0) {
    activateFirstRobotTutorial(trackedRobot);
  }
}

function fireFirstRobotTutorialShot() {
  if (!isFirstRobotTutorialPaused()) {
    return false;
  }

  const target = getFirstRobotTutorialTarget();

  if (!target) {
    finishFirstRobotTutorial(true);
    queueNextWave(1);
    return false;
  }

  const ammoIndex = game.ammo.findIndex((slot) => slot >= 1);
  const slotIndex = ammoIndex === -1 ? 0 : ammoIndex;

  if (game.ammo.length > 0) {
    game.ammo[slotIndex] = 0;
  }

  game.lastShotAt = performance.now();
  spawnProjectile({
    x: game.player.x,
    y: game.player.y - 10,
    targetId: target.id,
    kind: getPlayerProjectileKind(slotIndex),
  });
  dismissFirstRobotTutorialPrompt();
  return true;
}

function getTrophyWorldById(worldId) {
  return TROPHY_WORLDS.find((world) => world.id === worldId) || TROPHY_WORLDS[0];
}

function hasClaimedWinterUnlockReward() {
  return state.activeTrophyWorld === "winter" || state.activeTrophyWorld === "tower";
}

function hasClaimedTowerUnlockReward() {
  return state.activeTrophyWorld === "tower";
}

function isWinterWorldUnlocked() {
  return hasClaimedWinterUnlockReward();
}

function isTowerWorldUnlocked() {
  return hasClaimedTowerUnlockReward();
}

function isTrophyWorldUnlocked(worldId) {
  if (worldId === "tower") {
    return isTowerWorldUnlocked();
  }

  if (worldId === "winter") {
    return isWinterWorldUnlocked();
  }

  return true;
}

function getHighestUnlockedTrophyWorldId() {
  if (isTowerWorldUnlocked()) {
    return "tower";
  }

  if (isWinterWorldUnlocked()) {
    return "winter";
  }

  return "alley";
}

function getGlobalVisualWorldTheme() {
  return getActiveTrophyWorldId();
}

function syncGlobalVisualTheme() {
  if (!appScreen) {
    return;
  }

  appScreen.dataset.visualWorld = getGlobalVisualWorldTheme();
}

function getActiveTrophyWorldId() {
  const worldId = state.activeTrophyWorld || ui.trophyWorldId || TROPHY_WORLDS[0].id;
  return isTrophyWorldUnlocked(worldId) ? worldId : getHighestUnlockedTrophyWorldId();
}

function getActiveTrophyWorld() {
  return getTrophyWorldById(getActiveTrophyWorldId());
}

function getTrophyRoadThemeFromScroll() {
  return getActiveTrophyWorldId();
}

function setActiveTrophyWorld(worldId) {
  const normalizedWorldId = isTrophyWorldUnlocked(worldId) ? worldId : getHighestUnlockedTrophyWorldId();
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
  trophyGrid.scrollLeft = 0;
  setActiveTrophyWorld(worldId);
}

function clampTrophyRoadScrollPosition() {
  if (!trophyGrid) {
    return;
  }

  const maxScroll = Math.max(0, trophyGrid.scrollWidth - trophyGrid.clientWidth);
  const nextScrollLeft = clamp(trophyGrid.scrollLeft, 0, maxScroll);

  if (Math.abs(nextScrollLeft - trophyGrid.scrollLeft) > 1) {
    trophyGrid.scrollLeft = nextScrollLeft;
  }
}

function syncTrophyRoadThemeFromScroll() {
  setActiveTrophyWorld(getTrophyRoadThemeFromScroll());
}

function isSuperAlleyActiveForWorld(worldId = getActiveTrophyWorldId()) {
  if (worldId === "winter") {
    return Boolean(state.superAlleyWinterActive);
  }

  if (worldId === "tower") {
    return Boolean(state.superAlleyTowerActive);
  }

  return Boolean(state.superAlleyActive);
}

function setSuperAlleyActiveForWorld(worldId, isActive) {
  if (worldId === "winter") {
    state.superAlleyWinterActive = Boolean(isActive);
    return;
  }

  if (worldId === "tower") {
    state.superAlleyTowerActive = Boolean(isActive);
    return;
  }

  state.superAlleyActive = Boolean(isActive);
}

function getSuperAlleyOfferCopy(worldId) {
  if (worldId === "tower") {
    return `Wybierz aktywację za ${SUPER_ALLEY_DIAMOND_PRICE} klejnotow lub ${SUPER_ALLEY_CASH_PRICE_LABEL} i odblokuj zielone nagrody premium Świata Dżungli.`;
  }

  return worldId === "winter"
    ? `Wybierz aktywację za ${SUPER_ALLEY_DIAMOND_PRICE} klejnotow lub ${SUPER_ALLEY_CASH_PRICE_LABEL} i odblokuj jasnoniebieskie nagrody premium.`
    : `Wybierz aktywację za ${SUPER_ALLEY_DIAMOND_PRICE} klejnotow lub ${SUPER_ALLEY_CASH_PRICE_LABEL} i odblokuj różowe nagrody premium.`;
}

function getSuperAlleyUnlockedCopy(worldId) {
  if (worldId === "tower") {
    return "Nagrody Super w Świecie Dżungli są już odblokowane.";
  }

  return worldId === "winter"
    ? "Nagrody Super w Świecie Zimowym są już odblokowane."
    : "Nagrody Super w Alei Pucharów są już odblokowane.";
}

function getSuperAlleySceneVisual(worldId) {
  if (worldId === "tower") {
    return {
      image: "./assets/alley/jungle.jpeg",
      fallbackText: "DZUNGLA",
    };
  }

  return worldId === "winter"
    ? {
        image: "./assets/backgrounds/ładowanie_2.png",
        fallbackText: "ZIMA",
      }
    : {
        image: "./assets/backgrounds/ładowanie_1.png",
        fallbackText: "SUPER",
      };
}

function getSuperAlleyBlockedContent(worldId) {
  if (worldId === "tower" && !isTowerWorldUnlocked()) {
    return {
      title: "Najpierw ukoncz Swiat Zimowy",
      copy: "Po odebraniu Leo odblokujesz Aleje Super Świata Dżungli i jego zielone nagrody premium.",
    };
  }

  if (worldId === "winter" && !isWinterWorldUnlocked()) {
    return {
      title: "Najpierw ukoncz Swiat Magikow",
      copy: "Po odebraniu Millo jako Elfie odblokujesz zimowa Aleje Super i jej jasnoniebieskie nagrody premium.",
    };
  }

  if (worldId === "winter" && isTowerWorldUnlocked()) {
    return {
      title: "Ukończyles juz Swiat Zimowy, nie mozesz go aktywowac",
      copy: "Po odebraniu Leo mozesz aktywowac juz tylko Aleje Super Świata Dżungli.",
    };
  }

  if (worldId === "alley" && isWinterWorldUnlocked()) {
    const highestUnlockedWorldId = getHighestUnlockedTrophyWorldId();
    return {
      title: "Ukończyles juz Swiat Magikow, nie mozesz go aktywowac",
      copy: highestUnlockedWorldId === "tower"
        ? "Po odebraniu Leo mozesz aktywowac juz tylko Aleje Super Świata Dżungli."
        : "Po odebraniu Millo jako Elfie mozesz aktywowac juz tylko zimowa Aleje Super.",
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

function openProfilePanel(tab = "me") {
  if (!profileBackdrop) {
    return;
  }

  ui.profileTab = "me";
  ui.profileEditMode = false;
  ui.profileEditSection = "";
  if (!socialProfile.ready) {
    initSocialProfileSync().catch(() => {});
  }
  renderProfilePanel();
  profileBackdrop.hidden = false;
}

function closeProfilePanel() {
  if (!profileBackdrop) {
    return;
  }

  ui.profileEditMode = false;
  ui.profileEditSection = "";
  profileBackdrop.hidden = true;
}

function openProfileEditSection(section = "") {
  if (!profileEditPanel) {
    return;
  }

  ui.profileEditMode = Boolean(section);
  ui.profileEditSection = section || "";
  renderProfilePanel();

  if (section === "name") {
    window.setTimeout(() => {
      const dynamicNameInput = document.getElementById("profile-name-input-dynamic");
      if (dynamicNameInput) {
        dynamicNameInput.focus();
        dynamicNameInput.select();
      }
    }, 20);
  }
}

function closeProfileEditSection() {
  ui.profileEditMode = false;
  ui.profileEditSection = "";
  renderProfilePanel();
}

function getUnlockedProfileThemeWorldIds() {
  return TROPHY_WORLDS
    .map((world) => world.id)
    .filter((worldId) => isTrophyWorldUnlocked(worldId));
}

function getSelectedProfileThemeWorldId() {
  const preferred = normalizeTrophyWorldId(state.profileThemeWorldId);
  const unlockedThemes = getUnlockedProfileThemeWorldIds();
  return unlockedThemes.includes(preferred) ? preferred : getHighestUnlockedTrophyWorldId();
}

function getNicknameChangePrice(changeCount = Number(state.nicknameChangeCount || 0)) {
  if (changeCount <= 0) {
    return 0;
  }

  if (changeCount === 1) {
    return 5000;
  }

  if (changeCount === 2) {
    return 10000;
  }

  if (changeCount === 3) {
    return 15000;
  }

  return 20000;
}

function getNicknameChangePriceLabel(changeCount = Number(state.nicknameChangeCount || 0)) {
  const price = getNicknameChangePrice(changeCount);
  return price <= 0 ? "za darmo" : `${price} monet`;
}

function buildProfileThemeChoiceMarkup(worldId, activeWorldId) {
  const world = getTrophyWorldById(worldId);
  if (!world) {
    return "";
  }

  return `
    <button
      class="profile-theme-choice${worldId === activeWorldId ? " active" : ""}"
      data-profile-theme-choice="${worldId}"
      type="button"
    >
      <span class="profile-theme-choice-swatch" data-world-theme="${worldId}" aria-hidden="true"></span>
      <span class="profile-theme-choice-label">${escapeHtml(world.name)}</span>
    </button>
  `;
}

function renderProfileEditPanel() {
  if (!profileEditPanel || !profileEditCard) {
    return;
  }

  const favoriteCharacter = getProfileFavoriteCharacter();
  const selectedProfilePhoto = getSelectedProfilePhoto();
  const activeThemeWorldId = getSelectedProfileThemeWorldId();
  profileEditCard.hidden = !ui.profileEditMode;

  if (!ui.profileEditMode) {
    profileEditPanel.innerHTML = "";
    return;
  }

  if (profileEditKicker) {
    profileEditKicker.textContent = ui.profileEditSection === "character"
      ? "Ulubiona postać"
      : ui.profileEditSection === "theme"
        ? "Kolor profilu"
        : "Zmień nazwę";
  }

  if (ui.profileEditSection === "character") {
    profileEditPanel.innerHTML = `
      <p class="profile-edit-section-title">Zdjęcia profilowe</p>
      <div class="profile-character-choice-grid profile-photo-choice-grid">
        ${getOwnedItems("profilePhotos").map((item) => `
          <button
            class="profile-character-choice profile-photo-choice${item.id === selectedProfilePhoto?.id ? " active" : ""}"
            data-profile-photo-choice="${item.id}"
            type="button"
            aria-label="Ustaw ${escapeHtml(item.name)}"
          >
            ${buildPreviewAssetMarkup(item, {
              fallbackText: item.name,
              alt: item.name,
              imageClass: "avatar-image asset-image",
              videoClass: "avatar-image asset-video",
            })}
          </button>
        `).join("")}
      </div>
      <p class="profile-edit-section-title">Postacie</p>
      <div class="profile-character-choice-grid">
        ${getOwnedItems("characters").map((item) => `
          <button
            class="profile-character-choice${item.id === favoriteCharacter?.id ? " active" : ""}"
            data-profile-character-choice="${item.id}"
            type="button"
            aria-label="Ustaw ${escapeHtml(item.name)}"
          >
            ${buildPreviewAssetMarkup(item, {
              fallbackText: item.name,
              alt: item.name,
              imageClass: "avatar-image asset-image",
              videoClass: "avatar-image asset-video",
              usePoster: false,
            })}
          </button>
        `).join("")}
      </div>
      <p class="profile-edit-note">Naciśnij zdjęcie lub filmik, aby ustawić ulubioną postać.</p>
      <div class="profile-edit-actions profile-edit-actions-simple">
        <button class="pixel-button small-button subtle-button" data-profile-edit-cancel type="button">ZAMKNIJ</button>
      </div>
    `;
    syncBrokenAssets(profileEditPanel);
    syncAnimatedAssets(profileEditPanel);
    return;
  }

  if (ui.profileEditSection === "theme") {
    profileEditPanel.innerHTML = `
      <div class="profile-theme-choice-grid">
        ${getUnlockedProfileThemeWorldIds().map((worldId) => buildProfileThemeChoiceMarkup(worldId, activeThemeWorldId)).join("")}
      </div>
      <p class="profile-edit-note">Wybierz kolor profilu z odblokowanych światów.</p>
      <div class="profile-edit-actions profile-edit-actions-simple">
        <button class="pixel-button small-button subtle-button" data-profile-edit-cancel type="button">ZAMKNIJ</button>
      </div>
    `;
    return;
  }

  const renamePrice = getNicknameChangePrice();
  profileEditPanel.innerHTML = `
    <label class="settings-field profile-name-edit-field" for="profile-name-input-dynamic">
      <span class="settings-field-label">Twoja nazwa</span>
      <input
        class="settings-input"
        id="profile-name-input-dynamic"
        type="text"
        maxlength="18"
        placeholder="Gracz1234"
        value="${escapeHtml(getPlayerNickname())}"
      />
    </label>
    <p class="profile-edit-note">
      ${renamePrice <= 0 ? "Pierwsza zmiana nazwy jest darmowa." : `Ta zmiana kosztuje ${getNicknameChangePriceLabel()}.`}
    </p>
    <div class="profile-edit-actions">
      <button class="pixel-button small-button settings-action-button" data-profile-name-save type="button">
        ${renamePrice <= 0 ? "ZMIEŃ ZA DARMO" : `ZMIEŃ ZA ${renamePrice}`}
      </button>
      <button class="pixel-button small-button subtle-button" data-profile-edit-cancel type="button">ANULUJ</button>
    </div>
  `;
}

function applyProfileFavoriteCharacterChange(characterId) {
  const nextCharacterId = sanitizeStoredId(characterId);
  if (!nextCharacterId || !state.ownedCharacters.includes(nextCharacterId)) {
    return;
  }

  state.selectedProfilePhotoId = "";
  state.favoriteCharacterId = nextCharacterId;
  saveState();
  closeProfileEditSection();
  renderAll();
  scheduleRemoteProfileSync(true);
}

function applyProfilePhotoChange(photoId) {
  const nextPhotoId = sanitizeStoredId(photoId);
  if (!nextPhotoId || !state.ownedProfilePhotos.includes(nextPhotoId)) {
    return;
  }

  state.selectedProfilePhotoId = nextPhotoId;
  saveState();
  closeProfileEditSection();
  renderAll();
  scheduleRemoteProfileSync(true);
}

function applyProfileThemeChange(worldId) {
  const nextThemeWorldId = normalizeTrophyWorldId(worldId);
  if (!getUnlockedProfileThemeWorldIds().includes(nextThemeWorldId)) {
    return;
  }

  state.profileThemeWorldId = nextThemeWorldId;
  saveState();
  closeProfileEditSection();
  renderAll();
  scheduleRemoteProfileSync(true);
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

  if (settingsAccountStatus) {
    if (!socialProfile.ready) {
      settingsAccountStatus.textContent = navigator.onLine === false
        ? "Konto online nie działa bez internetu."
        : socialProfile.lastError || "Profil online jest chwilowo niedostępny.";
    } else if (socialProfile.lastError) {
      settingsAccountStatus.textContent = socialProfile.lastError;
    } else {
      settingsAccountStatus.textContent = state.accountPasswordSet
        ? "Konto jest połączone z chmurą. Możesz logować się nickiem i hasłem."
        : "Profil jest już widoczny dla innych graczy. Ustaw hasło, aby logować się na innych urządzeniach.";
    }
  }

  if (settingsSetPasswordButton) {
    settingsSetPasswordButton.textContent = state.accountPasswordSet ? "HASŁO USTAWIONE" : "USTAW HASŁO";
    settingsSetPasswordButton.disabled = state.accountPasswordSet;
  }

  if (settingsNewPassword) {
    settingsNewPassword.disabled = state.accountPasswordSet;
    settingsNewPassword.placeholder = state.accountPasswordSet ? "Hasło już ustawione" : "Wpisz hasło";
  }

  if (settingsLoginButton) {
    settingsLoginButton.disabled = false;
  }
}

function renderProfilePanel() {
  if (!profileTabPanelMe) {
    return;
  }

  const profileVisualItem = getProfileVisualItem();
  const profileThemeWorldId = getSelectedProfileThemeWorldId();

  profileTabPanelMe.hidden = false;
  if (profileTabPanelUsers) {
    profileTabPanelUsers.hidden = true;
  }

  if (profileNameHeading) {
    profileNameHeading.textContent = getPlayerNickname();
  }

  if (profileWorldBar) {
    profileWorldBar.dataset.worldTheme = profileThemeWorldId;
  }

  if (profileMainCard) {
    profileMainCard.dataset.worldTheme = profileThemeWorldId;
  }

  renderPreviewAssetIntoFrame(profileCharacterButton || profileFavoriteCharacterFrame, profileVisualItem, {
    elementId: "profile-favorite-character-image",
    imageClass: "avatar-image asset-image",
    videoClass: "avatar-image asset-video",
    fallbackText: "POSTAĆ",
    alt: profileVisualItem?.name || "Profil",
    usePoster: false,
  });

  if (profileStatTrophies) {
    profileStatTrophies.textContent = String(state.trophies);
  }

  if (profileThemePicker) {
    profileThemePicker.hidden = true;
  }

  renderProfileEditPanel();
}

function renderLobby() {
  const equippedCharacter = getOwnedItem("characters", state.equippedCharacter);
  const equippedPet = getOwnedItem("pets", state.equippedPet);
  const otherMember = getOtherPartyMemberData();
  const otherMemberProfile = otherMember ? getMergedPartyMemberProfile(otherMember.profileId, otherMember) : null;
  const otherMemberCharacter = otherMemberProfile
    ? CATALOG.characters.find((item) => item.id === (otherMemberProfile.equippedCharacterId || otherMemberProfile.favoriteCharacterId)) || null
    : null;
  const otherMemberPet = otherMemberProfile
    ? CATALOG.pets.find((item) => item.id === (otherMemberProfile.equippedPetId || otherMemberProfile.favoritePetId)) || null
    : null;

  if (lobbyNickname) {
    lobbyNickname.textContent = `Nick: ${getPlayerNickname()}`;
  }

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

  if (lobbySelfReadyBadge) {
    lobbySelfReadyBadge.hidden = !isPartyActive() || !isLocalPartyReady();
  }

  if (lobbyPlayButton) {
    lobbyPlayButton.textContent = isPartyActive() && !isPartyGameActive() && isLocalPartyReady()
      ? "ANULUJ GOTOWOŚĆ"
      : "GRAJ";
  }

  if (lobbyBookButton) {
    lobbyBookButton.hidden = !isTowerWorldUnlocked();
  }

  if (lobbyLayout) {
    lobbyLayout.classList.toggle("book-unlocked", !lobbyBookButton?.hidden);
  }

  if (partyTeammateShowcase) {
    partyTeammateShowcase.hidden = !otherMemberProfile;
  }

  if (partyTeammateReadyBadge) {
    partyTeammateReadyBadge.hidden = !otherMember?.ready;
  }

  if (partyTeammateName) {
    partyTeammateName.textContent = otherMemberProfile?.nickname || "Znajomy";
  }

  renderPreviewAssetIntoFrame(partyTeammateAvatarFrame, otherMemberCharacter, {
    elementId: "party-teammate-avatar",
    imageClass: "avatar-image asset-image",
    videoClass: "avatar-image asset-video",
    fallbackText: "GRACZ",
    alt: otherMemberCharacter?.name || "Znajomy",
    usePreviewVideo: false,
  });

  renderPreviewAssetIntoFrame(partyTeammatePetFrame, otherMemberPet, {
    elementId: "party-teammate-pet",
    imageClass: "pet-image asset-image",
    videoClass: "pet-image asset-video",
    fallbackText: "PLATOYA",
    alt: otherMemberPet?.name || "PlatoYa znajomego",
    usePreviewVideo: false,
  });

  if (partyTeammatePetFrame) {
    partyTeammatePetFrame.hidden = !otherMemberPet;
  }

  if (partyLeaveButton) {
    partyLeaveButton.hidden = !otherMemberProfile;
  }
}

function renderOtherUsersPanel() {
  if (!profileUsersList) {
    return;
  }

  if (!socialProfile.ready) {
    profileUsersList.innerHTML = `
      <div class="profile-users-empty">
        ${navigator.onLine === false ? "Inni użytkownicy nie działają bez internetu." : "Inni użytkownicy są teraz niedostępni."}
      </div>
    `;
    renderOtherUserPreview(null);
    return;
  }

  const users = socialProfile.leaderboard;

  if (!users.length) {
    profileUsersList.innerHTML = `<div class="profile-users-empty">Jeszcze nie ma innych profili w rankingu.</div>`;
    renderOtherUserPreview(null);
    return;
  }

  if (!socialProfile.selectedProfileId || !users.some((entry) => entry.profileId === socialProfile.selectedProfileId)) {
    socialProfile.selectedProfileId = users[0].profileId;
  }

  profileUsersList.innerHTML = users
    .map((entry, index) => {
      const active = entry.profileId === socialProfile.selectedProfileId;
      const ownTag = entry.profileId === state.profileId ? " • TY" : "";
      const worldTheme = getProfileThemeWorldId(entry);
      return `
        <button class="profile-user-row${active ? " active" : ""}" type="button" data-profile-user="${entry.profileId}" data-world-theme="${worldTheme}">
          <p class="profile-user-row-rank">#${index + 1}</p>
          <p class="profile-user-row-name">${escapeHtml(entry.nickname || "Gracz")}${ownTag}</p>
          <p class="profile-user-row-trophies">
            <img class="profile-user-row-icon" src="./assets/currencies/monety_2.png" alt="Pucharki" />
            <span>${Number(entry.trophies || 0)}</span>
          </p>
        </button>
      `;
    })
    .join("");

  profileUsersList.querySelectorAll("[data-profile-user]").forEach((button) => {
    button.addEventListener("click", () => {
      socialProfile.selectedProfileId = button.dataset.profileUser || "";
      renderOtherUsersPanel();
    });
  });

  renderOtherUserPreview(users.find((entry) => entry.profileId === socialProfile.selectedProfileId) || users[0]);
}

function renderOtherUserPreview(profile) {
  const favoriteCharacter = profile?.favoriteCharacterId
    ? CATALOG.characters.find((item) => item.id === profile.favoriteCharacterId) || null
    : null;
  const worldTheme = getProfileThemeWorldId(profile);

  renderPreviewAssetIntoFrame(profileOtherCharacterFrame, favoriteCharacter, {
    elementId: "profile-other-character-image",
    imageClass: "avatar-image asset-image",
    videoClass: "avatar-image asset-video",
    fallbackText: "POSTAĆ",
    alt: favoriteCharacter?.name || "Postać",
  });

  if (profileOtherName) {
    profileOtherName.textContent = profile?.nickname || "Brak graczy";
  }

  if (profileUserPreviewCard) {
    profileUserPreviewCard.dataset.worldTheme = worldTheme;
  }

  if (profileOtherMainCard) {
    profileOtherMainCard.dataset.worldTheme = worldTheme;
  }

  if (profileOtherTrophies) {
    profileOtherTrophies.textContent = String(Number(profile?.trophies || 0));
  }

  if (profileOtherWorldBar) {
    profileOtherWorldBar.dataset.worldTheme = worldTheme;
  }

  if (profileOtherGames) {
    profileOtherGames.textContent = String(Number(profile?.completedGamesTotal || 0));
  }

  if (profileOtherRobots) {
    profileOtherRobots.textContent = String(Number(profile?.robotsDefeatedTotal || 0));
  }

  if (profileOtherCharacters) {
    profileOtherCharacters.textContent = `${Number(profile?.ownedCharactersCount || 0)} / ${CATALOG.characters.length}`;
  }

  if (profileOtherPets) {
    profileOtherPets.textContent = `${Number(profile?.ownedPetsCount || 0)} / ${CATALOG.pets.length}`;
  }
}

function getProfileThemeWorldId(profile) {
  if (profile && TROPHY_WORLDS.some((entry) => entry.id === profile.worldId)) {
    return profile.worldId;
  }

  return "alley";
}

function mergeSocialProfilesIntoCache(entries = []) {
  entries.forEach((entry) => {
    if (!entry?.profileId) {
      return;
    }

    socialProfile.profileCache[entry.profileId] = {
      ...(socialProfile.profileCache[entry.profileId] || {}),
      ...entry,
    };
  });
}

function getCachedSocialProfile(profileId) {
  const normalizedId = sanitizeProfileId(profileId);

  if (!normalizedId) {
    return null;
  }

  if (normalizedId === state.profileId) {
    return buildPublicProfilePayload();
  }

  return socialProfile.profileCache[normalizedId] || socialProfile.leaderboard.find((entry) => entry.profileId === normalizedId) || null;
}

function detachTrackedProfileListeners() {
  Object.values(socialProfile.watchedProfileRefs || {}).forEach((ref) => {
    ref?.off?.();
  });
  socialProfile.watchedProfileRefs = {};
}

function syncTrackedProfileListeners() {
  const db = getFirebaseSocialDatabase();

  if (!db) {
    detachTrackedProfileListeners();
    return;
  }

  const trackedIds = [...new Set([
    ...socialProfile.friendIds,
    ...socialProfile.sentInviteIds,
    ...socialProfile.receivedInvites.map((entry) => entry.fromProfileId),
    ...party.sentInviteIds,
    ...party.invites.map((entry) => entry.fromProfileId),
    ...getActivePartyMemberIds(),
  ].map((id) => sanitizeProfileId(id)).filter(Boolean))];

  const nextIds = new Set(trackedIds);

  Object.entries(socialProfile.watchedProfileRefs || {}).forEach(([profileId, ref]) => {
    if (!nextIds.has(profileId)) {
      ref?.off?.();
      delete socialProfile.watchedProfileRefs[profileId];
    }
  });

  trackedIds.forEach((profileId) => {
    if (socialProfile.watchedProfileRefs[profileId]) {
      return;
    }

    const ref = db.ref(`profiles/${profileId}`);
    ref.on("value", (snapshot) => {
      const payload = snapshot.val();

      if (payload) {
        mergeSocialProfilesIntoCache([{ profileId, ...payload }]);
      } else {
        delete socialProfile.profileCache[profileId];
      }

      renderFriendsView();
      renderProfilePanel();
    });

    socialProfile.watchedProfileRefs[profileId] = ref;
  });
}

async function fetchPublicProfilesById(profileIds = []) {
  const db = getFirebaseSocialDatabase();
  if (!db) {
    return [];
  }

  const uniqueIds = [...new Set(profileIds.map((id) => sanitizeProfileId(id)).filter(Boolean))];
  if (!uniqueIds.length) {
    return [];
  }

  const snapshots = await Promise.all(
    uniqueIds.map((profileId) => db.ref(`profiles/${profileId}`).once("value").catch(() => null))
  );

  const fetchedProfiles = snapshots
    .map((snapshot, index) => {
      const payload = snapshot?.val();
      return payload ? { profileId: uniqueIds[index], ...payload } : null;
    })
    .filter(Boolean);

  mergeSocialProfilesIntoCache(fetchedProfiles);
  return fetchedProfiles;
}

function detachSocialRelationshipListeners() {
  if (socialProfile.friendsRef) {
    socialProfile.friendsRef.off();
    socialProfile.friendsRef = null;
  }

  if (socialProfile.receivedInvitesRef) {
    socialProfile.receivedInvitesRef.off();
    socialProfile.receivedInvitesRef = null;
  }

  if (socialProfile.sentInvitesRef) {
    socialProfile.sentInvitesRef.off();
    socialProfile.sentInvitesRef = null;
  }

  detachTrackedProfileListeners();
}

function syncSocialRelationshipListeners() {
  const db = getFirebaseSocialDatabase();

  if (!db || !state.profileId) {
    return;
  }

  if (socialProfile.relationshipsOwnerId === state.profileId && socialProfile.friendsRef) {
    return;
  }

  detachSocialRelationshipListeners();
  socialProfile.relationshipsOwnerId = state.profileId;

  socialProfile.friendsRef = db.ref(`friendLinks/${state.profileId}`);
  socialProfile.friendsRef.on("value", (snapshot) => {
    const raw = snapshot.val() || {};
    socialProfile.friendIds = Object.keys(raw).map((id) => sanitizeProfileId(id)).filter(Boolean);
    syncTrackedProfileListeners();
    void fetchPublicProfilesById(socialProfile.friendIds).finally(() => {
      renderFriendsView();
      renderProfilePanel();
    });
  });

  socialProfile.receivedInvitesRef = db.ref(`friendInvites/${state.profileId}`);
  socialProfile.receivedInvitesRef.on("value", (snapshot) => {
    const raw = snapshot.val() || {};
    socialProfile.receivedInvites = Object.entries(raw).map(([fromProfileId, payload]) => ({
      fromProfileId: sanitizeProfileId(fromProfileId),
      ...(payload || {}),
    })).filter((entry) => entry.fromProfileId);
    syncTrackedProfileListeners();
    void fetchPublicProfilesById(socialProfile.receivedInvites.map((entry) => entry.fromProfileId)).finally(() => {
      renderFriendsView();
    });
  });

  socialProfile.sentInvitesRef = db.ref(`friendInviteSent/${state.profileId}`);
  socialProfile.sentInvitesRef.on("value", (snapshot) => {
    const raw = snapshot.val() || {};
    socialProfile.sentInviteIds = Object.keys(raw).map((id) => sanitizeProfileId(id)).filter(Boolean);
    syncTrackedProfileListeners();
    void fetchPublicProfilesById(socialProfile.sentInviteIds).finally(() => {
      renderFriendsView();
    });
  });
}

function getSuggestedFriendProfiles() {
  const currentWorldId = getHighestUnlockedTrophyWorldId();
  const excluded = new Set([
    state.profileId,
    ...socialProfile.friendIds,
    ...socialProfile.sentInviteIds,
    ...socialProfile.receivedInvites.map((entry) => entry.fromProfileId),
  ]);

  const candidates = socialProfile.leaderboard.filter((entry) => (
    !excluded.has(entry.profileId)
    && getProfileThemeWorldId(entry) === currentWorldId
  ));
  const nearby = candidates
    .filter((entry) => Math.abs(Number(entry.trophies || 0) - Number(state.trophies || 0)) <= 250)
    .sort((left, right) => {
      const diff = Math.abs(Number(left.trophies || 0) - Number(state.trophies || 0))
        - Math.abs(Number(right.trophies || 0) - Number(state.trophies || 0));
      if (diff !== 0) {
        return diff;
      }

      return Number(right.trophies || 0) - Number(left.trophies || 0);
    });

  const fallback = candidates
    .slice()
    .sort((left, right) => {
      const diff = Math.abs(Number(left.trophies || 0) - Number(state.trophies || 0))
        - Math.abs(Number(right.trophies || 0) - Number(state.trophies || 0));
      if (diff !== 0) {
        return diff;
      }

      return Number(right.trophies || 0) - Number(left.trophies || 0);
    });

  return (nearby.length >= 8 ? nearby : fallback).slice(0, 8);
}

function buildFriendsProfileCard(profile, options = {}) {
  const themeId = getProfileThemeWorldId(profile);
  const profilePhoto = profile?.profilePhotoId
    ? CATALOG.profilePhotos.find((item) => item.id === profile.profilePhotoId) || null
    : null;
  const favoriteCharacterId = profile?.equippedCharacterId || profile?.favoriteCharacterId;
  const favoriteCharacter = favoriteCharacterId
    ? CATALOG.characters.find((item) => item.id === favoriteCharacterId) || null
    : null;
  const profileVisual = profilePhoto || favoriteCharacter;
  const title = escapeHtml(profile?.nickname || "Gracz");
  const actions = Array.isArray(options.actions) ? options.actions.join("") : "";
  const presence = getProfilePresenceMeta(profile);

  return `
    <article class="friends-profile-card" data-world-theme="${themeId}">
      <div class="friends-profile-visual">
        <div class="avatar-frame profile-preview-frame friends-profile-frame">
          ${buildPreviewAssetMarkup(profileVisual, {
            imageClass: "avatar-image asset-image",
            videoClass: "avatar-image asset-video",
            fallbackText: "PROFIL",
            alt: profileVisual?.name || "Profil",
            usePreviewVideo: false,
          })}
        </div>
      </div>
      <div class="friends-profile-main">
        <div class="friends-profile-bar-shell">
          <div class="profile-world-bar friends-profile-world-bar" data-world-theme="${themeId}" aria-hidden="true"></div>
        </div>
        <h4 class="friends-profile-name">${title}</h4>
        <p class="friends-profile-presence" data-presence-state="${presence.state}">${presence.label}</p>
        <div class="profile-trophy-line profile-trophy-line-plain friends-profile-trophy-line">
          <img class="profile-trophy-icon profile-trophy-icon-plain" src="./assets/currencies/monety_2.png" alt="Pucharki" />
          <p class="profile-trophy-value profile-trophy-value-small friends-profile-trophy-value">${Number(profile?.trophies || 0)}</p>
        </div>
        ${actions ? `<div class="friends-profile-actions">${actions}</div>` : ""}
      </div>
    </article>
  `;
}

function buildFriendInviteAction(profile) {
  const profileId = sanitizeProfileId(profile?.profileId);
  const publicId = sanitizePublicPlayerId(profile?.publicId);

  if (profileId) {
    return `<button class="pixel-button small-button settings-action-button" data-friend-invite-profile="${profileId}" type="button">ZAPROŚ</button>`;
  }

  if (!publicId) {
    return `<button class="pixel-button small-button subtle-button" type="button" disabled>BRAK ID</button>`;
  }

  return `<button class="pixel-button small-button settings-action-button" data-friend-invite="${publicId}" type="button">ZAPROŚ</button>`;
}

function getCurrentProfileActivityState() {
  if (typeof document !== "undefined" && document.visibilityState === "hidden") {
    return "offline";
  }

  if (ui.currentView === "game" && game.active) {
    return "game";
  }

  return "lobby";
}

function formatLastSeenAgo(timestamp) {
  const diffMs = Math.max(0, Date.now() - Number(timestamp || 0));
  const diffSeconds = Math.floor(diffMs / 1000);

  if (diffSeconds < 10) {
    return "przed chwilą";
  }

  if (diffSeconds < 60) {
    return `${diffSeconds} s temu`;
  }

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) {
    return `${diffMinutes} min temu`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} godz. temu`;
  }

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} d temu`;
}

function getProfilePresenceMeta(profile) {
  const lastActiveAt = Number(profile?.lastActiveAt || profile?.updatedAt || 0);
  const activityState = String(profile?.activityState || "");
  const isActive = lastActiveAt > 0 && (Date.now() - lastActiveAt) <= PROFILE_ACTIVE_WINDOW_MS;

  if (isActive && activityState === "game") {
    return {
      label: "W grze",
      state: "game",
    };
  }

  if (isActive) {
    return {
      label: "W lobby",
      state: "lobby",
    };
  }

  return {
    label: lastActiveAt ? `Ostatnio ${formatLastSeenAgo(lastActiveAt)}` : "Nieaktywny",
    state: "offline",
  };
}

function renderFriendsView() {
  if (!friendsContent) {
    return;
  }

  if (friendsSelfId) {
    friendsSelfId.textContent = state.publicId || "-";
  }

  if (!socialProfile.ready) {
    friendsContent.innerHTML = `
      <div class="profile-users-empty">
        ${navigator.onLine === false ? "Znajomi działają tylko z internetem." : "Znajomi są teraz niedostępni."}
      </div>
    `;
    return;
  }

  if (ui.friendsTab === "friends") {
    const friendProfiles = socialProfile.friendIds
      .map((profileId) => getCachedSocialProfile(profileId))
      .filter(Boolean)
      .sort((left, right) => Number(right?.trophies || 0) - Number(left?.trophies || 0));

    friendsContent.innerHTML = friendProfiles.length
      ? `<div class="friends-card-grid">${friendProfiles.map((profile) => buildFriendsProfileCard(profile, {
        actions: buildPartyInviteActions(profile),
      })).join("")}</div>`
      : `<div class="profile-users-empty">Nie masz jeszcze znajomych.</div>`;
  } else if (ui.friendsTab === "suggested") {
    const suggestedProfiles = getSuggestedFriendProfiles();

    friendsContent.innerHTML = suggestedProfiles.length
      ? `
        <div class="friends-card-grid">
          ${suggestedProfiles.map((profile) => buildFriendsProfileCard(profile, {
            actions: [buildFriendInviteAction(profile)],
          })).join("")}
        </div>
      `
      : `<div class="profile-users-empty">Brak nowych sugerowanych graczy z Twojego świata.</div>`;
  } else {
    const inviteProfiles = socialProfile.receivedInvites.map((invite) => {
      const cached = getCachedSocialProfile(invite.fromProfileId);
      return cached || {
        profileId: invite.fromProfileId,
        nickname: invite.nickname || "Gracz",
        trophies: Number(invite.trophies || 0),
        worldId: invite.worldId || "alley",
        completedGamesTotal: Number(invite.completedGamesTotal || 0),
        robotsDefeatedTotal: Number(invite.robotsDefeatedTotal || 0),
        ownedCharactersCount: Number(invite.ownedCharactersCount || 0),
        ownedPetsCount: Number(invite.ownedPetsCount || 0),
        favoriteCharacterId: invite.favoriteCharacterId || "",
      };
    });
    const partyInviteProfiles = party.invites.map((invite) => {
      const cached = getCachedSocialProfile(invite.fromProfileId);
      return cached || {
        profileId: invite.fromProfileId,
        nickname: invite.nickname || "Gracz",
        trophies: Number(invite.trophies || 0),
        worldId: invite.worldId || "alley",
        favoriteCharacterId: invite.favoriteCharacterId || invite.characterId || "",
        equippedCharacterId: invite.characterId || "",
        equippedPetId: invite.petId || "",
      };
    });

    const sections = [];

    if (inviteProfiles.length) {
      sections.push(`
        <div class="friends-section-block">
          <p class="profile-users-heading">Zaproszenia do znajomych</p>
          <div class="friends-card-grid">
            ${inviteProfiles.map((profile) => buildFriendsProfileCard(profile, {
              actions: [
                `<button class="pixel-button small-button settings-action-button" data-friend-accept="${profile.profileId}" type="button">POTWIERDŹ</button>`,
                `<button class="pixel-button small-button subtle-button" data-friend-reject="${profile.profileId}" type="button">ODRZUĆ</button>`,
              ],
            })).join("")}
          </div>
        </div>
      `);
    }

    if (partyInviteProfiles.length) {
      sections.push(`
        <div class="friends-section-block">
          <p class="profile-users-heading">Zaproszenia do lobby</p>
          <div class="friends-card-grid">
            ${partyInviteProfiles.map((profile) => buildFriendsProfileCard(profile, {
              actions: [
                `<button class="pixel-button small-button settings-action-button" data-party-accept="${profile.profileId}" type="button">AKCEPTUJ</button>`,
                `<button class="pixel-button small-button subtle-button" data-party-reject="${profile.profileId}" type="button">ODRZUĆ</button>`,
              ],
            })).join("")}
          </div>
        </div>
      `);
    }

    friendsContent.innerHTML = sections.length
      ? sections.join("")
      : `<div class="profile-users-empty">Nie masz nowych zaproszeń.</div>`;
  }

  syncBrokenAssets(friendsContent);
  syncAnimatedAssets(friendsContent);
}

function getBookAnimals() {
  return CATALOG.pets.filter((item) => item.unlockWorld === "tower");
}

function getBookGrandRewardCharacter() {
  return CATALOG.characters.find((item) => item.id === "coco-nkosi") || null;
}

function getBookAnimalsOwnedCount() {
  return getBookAnimals().filter((pet) => state.ownedPets.includes(pet.id)).length;
}

function getBookMissionProgressState() {
  if (!state.bookMissionProgress || typeof state.bookMissionProgress !== "object") {
    state.bookMissionProgress = {
      totalRobotDamage: 0,
      fullClearStreak: 0,
      currentRunRobots: 0,
      junglePetRoundsPlayed: 0,
      robotsDefeatedSinceMissions: 0,
      trophiesEarnedSinceMissions: 0,
    };
  }

  state.bookMissionProgress.totalRobotDamage = Math.max(0, Number(state.bookMissionProgress.totalRobotDamage || 0));
  state.bookMissionProgress.fullClearStreak = Math.max(0, Number(state.bookMissionProgress.fullClearStreak || 0));
  state.bookMissionProgress.currentRunRobots = Math.max(0, Number(state.bookMissionProgress.currentRunRobots || 0));
  state.bookMissionProgress.junglePetRoundsPlayed = Math.max(0, Number(state.bookMissionProgress.junglePetRoundsPlayed || 0));
  state.bookMissionProgress.robotsDefeatedSinceMissions = Math.max(0, Number(state.bookMissionProgress.robotsDefeatedSinceMissions || 0));
  state.bookMissionProgress.trophiesEarnedSinceMissions = Math.max(0, Number(state.bookMissionProgress.trophiesEarnedSinceMissions || 0));

  if (!Array.isArray(state.claimedBookMissionIds)) {
    state.claimedBookMissionIds = [];
  }

  return state.bookMissionProgress;
}

function isJungleBookPetId(petId) {
  return CATALOG.pets.some((pet) => pet.id === petId && pet.unlockWorld === "tower");
}

function getBookMissionDefinitions() {
  const progress = getBookMissionProgressState();

  return [
    {
      id: "tower-mission-robots-180",
      title: "Misja 1",
      description: "Pokonaj 180 Robotów",
      progress: progress.robotsDefeatedSinceMissions,
      goal: 180,
      rewardLabel: "Skrzynia Dżungli",
      rewardCrateId: "dzunglowa-skrzynia",
      image: "./assets/robots/robot_wieza.jpeg",
      fallbackText: "ROBOT",
    },
    {
      id: "tower-mission-perfect-streak",
      title: "Misja 2",
      description: "Przetrwaj 5 fal 4 razy z rzędu",
      progress: progress.fullClearStreak,
      goal: 4,
      rewardLabel: "Skrzynia Dżungli",
      rewardCrateId: "dzunglowa-skrzynia",
      image: "./assets/shop/skrzyniadzungla.jpeg",
      fallbackText: "SKRZYNIA",
    },
    {
      id: "tower-mission-trophies-200",
      title: "Misja 3",
      description: "Zdobądź 200 pucharów",
      progress: progress.trophiesEarnedSinceMissions,
      goal: 200,
      rewardLabel: "Skrzynia Dżungli",
      rewardCrateId: "dzunglowa-skrzynia",
      image: TROPHY_ICON_IMAGE,
      fallbackText: "PUCH",
    },
    {
      id: "tower-mission-damage-12000",
      title: "Misja 4",
      description: "Zadaj robotom łącznie 12000 obrażeń",
      progress: progress.totalRobotDamage,
      goal: 12000,
      rewardLabel: "Skrzynia Dżungli",
      rewardCrateId: "dzunglowa-skrzynia",
      image: "./assets/robots/robot_wieza.jpeg",
      fallbackText: "ROBOT",
    },
    {
      id: "tower-mission-one-run-35",
      title: "Misja 5",
      description: "Pokonaj w jednej grze 35 robotów",
      progress: progress.currentRunRobots,
      goal: 35,
      rewardLabel: "Skrzynia Dżungli",
      rewardCrateId: "dzunglowa-skrzynia",
      image: "./assets/robots/robot_wieza.jpeg",
      fallbackText: "ROBOT",
    },
    {
      id: "tower-mission-jungle-rounds-3",
      title: "Misja 6",
      description: "Zagraj trzy rundy z dowolnym dżunglowym PlatoYA",
      progress: progress.junglePetRoundsPlayed,
      goal: 3,
      rewardLabel: "Skrzynia Dżungli",
      rewardCrateId: "dzunglowa-skrzynia",
      image: "./assets/alley/księga.jpeg",
      fallbackText: "KSIĘGA",
    },
  ];
}

function isBookMissionClaimed(missionId) {
  return Array.isArray(state.claimedBookMissionIds) && state.claimedBookMissionIds.includes(missionId);
}

function buildBookTabs() {
  return `
    <div class="book-tabs" role="tablist" aria-label="Zakładki Księgi Dżungli">
      <button
        class="book-tab-button${ui.bookTab === "book" ? " active" : ""}"
        data-book-tab="book"
        type="button"
        role="tab"
        aria-selected="${ui.bookTab === "book"}"
      >
        KSIĘGA
      </button>
      <button
        class="book-tab-button${ui.bookTab === "missions" ? " active" : ""}"
        data-book-tab="missions"
        type="button"
        role="tab"
        aria-selected="${ui.bookTab === "missions"}"
      >
        MISJE
      </button>
    </div>
  `;
}

function buildBookPetCard(pet) {
  const owned = state.ownedPets.includes(pet.id);
  const stateLabel = owned ? "POSIADASZ" : "NIE POSIADASZ";
  const clickAttrs = owned ? 'disabled aria-disabled="true"' : `data-book-pet="${pet.id}"`;

  return `
    <button
      class="book-pet-card${owned ? " owned" : ""}"
      data-world-theme="tower"
      ${clickAttrs}
      type="button"
    >
      <div class="book-pet-art">
        <img
          class="item-image asset-image"
          src="${pet.image}"
          alt="${pet.name}"
          data-fallback-text="${pet.name}"
        />
        <div class="asset-fallback">${pet.name}</div>
      </div>
      <p class="book-pet-title">${pet.name}</p>
      <p class="book-pet-state">${stateLabel}</p>
    </button>
  `;
}

function buildBookGrandRewardCard(character, ownedCount, totalCount) {
  const isOwned = state.ownedCharacters.includes(character.id);
  const missingCount = Math.max(0, totalCount - ownedCount);
  const note = isOwned
    ? "COCO N'KOSI JEST JUŻ TWOJA."
    : missingCount === 0
      ? "NACIŚNIJ ABY ODEBRAĆ COCO N'KOSI"
      : missingCount === 1
        ? "BRAKUJE CI JESZCZE JEDNEGO ZWIERZĘTA"
        : `BRAKUJE CI JESZCZE ${missingCount} ZWIERZĄT`;

  return `
    <button
      class="book-grand-reward-card${isOwned ? " owned" : ""}"
      data-book-grand-reward="${character.id}"
      type="button"
    >
      <div class="book-grand-reward-art item-art" data-world-theme="tower">
        ${buildPreviewAssetMarkup(character, {
          fallbackText: "COCO",
          alt: character.name,
          imageClass: "item-image asset-image",
          videoClass: "item-image asset-video",
          usePoster: false,
        })}
      </div>
      <p class="book-grand-reward-note">${note}</p>
    </button>
  `;
}

function buildBookMissionCard(mission) {
  const claimed = isBookMissionClaimed(mission.id);
  const completed = mission.progress >= mission.goal;
  const clampedProgress = Math.min(mission.goal, Math.max(0, Number(mission.progress || 0)));

  return `
    <article class="book-mission-card${claimed ? " claimed" : ""}${completed && !claimed ? " completed" : ""}" data-world-theme="tower">
      <div class="book-mission-art">
        <img
          class="item-image asset-image"
          src="${mission.image}"
          alt="${mission.title}"
          data-fallback-text="${mission.fallbackText}"
        />
        <div class="asset-fallback">${mission.fallbackText}</div>
      </div>
      <p class="book-mission-title">${mission.title}</p>
      <p class="book-mission-description">${mission.description}</p>
      <p class="book-mission-progress">${clampedProgress}/${mission.goal}</p>
      <p class="book-mission-reward">Nagroda: ${mission.rewardLabel}</p>
      <button
        class="pixel-button small-button book-mission-claim"
        data-book-mission-claim="${mission.id}"
        type="button"
        ${claimed || !completed ? "disabled" : ""}
      >
        ${claimed ? "ODEBRANA" : completed ? "ODBIERZ" : "W TRAKCIE"}
      </button>
    </article>
  `;
}

function buildBookMissionsView() {
  return `
    <div class="book-mission-strip">
      <div class="book-missions-grid">
        ${getBookMissionDefinitions().map((mission) => buildBookMissionCard(mission)).join("")}
      </div>
    </div>
  `;
}

function renderBookView() {
  if (!bookContent) {
    return;
  }

  if (!isTowerWorldUnlocked()) {
    bookContent.innerHTML = `
      ${buildBookTabs()}
      <div class="profile-users-empty">Księga Dżungli odblokuje się po wejściu do Świata Dżungli.</div>
    `;
    return;
  }

  const junglePets = getBookAnimals();
  const ownedCount = getBookAnimalsOwnedCount();
  const grandRewardCharacter = getBookGrandRewardCharacter();
  const rightPaneContent = ui.bookTab === "missions"
    ? buildBookMissionsView()
    : `
      <div class="book-pet-strip">
        <div class="book-pet-grid">
          ${junglePets.map((pet) => buildBookPetCard(pet)).join("")}
        </div>
      </div>
    `;

  bookContent.innerHTML = `
    ${buildBookTabs()}
    <div class="book-layout">
      <aside class="book-hero-card" data-world-theme="tower">
        <div class="book-hero-visual">
          <div class="book-hero-stage">
            <div class="book-hero-glow" aria-hidden="true"></div>
            <div class="book-hero-art item-art" data-world-theme="tower">
              <img
                class="item-image asset-image book-hero-image"
                src="./assets/alley/księga.jpeg"
                alt="Księga Dżungli"
                data-fallback-text="KSIEGA"
              />
              <div class="asset-fallback">KSIEGA</div>
            </div>
          </div>
        </div>
        <p class="book-hero-title">Księga Dżungli</p>
        <p class="book-hero-count">${ownedCount} / ${junglePets.length} zwierząt</p>
        ${grandRewardCharacter ? buildBookGrandRewardCard(grandRewardCharacter, ownedCount, junglePets.length) : ""}
      </aside>

      <div class="book-main-column">
        ${rightPaneContent}
      </div>
    </div>
  `;

  syncBrokenAssets(bookContent);
  syncAnimatedAssets(bookContent);
}

async function claimBookGrandReward(characterId) {
  const character = CATALOG.characters.find((item) => item.id === characterId);

  if (!character || state.ownedCharacters.includes(character.id)) {
    return;
  }

  const totalCount = getBookAnimals().length;
  const ownedCount = getBookAnimalsOwnedCount();

  if (ownedCount < totalCount) {
    return;
  }

  state.ownedCharacters.push(character.id);
  saveState();
  renderAll();

  await showRewardShowcase({
    image: character.image,
    previewVideo: character.previewVideo || "",
    name: character.name,
    superTheme: "tower",
    soundEffectName: "characterUnlock",
  });
}

async function claimBookMission(missionId) {
  const mission = getBookMissionDefinitions().find((entry) => entry.id === missionId);

  if (!mission || isBookMissionClaimed(mission.id) || mission.progress < mission.goal) {
    return;
  }

  if (!Array.isArray(state.claimedBookMissionIds)) {
    state.claimedBookMissionIds = [];
  }

  state.claimedBookMissionIds.push(mission.id);
  saveState();
  renderAll();

  const crate = CATALOG.crates.find((item) => item.id === mission.rewardCrateId);
  if (!crate) {
    return;
  }

  const preparedSession = createChestSession(crate);
  await showCrateRewardScene(crate, preparedSession.rewards, {
    superTheme: getCrateRewardTheme(crate),
  });
}

async function buyBookPet(petId) {
  const pet = CATALOG.pets.find((item) => item.id === petId && item.unlockWorld === "tower");

  if (!pet || state.ownedPets.includes(pet.id)) {
    return;
  }

  if (state.diamonds < Number(pet.price || 0)) {
    openModal({
      title: "Za mało diamentów",
      message: `Brakuje ci ${Math.max(0, Number(pet.price || 0) - state.diamonds)} diamentów.`,
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  state.diamonds -= Number(pet.price || 0);
  state.ownedPets.push(pet.id);
  saveState();
  renderAll();

  await showRewardShowcase({
    image: pet.image,
    name: pet.name,
    superTheme: "tower",
    soundEffectName: getPetVoiceEffect(pet.id),
  });
}

function openBookPetPurchaseModal(petId) {
  const pet = CATALOG.pets.find((item) => item.id === petId && item.unlockWorld === "tower");

  if (!pet || state.ownedPets.includes(pet.id)) {
    return;
  }

  openStoreCharacterPurchase({
    ...pet,
    kind: "book-pet",
    worldTheme: "tower",
    price: Number(pet.price || 0),
    currency: "diamonds",
    purchaseCopy: pet.description || "Dżunglowy PlatoYa z własną mocą.",
    missingCopy: (missing) => `Brakuje ci ${missing} diamentów.`,
    confirmLabel: "Kup za 100 diamentów",
  });
}

function openBookGrandRewardModal(characterId) {
  const character = CATALOG.characters.find((item) => item.id === characterId);

  if (!character) {
    return;
  }

  const totalCount = getBookAnimals().length;
  const ownedCount = getBookAnimalsOwnedCount();
  const missingAnimals = Math.max(0, totalCount - ownedCount);
  const alreadyOwned = state.ownedCharacters.includes(character.id);

  openStoreCharacterPurchase({
    ...character,
    kind: "book-grand-reward",
    worldTheme: "tower",
    price: 0,
    usePoster: false,
    currency: "progress",
    progressCurrent: ownedCount,
    progressTotal: totalCount,
    alreadyOwned,
    purchaseCopy: alreadyOwned
      ? "Masz już tę darmową animowaną postać z Księgi Dżungli."
      : missingAnimals === 0
        ? "Masz wszystkie zwierzęta. Odbierz darmową animowaną postać."
        : "Odblokuj wszystkie zwierzęta, aby otrzymać darmową animowaną postać.",
    missingCopy: (missing, total) => alreadyOwned
      ? "Masz już tę postać."
      : `Brakuje Ci ${missing}/${total} zwierząt.`,
    confirmLabel: "Odbierz Coco N'Kosi",
  });
}

async function copyOwnProfileId() {
  const publicId = state.publicId || "";
  if (!publicId) {
    return;
  }

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(publicId);
      openModal({
        title: "Skopiowano ID",
        message: "Twoje ID zostało skopiowane.",
        buttonText: "OK",
        onConfirm: closeModal,
      });
      return;
    }
  } catch (error) {
    // fallback below
  }

  openModal({
    title: "Twoje ID",
    message: publicId,
    buttonText: "OK",
    onConfirm: closeModal,
  });
}

function sendFriendInviteFromInput() {
  sendFriendInviteByProfileId(friendsInviteIdInput?.value || "");
}

async function sendFriendInviteToResolvedProfileId(targetProfileId, fallbackProfile = null) {
  const normalizedProfileId = sanitizeProfileId(targetProfileId);

  if (!(await ensureSocialProfileReady())) {
    openModal({
      title: "Brak internetu",
      message: "Znajomi działają tylko z internetem.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (!normalizedProfileId) {
    openModal({
      title: "Brak gracza",
      message: "Nie udało się znaleźć tego gracza.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (normalizedProfileId === state.profileId) {
    openModal({
      title: "To Twój profil",
      message: "Nie możesz zaprosić samego siebie.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  const db = getFirebaseSocialDatabase();
  if (!db) {
    return;
  }

  friendsInviteIdButton && (friendsInviteIdButton.disabled = true);

  try {
    if (socialProfile.friendIds.includes(normalizedProfileId)) {
      throw new Error("already-friend");
    }

    if (socialProfile.sentInviteIds.includes(normalizedProfileId)) {
      throw new Error("already-sent");
    }

    if (socialProfile.receivedInvites.some((entry) => entry.fromProfileId === normalizedProfileId)) {
      throw new Error("already-received");
    }

    const targetProfile = fallbackProfile
      || getCachedSocialProfile(normalizedProfileId)
      || (await fetchPublicProfilesById([normalizedProfileId]))[0]
      || null;

    if (!targetProfile) {
      throw new Error("missing-profile");
    }

    const invitePayload = {
      ...buildPublicProfilePayload(),
      fromProfileId: state.profileId,
      createdAt: Date.now(),
    };

    const sentPayload = {
      toProfileId: normalizedProfileId,
      nickname: targetProfile.nickname || "Gracz",
      trophies: Number(targetProfile.trophies || 0),
      worldId: getProfileThemeWorldId(targetProfile),
      createdAt: Date.now(),
    };

    const updates = {};
    updates[`friendInvites/${normalizedProfileId}/${state.profileId}`] = invitePayload;
    updates[`friendInviteSent/${state.profileId}/${normalizedProfileId}`] = sentPayload;
    await db.ref().update(updates);

    if (friendsInviteIdInput) {
      friendsInviteIdInput.value = "";
    }

    openModal({
      title: "Zaproszenie wysłane",
      message: `Zaprosiłeś gracza ${targetProfile.nickname || "Gracz"}.`,
      buttonText: "OK",
      onConfirm: closeModal,
    });
  } catch (error) {
    openModal({
      title: "Nie udało się",
      message:
        error?.message === "missing-profile"
          ? "Nie ma gracza o takim ID."
          : error?.message === "already-friend"
            ? "Ten gracz jest już w znajomych."
            : error?.message === "already-sent"
              ? "Do tego gracza zostało już wysłane zaproszenie."
              : error?.message === "already-received"
                ? "Ten gracz już Cię zaprosił. Wejdź w Zaproszenia."
                : "Nie udało się wysłać zaproszenia.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
  } finally {
    friendsInviteIdButton && (friendsInviteIdButton.disabled = false);
  }
}

async function sendFriendInviteByProfileId(rawProfileId) {
  const targetPublicId = sanitizePublicPlayerId(rawProfileId);

  if (!(await ensureSocialProfileReady())) {
    openModal({
      title: "Brak internetu",
      message: "Znajomi działają tylko z internetem.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (!targetPublicId) {
    openModal({
      title: "Brak ID",
      message: "Wpisz ID gracza.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (targetPublicId === state.publicId) {
    openModal({
      title: "To Twoje ID",
      message: "Nie możesz zaprosić samego siebie.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  const db = getFirebaseSocialDatabase();
  if (!db) {
    return;
  }

  friendsInviteIdButton && (friendsInviteIdButton.disabled = true);

  try {
    const publicIdSnapshot = await db.ref(`publicIds/${targetPublicId}`).once("value");
    const reservedProfileId = sanitizeProfileId(publicIdSnapshot.val()?.profileId);
    const cachedProfileId = sanitizeProfileId(
      socialProfile.leaderboard.find((entry) => sanitizePublicPlayerId(entry.publicId) === targetPublicId)?.profileId
      || socialProfile.receivedInvites.find((entry) => sanitizePublicPlayerId(entry.publicId) === targetPublicId)?.fromProfileId
      || socialProfile.friendIds.find((profileId) => sanitizePublicPlayerId(getCachedSocialProfile(profileId)?.publicId) === targetPublicId)
      || ""
    );
    const targetProfileId = reservedProfileId || cachedProfileId;

    if (!targetProfileId) {
      throw new Error("missing-profile");
    }

    const targetProfile = getCachedSocialProfile(targetProfileId)
      || (await fetchPublicProfilesById([targetProfileId]))[0]
      || null;
    await sendFriendInviteToResolvedProfileId(targetProfileId, targetProfile);
  } catch (error) {
    friendsInviteIdButton && (friendsInviteIdButton.disabled = false);

    if (error?.message === "missing-profile") {
      openModal({
        title: "Nie udało się",
        message: "Nie ma gracza o takim ID.",
        buttonText: "OK",
        onConfirm: closeModal,
      });
      return;
    }

    openModal({
      title: "Nie udało się",
      message: "Nie udało się wysłać zaproszenia.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
  }
}

async function acceptFriendInvite(rawProfileId) {
  const fromProfileId = sanitizeProfileId(rawProfileId);
  if (!fromProfileId || !(await ensureSocialProfileReady())) {
    return;
  }

  const db = getFirebaseSocialDatabase();
  if (!db) {
    return;
  }

  const now = Date.now();
  const updates = {};
  updates[`friendLinks/${state.profileId}/${fromProfileId}`] = { createdAt: now };
  updates[`friendLinks/${fromProfileId}/${state.profileId}`] = { createdAt: now };
  updates[`friendInvites/${state.profileId}/${fromProfileId}`] = null;
  updates[`friendInviteSent/${fromProfileId}/${state.profileId}`] = null;
  updates[`friendInvites/${fromProfileId}/${state.profileId}`] = null;
  updates[`friendInviteSent/${state.profileId}/${fromProfileId}`] = null;

  await db.ref().update(updates).catch(() => {});
}

async function rejectFriendInvite(rawProfileId) {
  const fromProfileId = sanitizeProfileId(rawProfileId);
  if (!fromProfileId || !(await ensureSocialProfileReady())) {
    return;
  }

  const db = getFirebaseSocialDatabase();
  if (!db) {
    return;
  }

  const updates = {};
  updates[`friendInvites/${state.profileId}/${fromProfileId}`] = null;
  updates[`friendInviteSent/${fromProfileId}/${state.profileId}`] = null;
  await db.ref().update(updates).catch(() => {});
}

function getFirebasePartyDatabase() {
  return getFirebaseSocialDatabase();
}

function buildPartyId(profileIds = []) {
  const ids = [...new Set(profileIds.map((id) => sanitizeProfileId(id)).filter(Boolean))].sort();
  return ids.length >= 2 ? `party-${ids.join("-")}` : "";
}

function buildPartyMemberRecordFromProfile(profile, overrides = {}) {
  const themeWorldId = profile?.worldId ? normalizeTrophyWorldId(profile.worldId) : getProfileThemeWorldId(profile);
  return {
    profileId: sanitizeProfileId(profile?.profileId),
    publicId: sanitizePublicPlayerId(profile?.publicId),
    nickname: sanitizePlayerNickname(profile?.nickname) || "Gracz",
    characterId: sanitizeStoredId(profile?.equippedCharacterId || profile?.favoriteCharacterId),
    petId: sanitizeStoredId(profile?.equippedPetId || profile?.favoritePetId),
    worldId: themeWorldId,
    ready: false,
    view: "lobby",
    connected: true,
    x: 0,
    y: 0,
    fire: false,
    updatedAt: Date.now(),
    ...overrides,
  };
}

function buildLocalPartyMemberPayload(overrides = {}) {
  const character = getOwnedItem("characters", state.equippedCharacter) || CATALOG.characters[0];
  const pet = getOwnedItem("pets", state.equippedPet) || null;
  return buildPartyMemberRecordFromProfile({
    profileId: state.profileId,
    publicId: state.publicId,
    nickname: getPlayerNickname(),
    equippedCharacterId: character?.id || "",
    equippedPetId: pet?.id || "",
    worldId: getHighestUnlockedTrophyWorldId(),
  }, overrides);
}

function getActivePartyMemberIds(partyData = party.data) {
  return Object.keys(partyData?.members || {}).map((id) => sanitizeProfileId(id)).filter(Boolean);
}

function getOtherPartyMemberId(partyData = party.data) {
  return getActivePartyMemberIds(partyData).find((profileId) => profileId !== state.profileId) || "";
}

function getOtherPartyMemberData(partyData = party.data) {
  const otherProfileId = getOtherPartyMemberId(partyData);
  return otherProfileId ? partyData?.members?.[otherProfileId] || null : null;
}

function getMergedPartyMemberProfile(profileId, memberData = null) {
  const normalizedProfileId = sanitizeProfileId(profileId);
  if (!normalizedProfileId) {
    return null;
  }

  const cached = getCachedSocialProfile(normalizedProfileId) || {};
  const member = memberData || party.data?.members?.[normalizedProfileId] || {};
  return {
    ...cached,
    ...member,
    profileId: normalizedProfileId,
    nickname: member.nickname || cached.nickname || "Gracz",
    equippedCharacterId: member.characterId || cached.equippedCharacterId || cached.favoriteCharacterId || "",
    equippedPetId: member.petId || cached.equippedPetId || cached.favoritePetId || "",
    worldId: member.worldId || cached.worldId || "alley",
  };
}

function isPartyActive() {
  return Boolean(party.partyId && party.data);
}

function isPartyGameActive(partyData = party.data) {
  return Boolean(partyData?.game?.active && sanitizeStoredId(partyData?.game?.sessionId));
}

function isPartyLeader(partyData = party.data) {
  return sanitizeProfileId(partyData?.hostProfileId) === state.profileId;
}

function isLocalPartyReady() {
  return Boolean(party.data?.members?.[state.profileId]?.ready);
}

function detachPartyRefListener() {
  if (party.partyRef) {
    party.partyRef.off();
    party.partyRef = null;
  }
}

function handlePartyDisbanded() {
  const wasCoopActive = game.mode === "coop" && game.coopPartyId;
  party.data = null;
  party.partyId = "";
  party.partyLaunchHandledId = "";
  ui.pendingPartyLaunch = null;
  renderLobby();
  renderFriendsView();
  syncTrackedProfileListeners();

  if (wasCoopActive) {
    game.coopPartyId = "";
    game.coopSessionId = "";
    game.coopHostProfileId = "";
    concludeCoopGameSession("Koniec rundy", "Znajomy opuścił wspólną grę.");
  }
}

function handleActivePartySnapshot(payload) {
  if (!payload) {
    handlePartyDisbanded();
    return;
  }

  party.data = {
    partyId: party.partyId,
    ...payload,
  };
  syncTrackedProfileListeners();
  renderLobby();
  renderFriendsView();

  if (isPartyLeader(party.data) && !isPartyGameActive(party.data)) {
    void maybeStartPartyGameSession();
  }

  const sessionId = sanitizeStoredId(party.data?.game?.sessionId);
  if (sessionId && isPartyGameActive(party.data)) {
    if (game.mode === "coop" && game.coopSessionId === sessionId) {
      applyRemoteCoopSnapshot(party.data.game);
      return;
    }

    if (party.partyLaunchHandledId !== sessionId) {
      party.partyLaunchHandledId = sessionId;
      ui.pendingPartyLaunch = {
        partyId: party.partyId,
        snapshot: party.data.game,
      };
      showView("game");
    }
  }
}

function attachPartyRefListener(nextPartyId) {
  detachPartyRefListener();
  party.partyId = sanitizeStoredId(nextPartyId);

  if (!party.partyId) {
    party.data = null;
    renderLobby();
    renderFriendsView();
    syncTrackedProfileListeners();
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  party.partyRef = db.ref(`parties/${party.partyId}`);
  party.partyRef.on("value", (snapshot) => {
    handleActivePartySnapshot(snapshot.val() || null);
  });
}

function detachPartyListeners() {
  if (party.memberSyncTimer) {
    window.clearTimeout(party.memberSyncTimer);
    party.memberSyncTimer = 0;
  }

  if (party.membershipRef) {
    party.membershipRef.off();
    party.membershipRef = null;
  }

  if (party.invitesRef) {
    party.invitesRef.off();
    party.invitesRef = null;
  }

  if (party.invitesSentRef) {
    party.invitesSentRef.off();
    party.invitesSentRef = null;
  }

  detachPartyRefListener();
  party.invites = [];
  party.sentInviteIds = [];
  party.data = null;
  party.partyId = "";
  party.partyLaunchHandledId = "";
  party.pendingMemberSyncPayload = {};
}

function filterFreshPartyInvites(entries = []) {
  const threshold = Date.now() - PARTY_INVITE_EXPIRY_MS;
  return entries.filter((entry) => Number(entry?.createdAt || 0) >= threshold);
}

function syncPartyListeners() {
  const db = getFirebasePartyDatabase();

  if (!db || !state.profileId) {
    detachPartyListeners();
    return;
  }

  if (party.membershipOwnerId === state.profileId && party.membershipRef) {
    return;
  }

  detachPartyListeners();
  party.membershipOwnerId = state.profileId;

  party.membershipRef = db.ref(`partyMemberships/${state.profileId}`);
  party.membershipRef.on("value", (snapshot) => {
    const nextPartyId = sanitizeStoredId(snapshot.val()?.partyId || "");
    if (nextPartyId !== party.partyId) {
      attachPartyRefListener(nextPartyId);
      return;
    }

    if (!nextPartyId && party.partyId) {
      handlePartyDisbanded();
    }
  });

  party.invitesRef = db.ref(`partyInvites/${state.profileId}`);
  party.invitesRef.on("value", (snapshot) => {
    const raw = snapshot.val() || {};
    party.invites = filterFreshPartyInvites(
      Object.entries(raw).map(([fromProfileId, payload]) => ({
        fromProfileId: sanitizeProfileId(fromProfileId),
        ...(payload || {}),
      })).filter((entry) => entry.fromProfileId)
    );
    syncTrackedProfileListeners();
    void fetchPublicProfilesById(party.invites.map((entry) => entry.fromProfileId)).finally(() => {
      renderFriendsView();
    });
  });

  party.invitesSentRef = db.ref(`partyInviteSent/${state.profileId}`);
  party.invitesSentRef.on("value", (snapshot) => {
    const raw = snapshot.val() || {};
    const freshEntries = filterFreshPartyInvites(
      Object.entries(raw).map(([toProfileId, payload]) => ({
        toProfileId: sanitizeProfileId(toProfileId),
        ...(payload || {}),
      })).filter((entry) => entry.toProfileId)
    );
    party.sentInviteIds = freshEntries.map((entry) => entry.toProfileId);
    syncTrackedProfileListeners();
    void fetchPublicProfilesById(party.sentInviteIds).finally(() => {
      renderFriendsView();
    });
  });
}

async function sendPartyInvite(rawProfileId) {
  const targetProfileId = sanitizeProfileId(rawProfileId);

  if (!targetProfileId || !(await ensureSocialProfileReady())) {
    openModal({
      title: "Brak internetu",
      message: "Drużyny działają tylko z internetem.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (!socialProfile.friendIds.includes(targetProfileId)) {
    openModal({
      title: "Tylko znajomi",
      message: "Do lobby możesz zaprosić tylko znajomego.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (isPartyActive()) {
    openModal({
      title: "Masz już drużynę",
      message: "Najpierw opuść obecną drużynę.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (party.sentInviteIds.length > 0) {
    openModal({
      title: "Zaproszenie czeka",
      message: "Masz już wysłane zaproszenie do lobby.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  try {
    const targetMembershipSnapshot = await db.ref(`partyMemberships/${targetProfileId}`).once("value");
    if (sanitizeStoredId(targetMembershipSnapshot.val()?.partyId)) {
      throw new Error("target-in-party");
    }

    const targetProfile = getCachedSocialProfile(targetProfileId)
      || (await fetchPublicProfilesById([targetProfileId]))[0]
      || null;

    if (!targetProfile) {
      throw new Error("missing-profile");
    }

    const now = Date.now();
    const invitePayload = {
      ...buildLocalPartyMemberPayload({
        fromProfileId: state.profileId,
        createdAt: now,
      }),
    };
    const sentPayload = {
      toProfileId: targetProfileId,
      nickname: targetProfile.nickname || "Gracz",
      createdAt: now,
    };
    const updates = {};
    updates[`partyInvites/${targetProfileId}/${state.profileId}`] = invitePayload;
    updates[`partyInviteSent/${state.profileId}/${targetProfileId}`] = sentPayload;
    await db.ref().update(updates);

    openModal({
      title: "Zaproszenie wysłane",
      message: `Zaprosiłeś ${targetProfile.nickname || "znajomego"} do lobby.`,
      buttonText: "OK",
      onConfirm: closeModal,
    });
  } catch (error) {
    openModal({
      title: "Nie udało się",
      message:
        error?.message === "target-in-party"
          ? "Ten znajomy jest już w innej drużynie."
          : "Nie udało się wysłać zaproszenia do lobby.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
  }
}

async function cancelPartyInvite(rawProfileId) {
  const targetProfileId = sanitizeProfileId(rawProfileId);
  if (!targetProfileId || !(await ensureSocialProfileReady())) {
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  const updates = {};
  updates[`partyInvites/${targetProfileId}/${state.profileId}`] = null;
  updates[`partyInviteSent/${state.profileId}/${targetProfileId}`] = null;
  await db.ref().update(updates).catch(() => {});
}

async function acceptPartyInvite(rawProfileId) {
  const fromProfileId = sanitizeProfileId(rawProfileId);
  if (!fromProfileId || !(await ensureSocialProfileReady())) {
    return;
  }

  if (isPartyActive()) {
    openModal({
      title: "Masz już drużynę",
      message: "Najpierw opuść obecną drużynę.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  try {
    const [selfMembershipSnapshot, senderMembershipSnapshot] = await Promise.all([
      db.ref(`partyMemberships/${state.profileId}`).once("value"),
      db.ref(`partyMemberships/${fromProfileId}`).once("value"),
    ]);

    if (
      sanitizeStoredId(selfMembershipSnapshot.val()?.partyId)
      || sanitizeStoredId(senderMembershipSnapshot.val()?.partyId)
    ) {
      throw new Error("already-in-party");
    }

    const senderProfile = getCachedSocialProfile(fromProfileId)
      || (await fetchPublicProfilesById([fromProfileId]))[0]
      || party.invites.find((entry) => entry.fromProfileId === fromProfileId)
      || null;

    const partyId = buildPartyId([state.profileId, fromProfileId]);
    const now = Date.now();
    const updates = {};
    updates[`parties/${partyId}`] = {
      partyId,
      hostProfileId: fromProfileId,
      status: "lobby",
      createdAt: now,
      updatedAt: now,
      members: {
        [fromProfileId]: buildPartyMemberRecordFromProfile(senderProfile, {
          profileId: fromProfileId,
          ready: false,
          view: "lobby",
          connected: true,
          updatedAt: now,
        }),
        [state.profileId]: buildLocalPartyMemberPayload({
          ready: false,
          view: "lobby",
          connected: true,
          updatedAt: now,
        }),
      },
      game: null,
    };
    updates[`partyMemberships/${state.profileId}`] = { partyId, updatedAt: now };
    updates[`partyMemberships/${fromProfileId}`] = { partyId, updatedAt: now };
    updates[`partyInvites/${state.profileId}/${fromProfileId}`] = null;
    updates[`partyInviteSent/${fromProfileId}/${state.profileId}`] = null;
    updates[`partyInvites/${fromProfileId}/${state.profileId}`] = null;
    updates[`partyInviteSent/${state.profileId}/${fromProfileId}`] = null;
    await db.ref().update(updates);
  } catch (error) {
    openModal({
      title: "Nie udało się",
      message:
        error?.message === "already-in-party"
          ? "Ty albo ten znajomy jesteście już w drużynie."
          : "Nie udało się dołączyć do lobby.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
  }
}

async function rejectPartyInvite(rawProfileId) {
  const fromProfileId = sanitizeProfileId(rawProfileId);
  if (!fromProfileId || !(await ensureSocialProfileReady())) {
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  const updates = {};
  updates[`partyInvites/${state.profileId}/${fromProfileId}`] = null;
  updates[`partyInviteSent/${fromProfileId}/${state.profileId}`] = null;
  await db.ref().update(updates).catch(() => {});
}

async function leaveParty() {
  if (!isPartyActive() || !(await ensureSocialProfileReady())) {
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  const memberIds = getActivePartyMemberIds();
  const updates = {};
  updates[`parties/${party.partyId}`] = null;
  memberIds.forEach((profileId) => {
    updates[`partyMemberships/${profileId}`] = null;
  });
  await db.ref().update(updates).catch(() => {});
}

function buildPartyInviteActions(profile) {
  const profileId = sanitizeProfileId(profile?.profileId);

  if (!profileId || !socialProfile.friendIds.includes(profileId)) {
    return [];
  }

  if (party.invites.some((entry) => entry.fromProfileId === profileId)) {
    return [
      `<button class="pixel-button small-button settings-action-button" data-party-accept="${profileId}" type="button">AKCEPTUJ</button>`,
      `<button class="pixel-button small-button subtle-button" data-party-reject="${profileId}" type="button">ODRZUĆ</button>`,
    ];
  }

  if (party.sentInviteIds.includes(profileId)) {
    return [
      `<button class="pixel-button small-button subtle-button" data-party-cancel="${profileId}" type="button">ANULUJ</button>`,
    ];
  }

  if (isPartyActive()) {
    if (getOtherPartyMemberId() === profileId) {
      return [
        `<button class="pixel-button small-button subtle-button" type="button" disabled>W LOBBY</button>`,
      ];
    }

    return [
      `<button class="pixel-button small-button subtle-button" type="button" disabled>MASZ DRUŻYNĘ</button>`,
    ];
  }

  return [
    `<button class="pixel-button small-button settings-action-button" data-party-invite="${profileId}" type="button">DO LOBBY</button>`,
  ];
}

async function syncLocalPartyMemberState(overrides = {}) {
  if (!isPartyActive() || party.syncingMember) {
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  party.syncingMember = true;

  try {
    const payload = buildLocalPartyMemberPayload(overrides);
    await db.ref(`parties/${party.partyId}/members/${state.profileId}`).update(payload);
    await db.ref(`parties/${party.partyId}/updatedAt`).set(Date.now());
  } catch (error) {
    // ignore temporary sync issues
  } finally {
    party.syncingMember = false;
  }
}

function schedulePartyMemberSync(immediate = false, overrides = {}) {
  if (!isPartyActive()) {
    return;
  }

  party.pendingMemberSyncPayload = {
    ...(party.pendingMemberSyncPayload || {}),
    ...overrides,
  };

  if (immediate) {
    if (party.memberSyncTimer) {
      window.clearTimeout(party.memberSyncTimer);
      party.memberSyncTimer = 0;
    }
  } else if (party.memberSyncTimer) {
    return;
  }

  party.memberSyncTimer = window.setTimeout(() => {
    party.memberSyncTimer = 0;
    const payload = {
      ...(party.pendingMemberSyncPayload || {}),
    };
    party.pendingMemberSyncPayload = {};

    if (party.syncingMember) {
      party.pendingMemberSyncPayload = {
        ...payload,
        ...(party.pendingMemberSyncPayload || {}),
      };
      schedulePartyMemberSync(false);
      return;
    }

    void syncLocalPartyMemberState(payload);
  }, immediate ? 10 : PARTY_MEMBER_SYNC_MS);
}

async function togglePartyReady() {
  if (!isPartyActive()) {
    ui.pendingPartyLaunch = null;
    await startGameLaunchTransition();
    return;
  }

  if (isPartyGameActive()) {
    return;
  }

  const nextReady = !isLocalPartyReady();
  await syncLocalPartyMemberState({
    ready: nextReady,
    view: "lobby",
    fire: false,
    x: 0,
    y: 0,
  });
}

function showGameLaunchOverlay({
  kicker = "START RUNDY",
  title = "WCZYTYWANIE GRY",
  copy = "Przygotowywanie robotów",
  stage = "ETAP 1/4",
} = {}) {
  if (gameLaunchKicker) {
    gameLaunchKicker.textContent = kicker;
  }

  if (gameLaunchTitle) {
    gameLaunchTitle.textContent = title;
  }

  if (gameLaunchCopy) {
    gameLaunchCopy.textContent = copy;
  }

  if (gameLaunchStage) {
    gameLaunchStage.textContent = stage;
  }

  if (gameLaunchBackdrop) {
    gameLaunchBackdrop.hidden = false;
    gameLaunchBackdrop.classList.add("active");
  }
}

function hideGameLaunchOverlay() {
  if (!gameLaunchBackdrop) {
    return;
  }

  gameLaunchBackdrop.classList.remove("active");
  gameLaunchBackdrop.hidden = true;
}

function cancelGameLaunchTransition() {
  gameLaunchTransitionToken += 1;
  gameLaunchTransitionBusy = false;
  hideGameLaunchOverlay();
}

async function startGameLaunchTransition() {
  showView("game");
}

async function maybeStartPartyGameSession() {
  if (!isPartyActive() || !isPartyLeader() || isPartyGameActive() || party.syncingHost) {
    return;
  }

  const memberIds = getActivePartyMemberIds();
  if (memberIds.length !== 2 || memberIds.some((profileId) => !party.data?.members?.[profileId]?.ready)) {
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  party.syncingHost = true;

  try {
    await db.ref(`parties/${party.partyId}`).transaction((current) => {
      if (!current) {
        return current;
      }

      const members = current.members || {};
      const currentMemberIds = Object.keys(members).map((profileId) => sanitizeProfileId(profileId)).filter(Boolean);
      if (
        current.game?.active
        || currentMemberIds.length !== 2
        || currentMemberIds.some((profileId) => !members[profileId]?.ready)
      ) {
        return current;
      }

      const now = Date.now();
      const sessionId = `coop-${now.toString(36)}${Math.random().toString(36).slice(2, 7)}`;
      current.status = "game";
      current.updatedAt = now;
      current.game = {
        active: true,
        state: "playing",
        sessionId,
        hostProfileId: state.profileId,
        currentWave: 0,
        pendingWave: 1,
        waveIntroMs: 3000,
        pauseResumeCountdownMs: 0,
        pauseResumeRobotsLeft: 0,
        robotsKilledTotal: 0,
        trophiesEarnedRun: 0,
        resultStatus: "",
        resultNote: "",
        players: currentMemberIds.reduce((accumulator, profileId, index) => {
          const member = members[profileId] || {};
          const characterId = member.characterId || "magik-millo";
          const petId = member.petId || "";
          accumulator[profileId] = {
            profileId,
            nickname: member.nickname || "Gracz",
            characterId,
            petId,
            x: index === 0 ? 0 : 0,
            y: 0,
            hp: getPlayerMaxHpForLoadout(characterId, petId),
            alive: true,
          };
          return accumulator;
        }, {}),
        robots: [],
        projectiles: [],
        updatedAt: now,
      };

      currentMemberIds.forEach((profileId) => {
        members[profileId] = {
          ...(members[profileId] || {}),
          ready: false,
          view: "game",
          connected: true,
          updatedAt: now,
        };
      });

      current.members = members;
      return current;
    });
  } catch (error) {
    // ignore
  } finally {
    party.syncingHost = false;
  }
}

function getProfileFavoriteCharacter() {
  return getOwnedItem("characters", state.favoriteCharacterId) || getOwnedItem("characters", state.equippedCharacter) || CATALOG.characters[0];
}

function getSelectedProfilePhoto() {
  return getOwnedItem("profilePhotos", state.selectedProfilePhotoId) || null;
}

function getProfileVisualItem() {
  return getSelectedProfilePhoto() || getProfileFavoriteCharacter();
}

function getProfileFavoritePet() {
  return getOwnedItem("pets", state.favoritePetId) || getOwnedItem("pets", state.equippedPet) || null;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizePublicNickname(nickname) {
  return sanitizePlayerNickname(nickname).toLowerCase();
}

function withRemoteProfileSyncSuspended(callback) {
  remoteProfileSyncSuspendLevel += 1;

  try {
    return callback();
  } finally {
    remoteProfileSyncSuspendLevel = Math.max(0, remoteProfileSyncSuspendLevel - 1);
  }
}

function applyHydratedState(nextState) {
  withRemoteProfileSyncSuspended(() => {
    Object.keys(state).forEach((key) => {
      delete state[key];
    });
    Object.assign(state, hydrateSavedState(nextState));
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  });

  ui.trophyWorldId = state.activeTrophyWorld || "alley";
  socialProfile.nicknameReserved = normalizePublicNickname(getPlayerNickname());
  socialProfile.publicIdReserved = sanitizePublicPlayerId(state.publicId);
  socialProfile.friendIds = [];
  socialProfile.sentInviteIds = [];
  socialProfile.receivedInvites = [];
  socialProfile.relationshipsOwnerId = "";
  detachSocialRelationshipListeners();
  party.invites = [];
  party.sentInviteIds = [];
  party.partyLaunchHandledId = "";
  party.membershipOwnerId = "";
  detachPartyListeners();
  closeSettingsPanel();
  closeProfilePanel();
  stopGameSession();
  renderAll();
  if (socialProfile.ready) {
    syncSocialRelationshipListeners();
  }
  scheduleRemoteProfileSync(true);
}

function hasFirebaseSocialAccess() {
  return Boolean(
    FIREBASE_SOCIAL_CONFIG &&
    typeof window !== "undefined" &&
    window.firebase &&
    typeof window.firebase.initializeApp === "function" &&
    typeof window.firebase.database === "function"
  );
}

function getFirebaseSocialDatabase() {
  if (!hasFirebaseSocialAccess()) {
    return null;
  }

  if (socialProfile.db) {
    return socialProfile.db;
  }

  try {
    const appName = "pixel-platoya-social";
    socialProfile.app = window.firebase.apps.find((entry) => entry.name === appName)
      || window.firebase.initializeApp(FIREBASE_SOCIAL_CONFIG, appName);
    socialProfile.db = window.firebase.database(socialProfile.app);
    socialProfile.ready = true;
    return socialProfile.db;
  } catch (error) {
    socialProfile.lastError = "Nie udało się połączyć z Firebase.";
    socialProfile.ready = false;
    return null;
  }
}

async function initSocialProfileSync() {
  if (socialProfile.initPromise) {
    return socialProfile.initPromise;
  }

  socialProfile.initStarted = true;
  socialProfile.initPromise = (async () => {
    const db = getFirebaseSocialDatabase();

    if (!db) {
      socialProfile.lastError = navigator.onLine === false
        ? "Profil online nie działa bez internetu."
        : socialProfile.lastError || "Nie udało się połączyć z profilem online.";
      socialProfile.initStarted = false;
      renderSettingsPanel();
      renderProfilePanel();
      renderFriendsView();
      return;
    }

    try {
      if (!socialProfile.listenerBound) {
        const profilesRef = db.ref("profiles").orderByChild("trophies").limitToLast(100);
        profilesRef.on("value", (snapshot) => {
          const raw = snapshot.val() || {};
        socialProfile.leaderboard = Object.entries(raw)
          .map(([profileId, payload]) => ({
            profileId,
            ...(payload || {}),
          }))
            .sort((left, right) => {
              const trophyDelta = Number(right.trophies || 0) - Number(left.trophies || 0);
              if (trophyDelta !== 0) {
                return trophyDelta;
              }

              return Number(right.updatedAt || 0) - Number(left.updatedAt || 0);
            });
          mergeSocialProfilesIntoCache(socialProfile.leaderboard);
          renderProfilePanel();
          renderFriendsView();
        });
        socialProfile.listenerBound = true;
      }

      await ensureRemoteNicknameReservation();
      await ensureRemotePublicIdReservation();
      syncSocialRelationshipListeners();
      syncPartyListeners();
      if (!socialProfile.heartbeatTimer) {
        socialProfile.heartbeatTimer = window.setInterval(() => {
          scheduleRemoteProfileSync(true);
        }, PROFILE_PRESENCE_HEARTBEAT_MS);
      }
      socialProfile.lastError = "";
      scheduleRemoteProfileSync(true);
    } catch (error) {
      socialProfile.lastError = "Profil online jest chwilowo niedostępny.";
      socialProfile.initStarted = false;
    }

    renderSettingsPanel();
    renderProfilePanel();
    renderFriendsView();
  })();

  try {
    await socialProfile.initPromise;
  } finally {
    socialProfile.initPromise = null;
  }
}

async function ensureSocialProfileReady() {
  if (socialProfile.ready) {
    return true;
  }

  await initSocialProfileSync();
  return socialProfile.ready;
}

function scheduleRemoteProfileSync(immediate = false) {
  if (remoteProfileSyncSuspendLevel > 0) {
    return;
  }

  if (socialProfile.syncTimer) {
    window.clearTimeout(socialProfile.syncTimer);
    socialProfile.syncTimer = 0;
  }

  if (!socialProfile.ready || !state.profileId) {
    return;
  }

  const delay = immediate ? 10 : PROFILE_SYNC_DEBOUNCE_MS;
  socialProfile.syncTimer = window.setTimeout(() => {
    socialProfile.syncTimer = 0;
    syncRemoteProfileNow();
  }, delay);
}

async function syncRemoteProfileNow() {
  if (remoteProfileSyncSuspendLevel > 0 || socialProfile.syncBusy) {
    socialProfile.syncPending = true;
    return;
  }

  const db = getFirebaseSocialDatabase();
  if (!db) {
    return;
  }

  socialProfile.syncBusy = true;

  try {
    await ensureRemoteNicknameReservation();
    await ensureRemotePublicIdReservation();
    await db.ref(`profiles/${state.profileId}`).set(buildPublicProfilePayload());

    if (state.accountPasswordSet && state.accountSaveSecret) {
      await syncRemoteSaveBlob();
    }

    socialProfile.lastError = "";
    socialProfile.lastSyncedAt = Date.now();
  } catch (error) {
    socialProfile.lastError = "Nie udało się zsynchronizować profilu.";
  } finally {
    socialProfile.syncBusy = false;
    renderSettingsPanel();
    renderProfilePanel();

    if (socialProfile.syncPending) {
      socialProfile.syncPending = false;
      scheduleRemoteProfileSync(true);
    }
  }
}

function buildPublicProfilePayload() {
  const favoriteCharacter = getProfileFavoriteCharacter();
  const favoritePet = getProfileFavoritePet();
  const worldId = getHighestUnlockedTrophyWorldId();
  const activityState = getCurrentProfileActivityState();
  const now = Date.now();

  return {
    profileId: state.profileId,
    publicId: state.publicId,
    nickname: getPlayerNickname(),
    nicknameNormalized: normalizePublicNickname(getPlayerNickname()),
    trophies: Number(state.trophies || 0),
    worldId,
    completedGamesTotal: Number(state.completedGamesTotal || 0),
    robotsDefeatedTotal: Number(state.robotsDefeatedTotal || 0),
    ownedCharactersCount: state.ownedCharacters.length,
    ownedPetsCount: state.ownedPets.length,
    profilePhotoId: sanitizeStoredId(state.selectedProfilePhotoId),
    favoriteCharacterId: favoriteCharacter?.id || "",
    favoritePetId: favoritePet?.id || "",
    equippedCharacterId: sanitizeStoredId(state.equippedCharacter),
    equippedPetId: sanitizeStoredId(state.equippedPet),
    activityState,
    lastActiveAt: now,
    updatedAt: now,
    createdAt: Number(state.profileCreatedAt || Date.now()),
  };
}

async function ensureRemoteNicknameReservation() {
  const db = getFirebaseSocialDatabase();

  if (!db) {
    return false;
  }

  let candidate = getPlayerNickname();

  for (let attempt = 0; attempt < 24; attempt += 1) {
    const reserved = await tryClaimRemoteNickname(candidate);
    if (reserved) {
      if (candidate !== state.playerNickname) {
        withRemoteProfileSyncSuspended(() => {
          state.playerNickname = candidate;
          state.nicknamePromptSeen = true;
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        });
        renderAll();
      }
      return true;
    }

    candidate = generateDefaultNickname();
  }

  throw new Error("Nie udało się zarezerwować nicku.");
}

async function ensureRemotePublicIdReservation() {
  const db = getFirebaseSocialDatabase();

  if (!db) {
    return false;
  }

  let candidate = sanitizePublicPlayerId(state.publicId) || generatePublicPlayerId();

  for (let attempt = 0; attempt < 24; attempt += 1) {
    const reserved = await tryClaimRemotePublicId(candidate);
    if (reserved) {
      if (candidate !== state.publicId) {
        withRemoteProfileSyncSuspended(() => {
          state.publicId = candidate;
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        });
      }
      return true;
    }

    candidate = generatePublicPlayerId();
  }

  throw new Error("Nie udało się zarezerwować ID.");
}

async function tryClaimRemotePublicId(publicId) {
  const db = getFirebaseSocialDatabase();
  const normalized = sanitizePublicPlayerId(publicId);

  if (!db || !normalized) {
    return false;
  }

  const ref = db.ref(`publicIds/${normalized}`);
  const result = await ref.transaction((currentValue) => {
    if (!currentValue || currentValue.profileId === state.profileId) {
      return {
        profileId: state.profileId,
        updatedAt: Date.now(),
      };
    }

    return;
  });

  if (!result.committed) {
    return false;
  }

  const previousReservation = socialProfile.publicIdReserved;
  socialProfile.publicIdReserved = normalized;

  if (previousReservation && previousReservation !== normalized) {
    const previousRef = db.ref(`publicIds/${previousReservation}`);
    const previousSnapshot = await previousRef.once("value").catch(() => null);
    if (previousSnapshot?.val()?.profileId === state.profileId) {
      await previousRef.remove().catch(() => {});
    }
  }

  return true;
}

async function tryClaimRemoteNickname(nickname) {
  const db = getFirebaseSocialDatabase();

  if (!db) {
    return false;
  }

  const normalized = normalizePublicNickname(nickname);
  if (!normalized) {
    return false;
  }

  const ref = db.ref(`nicknames/${normalized}`);
  const result = await ref.transaction((currentValue) => {
    if (!currentValue || currentValue.profileId === state.profileId) {
      return {
        profileId: state.profileId,
        nickname,
        updatedAt: Date.now(),
      };
    }

    return;
  });

  if (!result.committed) {
    return false;
  }

  const previousReservation = socialProfile.nicknameReserved;
  socialProfile.nicknameReserved = normalized;

  if (previousReservation && previousReservation !== normalized) {
    const previousRef = db.ref(`nicknames/${previousReservation}`);
    const previousSnapshot = await previousRef.once("value").catch(() => null);
    if (previousSnapshot?.val()?.profileId === state.profileId) {
      await previousRef.remove().catch(() => {});
    }
  }

  return true;
}

async function syncRemoteSaveBlob() {
  const db = getFirebaseSocialDatabase();

  if (!db || !state.accountSaveSecret) {
    return;
  }

  const payload = JSON.stringify(state);
  const encrypted = await encryptTextWithSecret(payload, state.accountSaveSecret);
  await db.ref(`saveBlobs/${state.profileId}`).set({
    ciphertext: encrypted.ciphertext,
    iv: encrypted.iv,
    updatedAt: Date.now(),
    version: 1,
  });
}

async function saveProfileDetails() {
  const dynamicNameInput = document.getElementById("profile-name-input-dynamic");

  if (!dynamicNameInput) {
    return;
  }

  const nextNickname = sanitizePlayerNickname(dynamicNameInput.value);
  const currentNickname = getPlayerNickname();
  const renamePrice = getNicknameChangePrice();
  const saveButton = profileEditPanel?.querySelector("[data-profile-name-save]") || profileSaveNameButton;

  if (!nextNickname) {
    openModal({
      title: "Brak nazwy",
      message: "Wpisz nazwę gracza.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (nextNickname === currentNickname) {
    closeProfileEditSection();
    return;
  }

  if (renamePrice > state.coins) {
    openModal({
      title: "Brakuje monet",
      message: `Brakuje Ci ${renamePrice - state.coins} monet do zmiany nazwy.`,
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (saveButton) {
    saveButton.disabled = true;
  }

  try {
    if (socialProfile.ready) {
      const reserved = await tryClaimRemoteNickname(nextNickname);
      if (!reserved) {
        openModal({
          title: "Nick jest zajęty",
          message: "Wybierz inny nick.",
          buttonText: "OK",
          onConfirm: closeModal,
        });
        return;
      }
    }

    if (renamePrice > 0) {
      state.coins = Math.max(0, state.coins - renamePrice);
    }

    state.playerNickname = nextNickname;
    state.nicknamePromptSeen = true;
    state.nicknameChangeCount = Math.max(0, Number(state.nicknameChangeCount || 0)) + 1;
    saveState();
    closeProfileEditSection();
    renderAll();
    scheduleRemoteProfileSync(true);
  } finally {
    if (saveButton) {
      saveButton.disabled = false;
    }
  }
}

async function setCurrentAccountPassword() {
  if (!(await ensureSocialProfileReady())) {
    openModal({
      title: "Brak chmury",
      message: "Połącz grę z Firebase, żeby ustawić hasło do konta.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  if (state.accountPasswordSet) {
    return;
  }

  const password = String(settingsNewPassword?.value || "").trim();
  if (password.length < 4) {
    openModal({
      title: "Hasło jest za krótkie",
      message: "Hasło musi mieć co najmniej 4 znaki.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  settingsSetPasswordButton.disabled = true;

  try {
    await ensureRemoteNicknameReservation();
    const db = getFirebaseSocialDatabase();
    if (!db) {
      throw new Error("no-db");
    }

    const salt = generateRandomBase64(16);
    const passwordHash = await createPasswordHash(password, salt);
    const saveSecret = generateRandomBase64(32);
    const wrappedSecret = await encryptTextWithPassword(saveSecret, password, salt);

    await db.ref(`accounts/${state.profileId}`).set({
      profileId: state.profileId,
      nicknameNormalized: normalizePublicNickname(getPlayerNickname()),
      passwordHash,
      salt,
      saveSecretCiphertext: wrappedSecret.ciphertext,
      saveSecretIv: wrappedSecret.iv,
      updatedAt: Date.now(),
      createdAt: Number(state.profileCreatedAt || Date.now()),
    });

    state.accountPasswordSet = true;
    state.accountPasswordHash = passwordHash;
    state.accountPasswordSalt = salt;
    state.accountSaveSecret = saveSecret;
    saveState();
    await syncRemoteProfileNow();
    if (settingsNewPassword) {
      settingsNewPassword.value = "";
    }
    renderAll();
    openModal({
      title: "Hasło ustawione",
      message: "To konto można już logować nickiem i hasłem na innym urządzeniu.",
      buttonText: "SUPER",
      onConfirm: closeModal,
    });
  } catch (error) {
    openModal({
      title: "Nie udało się",
      message: "Nie udało się ustawić hasła do konta.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
  } finally {
    settingsSetPasswordButton.disabled = false;
    renderSettingsPanel();
  }
}

async function loginToExistingAccount() {
  if (!(await ensureSocialProfileReady())) {
    openModal({
      title: "Brak chmury",
      message: "Połącz grę z Firebase, żeby zalogować się na istniejące konto.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  const nickname = sanitizePlayerNickname(settingsLoginNickname?.value);
  const password = String(settingsLoginPassword?.value || "").trim();

  if (!nickname || !password) {
    openModal({
      title: "Brakuje danych",
      message: "Wpisz nick i hasło istniejącego konta.",
      buttonText: "OK",
      onConfirm: closeModal,
    });
    return;
  }

  settingsLoginButton.disabled = true;

  try {
    const db = getFirebaseSocialDatabase();
    if (!db) {
      throw new Error("no-db");
    }

    const nicknameSnapshot = await db.ref(`nicknames/${normalizePublicNickname(nickname)}`).once("value");
    const nicknameData = nicknameSnapshot.val();

    if (!nicknameData?.profileId) {
      throw new Error("missing-account");
    }

    const profileId = sanitizeProfileId(nicknameData.profileId);
    const accountSnapshot = await db.ref(`accounts/${profileId}`).once("value");
    const accountData = accountSnapshot.val();

    if (!accountData?.passwordHash || !accountData?.salt || !accountData?.saveSecretCiphertext || !accountData?.saveSecretIv) {
      throw new Error("missing-password");
    }

    const passwordHash = await createPasswordHash(password, accountData.salt);
    if (passwordHash !== accountData.passwordHash) {
      throw new Error("wrong-password");
    }

    const saveSecret = await decryptTextWithPassword(
      accountData.saveSecretCiphertext,
      accountData.saveSecretIv,
      password,
      accountData.salt
    );
    const saveSnapshot = await db.ref(`saveBlobs/${profileId}`).once("value");
    const saveData = saveSnapshot.val();

    if (!saveData?.ciphertext || !saveData?.iv) {
      throw new Error("missing-save");
    }

    const decryptedSave = await decryptTextWithSecret(saveData.ciphertext, saveData.iv, saveSecret);
    const parsedSave = JSON.parse(decryptedSave);
    const hydrated = hydrateSavedState(parsedSave);
    hydrated.profileId = profileId;
    hydrated.accountPasswordSet = true;
    hydrated.accountPasswordHash = accountData.passwordHash;
    hydrated.accountPasswordSalt = accountData.salt;
    hydrated.accountSaveSecret = saveSecret;
    hydrated.nicknamePromptSeen = true;

    if (settingsLoginNickname) {
      settingsLoginNickname.value = "";
    }
    if (settingsLoginPassword) {
      settingsLoginPassword.value = "";
    }

    applyHydratedState(hydrated);
    openModal({
      title: "Zalogowano",
      message: `Wczytano konto ${hydrateSavedState(parsedSave).playerNickname}.`,
      buttonText: "SUPER",
      onConfirm: closeModal,
    });
  } catch (error) {
    let message = "Nie udało się zalogować na to konto.";

    if (error?.message === "missing-account") {
      message = "Nie ma jeszcze konta o takim nicku.";
    } else if (error?.message === "missing-password") {
      message = "To konto nie ma jeszcze ustawionego hasła. Uzupełnij je najpierw w ustawieniach na tamtym urządzeniu.";
    } else if (error?.message === "wrong-password") {
      message = "Hasło jest nieprawidłowe.";
    } else if (error?.message === "missing-save") {
      message = "To konto nie ma jeszcze zapisu w chmurze.";
    }

    openModal({
      title: "Logowanie nieudane",
      message,
      buttonText: "OK",
      onConfirm: closeModal,
    });
  } finally {
    settingsLoginButton.disabled = false;
  }
}

async function createPasswordHash(password, salt) {
  return sha256Hex(`${password}::${salt}`);
}

async function sha256Hex(value) {
  const data = new TextEncoder().encode(String(value || ""));
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function generateRandomBase64(length = 16) {
  const bytes = new Uint8Array(length);

  if (window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }

  return uint8ArrayToBase64(bytes);
}

function uint8ArrayToBase64(bytes) {
  let binary = "";
  bytes.forEach((value) => {
    binary += String.fromCharCode(value);
  });
  return window.btoa(binary);
}

function base64ToUint8Array(base64Value) {
  const binary = window.atob(base64Value);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

async function derivePasswordAesKey(password, saltBase64) {
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: base64ToUint8Array(saltBase64),
      iterations: 120000,
      hash: "SHA-256",
    },
    keyMaterial,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"]
  );
}

async function encryptTextWithPassword(plainText, password, saltBase64) {
  const iv = base64ToUint8Array(generateRandomBase64(12));
  const key = await derivePasswordAesKey(password, saltBase64);
  const cipherBuffer = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
    },
    key,
    new TextEncoder().encode(String(plainText || ""))
  );

  return {
    ciphertext: uint8ArrayToBase64(new Uint8Array(cipherBuffer)),
    iv: uint8ArrayToBase64(iv),
  };
}

async function decryptTextWithPassword(ciphertext, ivBase64, password, saltBase64) {
  const key = await derivePasswordAesKey(password, saltBase64);
  const plainBuffer = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: base64ToUint8Array(ivBase64),
    },
    key,
    base64ToUint8Array(ciphertext)
  );

  return new TextDecoder().decode(plainBuffer);
}

async function importSecretAesKey(secretBase64) {
  return window.crypto.subtle.importKey(
    "raw",
    base64ToUint8Array(secretBase64),
    {
      name: "AES-GCM",
    },
    false,
    ["encrypt", "decrypt"]
  );
}

async function encryptTextWithSecret(plainText, secretBase64) {
  const iv = base64ToUint8Array(generateRandomBase64(12));
  const key = await importSecretAesKey(secretBase64);
  const cipherBuffer = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
    },
    key,
    new TextEncoder().encode(String(plainText || ""))
  );

  return {
    ciphertext: uint8ArrayToBase64(new Uint8Array(cipherBuffer)),
    iv: uint8ArrayToBase64(iv),
  };
}

async function decryptTextWithSecret(ciphertext, ivBase64, secretBase64) {
  const key = await importSecretAesKey(secretBase64);
  const plainBuffer = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: base64ToUint8Array(ivBase64),
    },
    key,
    base64ToUint8Array(ciphertext)
  );

  return new TextDecoder().decode(plainBuffer);
}

function renderStore() {
  ensureStoreOffersCurrent();
  storeGrid.className = "store-main";
  if (viewNodes.store) {
    viewNodes.store.dataset.storeMode = ui.storeMode;
  }
  if (ui.storeMode === MAGICIANS_PET_STORE_MODE) {
    storeGrid.innerHTML = buildMagiciansPetKeyBooth();
    syncBrokenAssets(storeGrid);
    syncAnimatedAssets(storeGrid);

    if (ui.currentView === "store") {
      queueStoreViewportSync();
    }
    return;
  }

  if (ui.storeMode === WINTER_PET_STORE_MODE) {
    storeGrid.innerHTML = [
      buildWinterPetKeyBooth(),
      buildWinterMagiciansPetReturnBooth(),
    ].filter(Boolean).join("");
    syncBrokenAssets(storeGrid);
    syncAnimatedAssets(storeGrid);

    if (ui.currentView === "store") {
      queueStoreViewportSync();
    }
    return;
  }

  const woodenCrate = CATALOG.crates.find((entry) => entry.id === "drewniana-skrzynia") || CATALOG.crates[0];
  const jungleCrate = CATALOG.crates.find((entry) => entry.id === "dzunglowa-skrzynia") || null;
  const winterBundle = CATALOG.bundles[0];
  const dailyCharacters = getCurrentStoreOfferItems("characters");

  const booths = [
    buildDailyCharacterBooth(dailyCharacters),
    buildCrateShopBooth(woodenCrate),
    buildCoinBooth(),
    buildDiamondBooth(),
    buildTrophyBooth(),
    buildJungleCrateShopBooth(jungleCrate),
    buildWinterBundleBooth(winterBundle),
    buildStoreCatalogBooth(),
  ].filter(Boolean);

  storeGrid.innerHTML = booths.join("");
  syncBrokenAssets(storeGrid);
  syncAnimatedAssets(storeGrid);

  if (ui.currentView === "store") {
    queueStoreViewportSync();
  }
}

function queueStoreViewportSync() {
  window.requestAnimationFrame(() => {
    if (ui.currentView !== "store") {
      return;
    }

    const storePanel = viewNodes.store?.querySelector(".section-panel");

    if (storePanel) {
      storePanel.scrollTop = 0;
    }

    if (!storeGridWrap) {
      return;
    }

    storeGridWrap.scrollLeft = 0;
    ui.storeScrollLeft = 0;
  });
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

  refreshNote.textContent = `ZA ${formatStoreRefreshCountdown(getStoreRefreshRemainingMs())}`;
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

function getStoreWorldThemeIdForTrophyWorldId(worldId = getActiveTrophyWorldId()) {
  return worldId === "alley" ? "magicians" : worldId;
}

function getCurrencyBalance(currency = "coins") {
  if (currency === "diamonds") {
    return Number(state.diamonds || 0);
  }

  if (currency === "plato-keys") {
    return Math.max(0, Number(state.platoKeys || 0));
  }

  return Number(state.coins || 0);
}

function getCurrencyDisplayName(currency = "coins", amount = 0) {
  if (currency === "diamonds") {
    return Math.abs(Number(amount || 0)) === 1 ? "diamentu" : "diamentow";
  }

  if (currency === "plato-keys") {
    return formatPolishCountdownUnit(amount, "klucza PlatoYI", "kluczy PlatoYI", "kluczy PlatoYI");
  }

  return Math.abs(Number(amount || 0)) === 1 ? "monety" : "monet";
}

function getPlatoKeyThemeForWorld(worldId = "alley") {
  return worldId === "alley" ? "magicians" : "winter";
}

function getStorePlatoKeyTheme() {
  return ui.storeMode === WINTER_PET_STORE_MODE ? "winter" : "magicians";
}

function getPlatoKeyImageForTheme(keyTheme = "magicians") {
  return keyTheme === "winter" ? WINTER_PLATOYA_KEY_IMAGE : MAGICIANS_PLATOYA_KEY_IMAGE;
}

function getRewardSceneWorldThemeFromCharacter(item) {
  const worldTheme = getStoreCharacterWorldTheme(item).id;
  return worldTheme === "magicians" ? "alley" : worldTheme;
}

function getRewardSceneWorldThemeFromPet(item) {
  if (!item) {
    return "";
  }

  if (item.unlockWorld === "winter") {
    return "winter";
  }

  if (item.unlockWorld === "tower") {
    return "tower";
  }

  if (item.unlockWorld === "alley" || item.categoryId === "magicy") {
    return "alley";
  }

  return "";
}

function getRewardSceneWorldTheme(kind, item) {
  if (!item) {
    return "";
  }

  if (kind === "characters") {
    return getRewardSceneWorldThemeFromCharacter(item);
  }

  if (kind === "pets") {
    return getRewardSceneWorldThemeFromPet(item);
  }

  return "";
}

function getCurrencyIconSrc(currency = "coins", options = {}) {
  if (currency === "diamonds") {
    return TROPHY_DIAMOND_IMAGE;
  }

  if (currency === "plato-keys") {
    return getPlatoKeyImageForTheme(options.keyTheme || getStorePlatoKeyTheme());
  }

  return "./assets/currencies/monety_1.png";
}

function getCurrencyIconAlt(currency = "coins") {
  if (currency === "diamonds") {
    return "Diamenty";
  }

  if (currency === "plato-keys") {
    return "Klucze PlatoYI";
  }

  return "Monety";
}

function buildCurrencyAmountMarkup(amount, currency = "coins", options = {}) {
  const keyThemeAttribute = currency === "plato-keys"
    ? ` data-key-theme="${options.keyTheme || getStorePlatoKeyTheme()}"`
    : "";

  return `
    <span class="price-inline" data-currency="${currency}"${keyThemeAttribute}>
      <span class="price-amount">${amount} x</span>
      <img class="price-icon" src="${getCurrencyIconSrc(currency, options)}" alt="${getCurrencyIconAlt(currency)}" />
    </span>
  `;
}

function buildCurrencyPriceChipMarkup(amount, currency = "coins", options = {}) {
  return `
    <div class="item-price price-chip" data-currency="${currency}">
      ${buildCurrencyAmountMarkup(amount, currency, options)}
    </div>
  `;
}

function getMagiciansPetShopItems() {
  return CATALOG.pets.filter((item) => item.categoryId === "magicy");
}

function getWinterPetShopItems() {
  return CATALOG.pets.filter((item) => item.unlockWorld === "winter" && ["niedzwiedz-polarny", "sniezynka", "sowa"].includes(item.id));
}

function getMagiciansPetKeyPrice(item, storefrontWorldId = "alley") {
  const basePrice = item?.id === "pies-magik" ? 1 : 3;
  return storefrontWorldId === "winter" ? basePrice * 2 : basePrice;
}

function getWinterPetKeyPrice(item) {
  return item?.id === "niedzwiedz-polarny" ? 1 : 3;
}

function formatPlatoKeyCountText(amount) {
  const normalizedAmount = Math.max(0, Number(amount || 0));
  return `${normalizedAmount} ${formatPolishCountdownUnit(normalizedAmount, "klucz", "klucze", "kluczy")} PlatoYI`;
}

function formatPlatoKeyCountLabel(amount) {
  return formatPlatoKeyCountText(amount).toUpperCase();
}

function changeCurrencyBalance(currency = "coins", amount = 0) {
  const normalizedAmount = Number(amount || 0);

  if (currency === "diamonds") {
    state.diamonds = Math.max(0, Number(state.diamonds || 0) + normalizedAmount);
    return;
  }

  if (currency === "plato-keys") {
    state.platoKeys = Math.max(0, Number(state.platoKeys || 0) + normalizedAmount);
    return;
  }

  state.coins = Math.max(0, Number(state.coins || 0) + normalizedAmount);
}

function buildStoreInsufficientBalanceMessage(currency = "coins") {
  if (currency === "diamonds") {
    return "Na razie nie masz tylu diamentow, aby kupic ten przedmiot.";
  }

  if (currency === "plato-keys") {
    return "Na razie nie masz tylu kluczy PlatoYI, aby kupic tego PlatoYasa.";
  }

  return "Na razie nie masz tyle monet, aby kupic ten przedmiot.";
}

function buildPreviewAssetMarkup(item, options = {}) {
  const fallbackText = options.fallbackText || item?.name || "NAGRODA";
  const alt = options.alt || item?.name || fallbackText;
  const imageClass = options.imageClass || "item-image asset-image";
  const videoClass = options.videoClass || imageClass.replace("asset-image", "asset-video");
  const imageSrc = options.imageSrc || item?.image || "";
  const previewVideo = options.usePreviewVideo === false ? "" : item?.previewVideo || "";
  const usePoster = options.usePoster !== false && item?.previewPoster !== false;
  const elementId = options.elementId ? ` id="${options.elementId}"` : "";

  if (previewVideo) {
    return `
      <video
        ${elementId}
        class="${videoClass}"
        src="${previewVideo}"
        ${usePoster && imageSrc ? `poster="${imageSrc}"` : ""}
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
  return worldTheme === getActiveStoreWorldId();
}

function buildStoreOfferCard(kind, item, options = {}) {
  const price = Number(options.price ?? item.price ?? 0);
  const currency = options.currency || "coins";
  const balance = getCurrencyBalance(currency);
  const alreadyOwned = isSinglePurchaseStoreItem(kind) && isOwned(kind, item.id);
  const buttonLabel = options.buttonLabel || buildCurrencyAmountMarkup(price, currency);
  const pricingMarkup = options.pricingMarkup || "";
  const disabled =
    Boolean(options.disabled) ||
    alreadyOwned ||
    (!options.allowInsufficientPreview && balance < price);
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
      ${pricingMarkup}
      ${badge}
      ${oldPrice}
      ${note ? `<p class="item-note">${note}</p>` : ""}
      <div class="card-actions">
        <button
          class="pixel-button small-button"
          data-store-buy="${item.id}"
          data-store-kind="${kind}"
          data-store-currency="${currency}"
          data-store-price="${price}"
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

  if (worldId === "tower") {
    return { id: "tower", label: "SWIAT DŻUNGLI" };
  }

  if (worldId === "winter") {
    return { id: "winter", label: "SWIAT ZIMOWY" };
  }

  return { id: "magicians", label: "SWIAT MAGIKOW" };
}

function buildWinterBundleBooth(bundle) {
  if (!bundle || !hasCompletedMagiciansWorld() || isBundleOwned(bundle) || getActiveStoreWorldId() !== "winter") {
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
  if (items.length === 0 && getActiveStoreWorldId() === "tower") {
    return "";
  }

  const refreshTheme = getActiveStoreWorldId();
  const refreshIn = formatStoreRefreshCountdown(getStoreRefreshRemainingMs());
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
        <div class="store-refresh-frame" data-store-world="${refreshTheme}">
          <p class="store-refresh-kicker">ODŚWIEŻENIE OFERT</p>
          <p class="item-note store-refresh-note">ZA ${refreshIn}</p>
        </div>
      </div>
      <div class="store-booth-grid">
        ${cards}
      </div>
    </section>
  `;
}

function buildMagiciansPetKeyBooth() {
  const items = getMagiciansPetShopItems();

  if (items.length === 0) {
    return "";
  }

  return `
    <section class="store-booth store-magicians-key-booth">
      <div class="store-booth-copy">
        <p class="item-title">Sklep PlatoYI Magikow</p>
        <p class="item-note">Masz teraz ${formatPlatoKeyCountText(state.platoKeys)}. Tutaj kupujesz tylko PlatoYe ze Świata Magikow.</p>
      </div>
      <div class="store-booth-grid">
        ${items
          .map((item) => {
            const price = getMagiciansPetKeyPrice(item, "alley");
            const alreadyOwned = state.ownedPets.includes(item.id);
            const oldPrice = price * 2;

            return buildStoreOfferCard("pets", item, {
              price,
              currency: "plato-keys",
              pricingMarkup: alreadyOwned
                ? `<div class="store-key-price-stack"><p class="store-key-price-owned">POSIADASZ</p></div>`
                : `
                  <div class="store-key-price-stack discount">
                    <p class="store-key-price-old">${buildCurrencyAmountMarkup(oldPrice, "plato-keys", { keyTheme: "magicians" })}</p>
                    <p class="store-key-price-now">${buildCurrencyAmountMarkup(price, "plato-keys", { keyTheme: "magicians" })}</p>
                  </div>
                `,
              note: "",
              disabled: alreadyOwned,
              buttonLabel: alreadyOwned ? "POSIADASZ" : "ODBIERZ",
              extraAction: `<button class="pixel-button small-button" data-pet-description="${item.id}" type="button">MOC</button>`,
            });
          })
          .join("")}
      </div>
    </section>
  `;
}

function buildWinterPetKeyBalanceBanner() {
  return `
    <section class="store-key-balance-banner" data-key-theme="winter" aria-label="Saldo kluczy PlatoYI">
      <img class="store-key-balance-icon" src="${WINTER_PLATOYA_KEY_IMAGE}" alt="Klucz PlatoYI" />
      <p class="store-key-balance-value">${state.platoKeys}</p>
    </section>
  `;
}

function buildWinterPetStoreExitButton() {
  return `
    <div class="store-mini-exit">
      <button class="pixel-button small-button" data-store-exit-view="trophies" type="button">WROC</button>
    </div>
  `;
}

function buildWinterPetKeyBooth() {
  const items = getWinterPetShopItems();

  if (items.length === 0) {
    return "";
  }

  return `
    ${buildWinterPetKeyBalanceBanner()}
    ${buildWinterPetStoreExitButton()}
    <section class="store-booth store-magicians-key-booth store-winter-pet-booth">
      <div class="store-booth-copy">
        <p class="item-title">Zimowe PlatoYe</p>
      </div>
      <div class="store-booth-grid">
        ${items
          .map((item) => {
            const price = getWinterPetKeyPrice(item);
            const alreadyOwned = state.ownedPets.includes(item.id);
            const oldPrice = price * 2;

            return buildStoreOfferCard("pets", item, {
              price,
              currency: "plato-keys",
              pricingMarkup: alreadyOwned
                ? `<div class="store-key-price-stack"><p class="store-key-price-owned">POSIADASZ</p></div>`
                : `
                  <div class="store-key-price-stack discount">
                    <p class="store-key-price-old">${buildCurrencyAmountMarkup(oldPrice, "plato-keys", { keyTheme: "winter" })}</p>
                    <p class="store-key-price-now">${buildCurrencyAmountMarkup(price, "plato-keys", { keyTheme: "winter" })}</p>
                  </div>
                `,
              note: "",
              disabled: alreadyOwned,
              buttonLabel: alreadyOwned ? "POSIADASZ" : "ODBIERZ",
              extraAction: `<button class="pixel-button small-button" data-pet-description="${item.id}" type="button">MOC</button>`,
            });
          })
          .join("")}
      </div>
    </section>
  `;
}

function buildWinterMagiciansPetReturnBooth() {
  const items = getMagiciansPetShopItems();

  if (items.length === 0) {
    return "";
  }

  return `
    <section class="store-booth store-magicians-key-booth store-winter-pet-booth">
      <div class="store-booth-copy">
        <p class="item-title">Magiczne PlatoYe w zimie</p>
        <p class="item-note">Te PlatoYe wracaja w Świecie Zimowym, ale kosztuja juz podwojona liczbe kluczy.</p>
      </div>
      <div class="store-booth-grid">
        ${items
          .map((item) => {
            const price = getMagiciansPetKeyPrice(item, "winter");
            const alreadyOwned = state.ownedPets.includes(item.id);

            return buildStoreOfferCard("pets", item, {
              price,
              currency: "plato-keys",
              pricingMarkup: alreadyOwned
                ? `<div class="store-key-price-stack"><p class="store-key-price-owned">POSIADASZ</p></div>`
                : `<div class="store-key-price-stack"><p class="store-key-price-now">${buildCurrencyAmountMarkup(price, "plato-keys", { keyTheme: "winter" })}</p></div>`,
              note: "",
              disabled: alreadyOwned,
              buttonLabel: alreadyOwned ? "POSIADASZ" : "ODBIERZ",
              extraAction: `<button class="pixel-button small-button" data-pet-description="${item.id}" type="button">MOC</button>`,
            });
          })
          .join("")}
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
              <span class="item-badge">KATALOG</span>
            </article>
          `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function buildCrateShopBooth(crate) {
  if (!crate) {
    return "";
  }

  const packs = [
    { id: "crate-pack-1", amount: 1, price: 20 },
    { id: "crate-pack-2", amount: 2, price: 35 },
  ];

  return `
    <section class="store-booth">
      <div class="store-booth-copy">
        <div class="store-booth-head">
          <p class="item-title">Skrzynie</p>
          <button class="circle-icon-button" data-chest-odds="${crate.id}" aria-label="Szanse skrzyni">?</button>
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

function buildJungleCrateShopBooth(crate) {
  if (!crate || getActiveStoreWorldId() !== "tower") {
    return "";
  }

  const packs = [
    { id: "jungle-crate-pack-1", amount: 1, price: 50 },
    { id: "jungle-crate-pack-2", amount: 2, price: 95 },
  ];

  return `
    <section class="store-booth">
      <div class="store-booth-copy">
        <div class="store-booth-head">
          <p class="item-title">Skrzynie Dżungli</p>
          <button class="circle-icon-button" data-chest-odds="${crate.id}" aria-label="Szanse skrzyni">?</button>
        </div>
        <p class="item-note">Ta skrzynia daje tylko diamenty i może też wyrzucić dżunglowego PlatoYasa.</p>
      </div>
      <div class="store-booth-grid">
        ${packs.map((pack) => `
          <article class="item-card store-compact-card store-world-card" data-store-world="tower">
            <p class="store-world-ribbon" data-store-world="tower">SWIAT DŻUNGLI</p>
            <div class="item-art">
              <img
                class="item-image asset-image"
                src="${crate.image}"
                alt="${crate.name}"
                data-fallback-text="${crate.fallbackText}"
              />
              <div class="asset-fallback">${crate.fallbackText}</div>
            </div>
            <p class="item-title">${pack.amount} x ${crate.name}</p>
            <div class="card-actions">
              <button class="pixel-button small-button" data-buy-crate-pack="${pack.id}" ${state.diamonds >= pack.price ? "" : "disabled"}>
                ${buildCurrencyAmountMarkup(pack.price, "diamonds")}
              </button>
            </div>
          </article>
        `).join("")}
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

function buildDiamondBooth() {
  if (!Array.isArray(CATALOG.diamonds) || CATALOG.diamonds.length === 0) {
    return "";
  }

  return `
    <section class="store-booth">
      <div class="store-booth-copy">
        <p class="item-title">Kupno Klejnotow</p>
        <p class="item-note">Pakiety klejnotow do Alei Super i skrzyn.</p>
      </div>
      <div class="store-booth-grid">
        ${CATALOG.diamonds
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
                  <button class="pixel-button small-button" data-store-buy="${item.id}" data-store-kind="diamonds">
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
  if (!Array.isArray(CATALOG.trophies) || CATALOG.trophies.length === 0) {
    return "";
  }

  return `
    <section class="store-booth">
      <div class="store-booth-copy">
        <p class="item-title">Kupno Pucharow</p>
        <p class="item-note">Specjalna oferta. Przy zakupie trzeba wpisac kod.</p>
      </div>
      <div class="store-booth-grid">
        ${CATALOG.trophies
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
                <p class="item-note">${item.description || ""}</p>
                <div class="card-actions">
                  <button class="pixel-button small-button" data-store-buy="${item.id}" data-store-kind="trophies" ${state.coins >= item.price ? "" : "disabled"}>
                    ${buildCurrencyAmountMarkup(item.price, "coins")}
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
    !isOwned(kind, item.id) &&
    (kind !== "characters" || isStoreCharacterVisibleInShop(item))
  ));
}

function getActiveStoreWorldId() {
  if (isTowerWorldUnlocked()) {
    return "tower";
  }

  if (isWinterWorldUnlocked()) {
    return "winter";
  }

  return "magicians";
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

function formatPolishCountdownUnit(value, singular, paucal, plural) {
  const absolute = Math.abs(Number(value || 0));
  const lastTwoDigits = absolute % 100;
  const lastDigit = absolute % 10;

  if (absolute === 1) {
    return singular;
  }

  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) {
    return paucal;
  }

  return plural;
}

function formatStoreRefreshCountdown(ms) {
  const totalMinutes = Math.max(0, Math.ceil(ms / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours} ${formatPolishCountdownUnit(hours, "GODZINĘ", "GODZINY", "GODZIN")}, ${minutes} ${formatPolishCountdownUnit(minutes, "MINUTĘ", "MINUTY", "MINUT")}`;
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
  if (worldId === "tower" && !isTowerWorldUnlocked()) {
    return {
      theme: "tower",
      visibility: "always",
      align: "start",
      image: "./assets/alley/jungle.jpeg",
      fallbackText: "DZUNGLA",
      message: "NAJPIERW ZAKOŃCZ ŚWIAT ZIMOWY",
    };
  }

  if (worldId === "winter" && !isWinterWorldUnlocked()) {
    return {
      theme: "winter",
      visibility: "always",
      align: "start",
      image: "./assets/backgrounds/ładowanie_2.png",
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
      image: "./assets/backgrounds/ładowanie_1.png",
      fallbackText: "MAGIA",
      message: "UKOŃCZYŁEŚ JUŻ ŚWIAT MAGIKÓW",
      actionWorldId: claimableRewards.length > 0 ? "alley" : "",
      actionLabel: claimableRewards.length > 0 ? "Odbierz nagrody ze Świata Magików" : "",
    };
  }

  if (worldId === "winter" && isTowerWorldUnlocked()) {
    const claimableRewards = getClaimableTrophyRewards("winter");

    return {
      theme: "winter",
      visibility: "tower",
      align: "end",
      image: "./assets/backgrounds/ładowanie_2.png",
      fallbackText: "ZIMA",
      message: "UKOŃCZYŁEŚ JUŻ ŚWIAT ZIMOWY",
      actionWorldId: claimableRewards.length > 0 ? "winter" : "",
      actionLabel: claimableRewards.length > 0 ? "Odbierz nagrody ze Świata Zimowego" : "",
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

function getWorldPromoVisual(worldId) {
  if (worldId === "tower") {
    return {
      image: "./assets/alley/jungle.jpeg",
      fallbackText: "DZUNGLA",
    };
  }

  if (worldId === "winter") {
    return {
      image: "./assets/backgrounds/ładowanie_2.png",
      fallbackText: "ZIMA",
    };
  }

  return {
    image: "./assets/backgrounds/ładowanie_1.png",
    fallbackText: "MAGIA",
  };
}

function getNextTrophyWorld(worldId) {
  const currentIndex = TROPHY_WORLDS.findIndex((world) => world.id === worldId);
  return currentIndex >= 0 ? TROPHY_WORLDS[currentIndex + 1] || null : null;
}

function getWorldTransitionRequirement(worldId) {
  const world = getTrophyWorldById(worldId);
  const lastReward = Array.isArray(world.rewards) ? world.rewards[world.rewards.length - 1] : null;
  return lastReward?.trophies || 0;
}

function canTransitionToWorld(targetWorldId) {
  const targetIndex = TROPHY_WORLDS.findIndex((world) => world.id === targetWorldId);

  if (targetIndex <= 0) {
    return false;
  }

  const previousWorld = TROPHY_WORLDS[targetIndex - 1];
  return state.trophies >= getWorldTransitionRequirement(previousWorld.id);
}

function getTrophyWorldBannerStatus(worldId) {
  return isSuperAlleyActiveForWorld(worldId) ? "SUPER AKTYWOWANA" : "ALEJA ZWYKŁA";
}

function buildTrophyWorldStartCard(world) {
  const visual = getWorldPromoVisual(world.id);
  const superAlleyActive = isSuperAlleyActiveForWorld(world.id);
  const hasPetKeyShop = world.id === "winter";
  const keyShopMode = WINTER_PET_STORE_MODE;
  const petKeyBalance = hasPetKeyShop
    ? `
      <p class="trophy-world-banner-label trophy-world-banner-keys">
        ${formatPlatoKeyCountLabel(state.platoKeys)}
      </p>
    `
    : "";
  const petShopButton = hasPetKeyShop
    ? `
      <button
        class="pixel-button small-button trophy-world-banner-button trophy-world-banner-keyshop-button"
        data-open-pet-key-store="${keyShopMode}"
      >
        SKLEP ZIMOWYCH PLATOYI
      </button>
    `
    : "";

  return `
    <article class="trophy-world-banner trophy-world-banner-start" data-world-theme="${world.id}">
      <div class="item-art trophy-world-banner-art">
        <img
          class="item-image asset-image"
          src="${visual.image}"
          alt="${world.name}"
          data-fallback-text="${visual.fallbackText}"
        />
        <div class="asset-fallback">${visual.fallbackText}</div>
      </div>
      <div class="trophy-world-banner-meta">
        <p class="trophy-world-banner-label trophy-world-banner-world">${world.name}</p>
        <p class="trophy-world-banner-label trophy-world-banner-state">${getTrophyWorldBannerStatus(world.id)}</p>
        ${petKeyBalance}
        ${petShopButton}
        ${superAlleyActive ? "" : `
          <button
            class="pixel-button small-button trophy-world-banner-button trophy-world-banner-super-button"
            data-super-alley-trigger="${world.id}"
          >
            AKTYWUJ ALEJĘ SUPER
          </button>
        `}
      </div>
    </article>
  `;
}

function buildTrophyWorldTransitionCard(world) {
  const nextWorld = getNextTrophyWorld(world.id);

  if (!nextWorld) {
    const visual = getWorldPromoVisual(world.id);
    return `
      <article class="trophy-world-banner trophy-world-banner-end" data-world-theme="${world.id}">
        <div class="item-art trophy-world-banner-art">
          <img
            class="item-image asset-image"
            src="${visual.image}"
            alt="${world.name}"
            data-fallback-text="${visual.fallbackText}"
          />
          <div class="asset-fallback">${visual.fallbackText}</div>
        </div>
        <div class="trophy-world-banner-meta">
          <p class="trophy-world-banner-label trophy-world-banner-world">${world.name}</p>
          <p class="trophy-world-banner-label trophy-world-banner-state">OSTATNI ŚWIAT</p>
        </div>
      </article>
    `;
  }

  const visual = getWorldPromoVisual(nextWorld.id);
  const transitionReady = canTransitionToWorld(nextWorld.id);
  const requiredTrophies = getWorldTransitionRequirement(world.id);

  return `
    <article class="trophy-world-banner trophy-world-banner-end" data-world-theme="${nextWorld.id}">
      <div class="item-art trophy-world-banner-art">
        <img
          class="item-image asset-image"
          src="${visual.image}"
          alt="${nextWorld.name}"
          data-fallback-text="${visual.fallbackText}"
        />
        <div class="asset-fallback">${visual.fallbackText}</div>
      </div>
      <div class="trophy-world-banner-meta">
        <p class="trophy-world-banner-label trophy-world-banner-world">${nextWorld.name}</p>
        ${
          transitionReady
            ? `
              <button
                class="pixel-button small-button trophy-world-banner-button"
                data-trophy-transition="${nextWorld.id}"
              >
                PRZEJDŹ
              </button>
            `
            : `<p class="trophy-world-banner-label trophy-world-banner-state">ZA ${requiredTrophies} PUCHARÓW</p>`
        }
      </div>
    </article>
  `;
}

async function transitionToTrophyWorld(targetWorldId) {
  const targetWorld = getTrophyWorldById(targetWorldId);
  const targetIndex = TROPHY_WORLDS.findIndex((world) => world.id === targetWorldId);

  if (trophyWorldTransitionBusy || targetIndex <= 0 || !targetWorld || !canTransitionToWorld(targetWorldId)) {
    return;
  }

  trophyWorldTransitionBusy = true;
  const previousWorld = TROPHY_WORLDS[targetIndex - 1];
  const previousVisual = getWorldPromoVisual(previousWorld.id);
  const targetVisual = getWorldPromoVisual(targetWorld.id);
  const completionVisual = targetWorld.id === "tower" ? targetVisual : previousVisual;
  const previousWorldCompletionTitle = previousWorld.id === "alley"
    ? "UKOŃCZYŁEŚ ŚWIAT MAGIKÓW"
    : previousWorld.id === "winter"
      ? "UKOŃCZYŁEŚ ŚWIAT ZIMOWY"
      : `UKOŃCZYŁEŚ ${previousWorld.name.toUpperCase()}`;
  const targetWorldCopy = targetWorld.id === "winter"
    ? "Możesz przejsc do Świata Zimowego"
    : targetWorld.id === "tower"
      ? "Możesz przejsc do Świata Dżungli"
      : `Możesz przejsc do ${targetWorld.name}`;
  const targetWorldWelcomeTitle = targetWorld.id === "winter"
    ? "Witaj w Świecie Zimowym"
    : targetWorld.id === "tower"
      ? "Witaj w Świecie Dżungli"
      : `Witaj w ${targetWorld.name}`;

  try {
    await playAlleyIntroSequence([
      {
        title: previousWorldCompletionTitle,
        copy: targetWorldCopy,
        image: completionVisual.image,
        fallbackText: completionVisual.fallbackText,
        theme: previousWorld.id,
        durationMs: 2600,
      },
      {
        title: targetWorldWelcomeTitle,
        image: targetVisual.image,
        fallbackText: targetVisual.fallbackText,
        theme: targetWorld.id,
        durationMs: 3000,
      },
    ]);

    state.activeTrophyWorld = targetWorld.id;
    ui.trophyWorldId = targetWorld.id;
    if (targetWorld.id === "winter") {
      state.seenWinterWorldIntro = true;
    }
    if (targetWorld.id === "tower") {
      state.seenTowerWorldIntro = true;
    }
    saveState();
    renderAll();
    if (trophyGrid) {
      trophyGrid.scrollLeft = 0;
    }
  } finally {
    trophyWorldTransitionBusy = false;
  }
}

function renderTrophyRoad() {
  if (!trophyGrid || !worldProgressValue || !worldTitle) {
    return;
  }

  const previousScrollLeft = trophyGrid.scrollLeft;
  worldProgressValue.textContent = String(state.trophies);
  const world = getActiveTrophyWorld();
  worldTitle.textContent = world.name;
  if (worldHeaderPanel) {
    worldHeaderPanel.dataset.worldTheme = world.id;
  }
  if (trophyRoadTitleBadge) {
    trophyRoadTitleBadge.dataset.worldTheme = world.id;
  }
  const worldProgress = getTrophyWorldProgressPercent(world);
  renderMagicWorldHeaderControls(world, worldProgress);
  const progressLabels = world.rewards.map((reward) => `
    <span class="trophy-world-progress-label">${reward.trophies}</span>
  `).join("");
  const rewardCards = world.rewards.map((reward) => {
    const rewardUiState = getTrophyRewardUiState(world.id, reward);
    const rewardImage = getTrophyRewardImage(reward);

    return `
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
    `;
  }).join("");

  trophyGrid.innerHTML = `
    <section class="trophy-stage" data-trophy-world="${world.id}">
      ${buildTrophyWorldStartCard(world)}
      <div class="trophy-stage-rewards">
        <div class="trophy-world-cards">
          ${rewardCards}
        </div>
        <div class="trophy-world-progress" data-world-theme="${world.id}">
          <div class="trophy-world-progress-track">
            <div class="trophy-world-progress-fill" style="width:${worldProgress}%;"></div>
          </div>
          <div class="trophy-world-progress-labels">
            ${progressLabels}
          </div>
        </div>
      </div>
      ${buildTrophyWorldTransitionCard(world)}
    </section>
  `;
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

  if (item.unlockWorld === "tower") {
    return "tower";
  }

  if (item.unlockWorld === "winter") {
    return "winter";
  }

  return "magicians";
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
    : worldLabel === "Swiat Dzungli"
      ? "Gdy odblokujesz kolejne nagrody z Dżungli, pojawia sie tutaj."
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
    gamePetEntity.dataset.petId = pet.id;
  } else {
    gamePetEntity.hidden = true;
    gamePetImage.src = "";
    gamePetImage.alt = "PlatoYa";
    gamePetImage.classList.add("broken");
    delete gamePetEntity.dataset.petId;
  }
}

function handleStoreDragStart(event) {
  return;
}

function handleStoreDragMove(event) {
  return;
}

function handleStoreDragEnd(event) {
  return;
}

function handleStoreWheelScroll(event) {
  return;
}

function handleStoreScroll() {
  if (!storeGridWrap) {
    return;
  }

  ui.storeScrollLeft = storeGridWrap.scrollLeft;
}

function handleStoreClick(event) {
  if (Date.now() < storeDragState.suppressClickUntil) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const chestOddsButton = event.target.closest("[data-chest-odds]");

  if (chestOddsButton) {
    openChestOddsModal(chestOddsButton.dataset.chestOdds || "drewniana-skrzynia");
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

  const exitButton = event.target.closest("[data-store-exit-view]");

  if (exitButton) {
    ui.storeMode = DEFAULT_STORE_MODE;
    showView(exitButton.dataset.storeExitView || "trophies");
    return;
  }

  const button = event.target.closest("[data-store-buy]");

  if (!button) {
    return;
  }

  const kind = button.dataset.storeKind;
  const itemId = button.dataset.storeBuy;
  const item = CATALOG[kind].find((entry) => entry.id === itemId);
  const currency = button.dataset.storeCurrency || "coins";
  const price = Number(button.dataset.storePrice || item?.price || 0);

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

  if (kind === "diamonds") {
    buyDiamondPack(item);
    return;
  }

  if (kind === "trophies") {
    buyCodeLockedTrophyPack(item);
    return;
  }

  if (kind === "characters" && button.dataset.storeOfferSource === "daily-characters") {
    openStoreCharacterPurchase(item);
    return;
  }

  if (getCurrencyBalance(currency) < price) {
    openModal({
      title: currency === "plato-keys" ? "Za malo kluczy" : currency === "diamonds" ? "Za malo diamentow" : "Za malo monet",
      message: buildStoreInsufficientBalanceMessage(currency),
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  buyItem(kind, item, { currency, price });
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
  const superAlleyTrigger = event.target.closest("[data-super-alley-trigger]");

  if (superAlleyTrigger) {
    openSuperAlleyOffer(superAlleyTrigger.dataset.superAlleyTrigger);
    return;
  }

  const openPetKeyStoreButton = event.target.closest("[data-open-pet-key-store]");

  if (openPetKeyStoreButton) {
    ui.storeMode = openPetKeyStoreButton.dataset.openPetKeyStore === WINTER_PET_STORE_MODE
      ? WINTER_PET_STORE_MODE
      : MAGICIANS_PET_STORE_MODE;
    showView("store");
    return;
  }

  const transitionButton = event.target.closest("[data-trophy-transition]");

  if (transitionButton) {
    void transitionToTrophyWorld(transitionButton.dataset.trophyTransition);
    return;
  }

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
    openChestOddsModal(chestOddsButton.dataset.chestOdds || "drewniana-skrzynia");
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

function buyItem(kind, item, options = {}) {
  if (isWorldLockedItem(item)) {
    return;
  }

  const currency = options.currency || item.currency || "coins";
  const price = Number(options.price ?? item.price ?? 0);

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

  if (getCurrencyBalance(currency) < price) {
    return;
  }

  changeCurrencyBalance(currency, -price);
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
    superTheme: getRewardSceneWorldTheme(kind, item),
    soundEffectName:
      kind === "pets"
        ? getPetVoiceEffect(item.id)
        : kind === "characters"
          ? "characterUnlock"
          : null,
  });
}

function openTrophyRoadIntro() {
  if (state.seenTrophyRoadIntro) {
    return;
  }

  state.seenTrophyRoadIntro = true;
  saveState();

  void playAlleyIntro();
}

function setAlleyIntroStep({
  title,
  image,
  fallbackText = "MAGICY",
  theme = "alley",
  copy = "",
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
  if (alleyIntroCopy) {
    alleyIntroCopy.textContent = copy;
    alleyIntroCopy.hidden = !copy;
  }
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
      image: "./assets/backgrounds/ładowanie_1.png",
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
  if (alleyIntroCopy) {
    alleyIntroCopy.textContent = "";
    alleyIntroCopy.hidden = true;
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
  const isTowerWorld = world.id === "tower";
  const isActive = isSuperAlleyActiveForWorld(world.id);
  const blockedContent = isActive ? null : getSuperAlleyBlockedContent(world.id);

  superAlleyButton.dataset.theme = world.id;
  superAlleyStatus.dataset.theme = world.id;

  if (isActive) {
    superAlleyStatus.textContent = isTowerWorld
      ? "Aleja Super Świata Dżungli aktywna. Super nagrody sa odblokowane."
      : isWinterWorld
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

  superAlleyStatus.textContent = isTowerWorld
    ? "Aktywuj Aleję Super, aby odbierac zielone nagrody premium Dżungli."
    : isWinterWorld
      ? "Aktywuj Aleję Super, aby odbierac jasnoniebieskie nagrody premium."
      : "Aktywuj Aleję Super, aby odbierac rozowe nagrody premium.";
  superAlleyButton.textContent = "AKTYWUJ ALEJĘ SUPER";
  superAlleyButton.disabled = false;
  superAlleyButton.classList.remove("active");
}

function renderMagicWorldHeaderControls(world, worldProgress = 0) {
  if (!worldHeaderActions || !worldHeaderMachineButton) {
    return;
  }

  const showMachineControls = world?.id === "alley";
  const normalizedProgress = Math.max(0, Math.min(100, Number(worldProgress || 0)));

  worldHeaderActions.hidden = !showMachineControls;
  worldHeaderActions.setAttribute("aria-hidden", String(!showMachineControls));
  worldHeaderMachineButton.hidden = !showMachineControls;
  worldHeaderMachineButton.disabled = !showMachineControls;
  if (worldHeaderMiniProgress) {
    worldHeaderMiniProgress.hidden = true;
    worldHeaderMiniProgress.setAttribute("aria-hidden", "true");
  }
  if (worldHeaderMiniProgressFill) {
    worldHeaderMiniProgressFill.style.width = showMachineControls ? `${normalizedProgress}%` : "0%";
  }

  if (showMachineControls) {
    syncBrokenAssets(worldHeaderActions);
  }
}

function getMagicMachinePrizePool() {
  return getMagiciansPetShopItems();
}

function isMagicMachineFirstPurchase() {
  return !state.magicMachineFirstPurchaseDone;
}

function getMagicMachineCurrentCost() {
  return isMagicMachineFirstPurchase() ? MAGIC_MACHINE_FIRST_PRICE : MAGIC_MACHINE_PRICE;
}

function pickMagicMachineRewardPet() {
  if (isMagicMachineFirstPurchase()) {
    return CATALOG.pets.find((item) => item.id === MAGIC_MACHINE_FIRST_REWARD_PET_ID) || null;
  }

  const prizePool = getMagicMachinePrizePool();
  const unownedPool = prizePool.filter((item) => !state.ownedPets.includes(item.id));
  const rollPool = unownedPool.length > 0 ? unownedPool : prizePool;

  if (rollPool.length === 0) {
    return null;
  }

  return rollPool[Math.floor(Math.random() * rollPool.length)] || null;
}

function getMagicMachineMissingKeysText(missingCount = 1) {
  const missing = Math.max(1, Math.floor(Number(missingCount) || 1));

  if (missing === 1) {
    return "POTRZEBUJESZ JESZCZE JEDNEGO KLUCZA";
  }

  if (missing === 2) {
    return "POTRZEBUJESZ JESZCZE DWÓCH KLUCZY";
  }

  return `POTRZEBUJESZ JESZCZE ${missing} KLUCZY`;
}

function showMagicMachineMissingKeysMessage(missingCount = 1) {
  if (!magicMachineLabel) {
    return;
  }

  const missingText = missingCount <= 1 ? "BRAK JEDNEGO KLUCZA" : "BRAKUJE DWÓCH KLUCZY";
  magicMachineLabel.textContent = missingText;
  magicMachineLabel.classList.add("missing-keys");

  window.setTimeout(() => {
    if (!magicMachineBackdrop || magicMachineBackdrop.hidden || magicMachineStage !== "buy") {
      return;
    }

    magicMachineLabel.classList.add("fade-out");
  }, 1050);

  window.setTimeout(() => {
    if (!magicMachineBackdrop || magicMachineBackdrop.hidden || magicMachineStage !== "buy") {
      return;
    }

    magicMachineLabel.textContent = "MASZYNA PLATOYI";
    magicMachineLabel.classList.remove("missing-keys");
    magicMachineLabel.classList.remove("fade-out");
  }, 1520);
}

function setMagicMachineMessage(message = "", priceMarkup = "") {
  if (!magicMachineNote || !magicMachinePrice) {
    return;
  }

  magicMachineNote.textContent = message;
  magicMachineNote.hidden = !message;
  magicMachinePrice.innerHTML = priceMarkup;
  magicMachinePrice.hidden = !priceMarkup;
}

function canCloseMagicMachineBackdrop() {
  return !magicMachineBusy && magicMachineStage === "buy";
}

function setMagicMachineSceneMode(mode = "buy") {
  if (
    !magicMachineScene ||
    !magicMachineCard ||
    !magicMachineArt ||
    !magicMachineImage ||
    !magicMachineLabel ||
    !magicMachineWord ||
    !magicMachineNote ||
    !magicMachinePrice
  ) {
    return;
  }

  magicMachineStage = mode;
  magicMachineScene.dataset.machineStage = mode;
  magicMachineCard.dataset.machineStage = mode;
  magicMachineArt.dataset.visual = mode === "reward" ? "reward" : "machine";
  magicMachineArt.classList.remove("reward-visible");
  magicMachineArt.classList.remove("blink");
  magicMachineArt.setAttribute("aria-disabled", String(mode === "rolling" || mode === "reward"));
  magicMachineLabel.textContent = "MASZYNA PLATOYI";
  magicMachineLabel.hidden = false;
  magicMachineLabel.classList.remove("missing-keys");
  magicMachineLabel.classList.remove("fade-out");
  magicMachineWord.hidden = true;

  if (magicMachineLaunchBall) {
    magicMachineLaunchBall.hidden = true;
    magicMachineLaunchBall.classList.remove("active");
  }
  if (magicMachineBallSplit) {
    magicMachineBallSplit.hidden = true;
    magicMachineBallSplit.classList.remove("active");
  }
  if (magicMachineRewardGlow) {
    magicMachineRewardGlow.hidden = mode !== "reward";
  }
  if (magicMachineRewardImage && mode !== "reward") {
    magicMachineRewardImage.hidden = true;
    magicMachineRewardImage.classList.remove("show");
    magicMachineRewardImage.src = "";
    magicMachineRewardImage.alt = "";
  }

  const fallback = magicMachineImage.nextElementSibling;
  magicMachineImage.src = MAGIC_MACHINE_IMAGE;
  magicMachineImage.alt = "Automat PlatoYI";
  magicMachineImage.dataset.fallbackText = "AUTOMAT";
  magicMachineImage.classList.toggle("split-hidden", mode === "reward");
  magicMachineArt.setAttribute("aria-label", mode === "reward" ? "Wylosowany PlatoYA" : "Automat PlatoYI");
  if (fallback) {
    fallback.textContent = "AUTOMAT";
  }

  if (mode === "buy") {
    magicMachineArt.classList.add("blink");
    setMagicMachineMessage("");
  } else if (mode === "rolling") {
    setMagicMachineMessage("");
  } else if (mode === "reward") {
    const rewardPet = getMagicMachinePrizePool().find((item) => item.id === magicMachineRewardPetId) || null;
    setMagicMachineMessage(rewardPet?.name?.toUpperCase?.() || "");
  } else {
    setMagicMachineMessage("");
  }

  syncBrokenAssets(magicMachineBackdrop || magicMachineCard);
}

function openMagicMachine() {
  if (
    !magicMachineBackdrop ||
    !magicMachineScene ||
    !magicMachineCard ||
    !magicMachineImage ||
    getActiveTrophyWorldId() !== "alley" ||
    !magicMachineBackdrop.hidden
  ) {
    return;
  }

  if (getMagicMachinePrizePool().length === 0) {
    openModal({
      title: "Brak PlatoYI",
      message: "Najpierw dodaj PlatoYe do świata magików, aby automat miał z czego losować.",
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  magicMachineSequenceId += 1;
  magicMachineBusy = false;
  magicMachineRewardPetId = "";
  setMagicMachineSceneMode("buy");
  playOneShotSound("superIntro", 0.82);
  magicMachineBackdrop.hidden = false;
  syncBrokenAssets(magicMachineBackdrop);
  syncBackgroundMusic();
}

function closeMagicMachineBackdrop(shouldSyncMusic = true) {
  if (!magicMachineBackdrop) {
    return;
  }

  magicMachineSequenceId += 1;
  magicMachineBusy = false;
  magicMachineRewardPetId = "";
  setMagicMachineSceneMode("buy");
  magicMachineBackdrop.hidden = true;

  if (shouldSyncMusic) {
    syncBackgroundMusic();
  }
}

async function handleMagicMachineAction() {
  if (!magicMachineBackdrop || magicMachineBackdrop.hidden || magicMachineBusy) {
    return;
  }

  if (magicMachineStage === "buy") {
    await startMagicMachineRoll();
  }
}

async function startMagicMachineRoll() {
  if (!magicMachineBackdrop || magicMachineBackdrop.hidden || magicMachineBusy || magicMachineStage !== "buy") {
    return;
  }

  const currentCost = getMagicMachineCurrentCost();
  const rewardPet = pickMagicMachineRewardPet();

  if (!rewardPet) {
    openModal({
      title: "Brak PlatoYI",
      message: "Automat nie znalazł żadnego magicznego PlatoYasa.",
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  const keyBalance = getCurrencyBalance("plato-keys");
  if (keyBalance < currentCost) {
    const sequenceId = ++magicMachineSequenceId;
    showMagicMachineMissingKeysMessage(currentCost - keyBalance);
    setMagicMachineMessage("");
    await wait(1700);

    if (
      sequenceId !== magicMachineSequenceId ||
      !magicMachineBackdrop ||
      magicMachineBackdrop.hidden ||
      magicMachineStage !== "buy"
    ) {
      return;
    }
    return;
  }

  changeCurrencyBalance("plato-keys", -currentCost);
  if (isMagicMachineFirstPurchase()) {
    state.magicMachineFirstPurchaseDone = true;
  }
  saveState();
  renderAll();

  const sequenceId = ++magicMachineSequenceId;
  magicMachineRewardPetId = rewardPet.id;
  magicMachineBusy = true;
  setMagicMachineSceneMode("rolling");
  playOneShotSound("magicMachineRoll", 0.82);
  await wait(940);

  if (sequenceId !== magicMachineSequenceId || !magicMachineBackdrop || magicMachineBackdrop.hidden) {
    return;
  }

  await grantMagicMachineReward(rewardPet);
}

async function grantMagicMachineReward(rewardPetOverride = null) {
  const rewardPet = rewardPetOverride || getMagicMachinePrizePool().find((item) => item.id === magicMachineRewardPetId) || pickMagicMachineRewardPet();
  magicMachineBusy = false;

  if (!rewardPet) {
    closeMagicMachineBackdrop();
    return;
  }

  if (!state.ownedPets.includes(rewardPet.id)) {
    state.ownedPets.push(rewardPet.id);
  }

  saveState();
  renderAll();
  closeMagicMachineBackdrop(false);
  await showRewardShowcase({
    image: rewardPet.image,
    name: rewardPet.name,
    mode: "magic",
    autoCloseMs: 2500,
  });
  syncBackgroundMusic();
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

async function claimTrophyCrateRewardInBatch(crate, rewards = [], options = {}) {
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
  const rewardSuperTheme = isSuperAlleyReward(world.id, reward) ? world.id : "";

  if (isSuperAlleyReward(world.id, reward) && !isSuperAlleyActiveForWorld(world.id)) {
    openSuperAlleyOffer(world.id);
    return;
  }

  if (!Array.isArray(state.claimedTrophyRewards[world.id])) {
    state.claimedTrophyRewards[world.id] = [];
  }

  state.claimedTrophyRewards[world.id].push(reward.id);

  if (reward.type === "coins") {
    state.coins += reward.amount;
  } else if (reward.type === "diamonds") {
    state.diamonds += reward.amount;
  } else if (reward.type === "plato-keys") {
    state.platoKeys += reward.amount;
  } else if (reward.type === "crate") {
    const crate = CATALOG.crates.find((entry) => entry.id === reward.crateId);
    saveState();
    renderAll();

    if (crate) {
      const preparedSession = createChestSession(crate);
      if (batchMode) {
        await claimTrophyCrateRewardInBatch(crate, preparedSession.rewards, {
          superTheme: rewardSuperTheme || getCrateRewardTheme(crate),
        });
      } else {
        void showCrateRewardScene(crate, preparedSession.rewards, {
          superTheme: rewardSuperTheme || getCrateRewardTheme(crate),
        });
      }
    }
    return;
  } else if (reward.type === "pet") {
    if (!state.ownedPets.includes(reward.itemId)) {
      state.ownedPets.push(reward.itemId);
    }
  } else if (reward.type === "profile-photo") {
    if (!state.ownedProfilePhotos.includes(reward.itemId)) {
      state.ownedProfilePhotos.push(reward.itemId);
    }
  } else if (reward.type === "character") {
    if (!state.ownedCharacters.includes(reward.itemId)) {
      state.ownedCharacters.push(reward.itemId);
    }
  }

  saveState();
  renderAll();

  if (reward.type === "pet" || reward.type === "character" || reward.type === "profile-photo") {
    if (batchMode) {
      await showAlleyRewardScene(reward, {
        superTheme: rewardSuperTheme,
      });
    } else {
      void showAlleyRewardScene(reward, {
        superTheme: rewardSuperTheme,
      });
    }
    return;
  }

  if (reward.type === "coins") {
    if (batchMode) {
      await showCoinRewardScene(reward.amount, {
        title: "Monety z Alei",
        autoCloseMs: 2200,
        superTheme: rewardSuperTheme,
      });
      await animateCoinsToBalance();
    } else {
      void showCoinRewardScene(reward.amount, {
        title: "Monety z Alei",
        autoCloseMs: 2500,
        superTheme: rewardSuperTheme,
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
        superTheme: rewardSuperTheme,
      });
    } else {
      void showDiamondRewardScene(reward.amount, {
        title: "Diamenty z Alei",
        autoCloseMs: 2500,
        superTheme: rewardSuperTheme,
      });
    }
    return;
  }

  if (reward.type === "plato-keys") {
    if (batchMode) {
      await showPlatoKeyRewardScene(reward.amount, {
        title: `Klucze PlatoYI z ${world.name}`,
        autoCloseMs: 2200,
        superTheme: rewardSuperTheme,
        keyTheme: reward.keyTheme || getPlatoKeyThemeForWorld(world.id),
      });
    } else {
      void showPlatoKeyRewardScene(reward.amount, {
        title: `Klucze PlatoYI z ${world.name}`,
        autoCloseMs: 2500,
        superTheme: rewardSuperTheme,
        keyTheme: reward.keyTheme || getPlatoKeyThemeForWorld(world.id),
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

  if (item.unlockWorld === "tower") {
    return !isTowerWorldUnlocked();
  }

  if (item.unlockWorld === "winter") {
    return !isWinterWorldUnlocked();
  }

  return false;
}

function getTrophyRewardImage(reward) {
  if (reward.type === "coins") {
    return { src: COIN_REWARD_IMAGE, fallbackText: "MONETY" };
  }

  if (reward.type === "diamonds") {
    return { src: DIAMOND_REWARD_IMAGE, fallbackText: "DIAMENTY" };
  }

  if (reward.type === "plato-keys") {
    return {
      src: getPlatoKeyImageForTheme(reward.keyTheme || "magicians"),
      fallbackText: "KLUCZ",
    };
  }

  if (reward.type === "crate") {
    const crate = CATALOG.crates.find((item) => item.id === reward.crateId);
    return {
      src: crate?.image || "./assets/shop/skrzynia_1.png",
      fallbackText: crate?.fallbackText || "SKRZYNIA",
    };
  }

  if (reward.type === "pet") {
    const pet = CATALOG.pets.find((item) => item.id === reward.itemId);
    return { src: pet?.image || "", fallbackText: pet?.name || "PLATOYA" };
  }

  if (reward.type === "profile-photo") {
    const profilePhoto = CATALOG.profilePhotos.find((item) => item.id === reward.itemId);
    return { src: profilePhoto?.image || "", fallbackText: profilePhoto?.name || "PROFIL" };
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

  if (item.unlockWorld === "tower") {
    return "Ten przedmiot odblokujesz w dalszej części Świata Dżungli.";
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

  const isBookPet = item.kind === "book-pet";
  const isBookGrandReward = item.kind === "book-grand-reward";
  const isBookScene = isBookPet || isBookGrandReward;
  const worldTheme = isBookScene ? { id: "tower", label: "SWIAT DŻUNGLI" } : getStoreCharacterWorldTheme(item);
  const currency = item.currency || "coins";
  const isProgressGate = currency === "progress";
  const balance = isProgressGate ? 0 : currency === "diamonds" ? state.diamonds : state.coins;
  const progressCurrent = Number(item.progressCurrent || 0);
  const progressTotal = Number(item.progressTotal || 0);
  const missingAmount = isProgressGate
    ? Math.max(0, progressTotal - progressCurrent)
    : Math.max(0, Number(item.price || 0) - balance);
  const canAfford = item.alreadyOwned ? false : missingAmount === 0;

  if (worldTheme.id === "winter") {
    storeCharacterPurchaseScene.dataset.theme = "winter";
    if (storeCharacterPurchaseBackdrop) {
      storeCharacterPurchaseBackdrop.dataset.theme = "winter";
    }
  } else if (worldTheme.id === "tower") {
    storeCharacterPurchaseScene.dataset.theme = "tower";
    if (storeCharacterPurchaseBackdrop) {
      storeCharacterPurchaseBackdrop.dataset.theme = "tower";
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

  if (storeCharacterPurchaseKicker) {
    storeCharacterPurchaseKicker.textContent = isBookScene ? "Księga Dżungli" : "Dzisiejsza postac sklepu";
  }
  storeCharacterPurchaseTitle.textContent = item.name;
  storeCharacterPurchaseCopy.textContent = item.purchaseCopy || "Potwierdz zakup tej postaci.";
  storeCharacterPurchaseActions.hidden = !canAfford;
  storeCharacterPurchaseMissing.hidden = canAfford;
  storeCharacterPurchaseMissing.textContent = typeof item.missingCopy === "function"
    ? item.missingCopy(missingAmount, progressTotal, progressCurrent)
    : item.alreadyOwned
      ? "Masz już tę postać."
      : currency === "diamonds"
      ? `Brakuje ci ${missingAmount} diamentów.`
      : `Brakuje ci ${missingAmount} monet.`;

  if (storeCharacterPurchaseConfirmButton) {
    storeCharacterPurchaseConfirmButton.disabled = storeCharacterPurchaseBusy;
    storeCharacterPurchaseConfirmButton.textContent = item.confirmLabel || "Potwierdz zakup";
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

  const item = activeStoreCharacterPurchase;
  const currency = item.currency || "coins";
  const isProgressGate = currency === "progress";
  const balance = isProgressGate ? 0 : currency === "diamonds" ? state.diamonds : state.coins;
  const progressCurrent = Number(item.progressCurrent || 0);
  const progressTotal = Number(item.progressTotal || 0);

  if ((!isProgressGate && balance < item.price) || (isProgressGate && progressCurrent < progressTotal)) {
    setStoreCharacterPurchaseScene(activeStoreCharacterPurchase);
    return;
  }

  storeCharacterPurchaseBusy = true;
  if (storeCharacterPurchaseConfirmButton) {
    storeCharacterPurchaseConfirmButton.disabled = true;
  }

  if (item.kind === "book-pet") {
    closeStoreCharacterPurchase();
    await buyBookPet(item.id);
    return;
  }

  if (item.kind === "book-grand-reward") {
    closeStoreCharacterPurchase();
    await claimBookGrandReward(item.id);
    return;
  }

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

function buyDiamondPack(item) {
  openModal({
    title: "Zakup klejnotow",
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
      await showDiamondRewardScene(item.amount, {
        title: "Klejnoty",
        autoCloseMs: 2500,
      });
      state.diamonds += item.amount;
      saveState();
      renderAll();
    },
  });
}

function buyCodeLockedTrophyPack(item) {
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

  const enteredCode = window.prompt("Wpisz kod, aby kupic 500 pucharow za 1 monete.", "");

  if (enteredCode === null) {
    return;
  }

  if (enteredCode.trim() !== TROPHY_STORE_CODE) {
    openModal({
      title: "Zly kod",
      message: "Ten kod nie odblokowuje tej oferty.",
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  buyTrophyPack(item);
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
    "crate-pack-1": { amount: 1, price: 20, crateId: "drewniana-skrzynia" },
    "crate-pack-2": { amount: 2, price: 35, crateId: "drewniana-skrzynia" },
    "jungle-crate-pack-1": { amount: 1, price: 50, crateId: "dzunglowa-skrzynia" },
    "jungle-crate-pack-2": { amount: 2, price: 95, crateId: "dzunglowa-skrzynia" },
  };
  const pack = packs[packId];
  const crate = CATALOG.crates.find((entry) => entry.id === pack?.crateId);

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
    await showCrateRewardScene(crate, preparedSession.rewards, {
      superTheme: getCrateRewardTheme(crate),
    });
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
  void showCrateRewardScene(crate, preparedSession.rewards, {
    superTheme: getCrateRewardTheme(crate),
  });
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
  chestRewardImage.src = "./assets/shop/skrzynia_1.png";
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
  if (crate.id === "dzunglowa-skrzynia") {
    const diamondAmount = randomBetween(1, 20);
    const rewards = [
      buildChestCurrencyReward("diamonds", diamondAmount, {
        title: "Diamenty z Dżungli",
        note: "Ta skrzynia daje tylko diamenty oraz moze skrywac dżunglowego PlatoYasa.",
      }),
    ];
    const junglePetPool = CATALOG.pets.filter(
      (item) => item.unlockWorld === "tower" && !state.ownedPets.includes(item.id)
    );

    if (junglePetPool.length > 0 && Math.random() < 0.33) {
      const item = junglePetPool[randomBetween(0, junglePetPool.length - 1)];
      rewards.push(buildChestItemReward("pets", item));
    }

    return rewards;
  }

  if (crate.id !== "drewniana-skrzynia") {
    return [];
  }

  return buildWoodenChestReward(chestNumber);
}

function buildChestCurrencyReward(type, amount, options = {}) {
  if (type === "diamonds") {
    return {
      type: "diamonds",
      amount,
      image: DIAMOND_REWARD_IMAGE,
      title: options.title || "Diamenty",
      countLabel: `+${amount} diamentow`,
      note: options.note || "Diamenty ze skrzyni trafiaja prosto do twojego salda.",
      summaryLabel: options.summaryLabel || `${amount} diamentow`,
    };
  }

  return {
    type: "coins",
    amount,
    image: COIN_REWARD_IMAGE,
    title: options.title || "Monety",
    countLabel: `+${amount} monet`,
    note: options.note || "Monety ze skrzyni trafiaja prosto do twojego salda.",
    summaryLabel: options.summaryLabel || `${amount} monet`,
  };
}

function getChestEligibleStoreCharactersForCurrentWorld() {
  const worldThemeId = getStoreWorldThemeIdForTrophyWorldId(getActiveTrophyWorldId());

  return CATALOG.characters.filter(
    (item) =>
      getStoreCharacterWorldTheme(item).id === worldThemeId &&
      Number(item.price || 0) > 0 &&
      !state.ownedCharacters.includes(item.id)
  );
}

function getChestEligibleWorldPetsForCurrentWorld() {
  const worldId = getActiveTrophyWorldId();

  return CATALOG.pets.filter(
    (item) =>
      item.unlockWorld === worldId &&
      !state.ownedPets.includes(item.id)
  );
}

function buildChestItemReward(kind, item, options = {}) {
  return {
    type: "item",
    kind,
    item,
    image: item.image,
    title: options.title || item.name,
    countLabel: options.countLabel || (kind === "characters" ? "Postac ze skrzyni" : "PlatoYa ze skrzyni"),
    note: options.note || (item.unlockWorld === "tower"
      ? "Dżunglowa nagroda bonusowa trafia do twojej szafy."
      : "Nagroda bonusowa ze skrzyni trafia do twojej szafy."),
    summaryLabel: options.summaryLabel || item.name,
  };
}

function buildWoodenChestReward() {
  const activeWorld = getActiveTrophyWorld();
  const characterPool = getChestEligibleStoreCharactersForCurrentWorld();
  const petPool = getChestEligibleWorldPetsForCurrentWorld();
  const rewardPool = [
    {
      chance: 60,
      create: () => buildChestCurrencyReward("coins", rollWoodenChestCoinAmount()),
    },
    {
      chance: 37,
      create: () => buildChestCurrencyReward("diamonds", randomBetween(3, 35)),
    },
  ];

  if (characterPool.length > 0) {
    rewardPool.push({
      chance: 2.5,
      create: () => {
        const item = characterPool[randomBetween(0, characterPool.length - 1)];
        return buildChestItemReward("characters", item, {
          note: `Sklepowa postac z ${activeWorld?.name || "biezacego swiata"} trafia do twojej szafy.`,
        });
      },
    });
  }

  if (petPool.length > 0) {
    rewardPool.push({
      chance: 0.5,
      create: () => {
        const item = petPool[randomBetween(0, petPool.length - 1)];
        return buildChestItemReward("pets", item, {
          note: `PlatoYa z Alei ${activeWorld?.name || "biezacego swiata"} trafia do twojej kolekcji.`,
        });
      },
    });
  }

  const totalChance = rewardPool.reduce((sum, reward) => sum + reward.chance, 0);
  let roll = Math.random() * totalChance;

  for (const reward of rewardPool) {
    if (roll < reward.chance) {
      return [reward.create()];
    }
    roll -= reward.chance;
  }

  return [rewardPool[0].create()];
}

function rollWoodenChestCoinAmount() {
  const buckets = [
    { weight: 40, min: 50, max: 1500 },
    { weight: 13, min: 1500, max: 6000 },
    { weight: 5, min: 6000, max: 9000 },
    { weight: 0.7, min: 9000, max: 10000 },
    { weight: 0.3, min: 10000, max: 15000 },
  ];
  const totalWeight = buckets.reduce((sum, bucket) => sum + bucket.weight, 0);
  let roll = Math.random() * totalWeight;

  for (const bucket of buckets) {
    if (roll < bucket.weight) {
      return randomBetween(bucket.min, bucket.max);
    }
    roll -= bucket.weight;
  }

  const fallbackBucket = buckets[0];
  return randomBetween(fallbackBucket.min, fallbackBucket.max);
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
        image: "./assets/characters/postac_1.png",
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
      maybePromptNicknameAfterIntro();
      return;
    }

    state.seenIntro = true;
    saveState();
    renderAll();
    maybePromptNicknameAfterIntro();
  } finally {
    introSequenceRunning = false;
    syncFirstGameGuide();
  }
}

function sanitizePlayerNickname(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^0-9A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż _-]/g, "")
    .slice(0, 18);
}

function hasPlayerNickname() {
  return Boolean(sanitizePlayerNickname(state.playerNickname));
}

function getPlayerNickname() {
  return sanitizePlayerNickname(state.playerNickname) || generateDefaultNickname();
}

function maybePromptNicknameAfterIntro() {
  return;
}

function openNicknamePrompt(onSave = null) {
  if (!nicknameBackdrop || !nicknameInput) {
    return;
  }

  nicknamePromptAfterSave = typeof onSave === "function" ? onSave : null;
  nicknameBackdrop.hidden = false;
  if (nicknameNote) {
    nicknameNote.textContent = "Ten nick będzie widoczny w lobby i przy przyszłym multiplayerze.";
  }
  nicknameInput.value = sanitizePlayerNickname(state.playerNickname);
  window.setTimeout(() => {
    nicknameInput.focus();
    nicknameInput.select();
  }, 20);
}

function closeNicknamePrompt() {
  if (!nicknameBackdrop) {
    return;
  }

  nicknameBackdrop.hidden = true;
  nicknamePromptAfterSave = null;
}

function submitNicknamePrompt() {
  if (!nicknameInput) {
    return;
  }

  const nickname = sanitizePlayerNickname(nicknameInput.value);

  if (!nickname) {
    if (nicknameNote) {
      nicknameNote.textContent = "Wpisz nick, aby przejść dalej.";
    }
    nicknameInput.focus();
    return;
  }

  state.playerNickname = nickname;
  state.nicknamePromptSeen = true;
  saveState();
  renderLobby();
  const afterSave = nicknamePromptAfterSave;
  closeNicknamePrompt();

  if (typeof afterSave === "function") {
    afterSave();
  }
}

function createSocialProfileState() {
  return {
    app: null,
    db: null,
    ready: false,
    initStarted: false,
    initPromise: null,
    listenerBound: false,
    syncTimer: 0,
    syncBusy: false,
    syncPending: false,
    lastError: "",
    leaderboard: [],
    profileCache: {},
    selectedProfileId: "",
    nicknameReserved: "",
    publicIdReserved: "",
    friendIds: [],
    sentInviteIds: [],
    receivedInvites: [],
    relationshipsOwnerId: "",
    friendsRef: null,
    receivedInvitesRef: null,
    sentInvitesRef: null,
    watchedProfileRefs: {},
    heartbeatTimer: 0,
    lastSyncedAt: 0,
  };
}

function createPartyState() {
  return {
    membershipRef: null,
    membershipOwnerId: "",
    invitesRef: null,
    invitesSentRef: null,
    partyRef: null,
    partyId: "",
    invites: [],
    sentInviteIds: [],
    data: null,
    partyLaunchHandledId: "",
    memberSyncTimer: 0,
    pendingMemberSyncPayload: {},
    hostSyncTimer: 0,
    syncingMember: false,
    syncingHost: false,
  };
}

function createMultiplayerState() {
  return {
    firebaseApp: null,
    firebaseDb: null,
    roomId: "",
    roomRef: null,
    playerRef: null,
    playersRef: null,
    damageRef: null,
    projectileRef: null,
    selfId: "",
    waiting: false,
    joining: false,
    matchActive: false,
    resultApplied: false,
    pendingResult: null,
    syncAccumulatorMs: 0,
    processedDamageEventIds: new Set(),
    processedProjectileEventIds: new Set(),
    roomData: null,
    roomStatus: "idle",
    countdownEndsAt: 0,
    playerOrder: [],
    playerCount: 0,
    players: {},
    panelOpenedAt: 0,
    tickTimer: 0,
    heartbeatTimer: 0,
    queueActionBusy: false,
  };
}

function hasFirebaseMultiplayerConfig() {
  return false;
}

function getFirebaseMultiplayerDatabase() {
  return null;
}

function normalizeMultiplayerNickname(nickname) {
  return sanitizePlayerNickname(nickname).toLowerCase();
}

function ensureMultiplayerSelfId() {
  if (!multiplayer.selfId) {
    multiplayer.selfId = `player-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
  }

  return multiplayer.selfId;
}

function buildMultiplayerProfile() {
  const characterId = state.equippedCharacter || "magik-millo";
  return {
    nickname: getPlayerNickname(),
    nicknameNormalized: normalizeMultiplayerNickname(getPlayerNickname()),
    characterId,
    petId: state.equippedPet || "",
    hp: getPlayerMaxHp(),
    x: 0,
    y: 0,
    joinedAt: Date.now(),
    lastSeenAt: Date.now(),
    connected: true,
    alive: true,
    placement: 0,
  };
}

function setMultiplayerPanelMode(mode = "chooser") {
  if (playModeChoice) {
    playModeChoice.hidden = mode !== "chooser";
  }

  if (multiplayerQueuePanel) {
    multiplayerQueuePanel.hidden = mode !== "queue";
  }

  if (multiplayerTitle) {
    multiplayerTitle.textContent = mode === "chooser" ? "Wybierz tryb gry" : "Graj z graczami";
  }
}

function setMultiplayerNote(message, tone = "info") {
  if (!multiplayerNote) {
    return;
  }

  multiplayerNote.textContent = message;

  if (tone && tone !== "info") {
    multiplayerNote.dataset.tone = tone;
  } else {
    delete multiplayerNote.dataset.tone;
  }
}

function setMultiplayerStatus(label, stateName = "ready") {
  if (!multiplayerStatusChip) {
    return;
  }

  multiplayerStatusChip.textContent = label;
  multiplayerStatusChip.dataset.state = stateName;
}

function getSortedRoomPlayersFromData(roomData, options = {}) {
  const includeDisconnected = options.includeDisconnected !== false;

  return Object.entries(roomData?.players || {})
    .map(([id, player]) => ({
      id,
      ...(player || {}),
    }))
    .filter((player) => includeDisconnected || player.connected !== false)
    .sort(
      (first, second) =>
        Number(first.joinedAt || 0) - Number(second.joinedAt || 0) ||
        first.id.localeCompare(second.id)
    );
}

function isFreshMultiplayerPlayer(player, now = Date.now()) {
  return Number(player?.lastSeenAt || player?.joinedAt || 0) >= now - MULTIPLAYER_PLAYER_STALE_MS;
}

function getActiveMultiplayerPlayers(roomData, now = Date.now()) {
  return getSortedRoomPlayersFromData(roomData).filter(
    (player) => player.connected !== false && isFreshMultiplayerPlayer(player, now)
  );
}

function updateMultiplayerLocalCache(roomData) {
  multiplayer.roomData = roomData || null;
  multiplayer.roomStatus = roomData?.status || "idle";
  multiplayer.countdownEndsAt = Number(roomData?.countdownEndsAt || 0);
  multiplayer.playerOrder = Array.isArray(roomData?.playerOrder)
    ? roomData.playerOrder.filter((playerId) => roomData?.players?.[playerId])
    : getSortedRoomPlayersFromData(roomData).map((player) => player.id);
  multiplayer.playerCount = Number(roomData?.playerCount || multiplayer.playerOrder.length || 0);
  multiplayer.players = getSortedRoomPlayersFromData(roomData).reduce((accumulator, player) => {
    accumulator[player.id] = player;
    return accumulator;
  }, {});
}

function handleMultiplayerPlayersSnapshot(playersData) {
  const nextRoomData = {
    ...(multiplayer.roomData || {}),
    players: playersData || {},
  };
  updateMultiplayerLocalCache(nextRoomData);

  if (ui.currentView === "game" && game.active && game.mode === "multiplayer") {
    renderGameScene();
  }

  if (!multiplayerBackdrop?.hidden) {
    renderMultiplayerLobbyState();
  }
}

function buildMultiplayerPlayerSlotsMarkup(players) {
  const slots = [];

  for (let index = 0; index < MULTIPLAYER_MAX_PLAYERS; index += 1) {
    const player = players[index];

    if (!player) {
      slots.push(`
        <div class="multiplayer-player-card empty">
          <div class="multiplayer-player-preview empty"><span>?</span></div>
          <p class="multiplayer-player-name">...</p>
        </div>
      `);
      continue;
    }

    const isSelf = player.id === multiplayer.selfId;
    const label = isSelf ? "TY" : (player.nickname || "GRACZ");
    const character = CATALOG.characters.find((item) => item.id === player.characterId) || CATALOG.characters[0];
    const pet = CATALOG.pets.find((item) => item.id === player.petId) || null;

    slots.push(`
      <div class="multiplayer-player-card${isSelf ? " self" : ""}">
        <div class="multiplayer-player-preview">
          ${buildPreviewAssetMarkup(character, {
            imageClass: "item-image asset-image",
            videoClass: "item-image asset-video",
            fallbackText: character.name || "POSTAC",
            alt: character.name || "Postac",
            usePreviewVideo: false,
          })}
        </div>
        ${pet ? `
          <div class="multiplayer-player-pet">
            <img class="item-image asset-image" src="${pet.image}" alt="${pet.name}" data-fallback-text="PLATOYA" />
            <div class="asset-fallback">PLATOYA</div>
          </div>
        ` : ""}
        <p class="multiplayer-player-name">${label}</p>
      </div>
    `);
  }

  return slots.join("");
}

function renderMultiplayerLobbyState() {
  if (!multiplayerOwnNick || !multiplayerStatusChip || !multiplayerNote) {
    return;
  }

  const hasConfig = hasFirebaseMultiplayerConfig();
  const queueOpen = multiplayer.waiting && !multiplayer.matchActive;
  const launching = multiplayer.matchActive || Boolean(ui.pendingMultiplayerLaunch);
  const now = Date.now();
  const activePlayers = getActiveMultiplayerPlayers(multiplayer.roomData, now);
  const timeLeftMs = Math.max(0, multiplayer.countdownEndsAt - now);
  const displayCount = launching
    ? Math.max(2, multiplayer.playerCount || activePlayers.length || 0)
    : activePlayers.length;

  multiplayerOwnNick.textContent = `${displayCount}/${MULTIPLAYER_MAX_PLAYERS}`;

  if (multiplayerPlayerList) {
    const listSource = multiplayer.roomStatus === "playing"
      ? multiplayer.playerOrder
          .map((playerId) => multiplayer.players[playerId])
          .filter(Boolean)
      : activePlayers;
    multiplayerPlayerList.innerHTML = buildMultiplayerPlayerSlotsMarkup(listSource);
    syncBrokenAssets(multiplayerPlayerList);
    syncAnimatedAssets(multiplayerPlayerList);
  }

  if (multiplayerTimer) {
    multiplayerTimer.textContent = queueOpen
      ? `START ZA ${Math.max(1, Math.ceil(timeLeftMs / 1000))} s`
      : launching
        ? "START!"
        : "START ZA 10 s";
  }

  if (multiplayerCancelButton) {
    multiplayerCancelButton.textContent = queueOpen ? "WYJDŹ Z KOLEJKI" : "ZAMKNIJ";
  }

  if (!hasConfig) {
    setMultiplayerStatus("Status: Firebase off", "error");
    setMultiplayerNote(
      "Multiplayer graczy potrzebuje działającego Firebase, inaczej nie połączy kolejki.",
      "error"
    );
    return;
  }

  if (launching) {
    setMultiplayerStatus("START", "playing");
    setMultiplayerNote(
      "Arena gotowa.",
      "success"
    );
    return;
  }

  if (multiplayer.roomStatus === "cancelled") {
    setMultiplayerStatus("STOP", "error");
    setMultiplayerNote("Za mało graczy.", "error");
    return;
  }

  if (queueOpen) {
    setMultiplayerStatus(
      activePlayers.length >= 2 ? "DOBIERANIE" : "SZUKANIE",
      "waiting"
    );
    setMultiplayerNote(
      activePlayers.length >= 2
        ? "Jeszcze chwila..."
        : "Czekam na drugiego gracza...",
      activePlayers.length >= 2 ? "success" : "warning"
    );
    return;
  }

  setMultiplayerStatus("GOTOWE", "ready");
  setMultiplayerNote(
    "Wybierz tryb gry.",
    "info"
  );
}

function clearMultiplayerIntervals() {
  if (multiplayer.tickTimer) {
    window.clearInterval(multiplayer.tickTimer);
    multiplayer.tickTimer = 0;
  }

  if (multiplayer.heartbeatTimer) {
    window.clearInterval(multiplayer.heartbeatTimer);
    multiplayer.heartbeatTimer = 0;
  }
}

function clearMultiplayerBindings() {
  clearMultiplayerIntervals();

  if (multiplayer.roomRef) {
    multiplayer.roomRef.off();
  }

  if (multiplayer.damageRef) {
    multiplayer.damageRef.off();
  }

  if (multiplayer.projectileRef) {
    multiplayer.projectileRef.off();
  }

  if (multiplayer.playersRef) {
    multiplayer.playersRef.off();
  }

  if (multiplayer.playerRef) {
    multiplayer.playerRef.onDisconnect().cancel().catch(() => {});
  }
}

function startMultiplayerIntervals() {
  clearMultiplayerIntervals();

  multiplayer.tickTimer = window.setInterval(() => {
    if (multiplayer.roomStatus === "queueing" && multiplayer.waiting && !multiplayer.matchActive) {
      void maybeEvaluateMultiplayerQueueRoom();
    }

    if (!multiplayerBackdrop?.hidden) {
      renderMultiplayerLobbyState();
    }
  }, MULTIPLAYER_QUEUE_TICK_MS);

  multiplayer.heartbeatTimer = window.setInterval(() => {
    if (multiplayer.roomStatus === "queueing" && multiplayer.waiting && !multiplayer.matchActive) {
      void syncMultiplayerQueuePresence();
    }
  }, MULTIPLAYER_HEARTBEAT_MS);
}

function resetMultiplayerState(options = {}) {
  const preserveSelfId = options.preserveSelfId !== false;
  const existingSelfId = multiplayer.selfId;

  clearMultiplayerBindings();

  multiplayer.roomId = "";
  multiplayer.roomRef = null;
  multiplayer.playerRef = null;
  multiplayer.playersRef = null;
  multiplayer.damageRef = null;
  multiplayer.projectileRef = null;
  multiplayer.selfId = preserveSelfId ? existingSelfId : "";
  multiplayer.waiting = false;
  multiplayer.joining = false;
  multiplayer.matchActive = false;
  multiplayer.resultApplied = false;
  multiplayer.pendingResult = null;
  multiplayer.syncAccumulatorMs = 0;
  multiplayer.processedDamageEventIds = new Set();
  multiplayer.processedProjectileEventIds = new Set();
  multiplayer.roomData = null;
  multiplayer.roomStatus = "idle";
  multiplayer.countdownEndsAt = 0;
  multiplayer.playerOrder = [];
  multiplayer.playerCount = 0;
  multiplayer.players = {};
  multiplayer.queueActionBusy = false;
  ui.pendingMultiplayerLaunch = null;
  ui.nextGameMode = "solo";
}

function openMultiplayerLobby() {
  if (!multiplayerBackdrop) {
    return;
  }

  multiplayer.panelOpenedAt = Date.now();
  setMultiplayerPanelMode("chooser");
  multiplayerBackdrop.hidden = false;
  renderMultiplayerLobbyState();
}

function canUseMultiplayerChooserButton() {
  return Date.now() - Number(multiplayer.panelOpenedAt || 0) >= 250;
}

async function removeSelfFromMultiplayerRoom() {
  if (!multiplayer.playerRef) {
    return;
  }

  await multiplayer.playerRef.remove().catch(() => {});

  if (multiplayer.roomRef) {
    const snapshot = await multiplayer.roomRef.once("value").catch(() => null);
    const roomData = snapshot && typeof snapshot.val === "function" ? snapshot.val() : null;

    if (!roomData || getSortedRoomPlayersFromData(roomData).length === 0) {
      await multiplayer.roomRef.remove().catch(() => {});
    }
  }
}

async function cancelMultiplayerWaitingRoom() {
  if (!multiplayer.waiting && !multiplayer.matchActive) {
    resetMultiplayerState();
    multiplayerBackdrop.hidden = true;
    setMultiplayerPanelMode("chooser");
    return;
  }

  if (multiplayer.waiting && !multiplayer.matchActive) {
    await removeSelfFromMultiplayerRoom();
  }

  resetMultiplayerState();

  if (!multiplayerBackdrop?.hidden) {
    setMultiplayerPanelMode("chooser");
    renderMultiplayerLobbyState();
  }
}

function closeMultiplayerLobby(options = {}) {
  if (!multiplayerBackdrop) {
    return;
  }

  const cancelWaiting = options.cancelWaiting !== false;

  if (multiplayer.waiting && !multiplayer.matchActive && cancelWaiting) {
    void cancelMultiplayerWaitingRoom();
  }

  multiplayerBackdrop.hidden = true;
  setMultiplayerPanelMode("chooser");
}

function buildActiveRoomPlayersFromRaw(room, now = Date.now()) {
  return Object.entries(room?.players || {})
    .map(([id, player]) => ({
      id,
      ...(player || {}),
    }))
    .filter((player) => player.connected !== false && Number(player.lastSeenAt || player.joinedAt || 0) >= now - MULTIPLAYER_PLAYER_STALE_MS)
    .sort(
      (first, second) =>
        Number(first.joinedAt || 0) - Number(second.joinedAt || 0) ||
        first.id.localeCompare(second.id)
    );
}

function bindMultiplayerRoom(roomId) {
  const db = getFirebaseMultiplayerDatabase();

  if (!db) {
    return;
  }

  multiplayer.roomId = roomId;
  multiplayer.roomRef = db.ref(`multiplayerRooms/${roomId}`);
  multiplayer.playerRef = db.ref(`multiplayerRooms/${roomId}/players/${multiplayer.selfId}`);
  multiplayer.playersRef = db.ref(`multiplayerRooms/${roomId}/players`);
  multiplayer.damageRef = db.ref(`multiplayerRooms/${roomId}/damageEvents`);
  multiplayer.projectileRef = db.ref(`multiplayerRooms/${roomId}/projectileEvents`);

  multiplayer.roomRef.on("value", (snapshot) => {
    handleMultiplayerRoomSnapshot(snapshot.val());
  });

  multiplayer.playersRef.on("value", (snapshot) => {
    handleMultiplayerPlayersSnapshot(snapshot.val());
  });

  multiplayer.damageRef.limitToLast(120).on("child_added", (snapshot) => {
    handleMultiplayerDamageEvent(snapshot.key, snapshot.val());
  });

  multiplayer.projectileRef.limitToLast(180).on("child_added", (snapshot) => {
    handleMultiplayerProjectileEvent(snapshot.key, snapshot.val());
  });

  multiplayer.playerRef.onDisconnect().update({
    connected: false,
    alive: false,
    hp: 0,
    lastSeenAt: window.firebase.database.ServerValue.TIMESTAMP,
  }).catch(() => {});

  startMultiplayerIntervals();
}

function handleMultiplayerRoomSnapshot(roomData) {
  if (!roomData) {
    if (!multiplayer.matchActive) {
      resetMultiplayerState();
      if (!multiplayerBackdrop?.hidden) {
        setMultiplayerPanelMode("chooser");
        renderMultiplayerLobbyState();
      }
    }

    return;
  }

  updateMultiplayerLocalCache(roomData);
  const ownPlayer = multiplayer.players[multiplayer.selfId] || null;

  if (!ownPlayer && roomData.status !== "finished") {
    if (!multiplayer.matchActive) {
      resetMultiplayerState();
      if (!multiplayerBackdrop?.hidden) {
        setMultiplayerStatus("Status: Kolejka zamknięta", "error");
        setMultiplayerNote("Twoje miejsce w kolejce już nie jest aktywne.", "error");
        setMultiplayerPanelMode("chooser");
      }
    }
    return;
  }

  if (roomData.status === "queueing") {
    multiplayer.waiting = true;
    renderMultiplayerLobbyState();
    void maybeEvaluateMultiplayerQueueRoom();
    return;
  }

  if (roomData.status === "playing") {
    multiplayer.waiting = false;
    void maybeAbortMultiplayerForDisconnect(roomData);

    if (!multiplayerBackdrop?.hidden) {
      renderMultiplayerLobbyState();
    }

    if (ui.currentView !== "game" && !ui.pendingMultiplayerLaunch) {
      ui.nextGameMode = "multiplayer";
      ui.pendingMultiplayerLaunch = {
        roomId: multiplayer.roomId,
        playerId: multiplayer.selfId,
      };
      closeMultiplayerLobby({ cancelWaiting: false });
      showView("game");
    }

    if (roomData.result) {
      multiplayer.pendingResult = roomData.result;
    }

    return;
  }

  if (roomData.status === "finished" && roomData.result) {
    multiplayer.pendingResult = roomData.result;
    multiplayer.waiting = false;
    return;
  }

  if (roomData.status === "cancelled") {
    multiplayer.waiting = false;
    renderMultiplayerLobbyState();
  }
}

async function maybeAbortMultiplayerForDisconnect(roomData) {
  if (!multiplayer.roomRef || !roomData || roomData.status !== "playing" || roomData.result) {
    return;
  }

  const now = Date.now();
  const hasDisconnectedPlayer = getSortedRoomPlayersFromData(roomData).some(
    (player) => player.connected === false || !isFreshMultiplayerPlayer(player, now)
  );

  if (!hasDisconnectedPlayer) {
    return;
  }

  await multiplayer.roomRef.transaction((room) => {
    if (!room || room.status !== "playing" || room.result) {
      return room;
    }

    room.status = "finished";
    room.updatedAt = Date.now();
    room.result = {
      reason: "disconnect",
      finishedAt: Date.now(),
      playerCount: Number(room.playerCount || Object.keys(room.players || {}).length || 0),
    };
    return room;
  }).catch(() => {});
}

function handleMultiplayerDamageEvent(eventId, payload) {
  if (
    !eventId ||
    !payload ||
    multiplayer.processedDamageEventIds.has(eventId) ||
    payload.targetPlayerId !== multiplayer.selfId ||
    !multiplayer.matchActive ||
    game.mode !== "multiplayer"
  ) {
    return;
  }

  multiplayer.processedDamageEventIds.add(eventId);
  damagePlayer(Number(payload.damage || 0));

  if (game.player.hp <= 0 && !multiplayer.pendingResult) {
    void eliminateLocalMultiplayerPlayer(payload.ownerId || "", "defeat");
  }
}

function handleMultiplayerProjectileEvent(eventId, payload) {
  if (
    !eventId ||
    !payload ||
    multiplayer.processedProjectileEventIds.has(eventId) ||
    payload.ownerId === multiplayer.selfId ||
    !multiplayer.matchActive ||
    game.mode !== "multiplayer"
  ) {
    return;
  }

  multiplayer.processedProjectileEventIds.add(eventId);
  spawnProjectile({
    x: Number(payload.x || 0),
    y: Number(payload.y || 0),
    targetType: "player",
    targetPlayerId: payload.targetPlayerId || "",
    targetX: Number(payload.targetX || 0),
    targetY: Number(payload.targetY || 0),
    kind: payload.kind || "player",
    characterId: payload.characterId || "magik-millo",
    ownerId: payload.ownerId || "",
    remote: true,
  });
}

async function createFirebaseMultiplayerRoom() {
  const db = getFirebaseMultiplayerDatabase();

  if (!db || !multiplayerNote) {
    return;
  }

  const playerId = ensureMultiplayerSelfId();
  const roomRef = db.ref("multiplayerRooms").push();
  const roomId = roomRef.key || "";
  const playerProfile = buildMultiplayerProfile();

  await roomRef.set({
    status: "queueing",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    countdownEndsAt: Date.now() + MULTIPLAYER_QUEUE_DURATION_MS,
    playerCount: 1,
    playerOrder: [],
    players: {
      [playerId]: playerProfile,
    },
  });

  bindMultiplayerRoom(roomId);
  multiplayer.waiting = true;
  renderMultiplayerLobbyState();
}

async function joinFirebaseMultiplayerRoom(roomId) {
  const db = getFirebaseMultiplayerDatabase();

  if (!db || !multiplayerNote) {
    return;
  }

  const playerId = ensureMultiplayerSelfId();
  const playerProfile = buildMultiplayerProfile();
  const roomRef = db.ref(`multiplayerRooms/${roomId}`);
  const transaction = await roomRef.transaction((room) => {
    const now = Date.now();

    if (!room || room.status !== "queueing" || Number(room.countdownEndsAt || 0) <= now) {
      return room;
    }

    const activePlayers = buildActiveRoomPlayersFromRaw(room, now);
    const nextPlayers = activePlayers.reduce((accumulator, player) => {
      accumulator[player.id] = {
        ...(room.players?.[player.id] || {}),
      };
      return accumulator;
    }, {});

    if (!nextPlayers[playerId] && Object.keys(nextPlayers).length >= MULTIPLAYER_MAX_PLAYERS) {
      return room;
    }

    nextPlayers[playerId] = {
      ...(nextPlayers[playerId] || {}),
      ...playerProfile,
    };
    room.players = nextPlayers;
    room.updatedAt = now;
    room.playerCount = Object.keys(nextPlayers).length;
    return room;
  });

  const joined = transaction.committed && transaction.snapshot.child(`players/${playerId}`).exists();

  if (!joined) {
    throw new Error("queue-full");
  }

  bindMultiplayerRoom(roomId);
  multiplayer.waiting = true;
}

async function startMultiplayerAction(mode) {
  if (!multiplayerNote) {
    return;
  }

  if (mode !== "queue") {
    return;
  }

  setMultiplayerPanelMode("queue");
  multiplayerBackdrop.hidden = false;

  if (!hasFirebaseMultiplayerConfig()) {
    setMultiplayerStatus("Status: Firebase off", "error");
    setMultiplayerNote("Uzupełnij plik firebase-config.js danymi projektu Firebase, aby włączyć kolejkę graczy.", "error");
    return;
  }

  if (multiplayer.waiting && multiplayer.roomRef) {
    void syncMultiplayerQueuePresence();
    renderMultiplayerLobbyState();
    return;
  }

  resetMultiplayerState();
  ensureMultiplayerSelfId();
  multiplayer.joining = true;
  setMultiplayerStatus("Status: Szukam graczy", "waiting");
  setMultiplayerNote("Szukam aktywnej kolejki. Jeśli żadnej nie ma, otwieram nową na 10 sekund.", "warning");
  renderMultiplayerLobbyState();

  try {
    const db = getFirebaseMultiplayerDatabase();
    const queueSnapshot = await db.ref("multiplayerRooms")
      .orderByChild("status")
      .equalTo("queueing")
      .limitToLast(20)
      .once("value");
    const now = Date.now();
    const rooms = Object.entries(queueSnapshot.val() || {})
      .map(([roomId, room]) => ({ roomId, room }))
      .filter(({ room }) => {
        if (!room) {
          return false;
        }

        const activePlayers = buildActiveRoomPlayersFromRaw(room, now);
        return (
          Number(room.updatedAt || room.createdAt || 0) >= now - MULTIPLAYER_ROOM_STALE_MS &&
          Number(room.countdownEndsAt || 0) > now &&
          activePlayers.length < MULTIPLAYER_MAX_PLAYERS
        );
      })
      .sort((first, second) => Number(first.room.createdAt || 0) - Number(second.room.createdAt || 0));

    if (rooms[0]) {
      await joinFirebaseMultiplayerRoom(rooms[0].roomId);
    } else {
      await createFirebaseMultiplayerRoom();
    }
  } catch (error) {
    setMultiplayerStatus("Status: Błąd", "error");
    setMultiplayerNote("Nie udało się dołączyć do kolejki graczy. Sprawdź połączenie z Firebase.", "error");
    renderMultiplayerLobbyState();
  } finally {
    multiplayer.joining = false;
  }
}

async function syncMultiplayerQueuePresence() {
  if (!multiplayer.playerRef || multiplayer.roomStatus !== "queueing") {
    return;
  }

  await multiplayer.playerRef.update({
    nickname: getPlayerNickname(),
    nicknameNormalized: normalizeMultiplayerNickname(getPlayerNickname()),
    characterId: state.equippedCharacter || "magik-millo",
    petId: state.equippedPet || "",
    connected: true,
    alive: true,
    lastSeenAt: Date.now(),
    placement: 0,
  }).catch(() => {});
}

async function maybeEvaluateMultiplayerQueueRoom() {
  if (multiplayer.queueActionBusy || !multiplayer.roomRef || multiplayer.roomStatus !== "queueing") {
    return;
  }

  const roomData = multiplayer.roomData;

  if (!roomData) {
    return;
  }

  const now = Date.now();
  const activePlayers = getActiveMultiplayerPlayers(roomData, now);
  const countdownExpired = now >= Number(roomData.countdownEndsAt || 0);

  if (!countdownExpired && activePlayers.length < MULTIPLAYER_MAX_PLAYERS) {
    return;
  }

  multiplayer.queueActionBusy = true;

  try {
    if (countdownExpired && activePlayers.length < 2) {
      await multiplayer.roomRef.transaction((room) => {
        const currentNow = Date.now();

        if (!room || room.status !== "queueing") {
          return room;
        }

        const currentActivePlayers = buildActiveRoomPlayersFromRaw(room, currentNow);
        if (currentActivePlayers.length >= 2 || currentNow < Number(room.countdownEndsAt || 0)) {
          return room;
        }

        room.status = "cancelled";
        room.updatedAt = currentNow;
        room.result = {
          reason: "not-enough-players",
          finishedAt: currentNow,
        };
        return room;
      });
      return;
    }

    if (activePlayers.length >= 2) {
      await multiplayer.roomRef.transaction((room) => {
        const currentNow = Date.now();

        if (!room || room.status !== "queueing") {
          return room;
        }

        const currentActivePlayers = buildActiveRoomPlayersFromRaw(room, currentNow);
        const shouldStart =
          currentActivePlayers.length >= MULTIPLAYER_MAX_PLAYERS ||
          currentNow >= Number(room.countdownEndsAt || 0);

        if (!shouldStart || currentActivePlayers.length < 2) {
          return room;
        }

        room.status = "playing";
        room.updatedAt = currentNow;
        room.startedAt = currentNow;
        room.playerOrder = currentActivePlayers.map((player) => player.id);
        room.playerCount = currentActivePlayers.length;
        room.players = currentActivePlayers.reduce((accumulator, player) => {
          accumulator[player.id] = {
            ...(room.players?.[player.id] || {}),
            nickname: player.nickname || "Gracz",
            nicknameNormalized: player.nicknameNormalized || normalizeMultiplayerNickname(player.nickname || "Gracz"),
            characterId: player.characterId || "magik-millo",
            petId: player.petId || "",
            connected: true,
            alive: true,
            hp: getPlayerMaxHp(),
            placement: 0,
            lastSeenAt: currentNow,
          };
          return accumulator;
        }, {});
        room.result = null;
        return room;
      });
    }
  } finally {
    multiplayer.queueActionBusy = false;
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
  superTheme = "",
  keyTheme = "",
  countLabel = "",
  hideName = false,
  mode = "default",
  autoCloseMs = 2800,
  interactionMode = "auto",
  onInteract = null,
  soundEffectName = null,
}) {
  if (!image || !alleyRewardBackdrop || !alleyRewardCard) {
    return Promise.resolve();
  }

  const safeName = name || "Nagroda";

  if (soundEffectName) {
    playOneShotSound(soundEffectName, mode === "coin" || mode === "diamond" || mode === "key" ? 0.82 : 0.8);
  }

  closeAlleyRewardScene();
  alleyRewardBackdrop.classList.toggle("coin-mode", mode === "coin");
  alleyRewardBackdrop.classList.toggle("diamond-mode", mode === "diamond");
  alleyRewardBackdrop.classList.toggle("magic-mode", mode === "magic");
  alleyRewardBackdrop.classList.toggle("key-mode", mode === "key");
  alleyRewardBackdrop.classList.toggle("trophy-mode", mode === "trophy");
  alleyRewardBackdrop.classList.toggle("payment-mode", mode === "payment");
  alleyRewardBackdrop.classList.toggle("crate-mode", mode === "crate");
  if (superTheme) {
    alleyRewardBackdrop.dataset.superTheme = superTheme;
  } else {
    delete alleyRewardBackdrop.dataset.superTheme;
  }
  if (keyTheme && mode === "key") {
    alleyRewardBackdrop.dataset.keyTheme = keyTheme;
  } else {
    delete alleyRewardBackdrop.dataset.keyTheme;
  }
  renderPreviewAssetIntoFrame(
    alleyRewardArtFrame,
    {
      image,
      name: safeName,
      previewVideo,
    },
    {
      elementId: "alley-reward-image",
      imageClass: "modal-image asset-image",
      videoClass: "modal-image asset-video",
      fallbackText: safeName,
      alt: safeName,
    },
  );
  alleyRewardName.textContent = safeName;
  alleyRewardName.hidden = hideName;
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
  if (reward.type === "profile-photo") {
    return CATALOG.profilePhotos.find((item) => item.id === reward.itemId) || null;
  }

  if (reward.type === "pet") {
    return CATALOG.pets.find((item) => item.id === reward.itemId) || null;
  }

  if (reward.type === "character") {
    return CATALOG.characters.find((item) => item.id === reward.itemId) || null;
  }

  return null;
}

function showAlleyRewardScene(reward, options = {}) {
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
    superTheme: options.superTheme || getRewardSceneWorldTheme(reward.type === "pet" ? "pets" : "characters", item),
    soundEffectName:
      reward.type === "pet"
        ? getPetVoiceEffect(item.id)
        : reward.type === "character" || reward.type === "profile-photo"
          ? "characterUnlock"
          : null,
  });
}

function showCoinRewardScene(amount, options = {}) {
  const title = options.title || "Monety z Alei";
  const autoCloseMs = options.autoCloseMs || 2500;

  return showRewardShowcase({
    image: COIN_REWARD_IMAGE,
    name: title,
    countLabel: `+${amount} monet`,
    superTheme: options.superTheme || "",
    mode: "coin",
    autoCloseMs,
    soundEffectName: "coins",
  });
}

function showDiamondRewardScene(amount, options = {}) {
  const title = options.title || "Diamenty z Alei";
  const autoCloseMs = options.autoCloseMs || 2500;

  return showRewardShowcase({
    image: DIAMOND_REWARD_IMAGE,
    name: title,
    countLabel: `+${amount} diamenty`,
    superTheme: options.superTheme || "",
    mode: "diamond",
    autoCloseMs,
    soundEffectName: "diamondShine",
  });
}

function showPlatoKeyRewardScene(amount, options = {}) {
  const title = options.title || "Klucze PlatoYI";
  const autoCloseMs = options.autoCloseMs || 2500;
  const keyTheme = options.keyTheme || "magicians";

  return showRewardShowcase({
    image: getPlatoKeyImageForTheme(keyTheme),
    name: title,
    countLabel: `+${formatPlatoKeyCountLabel(amount)}`,
    keyTheme,
    mode: "key",
    autoCloseMs,
    soundEffectName: "coins",
  });
}

function showTrophyRewardScene(amount, options = {}) {
  const title = options.title || "Puchary z rundy";
  const autoCloseMs = options.autoCloseMs || 2400;

  return showRewardShowcase({
    image: TROPHY_ICON_IMAGE,
    name: title,
    countLabel: `+${amount} pucharow`,
    mode: "trophy",
    autoCloseMs,
    soundEffectName: "coins",
  });
}

function showCrateRewardScene(crate, rewards = [], options = {}) {
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
  alleyRewardBackdrop.classList.remove("magic-mode");
  alleyRewardBackdrop.classList.remove("key-mode");
  alleyRewardBackdrop.classList.remove("trophy-mode");
  alleyRewardBackdrop.classList.remove("payment-mode");
  alleyRewardBackdrop.classList.remove("crate-mode");
  delete alleyRewardBackdrop.dataset.superTheme;
  delete alleyRewardBackdrop.dataset.keyTheme;
  alleyRewardBackdrop.hidden = true;
  alleyRewardCard.classList.remove("show");
  alleyRewardCard.classList.remove("manual-show");
  alleyRewardCard.classList.remove("opening");
  alleyRewardCard.classList.remove("interactive");
  alleyRewardName.hidden = false;
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
  const currencyImages = rewards
    .filter((reward) => reward.type === "coins" || reward.type === "diamonds")
    .map((reward) => reward.image)
    .filter(Boolean);
  const burstImages = currencyImages.length ? currencyImages : [COIN_REWARD_IMAGE];

  for (let index = 0; index < 10; index += 1) {
    const token = document.createElement("div");
    token.className = "alley-reward-burst-token coin";
    token.style.setProperty("--burst-token-image", `url("${burstImages[index % burstImages.length]}")`);
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
      superTheme: getRewardSceneWorldTheme(reward.kind, reward.item),
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

function getCrateRewardTheme(crate) {
  return "";
}

function openChestOddsModal(crateId = "drewniana-skrzynia") {
  if (crateId === "dzunglowa-skrzynia") {
    openModal({
      title: "Szanse Skrzyni Dżungli",
      message: "Skrzynia Dżungli zawsze daje od 1 do 20 diamentów i nigdy nie daje monet. Dodatkowo ma 33% szansy na dżunglowego PlatoYasa.",
      image: "./assets/shop/skrzyniadzungla.jpeg",
      imageAlt: "Szanse Skrzyni Dżungli",
      buttonText: "OK",
      dismissible: true,
      onConfirm: closeModal,
    });
    return;
  }

  openModal({
    title: "Szanse skrzyni",
    message: "Drewniana skrzynia daje jedna nagrode. Monety dalej maja 60%, ale w ich puli sa zakresy: 50-1500, 1500-6000, 6000-9000, 9000-10000 i 10000-15000. Poza tym 37% to diamenty, 2,5% to sklepowa postac z aktualnego swiata, a 0,5% to PlatoYa z Alei aktualnego swiata.",
    image: "./assets/shop/skrzynia_1.png",
    imageAlt: "Szanse skrzyni",
    buttonText: "OK",
    dismissible: true,
    onConfirm: closeModal,
  });
}

async function animateCoinsToBalance(fastMode = false) {
  const targetElement = getCoinFlyTargetElement();

  if (!targetElement) {
    await wait(700);
    return;
  }

  const target = targetElement.getBoundingClientRect();
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
    mode: "solo",
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
    jaguarNextTriggerHp: 2500,
    pascalTriggered: false,
    pascalInvisibleMs: 0,
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
    paused: false,
    pauseResumeCountdownMs: 0,
    pauseResumeRobotsLeft: 0,
    multiplayerStartCountdownMs: 0,
    waveSpawnTimerMs: 0,
    waveRobotsRemaining: 0,
    waveStages: [],
    currentWaveStageIndex: -1,
    currentWaveConfig: null,
    robotsKilledTotal: 0,
    damageDealtRun: 0,
    runPetId: "",
    trophiesEarnedRun: 0,
    statsCounted: false,
    firstRobotPreludeActive: false,
    firstRobotTutorialActive: false,
    firstRobotTutorialPromptUsed: false,
    firstRobotTutorialDelayMs: 0,
    firstRobotTutorialRobotId: null,
    firstRobotTutorialInitialDistance: 0,
    resultStatus: "Koniec rundy",
    resultNote: "Twoje statystyki z tej rundy.",
    resultTimeouts: [],
    coopPartyId: "",
    coopSessionId: "",
    coopHostProfileId: "",
    coopIsHost: false,
    coopPlayers: {},
    coopRemoteAppliedAt: 0,
    coopHostSyncAccumulatorMs: 0,
    coopInputSyncAccumulatorMs: 0,
    coopResultApplied: false,
    robots: [],
    projectiles: [],
    pickups: [],
    barriers: [],
    waterFields: [],
    jungleFields: [],
  };
}

function isMultiplayerMatchActive() {
  return game.mode === "multiplayer" && multiplayer.matchActive;
}

function getMultiplayerSpawnPoint(index, totalPlayers) {
  const fallbackPositions = [
    { xRatio: 0.18, yRatio: 0.24 },
    { xRatio: 0.82, yRatio: 0.24 },
    { xRatio: 0.18, yRatio: 0.76 },
    { xRatio: 0.82, yRatio: 0.76 },
    { xRatio: 0.5, yRatio: 0.5 },
  ];
  const safeIndex = clamp(index, 0, fallbackPositions.length - 1);
  const point = fallbackPositions[safeIndex] || fallbackPositions[0];

  return {
    x: clamp(game.width * point.xRatio, 72, Math.max(72, game.width - 72)),
    y: clamp(game.height * point.yRatio, 110, Math.max(110, game.height - 72)),
  };
}

function getMultiplayerMatchPlayers() {
  const ids = multiplayer.playerOrder.length
    ? multiplayer.playerOrder
    : getSortedRoomPlayersFromData(multiplayer.roomData).map((player) => player.id);
  const totalPlayers = ids.length || 2;

  return ids
    .map((playerId, index) => {
      const player = multiplayer.players[playerId];

      if (!player) {
        return null;
      }

      const spawn = getMultiplayerSpawnPoint(index, totalPlayers);
      return {
        ...player,
        x: typeof player.x === "number" && player.x > 0 ? player.x : spawn.x,
        y: typeof player.y === "number" && player.y > 0 ? player.y : spawn.y,
      };
    })
    .filter(Boolean);
}

function getNearestMultiplayerTarget() {
  return getMultiplayerMatchPlayers()
    .filter((player) => player.id !== multiplayer.selfId && player.alive !== false && player.connected !== false)
    .sort(
      (first, second) =>
        Math.hypot(first.x - game.player.x, first.y - game.player.y) -
        Math.hypot(second.x - game.player.x, second.y - game.player.y)
    )[0] || null;
}

function getMultiplayerPlacementTrophyDelta(place, totalPlayers) {
  if (place === 1) {
    return 30;
  }

  if (place === 2) {
    return 15;
  }

  if (totalPlayers >= 3 && place === totalPlayers) {
    return -20;
  }

  return 0;
}

function getMultiplayerResultDetails(result) {
  if (result?.reason === "disconnect") {
    return {
      placement: 0,
      playerCount: Number(result?.playerCount || multiplayer.playerCount || getMultiplayerMatchPlayers().length || 1),
      delta: 0,
    };
  }

  const placements = result?.placements || {};
  const placement = Number(placements[multiplayer.selfId] || 0) || Math.max(1, result?.playerCount || 1);
  const playerCount = Number(result?.playerCount || multiplayer.playerCount || getMultiplayerMatchPlayers().length || 1);
  const delta = getMultiplayerPlacementTrophyDelta(placement, playerCount);
  return { placement, playerCount, delta };
}

function startMultiplayerMatchSession(session) {
  const playerId = session?.playerId || multiplayer.selfId;
  const playerOrder = multiplayer.playerOrder.length
    ? multiplayer.playerOrder
    : getSortedRoomPlayersFromData(multiplayer.roomData).map((player) => player.id);
  gameMap.classList.add("multiplayer-ffa");
  updateGameBounds();
  const ownIndex = Math.max(0, playerOrder.indexOf(playerId));
  const ownSpawn = getMultiplayerSpawnPoint(ownIndex, playerOrder.length || 2);

  game.mode = "multiplayer";
  multiplayer.selfId = playerId;
  multiplayer.roomId = session?.roomId || multiplayer.roomId;
  multiplayer.matchActive = true;
  multiplayer.waiting = false;
  multiplayer.resultApplied = false;
  multiplayer.pendingResult = null;
  multiplayer.syncAccumulatorMs = 0;
  game.waveIntroMs = 0;
  game.multiplayerStartCountdownMs = MULTIPLAYER_START_COUNTDOWN_MS;
  game.pendingWave = 0;
  game.currentWave = 0;
  game.currentWaveConfig = null;
  game.waveRobotsRemaining = 0;
  game.player.hp = getPlayerMaxHp();
  game.player.x = ownSpawn.x;
  game.player.y = ownSpawn.y;
  game.pet.x = game.player.x + 50;
  game.pet.y = game.player.y + 28;
  game.pet.shieldActive = false;
  game.pet.shieldTimerMs = 0;
  game.pet.shieldCooldownMs = 0;

  syncMultiplayerPlayerState(true);
}

function syncMultiplayerPlayerState(force = false) {
  if (!isMultiplayerMatchActive() || !multiplayer.playerRef || !multiplayer.selfId) {
    return;
  }

  const payload = {
    hp: Math.max(0, Math.ceil(game.player.hp)),
    x: Math.round(game.player.x),
    y: Math.round(game.player.y),
    characterId: state.equippedCharacter || "magik-millo",
    petId: state.equippedPet || "",
    nickname: getPlayerNickname(),
    nicknameNormalized: normalizeMultiplayerNickname(getPlayerNickname()),
    connected: true,
    alive: game.player.hp > 0,
    lastSeenAt: Date.now(),
  };

  const update = {
    ...payload,
  };

  if (force) {
    update.placement = 0;
  }

  multiplayer.playerRef.update(update).catch(() => {});
  multiplayer.roomRef?.child("updatedAt").set(Date.now()).catch(() => {});
}

function sendMultiplayerDamage(amount, projectileKind = "player", targetPlayerId = "") {
  if (!isMultiplayerMatchActive() || !multiplayer.damageRef || !multiplayer.selfId || !targetPlayerId) {
    return;
  }

  const damageRef = multiplayer.damageRef.push();

  damageRef.set({
    ownerId: multiplayer.selfId,
    targetPlayerId,
    projectileKind,
    damage: Math.max(1, Math.round(amount)),
    createdAt: Date.now(),
  }).catch(() => {});
}

function sendMultiplayerProjectile(projectile) {
  if (!isMultiplayerMatchActive() || !multiplayer.projectileRef || !multiplayer.selfId) {
    return;
  }

  multiplayer.projectileRef.push().set({
    ownerId: multiplayer.selfId,
    x: Math.round(projectile.x),
    y: Math.round(projectile.y),
    targetPlayerId: projectile.targetPlayerId || "",
    targetX: Math.round(projectile.targetX || 0),
    targetY: Math.round(projectile.targetY || 0),
    kind: projectile.kind || "player",
    characterId: projectile.characterId || state.equippedCharacter || "magik-millo",
    createdAt: Date.now(),
  }).catch(() => {});
}

async function eliminateLocalMultiplayerPlayer(eliminatedById = "", reason = "defeat") {
  if (
    !isMultiplayerMatchActive() ||
    !multiplayer.roomRef ||
    !multiplayer.selfId ||
    game.player.hp > 0 ||
    multiplayer.pendingResult
  ) {
    return;
  }

  await multiplayer.roomRef.transaction((room) => {
    const now = Date.now();

    if (!room || room.status !== "playing") {
      return room;
    }

    const players = room.players || {};
    const ownPlayer = players[multiplayer.selfId];

    if (!ownPlayer || ownPlayer.alive === false) {
      return room;
    }

    const alivePlayers = Object.entries(players).filter(([, player]) => player?.alive !== false);
    ownPlayer.alive = false;
    ownPlayer.connected = reason === "forfeit" ? false : ownPlayer.connected;
    ownPlayer.hp = 0;
    ownPlayer.placement = alivePlayers.length;
    ownPlayer.eliminatedAt = now;
    ownPlayer.eliminatedBy = eliminatedById || "";
    room.updatedAt = now;

    const survivors = Object.entries(players).filter(([playerId, player]) => playerId !== multiplayer.selfId && player?.alive !== false);

    if (survivors.length <= 1) {
      if (survivors[0]) {
        const [winnerId, winner] = survivors[0];
        winner.placement = 1;
        winner.connected = winner.connected !== false;
        players[winnerId] = winner;
      }

      room.status = "finished";
      room.result = {
        reason,
        finishedAt: now,
        playerCount: Number(room.playerCount || Object.keys(players).length),
        placements: Object.fromEntries(
          Object.entries(players).map(([playerId, player]) => [playerId, Number(player?.placement || 0)])
        ),
      };
    }

    room.players = players;
    return room;
  }).catch(() => {});
}

async function maybeFinalizeMultiplayerWinner() {
  if (!multiplayer.roomRef || !isMultiplayerMatchActive()) {
    return;
  }

  await multiplayer.roomRef.transaction((room) => {
    const now = Date.now();

    if (!room || room.status !== "playing") {
      return room;
    }

    const players = room.players || {};
    const aliveEntries = Object.entries(players).filter(([, player]) => player?.alive !== false);

    if (aliveEntries.length !== 1) {
      return room;
    }

    const [winnerId, winner] = aliveEntries[0];
    winner.placement = 1;
    players[winnerId] = winner;
    room.players = players;
    room.status = "finished";
    room.updatedAt = now;
    room.result = {
      reason: "survival",
      finishedAt: now,
      playerCount: Number(room.playerCount || Object.keys(players).length),
      placements: Object.fromEntries(
        Object.entries(players).map(([playerId, player]) => [playerId, Number(player?.placement || 0)])
      ),
    };
    return room;
  }).catch(() => {});
}

function applyMultiplayerPendingResult() {
  if (!multiplayer.pendingResult || multiplayer.resultApplied) {
    return;
  }

  const { placement, playerCount, delta } = getMultiplayerResultDetails(multiplayer.pendingResult);
  const deltaText = delta > 0 ? `+${delta}` : `${delta}`;
  let title = `Miejsce ${placement}`;
  let note = `Bitwa ${playerCount} graczy zakończona. Zmiana pucharów: ${deltaText}.`;

  if (multiplayer.pendingResult.reason === "disconnect") {
    title = "Mecz przerwany";
    note = "Jeden z graczy wyszedł z meczu, więc bitwa została przerwana.";
  }

  if (placement === 1) {
    title = "Zwyciestwo";
    note = `Wygrałeś bitwę ${playerCount} graczy. Zdobywasz ${deltaText} pucharów.`;
  } else if (placement === 2) {
    title = "Drugie miejsce";
    note = `Kończysz walkę na 2. miejscu. Zdobywasz ${deltaText} pucharów.`;
  } else if (delta < 0) {
    title = "Ostatnie miejsce";
    note = `Kończysz walkę na ostatnim miejscu. Tracisz ${Math.abs(delta)} pucharów.`;
  }

  state.trophies = Math.max(0, state.trophies + delta);
  updateBalanceDisplays();
  game.trophiesEarnedRun = delta;
  saveState();
  multiplayer.resultApplied = true;
  multiplayer.matchActive = false;
  concludeGameSession(title, note);
}

function isCoopMatchActive() {
  return game.mode === "coop" && Boolean(game.coopPartyId && game.coopSessionId);
}

function getPlayerMaxHpForLoadout(characterId, petId) {
  let baseHp = characterId === "talia" ? 4000 : GAME_RULES.playerMaxHp;

  if (petId === "norka") {
    baseHp = Math.max(baseHp, 3200);
  }

  return baseHp;
}

function getProjectileKindForCharacterId(characterId) {
  if (!characterId) {
    return "player";
  }

  if (
    characterId === "elfie" ||
    characterId === "elfie-wojowniczka" ||
    characterId === "elfie-w-swojej-naturze"
  ) {
    return "elfie-shot";
  }

  if (characterId === "millo-jako-elfie") {
    return "millo-elfie-shot";
  }

  if (characterId === "nora") {
    return "nora-shot";
  }

  if (characterId === "cloud") {
    return "cloud-shot";
  }

  if (characterId === "ann") {
    return "ann-shot";
  }

  if (characterId === "ivy") {
    return "ivy-shot";
  }

  if (characterId === "ozdobiona-ivy" || characterId === "ivy-obronczyni-dzungli") {
    return "ivy-shot";
  }

  if (characterId === "coco-nkosi") {
    return "coco-shot";
  }

  if (characterId === "roco-nkosi") {
    return "coco-shot";
  }

  if (characterId === "aslan") {
    return "aslan-shot";
  }

  if (characterId === "aslan-za-mlodu" || characterId === "naomi") {
    return "aslan-shot";
  }

  if (characterId === "wojownik-aslan") {
    return "aslan-shot";
  }

  if (characterId === "kora" || characterId === "krolowa-kora") {
    return "kora-shot";
  }

  if (characterId === "kira") {
    return "kira-shot";
  }

  if (characterId === "wodzu") {
    return "wodzu-shot";
  }

  if (characterId === "zlotowlosa") {
    return "zlotowlosa-shot";
  }

  if (characterId === "gertruda" || characterId === "gertruda-zla-macocha") {
    return "gertruda-shot";
  }

  if (characterId === "zlotowlosa-malarka") {
    return "malarka-shot";
  }

  if (
    characterId === "cassandra-ptasia-odslona" ||
    characterId === "cassandra-przygotowana-do-walki"
  ) {
    return "ptasia-shot";
  }

  if (
    characterId === "linda" ||
    characterId === "roslinna-krolowa-linda" ||
    characterId === "elfie-jako-linda" ||
    characterId === "linda-wojownicza-ksiezniczka"
  ) {
    return "linda-shot";
  }

  if (
    characterId === "lily" ||
    characterId === "leo" ||
    characterId === "leo-skoczek-narciarski" ||
    characterId === "lyzwiarka-lily" ||
    characterId === "lyzwiarz-leo" ||
    characterId === "mistrzyni-lyzwiarstwa-lily"
  ) {
    return "lily-shot";
  }

  if (characterId === "tricky" || characterId === "tricky-renifer") {
    return "tricky-shot";
  }

  return "player";
}

function getProjectileDamageForPetId(petId) {
  return petId === "chomik-strazak"
    ? Math.round(GAME_RULES.projectileDamage * GAME_RULES.hamsterDamageMultiplier)
    : GAME_RULES.projectileDamage;
}

function getCoopPlayerIds() {
  return Object.keys(game.coopPlayers || {}).map((profileId) => sanitizeProfileId(profileId)).filter(Boolean);
}

function getLocalCoopPlayerState() {
  return game.coopPlayers[state.profileId] || null;
}

function getRemoteCoopPlayers() {
  return getCoopPlayerIds()
    .filter((profileId) => profileId !== state.profileId)
    .map((profileId) => game.coopPlayers[profileId])
    .filter(Boolean);
}

function cloneCoopRobots(robots = []) {
  return robots.map((robot) => ({
    ...robot,
    history: Array.isArray(robot.history) ? robot.history.map((entry) => ({ ...entry })) : [],
  }));
}

function cloneCoopProjectiles(projectiles = []) {
  return projectiles.map((projectile) => ({ ...projectile }));
}

function syncGamePlayerFromLocalCoopPlayer(options = {}) {
  const localPlayer = getLocalCoopPlayerState();
  if (!localPlayer) {
    return;
  }

  const preservePosition = Boolean(options.preservePosition);
  const nextX = Number(localPlayer.x);
  const nextY = Number(localPlayer.y);
  const nextHp = Number(localPlayer.hp);

  if (!preservePosition) {
    if (Number.isFinite(nextX)) {
      game.player.x = nextX;
    } else if (!Number.isFinite(game.player.x)) {
      game.player.x = game.width / 2;
    }

    if (Number.isFinite(nextY)) {
      game.player.y = nextY;
    } else if (!Number.isFinite(game.player.y)) {
      game.player.y = game.height / 2;
    }
  }

  if (Number.isFinite(nextHp)) {
    game.player.hp = nextHp;
  } else if (!Number.isFinite(game.player.hp)) {
    game.player.hp = GAME_RULES.playerMaxHp;
  }
}

function syncLocalCoopPlayerFromGame() {
  const localPlayer = getLocalCoopPlayerState();
  if (!localPlayer) {
    return;
  }

  localPlayer.x = Number(game.player.x || 0);
  localPlayer.y = Number(game.player.y || 0);
  localPlayer.hp = Number(game.player.hp || 0);
  localPlayer.alive = game.player.hp > 0;
  localPlayer.updatedAt = Date.now();
}

function initializeCoopGameSession(sessionSnapshot) {
  const memberIds = [
    ...new Set([
      ...Object.keys(sessionSnapshot?.players || {}),
      ...getActivePartyMemberIds(),
    ].map((profileId) => sanitizeProfileId(profileId)).filter(Boolean)),
  ];
  const spawnPositions = [
    { x: game.width * 0.38, y: game.height * 0.72 },
    { x: game.width * 0.62, y: game.height * 0.72 },
  ];

  game.coopPartyId = party.partyId;
  game.coopSessionId = sanitizeStoredId(sessionSnapshot?.sessionId);
  game.coopHostProfileId = sanitizeProfileId(sessionSnapshot?.hostProfileId);
  game.coopIsHost = game.coopHostProfileId === state.profileId;
  game.coopPlayers = {};
  game.coopRemoteAppliedAt = 0;
  game.coopHostSyncAccumulatorMs = 0;
  game.coopInputSyncAccumulatorMs = 0;
  game.coopResultApplied = false;
  game.firstRobotPreludeActive = false;
  game.firstRobotTutorialActive = false;
  game.firstRobotTutorialPromptUsed = true;
  game.firstRobotTutorialDelayMs = 0;
  game.firstRobotTutorialRobotId = null;
  game.waveIntroMs = Math.max(0, Number(sessionSnapshot?.waveIntroMs || 3000));
  game.pauseResumeCountdownMs = Math.max(0, Number(sessionSnapshot?.pauseResumeCountdownMs || 0));
  game.pauseResumeRobotsLeft = Math.max(0, Number(sessionSnapshot?.pauseResumeRobotsLeft || 0));
  game.currentWave = Math.max(0, Number(sessionSnapshot?.currentWave || 0));
  game.pendingWave = Math.max(1, Number(sessionSnapshot?.pendingWave || 1));
  game.robotsKilledTotal = Math.max(0, Number(sessionSnapshot?.robotsKilledTotal || 0));
  game.trophiesEarnedRun = Math.max(0, Number(sessionSnapshot?.trophiesEarnedRun || 0));
  game.resultStatus = sessionSnapshot?.resultStatus || "Koniec rundy";
  game.resultNote = sessionSnapshot?.resultNote || "Twoje statystyki z tej rundy.";

  memberIds.forEach((profileId, index) => {
    const memberData = party.data?.members?.[profileId] || {};
    const snapshotPlayer = sessionSnapshot?.players?.[profileId] || {};
    const characterId = sanitizeStoredId(
      snapshotPlayer.characterId || memberData.characterId || state.equippedCharacter || "magik-millo"
    ) || "magik-millo";
    const petId = sanitizeStoredId(snapshotPlayer.petId || memberData.petId);
    const maxHp = getPlayerMaxHpForLoadout(characterId, petId);
    const spawn = spawnPositions[index] || { x: game.width / 2, y: game.height * 0.72 };

    game.coopPlayers[profileId] = {
      profileId,
      nickname: sanitizePlayerNickname(snapshotPlayer.nickname || memberData.nickname || getCachedSocialProfile(profileId)?.nickname) || "Gracz",
      characterId,
      petId,
      maxHp,
      hp: clamp(Number(snapshotPlayer.hp || maxHp), 0, maxHp),
      x: Number(snapshotPlayer.x || spawn.x),
      y: Number(snapshotPlayer.y || spawn.y),
      alive: snapshotPlayer.alive !== false && Number(snapshotPlayer.hp || maxHp) > 0,
      ammo: new Array(GAME_RULES.baseAmmoCount).fill(1),
      ammoRechargeDurations: new Array(GAME_RULES.baseAmmoCount).fill(GAME_RULES.ammoRechargeSeconds),
      lastShotAt: -Infinity,
      fire: false,
      updatedAt: Date.now(),
    };
  });

  syncGamePlayerFromLocalCoopPlayer();
  game.pet.x = game.player.x + 70;
  game.pet.y = game.player.y + 34;
  game.robots = cloneCoopRobots(sessionSnapshot?.robots || []);
  game.projectiles = cloneCoopProjectiles(sessionSnapshot?.projectiles || []);
}

function buildCoopPartySnapshot(stateName = "playing") {
  return {
    active: stateName !== "result",
    state: stateName,
    sessionId: game.coopSessionId,
    hostProfileId: game.coopHostProfileId,
    currentWave: game.currentWave,
    pendingWave: game.pendingWave,
    waveIntroMs: Math.max(0, Number(game.waveIntroMs || 0)),
    pauseResumeCountdownMs: Math.max(0, Number(game.pauseResumeCountdownMs || 0)),
    pauseResumeRobotsLeft: Math.max(0, Number(game.pauseResumeRobotsLeft || 0)),
    robotsKilledTotal: Math.max(0, Number(game.robotsKilledTotal || 0)),
    trophiesEarnedRun: Math.max(0, Number(game.trophiesEarnedRun || 0)),
    resultStatus: stateName === "result" ? (game.resultStatus || "Koniec rundy") : "",
    resultNote: stateName === "result" ? (game.resultNote || "Twoje statystyki z tej rundy.") : "",
    players: getCoopPlayerIds().reduce((accumulator, profileId) => {
      const player = game.coopPlayers[profileId];
      if (!player) {
        return accumulator;
      }

      accumulator[profileId] = {
        profileId,
        nickname: player.nickname || "Gracz",
        characterId: player.characterId || "magik-millo",
        petId: player.petId || "",
        x: Number(player.x || 0),
        y: Number(player.y || 0),
        hp: Math.max(0, Number(player.hp || 0)),
        alive: player.alive !== false && Number(player.hp || 0) > 0,
      };
      return accumulator;
    }, {}),
    robots: cloneCoopRobots(game.robots || []),
    projectiles: cloneCoopProjectiles(game.projectiles || []),
    updatedAt: Date.now(),
  };
}

function applyRemoteCoopSnapshot(snapshot) {
  if (!snapshot || !isCoopMatchActive()) {
    return;
  }

  if (game.coopIsHost && snapshot.state !== "result") {
    return;
  }

  const updatedAt = Number(snapshot.updatedAt || 0);
  if (updatedAt > 0 && updatedAt <= game.coopRemoteAppliedAt && snapshot.state !== "result") {
    return;
  }

  game.coopRemoteAppliedAt = Math.max(game.coopRemoteAppliedAt, updatedAt);
  game.currentWave = Math.max(0, Number(snapshot.currentWave || 0));
  game.pendingWave = Math.max(1, Number(snapshot.pendingWave || 1));
  game.waveIntroMs = Math.max(0, Number(snapshot.waveIntroMs || 0));
  game.pauseResumeCountdownMs = Math.max(0, Number(snapshot.pauseResumeCountdownMs || 0));
  game.pauseResumeRobotsLeft = Math.max(0, Number(snapshot.pauseResumeRobotsLeft || 0));
  game.robotsKilledTotal = Math.max(0, Number(snapshot.robotsKilledTotal || 0));
  game.trophiesEarnedRun = Math.max(0, Number(snapshot.trophiesEarnedRun || 0));
  game.resultStatus = snapshot.resultStatus || game.resultStatus;
  game.resultNote = snapshot.resultNote || game.resultNote;

  Object.entries(snapshot.players || {}).forEach(([profileId, playerSnapshot]) => {
    const normalizedProfileId = sanitizeProfileId(profileId);
    if (!normalizedProfileId || !game.coopPlayers[normalizedProfileId]) {
      return;
    }

    const player = game.coopPlayers[normalizedProfileId];
    const isLocalGuestPlayer =
      normalizedProfileId === state.profileId
      && !game.coopIsHost
      && snapshot.state !== "result";

    if (!isLocalGuestPlayer) {
      player.x = Number(playerSnapshot.x || player.x || 0);
      player.y = Number(playerSnapshot.y || player.y || 0);
    }
    player.hp = clamp(Number(playerSnapshot.hp || 0), 0, player.maxHp || GAME_RULES.playerMaxHp);
    player.alive = playerSnapshot.alive !== false && player.hp > 0;
    player.updatedAt = Date.now();
  });

  if (!game.coopIsHost && snapshot.state !== "result") {
    syncGamePlayerFromLocalCoopPlayer({ preservePosition: true });
  } else {
    syncGamePlayerFromLocalCoopPlayer();
  }
  game.robots = cloneCoopRobots(snapshot.robots || []);
  game.projectiles = cloneCoopProjectiles(snapshot.projectiles || []);

  if (snapshot.state === "result") {
    applyCoopResultSnapshot(snapshot);
  }
}

async function syncCoopPartySnapshot() {
  if (!isCoopMatchActive() || !game.coopIsHost || party.syncingHost) {
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  party.syncingHost = true;

  try {
    const snapshot = buildCoopPartySnapshot("playing");
    await db.ref(`parties/${game.coopPartyId}/game`).set(snapshot);
    await db.ref(`parties/${game.coopPartyId}`).update({
      status: "game",
      updatedAt: Date.now(),
    });
  } catch (error) {
    // ignore temporary Firebase hiccups
  } finally {
    party.syncingHost = false;
  }
}

async function publishCoopResult(status, note) {
  if (!isCoopMatchActive() || !game.coopIsHost || game.coopResultApplied) {
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  game.resultStatus = status;
  game.resultNote = note;
  game.active = false;
  window.cancelAnimationFrame(game.animationId);
  game.animationId = 0;

  try {
    const snapshot = buildCoopPartySnapshot("result");
    snapshot.active = false;
    await db.ref(`parties/${game.coopPartyId}/game`).set(snapshot);
    await db.ref(`parties/${game.coopPartyId}`).update({
      status: "game",
      updatedAt: Date.now(),
    });
  } catch (error) {
    // ignore
  }
}

function applyCoopResultSnapshot(snapshot) {
  concludeCoopGameSession(
    snapshot?.resultStatus || game.resultStatus || "Koniec rundy",
    snapshot?.resultNote || game.resultNote || "Twoje statystyki z tej rundy.",
    {
      robotsKilledTotal: snapshot?.robotsKilledTotal,
      trophiesEarnedRun: snapshot?.trophiesEarnedRun,
    }
  );
}

async function resetPartyAfterCoopResult() {
  if (!party.partyId || !(await ensureSocialProfileReady())) {
    return;
  }

  const db = getFirebasePartyDatabase();
  if (!db) {
    return;
  }

  const now = Date.now();

  if (game.coopIsHost) {
    const updates = {};
    updates[`parties/${party.partyId}/game`] = null;
    updates[`parties/${party.partyId}/status`] = "lobby";
    updates[`parties/${party.partyId}/updatedAt`] = now;
    getActivePartyMemberIds().forEach((profileId) => {
      updates[`parties/${party.partyId}/members/${profileId}/ready`] = false;
      updates[`parties/${party.partyId}/members/${profileId}/view`] = "lobby";
      updates[`parties/${party.partyId}/members/${profileId}/fire`] = false;
      updates[`parties/${party.partyId}/members/${profileId}/updatedAt`] = now;
    });
    await db.ref().update(updates).catch(() => {});
    return;
  }

  await db.ref(`parties/${party.partyId}/members/${state.profileId}`).update({
    ready: false,
    view: "lobby",
    fire: false,
    updatedAt: now,
  }).catch(() => {});
}

function startGameSession() {
  stopGameSession();
  updateGameBounds();
  resetGameSession();
  if (ui.pendingPartyLaunch?.snapshot) {
    initializeCoopGameSession(ui.pendingPartyLaunch.snapshot);
    ui.pendingPartyLaunch = null;
  }
  game.active = true;
  renderGameLoadout();
  hideGameResult();
  renderGameScene();
  syncTouchControlsVisibility();
  if (!isFirstRobotPreludeActive()) {
    playWaveIntroSound();
  }
  scheduleRemoteProfileSync(true);
  schedulePartyMemberSync(true, {
    view: "game",
    ready: false,
    x: game.player.x,
    y: game.player.y,
    fire: false,
  });
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
  if (jungleFieldsLayer) {
    jungleFieldsLayer.innerHTML = "";
  }
  if (multiplayerPlayersLayer) {
    multiplayerPlayersLayer.innerHTML = "";
  }
  robotsLayer.innerHTML = "";
  projectilesLayer.innerHTML = "";
  effectsLayer.innerHTML = "";
  if (gameTutorialOverlay) {
    gameTutorialOverlay.hidden = true;
  }
  gameMap.classList.remove("multiplayer-ffa");
  gameMap.classList.remove("first-robot-tutorial");
  playerEntity.classList.remove("tutorial-focus");
  playerEntity.classList.remove("pascal-invisible");
  game.paused = false;
  game.pauseResumeCountdownMs = 0;
  game.pauseResumeRobotsLeft = 0;
  scheduleRemoteProfileSync(true);
  if (opponentEntity) {
    opponentEntity.hidden = true;
  }
  hideGameResult();
  resetTouchControls();
  finishFirstRobotTutorial(false);
  multiplayer.matchActive = false;
  schedulePartyMemberSync(true, {
    view: "lobby",
    ready: false,
    fire: false,
  });
}

function resetGameSession() {
  ui.pendingMultiplayerLaunch = null;
  game.mode = ui.pendingPartyLaunch ? "coop" : "solo";
  game.lastShotAt = -Infinity;
  game.nextRobotId = 1;
  game.nextProjectileId = 1;
  game.hadActiveRobots = false;
  game.currentWave = 0;
  game.pendingWave = 1;
  game.waveIntroMs = 3000;
  game.paused = false;
  game.pauseResumeCountdownMs = 0;
  game.pauseResumeRobotsLeft = 0;
  game.multiplayerStartCountdownMs = 0;
  game.waveSpawnTimerMs = 0;
  game.waveRobotsRemaining = 0;
  game.waveStages = [];
  game.currentWaveStageIndex = -1;
  game.currentWaveConfig = null;
  game.robotsKilledTotal = 0;
  game.damageDealtRun = 0;
  game.runPetId = getEquippedPet()?.id || "";
  game.trophiesEarnedRun = 0;
  game.statsCounted = false;
  game.firstRobotPreludeActive = false;
  game.firstRobotTutorialActive = false;
  game.firstRobotTutorialPromptUsed = false;
  game.firstRobotTutorialDelayMs = 0;
  game.firstRobotTutorialRobotId = null;
  game.firstRobotTutorialInitialDistance = 0;
  game.resultStatus = "Koniec rundy";
  game.resultNote = "Twoje statystyki z tej rundy.";
  clearGameResultTimers();
  game.coopPartyId = "";
  game.coopSessionId = "";
  game.coopHostProfileId = "";
  game.coopIsHost = false;
  game.coopPlayers = {};
  game.coopRemoteAppliedAt = 0;
  game.coopHostSyncAccumulatorMs = 0;
  game.coopInputSyncAccumulatorMs = 0;
  game.coopResultApplied = false;
  game.robots = [];
  game.projectiles = [];
  game.pickups = [];
  game.barriers = [];
  game.waterFields = [];
  game.jungleFields = [];
  if (state.bookMissionProgress && typeof state.bookMissionProgress === "object") {
    state.bookMissionProgress.currentRunRobots = 0;
  }
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
  game.pet.jaguarNextTriggerHp = 2500;
  game.pet.pascalTriggered = false;
  game.pet.pascalInvisibleMs = 0;
  game.touch.moveX = 0;
  game.touch.moveY = 0;
  game.touch.movePointerId = null;
  game.touch.firePressed = false;
  game.touch.firePointerId = null;
  game.pet.x = game.player.x + 70;
  game.pet.y = game.player.y + 36;
  game.petPack = [];

  if (game.mode === "solo" && getEquippedPet()?.id === "sniezynka") {
    game.pet.shieldCooldownMs = GAME_RULES.snowflakeShieldCooldownMs;
  }

  if (game.mode === "solo" && !state.seenFirstRobotTutorial) {
    startFirstRobotPrelude();
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

function updateMultiplayerPetFollow() {
  game.pet.x = clamp(game.player.x + 54, 36, Math.max(36, game.width - 36));
  game.pet.y = clamp(game.player.y + 28, 72, Math.max(72, game.height - 36));
}

function updateCoopRemotePlayersFromParty() {
  getRemoteCoopPlayers().forEach((player) => {
    const memberData = party.data?.members?.[player.profileId] || {};
    player.x = clamp(Number(memberData.x || player.x || game.width / 2), 48, Math.max(48, game.width - 48));
    player.y = clamp(Number(memberData.y || player.y || game.height / 2), 90, Math.max(90, game.height - 40));
    player.fire = Boolean(memberData.fire);
    player.nickname = sanitizePlayerNickname(memberData.nickname || player.nickname) || "Gracz";
    player.characterId = sanitizeStoredId(memberData.characterId || player.characterId) || "magik-millo";
    player.petId = sanitizeStoredId(memberData.petId || player.petId);
    player.maxHp = getPlayerMaxHpForLoadout(player.characterId, player.petId);
    player.hp = clamp(Number(player.hp || player.maxHp), 0, player.maxHp);
    player.alive = Boolean(player.alive !== false && player.hp > 0);
  });
}

function updateCoopRemoteAmmo(player, deltaSeconds) {
  player.ammo = (player.ammo || []).map((slot, index) => {
    const rechargeDuration = player.ammoRechargeDurations?.[index] || GAME_RULES.ammoRechargeSeconds;
    const refillPerSecond = 1 / rechargeDuration;
    return Math.min(1, Number(slot || 0) + refillPerSecond * deltaSeconds);
  });
}

function tryAutoFireForCoopRemotePlayer(player, timestamp) {
  if (!player || !player.alive || !player.fire) {
    return;
  }

  if (timestamp - Number(player.lastShotAt || -Infinity) < GAME_RULES.fireIntervalMs) {
    return;
  }

  const ammoIndex = (player.ammo || []).findIndex((slot) => slot >= 1);
  const target = findNearestRobot(player.x, player.y);
  if (ammoIndex === -1 || !target) {
    return;
  }

  player.ammo[ammoIndex] = 0;
  player.lastShotAt = timestamp;
  spawnProjectile({
    x: player.x,
    y: player.y - 10,
    targetId: target.id,
    targetType: "robot",
    targetX: target.x,
    targetY: target.y,
    kind: getProjectileKindForCharacterId(player.characterId),
    characterId: player.characterId,
    ownerProfileId: player.profileId,
    damage: getProjectileDamageForPetId(player.petId),
  });
}

function updateGuestCoopAmmoPreview(deltaSeconds, timestamp) {
  updateAmmo(deltaSeconds);

  if (!isFireInputActive()) {
    return;
  }

  if (timestamp - game.lastShotAt < GAME_RULES.fireIntervalMs) {
    return;
  }

  const ammoIndex = game.ammo.findIndex((slot) => slot >= 1);
  if (ammoIndex === -1) {
    return;
  }

  game.ammo[ammoIndex] = 0;
  game.lastShotAt = timestamp;
}

function getRobotTargetPlayer(robot) {
  if (!isCoopMatchActive() || !game.coopIsHost) {
    return {
      profileId: state.profileId,
      x: game.player.x,
      y: game.player.y,
      hp: game.player.hp,
      alive: game.player.hp > 0,
    };
  }

  let nearest = null;
  let nearestDistance = Infinity;

  getCoopPlayerIds().forEach((profileId) => {
    const player = game.coopPlayers[profileId];
    if (!player || player.alive === false || Number(player.hp || 0) <= 0) {
      return;
    }

    const distance = Math.hypot(Number(player.x || 0) - robot.x, Number(player.y || 0) - robot.y);
    if (distance < nearestDistance) {
      nearest = player;
      nearestDistance = distance;
    }
  });

  return nearest;
}

function damageCoopPlayer(profileId, amount) {
  const player = game.coopPlayers[sanitizeProfileId(profileId)];
  if (!player || player.alive === false) {
    return;
  }

  const appliedDamage = Math.min(amount, Number(player.hp || 0));
  player.hp = Math.max(0, Number(player.hp || 0) - amount);
  player.alive = player.hp > 0;
  spawnFloatingText(player.x, player.y - 120, `-${appliedDamage}`, "hurt");

  if (player.profileId === state.profileId) {
    game.player.hp = player.hp;
  }
}

function updateCoopHostFrame(deltaMs, deltaSeconds, timestamp) {
  updateCoopRemotePlayersFromParty();
  syncLocalCoopPlayerFromGame();

  if (game.waveIntroMs > 0) {
    updateWaveProgress(deltaMs);
  } else {
    updateWaveProgress(deltaMs);
    if (game.player.hp > 0) {
      updatePlayerMovement(deltaSeconds);
      syncLocalCoopPlayerFromGame();
      clampGameEntities();
      updateAmmo(deltaSeconds);
      tryAutoFire(timestamp);
    }
    getRemoteCoopPlayers().forEach((player) => {
      updateCoopRemoteAmmo(player, deltaSeconds);
      tryAutoFireForCoopRemotePlayer(player, timestamp);
    });
    if (game.player.hp > 0) {
      updatePet(deltaSeconds, deltaMs);
      updatePetVoiceAmbient(deltaMs);
    }
    updateBarriers(deltaMs);
    updatePickups(deltaMs);
    updateWaterFields(deltaSeconds);
    updateJungleSupportFields(deltaMs, deltaSeconds);
    updateRobots(deltaSeconds);
    updateProjectiles(deltaSeconds);
    cleanupDeadRobots();
  }

  syncLocalCoopPlayerFromGame();

  const alivePlayers = getCoopPlayerIds().filter((profileId) => {
    const player = game.coopPlayers[profileId];
    return player && player.alive !== false && Number(player.hp || 0) > 0;
  });

  if (alivePlayers.length < getCoopPlayerIds().length) {
    finishGameLoss();
    return;
  }

  game.coopHostSyncAccumulatorMs += deltaMs;
  if (game.coopHostSyncAccumulatorMs >= PARTY_SESSION_SYNC_MS) {
    game.coopHostSyncAccumulatorMs = 0;
    void syncCoopPartySnapshot();
  }
}

function updateCoopGuestFrame(deltaMs, deltaSeconds, timestamp) {
  if (game.player.hp > 0 && game.waveIntroMs <= 0 && game.pauseResumeCountdownMs <= 0) {
    updatePlayerMovement(deltaSeconds);
    clampGameEntities();
    syncLocalCoopPlayerFromGame();
  }

  updateGuestCoopAmmoPreview(deltaSeconds, timestamp);
  schedulePartyMemberSync(false, {
    view: "game",
    ready: false,
    x: game.player.x,
    y: game.player.y,
    fire: isFireInputActive(),
  });

  if (party.data?.game) {
    applyRemoteCoopSnapshot(party.data.game);
  }
}

function runGameFrame(timestamp) {
  if (!game.active) {
    return;
  }

  const deltaMs = Math.min(40, timestamp - game.lastFrameTime || 16);
  const deltaSeconds = deltaMs / 1000;
  game.lastFrameTime = timestamp;

  if (game.paused) {
    renderGameScene();
    game.animationId = window.requestAnimationFrame(runGameFrame);
    return;
  }

  if (isCoopMatchActive()) {
    if (game.coopIsHost) {
      updateCoopHostFrame(deltaMs, deltaSeconds, timestamp);
    } else {
      updateCoopGuestFrame(deltaMs, deltaSeconds, timestamp);
    }

    if (!game.coopResultApplied && game.player.hp <= 0) {
      finishGameLoss();
    }

    if (!game.active) {
      return;
    }

    renderGameScene();

    game.animationId = window.requestAnimationFrame(runGameFrame);
    return;
  }

  if (isMultiplayerMatchActive()) {
    const preStartCountdownActive = game.multiplayerStartCountdownMs > 0;

    if (preStartCountdownActive) {
      game.multiplayerStartCountdownMs = Math.max(0, game.multiplayerStartCountdownMs - deltaMs);
    }

    if (game.player.hp > 0 && !preStartCountdownActive) {
      updatePlayerMovement(deltaSeconds);
      updateAmmo(deltaSeconds);
      tryAutoFire(timestamp);
    }
    updateProjectiles(deltaSeconds);
    updateMultiplayerPetFollow();
    clampGameEntities();

    if (game.player.hp > 0) {
      multiplayer.syncAccumulatorMs += deltaMs;
      if (multiplayer.syncAccumulatorMs >= 80) {
        multiplayer.syncAccumulatorMs = 0;
        syncMultiplayerPlayerState();
      }
    }

    renderGameScene();

    if (game.player.hp <= 0 && !multiplayer.pendingResult) {
      void eliminateLocalMultiplayerPlayer("", "defeat");
    }

    if (multiplayer.pendingResult) {
      applyMultiplayerPendingResult();
      if (!game.active) {
        return;
      }
    }

    void maybeFinalizeMultiplayerWinner();

    game.animationId = window.requestAnimationFrame(runGameFrame);
    return;
  }

  if (isFirstRobotPreludeActive()) {
    updateFirstRobotPrelude(deltaMs);
  } else if (!isFirstRobotTutorialPaused()) {
    updateWaveProgress(deltaMs);
  }

  if (!game.active) {
    return;
  }

  if (game.pauseResumeCountdownMs > 0) {
    game.pauseResumeCountdownMs = Math.max(0, game.pauseResumeCountdownMs - deltaMs);
    renderGameScene();
    game.animationId = window.requestAnimationFrame(runGameFrame);
    return;
  }

  if (!isFirstRobotTutorialPaused()) {
    updatePlayerMovement(deltaSeconds);
    updateAmmo(deltaSeconds);
    tryAutoFire(timestamp);

    if (!isFirstRobotPreludeActive()) {
      updatePet(deltaSeconds, deltaMs);
      updatePetVoiceAmbient(deltaMs);
      updateBarriers(deltaMs);
      updatePickups(deltaMs);
      updateWaterFields(deltaSeconds);
      updateJungleSupportFields(deltaMs, deltaSeconds);
    } else {
      game.waterFields = [];
    }

    updateRobots(deltaSeconds);

    if (!isFirstRobotTutorialPaused()) {
      updateProjectiles(deltaSeconds);
      clampGameEntities();
      cleanupDeadRobots();
    }
  }

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

  if (isFirstRobotTutorialPaused()) {
    if (key === " " && isPressed) {
      fireFirstRobotTutorialShot();
    }

    return;
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
  } else if (isPressed && game.mode === "solo" && (key === "w" || key === "W")) {
    tryActivateOwlAbility();
  } else if (isPressed && game.mode === "solo" && (key === "a" || key === "A")) {
    setCatMode("a");
  } else if (isPressed && game.mode === "solo" && (key === "s" || key === "S")) {
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

  const target = isMultiplayerMatchActive()
    ? getNearestMultiplayerTarget()
    : findNearestRobot(game.player.x, game.player.y);
  const ammoIndex = game.ammo.findIndex((slot) => slot >= 1);

  if (!target || ammoIndex === -1) {
    return;
  }

  game.ammo[ammoIndex] = 0;
  game.lastShotAt = timestamp;

  spawnProjectile({
    x: game.player.x,
    y: game.player.y - 10,
    targetId: typeof target.id === "number" ? target.id : null,
    targetType: isMultiplayerMatchActive() ? "player" : "robot",
    targetPlayerId: isMultiplayerMatchActive() ? target.id : "",
    targetX: target.x,
    targetY: target.y,
    kind: getPlayerProjectileKind(ammoIndex),
    characterId: state.equippedCharacter || "magik-millo",
    ownerId: isMultiplayerMatchActive() ? multiplayer.selfId : "",
    ownerProfileId: isCoopMatchActive() ? state.profileId : "",
    damage: isCoopMatchActive() ? getProjectileDamage() : undefined,
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
  const currentStage = game.waveStages[game.currentWaveStageIndex] || null;

  if (game.waveRobotsRemaining > 0 && currentStage) {
    if (currentStage.waitForClear && game.robots.length > 0) {
      return;
    }

    game.waveSpawnTimerMs += deltaMs;
    const spawnIntervalMs = Math.max(0, Number(currentStage.intervalMs ?? waveConfig.spawnIntervalMs ?? 2000));
    const spawnBatch = Math.max(1, Number(currentStage.batch || waveConfig.spawnBatch || 1));

    while (
      game.waveRobotsRemaining > 0 &&
      (spawnIntervalMs === 0 || game.waveSpawnTimerMs >= spawnIntervalMs)
    ) {
      const spawnCount = Math.min(spawnBatch, game.waveRobotsRemaining);
      spawnRobotBatch(spawnCount, currentStage);
      game.waveRobotsRemaining -= spawnCount;
      game.waveSpawnTimerMs = spawnIntervalMs === 0 ? 0 : (game.waveSpawnTimerMs - spawnIntervalMs);
    }

    return;
  }

  if (game.currentWave > 0 && game.waveRobotsRemaining === 0 && game.robots.length === 0) {
    if (game.currentWaveStageIndex >= 0 && game.currentWaveStageIndex < game.waveStages.length - 1) {
      activateWaveStage(game.currentWaveStageIndex + 1);
      return;
    }

    finishWave(game.currentWaveConfig || getWaveConfig(game.currentWave));
  }
}

function queueNextWave(waveNumber) {
  game.pendingWave = waveNumber;
  game.waveIntroMs = 3000;
  game.waveSpawnTimerMs = 0;
  playWaveIntroSound();
}

function buildWaveStages(waveConfig) {
  if (Array.isArray(waveConfig.spawnStages) && waveConfig.spawnStages.length > 0) {
    return waveConfig.spawnStages.map((stage) => ({
      batch: 1,
      intervalMs: waveConfig.spawnIntervalMs || 2000,
      initialBatch: 0,
      waitForClear: false,
      killReward: waveConfig.killReward || 0,
      robotHp: waveConfig.robotHp,
      robotDamage: waveConfig.robotDamage,
      robotAttackIntervalMs: waveConfig.robotAttackIntervalMs || 100,
      ...stage,
    }));
  }

  return [
    {
      count: waveConfig.robotCount,
      batch: waveConfig.spawnBatch || 1,
      intervalMs: waveConfig.spawnIntervalMs || 2000,
      initialBatch: waveConfig.initialBatch,
      waitForClear: false,
      killReward: waveConfig.killReward || 0,
      robotHp: waveConfig.robotHp,
      robotDamage: waveConfig.robotDamage,
      robotAttackIntervalMs: waveConfig.robotAttackIntervalMs || 100,
    },
  ];
}

function activateWaveStage(stageIndex) {
  const stage = game.waveStages[stageIndex];

  if (!stage) {
    game.currentWaveStageIndex = -1;
    game.waveRobotsRemaining = 0;
    game.waveSpawnTimerMs = 0;
    return;
  }

  game.currentWaveStageIndex = stageIndex;
  game.waveSpawnTimerMs = 0;
  const spawnBatch = Math.max(1, Number(stage.batch || 1));
  const initialBatchValue = stage.initialBatch;
  const initialBatch = Math.min(
    Number(stage.count || 0),
    Math.max(
      0,
      Number.isFinite(Number(initialBatchValue)) ? Number(initialBatchValue) : spawnBatch
    )
  );
  game.waveRobotsRemaining = Math.max(0, Number(stage.count || 0) - initialBatch);

  if (initialBatch > 0) {
    spawnRobotBatch(initialBatch, stage);
  }
}

function beginWave(waveNumber) {
  const waveConfig = getWaveConfig(waveNumber);
  game.currentWave = waveNumber;
  game.currentWaveConfig = waveConfig;
  game.waveStages = buildWaveStages(waveConfig);
  game.currentWaveStageIndex = -1;
  activateWaveStage(0);
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

  if (waveConfig.wave >= TOTAL_GAME_WAVES) {
    finishGameVictory();
    return;
  }

  queueNextWave(waveConfig.wave + 1);
}

function spawnRobot(waveConfig = getWaveConfig(game.currentWave || 1)) {
  const robotStats = getRobotStats(waveConfig);
  const robotWave = Number(waveConfig.wave || game.currentWave || 1);
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

  const robot = {
    id: game.nextRobotId,
    x,
    y,
    hp: robotStats.hp,
    maxHp: robotStats.hp,
    damage: robotStats.damage,
    attackIntervalMs: robotStats.attackIntervalMs,
    speed: robotStats.speed,
    rewardTrophies: waveConfig.killReward,
    attackTimer: 0,
    fieldDamageTimer: 0,
    poisonTimerMs: 0,
    poisonDamageTimer: 0,
    slowTimerMs: 0,
    slowMultiplier: 1,
    jaguarRepelMs: 0,
    snakeVenomTimerMs: 0,
    snakeDamageMultiplier: 1,
    monkeyMarked: false,
    frogDamageTimer: 0,
    elephantRoamTargetX: x,
    elephantRoamTargetY: y,
    stunTimerMs: 0,
    history: [],
    bubbleTimerMs: 0,
    rewindElapsedMs: 0,
    rewindDurationMs: 0,
    rewindFromX: x,
    rewindFromY: y,
    rewindTargetX: x,
    rewindTargetY: y,
    sizeClass: robotWave >= TOTAL_GAME_WAVES ? "final-wave" : "default",
    dead: false,
  };

  game.robots.push(robot);

  if (isFirstRobotPreludeActive() && game.robots.length === 1) {
    rememberFirstRobotTutorialTarget(robot);
  }

  game.nextRobotId += 1;
  return robot;
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

    if (robot.jaguarRepelMs > 0) {
      robot.jaguarRepelMs = Math.max(0, robot.jaguarRepelMs - deltaMs);
    }

    if (robot.snakeVenomTimerMs > 0) {
      robot.snakeVenomTimerMs = Math.max(0, robot.snakeVenomTimerMs - deltaMs);
      if (robot.snakeVenomTimerMs === 0) {
        robot.snakeDamageMultiplier = 1;
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
    const jungleFieldEffect = getJungleFieldEffect(robot.x, robot.y);
    const frogFieldEffect = getFrogPuddleEffect(robot.x, robot.y);
    if (jungleFieldEffect.insideField) {
      robot.jaguarRepelMs = Math.max(robot.jaguarRepelMs || 0, GAME_RULES.jaguarFieldDurationMs);
    }
    robot.fieldDamageTimer = fieldEffect.insideField ? robot.fieldDamageTimer + deltaSeconds : 0;
    robot.frogDamageTimer = frogFieldEffect.fields.length > 0 ? robot.frogDamageTimer + deltaSeconds : 0;

    while (robot.fieldDamageTimer >= 1) {
      robot.fieldDamageTimer -= 1;
      damageRobot(robot, 50, "krab-syrena");
    }

    while (robot.frogDamageTimer >= 1) {
      robot.frogDamageTimer -= 1;
      damageRobot(robot, GAME_RULES.frogPuddleRobotDamagePerSecond, "zaba-dzungli");
    }

    if (robot.dead) {
      return;
    }

    const contactDamage = Math.round(
      robot.damage * fieldEffect.damageMultiplier * getRobotDamageMultiplier(robot)
    );
    const attackIntervalSeconds = Math.max(0.05, Number(robot.attackIntervalMs || 100) / 1000);

    if (robot.stunTimerMs > 0) {
      robot.attackTimer = 0;
      return;
    }

    if (getEquippedPet()?.id === "slon-dzungli" && game.pet.targetId === robot.id && game.pet.castTimerMs > 0) {
      robot.attackTimer = 0;
      return;
    }

    if (robot.jaguarRepelMs > 0) {
      const awayDx = robot.x - game.player.x;
      const awayDy = robot.y - game.player.y;
      const awayDistance = Math.hypot(awayDx, awayDy) || 1;
      const awaySpeed =
        robot.speed * fieldEffect.speedMultiplier * getRobotSlowMultiplier(robot);
      const awayStep = awaySpeed * deltaSeconds;
      robot.x = clamp(robot.x + (awayDx / awayDistance) * awayStep, 24, Math.max(24, game.width - 24));
      robot.y = clamp(robot.y + (awayDy / awayDistance) * awayStep, 24, Math.max(24, game.height - 24));
      robot.attackTimer = 0;
      return;
    }

    const cage = getRobotCage(robot);

    if (cage) {
      robot.attackTimer += deltaSeconds;

      while (robot.attackTimer >= attackIntervalSeconds) {
        robot.attackTimer -= attackIntervalSeconds;
        damageBarrier(cage, contactDamage);
      }

      return;
    }

    if (isPascalInvisibilityActive()) {
      const robotTarget = findNearestRobotExcluding(robot.x, robot.y, robot.id);

      if (!robotTarget) {
        robot.attackTimer = 0;
        return;
      }

      const robotDx = robotTarget.x - robot.x;
      const robotDy = robotTarget.y - robot.y;
      const robotDistance = Math.hypot(robotDx, robotDy) || 1;
      const robotMoveSpeed =
        robot.speed * fieldEffect.speedMultiplier * getRobotSlowMultiplier(robot);

      if (robotDistance > 70) {
        const step = robotMoveSpeed * deltaSeconds;
        robot.x += (robotDx / robotDistance) * step;
        robot.y += (robotDy / robotDistance) * step;
        robot.attackTimer = 0;
        return;
      }

      robot.attackTimer += deltaSeconds;

      while (robot.attackTimer >= attackIntervalSeconds) {
        robot.attackTimer -= attackIntervalSeconds;
        damageRobot(robotTarget, contactDamage, "pascal");
      }

      return;
    }

    const playerTarget = getRobotTargetPlayer(robot);
    if (!playerTarget) {
      robot.attackTimer = 0;
      return;
    }

    const dx = playerTarget.x - robot.x;
    const dy = playerTarget.y - robot.y;
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

    while (robot.attackTimer >= attackIntervalSeconds) {
      robot.attackTimer -= attackIntervalSeconds;
      if (isCoopMatchActive() && game.coopIsHost) {
        damageCoopPlayer(playerTarget.profileId || state.profileId, contactDamage);
      } else {
        damagePlayer(contactDamage);
      }
    }
  });
}

function updateProjectiles(deltaSeconds) {
  const survivors = [];

  game.projectiles.forEach((projectile) => {
    const target = projectile.targetType === "player"
      ? (
        projectile.targetPlayerId === multiplayer.selfId
          ? {
              id: multiplayer.selfId,
              x: game.player.x,
              y: game.player.y,
              hp: game.player.hp,
              alive: game.player.hp > 0,
            }
          : getMultiplayerMatchPlayers().find((player) => player.id === projectile.targetPlayerId) || null
      )
      : typeof projectile.targetId === "number"
        ? game.robots.find((robot) => robot.id === projectile.targetId && !robot.dead)
        : null;

    if (!target && projectile.kind !== "papuga-miss" && projectile.targetType !== "player") {
      return;
    }

    const targetX = target ? target.x : projectile.targetX;
    const targetY = target ? target.y : projectile.targetY;
    const dx = targetX - projectile.x;
    const dy = targetY - projectile.y;
    const distance = Math.hypot(dx, dy) || 1;
    const step = GAME_RULES.projectileSpeed * deltaSeconds;

    if (distance <= step + 20) {
      if (projectile.targetType === "player") {
        const damage = projectile.kind === "polar-bear-shot"
          ? GAME_RULES.polarBearProjectileDamage
          : Number(projectile.damage || getProjectileDamage());

        if (projectile.ownerId === multiplayer.selfId && projectile.targetPlayerId && projectile.targetPlayerId !== multiplayer.selfId) {
          sendMultiplayerDamage(damage, projectile.kind, projectile.targetPlayerId);
          if (multiplayer.players[projectile.targetPlayerId]) {
            multiplayer.players[projectile.targetPlayerId].hp = Math.max(
              0,
              Number(multiplayer.players[projectile.targetPlayerId].hp || getPlayerMaxHp()) - damage
            );
          }
          spawnFloatingText(targetX, targetY - 92, `-${damage}`, "hit");
        }

        return;
      }

      if (projectile.kind === "papuga") {
        stunRobot(target, GAME_RULES.parrotStunDurationMs);
      } else if (projectile.kind === "polar-bear-shot") {
        damageRobot(target, GAME_RULES.polarBearProjectileDamage, "niedzwiedz-polarny");
      } else if (projectile.kind === "jungle-venom-shot") {
        applyJungleSnakeVenom(target);
      } else if (projectile.kind === "lpsotka") {
        damageRobot(target, 150, "l-psotka");

        if (!target.dead) {
          applyLpsotkaBubble(target);
        }
      } else if (projectile.kind === "papuga-miss") {
        spawnFloatingText(projectile.targetX, projectile.targetY - 24, "NIE TRAFIONO", "hit");
      } else if (projectile.kind === "snake-shot") {
        damageRobot(target, Number(projectile.damage || getProjectileDamage()), "player");
        slowRobot(target, 3000, 0.5);
      } else {
        damageRobot(target, Number(projectile.damage || getProjectileDamage()), "player");
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

  updateJungleMonkeyMarks();

  if (!pet) {
    game.jungleFields = [];
    game.hadActiveRobots = false;
    return;
  }

  const hasRobots = game.robots.some((robot) => !robot.dead);
  const keepsJungleFields = pet.id === "jaguar" || pet.id === "zaba-dzungli";

  if (!keepsJungleFields) {
    game.jungleFields = [];
  }

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

  if (pet.id === "jaguar") {
    updateJaguarPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "papuga-dzungli") {
    movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "malpa-dzungli") {
    movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "waz-dzungli") {
    updateJungleSnakePet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "slon-dzungli") {
    updateElephantPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "zaba-dzungli") {
    updateFrogPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "leniwiec-dzungli") {
    updateSlothPet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "tygrys-dzungli") {
    movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "krokodyl-dzungli") {
    updateCrocodilePet(deltaSeconds, deltaMs);
    game.hadActiveRobots = hasRobots;
    return;
  }

  if (pet.id === "pascal") {
    updatePascalPet(deltaSeconds, deltaMs);
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

function createJaguarField() {
  game.jungleFields.push({
    id: `jaguar-field-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    kind: "jaguar",
    x: game.player.x,
    y: game.player.y,
    radius: GAME_RULES.jaguarFieldRadius,
    ttlMs: GAME_RULES.jaguarFieldDurationMs,
  });
}

function createFrogPuddle() {
  game.jungleFields.push({
    id: `frog-puddle-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    kind: "frog",
    x: game.player.x,
    y: game.player.y,
    radius: GAME_RULES.frogPuddleRadius,
    ttlMs: GAME_RULES.frogPuddleDurationMs,
    playerHealTimerMs: 0,
    coopHealTimers: {},
  });
}

function updateJaguarPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  updateJungleFields(deltaMs);

  while (
    game.player.hp > 0 &&
    game.pet.jaguarNextTriggerHp > 0 &&
    game.player.hp <= game.pet.jaguarNextTriggerHp
  ) {
    createJaguarField();
    spawnFloatingText(game.player.x, game.player.y - 136, "JAGUAR", "heal");
    game.pet.jaguarNextTriggerHp -= 500;
  }
}

function updateJungleSnakePet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  game.pet.castTimerMsSecondary += deltaMs;

  while (game.pet.castTimerMsSecondary >= GAME_RULES.jungleSnakeCastIntervalMs) {
    game.pet.castTimerMsSecondary -= GAME_RULES.jungleSnakeCastIntervalMs;
    const targets = findNearestRobots(
      game.pet.x,
      game.pet.y,
      GAME_RULES.jungleSnakeTargetCount
    );

    targets.forEach((target) => {
      spawnProjectile({
        x: game.pet.x,
        y: game.pet.y - 10,
        targetId: target.id,
        kind: "jungle-venom-shot",
      });
    });
  }
}

function updateElephantPet(deltaSeconds, deltaMs) {
  let target = game.robots.find((robot) => robot.id === game.pet.targetId && !robot.dead) || null;

  if (target && game.pet.castTimerMs > 0) {
    game.pet.castTimerMs = Math.max(0, game.pet.castTimerMs - deltaMs);

    const targetDistance = Math.hypot(
      Number(target.elephantRoamTargetX || target.x) - target.x,
      Number(target.elephantRoamTargetY || target.y) - target.y
    );

    if (!Number.isFinite(target.elephantRoamTargetX) || !Number.isFinite(target.elephantRoamTargetY) || targetDistance < 36) {
      target.elephantRoamTargetX = randomBetween(48, Math.max(48, game.width - 48));
      target.elephantRoamTargetY = randomBetween(84, Math.max(84, game.height - 48));
    }

    const dx = target.elephantRoamTargetX - target.x;
    const dy = target.elephantRoamTargetY - target.y;
    const distance = Math.hypot(dx, dy) || 1;
    const step = GAME_RULES.elephantRideSpeed * deltaSeconds;
    target.x = clamp(target.x + (dx / distance) * Math.min(step, distance), 24, Math.max(24, game.width - 24));
    target.y = clamp(target.y + (dy / distance) * Math.min(step, distance), 24, Math.max(24, game.height - 24));
    game.pet.x = target.x + 10;
    game.pet.y = target.y - 18;
    target.attackTimer = 0;

    if (game.pet.castTimerMs === 0 && !target.dead) {
      damageRobot(target, target.hp, "slon-dzungli");
      spawnFloatingText(target.x, target.y - 132, "SLON", "heal");
      game.pet.targetId = null;
    }

    return;
  }

  if (!target) {
    game.pet.targetId = null;
    game.pet.castTimerMs = 0;
  }

  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  game.pet.castTimerMsSecondary += deltaMs;

  while (game.pet.castTimerMsSecondary >= GAME_RULES.elephantRideCooldownMs) {
    game.pet.castTimerMsSecondary -= GAME_RULES.elephantRideCooldownMs;
    const aliveRobots = game.robots.filter((robot) => !robot.dead);

    if (aliveRobots.length === 0) {
      continue;
    }

    target = aliveRobots[randomBetween(0, aliveRobots.length - 1)];
    game.pet.targetId = target.id;
    game.pet.castTimerMs = GAME_RULES.elephantRideDurationMs;
    target.elephantRoamTargetX = randomBetween(48, Math.max(48, game.width - 48));
    target.elephantRoamTargetY = randomBetween(84, Math.max(84, game.height - 48));
    spawnFloatingText(target.x, target.y - 132, "PRZEJAZDZKA", "heal");
    break;
  }
}

function updateFrogPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  updateJungleFields(deltaMs);
  game.pet.castTimerMsSecondary += deltaMs;

  while (game.pet.castTimerMsSecondary >= GAME_RULES.frogPuddleIntervalMs) {
    game.pet.castTimerMsSecondary -= GAME_RULES.frogPuddleIntervalMs;
    createFrogPuddle();
    spawnFloatingText(game.player.x, game.player.y - 136, "ZABA", "heal");
  }
}

function updateSlothPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);

  if (game.pet.castTimerMs > 0) {
    game.pet.castTimerMs = Math.max(0, game.pet.castTimerMs - deltaMs);
  }

  game.pet.castTimerMsSecondary += deltaMs;

  while (game.pet.castTimerMsSecondary >= GAME_RULES.slothSlowCooldownMs) {
    game.pet.castTimerMsSecondary -= GAME_RULES.slothSlowCooldownMs;
    game.pet.castTimerMs = GAME_RULES.slothSlowDurationMs;
    spawnFloatingText(game.player.x, game.player.y - 136, "LENIWIEC", "heal");
  }
}

function updateCrocodilePet(deltaSeconds, deltaMs) {
  let target = game.robots.find((robot) => robot.id === game.pet.targetId && !robot.dead) || null;

  if (!target) {
    game.pet.targetId = null;
    game.pet.castTimerMs = 0;
  }

  if (game.pet.targetId && target) {
    game.pet.castTimerMs = Math.max(0, game.pet.castTimerMs - deltaMs);
    game.pet.x = target.x;
    game.pet.y = target.y + 12;
    target.attackTimer = 0;

    if (game.pet.castTimerMs === 0) {
      damageRobot(target, target.hp, "krokodyl-dzungli");
      spawnFloatingText(target.x, target.y - 132, "KROKODYL", "heal");
      game.pet.targetId = null;
      game.pet.castTimerMsSecondary = 0;
    }

    return;
  }

  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  game.pet.castTimerMsSecondary += deltaMs;

  if (game.pet.castTimerMsSecondary < GAME_RULES.crocodileSurfaceDurationMs) {
    return;
  }

  target = findNearestRobot(game.player.x, game.player.y);

  if (!target) {
    return;
  }

  game.pet.targetId = target.id;
  game.pet.castTimerMs = GAME_RULES.crocodileBurrowDurationMs;
  game.pet.castTimerMsSecondary = 0;
  spawnFloatingText(target.x, target.y - 132, "POD ZIEMIA", "heal");
}

function updatePascalPet(deltaSeconds, deltaMs) {
  movePetTowards(game.player.x + 70, game.player.y + 34, deltaSeconds);
  maybeTriggerPascalEmergency();

  if (game.pet.pascalInvisibleMs > 0) {
    game.pet.pascalInvisibleMs = Math.max(0, game.pet.pascalInvisibleMs - deltaMs);
  }
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
  spawnFloatingText(game.player.x, game.player.y - 120, `-${reducedAmount}`, "hurt");

  if (game.player.hp > 0 && getEquippedPet()?.id === "papuga-dzungli") {
    healPlayer(Math.max(1, Math.round(reducedAmount * GAME_RULES.jungleParrotHealMultiplier)));
  }

  maybeTriggerPascalEmergency();
}

function awardCoins(amount) {
  state.coins += amount;
  updateBalanceDisplays();
  saveState();
}

function awardTrophies(amount) {
  game.trophiesEarnedRun += amount;
  const missionProgress = getBookMissionProgressState();
  missionProgress.trophiesEarnedSinceMissions += Math.max(0, Number(amount || 0));

  if (isCoopMatchActive()) {
    return;
  }

  state.trophies += amount;
  updateBalanceDisplays();
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

function updateBookMissionProgressAfterRound(status, options = {}) {
  const progress = getBookMissionProgressState();
  const wasVictory = status === "Zwyciestwo";
  const robotsKilledTotal = Math.max(0, Number(options.robotsKilledTotal || 0));
  const damageDealtRun = Math.max(0, Number(options.damageDealtRun || 0));
  const petId = String(options.petId || "");

  progress.totalRobotDamage += damageDealtRun;
  progress.currentRunRobots = robotsKilledTotal;
  progress.fullClearStreak = wasVictory ? progress.fullClearStreak + 1 : 0;

  if (isJungleBookPetId(petId)) {
    progress.junglePetRoundsPlayed += 1;
  }
}

function damageRobot(robot, amount, source = "generic") {
  if (!robot || robot.dead) {
    return;
  }

  let boostedAmount = amount;

  if (source === "player") {
    boostedAmount += getTigerDamageBonus();

    if (getEquippedPet()?.id === "malpa-dzungli" && robot.monkeyMarked) {
      boostedAmount = Math.round(boostedAmount * GAME_RULES.jungleMonkeyDamageMultiplier);
    }
  }

  const appliedDamage = Math.min(boostedAmount, robot.hp);
  robot.hp = Math.max(0, robot.hp - boostedAmount);
  game.damageDealtRun += appliedDamage;
  spawnFloatingText(robot.x, robot.y - 92, `-${appliedDamage}`, "hit");

  if (robot.hp <= 0) {
    robot.dead = true;
    game.robotsKilledTotal += 1;
    const missionProgress = getBookMissionProgressState();
    missionProgress.robotsDefeatedSinceMissions += 1;
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

function applyJungleSnakeVenom(robot) {
  if (!robot || robot.dead) {
    return;
  }

  slowRobot(robot, GAME_RULES.jungleSnakeDurationMs, GAME_RULES.jungleSnakeSlowMultiplier);
  robot.snakeVenomTimerMs = Math.max(robot.snakeVenomTimerMs || 0, GAME_RULES.jungleSnakeDurationMs);
  robot.snakeDamageMultiplier = Math.min(
    robot.snakeDamageMultiplier || 1,
    GAME_RULES.jungleSnakeDamageMultiplier
  );
  spawnFloatingText(robot.x, robot.y - 118, "JAD", "heal");
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
  if (!game.active || game.coopResultApplied) {
    return;
  }

  const defeatReward = getDefeatTrophyReward();

  if (defeatReward > 0) {
    awardTrophies(defeatReward);
  }

  if (isCoopMatchActive()) {
    if (game.coopIsHost) {
      void publishCoopResult("Przegrana", "Twoje statystyki z tej rundy.");
    }
    concludeCoopGameSession("Przegrana", "Twoje statystyki z tej rundy.");
    return;
  }

  concludeGameSession("Przegrana", "Twoje statystyki z tej rundy.");
}

function finishGameVictory() {
  if (!game.active || game.coopResultApplied) {
    return;
  }

  if (isCoopMatchActive()) {
    if (game.coopIsHost) {
      void publishCoopResult("Zwyciestwo", "Przeszedles wszystkie 5 fal.");
    }
    concludeCoopGameSession("Zwyciestwo", "Przeszedles wszystkie 5 fal.");
    return;
  }

  concludeGameSession("Zwyciestwo", "Przeszedles wszystkie 5 fal.");
}

function getDefeatTrophyReward() {
  const activeWave = game.currentWave > 0 ? game.currentWave : 1;
  return Number(getWaveConfig(activeWave).defeatReward || 0);
}

function requestExitGame() {
  if (isCoopMatchActive()) {
    leaveParty();
    return;
  }

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

function getCurrentWaveDisplayNumber() {
  return Math.max(1, Number(game.currentWave || game.pendingWave || 1));
}

function getRemainingRobotsInCurrentWave() {
  const aliveRobots = game.robots.filter((robot) => !robot.dead).length;

  if (isFirstRobotPreludeActive() || isFirstRobotTutorialPaused()) {
    return Math.max(1, aliveRobots);
  }

  let remaining = aliveRobots + Math.max(0, Number(game.waveRobotsRemaining || 0));

  if (Array.isArray(game.waveStages) && game.currentWaveStageIndex >= 0) {
    for (let stageIndex = game.currentWaveStageIndex + 1; stageIndex < game.waveStages.length; stageIndex += 1) {
      remaining += Math.max(0, Number(game.waveStages[stageIndex]?.count || 0));
    }
  } else if (remaining === 0 && game.pendingWave > 0) {
    remaining = Math.max(0, Number(getWaveConfig(game.pendingWave).robotCount || 0));
  }

  return remaining;
}

function resumeGameFromPause() {
  game.paused = false;
  game.pauseResumeRobotsLeft = getRemainingRobotsInCurrentWave();
  game.pauseResumeCountdownMs = 3000;
}

function requestPauseGame() {
  if (!game.active || game.paused || !modalBackdrop.hidden) {
    return;
  }

  if (isCoopMatchActive()) {
    openModal({
      title: "Wspólna gra",
      message: "Wspólnej rundy nie da się zatrzymać. Możesz opuścić drużynę.",
      buttonText: "OPUŚĆ DRUŻYNĘ",
      dismissible: true,
      onConfirm: () => {
        closeModal();
        leaveParty();
      },
    });
    return;
  }

  game.paused = true;
  resetGameKeys();
  resetTouchControls();
  syncWalkingLoop();

  openModal({
    title: "Pauza",
    message: "Runda jest zatrzymana. Kliknij, aby wrócić do walki.",
    buttonText: "KONTYNUUJ",
    dismissible: false,
    onConfirm: () => {
      closeModal();
      resumeGameFromPause();
    },
  });
}

function concludeGameSession(status, note) {
  if (!game.statsCounted) {
    game.statsCounted = true;
    state.completedGamesTotal += 1;
    state.robotsDefeatedTotal += Math.max(0, Number(game.robotsKilledTotal || 0));
    updateBookMissionProgressAfterRound(status, {
      robotsKilledTotal: game.robotsKilledTotal,
      damageDealtRun: game.damageDealtRun,
      petId: game.runPetId,
    });
    saveState();
  }

  game.active = false;
  window.cancelAnimationFrame(game.animationId);
  game.animationId = 0;
  resetGameKeys();
  syncTouchControlsVisibility();
  game.resultStatus = status;
  game.resultNote = note;
  showGameResult();
}

function concludeCoopGameSession(status, note, overrides = {}) {
  if (game.coopResultApplied) {
    return;
  }

  const robotsKilledTotal = Math.max(
    0,
    Number(
      overrides.robotsKilledTotal ?? game.robotsKilledTotal ?? 0
    )
  );
  const trophiesEarnedRun = Math.max(
    0,
    Number(
      overrides.trophiesEarnedRun ?? game.trophiesEarnedRun ?? 0
    )
  );

  game.coopResultApplied = true;

  if (!game.statsCounted) {
    game.statsCounted = true;
    state.completedGamesTotal += 1;
    state.robotsDefeatedTotal += robotsKilledTotal;
    updateBookMissionProgressAfterRound(status, {
      robotsKilledTotal,
      damageDealtRun: overrides.damageDealtRun ?? game.damageDealtRun,
      petId: overrides.petId ?? game.runPetId,
    });
  }

  if (trophiesEarnedRun > 0) {
    state.trophies = Math.max(0, state.trophies + trophiesEarnedRun);
    updateBalanceDisplays();
  }

  saveState();
  game.active = false;
  window.cancelAnimationFrame(game.animationId);
  game.animationId = 0;
  resetGameKeys();
  syncTouchControlsVisibility();
  game.resultStatus = status || "Koniec rundy";
  game.resultNote = note || "Twoje statystyki z tej rundy.";
  game.robotsKilledTotal = robotsKilledTotal;
  game.trophiesEarnedRun = trophiesEarnedRun;
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

function findNearestRobots(x, y, count = 1) {
  return game.robots
    .filter((robot) => !robot.dead)
    .sort(
      (first, second) =>
        Math.hypot(first.x - x, first.y - y) - Math.hypot(second.x - x, second.y - y)
    )
    .slice(0, Math.max(0, count));
}

function findNearestRobotExcluding(x, y, excludedRobotId) {
  let nearest = null;
  let nearestDistance = Infinity;

  game.robots.forEach((robot) => {
    if (robot.dead || robot.id === excludedRobotId) {
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
  const baseHp = getPlayerMaxHpForLoadout(getEquippedCharacter()?.id, getEquippedPet()?.id);
  return isOlympianBuffActive() ? baseHp * 2 : baseHp;
}

function getWaveConfig(waveNumber) {
  const normalizedWave = clamp(Math.round(waveNumber || 1), 1, TOTAL_GAME_WAVES);
  const waveConfigs = {
    1: {
      wave: 1,
      robotCount: 10,
      robotHp: 200,
      robotDamage: 10,
      robotAttackIntervalMs: 100,
      killReward: 0,
      completionReward: 0,
      defeatReward: 10,
      spawnIntervalMs: 1500,
      spawnBatch: 3,
      initialBatch: 3,
    },
    2: {
      wave: 2,
      robotCount: 8,
      robotHp: 500,
      robotDamage: 15,
      robotAttackIntervalMs: 100,
      killReward: 0,
      completionReward: 0,
      defeatReward: 10,
      spawnIntervalMs: 2000,
      spawnBatch: 1,
      initialBatch: 1,
    },
    3: {
      wave: 3,
      robotCount: 7,
      robotHp: 700,
      robotDamage: 30,
      robotAttackIntervalMs: 100,
      killReward: 0,
      completionReward: 0,
      defeatReward: 20,
      spawnIntervalMs: 2500,
      spawnBatch: 1,
      initialBatch: 1,
    },
    4: {
      wave: 4,
      robotCount: 5,
      robotHp: 1000,
      robotDamage: 40,
      robotAttackIntervalMs: 100,
      killReward: 0,
      completionReward: 0,
      defeatReward: 35,
      spawnIntervalMs: 2000,
      spawnBatch: 1,
      initialBatch: 1,
    },
    5: {
      wave: 5,
      robotCount: 3,
      robotHp: 1500,
      robotDamage: 100,
      robotAttackIntervalMs: 300,
      killReward: 0,
      completionReward: 50,
      defeatReward: 35,
      spawnStages: [
        {
          count: 2,
          batch: 2,
          intervalMs: 1000,
          initialBatch: 0,
          robotHp: 1500,
          robotDamage: 100,
          robotAttackIntervalMs: 300,
        },
        {
          count: 1,
          batch: 1,
          intervalMs: 0,
          initialBatch: 0,
          waitForClear: true,
          robotHp: 2500,
          robotDamage: 20,
          robotAttackIntervalMs: 100,
        },
      ],
    },
  };

  return { ...waveConfigs[normalizedWave] };
}

function getRobotStats(waveConfig = getWaveConfig(game.currentWave || 1)) {
  const coopMultiplier = isCoopMatchActive() ? 2 : 1;

  if (getEquippedCharacter()?.id === "talia") {
    return {
      hp: (waveConfig.robotHp + 500) * coopMultiplier,
      damage: (waveConfig.robotDamage + 20) * coopMultiplier,
      speed: GAME_RULES.robotSpeed,
      attackIntervalMs: Number(waveConfig.robotAttackIntervalMs || 100),
    };
  }

  return {
    hp: waveConfig.robotHp * coopMultiplier,
    damage: waveConfig.robotDamage * coopMultiplier,
    speed: GAME_RULES.robotSpeed,
    attackIntervalMs: Number(waveConfig.robotAttackIntervalMs || 100),
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

  if (
    isMultiplayerMatchActive() &&
    projectile.targetType === "player" &&
    projectile.ownerId === multiplayer.selfId &&
    !projectile.remote
  ) {
    sendMultiplayerProjectile(projectile);
  }
}

function playProjectileSound(projectile) {
  const visual = getProjectileVisual(projectile);

  if (
    visual.src === "./assets/attacks/atak_elfie.jpeg" ||
    visual.src === "./assets/attacks/atak_wojowniczka.jpeg" ||
    visual.src === "./assets/attacks/atak_elinda.jpeg"
  ) {
    playOneShotSound("shotElfie", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/atak_2.png") {
    playOneShotSound("shot2", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/atak_3.png") {
    playOneShotSound("shot3", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/atak_4.png") {
    playOneShotSound("shot4", getBoostedAttackSoundVolume(0.55));
    return;
  }

  if (visual.src === "./assets/attacks/atak_nora.png") {
    playOneShotSound("shotNora", getBoostedAttackSoundVolume(1), 3);
    return;
  }

  if (visual.src === "./assets/attacks/atak_cloud.png") {
    playOneShotSound("shotCloud", getBoostedAttackSoundVolume(0.51));
    return;
  }

  if (visual.src === "./assets/attacks/atak_ann.png") {
    playOneShotSound("shotAnn", getBoostedAttackSoundVolume(0.78));
    return;
  }

  if (visual.src === "./assets/attacks/atak_ivy.jpeg") {
    playOneShotSound("shotIvy", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/coco_atak.jpeg") {
    playOneShotSound("shotCoco", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/atakk.jpeg") {
    playOneShotSound("shotAslan", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/koraa.jpeg") {
    playOneShotSound("shotKora", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/wodza.jpeg") {
    playOneShotSound("shotWodzu", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/aslan_atak.jpeg") {
    playOneShotSound("shotAslan", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/atak_zlotowlosa.jpeg") {
    playOneShotSound("shotZlotowlosa", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/atak_gertruda.jpeg") {
    playOneShotSound("shotGertruda", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/atak_malarka.jpeg") {
    playOneShotSound("shotMalarka", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/atak_ptasia.jpeg") {
    playOneShotSound("shotPtasia", getBoostedAttackSoundVolume(0.76));
    return;
  }

  if (visual.src === "./assets/attacks/atak_leołyżwiaż.jpeg" || visual.src === "./assets/attacks/atak_lilyrozowa.jpeg") {
    playOneShotSound("shotIceSkater", getBoostedAttackSoundVolume(0.55));
    return;
  }

  if (visual.src === "./assets/attacks/atak_5.png") {
    playOneShotSound("shot4", getBoostedAttackSoundVolume(0.55));
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

  if (character?.id === "cloud") {
    return "cloud-shot";
  }

  if (character?.id === "ann") {
    return "ann-shot";
  }

  if (character?.id === "ivy") {
    return "ivy-shot";
  }

  if (character?.id === "ozdobiona-ivy" || character?.id === "ivy-obronczyni-dzungli") {
    return "ivy-shot";
  }

  if (character?.id === "coco-nkosi") {
    return "coco-shot";
  }

  if (character?.id === "roco-nkosi") {
    return "coco-shot";
  }

  if (character?.id === "aslan") {
    return "aslan-shot";
  }

  if (character?.id === "aslan-za-mlodu" || character?.id === "naomi") {
    return "aslan-shot";
  }

  if (character?.id === "wojownik-aslan") {
    return "aslan-shot";
  }

  if (character?.id === "kora" || character?.id === "krolowa-kora") {
    return "kora-shot";
  }

  if (character?.id === "kira") {
    return "kira-shot";
  }

  if (character?.id === "wodzu") {
    return "wodzu-shot";
  }

  if (character?.id === "zlotowlosa") {
    return "zlotowlosa-shot";
  }

  if (character?.id === "gertruda" || character?.id === "gertruda-zla-macocha") {
    return "gertruda-shot";
  }

  if (character?.id === "zlotowlosa-malarka") {
    return "malarka-shot";
  }

  if (
    character?.id === "cassandra-ptasia-odslona" ||
    character?.id === "cassandra-przygotowana-do-walki"
  ) {
    return "ptasia-shot";
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

function updateJungleMonkeyMarks() {
  game.robots.forEach((robot) => {
    robot.monkeyMarked = false;
  });

  if (getEquippedPet()?.id !== "malpa-dzungli") {
    return;
  }

  findNearestRobots(
    game.player.x,
    game.player.y,
    GAME_RULES.jungleMonkeyMarkedTargets
  ).forEach((robot) => {
    robot.monkeyMarked = true;
  });
}

function isSlothSlowActive() {
  return Boolean(getEquippedPet()?.id === "leniwiec-dzungli" && game.pet.castTimerMs > 0);
}

function getTigerDamageBonus() {
  if (getEquippedPet()?.id !== "tygrys-dzungli") {
    return 0;
  }

  const missingHp = Math.max(0, getPlayerMaxHp() - Math.max(0, Number(game.player.hp || 0)));
  return Math.floor(missingHp / GAME_RULES.tigerDamageStepHp) * GAME_RULES.tigerDamagePerStep;
}

function getRobotSlowMultiplier(robot) {
  if (!robot || robot.dead) {
    return 1;
  }

  let multiplier = robot.slowTimerMs > 0 ? (robot.slowMultiplier || 1) : 1;

  if (getEquippedPet()?.id === "wrobelek") {
    multiplier = Math.min(multiplier, 0.75);
  }

  if (isSlothSlowActive()) {
    multiplier = Math.min(multiplier, GAME_RULES.slothSlowMultiplier);
  }

  return multiplier;
}

function getRobotDamageMultiplier(robot) {
  if (!robot || robot.dead) {
    return 1;
  }

  return robot.snakeVenomTimerMs > 0 ? (robot.snakeDamageMultiplier || 1) : 1;
}

function isPascalInvisibilityActive() {
  return Boolean(getEquippedPet()?.id === "pascal" && game.pet.pascalInvisibleMs > 0);
}

function maybeTriggerPascalEmergency() {
  if (
    getEquippedPet()?.id !== "pascal" ||
    game.pet.pascalTriggered ||
    game.player.hp <= 0 ||
    game.player.hp >= 2000
  ) {
    return;
  }

  game.pet.pascalTriggered = true;
  game.pet.pascalInvisibleMs = GAME_RULES.pascalInvisibilityMs;
  spawnFloatingText(game.player.x, game.player.y - 136, "PASCAL", "heal");
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

function getJungleFieldEffect(x, y) {
  return {
    insideField: game.jungleFields.some(
      (field) => field.kind !== "frog" && Math.hypot(field.x - x, field.y - y) <= field.radius
    ),
  };
}

function getFrogPuddleEffect(x, y) {
  return {
    fields: game.jungleFields.filter(
      (field) => field.kind === "frog" && Math.hypot(field.x - x, field.y - y) <= field.radius
    ),
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

function updateJungleFields(deltaMs) {
  game.jungleFields = (game.jungleFields || [])
    .map((field) => ({
      ...field,
      ttlMs: Number(field.ttlMs || 0) - deltaMs,
    }))
    .filter((field) => field.ttlMs > 0);
}

function healCoopPlayer(profileId, amount) {
  const player = game.coopPlayers[sanitizeProfileId(profileId)];

  if (!player || player.alive === false) {
    return;
  }

  const maxHp = Number(player.maxHp || getPlayerMaxHpForLoadout(player.characterId, player.petId));
  const realHeal = Math.min(amount, Math.max(0, maxHp - Number(player.hp || 0)));

  if (realHeal <= 0) {
    return;
  }

  player.hp = Math.min(maxHp, Number(player.hp || 0) + realHeal);
  if (player.profileId === state.profileId) {
    game.player.hp = player.hp;
  }
  spawnFloatingText(player.x, player.y - 120, `+${realHeal}`, "heal");
}

function updateJungleSupportFields(deltaMs, deltaSeconds) {
  const pet = getEquippedPet();

  if (!pet || pet.id !== "zaba-dzungli") {
    return;
  }

  const frogFields = game.jungleFields.filter((field) => field.kind === "frog");

  frogFields.forEach((field) => {
    const localInside = Math.hypot(field.x - game.player.x, field.y - game.player.y) <= field.radius;
    field.playerHealTimerMs = localInside ? Number(field.playerHealTimerMs || 0) + deltaMs : 0;

    while (field.playerHealTimerMs >= GAME_RULES.frogPuddleHealIntervalMs) {
      field.playerHealTimerMs -= GAME_RULES.frogPuddleHealIntervalMs;
      healPlayer(GAME_RULES.frogPuddleHealAmount);
    }

    if (!isCoopMatchActive() || !game.coopIsHost) {
      return;
    }

    getRemoteCoopPlayers().forEach((player) => {
      const profileId = sanitizeProfileId(player.profileId);
      const inside = Math.hypot(field.x - Number(player.x || 0), field.y - Number(player.y || 0)) <= field.radius;
      const currentTimer = Number(field.coopHealTimers?.[profileId] || 0);
      const nextTimer = inside ? currentTimer + deltaMs : 0;
      field.coopHealTimers = {
        ...(field.coopHealTimers || {}),
        [profileId]: nextTimer,
      };

      while (field.coopHealTimers[profileId] >= GAME_RULES.frogPuddleHealIntervalMs) {
        field.coopHealTimers[profileId] -= GAME_RULES.frogPuddleHealIntervalMs;
        healCoopPlayer(profileId, GAME_RULES.frogPuddleHealAmount);
      }
    });
  });
}

function buildMultiplayerRemotePlayerMarkup(player) {
  const character = CATALOG.characters.find((item) => item.id === player.characterId) || CATALOG.characters[0];
  const pet = CATALOG.pets.find((item) => item.id === player.petId) || null;
  const petX = Math.round(player.x + 42);
  const petY = Math.round(player.y + 22);
  const maxHp = Number(player.maxHp || getPlayerMaxHpForLoadout(player.characterId, player.petId));
  const healthFill = getHealthFillPercent(player.hp || 0, maxHp);

  return `
    <div class="entity remote-player-entity" style="left:${player.x}px; top:${player.y}px;">
      <p class="entity-health opponent-health" style="--health-fill:${healthFill};">
        <span class="health-label-text">${Math.max(0, Math.ceil(player.hp || 0))}</span>
      </p>
      <p class="opponent-nickname">${player.nickname || "Gracz"}</p>
      <div class="player-visual opponent-visual">
        <div class="player-sprite-frame opponent-sprite-frame remote-player-frame">
          ${buildPreviewAssetMarkup(character, {
            imageClass: "entity-image asset-image",
            fallbackText: character.name || "GRACZ",
            alt: character.name || "Gracz",
            usePreviewVideo: false,
          })}
        </div>
      </div>
    </div>
    ${pet ? `
      <div class="entity remote-pet-entity" style="left:${petX}px; top:${petY}px;">
        <div class="pet-sprite-frame remote-pet-frame">
          <img
            class="entity-image asset-image"
            src="${pet.image}"
            alt="${pet.name}"
            data-fallback-text="PLATOYA"
          />
          <div class="asset-fallback">PLATOYA</div>
        </div>
      </div>
    ` : ""}
  `;
}

function buildMultiplayerShowcaseCardMarkup(player) {
  const character = CATALOG.characters.find((item) => item.id === player.characterId) || CATALOG.characters[0];
  const pet = CATALOG.pets.find((item) => item.id === player.petId) || null;
  const label = player.id === multiplayer.selfId ? "TY" : (player.nickname || "GRACZ");

  return `
    <div class="multiplayer-showcase-card${player.id === multiplayer.selfId ? " self" : ""}">
      <div class="multiplayer-showcase-character">
        ${buildPreviewAssetMarkup(character, {
          imageClass: "item-image asset-image",
          videoClass: "item-image asset-video",
          fallbackText: character.name || "POSTAC",
          alt: character.name || "Postac",
          usePreviewVideo: false,
        })}
      </div>
      <div class="multiplayer-showcase-meta">
        ${pet ? `
          <div class="multiplayer-showcase-pet">
            <img class="item-image asset-image" src="${pet.image}" alt="${pet.name}" data-fallback-text="PLATOYA" />
            <div class="asset-fallback">PLATOYA</div>
          </div>
        ` : `<div class="multiplayer-showcase-pet empty"><span>PLATOYA</span></div>`}
        <p class="multiplayer-showcase-name">${label}</p>
      </div>
    </div>
  `;
}

function renderGameScene() {
  refreshAmmoConfig();
  gameMap.dataset.worldTheme = getGlobalVisualWorldTheme();
  const multiplayerMode = game.mode === "multiplayer";
  const coopMode = game.mode === "coop";
  const multiplayerCountdownActive = multiplayerMode && game.multiplayerStartCountdownMs > 0;
  const pauseResumeCountdownActive = !multiplayerMode && game.pauseResumeCountdownMs > 0;
  const showFirstRobotTutorial = isFirstRobotTutorialPaused();
  gameMap.classList.toggle("multiplayer-ffa", multiplayerMode);
  gameMap.classList.toggle("first-robot-tutorial", showFirstRobotTutorial);
  playerEntity.classList.toggle("tutorial-focus", showFirstRobotTutorial);
  waveBanner.hidden =
    (!multiplayerCountdownActive && !pauseResumeCountdownActive && game.waveIntroMs <= 0) ||
    (multiplayerMode && !multiplayerCountdownActive);
  syncBackgroundMusicVolume(0.18);
  waveBannerTitle.textContent = multiplayerCountdownActive
    ? "GRACZE GOTOWI"
    : pauseResumeCountdownActive
      ? `KONTYNUACJA FALI ${getCurrentWaveDisplayNumber()}`
      : `FALA ${game.pendingWave}`;
  const robotsLeftText = `${Math.max(0, Number(game.pauseResumeRobotsLeft || 0))} ROBOTÓW ZOSTAŁO`;
  const bannerLabelText = pauseResumeCountdownActive ? robotsLeftText : "Start za";
  const bannerCountdownValue = Math.max(
    1,
    Math.ceil(
      (
        multiplayerCountdownActive
          ? game.multiplayerStartCountdownMs
          : pauseResumeCountdownActive
            ? game.pauseResumeCountdownMs
            : game.waveIntroMs
      ) / 1000
    )
  );
  if (waveBannerLabel) {
    waveBannerLabel.textContent = bannerLabelText;
  }
  waveBannerCountdown.textContent = String(
    bannerCountdownValue
  );
  if (waveBannerPlayers) {
    waveBannerPlayers.hidden = !multiplayerCountdownActive;
    waveBannerPlayers.innerHTML = multiplayerCountdownActive
      ? getMultiplayerMatchPlayers().map((player) => buildMultiplayerShowcaseCardMarkup(player)).join("")
      : "";
    syncBrokenAssets(waveBannerPlayers);
    syncAnimatedAssets(waveBannerPlayers);
  }
  playerEntity.style.left = `${game.player.x}px`;
  playerEntity.style.top = `${game.player.y}px`;
  playerEntity.classList.toggle("pascal-invisible", isPascalInvisibilityActive());
  playerHealthLabel.innerHTML = `<span class="health-label-text">${Math.ceil(game.player.hp)}</span>`;
  playerHealthLabel.style.setProperty("--health-fill", getHealthFillPercent(game.player.hp, getPlayerMaxHp()));
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
    gamePetEntity.dataset.petId = pet.id;
    petCooldownBar.hidden = multiplayerMode || petCooldownState === null;
    petCooldownBar.dataset.kind = !multiplayerMode && petCooldownState?.kind ? petCooldownState.kind : "";
    petCooldownFill.style.transform = `scaleY(${multiplayerMode || petCooldownState === null ? 0 : petCooldownState.progress})`;
    petPackLayer.innerHTML = "";
  } else {
    gamePetEntity.hidden = true;
    delete gamePetEntity.dataset.petId;
    petCooldownBar.hidden = true;
    petCooldownBar.dataset.kind = "";
    petPackLayer.innerHTML = "";
    delete playerShield.dataset.kind;
  }

  if (opponentEntity) {
    opponentEntity.hidden = true;
  }

  if (multiplayerPlayersLayer) {
    if (multiplayerMode) {
      multiplayerPlayersLayer.innerHTML = getMultiplayerMatchPlayers()
        .filter((player) => player.id !== multiplayer.selfId && player.alive !== false && player.connected !== false)
        .map((player) => buildMultiplayerRemotePlayerMarkup(player))
        .join("");
    } else if (coopMode) {
      multiplayerPlayersLayer.innerHTML = getRemoteCoopPlayers()
        .filter((player) => player.alive !== false)
        .map((player) => buildMultiplayerRemotePlayerMarkup({
          id: player.profileId,
          nickname: player.nickname,
          x: player.x,
          y: player.y,
          hp: player.hp,
          characterId: player.characterId,
          petId: player.petId,
          alive: player.alive,
          connected: true,
        }))
        .join("");
    } else {
      multiplayerPlayersLayer.innerHTML = "";
    }
  }

  barriersLayer.innerHTML = game.barriers
    .map(
      (barrier) => `
        <div
          class="barrier-wall cage"
          style="left:${barrier.x}px; top:${barrier.y}px; width:${barrier.size}px; height:${barrier.size}px;"
        >
          <p class="barrier-health">${Math.ceil(barrier.hp)}</p>
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

  if (jungleFieldsLayer) {
    jungleFieldsLayer.innerHTML = game.jungleFields
      .map(
        (field) => `
          <div
            class="jungle-field${field.kind === "frog" ? " frog-puddle" : ""}"
            style="left:${field.x}px; top:${field.y}px; width:${field.radius * 2}px; height:${field.radius * 2}px;"
          ></div>
        `
      )
      .join("");
  }

  const robotVisual = getRobotVisual();

  robotsLayer.innerHTML = game.robots
    .map(
      (robot) => `
        <div class="robot-entity${robot.sizeClass === "final-wave" ? " final-wave-robot" : ""}${robot.poisonTimerMs > 0 ? " poisoned" : ""}${robot.snakeVenomTimerMs > 0 ? " venomed" : ""}${robot.monkeyMarked ? " monkey-marked" : ""}${isFirstRobotTutorialPaused() && robot.id === getFirstRobotTutorialTarget()?.id ? " tutorial-focus" : ""}" style="left:${robot.x}px; top:${robot.y}px;">
          <p class="robot-health" style="--health-fill:${getHealthFillPercent(robot.hp, robot.maxHp || robot.hp || 1)};">
            <span class="health-label-text">${Math.ceil(robot.hp)}</span>
          </p>
          <div class="robot-sprite-frame">
            <img
              class="entity-image asset-image robot-core-image"
              src="${robotVisual.src}"
              alt="${robotVisual.alt}"
              data-fallback-text="${robotVisual.fallbackText}"
            />
            <div class="asset-fallback">${robotVisual.fallbackText}</div>
            ${robot.stunTimerMs > 0 ? `<div class="robot-stun-dots"><span></span><span></span><span></span></div>` : ""}
          </div>
          ${robot.bubbleTimerMs > 0 ? `<div class="robot-bubble"></div>` : ""}
        </div>
      `
    )
    .join("");

  const tutorialRobot = showFirstRobotTutorial ? getFirstRobotTutorialTarget() : null;

  if (gameTutorialOverlay) {
    const showTutorial = !multiplayerMode && Boolean(tutorialRobot);
    gameTutorialOverlay.hidden = !showTutorial;

    if (showTutorial && gameTutorialSpotlight) {
      gameTutorialSpotlight.style.left = `${tutorialRobot.x}px`;
      gameTutorialSpotlight.style.top = `${tutorialRobot.y}px`;
    }

    if (showTutorial && gameTutorialMessage) {
      gameTutorialMessage.textContent =
        "UWAŻAJ! IDZIE PIERWSZY ROBOT. NACIŚNIJ SPACJĘ, ABY WYSTRZELIĆ POCISK";
    }
  }

  projectilesLayer.innerHTML = game.projectiles
    .map(
      (projectile) => {
        const visual = getProjectileVisual(projectile);
        const projectileBody = projectile.kind === "jungle-venom-shot"
          ? `<div class="jungle-venom-core" aria-hidden="true"></div>`
          : `
            <img
              class="projectile-image asset-image"
              src="${visual.src}"
              alt="${visual.alt}"
              data-fallback-text="${visual.fallbackText}"
            />
            <div class="asset-fallback">${visual.fallbackText}</div>
          `;
        return `
        <div class="projectile" style="left:${projectile.x}px; top:${projectile.y}px;">
          <div class="projectile-shell${projectile.kind === "snake-shot" ? " snake-shot" : projectile.kind === "jungle-venom-shot" ? " jungle-venom-shot" : projectile.kind === "elfie-shot" ? " elfie-shot" : projectile.kind === "millo-elfie-shot" ? " millo-elfie-shot" : projectile.kind === "lpsotka" ? " lpsotka-shot" : projectile.kind === "linda-shot" ? " linda-shot" : projectile.kind === "lily-shot" ? " lily-shot" : projectile.kind === "nora-shot" ? " nora-shot" : projectile.kind === "cloud-shot" ? " cloud-shot" : projectile.kind === "ann-shot" ? " ann-shot" : projectile.kind === "polar-bear-shot" ? " polar-bear-shot" : projectile.kind === "tricky-shot" ? " tricky-shot" : ""}">
            ${projectileBody}
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

function getHealthFillPercent(currentHp, maxHp) {
  const safeMaxHp = Math.max(1, Number(maxHp || 0));
  const ratio = clamp(Number(currentHp || 0) / safeMaxHp, 0, 1);
  return `${(ratio * 100).toFixed(2)}%`;
}

function animateResultCounter(node, targetValue, delayMs, onDone) {
  const startTimeout = window.setTimeout(() => {
    if (targetValue === 0) {
      node.textContent = "0";
      if (typeof onDone === "function") {
        onDone();
      }
      return;
    }

    let current = 0;
    const step = targetValue > 0 ? 1 : -1;
    const interval = window.setInterval(() => {
      current += step;
      node.textContent = String(current);

      if ((step > 0 && current >= targetValue) || (step < 0 && current <= targetValue)) {
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
    const wasMultiplayer = game.mode === "multiplayer";
    const wasCoop = game.mode === "coop";
    const earnedTrophies = game.trophiesEarnedRun;
    hideGameResult();
    showView("lobby");

    if (wasMultiplayer) {
      if (multiplayer.playerRef) {
        multiplayer.playerRef.update({
          connected: false,
          lastSeenAt: Date.now(),
        }).catch(() => {});
      }
      resetMultiplayerState();
      return;
    }

    if (wasCoop) {
      await resetPartyAfterCoopResult();
    }

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

  if (!pet || pet.id !== "kot-roslina" || game.mode !== "solo") {
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
    game.mode === "multiplayer" ||
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

  if (game.mode === "coop") {
    const allyCount = getRemoteCoopPlayers().filter((player) => player.alive !== false).length;
    gameModeInfo.textContent = allyCount > 0
      ? `Wspólna gra: walczysz razem ze znajomym. Roboty mają podwójne życie i podwójne obrażenia.`
      : "Wspólna gra: czekam na stan znajomego.";
    return;
  }

  if (game.mode === "multiplayer") {
    const alivePlayers = getMultiplayerMatchPlayers().filter(
      (player) => player.alive !== false && player.connected !== false
    ).length;
    const totalPlayers = multiplayer.playerCount || getMultiplayerMatchPlayers().length || 1;
    gameModeInfo.textContent = `Bitwa graczy: ${alivePlayers}/${totalPlayers} wciąż walczy. Ty masz ${Math.max(0, Math.ceil(game.player.hp))} pz, a twoja PlatoYA jest razem z tobą na mapie.`;
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

    if (pet && pet.id === "norka") {
      gameModeInfo.textContent = `Norka: twoje maksymalne zycie wynosi teraz ${getPlayerMaxHp()} pz.`;
      return;
    }

    if (pet && pet.id === "pascal") {
      gameModeInfo.textContent = isPascalInvisibilityActive()
        ? `Pascal: niewidzialnosc aktywna jeszcze ${(game.pet.pascalInvisibleMs / 1000).toFixed(1)} s. Roboty walcza miedzy soba.`
        : game.pet.pascalTriggered
          ? "Pascal: moc została już wykorzystana w tej rundzie."
          : "Pascal: poniżej 2000 pz jednorazowo znikniesz na 5 s i zmusisz roboty do walki między sobą.";
      return;
    }

    if (pet && pet.id === "wrobelek") {
      gameModeInfo.textContent = "Wróbelek: wszystkie roboty są stale spowolnione o 25%.";
      return;
    }

    if (pet && pet.id === "jaguar") {
      const nextThreshold = Math.max(0, Number(game.pet.jaguarNextTriggerHp || 0));
      gameModeInfo.textContent = nextThreshold > 0
        ? `Jaguar: kolejny zielony krąg pojawi się przy ${nextThreshold} pz lub niżej.`
        : "Jaguar: wykorzystał już wszystkie progi życia w tej rundzie.";
      return;
    }

    if (pet && pet.id === "papuga-dzungli") {
      gameModeInfo.textContent = "Papuga: po każdym trafieniu od robota oddaje ci 10% zadanych obrażeń jako leczenie.";
      return;
    }

    if (pet && pet.id === "malpa-dzungli") {
      gameModeInfo.textContent = "Małpa: dwa najbliższe roboty są oznaczone na zielono i dostają od ciebie o 50% więcej obrażeń.";
      return;
    }

    if (pet && pet.id === "waz-dzungli") {
      const secondsLeft = Math.max(0, (GAME_RULES.jungleSnakeCastIntervalMs - game.pet.castTimerMsSecondary) / 1000);
      gameModeInfo.textContent = `Wąż: kolejny zielony jad poleci w dwa najbliższe roboty za ${secondsLeft.toFixed(1)} s.`;
      return;
    }

    if (pet && pet.id === "slon-dzungli") {
      if (game.pet.targetId && game.pet.castTimerMs > 0) {
        gameModeInfo.textContent = `Słoń: trwa przejażdżka z robotem, koniec za ${(game.pet.castTimerMs / 1000).toFixed(1)} s.`;
      } else {
        const secondsLeft = Math.max(0, (GAME_RULES.elephantRideCooldownMs - game.pet.castTimerMsSecondary) / 1000);
        gameModeInfo.textContent = `Słoń: kolejny robot poleci na przejażdżkę za ${secondsLeft.toFixed(1)} s.`;
      }
      return;
    }

    if (pet && pet.id === "zaba-dzungli") {
      const secondsLeft = Math.max(0, (GAME_RULES.frogPuddleIntervalMs - game.pet.castTimerMsSecondary) / 1000);
      gameModeInfo.textContent = `Żaba: kolejna toksyczna kałuża pojawi się pod tobą za ${secondsLeft.toFixed(1)} s.`;
      return;
    }

    if (pet && pet.id === "leniwiec-dzungli") {
      gameModeInfo.textContent = isSlothSlowActive()
        ? `Leniwiec: wszystko poza graczami jest spowolnione jeszcze ${(game.pet.castTimerMs / 1000).toFixed(1)} s.`
        : `Leniwiec: kolejna fala spowolnienia za ${Math.max(0, (GAME_RULES.slothSlowCooldownMs - game.pet.castTimerMsSecondary) / 1000).toFixed(1)} s.`;
      return;
    }

    if (pet && pet.id === "tygrys-dzungli") {
      gameModeInfo.textContent = `Tygrys: twój obecny bonus obrażeń to +${getTigerDamageBonus()} pz.`;
      return;
    }

    if (pet && pet.id === "krokodyl-dzungli") {
      gameModeInfo.textContent = game.pet.targetId && game.pet.castTimerMs > 0
        ? `Krokodyl: jest pod ziemią i wyskoczy za ${(game.pet.castTimerMs / 1000).toFixed(1)} s.`
        : `Krokodyl: po ${Math.max(0, (GAME_RULES.crocodileSurfaceDurationMs - game.pet.castTimerMsSecondary) / 1000).toFixed(1)} s ruszy po kolejnego robota.`;
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

  document.querySelectorAll("[data-tab-group='friends']").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === ui.friendsTab);
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
    return { src: "./assets/attacks/atak_2.png", alt: "Gwiazdy papugi", fallbackText: "GWIAZDY" };
  }

  if (projectile.kind === "jungle-venom-shot") {
    return { src: "./assets/attacks/atak_3.png", alt: "Jad Węża", fallbackText: "JAD" };
  }

  if (projectile.kind === "elfie-shot") {
    const projectileCharacterId = projectile.characterId || getEquippedCharacter()?.id;
    const isWarriorVariant = projectileCharacterId === "elfie-wojowniczka";
    const isNatureVariant = projectileCharacterId === "elfie-w-swojej-naturze";

    return {
      src: isWarriorVariant ? "./assets/attacks/atak_wojowniczka.jpeg" : "./assets/attacks/atak_elfie.jpeg",
      alt: isWarriorVariant
        ? "Atak Elfie Wojowniczki"
        : isNatureVariant
          ? "Atak Elfie w swojej naturze"
          : "Atak Elfie",
      fallbackText: isWarriorVariant ? "WOJOWNICZKA" : "ELFIE",
    };
  }

  if (projectile.kind === "millo-elfie-shot") {
    return { src: "./assets/attacks/atak_2.png", alt: "Atak Millo jako Elfie", fallbackText: "MILLO ELFIE" };
  }

  if (projectile.kind === "lpsotka") {
    return { src: "./assets/attacks/atak_3.png", alt: "Atak L'Psotki", fallbackText: "PSOTKA" };
  }

  if (projectile.kind === "linda-shot") {
    const projectileCharacterId = projectile.characterId || getEquippedCharacter()?.id;

    if (projectileCharacterId === "elfie-jako-linda") {
      return {
        src: "./assets/attacks/atak_elinda.jpeg",
        alt: "Atak Elfie jako Lindy",
        fallbackText: "E LINDA",
      };
    }

    return { src: "./assets/attacks/atak_3.png", alt: "Atak Lindy", fallbackText: "LINDA" };
  }

  if (projectile.kind === "lily-shot") {
    const projectileCharacterId = projectile.characterId || getEquippedCharacter()?.id;
    const isLeoVariant =
      projectileCharacterId === "leo" ||
      projectileCharacterId === "leo-skoczek-narciarski" ||
      projectileCharacterId === "lyzwiarz-leo";
    const isLilySkaterVariant = projectileCharacterId === "lyzwiarka-lily";
    const isLilyMasterVariant = projectileCharacterId === "mistrzyni-lyzwiarstwa-lily";
    const isSkiJumperVariant = projectileCharacterId === "leo-skoczek-narciarski";
    const isSkaterLeoVariant = projectileCharacterId === "lyzwiarz-leo";
    const isIceSkaterVariant = isLilySkaterVariant || isSkaterLeoVariant;
    return {
      src: isLilyMasterVariant
        ? "./assets/attacks/atak_lilyrozowa.jpeg"
        : isIceSkaterVariant
          ? "./assets/attacks/atak_leołyżwiaż.jpeg"
          : "./assets/attacks/atak_4.png",
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
      src: "./assets/attacks/atak_nora.png",
      alt: "Atak Nory",
      fallbackText: "NORA",
    };
  }

  if (projectile.kind === "cloud-shot") {
    return {
      src: "./assets/attacks/atak_cloud.png",
      alt: "Atak Clouda",
      fallbackText: "CLOUD",
    };
  }

  if (projectile.kind === "ann-shot") {
    return {
      src: "./assets/attacks/atak_ann.png",
      alt: "Atak Ann",
      fallbackText: "ANN",
    };
  }

  if (projectile.kind === "ivy-shot") {
    return {
      src: "./assets/attacks/atak_ivy.jpeg",
      alt: "Atak Ivy",
      fallbackText: "IVY",
    };
  }

  if (projectile.kind === "coco-shot") {
    return {
      src: "./assets/attacks/coco_atak.jpeg",
      alt: "Atak Coco N'Kosi",
      fallbackText: "COCO",
    };
  }

  if (projectile.kind === "aslan-shot") {
    return {
      src: "./assets/attacks/aslan_atak.jpeg",
      alt: "Atak Aslana",
      fallbackText: "ASLAN",
    };
  }

  if (projectile.kind === "kira-shot") {
    return {
      src: "./assets/attacks/atakk.jpeg",
      alt: "Atak Kiry",
      fallbackText: "KIRA",
    };
  }

  if (projectile.kind === "kora-shot") {
    return {
      src: "./assets/attacks/koraa.jpeg",
      alt: "Atak Kory",
      fallbackText: "KORA",
    };
  }

  if (projectile.kind === "wodzu-shot") {
    return {
      src: "./assets/attacks/wodza.jpeg",
      alt: "Atak Wodzu",
      fallbackText: "WODZU",
    };
  }

  if (projectile.kind === "zlotowlosa-shot") {
    return {
      src: "./assets/attacks/atak_zlotowlosa.jpeg",
      alt: "Atak Złotowłosej",
      fallbackText: "ZLOTA",
    };
  }

  if (projectile.kind === "gertruda-shot") {
    return {
      src: "./assets/attacks/atak_gertruda.jpeg",
      alt: (projectile.characterId || getEquippedCharacter()?.id) === "gertruda-zla-macocha"
        ? "Atak Gertrudy Złej Macochy"
        : "Atak Gertrudy",
      fallbackText: "GERTRUDA",
    };
  }

  if (projectile.kind === "malarka-shot") {
    return {
      src: "./assets/attacks/atak_malarka.jpeg",
      alt: "Atak Złotowłosej Malarki",
      fallbackText: "MALARKA",
    };
  }

  if (projectile.kind === "ptasia-shot") {
    const projectileCharacterId = projectile.characterId || getEquippedCharacter()?.id;
    return {
      src: "./assets/attacks/atak_ptasia.jpeg",
      alt: projectileCharacterId === "cassandra-przygotowana-do-walki"
        ? "Atak Cassandry Przygotowanej do Walki"
        : "Atak Cassandry w Ptasiej odsłonie",
      fallbackText: "PTASIA",
    };
  }

  if (projectile.kind === "polar-bear-shot") {
    return {
      src: "./assets/attacks/atak_4.png",
      alt: "Atak Niedźwiedzia Polarnego",
      fallbackText: "NIEDZWIEDZ",
    };
  }

  if (projectile.kind === "tricky-shot") {
    const projectileCharacterId = projectile.characterId || getEquippedCharacter()?.id;
    const isReindeerVariant = projectileCharacterId === "tricky-renifer";
    return {
      src: "./assets/attacks/atak_5.png",
      alt: isReindeerVariant ? "Atak Tricky Renifer" : "Atak Tricky",
      fallbackText: isReindeerVariant ? "RENIFER" : "TRICKY",
    };
  }

  const character = getEquippedCharacter();

  if (character?.id === "magik-millo") {
    return { src: "./assets/attacks/atak_2.png", alt: "Atak Magika Millo", fallbackText: "MILLO" };
  }

  if (character?.id === "magiczna-lidsay") {
    return { src: "./assets/attacks/atak_2.png", alt: "Atak Magicznej Lidsay", fallbackText: "LIDSAY" };
  }

  const weapon = getOwnedItem("weapons", state.equippedWeapon) || CATALOG.weapons[0];
  return { src: weapon.image, alt: weapon.name, fallbackText: weapon.name };
}

function getRobotVisualForWorldId(worldId = getGlobalVisualWorldTheme()) {
  if (worldId === "tower") {
    return {
      src: "./assets/robots/robot_wieza.jpeg",
      alt: "Robot Dżungli",
      fallbackText: "ROBOT",
    };
  }

  if (worldId === "winter") {
    return {
      src: "./assets/robots/robot_zimowy.jpeg",
      alt: "Robot Zimowy",
      fallbackText: "ROBOT",
    };
  }

  return {
    src: "./assets/robots/robot_magik.jpeg",
    alt: "Robot Magików",
    fallbackText: "ROBOT",
  };
}

function getRobotVisual() {
  return getRobotVisualForWorldId(getGlobalVisualWorldTheme());
}

function loadState() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    return hydrateSavedState(saved);
  } catch (error) {
    return hydrateSavedState(null);
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleRemoteProfileSync();
  schedulePartyMemberSync();
}

function defaultState() {
  return {
    coins: 0,
    trophies: 0,
    diamonds: 0,
    platoKeys: 0,
    magicMachineFirstPurchaseDone: false,
    seenIntro: false,
    playedFirstGame: false,
    seenFirstRobotTutorial: false,
    seenJungleBookGuide: false,
    seenTrophyRoadIntro: false,
    superAlleyActive: false,
    superAlleyWinterActive: false,
    superAlleyTowerActive: false,
    phoneModeEnabled: false,
    introStep: 0,
    seenWinterWorldIntro: false,
    seenTowerWorldIntro: false,
    playerNickname: "",
    nicknamePromptSeen: false,
    profileId: "",
    publicId: "",
    profileCreatedAt: 0,
    profileThemeWorldId: "",
    nicknameChangeCount: 0,
    ownedProfilePhotos: [],
    selectedProfilePhotoId: "",
    favoriteCharacterId: "",
    favoritePetId: "",
    completedGamesTotal: 0,
    robotsDefeatedTotal: 0,
    bookMissionProgress: {
      totalRobotDamage: 0,
      fullClearStreak: 0,
      currentRunRobots: 0,
      junglePetRoundsPlayed: 0,
      robotsDefeatedSinceMissions: 0,
      trophiesEarnedSinceMissions: 0,
    },
    claimedBookMissionIds: [],
    accountPasswordSet: false,
    accountPasswordHash: "",
    accountPasswordSalt: "",
    accountSaveSecret: "",
    ownedCharacters: [],
    ownedPets: [],
    ownedWeapons: ["atak-1"],
    equippedCharacter: null,
    equippedPet: null,
    equippedWeapon: "atak-1",
    crateInventory: {
      "drewniana-skrzynia": 0,
      "dzunglowa-skrzynia": 0,
    },
    openedCrates: {
      "drewniana-skrzynia": 0,
      "dzunglowa-skrzynia": 0,
    },
    freeCrates: {
      "drewniana-skrzynia": 0,
      "dzunglowa-skrzynia": 0,
    },
    claimedTrophyRewards: {
      alley: [],
      winter: [],
      tower: [],
    },
    activeTrophyWorld: "alley",
    storeOffers: {
      characterIds: [],
      petIds: [],
      nextRefreshAt: 0,
    },
  };
}

function hydrateSavedState(saved) {
  const baseState = defaultState();

  if (!saved || typeof saved !== "object") {
    ensureStateProfileDefaults(baseState);
    return baseState;
  }

  const merged = {
    ...baseState,
    ...saved,
    ownedCharacters: Array.isArray(saved.ownedCharacters) ? saved.ownedCharacters : [],
    ownedProfilePhotos: Array.isArray(saved.ownedProfilePhotos) ? saved.ownedProfilePhotos : [],
    ownedPets: Array.isArray(saved.ownedPets) ? saved.ownedPets : [],
    ownedWeapons: Array.isArray(saved.ownedWeapons) ? saved.ownedWeapons : ["atak-1"],
    crateInventory:
      saved.crateInventory && typeof saved.crateInventory === "object"
        ? { ...baseState.crateInventory, ...saved.crateInventory }
        : { ...baseState.crateInventory },
    openedCrates:
      saved.openedCrates && typeof saved.openedCrates === "object"
        ? { ...baseState.openedCrates, ...saved.openedCrates }
        : { ...baseState.openedCrates },
    freeCrates:
      saved.freeCrates && typeof saved.freeCrates === "object"
        ? { ...baseState.freeCrates, ...saved.freeCrates }
        : { ...baseState.freeCrates },
    bookMissionProgress:
      saved.bookMissionProgress && typeof saved.bookMissionProgress === "object"
        ? { ...baseState.bookMissionProgress, ...saved.bookMissionProgress }
        : { ...baseState.bookMissionProgress },
    claimedTrophyRewards:
      saved.claimedTrophyRewards && typeof saved.claimedTrophyRewards === "object"
        ? { ...baseState.claimedTrophyRewards, ...saved.claimedTrophyRewards }
        : { ...baseState.claimedTrophyRewards },
    storeOffers:
      saved.storeOffers && typeof saved.storeOffers === "object"
        ? { ...baseState.storeOffers, ...saved.storeOffers }
        : { ...baseState.storeOffers },
  };

  merged.claimedTrophyRewards = migrateClaimedTrophyRewards(saved.claimedTrophyRewards);
  merged.activeTrophyWorld = normalizeTrophyWorldId(saved.activeTrophyWorld);
  merged.superAlleyActive = Boolean(saved.superAlleyActive);
  merged.superAlleyWinterActive = Boolean(saved.superAlleyWinterActive);
  merged.superAlleyTowerActive = Boolean(saved.superAlleyTowerActive);
  merged.platoKeys = Math.max(0, Number(saved.platoKeys || 0));
  merged.magicMachineFirstPurchaseDone = Boolean(saved.magicMachineFirstPurchaseDone);
  merged.phoneModeEnabled = Boolean(saved.phoneModeEnabled);
  merged.seenWinterWorldIntro = Boolean(saved.seenWinterWorldIntro);
  merged.seenTowerWorldIntro = Boolean(saved.seenTowerWorldIntro);
  merged.playerNickname = sanitizePlayerNickname(saved.playerNickname);
  merged.nicknamePromptSeen = Boolean(saved.nicknamePromptSeen);
  merged.profileId = sanitizeProfileId(saved.profileId);
  merged.publicId = sanitizePublicPlayerId(saved.publicId);
  merged.profileCreatedAt = Math.max(0, Number(saved.profileCreatedAt || 0));
  merged.profileThemeWorldId = normalizeTrophyWorldId(saved.profileThemeWorldId);
  merged.nicknameChangeCount = Math.max(0, Number(saved.nicknameChangeCount || 0));
  merged.selectedProfilePhotoId = sanitizeStoredId(saved.selectedProfilePhotoId);
  merged.completedGamesTotal = Math.max(0, Number(saved.completedGamesTotal || 0));
  merged.robotsDefeatedTotal = Math.max(0, Number(saved.robotsDefeatedTotal || 0));
  merged.bookMissionProgress = {
    ...baseState.bookMissionProgress,
    ...(saved.bookMissionProgress && typeof saved.bookMissionProgress === "object"
      ? saved.bookMissionProgress
      : {}),
  };
  merged.bookMissionProgress.totalRobotDamage = Math.max(0, Number(merged.bookMissionProgress.totalRobotDamage || 0));
  merged.bookMissionProgress.fullClearStreak = Math.max(0, Number(merged.bookMissionProgress.fullClearStreak || 0));
  merged.bookMissionProgress.currentRunRobots = Math.max(0, Number(merged.bookMissionProgress.currentRunRobots || 0));
  merged.bookMissionProgress.junglePetRoundsPlayed = Math.max(0, Number(merged.bookMissionProgress.junglePetRoundsPlayed || 0));
  merged.bookMissionProgress.robotsDefeatedSinceMissions = Math.max(0, Number(merged.bookMissionProgress.robotsDefeatedSinceMissions || 0));
  merged.bookMissionProgress.trophiesEarnedSinceMissions = Math.max(0, Number(merged.bookMissionProgress.trophiesEarnedSinceMissions || 0));
  merged.claimedBookMissionIds = Array.isArray(saved.claimedBookMissionIds)
    ? saved.claimedBookMissionIds.map((entry) => String(entry || "")).filter(Boolean)
    : [];
  merged.favoriteCharacterId = sanitizeStoredId(saved.favoriteCharacterId);
  merged.favoritePetId = sanitizeStoredId(saved.favoritePetId);
  merged.accountPasswordHash = sanitizeStoredToken(saved.accountPasswordHash);
  merged.accountPasswordSalt = sanitizeStoredToken(saved.accountPasswordSalt);
  merged.accountSaveSecret = sanitizeStoredToken(saved.accountSaveSecret);
  merged.accountPasswordSet = Boolean(
    saved.accountPasswordSet &&
    merged.accountPasswordHash &&
    merged.accountPasswordSalt &&
    merged.accountSaveSecret
  );
  merged.seenFirstRobotTutorial = Object.prototype.hasOwnProperty.call(saved, "seenFirstRobotTutorial")
    ? Boolean(saved.seenFirstRobotTutorial)
    : Boolean(saved.playedFirstGame);
  merged.seenJungleBookGuide = Boolean(saved.seenJungleBookGuide);
  merged.ownedCharacters = sanitizeOwnedIds(merged.ownedCharacters, CATALOG.characters);
  merged.ownedProfilePhotos = sanitizeOwnedIds(merged.ownedProfilePhotos, CATALOG.profilePhotos);
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
  ensureStateProfileDefaults(merged);
  return merged;
}

function ensureStateProfileDefaults(targetState) {
  if (!sanitizePlayerNickname(targetState.playerNickname)) {
    targetState.playerNickname = generateDefaultNickname();
    targetState.nicknamePromptSeen = true;
  }

  if (!sanitizeProfileId(targetState.profileId)) {
    targetState.profileId = generateProfileId();
  }

  if (!sanitizePublicPlayerId(targetState.publicId)) {
    targetState.publicId = generatePublicPlayerId();
  }

  if (!Number(targetState.profileCreatedAt)) {
    targetState.profileCreatedAt = Date.now();
  }

  if (!targetState.ownedCharacters.includes("magik-millo")) {
    targetState.ownedCharacters.unshift("magik-millo");
  }

  if (!targetState.favoriteCharacterId || !targetState.ownedCharacters.includes(targetState.favoriteCharacterId)) {
    targetState.favoriteCharacterId = targetState.equippedCharacter && targetState.ownedCharacters.includes(targetState.equippedCharacter)
      ? targetState.equippedCharacter
      : targetState.ownedCharacters[0] || "magik-millo";
  }

  if (!targetState.selectedProfilePhotoId || !targetState.ownedProfilePhotos.includes(targetState.selectedProfilePhotoId)) {
    targetState.selectedProfilePhotoId = "";
  }

  const unlockedThemeIds = ["alley"];
  if (normalizeTrophyWorldId(targetState.activeTrophyWorld) === "tower") {
    unlockedThemeIds.push("winter", "tower");
  } else if (normalizeTrophyWorldId(targetState.activeTrophyWorld) === "winter") {
    unlockedThemeIds.push("winter");
  }

  if (!unlockedThemeIds.includes(normalizeTrophyWorldId(targetState.profileThemeWorldId))) {
    targetState.profileThemeWorldId = unlockedThemeIds[unlockedThemeIds.length - 1];
  }

  if (!targetState.favoritePetId || !targetState.ownedPets.includes(targetState.favoritePetId)) {
    targetState.favoritePetId = targetState.equippedPet && targetState.ownedPets.includes(targetState.equippedPet)
      ? targetState.equippedPet
      : targetState.ownedPets[0] || "";
  }

  targetState.nicknameChangeCount = Math.max(0, Number(targetState.nicknameChangeCount || 0));

  if (!targetState.accountPasswordSet) {
    targetState.accountPasswordHash = "";
    targetState.accountPasswordSalt = "";
    targetState.accountSaveSecret = "";
  }
}

function generateDefaultNickname() {
  return `Gracz${generateRandomDigits(4)}`;
}

function generateRandomDigits(length = 4) {
  const digits = [];

  if (window.crypto?.getRandomValues) {
    const values = new Uint8Array(length);
    window.crypto.getRandomValues(values);
    values.forEach((value) => {
      digits.push(String(value % 10));
    });
    return digits.join("");
  }

  for (let index = 0; index < length; index += 1) {
    digits.push(String(Math.floor(Math.random() * 10)));
  }

  return digits.join("");
}

function generateProfileId() {
  const randomPart = Math.random().toString(36).slice(2, 10);
  return `profile-${randomPart}${Date.now().toString(36).slice(-6)}`;
}

function generatePublicPlayerId() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  if (window.crypto?.getRandomValues) {
    const values = new Uint8Array(5);
    window.crypto.getRandomValues(values);
    values.forEach((value) => {
      result += alphabet[value % alphabet.length];
    });
    return result;
  }

  for (let index = 0; index < 5; index += 1) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return result;
}

function sanitizeProfileId(value) {
  return String(value || "")
    .trim()
    .replace(/[^0-9A-Za-z_-]/g, "")
    .slice(0, 48);
}

function sanitizePublicPlayerId(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, "")
    .slice(0, 5);
}

function sanitizeStoredId(value) {
  return String(value || "")
    .trim()
    .replace(/[^0-9A-Za-z_-]/g, "")
    .slice(0, 64);
}

function sanitizeStoredToken(value) {
  return String(value || "")
    .trim()
    .replace(/[^0-9A-Za-z+/=_-]/g, "")
    .slice(0, 512);
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
  const towerRewards = [
    ...(Array.isArray(savedRewards?.tower) ? savedRewards.tower : []),
  ].filter((rewardId) => allowedRewardIds.has(rewardId));

  return {
    alley: alleyRewards.filter((rewardId, index) => alleyRewards.indexOf(rewardId) === index),
    winter: winterRewards.filter((rewardId, index) => winterRewards.indexOf(rewardId) === index),
    tower: towerRewards.filter((rewardId, index) => towerRewards.indexOf(rewardId) === index),
  };
}

function getOwnedItems(kind) {
  const ownedIds =
    kind === "characters"
      ? state.ownedCharacters
      : kind === "profilePhotos"
        ? state.ownedProfilePhotos
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
  if (kind === "coins" || kind === "diamonds" || kind === "trophies") {
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
