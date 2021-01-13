"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      message: DataTypes.TEXT,
      authorId: DataTypes.INTEGER,
      guideId: DataTypes.INTEGER,
    },
    {}
  );
  Comment.associate = function (models) {};
  return Comment;
};
