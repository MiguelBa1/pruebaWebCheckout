const express = require("express");

const passport = require('../config/passport')

let router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", passport.authenticate('local', {
  successRedirect: '/payment',
  failureRedirect: '/login'
}));

module.exports = router;
