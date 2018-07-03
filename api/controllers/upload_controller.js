const file = require('../models/files');
const appRoot =  require('app-root-path');
const logger = require(`${appRoot}/api/modules/winston/index.js`);
const mongoose  = require('mongoose');
exports.save_files = async function (req, res) {
    /**
     * req.files has the information regarding the file you are uploading...
    from the total information, i am just using the path and the fileName to store in the mongo collection(table)
    */
    let deviceId = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(deviceId)) {
        logger.error(`Wrong Request Parameters`);
        return res.status(259).send({success:false,msg:'Please send valid Id'})
    }
    let path = req.files[0].path;
    let fileName = req.files[0].originalname;
    let filepath = {};
    filepath['path'] = path;
    filepath['originalname'] = fileName;
    filepath['deviceId'] = deviceId;

    await addFile(filepath, (err) => {
      if (err){
           logger.error(err);
           return res.status(259).send({success:false,msg:`Error Uploading File`})
        }
        else {
          logger.info(`File Upload Success:${filepath.path}`);
          return res.status(200).send({success:true,msg:`File Uploaded Successfully`})
      }
    });

};

exports.get_files = async function (req, res) {
    await getFiles((err, genres) => {
        if (err) res.status(259).send({msg: 'Files Not found'});
        else {
            return res.status(200).send(genres);
        }
    })
};

exports.get_device_files = async function (req, res) {
    let deviceId = req.params.id;
    await getDeviceFiles(deviceId, (err, genres) => {
        if (err || !genres) {
            res.status(259).send({msg: 'Files Not found'})
        } else {
            res.status(200).send(genres);
        }
    })
};

exports.get_file_byId = async function (req, res) {
    let deviceId = req.params.id;
    await getFileById(deviceId, (err, genres) => {
        if (err || !genres) {
            res.status(259).send({msg: 'Files Not found'})
        } else {
            res.download(genres.path);
        }
    })
};

let addFile = async (files, callback) => {
    file.create(files, callback);
    logger.info('UPLOADING FILE >>>>....')
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