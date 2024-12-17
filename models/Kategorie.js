const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Kategorie = sequelize.define("Kategorie", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  nazwa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nadrzedna_kategoria_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Kategorie;
