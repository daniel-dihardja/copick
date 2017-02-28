/**
 * Created by danieldihardja on 28/01/17.
 */
class CoreController {
    constructor($rootScope, $state) {
        this.isLoggedIn = false;
        $rootScope.$on('login', this.onLogin.bind(this));
        $rootScope.$on('logout', this.onLogout.bind(this));

        this.$state = $state;

        this.userMenus = [
            {title: 'Profil', icon: 'face', action: ()=>{}},
            {title: 'Logout', icon: 'undo', action: ()=>{this.home();}}
        ];
    }

    onLogin() {
        this.isLoggedIn = true;
    }

    onLogout() {
        this.isLoggedIn = false;
    }

    home() {
        this.onLogout();
        this.$state.go('app.welcome');
    }
}
export default CoreController;