const { readdirSync } = require('fs');
const path = require('path');

const portraitController = {};

portraitController.emotionParser = (req, res, next) => {
  let emotions = readdirSync(path.join(__dirname, req.body.char));
  // Eliminates hidden DS Store file from array of folders
  if (emotions[0] === '.DS_Store') {
    emotions = emotions.slice(1);
  }
  res.locals.emotions = emotions;
  return next();
};

portraitController.costumeParser = (req, res, next) => {
  let costumes = readdirSync(path.join(__dirname, req.body.emotion));
  if (costumes[0] === '.DS_Store') {
    costumes = costumes.slice(1);
  }
  res.locals.costumes = costumes;
  return next();
};

module.exports = portraitController;