"use strict";
module.exports = (sequelize, DataTypes) => {
  const Build = sequelize.define(
    "Build",
    {
      title: DataTypes.STRING,
      tier: DataTypes.STRING,
      playstyle: DataTypes.STRING,
      votes: DataTypes.INTEGER,
      notes: DataTypes.TEXT,
      authorId: DataTypes.INTEGER,
    },
    {}
  );
  Build.associate = function (models) {
    Build.belongsTo(models.User, { foreignKey: "authorId" });
    Build.hasMany(models.Comment, { foreignKey: "buildId" });
    Build.belongsToMany(models.User, {
      as: "bookmarks",
      through: models.Bookmark,
      foreignKey: "buildId",
      otherKey: "followerId",
    });
    Build.belongsToMany(models.Champion, {
      as: "team",
      through: models.build_champion,
      foreignKey: "buildId",
      otherKey: "championId",
    });
    Build.belongsToMany(models.Item, {
      through: models.build_champion_item,
      foreignKey: "buildId",
      otherKey: "itemId",
    });
    Build.belongsToMany(models.Champion, {
      through: models.build_champion_item,
      foreignKey: "buildId",
      otherKey: "championId",
    });
  };
  return Build;
};
