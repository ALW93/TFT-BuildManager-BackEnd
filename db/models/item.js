'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    acronym: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Item.associate = function (models) {
    Item.belongsToMany(models.Component, {
      as: "components",
      through: models.item_component,
      foreignKey: "itemId",
      otherKey: "componentId",
    });
    Item.belongsToMany(models.Champion, {
      as: "default_equipment",
      through: models.item_champion,
      foreignKey: "itemId",
      otherKey: "championId",
    });
    Item.belongsToMany(models.Build, {
      as: "item_customization",
      through: models.build_champion_item,
      foreignKey: "itemId",
      otherKey: "buildId",
    });
    Item.belongsToMany(models.Champion, {
      as: "item_customization",
      through: models.build_champion_item,
      foreignKey: "itemId",
      otherKey: "championId",
    });
  };
  return Item;
};
