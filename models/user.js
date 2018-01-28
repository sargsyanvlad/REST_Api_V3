var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//users schema
var UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        default: 'user',
        type: String, //we can consider using array of strings as in case user has several roles at the same time
        requierd: true
    },

    start: [
        {
            type: Schema.Types.ObjectId,
            ref: "Device"
        }
    ],

    stop: [
        {
            type: Schema.Types.ObjectId,
            ref: "Device"
        }
    ],

    restart: [
        {
            type: Schema.Types.ObjectId,
            ref: "Device"
        }
    ],
    permissions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Permissions",
            required: false
        }
    ],
    devices: [
        {
            type: Schema.Types.ObjectId,
            ref: "Device",
            required: false
        }
    ]

});


//call method .pre before saving user for password hashing
UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

//call method .comparepassword for matching user's password
UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);