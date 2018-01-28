const passport = require('passport');
require('../config/passport')(passport);
const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Device = require("../models/device");




router.post('/:deviceId/:action',(req, res) => {
    let user = res.locals.users;
    let action = req.params.action;
    let deviceId = req.params.deviceId;
    if(action === 'restart'){
        Device.findOne({_id: deviceId},
            function (err, device) {
                if (device) {
                    User.find({_id: user.id}).populate({
                        path: deviceId
                    }).exec(function(error, data){
                        if(error) {
                            res.send(error)
                        } if (user.restart == deviceId ) res.send(200,{msg:"Success"});
                        else res.send(403,{msg:'You are not assigned to this action'});
                    })
                } else {
                    return res.send(401,{message: 'Device Not found'});
                }
            })
    }else if(action === 'start'){
        Device.findOne({_id: deviceId},
            function (err, device) {
                if (device) {
                    User.find({_id: user.id}).populate({
                        path: deviceId
                    }).exec(function(error, data){
                        if(error) {
                            res.send(error)
                        } if (user.start == deviceId ){res.send(user.stop) }
                        else res.send(403,{msg:'You are not assigned to this action'});
                    })
                } else {
                    return res.send(401,{message: 'Device Not found'});
                }
            })
    }
    else if(action === 'stop'){
        Device.findOne({_id: deviceId},
            function (err, device) {
                if (device) {
                    User.find({_id: user.id}).populate({
                        path: deviceId
                    }).exec(function(error, data){
                        if(error) {
                            res.send(error)
                        } if (user.stop == deviceId ){res.send(user.stop) }
                        else res.send(403,{msg:'You are not assigned to this action'});
                    })
                } else {
                    return res.send(401,{message: 'Device Not found'});
                }
            })
    } else res.send(400,{msg:"please pass right action"});
});

module.exports = router;
