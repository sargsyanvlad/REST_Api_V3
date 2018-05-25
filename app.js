const appRoot =  require('app-root-path');
const express = require('express');
const config = require('config');
const app = express();
const path = require('path');
const logger = require(`${appRoot}/api/modules/winston/index.js`);
const logging =  require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const util = require(`${appRoot}/libs/util`);
const fs = require('fs');

//--! import Routes !--//
const auth_router = require('./api/routes/auth_router');
const user_routes = require('./api/routes/users_router'); //importing route
const device_router = require('./api/routes/devices_router');
const app_list_router = require('./api/routes/apps_router');
const calls_router = require('./api/routes/calls_router');
const commands_router = require('./api/routes/commands_router');
const contacts_router = require('./api/routes/contacts_router');
const messages_router = require('./api/routes/messages_router');
const notifications_router = require('./api/routes/notifications_router');
const upload_router = require('./api/routes/upload_router');


process.on('SIGINT', util.graceful).on('SIGTERM', util.graceful);

process.on('unhandledRejection', (reason, p) => {
    logger.error('Unhandled Rejection at:', p, 'reason:', reason);
    // logic
})
    .on('uncaughtException', (err) => {
        console.log(err);
        logger.error(`Caught exception: \n ${err}`);
        util.graceful(err);
    })
    .on('ECONNREFUSED', (err) => {
        logger.error('ECONNREFUSED: \n', err);
        util.graceful(err);
    })
    .on('ELIFECYCLE', (err) => {
        logger.error('ELIFECYCLE: \n', err);
        util.graceful(err);
    });

process.on('message', (msg) => {
    if (msg === 'shutdown') {
        logger.info('[Process] : get shutdown command...');
        util.graceful('[Process]');
    }
});


//create connection to db

mongoose.connect(config.get('db.db'));
logger.info('Connected to Mongodb');


// create a write stream for logger
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(passport.initialize());
// app.use(logger('dev,ip,:id,:method,:url,:response-time', {stream: accessLogStream}));
app.use(logging( 'default',{stream: accessLogStream}));
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

app.use(async (req, res, next) => {
    try {
        await next();
    } catch (err) {
        console.log('Error handler', err);
        res.status( err.statusCode || err.status || 500).send({error: err.message || err});
    }
});

util.initClearExit(app,mongoose);

module.exports = app;
