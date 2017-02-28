/**
 * Created by danieldihardja on 28/02/17.
 */
function map() {

    var link = (scope, element, attrs) => {

        var map, infoWindow;
        var markers = [];

        var mapOptions = {
            center: new google.maps.LatLng(48.7666380, 9.1760880),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollWheel: false
        };

        function initMap() {
            if(map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }

        function setMarker(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker);

            google.maps.event.addListener(marker, 'click', ()=> {
                if(infoWindow !== void 0) {
                    infoWindow.close();
                }

                var infoWindowOptions = {
                    content: content
                };

                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker)
            });
        }

        initMap();
        setMarker(map, new google.maps.LatLng(48.7666380, 9.1760880), 'Falbenhennenstr. 3', 'Falbenhennenstr. 3, 70180 Stuttgart');
    };

    return {
        restrict: 'A',
        template: '<div class="map"></div>',
        replace: true,
        link: link
    }
}

export default map;