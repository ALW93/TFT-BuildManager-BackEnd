"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Components",
      [
        {
          name: "B.F. Sword",
          acronym: "BF",
          description: "Gain Attack Damage.",
          image: "../Assets/items/01.png",
        },
        {
          name: "Recurve Bow",
          acronym: "Bow",
          description: "Gain Attack Speed.",
          image: "../Assets/items/02.png",
        },
        {
          name: "Needlessly Large Rod",
          acronym: "Rod",
          description: "Gain Spell Power.",
          image: "../Assets/items/03.png",
        },
        {
          name: "Tear of the Goddess",
          acronym: "Tear",
          description: "Gain Mana.",
          image: "../Assets/items/04.png",
        },
        {
          name: "Chain Vest",
          acronym: "Vest",
          description: "Gain Armor.",
          image: "../Assets/items/05.png",
        },
        {
          name: "Negatron Cloak",
          acronym: "Cloak",
          description: "Gain Magic Resist.",
          image: "../Assets/items/06.png",
        },
        {
          name: "Giant's Belt",
          acronym: "Belt",
          description: "Gain Health.",
          image: "../Assets/items/07.png",
        },
        {
          name: "Spatula",
          acronym: "Spat",
          description: "It must do something...",
          image: "../Assets/items/08.png",
        },
        {
          name: "Sparring Gloves",
          acronym: "Gloves",
          description: "Gain Critical Strike Chance and Dodge Chance.",
          image: "../Assets/items/09.png",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Components", null, {});
  },
};
