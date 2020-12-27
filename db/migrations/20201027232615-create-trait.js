"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Traits", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      key: {
        type: Sequelize.STRING,
      },
      tiers: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      type: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Traits");
  },
};
