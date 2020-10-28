'use strict';

const { seedComponents } = require("./data/items")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Components', seedComponents(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Components', null, {});
  }
};
