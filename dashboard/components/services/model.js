/**
 * Created by danieldihardja on 05/01/17.
 */

import Promise from 'bluebird';

/**
 * Client model that has the static methods
 * such as create, find and deleteById.
 * If a new model was created, then a client
 * model instance will be passed into the promise
 * resolve
 *
 * @param endPoint
 * @constructor
 */
function ClientModel(endPoint) {
    this.endPoint = endPoint || '';
}

/**
 * create a new model instance
 * @param params
 */
ClientModel.prototype.create = function (params) {
    return new Promise(function(resolve, reject) {
        resolve(new ClientModelInstance(this.endPoint, params));
    }.bind(this));
};

/**
 * Client model instance. is used for
 * updating model instances
 *
 * @param endPoint
 * @param params
 * @returns {ClientModelInstance}
 * @constructor
 */
function ClientModelInstance(endPoint, params) {
    this._endPoint = endPoint;
    for(var key in params) {
        this[key] = params[key];
    }
    return this;
}

/**
 * update a model instance
 */
ClientModelInstance.prototype.save = function() {
    var _this = this;
    return new Promise((resolve, reject) => {
        resolve(_this);
    });
};

var _instances = {};

/**
 * exported module
 * @type {{instance: Model.instance}}
 */
export const Model = {
    instance: function(endPoint) {
        if(! _instances[endPoint]) {
            _instances[endPoint] = new ClientModel(endPoint);
        }
        return _instances[endPoint];
    }
};
