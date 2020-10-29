"use strict";

const { items } = require("./data/builds/aggregate");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("build_champion_items", items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("build_champion_items", null, {});
  },
};
