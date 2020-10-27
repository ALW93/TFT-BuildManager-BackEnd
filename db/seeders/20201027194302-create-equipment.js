"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("equipment", [], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("equipment", null, {});
  },
};
