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
    Board.hasMany(models.Guide, { through: models.Guide_Board });
  };
  return Board;
};
