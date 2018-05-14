const file = require('../models/files');

exports.save_files = async function (req, res) {
    /*req.files has the information regarding the file you are uploading...
    from the total information, i am just using the path and the fileName to store in the mongo collection(table)
    */
    let path = req.files[0].path;
    let fileName = req.files[0].originalname;
    let filepath = {};
    filepath['path'] = path;
    filepath['originalname'] = fileName;
    filepath['deviceId'] = req.params.id;

    //filepath contains three objects, path , the fileName and deviceID
    //we are passing two objects in the addFile method.. which is defined above..
    await addFile(filepath, (err) => {
        if (err) return err;

    });
    res.status(200).send({success: true, msg: "File uploaded successfully"});
};

exports.get_files = async function (req, res) {
    await getFiles((err, genres) => {
        if (err) res.status(400).send({msg: 'Files Not found'});
        else {
            res.status(200).send(genres);
        }
    })
};

exports.get_device_files = async function (req, res) {
    let deviceId = req.params.id;
    await getDeviceFiles(deviceId, (err, genres) => {
        if (err || !genres) {
            res.status(400).send({msg: 'Files Not found'})
        } else {
            res.status(200).send(genres);
        }
    })
};

exports.get_file_byId = async function (req, res) {
    let deviceId = req.params.id;
    await getFileById(deviceId, (err, genres) => {
        if (err || !genres) {
            res.status(400).send({msg: 'Files Not found'})
        } else {
            res.download(genres.path);
        }
    })
};

let addFile = async (files, callback) => {
    file.create(files, callback);
};

let getFiles = async (callback, limit) => {
    file.find(callback).limit(limit);
};

let getDeviceFiles = async (id, callback) => {

    file.find({deviceId: id}, callback);

};

let getFileById = async function (id, callback) {

    file.findById(id, callback);

};