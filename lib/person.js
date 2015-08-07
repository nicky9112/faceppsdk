var facePP = require('..'),
    util = require('./util');

/**
 * Create a person
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.create = function (params, callback) {

    var url = facePP.baseUrl + '/person/create';

    util.sendRequest(url, params, callback);
};

/**
 * Delete a list of persons
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.delete = function (params, callback) {

    var url = facePP.baseUrl + '/person/delete';

    if (!params.person_id && !params.person_name) {
        throw new TypeError('person_id/person_name is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Associate an existing person with a list of faces.
 * Note that one face may only be assigned to one person
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.add_face = function (params, callback) {

    var url = facePP.baseUrl + '/person/add_face';

    if (!params.person_id && !params.person_name) {
        throw new TypeError('person_id/person_name is required');
    }

    if (!params.face_id) {
        throw new TypeError('face_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Remove faces from a person
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.remove_face = function (params, callback) {

    var url = facePP.baseUrl + '/person/remove_face';

    if (!params.person_id && !params.person_name) {
        throw new TypeError('person_id/person_name is required');
    }

    if (!params.face_id) {
        throw new TypeError('face_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Set the name or tag of a person
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.set_info = function (params, callback) {

    var url = facePP.baseUrl + '/person/set_info';

    if (!params.person_id && !params.person_name) {
        throw new TypeError('person_id/person_name is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Retrieve information of a person, including name, id, tag,
 * faces assigned to the person, and groups that the person belongs to.
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.get_info = function (params, callback) {

    var url = facePP.baseUrl + '/person/get_info';

    if (!params.person_id && !params.person_name) {
        throw new TypeError('person_id/person_name is required');
    }

    util.sendRequest(url, params, callback);
};
