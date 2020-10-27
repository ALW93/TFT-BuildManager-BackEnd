"use strict";
const seedTraits = require("./data/traits")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("traits", seedTraits(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("traits", null, {});
  },
};
