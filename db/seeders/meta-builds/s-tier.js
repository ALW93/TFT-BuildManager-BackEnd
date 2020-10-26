const Assassins = {
  name: "Chosen Assassins",
  tier: "S",
  playstyle: "SlowRoll",
  team: ["Janna", "Pyke", "Zed", "Akali", "Kennen", "Shen", "Talon"],
  traits: ["Assassin", "Ninja"],
  carry: "Akali",
  carryitems: ["Blue", "IE", "RFC"],
  subcarry: "Kennen",
  subitems: ["GA", "IS", "Morello"],
  notes: "Can go Zed or Akali Carry",
  userId: 1,
};

const Nami = {
  name: "Bubble Bobble",
  tier: "S",
  playstyle: "SlowRoll",
  team: [
    "Fiora",
    "Nami",
    "Annie",
    "Janna",
    "Irelia",
    "Morgana",
    "Shen",
    "Talon",
  ],
  traits: ["Enlightened", "Mage"],
  carry: "Nami",
  carryitems: ["QSS", "Luden", "Luden"],
  subcarry: "Annie",
  subitems: ["SC", "GaSt", "IS"],
  notes: "Run when you find Mage Nami",
  userId: 1,
};

module.exports = {
  builds: [Assassins, Nami],
};
