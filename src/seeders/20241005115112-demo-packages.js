"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Packages", [
      {
        title: "Autumn Personalized Color Analysis Cosmetics",
        description:
          "True Autumn is warm and muted.The True Autumn colour palette is reminiscent of a walk through an autumn forest – rich, warm and earthy.",
        image:
          "https://blogscdn.thehut.net/wp-content/uploads/sites/2/2018/10/19161836/warm-eyeshadows_1200x672_acf_cropped.jpg",
        price: "99.99",
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Winter Personalized Color Analysis Cosmetics",
        description:
          "True Winter is cool and bright.The True Winter colour palette contains cool, highly-contrasting colours, which play at the extremes of light, dark and bright. ",
        image:
          "https://blogscdn.thehut.net/wp-content/uploads/sites/2/2018/10/19161836/warm-eyeshadows_1200x672_acf_cropped.jpg",
        price: "99.99",
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Summer Personalized Color Analysis Cosmetics",
        description:
          "True Summer is cool and muted.As the coolest of the Summer family, True Summer colours are like a dive into cold water - gentle, calming and refreshing.",
        image:
          "https://blogscdn.thehut.net/wp-content/uploads/sites/2/2018/10/19161836/warm-eyeshadows_1200x672_acf_cropped.jpg",
        price: "99.99",
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Spring Personalized Color Analysis Cosmetics",
        description:
          "True Spring is warm and bright. This season’s colour palette is reminiscent of a set of colouring pencils - warm and highly saturated.",
        image:
          "https://blogscdn.thehut.net/wp-content/uploads/sites/2/2018/10/19161836/warm-eyeshadows_1200x672_acf_cropped.jpg",
        price: "99.99",
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Packages", null, {});
  },
};
