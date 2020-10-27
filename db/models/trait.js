'use strict';
module.exports = (sequelize, DataTypes) => {
  const trait = sequelize.define('trait', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  trait.associate = function (models) {
    trait.belongsToMany(models.champion, {
      as: "champions",
      through: models.origin,
      foreignKey: "traitId",
      otherKey: "championId"
    })
  };
  return trait;
};
