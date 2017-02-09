/**
 * Created by danieldihardja on 28/01/17.
 */
class DestinationsController {

    constructor($wasteType) {
        'ngInject'
        this.cards = $wasteType.getTypes();
    }
}
export default DestinationsController;