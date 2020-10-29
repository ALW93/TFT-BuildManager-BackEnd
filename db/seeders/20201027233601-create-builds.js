"use strict";

const { forms } = require("./data/builds/aggregate");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Builds", forms, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Builds", null, {});
  },
};
