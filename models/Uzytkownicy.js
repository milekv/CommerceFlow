const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Uzytkownicy = sequelize.define('Uzytkownicy', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  imie: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  haslo_hash: { type: DataTypes.STRING, allowNull: false },
  data_rejestracji: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  data_aktualizacji: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Uzytkownicy;
