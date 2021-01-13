"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define(
    "Bookmark",
    {
      guideId: DataTypes.INTEGER,
      followerId: DataTypes.INTEGER,
    },
    {}
  );
  Bookmark.associate = function (models) {
    //
  };
  return Bookmark;
};
