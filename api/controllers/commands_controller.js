const Commands = require("../models/commands");


// post --> Send commands to device
exports.send_commands = function (req, res) {

    let newCommands = new Commands({
        ...req.body,
        deviceId: req.params.id
    });

    newCommands.save(function (err) {
        if (err) {
            console.log(err);
            return res.send(400, {success: false, msg: 'Save Commands failed.'})
        }
        res.send(201, {success: true, msg: 'Successful created new Commands List.'})
    });
};

//get request /deviceId --> get commands lits by Device Id
exports.get_commands = function (req, res) {

    Commands.findOne({deviceId: req.params.id}, function (err, commands) {
        if (err) return res.send(500, {msg: "There was a problem finding commands List."});

        if (!commands || commands.commands.length === 0) {
            res.send('Commands List not found');
        }
        // let data = {commands:{}};
        res.send(200, commands.commands);

        Commands.update({deviceId: req.params.id}, {commands: []}, {new: true}, function (err, data) {
            if (err) throw err;
        })

    })
};
exports.update_commands = function (req, res) {

    let newCommands = req.body.commands;

    Commands.findOneAndUpdate({deviceId: req.params.id}, {$addToSet: {commands: newCommands}}, function (err, data) {
        if (err) throw err;
        else res.send(200, {msg: 'Success'});
    })
};


