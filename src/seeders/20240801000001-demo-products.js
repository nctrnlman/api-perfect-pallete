"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        product_name: "Casual Outfit",
        product_price: 49.99,
        category_id: 1,
        description: "Stylish casual outfit suitable for everyday wear.",
        productImage: "https://example.com/images/casual-outfit.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Formal Suit",
        product_price: 149.99,
        category_id: 2,
        description: "Elegant formal suit for special occasions.",
        productImage: "https://example.com/images/formal-suit.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Summer Dress",
        product_price: 79.99,
        category_id: 3,
        description: "Lightweight summer dress perfect for warm weather.",
        productImage: "https://example.com/images/summer-dress.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
