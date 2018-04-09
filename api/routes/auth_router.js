module.exports = function (app) {
    const auth = require('../controllers/auth_controller');

    // todoList Routes
    app.route('/auth')
        .use(auth.authenticate)
};
