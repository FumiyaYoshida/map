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
        // ポリゴン設定
        //map.addSource(app.MapResource.polygon_sample_layer.source, app.MapResource.rectangle_source);
        map.addSource("polygon_sample_source", {
            type: "geojson",
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        "type": "Freature",
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [[
                                [140, 40],
                                [140, 41],
                                [141, 41],
                                [141, 40],
                                [140, 40]
                            ]]
                        },
                        "properties": {
                            "id": "polygon_sample",
                            "name": "North",
                            "fillColor": "#0f0",
                            "symbolColer": "black"
                        }
                    },
                    {
                        "type": "Freature",
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [[
                                [139, 35],
                                [139, 36],
                                [140, 36],
                                [140, 35],
                                [139, 35]
                            ]]
                        },
                        "properties": {
                            "id": "polygon_sample",
                            "name": "Center",
                            "fillColor": "#f00",
                            "symbolColor": "black"
                        }
                    },
                    {
                        "type": "Freature",
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [[
                                [131, 34],
                                [131, 35],
                                [132, 35],
                                [132, 34],
                                [131, 34]
                            ]]
                        },
                        "properties": {
                            "id": "polygon_sample",
                            "name": "West",
                            "fillColor": "#ff0",
                            "symbolColor": "black"
                        }
                    }
                ]
            }
        }),

        // 塗りつぶし設定
            map.addLayer({
                "id": "polygon_sample_fill_layer",
                "source": "polygon_sample_source",
                "layout": {},
                "type": "fill",
                "paint": {
                    'fill-color': ["get", "fillColor"],
                    'fill-opacity': 0
                }
            });

        // シンボル設定
        map.addLayer({
            "id": "polygon_sample_symbol_layer",
            "type": "symbol",
            "source": "polygon_sample_source",
            "layout": {
                "text-field": "{name}"
            },
            "paint": {
                'text-color': ["get", "symbolColor"],
                'text-opacity': 0
            }
        });

        // 境界設定
        map.addLayer({
            "id": "polygon_sample_border_layer",
            "type": "line",
            "source": "polygon_sample_source",
            "layout": {},
            "paint": {
                "line-color": ["get", "fillColor"],
                "line-width": 5,
                "line-opacity": 0
            }
        });
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
        "polygon_sample_fill_layer",
        "fill-opacity",
        parseInt(value, 10) / 200
    );
    map.setPaintProperty(
        "polygon_sample_symbol_layer",
        "text-opacity",
        parseInt(value, 10) / 100
    );
    map.setPaintProperty(
        "polygon_sample_border_layer",
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

    if (searchText == "North") {
        map.fitBounds(
            [[140, 40], [141, 41]],
            { padding: 50 }
        );
    } else {
        alert("Area " + searchText + " does not exist.");
    }
}



//fitboundsで中心、ズームを特定してくれる。
//turfも使う