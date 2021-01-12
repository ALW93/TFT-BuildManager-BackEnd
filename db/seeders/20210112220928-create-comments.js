"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          message: "Nice Guide",
          userId: 2,
          guideId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Added to my Bookmarks!",
          userId: 4,
          guideId: 1,
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
