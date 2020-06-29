'use strict';

var map;

$(function () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVtc3BpY3RzaSIsImEiOiJja2JscXg5N2UwaWhvMnBwOW1xMmNlMmd0In0.MteAo-gdS7ReHjsB4gKW8A';
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/jemspictsi/ckblqyzn10p4e1io2t06nuuym', // stylesheet location
        center: [134.9952153, 34.6432003],
        zoom: 4 // starting zoom
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([141.1368109, 39.7035954])
        .addTo(map);

    map.on('load', function () {
        // É|ÉäÉSÉìê›íË
        map.addSource(app.MapResource.polygon_sample_layer.source, app.MapResource.rectangle_source);

        // ìhÇËÇ¬Ç‘Çµê›íË
        map.addLayer(app.MapResource.polygon_sample_layer);

        // ÉVÉìÉ{Éãê›íË
        map.addLayer(app.MapResource.symbol_sample_layer);

        // ã´äEê›íË
        map.addLayer(app.MapResource.border_sample_layer);
    });

    $('#rectangleArea-range').on('input', function () {
        rectangleAreaRange($(this).val());
    });

    $('#distortedArea-range').on('input', function () {
        distortedAreaRange($(this).val());
    });
});

function rectangleAreaRange(value) {
    map.setPaintProperty(
        app.MapResource.polygon_sample_layer.id,
        "fill-opacity",
        parseInt(value, 10) / 200
    );
    map.setPaintProperty(
        app.MapResource.symbol_sample_layer.id,
        "text-opacity",
        parseInt(value, 10) / 100
    );
    map.setPaintProperty(
        app.MapResource.border_sample_layer.id,
        "line-opacity",
        parseInt(value, 10) / 100
    );
}

function distortedAreaRange(value) {
    map.setPaintProperty(
        "yoshida_fill",
        "fill-opacity",
        parseInt(value, 10) / 200
    );
    map.setPaintProperty(
        "yoshida_symbol",
        "text-opacity",
        parseInt(value, 10) / 100
    );
    map.setPaintProperty(
        "yoshida_border",
        "line-opacity",
        parseInt(value, 10) / 100
    );
}



function search() {
    var searchText = document.searchArea.searchText.value;
    var isSearchHit = 0;

    app.MapResource.rectangle_source.data.features.forEach(function (feature) {
        if (feature.properties.name == searchText) {
            isSearchHit = 1;
            var line = turf.lineString(feature.geometry.coordinates[0]);
            var bbox = turf.bbox(line);
            map.fitBounds(
                bbox,
                { padding: 50 }
            );
        }
    });

    if (isSearchHit == 0) {
        alert(searchText + " doesn't exist.");
    }
}