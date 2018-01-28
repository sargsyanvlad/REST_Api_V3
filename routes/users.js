const passport = require('passport');
require('../config/passport')(passport);
const express = require('express');
const router = express.Router();
const User = require("../models/user");


//receive put request for update(change) User propertyes
router.put('/:userId', function (req, res) {
    let user = res.locals.users;
    console.log(req.params.userId);
    if (user.role === 'admin') {
        User.findByIdAndUpdate(req.params.userId, {
            username: req.body.username,
            role: req.body.role
        }, {new: true}, function (err) {
            if (err) res.send(400,{msg:"Passed User Id is Wrong"})
            else res.send(200, {success: true, msg: 'Success'});
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
});

//receive delete request for update(change) User propertyes
router.delete('/:userId', function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        User.findByIdAndRemove(req.params.userId, function (err) {
            if(err) res.send(400,{msg:"Passed User Id is Wrong"});

            else res.json(200, {success: true, msg: 'Success'});
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
});

module.exports = router;