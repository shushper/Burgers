ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [56.838011, 60.597465],
        zoom: 12,
        controls: ['zoomControl']
    });

    myMap.behaviors.disable(['scrollZoom', 'multiTouch']);

    let coords = [
        [56.860327, 60.554942],
        [56.805386, 60.612102],
        [56.851431, 60.635660]
    ]

    let myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: 'images/icons/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);

}
