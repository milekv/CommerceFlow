const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nazwa_bazy_danych', 'uzytkownik', 'haslo', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
