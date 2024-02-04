var wms_layers = [];

var lyr_Cespedes_Climent_MNDWI_2023_Sentinel_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_MNDWI_2023_Sentinel",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp5/Cespedes_Climent_MNDWI_2023_Sentinel_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-81040.000000, 4739109.121194, -68740.000000, 4752471.770486]
                            })
                        });
var lyr_Cespedes_Climent_MNDWI_2022_Sentinel_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_MNDWI_2022_Sentinel",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp5/Cespedes_Climent_MNDWI_2022_Sentinel_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-81040.000000, 4739109.121194, -68740.000000, 4752471.770486]
                            })
                        });
var lyr_Cespedes_Climent_MNDWI_2023_Landsat_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_MNDWI_2023_Landsat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp5/Cespedes_Climent_MNDWI_2023_Landsat_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-81040.000000, 4739109.121194, -68740.000000, 4752471.770486]
                            })
                        });
var lyr_Cespedes_Climent_MNDWI_2022_Landsat_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_MNDWI_2022_Landsat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp5/Cespedes_Climent_MNDWI_2022_Landsat_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-81040.000000, 4739109.121194, -68740.000000, 4752471.770486]
                            })
                        });

        var lyr_OSMStandard_4 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SEVERIDAD_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "SEVERIDAD",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp5/SEVERIDAD_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-43736.263259, 4710807.339053, -25229.575236, 4729389.349886]
                            })
                        });
var group_Landsat = new ol.layer.Group({
                                layers: [lyr_Cespedes_Climent_MNDWI_2023_Landsat_2,lyr_Cespedes_Climent_MNDWI_2022_Landsat_3,],
                                title: "Landsat"});
var group_Sentinel = new ol.layer.Group({
                                layers: [lyr_Cespedes_Climent_MNDWI_2023_Sentinel_0,lyr_Cespedes_Climent_MNDWI_2022_Sentinel_1,],
                                title: "Sentinel"});

lyr_Cespedes_Climent_MNDWI_2023_Sentinel_0.setVisible(true);lyr_Cespedes_Climent_MNDWI_2022_Sentinel_1.setVisible(true);lyr_Cespedes_Climent_MNDWI_2023_Landsat_2.setVisible(true);lyr_Cespedes_Climent_MNDWI_2022_Landsat_3.setVisible(true);lyr_OSMStandard_4.setVisible(true);lyr_SEVERIDAD_5.setVisible(true);
var layersList = [group_Sentinel,group_Landsat,lyr_OSMStandard_4,lyr_SEVERIDAD_5];
