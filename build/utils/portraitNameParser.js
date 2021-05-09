const {readdirSync, lstatSync} = require("fs");
const path = require("path");
const portraitNameParser = (req, res, next) => {
  const emotions = readdirSync(path.join(__dirname, req.body.dir));
  const capitalized = emotions.map((emote) => {
    emote.slice(0, 1).toUpperCase() + emote.slice(1);
  });
  res.locals.folders = capitalized;
  next();
};
module.exports = portraitNameParser;
