"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      buildId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Build, { foreignKey: "buildId" });
  };
  return Comment;
};
