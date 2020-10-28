'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('build_champion_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buildId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Builds",
          key: "id",
        },
      },
      championId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Champions",
          key: "id",
        },
      },
      itemId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Items",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('build_champion_items');
  }
};
