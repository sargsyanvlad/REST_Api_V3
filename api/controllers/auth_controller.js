const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/users');

//authenticator path
exports.authenticate = async (req, res, next) => {
    let token = await getToken(req.headers);
    if (!token) {
        res.status(204).json({success: false, msg: "unautorized"});
        next();
    }

    let decoded = jwt.decode(token, config.secret);
    User.findOne({username: decoded.username},
        function (err, user) {
            if (err) {
                res.send(202, {success: false, msg: "Some Debil Error"});
            }
            if (user) {
                res.locals.users = user;
                next();
            } else {
                return res.send(501,
                    {
                        msg: 'User Not found'
                    });
            }
        });
};

//getToken function for getting token from req authorization headers
async function getToken(headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
