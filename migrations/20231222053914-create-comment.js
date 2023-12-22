'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
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
      ProductId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:{
            tableName:"products"
          }
        }
      },
      comment: {
        type:Sequelize.STRING,
        allowNull:true
      },
      stars: {
        type:Sequelize.INTEGER,
        allowNull:true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};
