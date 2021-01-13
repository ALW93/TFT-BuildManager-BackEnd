"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Boards",
      [
        {
          title: "Zed and Friends",
          subtitle: "Level 8 Ideal Board",
          grid: JSON.stringify([
            { id: "TFT4_Zed", items: ["RFC", "DB"], node: 5 },
          ]),
          authorId: 1,
          actives: JSON.stringify({ Ninja: 4, Assassin: 2 }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Boards", null, {});
  },
};
