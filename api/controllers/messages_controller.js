const Messages = require("../models/messages");
const mongoose = require('mongoose');
const Device = require('../models/devices');
// post --> save messages list
exports.save_messages = async (req, res) => {

    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success: false, msg: 'Please send valid Id'})
    }

    let device = await Device.findOne({deviceId: id}).select('_id')
        .catch(err => {
            return res.status(400).send({msg: err.errmsg})
        });

    if (device instanceof Error) {
        return res.status(400).send({msg: 'There is no Devices'});
    }

    let newMessages = new Messages({
        ...req.body,
        deviceId: id
    });

    newMessages.save(function (err) {
        if (err) {
            console.log(err);
            return res.send(400, {success: false, msg: 'Save Messages List failed.'})
        }
        res.send(201, {success: true, msg: 'Successful created new Messages List.'})
    });
};

exports.update_messages = async (req, res) => {

    let newMessages = req.body.data;
    let result = {};

    let id = req.params.id;

    if (!await  mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success: false, msg: 'Please send valid Id'});
    }

    let dbData = await Messages.findOne({deviceId: id}).select('data -_id');


    let dbDataKeys = Object.keys(dbData.data[0]); // dbAppsKeys store only keys from apps object, that was get from DB (apps.apps)

    await Object.keys(newMessages).map((x) => { // iterate over newApps(object)'s keys, check if dbAppssKeys includes that typeof keys
        if (!dbDataKeys.includes(x)) {
            dbDataKeys.push(x); // if isn't include, push new keys into dbAppsKeys
        } else {                //then if includes
            newMessages[x].map( (y) => {
                "use strict";
                dbData.data[0][x].push(y);
            });
        }
    });

    let dbDataValues = Object.values(dbData.data[0]); // dbAppsValues store only values, that was get from DB (apps.apps)

    await Object.values(newMessages).map((x) => { // iterate over newApps(object)'s values
        if (!dbDataValues.includes(x)) { // then check, if values, isn't exists in dbAppsValues, push that values in dbAppsValues
            dbDataValues.push(x); //
        }
    });

    // create new object form  dbAppsKeys, and dbAppsValues
    dbDataKeys.forEach((key, i) => {
        result[key] = dbDataValues[i] //store new object in result
    });

    let ok = await Messages.update({deviceId: id}, {data: result}, {new: true})
        .catch(err => res.status(400).send({err: err.errmsg}));

    res.send(ok);

    // Messages.update({deviceId: req.params.id}, {"$addToSet": {"messages.$.messages": messages}}, function (err, data) {
    //     if (err) {
    //         return res.send(400, {msg: "Passed Id is Wrong"})
    //     }
    //     else if (!data) {
    //         return res.send(400,"There Is No Messages");
    //     }
    //     else res.send(200, {success: true, msg: 'Success'});
    // });
};

//get request --> get messages List
exports.get_messages = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Messages.find({}, function (err, messages) {
            if (err) return res.send(500, {msg: "There was a problem finding Messages List."});

            if (!messages) {
                res.send('Messages list not found');
            }

            else res.send(200, messages);
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
};

//get request /deviceId --> get Messages lits by Device Id
exports.get_messages_byID = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Messages.find({deviceId: req.params.id}, function (err, messages) {
            if (err) return res.send(500, {msg: "There was a problem finding Messages List."});

            if (!messages) {
                res.send('Messages List not found');
            }

            else res.send(200, messages);
        })
    }
};
