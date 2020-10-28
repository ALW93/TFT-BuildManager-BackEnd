'use strict';

const seedOrigins = require('./data/origins')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('trait_champions', seedOrigins(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('trait_champions', null, {});
  }
};
