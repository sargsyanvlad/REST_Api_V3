const Apps = require("../models/apps");


// post --> save App list
exports.save_apps = async function (req, res) {
    // creating new instance of APPS
    let newApps = new Apps({
        ...req.body,
    });
    // saving incoming apps into db
    await newApps.save().catch(err => res.send(400, {success: false, msg: err.errmsg}));

    res.send(201, {success: true, msg: 'Successful created new Apps List.'})

};

exports.update_apps = async function (req, res) {
    let newApps = req.body.apps; //
    let result = {};
    let updatedApps = {};

    let apps = await Apps.findOne({deviceId: req.params.id})
        .select('apps -_id')
        .catch(err => res.status(400).send({msg: err.errmsg}));

    if (!apps) {
        res.status(400).send('Cant Find App List');
    }

    let dbAppsKeys = Object.keys(apps.apps); // dbAppsKeys store only keys from apps object, that was get from DB (apps.apps)

    Object.keys(newApps).map((x) => { // iterate over newApps(object)'s keys, check if dbAppssKeys includes that typeof keys
        if (!dbAppsKeys.includes(x)) {
            dbAppsKeys.push(x); // if isn't include, push new keys into dbAppsKeys
        } else {                //then if includes
            apps.apps[x] = newApps[x]; // change only values, of that keys.
        }
    });

    let dbAppsValues = Object.values(apps.apps); // dbAppsValues store only values, that was get from DB (apps.apps)

    Object.values(newApps).map((x) => { // iterate over newApps(object)'s values
        if (!dbAppsValues.includes(x)) { // then check, if values, isn't exists in dbAppsValues, push that values in dbAppsValues
            dbAppsValues.push(x); //
        }
    });

    // create new object form  dbAppsKeys, and dbAppsValues
    dbAppsKeys.forEach((key, i) => {
        result[key] = dbAppsValues[i] //store new object in result
    });

    // update all document
    let data = await Apps.update({deviceId: req.params.id}, {apps: result}, {new: true}).catch(err => err);
    res.status(200).send({updated: updatedApps, data: data});

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
exports.get_apps_byID = async function (req, res) {
    let user = res.locals.users;

    if (user.role === 'admin') {

        let appList = await Apps.findOne({deviceId: req.params.id}).catch(err => res.send(400, {msg: err.errmsg}));

        if (!appList) {
            res.status(400).send({msg: 'App list not found'});
        }

        else res.status(200).send(appList);
    }

    else {
        res.status(401).send({msg: 'You are not Admin'});
    }
};
