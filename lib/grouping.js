var facePP = require('..'),
    util = require('./util');

/**
 * Given a list of faces, try to group them into clusters so that faces
 * from the same person fall into the same cluster.
 * The grouping procedure may be time-consuming,
 * so asynchronous invocation is forced and only the session id is returned.
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.grouping = function (params, callback) {

    var url = facePP.baseUrl + '/grouping/grouping';

    if (!params.faceset_id && !params.faceset_name) {
        throw new TypeError('faceset_name/faceset_id is required');
    }

    util.sendRequest(url, params, callback);
};