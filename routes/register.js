var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");

//receive post request and Signup a User
router.post('/signup', function(req, res) {
    if (!req.body.username || !req.body.password || !req.body.role) {
        res.json({success: false, msg: 'Please pass username, password and role.'});
    } else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password,
            role:     req.body.role
        });
        // save  user
        newUser.save(function(err) {
            if (err) {
                console.log(err);
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.', role:req.body.role});
        });
    }
});

//receive put request and Signin a User
router.post('/signin', function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;
        //check if user exist
        if (!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found. '});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign({username:user.username}, config.secret);
                    // return the information including token as JSON
                    res.json({success: true, token: 'JWT ' + token});
                } else {
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'+ err});
                }
            });
        }
    });
});


module.exports = router;