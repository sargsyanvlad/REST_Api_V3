let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
let User = require('../models/user');
let Device = require('../models/device');
//get all users
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

//assignining Device  and permission to User
router.post('/:userId/:deviceId/', function (req, res) {
    let loggeduser = res.locals.users;
    let userId = req.params.userId;
    let deviceId = req.params.deviceId;
    // let permission = req.body.permission;
    let obj = {
        _id: req.params.deviceId,
        permissions: req.body.permission
    };
    User.findOne({_id: userId},
        function (err, user) {
            if (user) {
                console.log(user.devices);
                User.findOne({ $or:[ {'devices.id': deviceId}, {'devices.permissions': req.body.permission}  ]}).exec()
                    .then(user => {
                        if(user) {
                            res.send(user);
                        } else {
                                User.findByIdAndUpdate(userId, {$push: {devices: obj}}, {new: true}, function (err) {
                                    if (err) throw err; //if error happened throw this error
                                    else res.json(200, user);
                                    // console.log(user);
                                });
                        }
                    });

                //working example without chekching is dame device and permission exist or not
                // if (loggeduser.role === 'admin') {
                //     // console.log(obj);
                //     // console.log(user);
                //     User.findByIdAndUpdate(userId, {$push: {devices: obj}}, {new: true}, function (err) {
                //         if (err) throw err; //if error happened throw this error
                //         else res.json(200, user);
                //         // console.log(user);
                //     });
                //     Device.findByIdAndUpdate(deviceId, {$push: {user: userId}}, {new: true}, function (err) {
                //         if (err) throw err;
                //
                //     });
                //
                // }
                // else res.send(403, {success: false, msg: "You are not admin"});
            } else {
                return res.send(401, {success: false, msg: "Cant Find User"});
            }
        })
});
//receive put request for update(change) User propertyes
router.put('/:userId', function (req, res) {
    let user = res.locals.users;
    console.log(req.params.userId);
    if (user.role === 'admin') {
        User.findByIdAndUpdate(req.params.userId, {
            username: req.body.username,
            role: req.body.role
        }, {new: true}, function (err) {
            if (err) res.send(400, {msg: "Passed User Id is Wrong"});
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
            if (err) res.send(400, {msg: "Passed User Id is Wrong"});

            else res.json(200, {success: true, msg: 'Success'});
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
});


module.exports = router;