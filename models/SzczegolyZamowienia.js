const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const SzczegolyZamowienia = sequelize.define("SzczegolyZamowienia", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  zamowienie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  produkt_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ilosc: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cena_jednostkowa: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
});

module.exports = SzczegolyZamowienia;
