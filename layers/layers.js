var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Wailua_1 = new ol.format.GeoJSON();
var features_Wailua_1 = format_Wailua_1.readFeatures(json_Wailua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wailua_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wailua_1.addFeatures(features_Wailua_1);
var lyr_Wailua_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wailua_1, 
                style: style_Wailua_1,
                popuplayertitle: 'Wailua',
                interactive: true,
    title: 'Wailua<br />\
    <img src="styles/legend/Wailua_1_0.png" /> 30 min<br />\
    <img src="styles/legend/Wailua_1_1.png" /> 60 min<br />\
    <img src="styles/legend/Wailua_1_2.png" /> 90 min<br />\
    <img src="styles/legend/Wailua_1_3.png" /> 120 min<br />' });
var format_MkahaValley_2 = new ol.format.GeoJSON();
var features_MkahaValley_2 = format_MkahaValley_2.readFeatures(json_MkahaValley_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MkahaValley_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MkahaValley_2.addFeatures(features_MkahaValley_2);
var lyr_MkahaValley_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MkahaValley_2, 
                style: style_MkahaValley_2,
                popuplayertitle: 'Mākaha Valley',
                interactive: true,
    title: 'Mākaha Valley<br />\
    <img src="styles/legend/MkahaValley_2_0.png" /> 30 min<br />\
    <img src="styles/legend/MkahaValley_2_1.png" /> 60 min<br />\
    <img src="styles/legend/MkahaValley_2_2.png" /> 90 min<br />\
    <img src="styles/legend/MkahaValley_2_3.png" /> 120 min<br />' });
var format_Mkaha_3 = new ol.format.GeoJSON();
var features_Mkaha_3 = format_Mkaha_3.readFeatures(json_Mkaha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mkaha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mkaha_3.addFeatures(features_Mkaha_3);
var lyr_Mkaha_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mkaha_3, 
                style: style_Mkaha_3,
                popuplayertitle: 'Mākaha',
                interactive: true,
    title: 'Mākaha<br />\
    <img src="styles/legend/Mkaha_3_0.png" /> 30 min<br />\
    <img src="styles/legend/Mkaha_3_1.png" /> 60 min<br />\
    <img src="styles/legend/Mkaha_3_2.png" /> 90 min<br />\
    <img src="styles/legend/Mkaha_3_3.png" /> 120 min<br />' });
var format_Ppkea_4 = new ol.format.GeoJSON();
var features_Ppkea_4 = format_Ppkea_4.readFeatures(json_Ppkea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ppkea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ppkea_4.addFeatures(features_Ppkea_4);
var lyr_Ppkea_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ppkea_4, 
                style: style_Ppkea_4,
                popuplayertitle: 'Pūpūkea',
                interactive: true,
    title: 'Pūpūkea<br />\
    <img src="styles/legend/Ppkea_4_0.png" /> 30 min<br />\
    <img src="styles/legend/Ppkea_4_1.png" /> 60 min<br />\
    <img src="styles/legend/Ppkea_4_2.png" /> 90 min<br />\
    <img src="styles/legend/Ppkea_4_3.png" /> 120 min<br />' });
var format_Kahuku_5 = new ol.format.GeoJSON();
var features_Kahuku_5 = format_Kahuku_5.readFeatures(json_Kahuku_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kahuku_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kahuku_5.addFeatures(features_Kahuku_5);
var lyr_Kahuku_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kahuku_5, 
                style: style_Kahuku_5,
                popuplayertitle: 'Kahuku',
                interactive: true,
    title: 'Kahuku<br />\
    <img src="styles/legend/Kahuku_5_0.png" /> 30 min<br />\
    <img src="styles/legend/Kahuku_5_1.png" /> 60 min<br />\
    <img src="styles/legend/Kahuku_5_2.png" /> 90 min<br />\
    <img src="styles/legend/Kahuku_5_3.png" /> 120 min<br />' });
var format_Lie_6 = new ol.format.GeoJSON();
var features_Lie_6 = format_Lie_6.readFeatures(json_Lie_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lie_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lie_6.addFeatures(features_Lie_6);
var lyr_Lie_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lie_6, 
                style: style_Lie_6,
                popuplayertitle: 'Lāʻie',
                interactive: true,
    title: 'Lāʻie<br />\
    <img src="styles/legend/Lie_6_0.png" /> 30 min<br />\
    <img src="styles/legend/Lie_6_1.png" /> 60 min<br />\
    <img src="styles/legend/Lie_6_2.png" /> 90 min<br />\
    <img src="styles/legend/Lie_6_3.png" /> 120 min<br />' });
var format_huimanu_7 = new ol.format.GeoJSON();
var features_huimanu_7 = format_huimanu_7.readFeatures(json_huimanu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huimanu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huimanu_7.addFeatures(features_huimanu_7);
var lyr_huimanu_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_huimanu_7, 
                style: style_huimanu_7,
                popuplayertitle: 'ʻĀhuimanu',
                interactive: true,
    title: 'ʻĀhuimanu<br />\
    <img src="styles/legend/huimanu_7_0.png" /> 30 min<br />\
    <img src="styles/legend/huimanu_7_1.png" /> 60 min<br />\
    <img src="styles/legend/huimanu_7_2.png" /> 90 min<br />\
    <img src="styles/legend/huimanu_7_3.png" /> 120 min<br />' });
var format_ExistingBikeFacilitiesExisting_Bike_Facilities_8 = new ol.format.GeoJSON();
var features_ExistingBikeFacilitiesExisting_Bike_Facilities_8 = format_ExistingBikeFacilitiesExisting_Bike_Facilities_8.readFeatures(json_ExistingBikeFacilitiesExisting_Bike_Facilities_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingBikeFacilitiesExisting_Bike_Facilities_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingBikeFacilitiesExisting_Bike_Facilities_8.addFeatures(features_ExistingBikeFacilitiesExisting_Bike_Facilities_8);
var lyr_ExistingBikeFacilitiesExisting_Bike_Facilities_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingBikeFacilitiesExisting_Bike_Facilities_8, 
                style: style_ExistingBikeFacilitiesExisting_Bike_Facilities_8,
                popuplayertitle: 'Existing Bike Facilities — Existing_Bike_Facilities',
                interactive: true,
                title: '<img src="styles/legend/ExistingBikeFacilitiesExisting_Bike_Facilities_8.png" /> Existing Bike Facilities — Existing_Bike_Facilities'
            });
var format_BusRoutes_9 = new ol.format.GeoJSON();
var features_BusRoutes_9 = format_BusRoutes_9.readFeatures(json_BusRoutes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusRoutes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusRoutes_9.addFeatures(features_BusRoutes_9);
var lyr_BusRoutes_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusRoutes_9, 
                style: style_BusRoutes_9,
                popuplayertitle: 'Bus Routes',
                interactive: true,
                title: '<img src="styles/legend/BusRoutes_9.png" /> Bus Routes'
            });
var format_RuralPainPoint_10 = new ol.format.GeoJSON();
var features_RuralPainPoint_10 = format_RuralPainPoint_10.readFeatures(json_RuralPainPoint_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralPainPoint_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralPainPoint_10.addFeatures(features_RuralPainPoint_10);
var lyr_RuralPainPoint_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralPainPoint_10, 
                style: style_RuralPainPoint_10,
                popuplayertitle: 'Rural Pain Point',
                interactive: true,
                title: '<img src="styles/legend/RuralPainPoint_10.png" /> Rural Pain Point'
            });
var group_isochrones = new ol.layer.Group({
                                layers: [lyr_Wailua_1,lyr_MkahaValley_2,lyr_Mkaha_3,lyr_Ppkea_4,lyr_Kahuku_5,lyr_Lie_6,lyr_huimanu_7,],
                                fold: 'close',
                                title: 'isochrones'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Wailua_1.setVisible(true);lyr_MkahaValley_2.setVisible(true);lyr_Mkaha_3.setVisible(true);lyr_Ppkea_4.setVisible(true);lyr_Kahuku_5.setVisible(true);lyr_Lie_6.setVisible(true);lyr_huimanu_7.setVisible(true);lyr_ExistingBikeFacilitiesExisting_Bike_Facilities_8.setVisible(true);lyr_BusRoutes_9.setVisible(true);lyr_RuralPainPoint_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_isochrones,lyr_ExistingBikeFacilitiesExisting_Bike_Facilities_8,lyr_BusRoutes_9,lyr_RuralPainPoint_10];
lyr_Wailua_1.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_MkahaValley_2.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Mkaha_3.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Ppkea_4.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Kahuku_5.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Lie_6.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_huimanu_7.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_ExistingBikeFacilitiesExisting_Bike_Facilities_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'Fac_Name': 'Fac_Name', 'Fac_Desc': 'Fac_Desc', 'DP_area': 'DP_area', 'Fac_Type': 'Fac_Type', 'Length_mi': 'Length_mi', 'Owner': 'Owner', 'Shape__Length': 'Shape__Length', });
lyr_BusRoutes_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'objectid': 'objectid', 'rte_dir': 'rte_dir', 'rte': 'rte', 'dir': 'dir', });
lyr_RuralPainPoint_10.set('fieldAliases', {'group_index': 'group_index', 'value': 'value', 'center': 'center', 'total_pop': 'total_pop', 'range_type': 'range_type', 'color': 'color', 'fillColor': 'fillColor', 'label': 'label', 'area': 'area', 'opacity': 'opacity', 'fillOpacity': 'fillOpacity', 'visible': 'visible', });
lyr_Wailua_1.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_MkahaValley_2.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Mkaha_3.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Ppkea_4.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Kahuku_5.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Lie_6.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_huimanu_7.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_ExistingBikeFacilitiesExisting_Bike_Facilities_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'FID': 'Range', 'Fac_Name': 'TextEdit', 'Fac_Desc': 'TextEdit', 'DP_area': 'TextEdit', 'Fac_Type': 'TextEdit', 'Length_mi': 'TextEdit', 'Owner': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_BusRoutes_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'objectid': 'Range', 'rte_dir': 'TextEdit', 'rte': 'TextEdit', 'dir': 'TextEdit', });
lyr_RuralPainPoint_10.set('fieldImages', {'group_index': 'Range', 'value': 'Range', 'center': 'List', 'total_pop': 'Range', 'range_type': 'TextEdit', 'color': 'TextEdit', 'fillColor': 'TextEdit', 'label': 'TextEdit', 'area': 'TextEdit', 'opacity': 'Range', 'fillOpacity': 'TextEdit', 'visible': 'CheckBox', });
lyr_Wailua_1.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_MkahaValley_2.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Mkaha_3.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Ppkea_4.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Kahuku_5.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Lie_6.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_huimanu_7.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_ExistingBikeFacilitiesExisting_Bike_Facilities_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'FID': 'hidden field', 'Fac_Name': 'no label', 'Fac_Desc': 'no label', 'DP_area': 'no label', 'Fac_Type': 'no label', 'Length_mi': 'no label', 'Owner': 'no label', 'Shape__Length': 'hidden field', });
lyr_BusRoutes_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'objectid': 'hidden field', 'rte_dir': 'hidden field', 'rte': 'no label', 'dir': 'no label', });
lyr_RuralPainPoint_10.set('fieldLabels', {'group_index': 'hidden field', 'value': 'hidden field', 'center': 'hidden field', 'total_pop': 'hidden field', 'range_type': 'hidden field', 'color': 'hidden field', 'fillColor': 'hidden field', 'label': 'no label', 'area': 'hidden field', 'opacity': 'hidden field', 'fillOpacity': 'hidden field', 'visible': 'hidden field', });
lyr_RuralPainPoint_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});