'use strict';
module.exports = (sequelize, DataTypes) => {
  const champion = sequelize.define('champion', {
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  champion.associate = function (models) {
    champion.belongsToMany(models.trait, {
      as: "traits",
      through: models.origin,
      foreignKey: "championId",
      otherKey: "traitId"
    })
  };
  return champion;
};
