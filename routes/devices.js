var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Device = require("../models/device");

//receive post request for adding Device
router.post('/', function (req, res) {
    let user = res.locals.users;
    var newDevice = new Device({
        user: user._id,
        token: req.body.token,
        devicename: req.body.devicename
    });
    User.findByIdAndUpdate(user.id, {$push: {devices: [newDevice]}}, {new: true}, function (err, user) {
        if (err) return (err);
        //res.send(user._id);

    });
    // updateUser.update()
    newDevice.save(function (err) {
        if (err) {
            return res.json({success: false, msg: 'Save Device failed.'});
        }
        res.json({success: true, msg: 'Successful created new Device.'});
    });
});

////receive Put request for Updateing Device propertyes
router.put("/", function (req, res) {
    let user = res.locals.user;
    if (user.role === 'admin') {
        let upDateDev = new Device({
            deviceType: req.body.devicetype
        });
        Device.findByIdAndUpdate(req.body.deviceId, upDateDev,{new:true},function (err) {
            if (err) throw err;
            else res.json(200,{success: true, msg:'Success'});
        });
    }
});

////receive delete request for Delete Device
router.delete("/", function (req, res) {
    let user = res.locals.user;
    if (user.role === 'admin') {
        Device.findByIdAndRemove(req.body.deviceId,{new:true},function (err, device) {
            if (err) throw err;
            else res.json(200,{success: true, msg:'Success'});
        });
    }
});

module.exports = router;
