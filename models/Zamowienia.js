const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Zamowienia = sequelize.define("Zamowienia", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  uzytkownik_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_zamowienia: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calkowita_cena: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
});

module.exports = Zamowienia;
