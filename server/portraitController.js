const { readdirSync, statSync, mkdirSync } = require('fs');
const path = require('path');

const portraitController = {};

let directory = path.join(__dirname, '../images/portraits/therest');

const newFolder = (directory) => {
  let files = readdirSync(directory);
  if (files[0] === '.DS_Store') {
    files = files.slice(1);
  }

  for (const file of files) {
    const absolute = path.join(directory, file);
    console.log(statSync(absolute).isDirectory());
    if (statSync(absolute).isDirectory()) {
      newFolder(absolute); 
    } else {
        const lengthMinusPNG = file.length - 4;
        let folderName;
        for (let i = lengthMinusPNG; i > 0; i -= 1) {
          if (file[i] === '-') {
            folderName = file.slice(i + 1, lengthMinusPNG);
            break;
          }
        }
        
        mkdirSync(path.join(directory, `${folderName}`));
    }
  }
  return;
}

portraitController.folderCreator = (req, res, next) => {
  newFolder(directory);
  return;
}

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
  const portraits = readdirSync(path.join(__dirname, req.body.emotion));
  if (portraits[0] === '.DS_Store') {
    portraits = portraits.slice(1);
  }
  
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