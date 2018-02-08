const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Device = require("../models/device");
const passport = require('passport');
require('../config/passport')(passport);

router.post('/:deviceId/:action',(req, res) => {
    let user = res.locals.users;
    let action = req.params.action;
    let deviceId = req.params.deviceId;
    if(action === 'start' || 'stop' || 'restart'){
        Device.findOne({_id: deviceId},
            function (err, device) {
                if (device) {
                    User.find({_id: user.id}).populate({
                        path: 'devices'
                    }).exec(function (error, user) {
                        if (error) {
                            res.send(error)
                        } else res.send(user[0]);
                        // if (user[action] === deviceId ) res.send(200,{msg:"Success"});
                        // else console.log(user), res.send(403,{msg:'You are not assigned to this action'});
                    });
                } else {
                    return res.send(401,{message: 'Device Not found'});
                }
            })
    } else res.send(400,{msg:"please pass right action"});
});

module.exports = router;
