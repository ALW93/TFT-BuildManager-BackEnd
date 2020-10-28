'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trait = sequelize.define('Trait', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Trait.associate = function (models) {
    Trait.belongsToMany(models.Champion, {
      as: "champions",
      through: trait_champions,
      foreignKey: "traitId",
      otherKey: "championId"
    })
  };
  return Trait;
};
