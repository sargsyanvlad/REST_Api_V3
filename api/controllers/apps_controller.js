const Apps = require('../models/apps');
const helper = require('../../libs/helpers/dataUpdate');
let mongoose = require('mongoose');

// post --> save App list
exports.save_apps = async function (req, res) {
    // creating new instance of APPS
    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success:false,msg:'Please send valid Id'})
    }

    let newApps = new Apps({
        ...req.body,
        deviceId: id
    });
    // saving incoming apps into db
    await newApps.save().catch(err => res.status(400).send({success: false, msg: err.errmsg}));

    res.status(200).send({success: true, msg: 'Successful created new Apps List.'});

};

exports.update_apps = async (req, res) => {
    let newApps = req.body.data;

    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success:false,msg:'Please send valid Id'})
    }

    let apps = await Apps.findOne({deviceId: id})
        .select('data -_id')
        .catch(err => res.status(400).send({msg: err.errmsg}));

    if (!apps) {
         res.status(400).send('Cant Find App List');
    }

    let result = await helper.update(apps, newApps).catch(err => err);

    console.log(result);

    let ok = await Apps.update({deviceId: id}, {data: result}, {new: true}).catch(err => err);

    res.status(200).send({status: ok});

};

//get request --> get apps List
exports.get_apps = async function (req, res) {
    let user = res.locals.users;

    if (user.role === 'admin') { //TODO : we should change logic, should find logged user from db, and check if user is admin or not
        console.log(user.role);
        let appList = await Apps.find({})
            .select('appList deviceId')
            .catch(err => res.status(400).send({msg: err.errmsg}));

        if (!appList) {
            res.status(400).send('App list not found');
        }

        else res.status(200).send(appList);
    }

    else {
        res.status(401).send({msg: 'You are not Admin'});
    }

};

//get request /deviceId --> get app lits by Device Id
exports.get_apps_byID = async (req, res) => {
    let user = res.locals.users;
    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success:false,msg:'Please send valid Id'})
    }

    if (user.role === 'admin') {

        let appList = await Apps.findOne({deviceId: id}).catch(err => res.send(400, {msg: err.errmsg}));

        if (!appList) {
            res.status(400).send({msg: 'App list not found'});
        }

        else res.status(200).send(appList);
    }

    else {
        res.status(401).send({msg: 'You are not Admin'});
    }
};
