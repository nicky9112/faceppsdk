var facePP = require('..'),
    util = require('./util');

/**
 * Retrieve information of a given image, including detected faces, etc.
 *
 * img_id is required
 *
 * @param {string} img_id
 * @param {function} callback
 * @api public
 */

exports.get_image = function (img_id, callback) {

    var url = facePP.baseUrl + '/info/get_image';

    if (!params.img_id) {
        throw new TypeError('img_id is required');
    }

    util.sendRequest(url, {img_id: img_id}, callback);
};

/**
 * Given a list of faces, return corresponding information of the faces
 * (information includes source image, associated person, etc).
 *
 * @param {string} face_id
 * @param {function} callback
 * @api public
 */

exports.get_face = function (face_id, callback) {

    var url = facePP.baseUrl + '/info/get_face';

    if (!params.face_id) {
        throw new TypeError('face_id is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Retrieve all facesets of this API Key.
 *
 * @param {function} callback
 * @api public
 */

exports.get_person_list = function (callback) {

    var url = facePP.baseUrl + '/info/get_person_list';

    util.sendRequest(url, null, callback);
};

/**
 * Retrieve all facesets of this API Key.
 *
 * @param {function} callback
 * @api public
 */

exports.get_faceset_list = function (callback) {

    var url = facePP.baseUrl + '/info/get_faceset_list';

    util.sendRequest(url, null, callback);
};

/**
 * Retrieve all groups of this API Key.
 *
 * @param {function} callback
 * @api public
 */

exports.get_group_list = function (callback) {

    var url = facePP.baseUrl + '/info/get_group_list';

    util.sendRequest(url, null, callback);
};

/**
 * Retrieve the status and possibly also the result of a session
 *
 * @param {function} callback
 * @api public
 */

exports.get_session = function (callback) {

    var url = facePP.baseUrl + '/info/get_session';

    util.sendRequest(url, null, callback);
};

/**
 * Retrieve information about the app
 *
 * @param {function} callback
 * @api public
 */

exports.get_info = function (callback) {

    var url = facePP.baseUrl + '/info/get_app';

    util.sendRequest(url, null, callback);
};