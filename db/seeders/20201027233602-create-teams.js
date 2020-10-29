"use strict";

const { teams } = require("./data/builds/aggregate");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("build_champions", teams, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("build_champions", null, {});
  },
};
