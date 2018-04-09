module.exports = function (app) {
    const appCtrl = require('../../controllers/apps_controller');
    app.route('/applist')
        .post(appCtrl.save_app_list);

    app.route('/auth/applist')
        .get(appCtrl.get_app_list);

    app.route('/auth/applist/:id')
        .get(appCtrl.get_app_list_byID);
};
