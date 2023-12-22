'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:true
      },
      UserId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:{
            tableName:"users"
          }
        }
      },
      status: {
        type:Sequelize.STRING,
        allowNull:true
      },
      total_price: {
        type:Sequelize.FLOAT,
        allowNull:true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Carts');
  }
};
