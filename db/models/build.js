"use strict";
module.exports = (sequelize, DataTypes) => {
  const Build = sequelize.define(
    "Build",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      tier: {
        type: DataTypes.STRING,
      },
      playstyle: {
        type: DataTypes.STRING,
      },
      team: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      traits: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      carry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      carryitems: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      subcarry: {
        type: DataTypes.STRING(255),
      },
      subitems: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      votes: {
        type: DataTypes.INTEGER,
      },
      notes: {
        type: DataTypes.TEXT,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Build.associate = function (models) {
    Build.belongsTo(models.User, { foreignKey: "userId" });
    Build.hasMany(models.Comment, { foreignKey: "buildId" });
  };
  return Build;
};
