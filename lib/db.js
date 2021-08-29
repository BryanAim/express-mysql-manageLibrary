var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'booklibrary'
});
connection.connect(function(error){
  if (!!error) {
    console.log(error);
  } else {
    console.log("Database connection Succeeded!");
  }
});

module.exports = connection;