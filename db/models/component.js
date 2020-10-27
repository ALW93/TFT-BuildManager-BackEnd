'use strict';
module.exports = (sequelize, DataTypes) => {
  const component = sequelize.define('component', {
    name: DataTypes.STRING,
    acronym: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  component.associate = function(models) {
    // associations can be defined here
  };
  return component;
};