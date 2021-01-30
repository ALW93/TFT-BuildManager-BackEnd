"use strict";
module.exports = (sequelize, DataTypes) => {
  const SubBoard = sequelize.define(
    "SubBoard",
    {
      position: DataTypes.INTEGER,
      guideId: DataTypes.INTEGER,
      boardId: DataTypes.INTEGER,
    },
    {}
  );
  SubBoard.associate = function (models) {
    SubBoard.belongsTo(models.Guide, { foreignKey: "guideId" });
    SubBoard.belongsTo(models.Board, { foreignKey: "boardId" });
  };
  return SubBoard;
};
