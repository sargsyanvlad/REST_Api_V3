var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var permissionsSchema = new Schema({
    device: {
        type: Schema.Types.ObjectId,
        ref: "Device"
    },
    allowedActions:
        [{
            type: Array,
            required:true
    }]
});

module.exports = mongoose.model('Permissions', permissionsSchema);