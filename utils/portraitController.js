const { readdirSync } = require('fs');
const path = require('path');

const portraitController = {};

portraitController.emotionParser = (req, res, next) => {
  let emotions = readdirSync(path.join(__dirname, req.body.char));
  if (emotions[0] === '.DS_Store') {
    emotions = emotions.slice(1);
  }
  res.locals.emotions = emotions;
  return next();
};

portraitController.costumeParser = (req, res, next) => {
  const portraits = readdirSync(path.join(__dirname, req.body.emotion));

  const costumes = [];

  for (const file of portraits) {
    const lengthMinusPNG = file.length - 4;
    for (let i = lengthMinusPNG; i > 0; i -= 1) {
      if (file[i] === '-') {
        costumes.push(file.slice(i + 1, lengthMinusPNG));
        break;
      }
    }
  }

  res.locals.costumes = costumes;
  return next();
};

module.exports = portraitController;