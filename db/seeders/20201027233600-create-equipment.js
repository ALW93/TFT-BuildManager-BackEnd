"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "item_champions",
      [
        {
          championId: 1,
          itemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          championId: 1,
          itemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("item_champions", null, {});
  },
};
