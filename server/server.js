const express = require('express');
const path = require('path');
const cors = require('cors');

const portraitController = require('./portraitController.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, 'assets')));

app.post('/emotions', portraitController.emotionParser, (req, res) => {
  return res.status(200).json(res.locals.emotions);
});

app.post('/costumes', portraitController.costumeParser, (req, res) => {
  return res.status(200).json(res.locals.costumes);
});

app.use('*', (req, res) => {
  return res.sendStatus(404);
});

app.use((err, req, res, next) => {
  return res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`Alibaba here! The Phantom Thieves are listening in on localhost:${PORT}!`);
});