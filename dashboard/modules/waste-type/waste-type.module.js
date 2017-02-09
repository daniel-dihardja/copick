/**
 * Created by danieldihardja on 28/01/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './waste-type.controller';
import template from './waste-type.template.html!text';
import service from './waste-type.service';

let wasteType = angular.module('destinations', [uiRouter])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.waste-type', {
                controller,
                controllerAs: 'vm',
                template,
                url: '/waste-type'
            })
    }])
    .service('$wasteType', service);

export default wasteType;