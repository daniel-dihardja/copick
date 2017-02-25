/**
 * Created by danieldihardja on 28/01/17.
 */
class WasteMapController {

    constructor() {
        'ngInject'
        this.wasteItems = [
            {name: 'Monitor', type: 'Electro', created: '3 days ago', statusIcon: 'timelapse'},
            {name: 'TV', type: 'Electro', created: '2 days ago', statusIcon: 'grade'},
            {name: 'Radio', type: 'Electro', created: '5 days ago', statusIcon: 'drive_eta'},
            {name: 'Speaker', type: 'Electro', created: '3 days ago', statusIcon: 'done'}
        ];

        this.selectedItems = [];

        this.color = {blue: 0};

        this.items = [
            {address: 'Falbenhennenstr. 3 70180 Stuttgart'},
            {address: 'Falbenhennenstr. 3 70180 Stuttgart'},
            {address: 'Falbenhennenstr. 3 70180 Stuttgart'},
            {address: 'Falbenhennenstr. 3 70180 Stuttgart'},
            {address: 'Falbenhennenstr. 3 70180 Stuttgart'}
        ];
    }
}
export default WasteMapController;