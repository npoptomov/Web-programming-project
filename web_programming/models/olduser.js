var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var UserSchema = mongoose.Schema({
		email: {
			type:String,
			index:true
		},
		password: {
			type:String
		},
		name: {
			type:String
		},
		surname: {
			type:String
		}

});


var User = module.exports = mongoose.model('User',UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(newUser.password, salt, function(err, hash) {
			        // Store hash in your password DB.  
				newUser.password = hash;
			        newUser.save(callback);	
		});

	});

}