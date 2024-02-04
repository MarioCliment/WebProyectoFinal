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
var lyr_Cespedes_Climent_MNDWI_2023_Sentinel_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_MNDWI_2023_Sentinel",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp10/Cespedes_Climent_MNDWI_2023_Sentinel_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-81040.000000, 4739109.121194, -68740.000000, 4752471.770486]
                            })
                        });
var lyr_Cespedes_Climent_MNDWI_2022_Sentinel_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_MNDWI_2022_Sentinel",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp10/Cespedes_Climent_MNDWI_2022_Sentinel_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-81040.000000, 4739109.121194, -68740.000000, 4752471.770486]
                            })
                        });
var lyr_Cespedes_Climent_MNDWI_2023_Landsat_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_MNDWI_2023_Landsat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp10/Cespedes_Climent_MNDWI_2023_Landsat_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-81040.000000, 4739109.121194, -68740.000000, 4752471.770486]
                            })
                        });
var lyr_Cespedes_Climent_MNDWI_2022_Landsat_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cespedes_Climent_MNDWI_2022_Landsat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layersp10/Cespedes_Climent_MNDWI_2022_Landsat_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-81040.000000, 4739109.121194, -68740.000000, 4752471.770486]
                            })
                        });
var group_Landsat = new ol.layer.Group({
                                layers: [lyr_Cespedes_Climent_MNDWI_2023_Landsat_3,lyr_Cespedes_Climent_MNDWI_2022_Landsat_4,],
                                title: "Landsat"});
var group_Sentinel = new ol.layer.Group({
                                layers: [lyr_Cespedes_Climent_MNDWI_2023_Sentinel_1,lyr_Cespedes_Climent_MNDWI_2022_Sentinel_2,],
                                title: "Sentinel"});
var group_OSM = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                title: "OSM"});

lyr_OSMStandard_0.setVisible(true);lyr_Cespedes_Climent_MNDWI_2023_Sentinel_1.setVisible(true);lyr_Cespedes_Climent_MNDWI_2022_Sentinel_2.setVisible(true);lyr_Cespedes_Climent_MNDWI_2023_Landsat_3.setVisible(true);lyr_Cespedes_Climent_MNDWI_2022_Landsat_4.setVisible(true);
var layersList = [group_OSM,group_Sentinel,group_Landsat];
