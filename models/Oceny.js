const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Oceny = sequelize.define("Oceny", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  uzytkownik_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  produkt_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ocena: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  komentarz: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Oceny;
