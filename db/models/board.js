"use strict";
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    "Board",
    {
      title: DataTypes.STRING,
      grid: DataTypes.JSON,
      authorId: DataTypes.INTEGER,
      actives: DataTypes.JSON,
      position: DataTypes.INTEGER,
      subtitle: DataTypes.TEXT,
    },
    {}
  );
  Board.associate = function (models) {
    Board.belongsTo(models.User, { foreignKey: "authorId" });
    Board.belongsToMany(models.Guide, {
      as: "Subs",
      through: "SubBoards",
      foreignKey: "guideId",
    });
  };
  return Board;
};
