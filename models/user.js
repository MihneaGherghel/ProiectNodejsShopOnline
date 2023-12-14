'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //User.hasMany(models.Comment, {as:'comment'})
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:true
    },
    username: {
      type:DataTypes.STRING,
      allowNull:true
    },
    email: {
      type:DataTypes.STRING,
      allowNull:true
    },
    password: {
      type:DataTypes.STRING,
      allowNull:true
    },
    age: {
      type:DataTypes.INTEGER,
      allowNull:true
    },
    city: {
      type:DataTypes.STRING,
      allowNull:true
    },
    address: {
      type:DataTypes.STRING,
      allowNull:true
    },
    postal_code: {
      type:DataTypes.STRING,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};