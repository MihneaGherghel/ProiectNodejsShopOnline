'use strict';
const { randEmail, randFullName, randPassword,randAddress,randNumber,randUserName } = require('@ngneat/falso');
const db=require('../models/index')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = new Array(10).fill().map(() => ({
      email: randEmail(),
      password: randPassword(), //TODO replace with password hash
      address:randAddress().street,
      age:randNumber({ min: 10, max: 50 }),
      username:randUserName(),
      city:randFullName(),
      postal_code:randFullName()
    }));
    await queryInterface.bulkInsert('Users', data, {});
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
