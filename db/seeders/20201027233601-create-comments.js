"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          message: "Wow this is such a great build!",
          userId: 3,
          buildId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Great, now everyone's gonna be spamming this in ranked..",
          userId: 6,
          buildId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Wow, does this mean Talon is good again?",
          userId: 2,
          buildId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Don't build Morgana she's terrible...",
          userId: 5,
          buildId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Ahri is my waifu for laifu hahahahaha.",
          userId: 7,
          buildId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "My game is bugged, I rolled 120 gold and didn't find a single Ahri..no one was even contesting!!!",
          userId: 3,
          buildId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
