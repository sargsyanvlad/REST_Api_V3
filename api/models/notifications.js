let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let notificationsSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    notifications: {
        type: JSON,
        required: true
    },
    deviceId:
        {
            type: Schema.Types.ObjectId,
            ref: "Device",
            required: true,
        }
});
module.exports = mongoose.model('notifications', notificationsSchema);
