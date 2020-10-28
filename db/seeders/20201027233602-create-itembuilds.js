"use strict";

const { itemData } = require("./data/testbuild");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("build_champion_items", itemData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("build_champion_items", null, {});
  },
};
