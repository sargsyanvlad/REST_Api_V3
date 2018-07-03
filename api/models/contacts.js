let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Device = require('./devices');
let contactSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    data: {
        type: Object,
        required: true
    },
    deviceId: {
            type: Schema.Types.ObjectId,
            ref: "Device",
            unique: false,
            required: true
        }
});
module.exports = mongoose.model('contacts', contactSchema);