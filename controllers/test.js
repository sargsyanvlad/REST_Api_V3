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
        else{
            let cursor = User('devices').find({
                devices: {$elemMatch: {_id: deviceId, permissions: req.body.permission}}
            });
            res.json(200, cursor, data);
        }
    });
});

// User.update(
//     {id: user.id},
//     {$push:{devices:{$each:obj}}}
// )
// db.inventory.update(
//     { _id: 2 },
//     { $addToSet: { tags: { $each: [ "camera", "electronics", "accessories" ] } } }
// )
