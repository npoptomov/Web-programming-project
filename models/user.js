var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('baza', 'root', 'root');
var User = sequelize.define('User', {

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastName: Sequelize.STRING
});

User.sync();

module.exports.User = User;



