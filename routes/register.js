var express = require('express');
var router = express.Router();
var Model = require('../models/user');




router.get('/', function (req, res, next) {
    res.render('register');
});

router.get('/:product', function (req,res,next) {
    res.render('register', {product: req.params.product});
});


router.post('/', function(req, res){
	var name=req.body.name;
	var surname=req.body.surname;
	var email=req.body.email;
	var password=req.body.password;
	var password2=req.body.password2;


//validation
req.checkBody('name','Name is required').notEmpty();
req.checkBody('surname','Last name is required').notEmpty();
req.checkBody('email','Email is required').notEmpty();
req.checkBody('email','Email is not valid').isEmail();
req.checkBody('password','Password is required').notEmpty();
req.checkBody('password2','Password does not match').equals(password);


var errors = req.validationErrors();

if(errors){
	console.log('YES');
    res.redirect('/register');
} else {
	/*var newUser = new User({
		email: email,
		password: password,
		name: name,
		surname: surname
	});	

	User.createUser(newUser,function(err, user){
		if (err) throw err;
		console.log(user);

	});*/

	var model = Model.User.create({
	
		email: email,
		password: password

	});

    res.redirect('/register');

	//req.flash('success_msg', 'You are now registered');
	//res.redirect('/account');
	
}


});




module.exports = router;
