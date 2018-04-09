module.exports = function (app) {
    const contactsCtrl = require('../controllers/contacts_controller');
    app.route('/contacts')
        .post(contactsCtrl.save_contacts);

    app.route('/auth/contacts')
        .get(contactsCtrl.get_contacts);

    app.route('/auth/contacts/:id')
        .get(contactsCtrl.get_contacts_byID);
};
