'use strict';
module.exports = (sequelize, DataTypes) => {
  const Component = sequelize.define('Component', {
    name: DataTypes.STRING,
    acronym: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Component.associate = function(models) {
    // associations can be defined here
  };
  return Component;
};