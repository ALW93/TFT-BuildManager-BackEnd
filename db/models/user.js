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
      rank: DataTypes.STRING,
      verified: DataTypes.BOOLEAN,
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Guide, { foreignKey: "authorId" });
    User.hasMany(models.Board, { foreignKey: "authorId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.belongsToMany(models.Board, {
      as: "Savers",
      through: "Saves",
      foreignKey: "followerId",
    });

    User.belongsToMany(models.Guide, {
      as: "Bookmarked",
      through: "Bookmarks",
      foreignKey: "followerId",
    });

    User.belongsToMany(models.User, {
      as: "Followers",
      through: "Follows",
      foreignKey: "userId",
    });
    User.belongsToMany(models.User, {
      as: "Following",
      through: "Follows",
      foreignKey: "followerId",
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
