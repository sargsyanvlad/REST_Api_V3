let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let smsSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    data: {
        type: Array,
        required: true
    },
    deviceId:
        {
            type: Schema.Types.ObjectId,
            ref: "Device",
            required: true,
        }
});
module.exports = mongoose.model('messages', smsSchema);
