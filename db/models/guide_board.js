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
    Guide_Board.belongsTo(models.Guide, { foreignKey: "guideId" });
    Guide_Board.hasMany(models.Board, { foreignKey: "id" });
  };
  return Guide_Board;
};
