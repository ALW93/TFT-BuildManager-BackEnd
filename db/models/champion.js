"use strict";

module.exports = (sequelize, DataTypes) => {
  const Champion = sequelize.define(
    "Champion",
    {
      name: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {}
  );
  Champion.associate = function (models) {
    Champion.belongsToMany(models.Trait, {
      as: "traits",
      through: models.trait_champion,
      foreignKey: "championId",
      otherKey: "traitId",
    });
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
      foreignKey: "championId",
      otherKey: "itemId",
    });
  };
  return Champion;
};
