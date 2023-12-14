'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Product.belongsToMany(models.Cart, {
      //    through: 'CartProducts',
     //     as: 'cart'
     // });
      //Product.hasMany(models.Comment, {as:'comment'})
    }
  }
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:true
    },
    photo_path: {
      type:DataTypes.STRING,
      allowNull:true
    },
    description: {
      type:DataTypes.STRING,
      allowNull:true
    },
    price: {
      type:DataTypes.FLOAT,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false
  });
  return Product;
};