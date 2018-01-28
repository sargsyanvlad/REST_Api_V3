const passport = require('passport');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../models/user");
const Device = require("../models/device");

//receive post request for adding Device
router.post('/',  (req, res) => {
    let user = res.locals.users;
    if (user.role === 'admin') {
        var newDevice = new Device({
            user: req.body.user,
            deviceType: req.body.deviceType
        });
        User.findByIdAndUpdate(user.id, {$push: {devices: [newDevice]}}, {new: true}, function (err, user) {
            if (err) return (err);
        });
        newDevice.save(function (err) {
            if (err) {
                return res.json({success: false, msg: 'Save Device failed.'});
            }
            res.json({success: true, msg: 'Successful created new Device.'});
        });
    } else res.send(401, {success: false, msg: "You are not admin"})

})

////receive Put request for Updateing Device propertyes
router.put("/:deviceId", (req, res) => {
    let user = res.locals.users;
    if (user.role === 'admin') {
        //find device in DB update devicetYpe, and addnig new user id
        Device.findByIdAndUpdate(req.params.deviceId, {deviceType: req.body.deviceType, $push:{user: req.body.userId}}, {new: true}, function (err) {
            if (err) res.send(err);
            else res.json(200, {success: true, msg: 'Success'});
        });
    } else res.send(401, {success: false, msg: "You are not admin"})
})

////receive delete request for Delete Device
router.delete("/:deviceId", (req, res) => {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Device.findByIdAndRemove(req.params.deviceId, function (err) {
            if (err) throw err;
            else res.json(200, {success: true, msg: 'Success'});
        });
    }
})

module.exports = router;
