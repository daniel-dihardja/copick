/**
 * Created by danieldihardja on 04/01/17.
 */
var assert = require('chai').assert;

function Project(params) {
    this.name = params.name;
    this.save = () => {
        "use strict";
        console.log('save');
    };
    return this;
}

Project.create = (params) => {
    "use strict";
    console.log('create');
    return new Project(params);
};

Project.find = (params) => {
    "use strict";
    console.log('find');
    return new Project(params);
};



var models = {
    'Project': Project
};


describe('instance', () => {
    "use strict";
    describe('create', () => {
        it('should create a new instance', () => {

            var P = models['Project'];

            var p1= P.create({name: 'p1'});
            var p2= P.create({name: 'p2'});

            assert.equal(p1.name, 'p1');
            assert.equal(p2.name, 'p2');

            p1.name = 'joe';

            assert.equal(p1.name, 'joe');
            assert.equal(p2.name, 'p2');
        });
    });
});