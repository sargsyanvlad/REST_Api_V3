let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs');
//users schema
let UserSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
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
    }
});


//call method .pre before saving user for password hashing
UserSchema.pre('save', function (next) {
    let user = this;
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
//************************************************//

module.exports = mongoose.model('User', UserSchema);