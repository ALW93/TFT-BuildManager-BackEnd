'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    title: DataTypes.STRING,
    grid: DataTypes.JSON,
    authorId: DataTypes.INTEGER,
    actives: DataTypes.JSON
  }, {});
  Board.associate = function(models) {
    // associations can be defined here
  };
  return Board;
};