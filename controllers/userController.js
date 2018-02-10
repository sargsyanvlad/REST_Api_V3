let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
let User = require('../models/user');

//get all users
router.get('/', function (req, res) {
    console.log(res.locals.users);
    User.find({}, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(user, );
    });
});

//assigning Device  and permission to User when Post request is coming
//also we can add '/put', '/patch', '/delete' req handlers for replacing, updating or deleting user's permissions
router.post('/:userId/:deviceId/', function (req, res) {
    let loggeduser = res.locals.users;
    let userId = req.params.userId;
    let deviceId = req.params.deviceId;
    // let permission = req.body.permission;
    let obj = {
        _id: req.params.deviceId,
        permissions: req.body.permission
    };
    let prem = '';
    perm = req.body.permission;
    User.findOne({_id: userId}, //check is the passed user ID exist
        function (err, user) {
            if (user) { //if exist
                User.findOne({'devices._id': deviceId}).exec()  //check is device ID already assigned to user
                    .then(user => {
                        if (user) { //if  device  assigned just update user permissions, avoiding duplications
                            User.update({'devices._id': deviceId}, {"$addToSet": {"devices.$.permissions": perm}}, function (err, data) {
                                if (err) res.send(err);
                                else res.send(data);
                            });
                        } else { //else push whole object, 'obj', in user
                            User.findByIdAndUpdate(userId, {$push: {devices: obj}}, {new: true}, function (err) {
                                if (err) res.send(err); //if error happened response  this error
                                else res.json(200, {
                                    suscess: true,
                                    msg: 'Device Assigned to user, and new permissionss added'
                                });
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