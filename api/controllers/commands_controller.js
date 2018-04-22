const Commands = require("../models/commands");


// post --> Send commands to device
exports.send_commands = async function (req, res) {

    let newCommands = new Commands({
        ...req.body,
        deviceId: req.params.id
    });

    await newCommands.save().catch( err => res.send(400,{ err:err.errmsg } ));

    res.send(200, {success: true, msg: 'Successful created new Commands List.'})
};

// get request /deviceId --> get commands lits by Device Id
exports.get_commands = async function (req, res) {

    let commands = await Commands.findOne({deviceId: req.params.id}).catch(err => err);

    if (!commands || commands.commands.length < 1) {
        res.send(400, {success: false, msg: 'Commands not found'})
    }

    res.send(200, commands.commands);

    await Commands.update({deviceId: req.params.id}, {commands: []}, {new: true}).catch(err => err);
};

exports.update_commands = async function (req, res) {

    let newCommands = req.body.commands;

    let dbCommands = await Commands.findOne({deviceId: req.params.id}).select('-_id commands');

    if (!dbCommands) {
        res.status(400).send({msg:'Commands not found'});
    }

    await newCommands.map((x) => {
        if (!dbCommands.commands.includes(x)) {
            dbCommands.commands.push(x);
        }
    });

    let data = await Commands.update({deviceId: req.params.id}, {commands: dbCommands.commands}, {new: true}).catch(err => err);
    res.send(200, data);
};
