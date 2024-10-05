"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Product 1",
        image: "http://example.com/product-1.jpg",
        description: "Description for Product 1",
        packageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 2",
        image: "http://example.com/product-2.jpg",
        description: "Description for Product 2",
        packageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 3",
        image: "http://example.com/product-3.jpg",
        description: "Description for Product 3",
        packageId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
