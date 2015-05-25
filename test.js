'use strict';
var test = require('ava');
var winBatteryLevel = require('./');

test(function (t) {
	t.plan(2);

	winBatteryLevel(function (err, level) {
		t.assert(!err, err);
		t.assert(level, level);
	});
});
