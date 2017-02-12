/**
 * Created by danieldihardja on 28/01/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './waste.controller';
import template from './waste.template.html!text';
import service from './waste.service';

import createController from './create/waste-create.controller';
import createTemplate from './create/waste-create.template.html!text'

import statusController from './status/waste-status.controller';
import statusTemplate from './status/waste-status.template.html!text'

let waste = angular.module('waste', [uiRouter])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.waste', {
                controller,
                controllerAs: 'vm',
                template,
                url: '/waste'
            })
            .state('app.waste-create', {
                controller: createController,
                controllerAs: 'vm',
                template: createTemplate,
                url: '/waste-create'
            })
            .state('app.waste-status', {
                controller: statusController,
                controllerAs: 'vm',
                template: statusTemplate,
                url: '/waste-status'
            })
    }])
    .service('$waste', service);

export default waste;