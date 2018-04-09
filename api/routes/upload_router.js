module.exports = function (app) {
    const filesCtrl = require('../controllers/upload_controller');
    const multer = require('multer');

    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './files')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '_' + file.originalname);
        }
    });

    let upload = multer({
        storage: storage
    });

    app.route('/files/:id')
        .post( upload.any(), filesCtrl.save_files);

    app.route('/auth/files') // get all files stored in db
        .get(filesCtrl.get_files);

    app.route('/auth/files/:id') // download specific file by fileID stored in db
        .get(filesCtrl.get_file_byId);

    app.route('/auth/files/device/:id') // get device files by deviceID stored in db
        .get(filesCtrl.get_device_files);
};
