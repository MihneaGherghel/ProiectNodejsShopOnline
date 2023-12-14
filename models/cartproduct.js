'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //CartProduct.hasOne(models.Product, { as: 'product', foreignKey:'id' })
      //CartProduct.hasOne(models.Cart, {as:'cart', foreignKey:'id'})
    }
  }
  CartProduct.init({
    ProductId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull:true
    },
    CartId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull:true
    },
    cantity: {
      type:DataTypes.INTEGER,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'CartProduct',
    timestamps: false
  });
  return CartProduct;
};