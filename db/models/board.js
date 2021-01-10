"use strict";
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    "Board",
    {
      title: DataTypes.STRING,
      board: DataTypes.JSON,
      votes: DataTypes.INTEGER,
      guide: DataTypes.TEXT,
      authorId: DataTypes.INTEGER,
    },
    {}
  );
  Board.associate = function (models) {
    Board.belongsTo(models.User, { foreignKey: "authorId" });
  };
  return Board;
};
