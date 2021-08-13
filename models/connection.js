var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'prueba',
  password : 'prueba123',
  database : 'prueba'
});

connection.connect(error => {
  if (error) throw error
  console.log('Database server runnign')
})
module.exports = connection
