const connection = require('./connection')
const result = connection.query('SELECT * FROM prueba.usuarios WHERE Usuario = ?', ['admin']);
console.log(result.result)
