var Model = require('../models/user')

module.exports = function(callback) {
    // recreate User table
    Model.User.sync({ force: true }).then(function() {

        Model.User.create({
            email: 'npoptomov@gmail.com',
            password: 'nikola'
        }).then(callback)
    })
};