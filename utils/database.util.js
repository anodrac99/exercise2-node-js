const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

//conntect to data base
const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: process.env.DB,
  logging: false,
});

module.exports = { db, DataTypes };
