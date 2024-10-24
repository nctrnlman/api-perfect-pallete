"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash("password1234", 10);

    await queryInterface.bulkInsert("Users", [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        password: hashedPassword,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        password: hashedPassword,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "zhara",
        email: "zhara@admin.com",
        password: hashedPassword,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
