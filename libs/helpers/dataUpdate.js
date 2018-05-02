exports.update = async  (dbData, reqData) => {
    let result = {};

    let dbDataKeys = Object.keys(dbData.data); // dbAppsKeys store only keys from apps object, that was get from DB (apps.apps)

    await Object.keys(reqData).map((x) => { // iterate over newApps(object)'s keys, check if dbAppssKeys includes that typeof keys
        if (!dbDataKeys.includes(x)) {
            dbDataKeys.push(x); // if isn't include, push new keys into dbAppsKeys
        } else {                //then if includes
            dbData.data[x] = reqData[x]; // change only values, of that keys.
        }
    });

    let dbDataValues = Object.values(dbData.data); // dbAppsValues store only values, that was get from DB (apps.apps)

    await Object.values(reqData).map((x) => { // iterate over newApps(object)'s values
        if (!dbDataValues.includes(x)) { // then check, if values, isn't exists in dbAppsValues, push that values in dbAppsValues
            dbDataValues.push(x); //
        }
    });

    // create new object form  dbAppsKeys, and dbAppsValues
    dbDataKeys.forEach((key, i) => {
        result[key] = dbDataValues[i] //store new object in result
    });


    return result;
};