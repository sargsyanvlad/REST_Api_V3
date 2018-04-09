module.exports = function (app) {
    const notificationsCtrl = require('../controllers/notifications_controller');
    app.route('/notifications')
        .post(notificationsCtrl.save_notifications);

    app.route('/auth/notifications')
        .get(notificationsCtrl.get_notifications);

    app.route('/auth/notifications/:id')
        .get(notificationsCtrl.get_notifications_byID);
};
