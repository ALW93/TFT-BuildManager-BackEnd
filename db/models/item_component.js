"use strict";
module.exports = (sequelize, DataTypes) => {
  const item_component = sequelize.define(
    "item_component",
    {
      itemId: DataTypes.INTEGER,
      componentId: DataTypes.INTEGER,
    },
    {}
  );
  item_component.associate = function (models) {
    // associations can be defined here
  };
  return item_component;
};
