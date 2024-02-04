var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Cespedes_Climent_SAVI_post_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_SAVI_post",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp9/Cespedes_Climent_SAVI_post_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-44540.000000, 4693042.802552, -16680.000000, 4721697.126451]
                            })
                        });
var lyr_Cespedes_Climent_EVI_post_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_EVI_post",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp9/Cespedes_Climent_EVI_post_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-44540.000000, 4693042.802552, -16680.000000, 4721697.126451]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_Cespedes_Climent_SAVI_post_1.setVisible(true);lyr_Cespedes_Climent_EVI_post_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Cespedes_Climent_SAVI_post_1,lyr_Cespedes_Climent_EVI_post_2];
