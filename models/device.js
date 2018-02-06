let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DeviceSchema = new Schema({
    deviceType: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Device', DeviceSchema);