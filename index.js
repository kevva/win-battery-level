'use strict';
var execFile = require('child_process').execFile;
var toDecimal = require('to-decimal');

module.exports = function (cb) {
	if (process.platform !== 'win32') {
		throw new TypeError('Only Windows systems are supported');
	}

	var cmd = 'WMIC';
	var args = ['Win32_Battery', 'Get', 'EstimatedChargeRemaining'];

	execFile(cmd, args, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		if (!stdout) {
			cb(new Error('No battery could be found'));
		}

		cb(null, toDecimal(stdout.trim().split('\n')[1]));
	});
};
