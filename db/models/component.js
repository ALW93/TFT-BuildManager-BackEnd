'use strict';
module.exports = (sequelize, DataTypes) => {
  const Component = sequelize.define('Component', {
    name: DataTypes.STRING,
    acronym: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Component.associate = function (models) {
    Component.belongsToMany(models.Item, {
      as: "components",
      through: models.item_component,
      foreignKey: "componentId",
      otherKey: "itemId",
    });
  };
  return Component;
};
