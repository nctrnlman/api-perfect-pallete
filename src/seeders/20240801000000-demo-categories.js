"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        category_name: "Outfit",
        categoryImage: "https://example.com/images/outfit.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Formal Wear",
        categoryImage: "https://example.com/images/formal-wear.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Summer Collection",
        categoryImage: "https://example.com/images/summer-collection.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
