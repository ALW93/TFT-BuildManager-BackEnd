"use strict";

const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      hashedPassword: DataTypes.STRING,
      userIcon: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.belongsToMany(models.Build, {
      as: "bookmarks",
      through: models.Bookmark,
      foreignKey: "followerId",
      otherKey: "buildId",
    });
    User.hasMany(models.Board, { foreignKey: "authorId", as: "Author" });
    User.hasMany(models.Build, { foreignKey: "authorId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.belongsToMany(models.User, {
      as: "following",
      through: models.Follow,
      foreignKey: "userId",
      otherKey: "followerId",
    });
    User.belongsToMany(models.User, {
      as: "followers",
      through: models.Follow,
      foreignKey: "followerId",
      otherKey: "userId",
    });
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.prototype.toSafeObject = function () {
    return {
      id: this.id,
      email: this.email,
      username: this.username,
      createdAt: this.createdAt,
    };
  };

  return User;
};
