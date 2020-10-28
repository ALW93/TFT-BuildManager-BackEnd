'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Builds', [], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Builds', null, {});
  }
};
