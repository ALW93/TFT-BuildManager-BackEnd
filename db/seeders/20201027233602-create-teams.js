"use strict";

const { teamGen } = require("./data/testbuild");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("build_champions", teamGen(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("build_champions", null, {});
  },
};
