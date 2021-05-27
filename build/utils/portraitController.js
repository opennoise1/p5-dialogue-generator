const { readdirSync } = require('fs');
const path = require('path');

const portraitController = {};

// portraitController.getCharacters = (req, res, next) => {
//   const characters = readdirSync(path.join(__dirname, '../images/portraits')).slice(1);
//   const charNum = Math.floor(Math.random() * characters.length);
//   const char = characters[charNum];
  
  // const emotions = readdirSync(path.join(__dirname, `../images/portraits/${char}`));
  // const emoNum = Math.floor(Math.random() * emotions.length);
  // const emo = emotions[emoNum];
  
  // const costumes = readdirSync(path.join(__dirname, `../images/portraits/${char}/${emo}`));
  // const costumeNum = Math.floor(Math.random() * costumes.length);
  // const costumeFile = costumes[costumeNum];

  // let costume = '';
  // const lengthMinusPNG = costumeFile.length - 4;

  // for (let i = lengthMinusPNG; i > 0; i -= 1) {
  //   if (costumeFile[i] === '-') {
  //     costume = costumeFile.slice(i + 1, lengthMinusPNG);
  //     break;
  //   }
  // }

  // res.locals.initial = [];
  // res.locals.initial[0] = char;
  // res.locals.initial[1] = emo;
  // res.locals.initial[2] = costume;
//   return next();
// };

portraitController.emotionParser = (req, res, next) => {
  const emotions = readdirSync(path.join(__dirname, req.body.char));

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