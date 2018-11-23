var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Sherman! - Voice Commands!", username: process.env.TWITCHUSER, oauth: process.env.OAUTH });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = router;
