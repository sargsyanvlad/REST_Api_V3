// let express = require('express');
// let router = express.Router();
// let bodyParser = require('body-parser');
// router.use(bodyParser.json());
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const User = require('../models/users');


exports.signup = (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.role) {
        res.json({success: false, msg: 'Please pass username, password and role.'});
    } else {
        let newUser = new User({
            ...req.body
        });

        // save  user
        newUser.save(function (err) {
            if (err) {
                console.log(err);
                return res.send(400, {success: false, msg: 'Username already exists.'});
            }
            res.send(200, {success: true, msg: 'Successful created new user.', role: req.body.role});
        });
    }
};

exports.signin = function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) throw err;

        else if (!user) {
            res.send(400, {success: false, msg: 'User not found. '});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    let token = jwt.sign({username: user.username}, config.secret, {expiresIn: '1h'});
                    // return the information including token as JSON
                    res.send(200, {success: true, token: 'JWT ' + token});
                } else {
                    res.send(400, {success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
};

//get all users
exports.getUsers = (req, res) => {
    User.find({}, function (err, users) {
        if (err) return res.send(500, {msg: "There was a problem finding the users."});
        if(!users){
            return res.send(400, {msg: "Users not found"});
        }
        res.send(200, users);
    });
};
//Get User By Id
exports.getUserById = (req, res) => {
    User.findOne({_id: req.params.id}, function (err, user) {
        if (err) return res.send(500, {msg: "Wrong query"});
        else if (!user) {
            res.send(400,{success: false, msg: 'User not found. '});
        }
        else res.send(200, user);
    });
};

//receive put request for update(change) User propertyes
exports.updateUser = (req, res) => {
    let user = res.locals.users;
    console.log(req.params.id);
    if (user.role === 'admin') {
        User.findByIdAndUpdate(req.params.userId, {
            ...req.body,
        }, {new: true}, function (err) {
            if (err) res.send(400, {msg: "Passed User Id is Wrong"});
            else res.send(200, {success: true, msg: 'Success'});
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
};

//receive delete request for update(change) User propertyes
exports.deleteUser = (req, res) => {
    let user = res.locals.users;
    if (user.role === 'admin') {
        User.findByIdAndRemove(req.params.id, function (err) {
            if (err) res.send(400, {msg: "User not found"});

            else res.send(200, {success: true, msg: 'Success'});
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
};
