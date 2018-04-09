const devicesCtrl = require('../controllers/devices_controller');

module.exports = function (app) {
    //Device router for creating new device in DB
    app.route('/devices')
        .post(devicesCtrl.saveDevice);

    //Device router for accessing Devices from DB
    app.route('/auth/devices')
        .get(devicesCtrl.getDevices);

    //Device router for accessing/deleting/updateing Devices by ID
    app.route('/auth/devices/:id')
        .get(devicesCtrl.getDeviceByID)
        .put(devicesCtrl.updateDevice)
        .delete(devicesCtrl.deleteDevice);
};
