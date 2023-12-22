'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Cartproducts', {
      CartId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:true,
        references:{
          model:{
            tableName:"carts"
          }
        }
      },
      ProductId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:true,
        references:{
          model:{
            tableName:"products"
          }
        }
      },
      cantity: {
        type:Sequelize.INTEGER,
        allowNull:true,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('CartProducts');
  }
};
