'use strict';

const logger = require('./src/models/logger');
const handerl1 = require('./hander1');

module.exports.registerTracking = async (event, context) => {

  logger.log('App is starting up.');

  handerl1.printMessage();
  console.log(logger.getCount());
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully! Yeah!!!!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
