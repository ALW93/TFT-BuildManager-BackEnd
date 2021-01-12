"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define(
    "Bookmark",
    {
      guideId: {
        type: DataTypes.INTEGER,
        references: {
          model: Guide,
          key: "id",
        },
      },
      followerId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
    },
    {}
  );
  Bookmark.associate = function (models) {
    // associations can be defined here
  };
  return Bookmark;
};
