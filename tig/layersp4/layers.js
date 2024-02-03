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
var format_ZONAS_VALIDAS_1 = new ol.format.GeoJSON();
var features_ZONAS_VALIDAS_1 = format_ZONAS_VALIDAS_1.readFeatures(json_ZONAS_VALIDAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAS_VALIDAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAS_VALIDAS_1.addFeatures(features_ZONAS_VALIDAS_1);
var lyr_ZONAS_VALIDAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONAS_VALIDAS_1, 
                style: style_ZONAS_VALIDAS_1,
                interactive: true,
    title: 'ZONAS_VALIDAS<br />\
    <img src="styles/legend/ZONAS_VALIDAS_1_0.png" /> ALTO<br />\
    <img src="styles/legend/ZONAS_VALIDAS_1_1.png" /> MEDIO<br />\
    <img src="styles/legend/ZONAS_VALIDAS_1_2.png" /> MALO<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ZONAS_VALIDAS_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ZONAS_VALIDAS_1];
lyr_ZONAS_VALIDAS_1.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_ZONAS_VALIDAS_1.set('fieldImages', {'DN': 'Range', 'Area': 'TextEdit', });
lyr_ZONAS_VALIDAS_1.set('fieldLabels', {'DN': 'no label', 'Area': 'no label', });
lyr_ZONAS_VALIDAS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});