var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");

//receive put request for update(change) User propertyes
router.put('/', function (req, res) {
    let user = res.locals.user;
    if (user.role === 'admin') {
        let updateUser = new User({
            username: req.body.username,
            role: req.body.role,
            permission: req.body.permission
        });
        User.findByIdAndUpdate(req.body.Userid, updateUser, {new: true}, function (err) {
            if (err) throw err;
            if (!user) {
                res.json(401, {success: false, msg: 'Cant find User'});
            }
            else res.json(200, {success: true, msg: 'Success'});
        });
    }
});

//receive delete request for update(change) User propertyes
router.delete('/', function (req, res) {
    let user = res.locals.user;
    if (user.role === 'admin') {
        User.findByIdAndRemove(req.body.Userid, {new: true}, function (err) {
            if (err) throw err;
            if (!user) {
                res.json(401, {success: false, msg: 'Cant find User'});
            }
            else res.json(200, {success: true, msg: 'Success'});
        });
    }
});


module.exports = router;