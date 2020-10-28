'use strict';
module.exports = (sequelize, DataTypes) => {
  const Champion = sequelize.define('Champion', {
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  Champion.associate = function (models) {
    Champion.belongsToMany(models.Trait, {
      as: "traits",
      through: trait_champions,
      foreignKey: "championId",
      otherKey: "traitId"
    })
  };
  return Champion;
};
