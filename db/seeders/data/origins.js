const { c, t, r } = require("./index-references")

const origins = [
  {
    championId: c.Aatrox,
    traitId: t.Cultist,
  },
  {
    championId: c.Aatrox,
    traitId: t.Vanguard,
  },
  {
    championId: c.Ahri,
    traitId: t.Spirit,
  },
  {
    championId: c.Ahri,
    traitId: t.Mage,
  },
  {
    championId: c.Akali,
    traitId: t.Ninja,
  },
  {
    championId: c.Akali,
    traitId: t.Assassin,
  },
]

const seedOrigins = () => origins.map(o => r(o));

module.exports = seedOrigins;
