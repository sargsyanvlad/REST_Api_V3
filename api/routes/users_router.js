module.exports = function (app) {
    const userCtrl = require('../controllers/users_controller');

    // User Routes to signUp
    app.route('/signup')
        .post(userCtrl.signup);

    // User Routes to signIn
    app.route('/signin')
        .post(userCtrl.signin);

    // User Routes to get all users
    app.route('/auth/users')
        .get(userCtrl.getUsers);

    // User Routes to get/update user by Id
    app.route('/auth/users/:id')
        .get(userCtrl.getUserById)
        .put(userCtrl.updateUser)
        .delete(userCtrl.deleteUser);
};
