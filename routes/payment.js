const express = require("express");

const passport = require('../config/passport')
const { processPayment } = require('../controllers/paymentController')

let router = express.Router();

router.get("/",  (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  } 
} , (req, res) => {
  res.render("payment");
});

router.post("/", processPayment);

module.exports = router;
