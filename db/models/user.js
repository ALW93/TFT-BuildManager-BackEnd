"use strict";

const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validates: {
          len: [1, 255],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validates: {
          isEmail: true,
          len: [3, 255],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },
      tokenId: {
        type: DataTypes.STRING,
      },
      userIcon: {
        type: DataTypes.STRING,
      },
      bookmarks: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Build, { foreignKey: "userId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
    // User.belongsToMany(models.User, {
    //   as: "followers",
    //   through: "Following",
    //   otherKey: "followerId",
    //   foreignKey: "authorId",
    // }),
    //   User.belongsToMany(models.User, {
    //     as: "followedAuthors",
    //     through: "Following",
    //     otherKey: "authorId",
    //     foreignKey: "followerId",
    //   });
  };

  // Setting Validation
  User.prototype.isValid = () => true;

  // Setting Hashed Password
  User.prototype.setPassword = function (password) {
    this.hashedPassword = bcrypt.hashSync(password);
    return this;
  };

  // Setting Pass Validation
  User.prototype.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  // Safe Retrieval
  User.prototype.toSafeObject = function () {
    return {
      email: this.email,
      id: this.id,
      username: this.username,
    };
  };
  return User;
};
