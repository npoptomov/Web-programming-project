var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('express-flash');
//var flash = require('connect-flash');
var session = require('express-session');

var setupPassport = require('./config/passportConfig');


/*var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;*/



var index = require('./routes/index');
var users = require('./routes/users');
var cart = require('./routes/cart');
var account = require('./routes/account');
var register = require('./routes/register');
var products = require('./routes/products');
var dashboard = require('./routes/dashboard');
var newProduct = require('./routes/newProduct');

var app = express();










// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());


app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }));

app.use(flash());
/*app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
}); */





setupPassport(app);

app.get('/logOut', function(req, res) {
    req.logout();
    res.redirect('/')
});
app.use('/', index);
app.use('/users', users);
app.use('/cart', cart);
app.use('/account', account);
app.use('/register', register);
app.use('/products', products);
app.use('/dashboard', dashboard);
app.use('/newProduct', newProduct);

/*app.use(function (req,res,next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});*/







// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});




module.exports = app;
