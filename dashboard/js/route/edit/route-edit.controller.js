/**
 * Created by danieldihardja on 07/02/17.
 */

class RouteEditController {

    constructor($route, $state) {
        this.$route = $route;
        this.$state = $state;

        this.form = {};

        this.create.bind(this);
    }

    create() {
        this.$route.create({
            name: this.form.name || '...',
            addresses: 0,
            length: '0 km',
            duration: '0 min'
        });
        this.$state.go('app.route');
    }
}
export default RouteEditController;