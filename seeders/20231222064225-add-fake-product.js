'use strict';

const { randEmail, randFullName, randPassword,randAddress,randNumber,randUserName } = require('@ngneat/falso');
const db=require('../models/index')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = new Array(10).fill().map(() => ({
      name: randFullName(),
      photo_path:randFullName(),
      description:randFullName(),
      price:randNumber({ min: 10, max: 50 }),
    }));
    await queryInterface.bulkInsert('Products', data, {});
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
