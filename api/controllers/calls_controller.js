const Calls = require("../models/calls");


// post --> save Calls
exports.save_calls = function (req, res) {

    let newCalls = new Calls({
        ...req.body,
    });

    newCalls.save(function (err) {
        if (err) {
            console.log(err);
            return res.send(400, {success: false, msg: 'Save Calls failed.'})
        }
        res.send(201, {success: true, msg: 'Successful created new Calls.'})
    });
};

//get request --> get Calls
exports.get_calls = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Calls.find({}, function (err, calls) {
            if (err) return res.send(500, {msg: "There was a problem finding Calls."});

            if (!calls) {
                res.send('Calls not found');
            }

            else res.send(200, calls);
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
};

//get request /deviceId --> get Calls by Device Id
exports.get_calls_byID = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Calls.findOne({deviceId: req.params.id}, function (err, calls) {
            if (err) {
                return res.send(500, {msg: "There was a problem finding Calls."});
            }

            if (!calls) {
                res.send('Calls not found');
            }

            else res.send(200, calls);
        })
    }
};
