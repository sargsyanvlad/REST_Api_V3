const passport = require('passport');
require('../config/passport')(passport);
const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Device = require("../models/device");


//assignining Device  and permission to User
router.post('/:userId/:deviceId/:allowedAction', (req, res) => {
    let loggeduser = res.locals.users;
    var userId = req.params.userId;
    var deviceId = req.params.deviceId;
    var allowedAction = req.params.allowedAction;

    User.findOne({_id: userId},
        function (err, user) {
            if (user) {
                if (loggeduser.role === 'admin') {
                    if (allowedAction === 'start') {
                        User.findByIdAndUpdate(userId, {$push: {start: deviceId}}, {new: true}, function (err) {
                            if (err) throw err;

                        });
                        Device.findByIdAndUpdate(deviceId, {$push: {user: userId}}, {new: true}, function (err) {
                            if (err) throw err;
                            else res.json(200, {success: true, msg: 'Success'});
                        });
                    }
                    else if (allowedAction === 'stop') {
                        User.findByIdAndUpdate(userId, {$push: {stop: deviceId}}, {new: true}, function (err) {
                            if (err) throw err;

                        });
                        Device.findByIdAndUpdate(deviceId, {$push: {user: userId}}, {new: true}, function (err) {
                            if (err) throw err;
                            else res.json(200, {success: true, msg: 'Success'});
                        });
                    }
                    else if (allowedAction === 'restart') {
                        User.findByIdAndUpdate(userId, {$push: {restart: deviceId}}, {new: true}, function (err) {
                            if (err) throw err;
                        });
                        Device.findByIdAndUpdate(deviceId, {$push: {user: userId.isNew}}, {new: true}, function (err) {
                            if (err) throw err;
                            else res.json(200, {success: true, msg: 'Success'});
                        });
                    }
                    else (res.send('Please pass Action'));
                }
                else (res.send('You are not Admin'));

            } else {
                return res.status(401).json({message: 'User Not found'});
            }

        })

    });

module.exports = router;
