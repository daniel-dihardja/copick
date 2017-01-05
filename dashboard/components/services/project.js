/**
 * Created by danieldihardja on 05/01/17.
 */

import Promise from 'bluebird';
import {api} from './api';

export function Project(params) {
    "use strict";
    params = params || {};
    // iterate params here
    this.name = params.name || '';
    return this;
}

Project.prototype.save = function() {
    "use strict";
    return new Promise(function (resolve, reject) {
        console.log('save', this.name);
        resolve(this);
    }.bind(this));
};

Project.create = (params) => {
    "use strict";
    return new Promise((resolve, reject) => {
        api.post('Projects/create', params).then(() => {
            resolve(new Project(params));
        })
        .catch((err)=> {
            reject(err);
        });
    });
};

Project.find = (filter) => {
    "use strict";
    return api.get('Projects', filter);
};

