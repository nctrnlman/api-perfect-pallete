"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          userId: 1,
          qty: 3,
          totalPrice: "150.00",
          status: "new order",
          paymentMethod: "credit_card",
          shippingName: "John Doe",
          shippingAddress: "123 Main St, Cityville, 12345, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
