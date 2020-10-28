"use strict";

const { formData } = require("./data/testbuild");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Builds", formData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Builds", null, {});
  },
};
