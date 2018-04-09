module.exports = function (app) {
    const appCtrl = require('../controllers/apps_controller');
    app.route('/applist')
        .post(appCtrl.save_apps);
    //TODO update AppsList
    app.route('/auth/applist')
        .get(appCtrl.get_messages);

    app.route('/auth/applist/:id')
        .get(appCtrl.get_messages_byID);
};
