const passport = require('passport');
require('../config/passport')(passport);
const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Device = require("../models/device");



router.post('/:deviceId/:actionId', (req, res) => {
    let user = res.locals.users;
    let action = req.params.actionId;
    let deviceId = req.params.deviceId;

        User.findOne({_id: user.id}, {__v: 0}).populate({
            path: 'devices',
            select: ['-devices', '-__v']
        }).populate({
            path:'user',
            select:['-Permission', '-__v']

        }).populate({
            path:'permissions',
            select:['-allowedActions', '-__v']

        }).exec((error, data) => {
            if(error) {
                res.send(error)
            } else {
                res.send(data);
        }
    });

});


module.exports = router;
