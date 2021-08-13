const express = require("express");

const { renderResponse } = require('../controllers/responseController')

let router = express.Router();

router.get("/",  (req, res, next) => {
  if (req.session.requestId) {
    next()
  } else {
    res.redirect('/payment')
  } 
} , renderResponse);


module.exports = router;
