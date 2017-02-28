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




import app from './app/app.module';
import user from './user/user.module';
import welcome from './welcome/welcome.module';
import waste from './waste/waste.module';
import wasteMap from './waste-map/waste-map.module';

let angularModule = angular.module('copick', [
    uiRouter,
    'ngMaterial',
    'md.data.table',
    app.name,
    welcome.name,
    user.name,
    waste.name,
    wasteMap.name
])
.config(['$urlRouterProvider',
        '$httpProvider',
        '$mdThemingProvider', ($urlRouterProvider, $httpProvider, $mdThemingProvider) => {

        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('cyan');

    $urlRouterProvider.otherwise('/app/welcome');
}]);

export default angularModule;