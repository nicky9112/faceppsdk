var facePP = require('..'),
    util = require('./util');

/**
 * Compute two face's holistic similarity and different components' similarity
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.compare = function (params, callback) {

    var url = facePP.baseUrl + '/recognition/compare';

    if (!params.face_id1 || !params.face_id2) {
        throw new TypeError('face_id1 and face_id2 is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Given a face and a person, decide whether the face belongs to
 * the same person or not. Decision confidence is also provided.
 * Note that the person must have been trained (see also/train/verify).
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.verify = function (params, callback) {

    var url = facePP.baseUrl + '/recognition/verify';

    if (!params.face_id) {
        throw new TypeError('face_id is required');
    }

    if (!params.person_id && !params.person_name) {
        throw new TypeError('person_id/person_name is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Find the most similar persons within a group
 * for each query face in a list (or in an image).
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.identify = function (params, callback) {

    var url = facePP.baseUrl + '/recognition/identify';

    if (!params.group_id && !params.group_name) {
        throw new TypeError('group_id/group_name is required');
    }

    util.sendRequest(url, params, callback);
};

/**
 * Given a face and a faceset, find the most similar faces in the faceset.
 * Note: if there are more than 10000 faces to search,
 * you can split them into different Faceset,
 * search in each of these Faceset and merge the results by confidence.
 * The faceset should be trained when ever modified (see /train/search),
 * otherwise some faces may fail to appear in the result.
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.search = function (params, callback) {

    var url = facePP.baseUrl + '/recognition/search';

    if (!params.key_face_id) {
        throw new TypeError('key_face_id is required');
    }

    if (!params.faceset_id && !params.faceset_name) {
        throw new TypeError('faceset_id/faceset_name is required');
    }

    util.sendRequest(url, params, callback);
};