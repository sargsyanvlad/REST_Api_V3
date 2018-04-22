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