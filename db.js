const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'nazwa_bazy_danych', 
  'nazwa_uzytkownika', 
  'haslo', 
  {
    host: 'localhost',
    dialect: 'mysql', 
  }
);

module.exports = sequelize;
