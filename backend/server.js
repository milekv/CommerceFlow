const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
