'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trait = sequelize.define('Trait', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Trait.associate = function(models) {
    // associations can be defined here
  };
  return Trait;
};