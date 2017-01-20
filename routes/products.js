var express = require('express');
var router = express.Router();
var Prod = require('../models/product');


router.get('/', function (req, res, next) {

    res.render('products');



});

module.exports = router;
