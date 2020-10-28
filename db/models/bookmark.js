"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define(
    "Bookmark",
    {
      buildId: DataTypes.INTEGER,
      followerId: DataTypes.INTEGER,
    },
    {}
  );
  Bookmark.associate = function (models) {
    // associations can be defined here
  };
  return Bookmark;
};
