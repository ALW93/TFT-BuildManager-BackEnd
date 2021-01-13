"use strict";
module.exports = (sequelize, DataTypes) => {
  const Guide_Board = sequelize.define(
    "Guide_Board",
    {
      position: DataTypes.INTEGER,
      guideId: DataTypes.INTEGER,
      boardId: DataTypes.INTEGER,
    },
    {}
  );
  Guide_Board.associate = function (models) {
    //
  };
  return Guide_Board;
};
