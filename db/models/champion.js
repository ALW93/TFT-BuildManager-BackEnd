"use strict";

module.exports = (sequelize, DataTypes) => {
  const Champion = sequelize.define(
    "Champion",
    {
      name: DataTypes.STRING,
      championId: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      image: DataTypes.STRING,
      traits: DataTypes.ARRAY(DataTypes.STRING),
    },
    { timestamps: false }
  );
  Champion.associate = function (models) {
    Champion.belongsToMany(models.Item, {
      as: "default_equipment",
      through: models.item_champion,
      foreignKey: "championId",
      otherKey: "itemId",
    });
    Champion.belongsToMany(models.Build, {
      as: "team",
      through: models.build_champion,
      foreignKey: "championId",
      otherKey: "buildId",
    });
    Champion.belongsToMany(models.Build, {
      through: models.build_champion_item,
      foreignKey: "championId",
      otherKey: "buildId",
    });
    Champion.belongsToMany(models.Item, {
      through: models.build_champion_item,
      as: "custom_equipment",
      foreignKey: "championId",
      otherKey: "itemId",
    });
  };
  return Champion;
};
