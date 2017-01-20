var passport = require('passport'),
     LocalStrategy = require('passport-local').Strategy,
     Model = require('../models/user');


var setupPassport = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());


    passport.use(new LocalStrategy(

        function(username, password, done) {
            Model.User.findOne({
                where: {
                    'email': username
                }
            }).then(function (user) {
                if (user == null) {
                    return done(null, false, {message: 'Incorrect login'})
                }



                if (user.password === password) {
                    return done(null, user)
                }

                return done(null, false, {message: 'Incorrect login'})
            })
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id)
    });

    passport.deserializeUser(function(id, done) {
        Model.User.findOne({
            where: {
                'id': id
            }
        }).then(function (user) {
            if (user == null) {
                done(new Error('Wrong user id.'))
            }

            done(null, user)
        })
    })

};

module.exports = setupPassport;