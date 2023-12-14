'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, { as: 'user', foreignKey: 'UserId' });
      Comment.belongsTo(models.Product, { as: 'product', foreignKey: 'ProductId' });
    }
  }
  Comment.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:true
    },
    comment: {
      type:DataTypes.STRING,
      allowNull:true
    },
    stars: {
      type:DataTypes.INTEGER,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps: false
  });
  return Comment;
};