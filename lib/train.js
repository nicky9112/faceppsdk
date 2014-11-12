var facePP = require('..'),
    util = require('./util');

/**
 * Train the verify model for one person
 *
 * params.person_id/person_name is required
 *
 * see http://www.faceplusplus.com/train_verify/
 *
 * @param {object} params - {person_id: '', person_name: ''}
 * @param {function} callback
 * @api public
 */

exports.verify = function (params, callback) {

    var url = facePP.baseUrl + '/train/verify';

    if (!params.person_id && params.person_name) {
        throw new TypeError('person_id/person_name is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Train the search model for one faceset
 *
 * params.faceset_id/faceset_name is required
 *
 * see http://www.faceplusplus.com/train_search/
 *
 * @param {object} params - {faceset_id:'', faceset_name: ''}
 * @param {function} callback
 * @api public
 */

exports.search = function (params, callback) {

    var url = facePP.baseUrl + '/train/search';

    if (!params.faceset_id && !params.faceset_name) {
        throw new TypeError('faceset_id/faceset_name is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Train the identify model for one group. Plase note the following:
 *
 * A group must be trained before you can perform identification.
 *
 * A group must be re-trained if it is modified (i.e. Add/remove persons,
 * add/remove faces of group members.) to make the modifications take effect.
 *
 * The training procedure may be time-consuming, so asynchronous invocation
 * is forced and only the session id is returned.
 *
 * The result can later be retrieved via /info/get_session. When the train
 * is completed, result will be {"success": true}.
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */
exports.identity = function (params, callback) {

    var url = facePP.baseUrl + '/train/identity';

    if (!params.group_id && !params.group_name) {
        throw new TypeError('group_id/group_name is required');
    }

    util.sendRequest(url, params, callback);
};