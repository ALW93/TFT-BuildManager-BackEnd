'use strict';

const seedParts = require("./data/parts")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('item_components', seedParts(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('item_components', null, {});
  }
};
