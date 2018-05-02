let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let appSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    data: {
        type: Object,
        appStatus: String,
        required: true
    },
    deviceId:
        {
            type: Schema.Types.ObjectId,
            ref: "Device",
            required: true,
            unique: true
        }
});
module.exports = mongoose.model('appList', appSchema);