'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guide_Board = sequelize.define('Guide_Board', {
    guideId: DataTypes.INTEGER,
    boardId: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    subtitle: DataTypes.TEXT
  }, {});
  Guide_Board.associate = function(models) {
    // associations can be defined here
  };
  return Guide_Board;
};