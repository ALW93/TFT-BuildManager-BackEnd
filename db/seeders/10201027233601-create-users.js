"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Editor",
          email: "editor@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "spookychu",
          email: "berber@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "MomatoMimumu",
          email: "ming@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "No Tomatoes",
          email: "tomato@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Saladz",
          email: "alan@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Giratina",
          email: "brandon@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "tiibasu",
          email: "ak@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Static Snow",
          email: "keith@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Noveko",
          email: "eben@gmail.com",
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
