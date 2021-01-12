"use strict";
module.exports = (sequelize, DataTypes) => {
  const Guide_Board = sequelize.define(
    "Guide_Board",
    {
      guideId: {
        type: DataTypes.INTEGER,
        references: {
          model: Guide,
          key: "id",
        },
      },
      boardId: {
        type: DataTypes.INTEGER,
        references: {
          model: Board,
          key: "id",
        },
      },
    },
    {}
  );
  Guide_Board.associate = function (models) {
    // associations can be defined here
  };
  return Guide_Board;
};
