// display books page
var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');

// delete book
router.get('/', function(req, res, next) {

  let id = req.params.id;
  
    dbConn.query('DELETE FROM books WHERE id = ' + id, function(err, result) {
      if (err) {
        // set flash message
        req.flash('error', err);

        // redirect to books.ejs
        res.redirect('/books')

      } else {
        //set flash message
        req.flash('success', "book successfully deleted! ID = " +  id);
        // redirect to books page
        res.redirect('/books');
        
      }
    })

});

module.exports = router;
