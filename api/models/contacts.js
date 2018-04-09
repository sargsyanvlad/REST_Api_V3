let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Device = require('./devices');
let contactSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    contacts: {
        type: JSON,
        required: true
    },
    deviceId: {
            type: Schema.Types.ObjectId,
            ref: "Device",
            unique: true,
            required: true
        }
});
module.exports = mongoose.model('contacts', contactSchema);