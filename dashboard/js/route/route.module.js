/**
 * Created by danieldihardja on 28/01/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './route.controller';
import template from './route.template.html!text';
import routeService from './route.service';

import createController from './create/route-create.controller';
import createTemplate from './create/route-create.template.html!text';

import editController from './edit/route-edit.controller';
import editTemplate from './edit/route-edit.template.html!text';


let pickupRoute = angular.module('route', [uiRouter])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.route', {
                controller,
                controllerAs: 'vm',
                template,
                url: '/route'
            })
            .state('app.route-create', {
                controller: createController,
                controllerAs: 'vm',
                template: createTemplate,
                url: '/route-create'
            })
            .state('app.route-edit', {
                controller: editController,
                controllerAs: 'vm',
                template: editTemplate,
                url: '/route-edit'
            })

    }])
    .service('$route', routeService);
export default pickupRoute;