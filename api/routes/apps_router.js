module.exports = function (app) {
    const appCtrl = require('../controllers/apps_controller');

    app.route('/apps/:id')
        .post(appCtrl.save_apps)
        .put(appCtrl.update_apps);

    app.route('/auth/apps')
        .get(appCtrl.get_apps);

    app.route('/auth/apps/:id')
        .get(appCtrl.get_apps_byID);
};
