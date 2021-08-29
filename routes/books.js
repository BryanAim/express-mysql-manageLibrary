// display books page
var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {

  dbConn.query('SELECT * FROM books ORDER BY id desc', function (err, rows) {

    if (err) {
      req.flash('error, err');
      // render to views/books.ejs
      res.render('books', { data: '' });
    } else {
      //render to views/books.ejs
      res.render('books', { 
        title: 'Express',
        data: rows 
      });
      
    }
  });
});

module.exports = router;
