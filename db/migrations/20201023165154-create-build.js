"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Builds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tier: {
        type: Sequelize.STRING,
      },
      playstyle: {
        type: Sequelize.STRING,
      },
      team: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      traits: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      carry: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      carryitems: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      subcarry: {
        type: Sequelize.STRING(255),
      },
      subitems: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      votes: {
        type: Sequelize.INTEGER,
      },
      notes: {
        type: Sequelize.TEXT,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Builds");
  },
};
