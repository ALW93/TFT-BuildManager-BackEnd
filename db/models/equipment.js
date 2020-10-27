'use strict';
module.exports = (sequelize, DataTypes) => {
  const equipment = sequelize.define('equipment', {
    championId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    default: DataTypes.BOOLEAN
  }, {});
  equipment.associate = function(models) {
    // associations can be defined here
  };
  return equipment;
};