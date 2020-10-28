"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Administrator",
          email: "Admin@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Berber_Cat123",
          email: "berber@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
