const express = require('express');
const router = express.Router();
const Uzytkownicy = require('../models/Uzytkownicy');

// Endpoint do rejestracji użytkownika
router.post('/register', async (req, res) => {
  const { imie, email, haslo_hash } = req.body;
  const user = await Uzytkownicy.create({ imie, email, haslo_hash });
  res.status(201).json(user);
});

module.exports = router;
