let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//path and originalname are the fields stored in mongoDB

let fileSchema = mongoose.Schema({
    fileType:{
        type: String
    },
    uploaded: {
        type: Date,
        default: Date.now
    },
    path: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true
    },
    deviceId: {
        type: Schema.Types.ObjectId,
        ref:  'Device',
        required:true,
        unique: false,
    }
});

module.exports = mongoose.model('files', fileSchema);