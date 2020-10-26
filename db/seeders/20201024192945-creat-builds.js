"use strict";

const stier = require("./meta-builds/aggregate");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Builds", stier(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Builds", null, {});
  },
};
