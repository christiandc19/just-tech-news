// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'root', { // The new Sequelize() function accepts the database name, MySQL username, and MySQL password (respectively) as parameters, then we also pass configuration settings. 
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;

// All we're doing here is importing the base Sequelize class and using it to create a new connection to the database. 
// Once we're done, we simply export the connection.