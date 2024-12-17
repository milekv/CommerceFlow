const express = require("express");
const sequelize = require("./config/db");

// Import modeli
const Produkty = require("./models/Produkty");
const Kategorie = require("./models/Kategorie");
const Zamowienia = require("./models/Zamowienia");
const SzczegolyZamowienia = require("./models/SzczegolyZamowienia");
const Oceny = require("./models/Oceny");

// Połączenie z bazą danych
sequelize.sync().then(() => {
  console.log("Połączono z bazą danych");
}).catch((error) => {
  console.error("Błąd podczas łączenia z bazą danych", error);
});

const app = express();
app.use(express.json());

// Podstawowa trasa testowa
app.get("/", (req, res) => {
  res.send("Welcome to CommerceFlow API");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});

