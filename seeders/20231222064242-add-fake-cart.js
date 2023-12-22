'use strict';
const { randEmail, randFullName, randPassword,randAddress,randNumber,randUserName } = require('@ngneat/falso');
const db=require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const allUsers = await db.User.findAll();
    const data = allUsers.map((user) => {
      return ({
        total_price:randNumber({ min: 10, max: 50 }),
        status:randEmail(),
        userId: user.id
      })
    })
    await queryInterface.bulkInsert('Carts', data, {});
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
