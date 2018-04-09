let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let commandsSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now,
        required: true
    },
    commands: [{
        type: String,
        required: true
    }],
    deviceId: {
        type: Schema.Types.ObjectId,
        ref: "Device",
        required: true,
        unique: true
    }
});
module.exports = mongoose.model('commands', commandsSchema);