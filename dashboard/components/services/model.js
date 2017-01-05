/**
 * Created by danieldihardja on 05/01/17.
 */

import Promise from 'bluebird';

function ClientModel(endPoint) {
    this.endPoint = endPoint || '';
}

ClientModel.prototype.create = function (params) {
    return new Promise(function(resolve, reject) {
        resolve(new ClientModelInstance(this.endPoint, params));
    }.bind(this));
};

function ClientModelInstance(endPoint, params) {
    this._endPoint = endPoint;
    for(var key in params) {
        this[key] = params[key];
    }
    return this;
}

ClientModelInstance.prototype.save = function() {
    var _this = this;
    return new Promise((resolve, reject) => {
        resolve(_this);
    });
};

var _instances = {};
export const Model = {
    instance: function(endPoint) {
        if(! _instances[endPoint]) {
            _instances[endPoint] = new ClientModel(endPoint);
        }
        return _instances[endPoint];
    }
};