"use strict";
module.exports = (sequelize, DataTypes) => {
  const Trait = sequelize.define(
    "Trait",
    {
      name: DataTypes.STRING,
      key: DataTypes.STRING,
      description: DataTypes.TEXT,
      type: DataTypes.STRING,
      image: DataTypes.STRING,
      tiers: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    { timestamps: false }
  );
  Trait.associate = function (models) {
    // Associations go here
  };
  return Trait;
};
