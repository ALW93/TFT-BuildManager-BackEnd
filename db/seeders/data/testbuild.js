const { c, r, i } = require("./index-references");

const formData = [
  r({
    title: "Diana Cancer",
    tier: "S",
    playstyle: "Slow Roll",
    votes: 10,
    notes: "Go if you hit Moonlight Diana",
    authorId: 1,
  }),
];

const team = [c.Diana, c.Lissandra, c.Pyke, c.Akali, c.Yuumi, c.Janna, c.Talon];

const teamGen = () =>
  team.map((t) => {
    return r({
      buildId: 1,
      championId: t,
      carry: false,
    });
  });

const itemData = [
  r({
    buildId: 1,
    championId: c.Diana,
    itemId: i.HextechGunblade,
  }),
  r({
    buildId: 1,
    championId: c.Diana,
    itemId: i.TitansResolve,
  }),
  r({
    buildId: 1,
    championId: c.Diana,
    itemId: i.InfinityEdge,
  }),
];

module.exports = {
  formData,
  teamGen,
  itemData,
};
