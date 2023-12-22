'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:true
      },
      username: {
        type:Sequelize.STRING,
        allowNull:true
      },
      email: {
        type:Sequelize.STRING,
        allowNull:true
      },
      password: {
        type:Sequelize.STRING,
        allowNull:true
      },
      age: {
        type:Sequelize.INTEGER,
        allowNull:true
      },
      city: {
        type:Sequelize.STRING,
        allowNull:true
      },
      address: {
        type:Sequelize.STRING,
        allowNull:true
      },
      postal_code: {
        type:Sequelize.STRING,
        allowNull:true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
