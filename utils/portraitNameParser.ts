const { readdirSync, lstatSync } = require('fs');
const path = require('path');

const portraitNameParser = (req, res, next) => {
  const items = readdirSync(path.join(__dirname, req.body.dir));

  /**
   * TODO: Check to see if the current element is a directory or a file
   * to determine if we should parse the file name to create the correct
   * drop-down menu or if we need to go another level deeper
   */
  items.forEach((el) => {
    if (el.isDirectory()) {

    } else if (el.isFile()) {

    }
  })

  res.locals.folders = items;
  next();
}

module.exports = portraitNameParser;