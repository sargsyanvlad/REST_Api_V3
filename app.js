const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const users = require('./routes/users');
const device = require('./routes/devices');
const assign = require('./routes/assign');
const register = require('./routes/register');
const multer = require('multer');
const config = require('./config/database');
const User = require('./models/user');


//create connection to db
mongoose.connect(config.database);
console.log(config.database);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(passport.initialize());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/register',register);
//user update middleware
app.use('/users', users);

//Token authentication, with decoded token
app.use('/auth', passport.authenticate('jwt', {session: false}), function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);

        console.log(decoded);
        User.findOne({username: decoded.username},
            function (err, user) {
                if (err) {
                    res.status(202).json({success: false, msg: "you are not authorized"});
                    // return res.json(202, );
                }

                if (user) {
                    res.locals.users = user;
                    next();
                } else {
                    return res.status(401).json({
                        'status': 401,
                        'code': 2,
                        'message': 'User Not found'
                    });
                }

            });


    } else {
        return res.status(204).json({success: false, msg: "unautorized"})
    }
});


app.use('/auth/device', device);
app.use('/auth/assign', assign);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

app.listen(8080, "localhost");
module.exports = app;
