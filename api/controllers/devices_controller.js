const Device = require('../models/devices');

//post request / --> save new Device
exports.saveDevice = async function (req, res) {
    let newDevice = new Device({
        ...req.body,
    });

    newDevice.save(function (err) {
        if (err) {
            console.log(err);
            return res.status(400).send({success: false, msg: 'Save Device failed. Device ID Already exists'});
        }
        res.status(201).send({success: true, msg: 'Successful created new Device.'});
    });
};

//get request  --> get array of devices
exports.getDevices = async function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Device.find({}, function (err, devices) {
            if (err) throw err;
            else if (!devices) {
                res.status(400).send({msg: "No Devices found"})
            }
            else res.status(200).send(devices);
        });
    }
    else res.status(403).send({success: false, msg: "You are not admin"});
};
//get request /:id --> get Device by id
exports.getDeviceByID = async function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Device.findOne({_id: req.params.id},//find device in DB update devicetYpe, and addnig new user id
            function (err, device) {
                if (err) throw err;
                if (device) {
                    res.status(200).send(device);
                } else {
                    return res.status(401).send({message: 'Device Not found'});
                }
            })
    } else res.status(403).send({success: false, msg: "You are not admin"})
};
//put request /:id --> update Device by id
exports.updateDevice = async function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Device.findOne({_id: req.params.deviceId},//find device in DB update devicetYpe, and addnig new user id
            function (err, device) {
                if (device) {
                    Device.findByIdAndUpdate(req.params.id, {
                        deviceType: req.body.deviceType
                    }, {new: true}, function (err) {
                        if (err) res.status(500).send(err);
                        else res.status(200).send({success: true, msg: 'Success'});
                    });
                } else {
                    return res.status(401).send({message: 'Device Not found'});
                }
            })
    } else res.status(403).send({success: false, msg: "You are not admin"})
};

//delete request /:id --> delete device by id
exports.deleteDevice = async function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Device.findByIdAndRemove(req.params.deviceId, function (err, devic) {
            if (err) throw err;
            if (!device) {
                res.status(400).send({message: "Device not found"})
            }
            else res.status(200).send({success: true, msg: 'Success'});
        });
    } else {
        res.status(401).send({success: false, msg: 'You are not Admin'})
    }
};