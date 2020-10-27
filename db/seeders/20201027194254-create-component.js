"use strict";

const { seedComponents } = require("./data/items")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("components", seedComponents(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("components", null, {});
  },
};
