const c = {
  Aatrox: 1,
  Ahri: 2,
  Akali: 3,
  Annie: 4,
  Aphelios: 5,
  Ashe: 6,
  Azir: 7,
  Cassiopeia: 8,
  Diana: 9,
  Elise: 10,
  Evelynn: 11,
  Ezreal: 12,
  Fiora: 13,
  Garen: 14,
  Hecarim: 15,
  Irelia: 16,
  Janna: 17,
  JarvanIV: 18,
  Jax: 19,
  Jhin: 20,
  Jinx: 21,
  Kalista: 22,
  Katarina: 23,
  Kayn: 24,
  Kennen: 25,
  Kindred: 26,
  LeeSin: 27,
  Lillia: 28,
  Lissandra: 29,
  Lulu: 30,
  Lux: 31,
  Maokai: 32,
  Morgana: 33,
  Nami: 34,
  Nidalee: 35,
  NunuWillump: 36,
  Pyke: 37,
  Riven: 38,
  Sejuani: 39,
  Sett: 40,
  Shen: 41,
  Sylas: 42,
  TahmKench: 43,
  Talon: 44,
  Teemo: 45,
  Thresh: 46,
  TwistedFate: 47,
  Vayne: 48,
  Veigar: 49,
  Vi: 50,
  Warwick: 51,
  Wukong: 52,
  XinZhao: 53,
  Yasuo: 54,
  Yone: 55,
  Yuumi: 56,
  Zed: 57,
  Zilean: 58,
};

const t = {
  Adept: 1,
  Assassin: 2,
  Brawler: 3,
  Cultist: 4,
  Dazzler: 5,
  Divine: 6,
  Duelist: 7,
  Dusk: 8,
  Elderwood: 9,
  Emperor: 10,
  Enlightened: 11,
  Exile: 12,
  Fortune: 13,
  Hunter: 14,
  Keeper: 15,
  Mage: 16,
  Moonlight: 17,
  Mystic: 18,
  Ninja: 19,
  Shade: 20,
  Sharpshooter: 21,
  Spirit: 22,
  TheBoss: 23,
  Tormented: 24,
  Vanguard: 25,
  Warlord: 26,
};

const i = {
  Deathblade: 1,
  GiantSlayer: 2,
  HextechGunblade: 3,
  SpearofShojin: 4,
  GuardianAngel: 5,
  Bloodthirster: 6,
  ZekesHerald: 7,
  SwordoftheDivine: 8,
  InfinityEdge: 9,
  RapidFirecannon: 10,
  GuinsoosRageblade: 11,
  StatikkShiv: 12,
  TitansResolve: 13,
  RunaansHurricane: 14,
  ZzRotPortal: 15,
  DuelistsZeal: 16,
  LastWhisper: 17,
  RabadonsDeathcap: 18,
  LudensEcho: 19,
  LocketoftheIronSolari: 20,
  IonicSpark: 21,
  Morellonomicon: 22,
  AspectofDusk: 23,
  JeweledGauntlet: 24,
  BlueBuff: 25,
  FrozenHeart: 26,
  ChaliceofPower: 27,
  Redemption: 28,
  MagesHat: 29,
  HandOfJustice: 30,
  BrambleVest: 31,
  GargoyleStoneplate: 32,
  SunfireCape: 33,
  VanguardsCuirass: 34,
  ShroudofStillness: 35,
  DragonsClaw: 36,
  Zephyr: 37,
  ElderwoodSprout: 38,
  Quicksilver: 39,
  WarmogsArmor: 40,
  WarlordsBanner: 41,
  TrapClaw: 42,
  ForceofNature: 43,
  YoumuusGhostblade: 44,
  ThiefsGloves: 45,
};

const p = {
  BFSword: 1,
  RecurveBow: 2,
  NeedlesslyLargeRod: 3,
  TearoftheGoddess: 4,
  ChainVest: 5,
  NegatronCloak: 6,
  GiantsBelt: 7,
  Spatula: 8,
  SparringGloves: 9,
};

const r = (o) => {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
};

module.exports = {
  c,
  t,
  r,
  p,
  i,
};
