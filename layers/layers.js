var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Jaringan_Transportasi_1 = new ol.format.GeoJSON();
var features_Jaringan_Transportasi_1 = format_Jaringan_Transportasi_1.readFeatures(json_Jaringan_Transportasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Transportasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Transportasi_1.addFeatures(features_Jaringan_Transportasi_1);
var lyr_Jaringan_Transportasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Transportasi_1, 
                style: style_Jaringan_Transportasi_1,
                popuplayertitle: 'Jaringan_Transportasi',
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Transportasi_1.png" /> Jaringan_Transportasi'
            });
var format_BatasAdministrasi_2 = new ol.format.GeoJSON();
var features_BatasAdministrasi_2 = format_BatasAdministrasi_2.readFeatures(json_BatasAdministrasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_2.addFeatures(features_BatasAdministrasi_2);
var lyr_BatasAdministrasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_2, 
                style: style_BatasAdministrasi_2,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_2.png" /> Batas Administrasi'
            });
var format_Radius800_3 = new ol.format.GeoJSON();
var features_Radius800_3 = format_Radius800_3.readFeatures(json_Radius800_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radius800_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius800_3.addFeatures(features_Radius800_3);
var lyr_Radius800_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius800_3, 
                style: style_Radius800_3,
                popuplayertitle: 'Radius 800',
                interactive: true,
                title: '<img src="styles/legend/Radius800_3.png" /> Radius 800'
            });
var format_Radius400_4 = new ol.format.GeoJSON();
var features_Radius400_4 = format_Radius400_4.readFeatures(json_Radius400_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radius400_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius400_4.addFeatures(features_Radius400_4);
var lyr_Radius400_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius400_4, 
                style: style_Radius400_4,
                popuplayertitle: 'Radius 400',
                interactive: true,
                title: '<img src="styles/legend/Radius400_4.png" /> Radius 400'
            });
var format_AreaPublikTerjangkau_5 = new ol.format.GeoJSON();
var features_AreaPublikTerjangkau_5 = format_AreaPublikTerjangkau_5.readFeatures(json_AreaPublikTerjangkau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPublikTerjangkau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPublikTerjangkau_5.addFeatures(features_AreaPublikTerjangkau_5);
var lyr_AreaPublikTerjangkau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPublikTerjangkau_5, 
                style: style_AreaPublikTerjangkau_5,
                popuplayertitle: 'Area Publik Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreaPublikTerjangkau_5.png" /> Area Publik Terjangkau'
            });
var format_AreaKomersialTerjangkau_6 = new ol.format.GeoJSON();
var features_AreaKomersialTerjangkau_6 = format_AreaKomersialTerjangkau_6.readFeatures(json_AreaKomersialTerjangkau_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaKomersialTerjangkau_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKomersialTerjangkau_6.addFeatures(features_AreaKomersialTerjangkau_6);
var lyr_AreaKomersialTerjangkau_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaKomersialTerjangkau_6, 
                style: style_AreaKomersialTerjangkau_6,
                popuplayertitle: 'Area Komersial Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreaKomersialTerjangkau_6.png" /> Area Komersial Terjangkau'
            });
var format_AreaPerumahanTerjangkau_7 = new ol.format.GeoJSON();
var features_AreaPerumahanTerjangkau_7 = format_AreaPerumahanTerjangkau_7.readFeatures(json_AreaPerumahanTerjangkau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahanTerjangkau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahanTerjangkau_7.addFeatures(features_AreaPerumahanTerjangkau_7);
var lyr_AreaPerumahanTerjangkau_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahanTerjangkau_7, 
                style: style_AreaPerumahanTerjangkau_7,
                popuplayertitle: 'Area Perumahan Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahanTerjangkau_7.png" /> Area Perumahan Terjangkau'
            });
var format_Halte_8 = new ol.format.GeoJSON();
var features_Halte_8 = format_Halte_8.readFeatures(json_Halte_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_8.addFeatures(features_Halte_8);
var lyr_Halte_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_8, 
                style: style_Halte_8,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_8.png" /> Halte'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Jaringan_Transportasi_1.setVisible(true);lyr_BatasAdministrasi_2.setVisible(true);lyr_Radius800_3.setVisible(true);lyr_Radius400_4.setVisible(true);lyr_AreaPublikTerjangkau_5.setVisible(true);lyr_AreaKomersialTerjangkau_6.setVisible(true);lyr_AreaPerumahanTerjangkau_7.setVisible(true);lyr_Halte_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Jaringan_Transportasi_1,lyr_BatasAdministrasi_2,lyr_Radius800_3,lyr_Radius400_4,lyr_AreaPublikTerjangkau_5,lyr_AreaKomersialTerjangkau_6,lyr_AreaPerumahanTerjangkau_7,lyr_Halte_8];
lyr_Jaringan_Transportasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_BatasAdministrasi_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Radius800_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', });
lyr_Radius400_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', });
lyr_AreaPublikTerjangkau_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', 'fid_2': 'fid_2', 'NAMZON': 'NAMZON', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_AreaKomersialTerjangkau_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', 'fid_2': 'fid_2', 'NAMZON': 'NAMZON', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_AreaPerumahanTerjangkau_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', 'fid_2': 'fid_2', 'NAMZON': 'NAMZON', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_Halte_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', });
lyr_Jaringan_Transportasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_BatasAdministrasi_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Radius800_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', });
lyr_Radius400_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', });
lyr_AreaPublikTerjangkau_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', 'fid_2': 'TextEdit', 'NAMZON': 'TextEdit', 'Luas Layan': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_AreaKomersialTerjangkau_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', 'fid_2': 'TextEdit', 'NAMZON': 'TextEdit', 'Luas Layan': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_AreaPerumahanTerjangkau_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', 'fid_2': 'TextEdit', 'NAMZON': 'TextEdit', 'Luas Layan': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_Halte_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', });
lyr_Jaringan_Transportasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_BatasAdministrasi_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Radius800_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', });
lyr_Radius400_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', });
lyr_AreaPublikTerjangkau_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', 'fid_2': 'no label', 'NAMZON': 'no label', 'Luas Layan': 'no label', 'Persentase': 'no label', });
lyr_AreaKomersialTerjangkau_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', 'fid_2': 'no label', 'NAMZON': 'no label', 'Luas Layan': 'no label', 'Persentase': 'no label', });
lyr_AreaPerumahanTerjangkau_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', 'fid_2': 'no label', 'NAMZON': 'no label', 'Luas Layan': 'no label', 'Persentase': 'no label', });
lyr_Halte_8.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', });
lyr_Halte_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});