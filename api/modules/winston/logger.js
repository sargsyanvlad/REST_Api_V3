'use strict';

const appRoot = require('app-root-path');

const winston = require('winston');
const moment = require('moment');

const config = require(`${appRoot}/app/modules/winston/loggerConfig.json`);

// winston.transports.DailyRotateFile = require('winston-daily-rotate-file');

/* Custom function for pretty log format*/
const customFileFormatter = (options) => {
	// Return string will be passed to logger.
	return options.timestamp() + options.level.toUpperCase() + ' : ' + (undefined !== options.message ? options.message : ' ') +
		(options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
};

const customConsoleFormatter = (options) => {
	
	return options.timestamp() + ' ' +
		winston.config.colorize(options.level, options.level.toUpperCase()) + ': ' +
		(undefined !== options.message ? options.message : '') +
		(options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
};

const customTimestamp = () => {
	return moment().format('MMM-DD-YYYY, HH:mm:ss') + ' ';
};

// @TODO add logging to db, or elasticSearch, kibana, logstash

const logger = new (winston.Logger)({
	levels: {
		info: 2,
		error: 1,
		warn: 3
	},
	colors: {
		info: 'green',
		error: 'red',
		warn: 'yellow'
	},
	transports: [
		// Console transport for logging with colorizing and formatting
		new winston.transports.Console({
			level: 'info',
			colorize: true,
			timestamp: customTimestamp,
			formatter: customConsoleFormatter
		}),

		// info  logging
		new winston.transports.File({
			name: config.info.name,
			level: config.info.level,
			handleExceptions: false,
			filename: config.info.filename,
			maxsize: 10000000,
			maxFiles: 10,
			timestamp: customTimestamp,
			formatter: customFileFormatter,
			json: false,
			//exitOnError: false
		}),

		// error  logging
		new winston.transports.File({
			name: config.error.name,
			filename: config.error.filename,
			level: config.error.level,
			maxsize: 10000000,
			maxFiles: 10,
			timestamp: customTimestamp,
			formatter: customFileFormatter,
			handleExceptions: true,
			exitOnError: false,
			humanReadableUnhandledException: true,
			json: false
		})
	],
});

module.exports = logger;
