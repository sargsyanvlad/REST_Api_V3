const Commands = require("../models/commands");
const mongoose = require('mongoose');

// post --> Send commands to device
exports.send_commands = async (req, res) => {
    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success: false, msg: 'Please send valid Id'})
    }

    let newCommands = new Commands({
        ...req.body,
        deviceId: id
    });

    await newCommands.save().catch(err => res.send(400, {err: err.errmsg}));

    res.send(200, {success: true, msg: 'Successful created new Commands List.'})
};

// get request /deviceId --> get commands lits by Device Id
exports.get_commands = async function (req, res) {
    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success: false, msg: 'Please send valid Id'})
    }

    let commands = await Commands.findOne({deviceId: id}).catch(err => err);

    if (!commands || commands.commands.length < 1) {
        res.send(400, {success: false, msg: 'Commands not found'})
    }

    res.send(200, commands.commands);

    await Commands.update({deviceId: id}, {commands: []}, {new: true}).catch(err => err);
};

exports.update_commands = async function (req, res) {

    let newCommands = req.body.commands; //TODO validate commands

    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({success: false, msg: 'Please send valid Id'})
    }

    let dbCommands = await Commands.findOne({deviceId: id}).select('-_id commands');

    if (!dbCommands) {
        res.status(400).send({msg: 'Commands not found'});
    }

    await newCommands.map((x) => {
        if (!dbCommands.commands.includes(x)) {
            dbCommands.commands.push(x);
        }
    });

    let ok = await Commands.update({deviceId: req.params.id}, {commands: dbCommands.commands}, {new: true})
        .catch(err => res.status(400).send({err: err.errmsg}));

    //TODO check updated or not

    res.status(200).send(ok);

};
