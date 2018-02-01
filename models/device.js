var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var DeviceSchema = new Schema({
    deviceType: {
        type: String,
        required: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref:  'User',
        required: false
    }]

});

module.exports = mongoose.model('Device', DeviceSchema);