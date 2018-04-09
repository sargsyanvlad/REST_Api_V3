const apps = require("../models/apps");


// post --> save App list
exports.save_apps = function (req, res) {

    let newApps = new apps({
        ...req.body,
    });

    newApps.save(function (err) {
        if (err) {
            console.log(err);
            return res.send(400, {success: false, msg: 'Save Apps List failed.'})
        }
        res.send(201, {success: true, msg: 'Successful created new Apps List.'})
    });
};

//get request --> get apps List
exports.get_messages = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        apps.find({}, function (err, appList) {
            if (err) return res.send(500, {msg: "There was a problem finding App List."});

            if (!appList) {
                res.send('App list not found');
            }

            else res.send(200, appList);
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
};

//get request /deviceId --> get app lits by Device Id
exports.get_messages_byID = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        apps.findOne({deviceId: req.params.id}, function (err, appList) {
            if (err) return res.send(500, {msg: "There was a problem finding App List."});

            if (!appList) {
                res.send('App List not found');
            }

            else res.send(200, appList);
        })
    }
};
