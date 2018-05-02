module.exports = function (app) {
    const msgCtrl = require('../controllers/messages_controller');
    app.route('/messages/:id')
        .post(msgCtrl.save_messages)
        .put(msgCtrl.update_messages);

    app.route('/auth/messages')
        .get(msgCtrl.get_messages);

    app.route('/auth/messages/:id')
        .get(msgCtrl.get_messages_byID);
};
