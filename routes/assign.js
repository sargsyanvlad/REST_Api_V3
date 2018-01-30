const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Device = require("../models/device");
const passport = require('passport');
require('../config/passport')(passport);

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
                    if (allowedAction === 'start' || 'stop' || 'restart') {
                        User.findByIdAndUpdate(userId, {$push: {user: [allowedAction] = deviceId}}, {new: true}, function (err) {
                            if (err) throw err; //if error happened throw this error
                        });
                        Device.findByIdAndUpdate(deviceId, {$push: {user: userId}}, {new: true}, function (err) {
                            if (err) throw err;
                            else res.json(200, {success: true, msg: 'Success'});
                        });
                    }
                    else res.send(400, {msg: "please pass action"});
                }
                else res.send(403, {success: false, msg: "You are not admin"});

            } else {
                return res.send(401, {success: false, msg: "Cant Find User"});
            }

        })

});

module.exports = router;
