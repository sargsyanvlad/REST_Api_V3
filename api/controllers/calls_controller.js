const Calls = require('../models/calls');
const helper = require('../../libs/helpers/dataUpdate');
let mongoose = require('mongoose');

// post --> save Calls
exports.save_calls = async (req, res) => {

    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success: false, msg: 'Please send valid Id'})
    }

    let newCalls = new Calls({
        ...req.body,
        deviceId: id
    });

    newCalls.save(function (err) {
        if (err) {
            return res.status(400).send({success: false, msg: err.message});
        }
        else res.status(201).send({success: true, msg: 'Successful created new Calls.'});
    });
};

exports.update_calls = async (req, res) => {
    let newCalls = req.body.data;

    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success: false, msg: 'Please send valid Id'})
    }

    let calls = await Calls.findOne({deviceId: id})
        .select('-_id data')
        .catch(err => {
            return res.status(400).send({msg: err.errmsg})
        });

    if (!calls) {
        return res.status(400).send('Calls not found');
    }

    let result = await helper.update(calls, newCalls).catch(err => res.status(400).send({msg: err.errmsg}));

    let ok = Calls.update({deviceId: id}, {data: result}, {new: true})
        .catch(err => res.status(400).send({msg: err.errmsg}));

    res.status(200).send(ok);
};

//get request --> get Calls
exports.get_calls = async (req, res) => {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Calls.find({}, function (err, calls) {
            if (err) return res.status(500).send({msg: "There was a problem finding Calls."});

            if (!calls) {
                res.status(400).send('Calls not found');
            }

            else res.status(200).send(calls);
        });
    } else {
        res.status(401).send({success: false, msg: 'You are not Admin'})
    }
};

//get request /deviceId --> get Calls by Device Id
exports.get_calls_byID = async (req, res) => {
    let user = res.locals.users;
    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success: false, msg: 'Please send valid Id'})
    }

    if (user.role === 'admin') {
        Calls.findOne({deviceId: id}, function (err, calls) {
            if (err) {
                return res.status(500).send({msg: "There was a problem finding Calls."});
            }

            if (!calls) {
                return res.status(400).send('Calls not found');
            }

            else res.status(200).send(calls);
        })
    }
};
