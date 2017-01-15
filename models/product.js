var Sequelize = require('sequelize');
var sequelize = new Sequelize('baza', 'root', 'root');
var Product = sequelize.define('Product', {

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    price: Sequelize.FLOAT,
    description: Sequelize.STRING,
    category: Sequelize.STRING
});

Product.sync();

module.exports.Product = Product;