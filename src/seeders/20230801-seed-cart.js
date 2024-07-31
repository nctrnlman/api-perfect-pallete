"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Carts", [
      {
        user_id: 1,
        product_id: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        product_id: 2,
        qty: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        product_id: 1,
        qty: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
