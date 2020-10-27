"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("parts", [], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("parts", null, {});
  },
};
