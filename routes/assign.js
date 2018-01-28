const passport = require('passport');
require('../config/passport')(passport);
const express = require('express');
const router = express.Router();
const User = require("../models/user");


//assignining Device  and permission to User
router.post('/:userId/:deviceId/:allowedAction', (req, res) => {
    let user = res.locals.users;
    var userId = req.params.userId;
    var deviceId = req.params.deviceId;
    var allowedAction = req.params.allowedAction;
    if (user.role === 'admin') {
        if (allowedAction === 'start') {
            User.findByIdAndUpdate(userId, {$push: {start: deviceId}}, {new: true}, function (err) {
                if (err) throw err;
                else res.json(200, {success: true, msg: 'Success'});
            });
        }
        else if (allowedAction === 'stop') {
            User.findByIdAndUpdate(userId, {$push: {stop: deviceId}}, {new: true}, function (err) {
                if (err) throw err;
                else res.json(200, {success: true, msg: 'Success'});
            });
        }
        else if (allowedAction === 'restart') {
            User.findByIdAndUpdate(userId, {$push: {restart: deviceId}}, {new: true}, function (err) {
                if (err) throw err;
                else res.json(200, {success: true, msg: 'Success'});
            });
        }
        else (res.send('Please pass Action'));
    }
    else (res.send('You are not Admin'));


});

module.exports = router;
