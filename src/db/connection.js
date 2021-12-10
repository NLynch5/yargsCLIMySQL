require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

// can check if the connection is working below -
sequelize.authenticate();

module.exports = sequelize;
