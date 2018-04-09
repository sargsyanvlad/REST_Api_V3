let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let callSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    calls :{
        type: JSON,
        required: true
    },
    deviceId:
        {
            unique: true,
            type: Schema.Types.ObjectId,
            ref: "Device",
            required: true
        }
});
module.exports = mongoose.model('calls', callSchema);