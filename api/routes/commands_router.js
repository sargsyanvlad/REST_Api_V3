module.exports = function (app) {
    const commandsCtrl = require('../controllers/commands_controller');

    app.route('/commands/:id')
        .get(commandsCtrl.get_commands);

    app.route('/auth/commands/:id')
        .post(commandsCtrl.send_commands)
        .put(commandsCtrl.update_commands); //its possible to add put endpoint for updating commands

};
