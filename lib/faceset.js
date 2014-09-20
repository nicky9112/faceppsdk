var facePP = require('..'),
    util = require('./util');

/**
 * Create a faceset
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */
exports.create = function (params, callback) {

    var url = facePP.baseUrl + '/faceset/create';

    util.sendRequest(url, params, callback);
};

/**
 * Delete a list of facesets
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.delete = function (params, callback) {

    var url = facePP.baseUrl + '/faceset/delete';

    if (!params.faceset_name && !params.faceset_id) {
        throw new TypeError('faceset_name/faceset_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Associate an existing faceset with a list of faces.
 * Note that one face may only be assigned to one faceset.
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.add_face = function (params, callback) {

    var url = facePP.baseUrl + '/faceset/add_face';

    if (!params.faceset_name && !params.faceset_id) {
        throw new TypeError('faceset_name/faceset_id is required');
    }

    if (!params.face_id) {
        throw new TypeError('face_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Remove faces from a faceset
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.remove_face = function (params, callback) {

    var url = facePP.baseUrl + '/faceset/remove_face';

    if (!params.faceset_name && !params.faceset_id) {
        throw new TypeError('faceset_name/faceset_id is required');
    }

    if (!params.face_id) {
        throw new TypeError('face_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Set the name or tag of a faceset
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.set_info = function (params, callback) {

    var url = facePP.baseUrl + '/faceset/set_info';

    if (!params.faceset_name && !params.faceset_id) {
        throw new TypeError('faceset_name/faceset_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Set the name or tag of a faceset
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.get_info = function (params, callback) {

    var url = facePP.baseUrl + '/faceset/get_info';

    if (!params.faceset_name && !params.faceset_id) {
        throw new TypeError('faceset_name/faceset_id is required');
    }

    util.sendRequest(url, params, callback);
};