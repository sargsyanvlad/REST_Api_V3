let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DeviceSchema = new Schema({
    deviceType: {//name of device
        type: String,
        required: true
    },
    version: {
        type: String
    },
    _id: {
        type: Schema.Types.ObjectId
    },
    location: {
        type: String
    },
    Imei: {
        type: String
    },
    phoneNumber: {
        type: String
    }
});

module.exports = mongoose.model('Devices', DeviceSchema);