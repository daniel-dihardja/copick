/**
 * Created by danieldihardja on 28/01/17.
 */
class PickupRouteController {

    constructor($route) {
        'ngInject';

        this.items = $route.routes();

        this.selectedItems = [];
    }
}
export default PickupRouteController;