'use strict';
module.exports = (sequelize, DataTypes) => {
  const build_champion = sequelize.define('build_champion', {
    buildId: DataTypes.INTEGER,
    championId: DataTypes.INTEGER,
    carry: DataTypes.BOOLEAN
  }, {});
  build_champion.associate = function(models) {
    // associations can be defined here
  };
  return build_champion;
};