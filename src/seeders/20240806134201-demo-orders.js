"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          user_id: 1, // Sesuaikan dengan user_id yang valid
          total_price: 150.0,
          status: "completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2, // Sesuaikan dengan user_id yang valid
          total_price: 75.5,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
