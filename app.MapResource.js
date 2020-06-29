var app = app || {};

app.MapResource = {

    rectangle_source: {
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
                            "symbolColer": "black",
                            "description": "北エリア"
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
                        "symbolColor": "black",
                        "description": "中心エリア"
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
                        "symbolColor": "black",
                        "description": "西エリア"
                    }
                }
            ]
        }
    },

    polygon_sample_layer: {
        "id": "polygon_sample_fill_layer",
        "source": "polygon_sample_source",
        "layout": { },
        "type": "fill",
        "paint": {
            'fill-color': ["get", "fillColor"],
            'fill-opacity': 0
        }
    },

    symbol_sample_layer: {
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
    },

    border_sample_layer: {
        "id": "polygon_sample_border_layer",
        "type": "line",
        "source": "polygon_sample_source",
        "layout": {},
        "paint": {
            "line-color": ["get", "fillColor"],
            "line-width": 5,
            "line-opacity": 0
        }
    },

    //以下は未使用
    /* モバイルシンボルのレイヤ定義 */
    mobile_positions_layer: {
        "id": "mobile-symbols-layer",
        "type": "symbol",
        "source": "mobile-symbols-source",
        "layout": {
            //"icon-image": "mobile-icon"/*"{image}"*/,
            "icon-image": "{image}",
            "icon-size": 0.5,
            "text-field": "{name}",
            "text-font": ["Open Sans Bold"],
            "text-offset": [0, 1],
            "text-size": 15,
            "text-anchor": "top",
            'icon-allow-overlap': false,
            "text-allow-overlap": true,
            "icon-rotate": ["get", "rotate"],
        },
        "paint": {
            "icon-color": "#ff0000",
            "icon-halo-color": "#fff",
            "icon-halo-width": 2,
            "text-color": "#f00",
            "text-halo-color": "#ffffff",
            "text-halo-width": 2
        },
    },

    /* 施設シンボルのレイヤ定義 */
    facility_symbols_layer: {
        "id": "facility-symbols-layer",
        "type": "symbol",
        "source": "facility-symbols-source",
        "layout": {
            "icon-image": "jems-facility",
            "icon-size": 0.5,
            //            "text-field": "{name}",
            "text-font": ["Open Sans Bold"],
            "text-offset": [0, 1],
            "text-size": 15,
            "text-anchor": "top",
            'icon-allow-overlap': true,
            "text-allow-overlap": true,
            //            "icon-rotate": ["get", "rotate"],
        },
        "paint": {
            "icon-color": "#f00",
            "icon-halo-color": "#fff",
            "icon-halo-width": 2,
            "text-color": "#00f",
            "text-halo-color": "#fff",
            "text-halo-width": 2
        },
    },

    /* 施設周囲の円のレイヤ定義 */
    facility_circles_layer: {
        "id": "facility-circles-layer",
        "source": "facility-circles-source",
        "layout": {},
        "type": "fill",
        "paint": {
            "fill-color": "blue",
            "fill-opacity": 0.1
        }
    },

    /* 施設周囲の円のレイヤ定義 */
    facility_circles_layer2: {
        "id": "facility-circles-layer2",
        "source": "facility-circles-source2",
        "layout": {},
        "type": "line",
        "paint": {
            "line-color": "blue",
            "line-width": 1,
            "line-dasharray": [5, 5],
        }
    },

    /* 放射線エリアのレイヤ定義 */
    radiation_area_layer: {
        "id": "radiation-area-layer",
        "source": "radiation-area-source",
        "layout": {},
        "type": "fill",
        "paint": {
            "fill-color": ["get", "color"],
            "fill-opacity": 0.1
        }
    },

    area_highlight_layer: {
        "id": "area-highlight-layer",
        "source": "area-highlight-source",
        "layout": {},
        "type": "line",
        "paint": {
            "line-color": "#00f",
            "line-width": 2
        }
    },

    // 森林計画、軌跡確認 カーソル選択林班ハイライトレイヤ
    rinpan_highlight_layer: {
        "id": "rinpan-highlight-layer",
        "source": "rinpan-highlight-source",
        "layout": {},
        "type": "fill",
        "paint": {
            "fill-color": "#f00",
            "fill-opacity": 0.3
        }
    },

    //森林計画 林班ハイライトレイヤ
    rinpan_highlight_layer2: {
        "id": "rinpan-highlight-layer2",
        "source": "rinpan-highlight-source2",
        "layout": {},
        "type": "line",
        "paint": {
            "line-color": "#00f",
            "line-width": 4
        }
    },

    rinpan_highlight_layer3: {
        "id": "rinpan-highlight-layer3",
        "source": "rinpan-highlight-source3",
        "layout": {},
        "type": "fill",
        "paint": {
            "fill-color": ["get", "lggColor"],
            "fill-opacity": 0.7,
            "fill-outline-color": "#fff",
            "fill-antialias": true,
        }
    },


    doba_positions_layer: {
        "id": "symbol-doba-layer",
        "source": "symbol-doba-source",
        "type": "symbol",
        "layout": {
            "icon-image": "jems-doba",
            "icon-size": 0.7,
            "text-field": "{title}",
            "text-font": ["Open Sans Bold"],
            "text-offset": [0, 1],
            "text-size": 15,
            "text-anchor": "top",
            'icon-allow-overlap': true,
            "text-allow-overlap": false,
        },
        "paint": {
            "icon-color": "#ffffff",
            "icon-halo-color": "#fff",
            "icon-halo-width": 10,
            "text-color": "#00f",
            "text-halo-color": "#ffffff",
            "text-halo-width": 2
        },
    },

    /* 空のGEOJSON*/
    empty_source: {
        type: "geojson",
        data: {
            type: 'FeatureCollection',
            features: []
        }
    },
};
