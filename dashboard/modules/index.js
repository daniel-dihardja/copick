/**
 * Created by danieldihardja on 28/01/17.
 */

import 'angular-material/angular-material.css!'
import '../assets/css/style.css!'

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import app from './app/app';
import wasteType from './waste-type/waste-type.module';
import waste from './waste/waste.module';

let angularModule = angular.module('copick', [
    uiRouter,
    'ngMaterial',
    app.name,
    wasteType.name,
    waste.name
])
.config(['$urlRouterProvider',
        '$httpProvider',
        '$mdThemingProvider', ($urlRouterProvider, $httpProvider, $mdThemingProvider) => {
    $urlRouterProvider.otherwise('/app');
}]);

export default angularModule;