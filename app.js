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
const users = require('./controllers/userController');
const devices = require('./controllers/deviceController');
const auth = require('./controllers/authController');
const action = require('./controllers/actionsController');
// const assign = require('./routes/assign');
const config = require('./config/database');
const User = require('./models/user');
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
app.use('/login', auth);


// JWT Token authentication, with decoded token
app.use('/auth', passport.authenticate('jwt', {session: false}), function (req, res, next) {
    let token = getToken(req.headers);
    if (token) {
        let decoded = jwt.decode(token, config.secret);
        let current_time = Date.now().valueOf() / 1000;
        if (current_time > decoded.exp) {       //check if expired  out or not
            return res.send(401,{msg:'Authorization timed out'});
        } else {
            User.findOne({username: decoded.username},
                function (err, user) {
                    if (err) {
                        res.send(202,{success: false, msg: "you are not authorized"});
                    }
                    if (user) {
                        res.locals.users = user;
                        next();
                    } else {
                        return res.send(401,{
                            'status': 401,
                            'code': 2,
                            'message': 'User Not found'
                        });
                    }

                });
        }
    } else {
        next();
        res.status(204).json({success: false, msg: "unautorized"})

    }
});

//users delete, update
app.use('/auth/users', users);
app.use('/auth/devices', devices);
// app.use('/auth/assign', assign);
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
