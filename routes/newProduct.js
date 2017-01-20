var express = require('express');
var router = express.Router();
var Model = require('../models/product')


router.get('/', function (req, res, next) {
    res.render('newProduct');
});


router.post('/', function(req, res) {
    var title = req.body.title;
    var comment = req.body.comment;


//validation
    req.checkBody('title', 'Title is required').notEmpty();
    //req.checkBody('comment', 'Comment name is required').notEmpty();


    var errors = req.validationErrors();

    if (errors) {
        console.log('YES');
        res.redirect('/error');
    } else {


        var model = Model.Product.create({

            name: title,
            description: comment

        });

        res.redirect('/newProduct');


    }
});

module.exports = router;
