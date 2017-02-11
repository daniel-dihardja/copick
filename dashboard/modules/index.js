/**
 * Created by danieldihardja on 28/01/17.
 */

import 'angular-material/angular-material.css!'
import 'angular-material-data-table/dist/md-data-table.css!';
import '../assets/css/style.css!'

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-material-data-table';

import app from './app/app';
import user from './user/user.module';
import waste from './waste/waste.module';

let angularModule = angular.module('copick', [
    uiRouter,
    'ngMaterial',
    'md.data.table',
    app.name,
    user.name,
    waste.name
])
.config(['$urlRouterProvider',
        '$httpProvider',
        '$mdThemingProvider', ($urlRouterProvider, $httpProvider, $mdThemingProvider) => {
    $urlRouterProvider.otherwise('/app');
}]);

export default angularModule;