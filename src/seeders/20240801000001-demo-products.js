"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        product_name: "Smartphone",
        product_price: 299.99,
        category_id: 1,
        description: "Latest model smartphone with high-end features.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "T-Shirt",
        product_price: 19.99,
        category_id: 2,
        description: "Comfortable cotton t-shirt.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
