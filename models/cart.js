'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Cart.belongsTo(models.User, { as: 'user' })
      //Cart.belongsToMany(models.Product, {
       // through: 'CartProducts',
      //  as: 'product'
     // });
    }
  }
  Cart.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    status: {
      type:DataTypes.STRING,
      allowNull:true
    },
    total_price: {
      type:DataTypes.FLOAT,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'Cart',
    timestamps: false
  });
  return Cart;
};