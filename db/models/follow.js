'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    userId: DataTypes.INTEGER,
    followerId: DataTypes.INTEGER,
  }, {});
  Follow.associate = function (models) {
    // Add Associations Here
  };
  return Follow;
};
