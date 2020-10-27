'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('trait_champions', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('trait_champions', null, {});

  }
};
