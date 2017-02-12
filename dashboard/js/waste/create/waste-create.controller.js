/**
 * Created by danieldihardja on 07/02/17.
 */

class WasteCreateController {

    constructor() {
        this.form = {};
        this.tags = [];
        this.centimeters = [10, 15, 20, 25, 30, 35, 40, 45, 50];
        this.kilos = [10, 15, 20, 25, 30, 35, 40, 45, 50];

        this.wasteItems = this.getElectroWasteItems();

        this.electroWasteSearchText = "";
        this.electroWasteSelectedItem = {};

        this.searchTextChange.bind(this);
        this.selectedItemChange.bind(this);
        this.querySearch.bind(this);
    }

    searchTextChange(text) {
        console.log('text changed to', text);
    }

    selectedItemChange(item) {
        console.log('selected item change', item);
    }

    getElectroWasteItems() {
        var items = "Computer, Fernseher, Lautsprecher, Monitor, Radio, Mikrowelle, Föhn, Telefon";
        return items.split(/,+/g).map((item) => {
            return {
                value: item.toLowerCase(),
                display: item
            }
        });
    }

    querySearch(query) {
        return this.wasteItems;
    }
}
export default WasteCreateController;