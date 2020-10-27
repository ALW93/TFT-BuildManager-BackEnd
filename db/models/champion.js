'use strict';
module.exports = (sequelize, DataTypes) => {
  const Champion = sequelize.define('Champion', {
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  Champion.associate = function(models) {
    // associations can be defined here
  };
  return Champion;
};