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
    User.hasMany(models.Guide, { foreignKey: "authorId", as: "Author" });
    User.hasMany(models.Board, { foreignKey: "authorId", as: "Author" });
    User.hasMany(models.Comment, { foreignKey: "authorId", as: "Author" });
    User.belongsToMany(models.Guide, { through: models.Bookmark });
    User.belongsToMany(models.User, { through: models.Follow });
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
