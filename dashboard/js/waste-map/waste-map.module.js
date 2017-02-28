/**
 * Created by danieldihardja on 28/01/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './waste-map.controller';
import template from './waste-map.template.html!text';
import mapDirective from './waste-map.directive';


let wasteMap = angular.module('waste-map', [uiRouter])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.waste-map', {
                controller,
                controllerAs: 'vm',
                template,
                url: '/waste-map'
            })

    }])
    .directive('wMap', mapDirective);
export default wasteMap;