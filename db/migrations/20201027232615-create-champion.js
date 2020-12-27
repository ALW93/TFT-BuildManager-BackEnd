"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Champions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      championId: {
        type: Sequelize.STRING,
      },
      cost: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      traits: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Champions");
  },
};
