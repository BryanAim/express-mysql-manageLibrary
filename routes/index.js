// display add book page
var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // respond with add.ejs
  res.render('index', {
    name: '',
    author: ''
  })
});

module.exports = router;
