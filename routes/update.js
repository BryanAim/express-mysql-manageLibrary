var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');

// update book data
router.post('/', function(req, res, next) {

  let id = req.params.id;
  let name = req.body.name;
  let author = req.body.author;
  let errors = false;

  if (name.length === 0 || author.length ===0 ) {
    errors = true;

    //set flash message
    req.flash('error', "Please enter name and author");

    //render edit.ejs with flash message
    res.render('books/edit', {
      id: req.params.id,
      name: name,
      author: author
    })
  }

  // If no error
  if(!errors) {
    var form_data = {
      name: name,
      author: author
    }

    // update query
    dbConn.query('UPDATE books SET ? WHERE id = ' + id, form_data, function(err, result) {
      if (err) {
        // set flash message
        req.flash('error', err);

        // render edit.ejs
        res.render('/books/edit', {
          id: req.params.id,
          name: form_data.name,
          author: form_data.author
        })
      } else {
        req.flash('success', "book successfully updated");
        res.redirect('/books');
        
      }
    })
  }

});

module.exports = router;
