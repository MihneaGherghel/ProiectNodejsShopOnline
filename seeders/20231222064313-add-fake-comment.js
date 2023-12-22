'use strict';
const { randEmail, randFullName, randPassword,randAddress,randNumber,randUserName } = require('@ngneat/falso');
const db=require('../models/index')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const allUsers = await db.User.findAll();
    const allProducts = await db.Product.findAll();
    const data = new Array(10).fill().map(() => ({
      UserId: allUsers[Math.floor(Math.random() * allUsers.length)].id,
      ProductId: allProducts[Math.floor(Math.random() * allProducts.length)].id,
      stars:randNumber({ min: 1, max: 5 }),
      comment:randEmail()
    }));
    await queryInterface.bulkInsert('Comments', data, {});
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
