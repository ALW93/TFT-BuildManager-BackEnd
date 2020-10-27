'use strict';
module.exports = (sequelize, DataTypes) => {
  const part = sequelize.define('part', {
    itemId: DataTypes.INTEGER,
    componentId: DataTypes.INTEGER
  }, {});
  part.associate = function(models) {
    // associations can be defined here
  };
  return part;
};