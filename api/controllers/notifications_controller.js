const Notifications = require("../models/notifications");


//receive post request for adding Device
exports.save_notifications =  function (req, res) {

    let newNotifications = new Notifications({
        ...req.body,
    });

    newNotifications.save(function (err) {
        if (err) {
            console.log(err);
            return res.json({success: false, msg: 'Save  NotificationsList failed.'})
        }
        res.json(201, {success: true, msg: 'Successful created new new NotificationsList.'})
    });
};

exports.get_notifications = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Notifications.find({}, function (err, notifications) {
            if (err) return res.send(500, {msg: "There was a problem finding notifications List."});

            if (!notifications) {
                res.send('notifications list not found');
            }

            else res.send(200, notifications);
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
};

exports.get_notifications_byID = function (req, res) {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Notifications.find({deviceId: req.params.id}, function (err, notifications) {
            if (err) return res.send(500, {msg: "There was a problem finding notifications List."});

            if (!notifications) {
                res.send('notifications List not found');
            }

            else res.send(200, notifications);
        })
    }
};
