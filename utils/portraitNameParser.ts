const { readdirSync, lstatSync } = require('fs');
const path = require('path');

const portraitNameParser = (req, res, next) => {
  const items = readdirSync(path.join(__dirname, req.body.dir));

  items.forEach((el) => {
    if (el.isDirectory()) {
      portraitNameParser(req, res, next)
    } else if (el.isFile()) {
      
    }
  })

  res.locals.folders = items;
  next();
}

module.exports = portraitNameParser;