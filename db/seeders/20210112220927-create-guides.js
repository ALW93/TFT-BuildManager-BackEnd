"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Guides",
      [
        {
          title: "Zed and Friends",
          votes: 349,
          content: JSON.stringify({
            ops: [
              { insert: "Guide Goes Here", attributes: { bold: true } },
              { insert: " How to Roll " },
              { insert: "Some More Details", attributes: { color: "#cccccc" } },
            ],
          }),
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Guides", null, {});
  },
};
