const path = require('path');
const express = require('express');
const cors = require('cors');

const portraitNameParser = require('../utils/portraitNameParser.ts');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/menus', portraitNameParser, (req, res) => {
  return res.status(200).json(res.locals.folders);
});

app.listen(PORT, () => {
  console.log(`Alibaba here! The Phantom Thieves are listening in on localhost:${PORT}!`);
});