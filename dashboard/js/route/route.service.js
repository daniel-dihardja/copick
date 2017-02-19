/**
 * Created by danieldihardja on 18/02/17.
 */

class RouteCreateService {

    constructor() {
        this._routes = [
            {name: 'pickup1', addresses: 5, length: '12 km', duration: '48 min'}
        ];
        this.routes.bind(this);
    }

    create(route) {
        route = route || {name: '...', addresses: 0, length: '0 km', duration: '0 min'};
        this._routes.push(route);
        console.log('create');
    }

    routes() {
        return this._routes;
    }
}
export default RouteCreateService;