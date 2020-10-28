'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('item_champions', [], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('item_champions', null, {});
  }
};
