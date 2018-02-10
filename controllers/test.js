const express = require('express');
const router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
const User = require("../models/user");
const Device = require("../models/device");
const passport = require('passport');
require('../config/passport')(passport);


router.post('/:deviceId/:action', (req, res) => {
    let user = res.locals.users;
    let action = req.params.action;
    let deviceId = req.params.deviceId;
    console.log(res.locals.users);
    if (action === 'start' || 'stop' || 'restart') {
        Device.findOne({_id: deviceId},//check if device exist
            function (device) {
                if (device) { //if exist  query in db with $and Expression,  and select the documents that satisfy all the expressions in the array
                    User.findOne({$and: [{'_id':user.id},{'devices._id': deviceId}, {'devices.permissions': action}]}).exec()
                        .then(user => {
                            if (user) {
                                res.send(200, {success: true, msg: 'Action passed'});

                            } else {
                                res.send(400, {success: false, msg: "You haven't permission for this action"})
                            }
                        });
                } else {
                    return res.send(401, {message: 'Device Not found'});
                }
            })
    } else res.send(400, {msg: "please pass right action"});
});

module.exports = router;


// let express = require('express');
// let router = express.Router();
// let bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({extended: true}));
// router.use(bodyParser.json());
// let User = require('../models/user');
// let Device = require('../models/device');
// //get all users
// router.post('/', function (req, res) {
//     //hardcoded
//     User.findOne({$or: [{'devices.id': '5a7d606753f30d1237bf2999'}, {'devices.permissions': 'start'}]}).exec()
//         .then(user => {
//             if (user) {
//                 res.send("We don't have to push it");
//             } else {
//                 res.send("We have to push it");
//             }
//         });
//     //
//     // User.findOne({_id: "5a7d606753f30d1237bf2999"},
//     //     function (err, user) {
//     //         if (user) {
//     //
//     //             forEach()
//     //
//     //         } else {
//     //             return res.send(401, {success: false, msg: "Cant Find User"});
//     //         }
//     //     })
//
//
//     // console.log(user.schema.obj.devices);
//     // res.send(User.schema.obj.devices);
//     // find each person with a last name matching 'Ghost'
// //     var query = User.findOne({ 'name.last': 'Ghost' });
// //
// // // selecting the `name` and `occupation` fields
// //     query.select('name occupation');
// //
// // // execute the query at a later time
// //     query.exec(function (err, person) {
// //         if (err) return handleError(err);
// //         console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
// //     })
// //});
//
//
// module.exports = router;
