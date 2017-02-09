/**
 * Created by danieldihardja on 28/01/17.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './app.controller';
import template from './app.html!text';

let mainModule = angular.module('app', [uiRouter])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app', {
                controller,
                controllerAs: 'vm',
                template,
                url: '/app'
            })
    }]);

export default mainModule;