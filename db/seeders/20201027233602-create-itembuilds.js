'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('build_champion_items', [], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('build_champion_items', null, {});
  }
};
