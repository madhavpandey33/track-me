const logger = require('./src/models/logger');

class Handler1{
    constructor() {}

    printMessage() {
        logger.log("hi from print message");
    }
}

module.exports = new Handler1();