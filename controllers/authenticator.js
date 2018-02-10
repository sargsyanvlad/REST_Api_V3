const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../config/passport')(passport);
const config = require('../config/database');
const User = require('../models/user');

router.use('/', passport.authenticate('jwt', {session: false}), function (req, res, next) {
    let token = getToken(req.headers);
    if (token) {
        let decoded = jwt.decode(token, config.secret);
        let current_time = Date.now().valueOf() / 1000;
        if (current_time > decoded.exp) {       //check if expired  out or not
            return res.send(401,{msg:'Authorization timed out'});
        } else {
            User.findOne({username: decoded.username},
                function (err, user) {
                    if (err) {
                        res.send(202,{success: false, msg: "you are not authorized"});
                    }
                    if (user) {
                        res.locals.users = user;
                        next();
                    } else {
                        return res.send(401,{
                            'status': 401,
                            'code': 2,
                            'message': 'User Not found'
                        });
                    }

                });
        }
    } else {
        // next();
        res.status(204).json({success: false, msg: "unautorized"})

    }
});

//getToken function for getting token from req authorization headers
getToken = function (headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
module.exports = router;