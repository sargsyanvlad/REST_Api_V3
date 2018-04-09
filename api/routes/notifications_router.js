module.exports = function (app) {
    const notificationsCtrl = require('../../controllers/apps_controller');
    app.route('/notifications')
        .post(notificationsCtrl.save_apps);

    app.route('/auth/notifications')
        .get(notificationsCtrl.get_messages);

    app.route('/auth/notifications/:id')
        .get(notificationsCtrl.get_messages_byID);
};
