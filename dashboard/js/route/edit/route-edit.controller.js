/**
 * Created by danieldihardja on 07/02/17.
 */

class RouteEditController {

    constructor($route, $state, $stateParams) {
        this.$route = $route;
        this.$state = $state;
        this.$stateParams = $stateParams;

        console.log($stateParams);


        this.route = $stateParams.route;
    }

}
export default RouteEditController;