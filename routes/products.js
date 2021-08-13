const express = require("express");

const passport = require('../config/passport')
const { displayProducts } = require('../controllers/productsController')

let router = express.Router();

router.post("/", displayProducts);


module.exports = router;
