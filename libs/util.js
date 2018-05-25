const appRoot = require('app-root-path');

const logger = require(`${appRoot}/api/modules/winston/index.js`);
const mongoose = require('mongoose');

let server = null;
let ioServer = null;
let mongo = null;
let closing = false;

//Conections to be closed
const initClearExit = (ServerInstance,  initedMongo) => {
    server = ServerInstance;
    mongo = initedMongo;
};


//Closing all opened connection
const cleanUp = async () => {

    let mongoClosed = mongo ? await mongoose.connection.close().catch(err => err) : null;
    server = server ? null : null;

    return mongoClosed instanceof Error ? mongoClosed : 'mongoeClosed';
};

//Clean up and exit the process
const closeServer = async (server, err = null) => {
    // console.log(err)
    if (!closing) {
        closing = true;
        if (err) {
            //(typeof(err) === 'Object' &&
            logger.error(`[${server}] : ${err.hasOwnProperty('message') ? err.message : err}`);
        }

        logger.info('[Process] : Closing server...');

        let cleanedUp = await cleanUp().catch(err => err);
        // console.log(cleanedUp);
        if (cleanedUp instanceof Error || typeof (cleanedUp) === 'undefined') {
            logger.info(cleanedUp.message);
            logger.info('[Process] : Incorrect shut down...');
            process.exit(1);
        } else {
            // Force close server
            logger.info('[Process] : Forcing server close !!!');
            process.exit(0);
        }
    }
};

//Graceful shutdown
const graceful = async (err = null) => {
    // console.log(err)
    if (!closing) {
        console.log(err);
        closing = true;
        if (err) {
            logger.error(`[Proccess] : ${err.hasOwnProperty('message') ? err.message : err}`);
        }

        logger.info('[Process] : Closing server...');

        let cleanedUp = await cleanUp().catch(err => err);
        // console.log(cleanedUp);
        if (cleanedUp instanceof Error || typeof (cleanedUp) === 'undefined') {
            logger.info(cleanedUp.message);
            logger.info('[Process] : Incorrect shut down...');
            process.exit(1);
        } else {
            // Force close server
            logger.info('[Process] : Forcing server close !!!');
            process.exit(0);
        }

    }
};


module.exports = Object.assign({}, { cleanUp, closeServer, graceful, initClearExit });