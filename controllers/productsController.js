const connection = require('../models/connection')
const productsCtrl = {}
productsCtrl.displayProducts = (req, res) => {
    let reference = req.body
    if (reference['referencia'] != 'none') {
        connection.query('SELECT * FROM prueba.productos WHERE Referencia = ?', reference['referencia'], function (error, results, fields) {
            res.json(results[0])
        })
    } else {
        connection.query('SELECT * FROM prueba.productos', function (error, results, fields) {
            res.json(results)
        })
    }
}
module.exports = productsCtrl
