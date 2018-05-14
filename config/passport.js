let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
let config =  require('config');
// load up the user model
let User = require('../api/models/users');
// let config = require('../config/database'); // get db config file

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.get('jwt.secret');
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};