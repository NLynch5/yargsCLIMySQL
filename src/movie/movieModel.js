const sequelize = require("../db/connection.js");
const { DataTypes } = require("sequelize");

//creating a table and Movie object with the sequlize define
const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    type: DataTypes.STRING,
  },
});

module.exports = Movie;
