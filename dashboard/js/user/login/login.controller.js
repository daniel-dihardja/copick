/**
 * Created by danieldihardja on 11/02/17.
 */
class LoginController {

    constructor($state, $rootScope) {
        'ngInject';
        this.form = {};
        this.$state = $state;
        this.$rootScope = $rootScope;

        this.login.bind(this);
    }

    login() {
        this.$rootScope.$emit('login');
        if(this.form.email == 'r') {
            this.$state.go('app.waste-map');
            return;
        }
        this.$state.go('app.waste');
    }
}

export default LoginController;