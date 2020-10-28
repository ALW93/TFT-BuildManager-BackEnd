'use strict';

const seedTraits = require("./data/traits");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Traits', seedTraits(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Traits', null, {});
  }
};
