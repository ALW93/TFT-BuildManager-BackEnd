"use strict";
module.exports = (sequelize, DataTypes) => {
  const trait_champion = sequelize.define(
    "trait_champion",
    {
      championId: DataTypes.INTEGER,
      traitId: DataTypes.INTEGER,
    },
    {}
  );
  trait_champion.associate = function (models) {
    // associations can be defined here
  };
  return trait_champion;
};
