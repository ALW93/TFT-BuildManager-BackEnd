"use strict";

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        r({
          body: "What a cancer build, I love it!",
          userId: 2,
          buildId: 3,
        }),
        r({
          body: "Are assassins really S-tier? I thought they nerfed...",
          userId: 2,
          buildId: 2,
        }),
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
