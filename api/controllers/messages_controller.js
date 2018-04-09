const Messages = require("../models/messages");


// post --> save messages list
exports.save_messages = function (req, res) {

    let newMessages = new Messages({
        ...req.body,
    });

    newMessages.save(function (err) {
        if (err) {
            console.log(err);
            return res.send(400, {success: false, msg: 'Save Messages List failed.'})
        }
        res.send(201, {success: true, msg: 'Successful created new Messages List.'})
    });
};

// exports.update_messages = function (req, res) {
//
//     let messages = req.body.messages;
//
//     Messages.update({deviceId: req.params.id}, {"$addToSet": {"messages.$.messages": messages}}, function (err, data) {
//         if (err) {
//             return res.send(400, {msg: "Passed Id is Wrong"})
//         }
//         else if (!data) {
//             return res.send(400,"There Is No Messages");
//         }
//         else res.send(200, {success: true, msg: 'Success'});
//     });
// };

//get request --> get messages List
exports.get_messages = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Messages.find({}, function (err, messages) {
            if (err) return res.send(500, {msg: "There was a problem finding Messages List."});

            if (!messages) {
                res.send('Messages list not found');
            }

            else res.send(200, messages);
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
};

//get request /deviceId --> get Messages lits by Device Id
exports.get_messages_byID = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Messages.find({deviceId: req.params.id}, function (err, messages) {
            if (err) return res.send(500, {msg: "There was a problem finding Messages List."});

            if (!messages) {
                res.send('Messages List not found');
            }

            else res.send(200, messages);
        })
    }
};
