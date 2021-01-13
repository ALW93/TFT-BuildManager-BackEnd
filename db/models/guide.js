"use strict";
module.exports = (sequelize, DataTypes) => {
  const Guide = sequelize.define(
    "Guide",
    {
      title: DataTypes.STRING,
      votes: DataTypes.INTEGER,
      content: DataTypes.JSON,
      authorId: DataTypes.INTEGER,
    },
    {}
  );
  Guide.associate = function (models) {
    Guide.belongsTo(models.User);
    Guide.hasMany(models.Comment, { foreignKey: "guideId" });
    Guide.belongsToMany(models.Board, { through: "SubBoard" });
    Guide.belongsToMany(models.User, { through: "Bookmark" });
  };
  return Guide;
};
