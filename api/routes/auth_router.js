module.exports = function (app) {
    const auth = require('../controllers/auth_controller');
    const passport = require('passport');
    require('../../config/passport')(passport);

    // Authenticator route
    app.use('/auth',passport.authenticate('jwt', {session: false}), auth.authenticate)

};
