var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');

// display add book page
router.get('/', function(req, res, next) {
  // respond with add.ejs
  res.render('add', {
    name: '',
    author: ''
  })
});

// add a new book
router.post('/', function (req, res, next) {
  let name = req.body.name;
  let author = req.body.author;
  let errors = false;

  if (name.length === 0 || author.length === 0) {
    errors = true;

    //set flash message
    req.flash('error', "Please enter name and author");

    // render to add.ejs with error message
    res.render('add', {
      name: name,
      author: author
    })
  } 

  // If no error
  if (!errors) {
    var form_data = {
      name: name,
      author:  author
    }

    //insert query
    dbConn.query('INSERT INTO books SET?', form_data, function(err, result) {
      if (err) {
        req.flash('error', err);

        // render to add.ejs
        res.render('books/add', {
          name: form_data.name,
          author: form_data.author
        })
      } else {
        req.flash('success', 'Book added successfuly');
        res.redirect('/books');
        
      }
    })
  }
})

module.exports = router;
