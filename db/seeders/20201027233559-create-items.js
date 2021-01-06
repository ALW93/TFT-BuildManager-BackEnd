"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Items",
      [
        {
          name: "Deathblade",
          acronym: "DB",
          description:
            "Contributing to a kill grants the holder addtional Attack Damage for the rest of combat.",
          image: "../Assets/items/11.png",
        },
        {
          name: "Giant Slayer",
          acronym: "GS",
          description:
            "The holder's spells and basic attacks do bonus damage. If the target has more health, the bonus damage increases.",
          image: "../Assets/items/12.png",
        },
        {
          name: "Hextech Gunblade",
          acronym: "GB",
          description:
            "The holder's spells heal them for a percentage of the damage dealt. Excess healing fuels a shield that protects the holder.",
          image: "../Assets/items/13.png",
        },
        {
          name: "Spear of Shojin",
          acronym: "Shojin",
          description: "The holder's basic attacks restore Mana on-hit.",
          image: "../Assets/items/14.png",
        },
        {
          name: "Guardian Angel",
          acronym: "GA",
          description:
            "Prevents the wearer's first death, reviving them after a short delay and sheding all negative effects.",
          image: "../Assets/items/15.png",
        },
        {
          name: "Bloodthirster",
          acronym: "BT",
          description:
            "Basic attacks heal the holder for a percentage of the damage dealt.",
          image: "../Assets/items/16.png",
        },
        {
          name: "Zeke's Herald",
          acronym: "Zekes",
          description:
            "When combat begins, the wearer and nearby allies in the same row gain Attack Speed for the rest of combat.",
          image: "../Assets/items/17.png",
        },
        {
          name: "Sword of the Divine",
          acronym: "SotD",
          description: "The holder gains the Divine trait.",
          image: "../Assets/items/18.png",
        },
        {
          name: "Infinity Edge",
          acronym: "IE",
          description:
            "Grants Critical Strike Chance. Each point of Critical Strike Chance above 100% becomes bonus Critical Strike Damage.",
          image: "../Assets/items/19.png",
        },
        {
          name: "Rapid Firecannon",
          acronym: "RFC",
          description:
            "The holder gains Attack Range, and their Basic Attacks can't miss.",
          image: "../Assets/items/22.png",
        },
        {
          name: "Guinsoo's Rageblade",
          acronym: "GRB",
          description:
            "Basic Attacks grant bonus Attack Speed for the rest of combat.",
          image: "../Assets/items/23.png",
        },
        {
          name: "Statikk Shiv",
          acronym: "Statikk",
          description:
            "Every third Basic Attack from the wearer deals Magic Damage to nearby enemies, and true damage if they are shielded or crowd-controlled.",
          image: "../Assets/items/24.png",
        },
        {
          name: "Titan's Resolve",
          acronym: "TR",
          description:
            "When the wearer takes damage or inflicts a critical hit, they gain a stacking damage bonus. The damage stacks up to a limit, at which point the wearer gains Armor and Magic Resistance, and increases in size.",
          image: "../Assets/items/25.png",
        },
        {
          name: "Runaan's Hurricane",
          acronym: "RH",
          description:
            "Basic Attacks fire a bolt at another nearby enemy, dealing a percentage of the wearer's Attack Damage and applying on-hit effects. These bolts can critical strike.",
          image: "../Assets/items/26.png",
        },
        {
          name: "Zz'Rot Portal",
          acronym: "ZzR",
          description:
            "When the wearer dies, a Construct arises to continue the fight.",
          image: "../Assets/items/27.png",
        },
        {
          name: "Duelist's Zeal",
          acronym: "DZ",
          description: "The holder gains the Duelist trait.",
          image: "../Assets/items/28.png",
        },
        {
          name: "Last Whisper",
          acronym: "LW",
          description:
            "When the wearer inflicts a critical hit, the target's Armor is reduced for a number of seconds.",
          image: "../Assets/items/29.png",
        },
        {
          name: "Rabadon's Deathcap",
          acronym: "DCap",
          description: "The holder gains additional Spell Power.",
          image: "../Assets/items/33.png",
        },
        {
          name: "Luden's Echo",
          acronym: "Luden",
          description:
            "When the holder casts their spell, the first target dealt magic damage and to nearby enemies are dealt additional magic damage.",
          image: "../Assets/items/34.png",
        },
        {
          name: "Locket of the Iron Solari",
          acronym: "Locket",
          description:
            "When combat begins, the wearer and nearby allies in the same row gain a shield that blocks damage for several seconds.",
          image: "../Assets/items/35.png",
        },
        {
          name: "Ionic Spark",
          acronym: "IS",
          description:
            "Nearby enemies have their Magic Resist reduced. When they cast a spell, they are zapped taking magic damage equal to a percentage of their max Mana.",
          image: "../Assets/items/36.png",
        },
        {
          name: "Morellonomicon",
          acronym: "Morello",
          description:
            "When the holder deals damage with their spell, they burn the target, dealing a percentage of the target's maximum Health as true damage over several seconds, and reducing healing by a percentage for the duration of the burn.",
          image: "../Assets/items/37.png",
        },
        {
          name: "Aspect of Dusk",
          acronym: "MoD",
          description: "The holder gains the Dusk trait.",
          image: "../Assets/items/38.png",
        },
        {
          name: "Jeweled Gauntlet",
          acronym: "JG",
          description:
            "The holder's spells can cause critical hits, and the holder gains bonus Critical Strike Damage.",
          image: "../Assets/items/39.png",
        },
        {
          name: "Blue Buff",
          acronym: "Blue",
          description: "After casting their spell, the wearer gains Mana.",
          image: "../Assets/items/44.png",
        },
        {
          name: "Frozen Heart",
          acronym: "FH",
          description:
            "Reduces the Attack Speed of nearby enemies. Each Frozen Heart a champion carries beyond the first increases the radius of this effect.",
          image: "../Assets/items/45.png",
        },
        {
          name: "Chalice of Power",
          acronym: "CoP",
          description:
            "When combat begins, the wearer and all nearby allies in the same row gain Spell Power for the rest of combat.",
          image: "../Assets/items/46.png",
        },
        {
          name: "Redemption",
          acronym: "Rdmp",
          description: "When the wearer dies, allies are healed.",
          image: "../Assets/items/47.png",
        },
        {
          name: "Mage's Hat",
          acronym: "MC",
          description: "The holder gains the Mage trait.",
          image: "../Assets/items/48.png",
        },
        {
          name: "Hand Of Justice",
          acronym: "HoJ",
          description:
            "At the beginning of each planning phase, the wearer's basic attacks and spells deal additional damage or heal for a percentage of damage dealt.",
          image: "../Assets/items/49.png",
        },
        {
          name: "Bramble Vest",
          acronym: "BV",
          description:
            "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal magic damage to all nearby enemies.",
          image: "../Assets/items/55.png",
        },
        {
          name: "Gargoyle Stoneplate",
          acronym: "GaSt",
          description:
            "The holder gains Armor and Magic Resist for each enemy targeting them.",
          image: "../Assets/items/56.png",
        },
        {
          name: "Sunfire Cape",
          acronym: "SC",
          description:
            "At start of combat, and every couple seconds thereafter, a random nearby enemyis burned for a percentage of their maximum health. Any healing they receive is reduced.",
          image: "../Assets/items/57.png",
        },
        {
          name: "Vanguard's Cuirass",
          acronym: "VC",
          description: "The holder gains the Vanguard trait.",
          image: "../Assets/items/58.png",
        },
        {
          name: "Shroud of Stillness",
          acronym: "Shroud",
          description:
            "When combat begins, shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana until they cast.",
          image: "../Assets/items/59.png",
        },
        {
          name: "Dragon's Claw",
          acronym: "DClaw",
          description: "Reduces incoming magic damage.",
          image: "../Assets/items/66.png",
        },
        {
          name: "Zephyr",
          acronym: "ZE",
          description:
            "When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for several seconds.",
          image: "../Assets/items/67.png",
        },
        {
          name: "Elderwood Sprout",
          acronym: "EH",
          description: "The holder gains the Elderwood trait.",
          image: "../Assets/items/68.png",
        },
        {
          name: "Quicksilver",
          acronym: "QSS",
          description:
            "The wearer is immune to crowd control for the first several seconds of combat.",
          image: "../Assets/items/69.png",
        },
        {
          name: "Warmog's Armor",
          acronym: "WM",
          description: "Grants bonus Health.",
          image: "../Assets/items/77.png",
        },
        {
          name: "Warlord's Banner",
          acronym: "WB",
          description: "The wearer gains the Warlord trait.",
          image: "../Assets/items/78.png",
        },
        {
          name: "Trap Claw",
          acronym: "TClaw",
          description:
            "Blocks the first enemy spell that hits the wearer, and stuns the spell's caster for several seconds.",
          image: "../Assets/items/79.png",
        },
        {
          name: "Force of Nature",
          acronym: "FON",
          description: "",
          image: "../Assets/items/88.png",
        },
        {
          name: "Youmuu's Ghostblade",
          acronym: "YG",
          description: "The wearer gains the Assassin trait.",
          image: "../Assets/items/89.png",
        },
        {
          name: "Thief's Gloves",
          acronym: "TG",
          description:
            "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.",
          image: "../Assets/items/99.png",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Items", null, {});
  },
};
