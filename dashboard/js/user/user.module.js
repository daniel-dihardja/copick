/**
 * Created by danieldihardja on 28/01/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import loginControler from './login/login.controller';
import loginTemplate from './login/login.template.html!text';

import registerController from './register/register.controller';
import registerTemplate from './register/register.template.html!text';

import registerConfirmTemplate from './register/register-confirm.html!text';

let user = angular.module('user', [uiRouter])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.login', {
                controller: loginControler,
                controllerAs: 'vm',
                template: loginTemplate,
                url: '/login'
            })
            .state('app.register', {
                controller: registerController,
                controllerAs: 'vm',
                template: registerTemplate,
                url: '/register'
            })
            .state('app.register-confirm', {
                template: registerConfirmTemplate,
                url: '/register-confirm'
            })
    }]);

export default user;