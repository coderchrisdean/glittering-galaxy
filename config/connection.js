const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

try {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} catch (error) {
  console.error("Failed to connect to JAWSDB, trying to connect to local database", error);
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: process.env.DB_PORT,
    }
  );
}

module.exports = sequelize;