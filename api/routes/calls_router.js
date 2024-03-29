module.exports = function (app) {
    const callCtrl = require('../controllers/calls_controller');
    app.route('/calls/:id')
        .post(callCtrl.save_calls)
        .put(callCtrl.update_calls);

    app.route('/auth/calls')
        .get(callCtrl.get_calls);

    app.route('/auth/calls/:id')
        .get(callCtrl.get_calls_byID);
};
