var facePP = require('..'),
    util = require('./util');

/**
 * Detect the information of the given photo
 *
 * params.url/img is required,url should be string
 * img should be buffer
 *
 * Example:
 *
 * var params = {
 *      url : 'http://faceplusplus.com/static/img/demo/1.jpg',
 *      mode: 'normal',
 *      attribute: 'gender, age, race, smiling, glass, pose',
 *      async: 'false'
 * };
 *
 * facePP.detection.detect(params, function (err, res){
 *      // to do something
 *      console.log(res.face[0].attribute.age);
 * });
 *
 * params attributes(url,mode..) see http://www.faceplusplus.com/detection_detect/
 *
 * @param {object} params
 * @param {function} callback
 * @api public
 */

exports.detect = function (params, callback) {

    var url = facePP.baseUrl + '/detection/detect';

    if (typeof params !== 'object') {
        throw new TypeError('params should be an object');
    }

    if (!params.url && !params.img) {
        throw new TypeError('url/img is required');
    }

    if (params.url) {
        util.sendRequest(url, params, callback);
    } else {
        util.postRequest(url, params, params.img, callback);
    }
};

/**
 * Return the facial parts and contour locations in the face.
 *
 * params.face_id is required
 *
 * Example:
 *
 * var params = {
 *      face_id: 'your face_id here'
 * }
 * facePP.detection.landmark(params, function (err, res){
 *      // to do something
 *      console.dir(res.result);
 * });
 *
 * see http://www.faceplusplus.com/detectionlandmark/
 *
 * @param params
 * @param callback
 * @api public
 */
exports.landmark = function (params, callback) {
    var url = facePP.baseUrl + '/detection/landmark';

    if (typeof params != 'object') {
        throw new TypeError('params should be an object');
    }
    if (!params.face_id) {
        throw new TypeError('face_id is required');
    }

    util.sendRequest(url, params, callback);
};