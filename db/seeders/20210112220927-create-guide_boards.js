"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SubBoards",
      [
        {
          guideId: 1,
          boardId: 1,
          title: "Some Board",
          subtitle: 'Some subtitle',
          grid: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("SubBoards", null, {});
  },
};
