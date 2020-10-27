'use strict';
module.exports = (sequelize, DataTypes) => {
  const origin = sequelize.define('origin', {
    championId: DataTypes.INTEGER,
    traitId: DataTypes.INTEGER
  }, {});
  origin.associate = function(models) {
    // associations can be defined here
  };
  return origin;
};