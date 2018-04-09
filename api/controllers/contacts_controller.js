const Contacts = require("../models/contacts");


// post --> save Contacts
exports.save_contacts = async (req, res) => {

    let newContacts = new Contacts({
        ...req.body,
    });

    newContacts.save(function (err) {
        if (err) {
            console.log(err);
            return res.send(400, {success: false, msg: 'Save Contacts failed.'})
        }
        res.send(201, {success: true, msg: 'Successful created new Contacts.'})
    });
};

//get request --> get Contacts
exports.get_contacts = async (req, res) =>{
    let user = res.locals.users;
    if (user.role === 'admin') {
        Contacts.find({}, function (err, contacts) {
            if (err) return res.send(500, {msg: "There was a problem finding Contacts."});

            if (!contacts) {
                res.send('Contacts not found');
            }

            else res.send(200, contacts);
        });
    } else {
        res.send(401, {success: false, msg: 'You are not Admin'})
    }
};

//get request /deviceId --> get Contacts by Device Id
exports.get_contacts_byID = async  (req, res) => {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Contacts.findOne({deviceId: req.params.id}, function (err, contacts) {
            if (err) {
                return res.send(500, {msg: "There was a problem finding Contacts."});
            }
            if (!contacts) {
                res.send('Contacts not found');
            }
            else res.send(200, contacts.contactList);
        })
    }
};
