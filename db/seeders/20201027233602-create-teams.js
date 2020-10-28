"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('build_champions', [], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('build_champions', null, {});
  },
};
