const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const users = require('./controllers/userController');
const devices = require('./controllers/deviceController');
const reg = require('./controllers/authController');
const action = require('./controllers/actionsController');
const auth = require('./controllers/authenticator');
const config = require('./config/database');

const fs = require('fs');

//create connection to db
mongoose.connect(config.database);
console.log(config.database);

// create a write stream for logger
let accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(passport.initialize());
app.use(logger('dev',{stream:accessLogStream}));//actually im using morgan as a logger
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//user register, signin middlware
app.use('/login', reg);


// JWT Token authentication, with decoded token
app.use('/auth', auth);
//users delete, update
app.use('/auth/users', users);
app.use('/auth/devices', devices);
app.use('/auth/actions', action);

//error hanelers
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//getToken function for getting token from req authorization headers
getToken = function (headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

app.listen(8080, "192.168.2.56");
module.exports = app;
