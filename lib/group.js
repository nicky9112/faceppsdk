var facePP = require('..'),
    util = require('./util');

/**
 * Create a group
 *
 * group_name is required
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.create = function (params, callback) {

    var url = facePP.baseUrl + '/group/create';

    if (!params.group_name) {
        throw new TypeError('group_name is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Delete a list of groups
 *
 * group_name/group_id is required
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.delete = function (params, callback) {

    var url = facePP.baseUrl + '/group/delete';

    if (!params.group_name && !params.group_id) {
        throw new TypeError('group_name/group_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Add persons into a group. Note that a person can be added to multiple groups
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.add_person = function (params, callback) {

    var url = facePP.baseUrl + '/group/add_person';

    if (!params.group_id && !params.group_name) {
        throw new TypeError('group_name/group_id is required');
    }

    if (!params.person_name && !params.person_id) {
        throw new TypeError('person_name/person_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Remove persons from a group
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.remove_person = function (params, callback) {

    var url = facePP.baseUrl + '/group/remove_person';

    if (!params.group_id && !params.group_name) {
        throw new TypeError('group_name/group_id is required');
    }

    if (!params.person_name && !params.person_id) {
        throw new TypeError('person_name/person_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Set the name or tag of a group
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.set_info = function (params, callback) {

    var url = facePP.baseUrl + '/group/set_info';

    if (!params.group_id && !params.group_name) {
        throw new TypeError('group_name/group_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Retrieve information of a group, including persons in the group, tags, etc
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.get_info = function (params, callback) {

    var url = facePP.baseUrl + '/group/get_info';

    if (!params.group_id && !params.group_name) {
        throw new TypeError('group_name/group_id is required');
    }

    util.sendRequest(url, params, callback);
};