var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");

router.post('/:user/:id/:deviceId/:allowedActions', function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin'){

    }
    User.findOne(user.id).populate('allowedActions').exec(function (err, user) {
        if (err) return (err);
        console.log(User);

    });
    // updateUser.update()
    newDevice.save(function (err) {
        if (err) {
            return res.json({success: false, msg: 'Save Device failed.'});
        }
        res.json({success: true, msg: 'Successful created new Device.'});
    });
});

module.exports = router;
