"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Packages", [
      {
        title: "Package A",
        description: "Description for Package A",
        image: "http://example.com/image-a.jpg",
        price: "99.99",
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Package B",
        description: "Description for Package B",
        image: "http://example.com/image-b.jpg",
        price: "149.99",
        stock: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Packages", null, {});
  },
};
