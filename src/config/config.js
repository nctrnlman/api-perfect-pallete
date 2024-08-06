require("dotenv").config();
const path = require("path");

console.log("DB_USERNAME:", process.env.DB_USERNAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_DATABASE:", process.env.DB_DATABASE);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_DIALECT:", process.env.DB_DIALECT);

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    migrationStoragePath: path.join(__dirname, "../migrations"),
    seederStoragePath: path.join(__dirname, "../seeders"),
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_DATABASE,
    host: process.env.TEST_DB_HOST,
    dialect: process.env.TEST_DB_DIALECT,
    migrationStoragePath: path.join(__dirname, "../migrations"),
    seederStoragePath: path.join(__dirname, "../seeders"),
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    host: process.env.PROD_DB_HOST,
    dialect: process.env.PROD_DB_DIALECT,
    migrationStoragePath: path.join(__dirname, "../migrations"),
    seederStoragePath: path.join(__dirname, "../seeders"),
  },
};
