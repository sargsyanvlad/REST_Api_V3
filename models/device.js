var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var DeviceSchema = new Schema({
    deviceType: {
        type: String,
        required: true
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref:  'User',
        required: true
    }]

});

module.exports = mongoose.model('Device', DeviceSchema);