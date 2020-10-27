"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('build_champions', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('build_champions', null, {});

  },
};
