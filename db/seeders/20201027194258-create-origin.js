"use strict";

const seedOrigins = require('./data/origins');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("origins", seedOrigins(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("origins", null, {});
  },
};
