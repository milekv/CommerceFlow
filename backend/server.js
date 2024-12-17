const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

db.sync()
  .then(() => {
    console.log('Połączono z bazą danych');
    app.listen(PORT, () => {
      console.log(`Serwer uruchomiony na porcie ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
