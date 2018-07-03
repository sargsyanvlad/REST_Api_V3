const Commands = require("../models/commands");
const mongoose = require('mongoose');

// post --> Send commands to device
exports.send_commands = async (req, res) => {
    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(258).send({success: false, msg: 'Please send valid Id'})
    }

    let newCommands = new Commands({
        ...req.body,
        deviceId: id
    });

    await newCommands.save().catch(err => res.status(258).send({err: err.errmsg}));

    res.status(200).send({success: true, msg: 'Successful created new Commands List.'})
};

// get request /deviceId --> get commands lits by Device Id
exports.get_commands = async function (req, res) {
    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(258).send({success: false, msg: 'Please send valid Id'})
    }

    let commands = await Commands.findOne({deviceId: id}).catch(err => err);

    if (!commands || commands.commands.length < 1) {
        res.status(258).send({success: false, msg: 'Commands not found'})
    }

    res.status(200).send(commands.commands);

    await Commands.update({deviceId: id}, {commands: []}, {new: true}).catch(err => err);
};

exports.update_commands = async function (req, res) {

    let newCommands = req.body.commands;

    if (!Array.isArray(newCommands)) {
        return res.status(258).send({success: false, msg: 'Please send valid Commands, Commands Should be in array'});
    }

    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(258).send({success: false, msg: 'Please send valid Id'})
    }

    let dbCommands = await Commands.findOne({deviceId: id}).select('-_id commands');

    if (!dbCommands) {
        res.status(258).send({msg: 'Commands not found'});
    }

    await newCommands.map((x) => {
        if (!dbCommands.commands.includes(x)) {
            dbCommands.commands.push(x);
        }
    });

    let ok = await Commands.update({deviceId: req.params.id}, {commands: dbCommands.commands}, {new: true})
        .catch(err => res.status(258).send({err: err.errmsg}));

    if (ok instanceof Error) {
        return res.status(258).send({ success: false, msg: 'Error Updateing commands' });
    } else if (!ok) {
        return res.send(400).send({ success: false, msg: 'Commands not updated' })
    } else {
        res.status(200).send(ok);
    }

};
