'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:true
      },
      photo_path: {
        type:Sequelize.STRING,
        allowNull:true
      },
      description: {
        type:Sequelize.STRING,
        allowNull:true
      },
      price: {
        type:Sequelize.FLOAT,
        allowNull:true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
