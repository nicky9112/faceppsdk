#!/usr/bin/env node

exports.api_key = '<YOUR_API_KEY_HERE>';
exports.api_secret = '<YOUR_API_SECRET_HERE>';
exports.baseUrl = 'http://apicn.faceplusplus.com/v2';
exports.detection = require('./lib/detection');
exports.train = require('./lib/train');
exports.recognition = require('./lib/recognition');
exports.grouping = require('./lib/grouping');
exports.person = require('./lib/person');
exports.faceset = require('./lib/faceset');
exports.group = require('./lib/group');
exports.info = require('./lib/info');