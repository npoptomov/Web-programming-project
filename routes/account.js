var express = require('express');
var router = express.Router();
var passport = require('passport');





router.get('/', function (req, res, next) {
    //req.flash('info', 'Welcome');
    if (req.isAuthenticated()){
        res.redirect('/dashboard');
    }
        else {
        res.render('account', {message: req.flash('error')});
    }




});

router.post('/', passport.authenticate('local',{
    successRedirect: '/dashboard',
    failureRedirect: '/account',
    failureFlash: true
}));

module.exports = router;


