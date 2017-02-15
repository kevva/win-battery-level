'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	if (process.platform !== 'win32') {
		throw new TypeError('Only Windows systems are supported');
	}

	var cmd = 'WMIC';
	var args = ['Path', 'Win32_Battery', 'Get', 'BatteryStatus,EstimatedChargeRemaining'];

	execFile(cmd, args, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		if (!stdout) {
			cb(new Error('No battery could be found'));
		}

		stdout = stdout.trim().split('\n')[1].split(/[\s]+/);
		cb(null, (stdout[1] > 100 ? 100 : stdout[1]/100), stdout[0]-1 ? true : false); // isCharging
	});
};
