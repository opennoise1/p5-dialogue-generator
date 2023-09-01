const { readdirSync, statSync, unlinkSync } = require('fs');
const path = require('path');

const portraitController = {};

let directory = path.join(__dirname, '../images/portraits/');

const deleteFiles = (directory) => {
  let files = readdirSync(directory);
  if (files[0] === '.DS_Store') {
    files = files.slice(1);
  }

  for (const file of files) {
    const absolute = path.join(directory, file);
    console.log(statSync(absolute).isDirectory());
    if (statSync(absolute).isDirectory()) {
      deleteFiles(absolute); 
    } else {
        unlinkSync(absolute);
    }
  }
  return;
}

portraitController.fileDeleter = (req, res, next) => {
  deleteFiles(directory);
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
  let costumes = readdirSync(path.join(__dirname, req.body.emotion));
  // Eliminates hidden DS Store file from array of folders
  if (costumes[0] === '.DS_Store') {
    costumes = costumes.slice(1);
  }
  res.locals.costumes = costumes;
  return next();
};

module.exports = portraitController;