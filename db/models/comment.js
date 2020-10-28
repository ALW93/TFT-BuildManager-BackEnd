'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    message: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    buildId: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(model.Build, { foreignKey: "buildId " });
    Comment.belongsTo(model.User, { foreignKey: "userId " })
  };
  return Comment;
};
