const connection = require('../models/connection')
const bcrypt = require("bcrypt");
const passport = require('passport')
const PassportLocal = require('passport-local').Strategy

passport.use(new PassportLocal(function(username, password, done) {
  connection.query('SELECT * FROM prueba.usuarios WHERE Usuario = ?', [username], function (error, results, fields) {
    // Error query
    if (error) throw error;

    if (results.length >= 1){
      const {Usuario, idUsuario, Contraseña} = results[0]
      if (bcrypt.compareSync(password, Contraseña)) {
        done(null, {id: idUsuario, user: Usuario})
      } else {
        done(null, false, {message: 'Contraseña incorrecta'})
      }
    } else {
      done(null, false, {message: 'Usuario no encontrado'})
    }
  });
}))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  connection.query('SELECT * FROM prueba.usuarios WHERE idUsuario = ?', [id], function (error, results, fields) {
    // Error query
    if (error) throw error;
    done(error, results[0])
  });
})
module.exports = passport
