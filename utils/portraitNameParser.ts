const { readdirSync, lstatSync } = require('fs');
const path = require('path');

const portraitNameParser = (req, res, next) => {
  const emotions = readdirSync(path.join(__dirname, req.body.dir));

  /**
   * TODO: Check to see if the current element is a directory or a file
   * to determine if we should parse the file name to create the correct
   * drop-down menu or if we need to go another level deeper
   */

  // Create a new array, capitalizing each emotion
  // (Should I just capitalize the folder names?)
  const capitalized = emotions.map(emote => {
    emote.slice(0, 1).toUpperCase() + emote.slice(1);
  });

  res.locals.folders = capitalized;
  next();
}

module.exports = portraitNameParser;