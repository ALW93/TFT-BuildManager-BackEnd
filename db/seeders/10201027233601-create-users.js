"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Administrator",
          email: "Admin@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Berber_Cat123",
          email: "berber@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
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
