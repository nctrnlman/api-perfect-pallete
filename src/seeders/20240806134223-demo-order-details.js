"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Order_Details",
      [
        {
          order_id: 1, // Sesuaikan dengan order_id yang valid
          product_id: 1, // Sesuaikan dengan product_id yang valid
          quantity: 2,
          price: 50.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 1, // Sesuaikan dengan order_id yang valid
          product_id: 2, // Sesuaikan dengan product_id yang valid
          quantity: 1,
          price: 50.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 2, // Sesuaikan dengan order_id yang valid
          product_id: 3, // Sesuaikan dengan product_id yang valid
          quantity: 1,
          price: 75.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Order_Details", null, {});
  },
};
