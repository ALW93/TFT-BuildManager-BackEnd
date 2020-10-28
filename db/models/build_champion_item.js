"use strict";
module.exports = (sequelize, DataTypes) => {
  const build_champion_item = sequelize.define(
    "build_champion_item",
    {
      buildId: DataTypes.INTEGER,
      championId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
    },
    {}
  );
  build_champion_item.associate = function (models) {
    // associations can be defined here
  };
  return build_champion_item;
};
