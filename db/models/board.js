"use strict";
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    "Board",
    {
      title: DataTypes.STRING,
      grid: DataTypes.JSON,
      authorId: DataTypes.INTEGER,
      actives: DataTypes.JSON,
      subtitle: DataTypes.TEXT,
    },
    {}
  );
  Board.associate = function (models) {
    Board.belongsTo(models.User, { foreignKey: "authorId", as: "Creator" });
    Board.hasMany(models.Guide_Board, {
      foreignKey: "boardId",
      onDelete: "cascade",
    });
    Board.belongsToMany(models.Guide, {
      as: "Featured",
      through: models.Guide_Board,
      foreignKey: "boardId",
      onDelete: "cascade",
    });
    Board.belongsToMany(models.User, {
      as: "Saved_By",
      through: "Saves",
      foreignKey: "boardId",
    });

    // Board.belongsTo(models.Guide, {
    //   foreignKey: "boardId",
    //   as: "Featured_Board",
    // });
  };
  return Board;
};
