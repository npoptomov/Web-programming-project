var express = require('express');
var router = express.Router();
var passport = require('passport');

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    req.flash('error', 'You have to be logged in to access the page.');
    res.redirect('/');
};



router.get('/', isAuthenticated, function (req, res, next) {
    //req.flash('info', 'Welcome');
    res.render('dashboard', {username: req.user.id});
});


module.exports = router;
module.exports.isLogged = isAuthenticated;


