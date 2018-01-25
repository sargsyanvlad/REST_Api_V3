var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
var Client = require('node-rest-client').Client;
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");


mongoose.connect(config.database);
console.log(config.database);

// router.get('/', function(req, res) {
//     res.end('Page under construction.');
// });
//
// router.post('/login', function(req, res, next) {
//     var token = getToken(req.headers);
//     if (token) {
//         var decoded = jwt.decode(token, config.secret);
//         passport.authenticate('jwt', {session: false}, function () {
//             console.log(decoded);
//             User.findOne({ username: decoded.username },
//                 function (err, user) {
//                     if(err){
//                         return res.json(200, {success:false, msg:"you are not authorized"});
//                     }
//
//                     if (user) {
//                         if (user.role == 'admin') {
//                             return res.json(200, {userContent: 'You are admin', user: user});
//                         } else {
//                             return res.send(403, {
//                                 'status': 403,
//                                 'code': 1,
//                                 'message': 'You are not admin'
//                             });
//                         }
//                     } else {
//                         return res.send(401, {
//                             'status': 401,
//                             'code': 2,
//                             'message': 'You are not authenticated'
//                         });
//                     }
//
//                 });
//
//         })
//     } else{return res.json({success:false, msg:"unautorized"})}
// });

//Token authentication working example, with decoded token
router.post('/', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);

            console.log(decoded);
            User.findOne({ username: decoded.username },
                function (err, user) {
                if(err){
                    return res.json(202, {success:false, msg:"you are not authorized"});
                }

                    if (user) {
                        res.locals.users = user;
                        next();
                    } else {
                        return res.send(401, {
                            'status': 401,
                            'code': 2,
                            'message': 'user chka'
                        });
                    }

                });


    } else{return res.json({success:false, msg:"unautorized"})}
});


getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
// app.use('/activity/', function(req, res, next) {
//
//     var token = getToken(req.headers);
//     if (token) {
//         passport.authenticate('jwt', {session: false}, function (err, user) {
//             User.findOne({
//                     id: token.id
//                 },
//                 function (err, user) {
//
//                     if (user) {
//                         if (user.role == 'user') {
//                             return res.send(200, {userContent: 'You are USer', user: user, msg:"call", id: user.id});
//                         } else {
//                             return res.send(403, {
//                                 'status': 403,
//                                 'code': 1,
//                                 'message': 'You are not User'
//                             });
//                         }
//                     } else {
//                         return res.send(401, {
//                             'status': 401,
//                             'code': 2,
//                             'message': 'You are not authenticated'
//                         });
//                     }
//
//                 });
//
//         })(req, res, next);
//    } else{return res.json({success:false, msg:"unautorized"})}
// });

module.exports = router;