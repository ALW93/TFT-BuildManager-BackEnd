'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guide = sequelize.define('Guide', {
    title: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    content: DataTypes.JSON,
    authorId: DataTypes.INTEGER
  }, {});
  Guide.associate = function(models) {
    // associations can be defined here
  };
  return Guide;
};