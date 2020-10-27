'use strict';
module.exports = (sequelize, DataTypes) => {
  const Build = sequelize.define('Build', {
    title: DataTypes.STRING,
    tier: DataTypes.STRING,
    playstyle: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    authorId: DataTypes.INTEGER
  }, {});
  Build.associate = function(models) {
    // associations can be defined here
  };
  return Build;
};