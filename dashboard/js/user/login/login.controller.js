/**
 * Created by danieldihardja on 11/02/17.
 */
class LoginController {

    constructor($state) {
        'ngInject';
        this.form = {};
        this.$state = $state;

        this.login.bind(this);
    }

    login() {
        if(this.form.email == 'r') {
            this.$state.go('app.route');
            return;
        }
        this.$state.go('app.waste');
    }
}
export default LoginController;