module.exports = function (app) {
    const msgCtrl = require('../controllers/messages_controller');
    app.route('/messages')
        .post(msgCtrl.save_messages);

    app.route('/auth/messages')
        .get(msgCtrl.get_messages);

    app.route('/auth/messages/:id')
        .get(msgCtrl.get_messages_byID);
};
