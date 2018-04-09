module.exports = function (app) {
    const appCtrl = require('../../controllers/apps_controller');
    app.route('/applist')
        .post(appCtrl.save_apps);

    app.route('/auth/applist')
        .get(appCtrl.get_apps);

    app.route('/auth/applist/:id')
        .get(appCtrl.get_apps_byID);
};
