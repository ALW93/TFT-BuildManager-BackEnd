"use strict";
module.exports = (sequelize, DataTypes) => {
  const item_champion = sequelize.define(
    "item_champion",
    {
      championId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
    },
    {}
  );
  item_champion.associate = function (models) {
    // associations can be defined here
  };
  return item_champion;
};
