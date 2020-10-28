'use strict';

const seedChampions = require("./data/champions");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Champions', seedChampions(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Champions', null, {});
  }
};
