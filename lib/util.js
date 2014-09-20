var request = require('request'),
    _ = require('underscore'),
    facePP = require('..');

/**
 * use get method send request
 *
 * @param {string} url
 * @param {object} params
 * @param {function} callback
 * @api private
 */
exports.sendRequest = function (url, params, callback) {
    var qsParams = {
        api_key: facePP.api_key,
        api_secret: facePP.api_secret
    };

    qsParams = _.extend(qsParams, params);

    if (typeof callback !== 'function') {
        throw new TypeError('callback should be function');
    }

    request.get(url, {qs: qsParams}, function (err, res) {
        if (err) {
            throw new Error('send request error %s', err);
        }
        if (res.statusCode !== 200) {
            callback(JSON.parse(res.body), null);
        } else {
            callback(null, JSON.parse(res.body));
        }
    });
};

/**
 * use post method send request
 *
 * @param url
 * @param params
 * @param stream
 * @param callback
 * @api private
 */
exports.postRequest = function (url, params, stream, callback) {
    var qsParams = {
            api_key: facePP.api_key,
            api_secret: facePP.api_secret
        },
        r, form;

    qsParams = _.extend(qsParams, params);

    r = request.post(url, {qs: qsParams}, requestCallback);
    form = r.form();
    form.append("img", stream);

    function requestCallback(err, res) {
        if (err) {
            throw new Error('send request error %s', err);
        }
        if (res.statusCode !== 200) {
            callback(JSON.parse(res.body), null);
        } else {
            callback(null, JSON.parse(res.body));
        }
    }
};