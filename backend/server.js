const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('testowa wiadomosc');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
  res.send('CommerceFlow działa!');
});

// Przykładowy endpoint: Pobranie statusu
app.get('/status', (req, res) => {
  res.json({ status: 'System działa poprawnie!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Serwer uruchomiony na porcie ${PORT}`));
