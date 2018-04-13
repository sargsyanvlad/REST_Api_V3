const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');

//--! import Routes !--//
const auth_router = require('./api/routes/auth_router');
const user_routes = require('./api/routes/users_router'); //importing route
const device_router = require('./api/routes/devices_router');
const app_list_router = require('./api/routes/apps_router');
const calls_router = require('./api/routes/calls_router');
const commands_router = require('./api/routes/commands_router');
const contacts_router =  require('./api/routes/contacts_router');
const messages_router =  require('./api/routes/messages_router');
const notifications_router =  require('./api/routes/notifications_router');
const upload_router = require('./api/routes/upload_router');

const config = require('./config/database');
const fs = require('fs');

//create connection to db
mongoose.connect(config.database);
console.log(config.database);

// create a write stream for logger
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(passport.initialize());
app.use(logger('dev', {stream: accessLogStream}));//actually im using morgan as a logger
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//-- assign routes To app --//
auth_router(app);
user_routes(app);
device_router(app);
app_list_router(app);
calls_router(app);
commands_router(app);
contacts_router(app);
messages_router(app);
notifications_router(app);
upload_router(app);

//error hanelers
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    if (err){
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    }
    else next();
});

app.listen(8080, "127.0.0.1");
module.exports = app;
