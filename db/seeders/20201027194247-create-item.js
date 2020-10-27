"use strict";

const { seedItems } = require("./data/items")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("items", seedItems(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("items", null, {});
  },
};
