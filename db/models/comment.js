"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      message: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      guideId: DataTypes.INTEGER,
    },
    {}
  );
  Comment.associate = function (models) {};
  return Comment;
};
