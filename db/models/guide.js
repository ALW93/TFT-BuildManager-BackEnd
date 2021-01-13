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
    Guide.belongsTo(models.User, { foreignKey: "authorId", as: "Author" });
    Guide.hasMany(models.Comment, { foreignKey: "guideId" });

    Guide.belongsToMany(models.Board, {
      as: "SubBoards",
      through: "Guide_Boards",
      foreignKey: "guideId",
    });

    Guide.belongsToMany(models.User, {
      as: "Bookmarkers",
      through: "Bookmarks",
      foreignKey: "guideId",
    });
  };
  return Guide;
};
