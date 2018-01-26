var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Device = require("../models/device");

//receive put request for update(change) User propertyes
router.put('/:userId', function (req, res) {
    var user = res.locals.users;
    console.log(req.params.userId);
    if (user.role === 'admin') {
        // let updateUser = new User({
        //     username: req.body.username,
        //     role: req.body.role,
        //     permission: req.body.permission
        // });
        User.findByIdAndUpdate(req.params.userId, {
            username: req.body.username,
            role: req.body.role,
            allowedActions: req.body.allowedActions
        }, {new: true}, function (err) {
            if (err) throw err;
            if (!user) {
                res.send(401, {success: false, msg: 'Cant find User'});
            }
            else res.send(200, {success: true, msg: 'Success'});
        });
    } else {res.send(401,{success: false, msg: 'You are not Admin'})}
});

//receive delete request for update(change) User propertyes
router.delete('/:userId', function (req, res) {
    let user = res.locals.user;
    if (user.role === 'admin') {
        User.findByIdAndRemove(req.params.userId, {new: true}, function (err) {
            if (err) throw err;
            if (!user) {
                res.json(401, {success: false, msg: 'Cant find User'});
            }
            else res.json(200, {success: true, msg: 'Success'});
        });
    }
});


module.exports = router;