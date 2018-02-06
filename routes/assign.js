// const express = require('express');
// const router = express.Router();
// const User = require("../models/user");
// const Device = require("../models/device");
// const passport = require('passport');
// require('../config/passport')(passport);
//
// //assignining Device  and permission to User
// router.post('/:userId/:deviceId/:allowedAction', function (req, res) {
//     let loggeduser = res.locals.users;
//     let userId = req.params.userId;
//     let deviceId = req.params.deviceId;
//     let allowedAction = req.params.allowedAction;
//     var obj = {};
//     obj[allowedAction] = deviceId;
//     User.findOne({_id: userId},
//         function (err, user) {
//             if (user) {
//                 if (loggeduser.role === 'admin') {
//                     if (allowedAction === 'start' || 'stop' || 'restart') {
//                         User.findByIdAndUpdate(userId, {$push:obj}, {new:true}, function (err) {
//                             if (err) throw err; //if error happened throw this error
//                             console.log(user);
//                         });
//                         Device.findByIdAndUpdate(deviceId, {$push: {user: userId}}, {new: true}, function (err) {
//                             if (err) throw err;
//                             else res.json(200, {success: true, msg: 'Success'});
//                         });
//                     }
//                     else res.send(400, {msg: "please pass action"});
//                 }
//                 else res.send(403, {success: false, msg: "You are not admin"});
//
//             } else {
//                 return res.send(401, {success: false, msg: "Cant Find User"});
//             }
//         })
// });
//
// module.exports = router;
