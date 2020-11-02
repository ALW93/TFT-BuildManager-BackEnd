"use strict";

const defaultEquipment = require("./data/equipment");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("item_champions", defaultEquipment, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("item_champions", null, {});
  },
};
