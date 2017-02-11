/**
 * Created by danieldihardja on 28/01/17.
 */
class WasteController {

    constructor($waste) {
        'ngInject'
        this.cards = [];
        this.selected = [];

        this.wasteItems = [
            {name: 'Monitor', type: 'Electro', created: '3 days ago', status: 'pending'},
            {name: 'TV', type: 'Electro', created: '2 days ago', status: 'pending'},
            {name: 'Radio', type: 'Electro', created: '5 days ago', status: 'in order'},
        ];

        this.query = {
            order: 'name',
            limit: 5,
            page: 1
        };
    }
}
export default WasteController;