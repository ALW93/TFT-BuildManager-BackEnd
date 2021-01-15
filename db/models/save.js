"use strict";
module.exports = (sequelize, DataTypes) => {
  const Save = sequelize.define(
    "Save",
    {
      boardId: DataTypes.INTEGER,
      followerId: DataTypes.INTEGER,
    },
    {}
  );
  Save.associate = function (models) {
    //
  };
  return Save;
};
