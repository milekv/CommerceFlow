const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Produkty = sequelize.define("Produkty", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  nazwa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  opis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  kategoria_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cena: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  ilosc_w_magazynie: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Produkty;
