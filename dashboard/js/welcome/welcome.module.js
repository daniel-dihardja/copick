/**
 * Created by danieldihardja on 28/01/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './welcome.controller';
import template from './welcome.template.html!text';

let welcome = angular.module('welcome', [uiRouter])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.welcome', {
                controller,
                controllerAs: 'vm',
                template,
                url: '/welcome'
            })
    }]);
export default welcome;