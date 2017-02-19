/**
 * Created by danieldihardja on 28/01/17.
 */
class PickupRouteController {

    constructor($route) {
        'ngInject';
        this.items = $route.routes();
        this.selectedItems = [];
    }

    deleteItem(index) {
        console.log('delete ', index);
        this.items.splice(index, 1);
    }
}
export default PickupRouteController;