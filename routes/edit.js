// display add book page
var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');

// display edit book page
router.get('/', function(req, res, next) {
  
  let id = req.params.id;

  dbConn.query('SELECT * FROM books WHERE id = ' + id, function(err, rows, fields) {
    if(err) throw err

    // if book is not found
    if (rows.length <= 0) {
      req.flash('error', 'Book not found with id = ' + id);
      res.redirect('/books')
    } 
    // if book is found
    else {
      // render to edit. ejs
      res.render('edit', {
        title: 'Edit Book',
        id: rows[0].id,
        name: rows[0].name,
        author: rows[0].author
      })
      
    }
  })
});

module.exports = router;
