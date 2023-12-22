'use strict';
const { randEmail, randFullName, randPassword,randAddress,randNumber,randUserName } = require('@ngneat/falso');
const db=require('../models/index')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allCarts = await db.Cart.findAll();
    const allProducts = await db.Product.findAll();
    const data = [];
    for (const cart of allCarts) {
      for (const product of allProducts) {
        const cartProduct = {
          CartId: cart.id,
          ProductId: product.id,
          cantity:Math.floor(randNumber({ min: 10, max: 50 }))
        };
        data.push(cartProduct);
      }
    }
    await queryInterface.bulkInsert('Cartproducts', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
