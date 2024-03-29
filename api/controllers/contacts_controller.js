const Contacts = require("../models/contacts");
const mongoose = require('mongoose');

// post --> save Contacts
exports.save_contacts = async (req, res) => {

    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(258).send({success: false, msg: 'Please send valid Id'})
    }

    let newContacts = new Contacts({
        ...req.body,
        deviceId: id
    });

    newContacts.save(function (err) {
        if (err) {
            console.log(err);
            return res.status(258).send({
                success: false,
                msg: `Error Name:${err.name} 'Save Contacts failed.' Error: ${err.message}`
            })
        }
        res.status(201).send({success: true, msg: 'Successful created new Contacts.'})
    });
};

//get request --> get Contacts
exports.get_contacts = async (req, res) => {
    let user = res.locals.users;
    if (user.role === 'admin') {
        Contacts.find({}, function (err, contacts) {
            if (err) return res.status(500).send({msg: "There was a problem finding Contacts."});

            if (!contacts) {
                res.status(258).send('Contacts not found');
            }

            else res.status(200).send(contacts);
        });
    } else {
        res.status(401).send({success: false, msg: 'You are not Admin'})
    }
};

//get request /deviceId --> get Contacts by Device Id
exports.get_contacts_byID = async (req, res) => {
    let user = res.locals.users;
    let id = req.params.id;

    if (!await mongoose.Types.ObjectId.isValid(id)) {
        return res.status(258).send({success: false, msg: 'Please send valid Id'})
    }

    if (user.role === 'admin') {
        let contacts = await Contacts.find({deviceId: id}).select('data')
            .catch(err => {
                return res.status(258).send({msg: err.errmsg})
            });

        if (!contacts) {
            res.status(258).send('Contacts not found');
        }

        else res.status(200).send(contacts);
    }
};
