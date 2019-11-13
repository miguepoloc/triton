var homeUrl = 'http://192.168.3.173:8080/thredds/';
var variables = [{
        // Almacena las imágenes que van a ser graficadas
        wms: null,
        // Almacena el estado de visibilidad de la capa, si se muestra o no
        v: true,
        // Dirección de las URL donde se ubican los archivos .nc que son consumidos por el WMS
        l: [],
        // id del elemento de checkeo
        b: 'bSLAh',
        // Nombre de la variable de la capa
        variable: 'SLA-H',
        // Nombre usado para visualizar la capa
        nombre: 'Nivel del mar',
        sp: "spSLAh",
        legendiv: "lSLAh",
        // Valor máximo
        max: '0.5',
        // Valor mínimo
        min: '-0.5',
        // Valor central
        center: '0',
        // Unidades de la variable
        unidades: 'm',
        // Parámetros para la petición
        p: {
            layers: 'sla',
            format: 'image/png',
            COLORSCALERANGE: '-0.5,0.5',
            TRANSPARENT: true,
            STYLES: 'boxfill/redblue',
            NUMCOLORBANDS: 50,
            palete: "redblue"
        },
        // id de la capa
        l_id: null,
        // Nombre de la capa
        name: "sla",
        // Texto que se visibiliza
        texto: "Anomal&iacute;a del nivel del mar (m) del producto combinado las mediciones satelitales de altimetr&iacute;a de todas misiones actualmente en orbita (Jason-3, Sentinel-3A, HY-2A, Saral/AltiKa, Cryosat-2, Jason-2, Jason-1, T/P, ENVISAT, GFO, ERS1/2), calculada respecto al promedio del 20 a&ntilde;os del nivel del mar."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bSLAuv',
        variable: 'SLA-UV',
        nombre: 'Corrientes',
        sp: "spSLAuv",
        legendiv: "lSLAuv",
        max: 1,
        min: 0,
        center: 0.5,
        unidades: 'm/s',
        p: {
            layers: 'surface_geostrophic_sea_water_velocity_assuming_sea_level_for_geoid',
            COLORSCALERANGE: '0,1',
            STYLES: 'linevec/ferret',
            NUMCOLORBANDS: 50,
            format: 'image/png',
            TRANSPARENT: true,
            palete: "ferret"
        },
        l_id: null,
        name: "ugos",
        texto: "Campo de corrientes geostr&oacute;ficas derivadas (m) del producto combinado las mediciones satelitales de altimetr&iacute;a de todas misiones actualmente en orbita (Jason-3, Sentinel-3A, HY-2A, Saral/AltiKa, Cryosat-2, Jason-2, Jason-1, T/P, ENVISAT, GFO, ERS1/2)"
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bSLA',
        variable: 'SLA-UV',
        nombre: 'Corrientes',
        sp: "spSLA",
        legendiv: "lSLA",
        max: 1,
        min: 0,
        center: 0.5,
        unidades: 'm/s',
        p: {
            layers: 'surface_geostrophic_sea_water_velocity_assuming_sea_level_for_geoid',
            COLORSCALERANGE: '0,1',
            STYLES: 'vector/ferret',
            NUMCOLORBANDS: 50,
            format: 'image/png',
            TRANSPARENT: true,
            palete: "ferret"
        },
        l_id: null,
        name: "ugos",
        texto: "Campo de corrientes geostr&oacute;ficas derivadas (m) del producto combinado las mediciones satelitales de altimetr&iacute;a de todas misiones actualmente en orbita (Jason-3, Sentinel-3A, HY-2A, Saral/AltiKa, Cryosat-2, Jason-2, Jason-1, T/P, ENVISAT, GFO, ERS1/2)"
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bCHL',
        variable: 'CHL_I',
        nombre: 'Clorofila',
        sp: "spCHL",
        legendiv: "lCHL",
        max: 10,
        min: 0.01,
        center: '.',
        unidades: 'mg m-3',
        p: {
            layers: 'chl',
            format: 'image/png',
            TRANSPARENT: true,
            COLORSCALERANGE: '0.01,10',
            LOGSCALE: true,
            NUMCOLORBANDS: '50',
            palete: "rainbow"
        },
        l_id: null,
        name: "chl",
        texto: "Promedio-compuesto de los &uacute;ltimos tres d&iacute;as de registros satelitales de la Concentraci&oacute;n de Clorofila del sensor Modis-Aqua. Resoluci&oacute;n espacial 1km."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bSST',
        variable: 'SST_I',
        nombre: 'Temperatura superficial',
        sp: "spSST",
        legendiv: "lSST",
        max: 31,
        min: 23,
        center: 27,
        unidades: '°c',
        p: {
            layers: 'sst',
            format: 'image/png',
            TRANSPARENT: true,
            COLORSCALERANGE: '23,31',
            NUMCOLORBANDS: '50',
            palete: "rainbow"
        },
        l_id: null,
        name: "sst",
        texto: "Promedio-compuesto de los &uacute;ltimos tres d&iacute;as de registros satelitales de la Temperatura Superficial del Mar del sensor Modis-Aqua. Resoluci&oacute;n espacial 1km."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bWIND',
        variable: 'WIND',
        nombre: 'Vientos',
        sp: "spWIND",
        legendiv: "lWIND",
        max: 15,
        min: 0,
        center: 7.5,
        unidades: 'm/s',
        p: {
            layers: 'wind',
            STYLES: 'barb/occam_pastel-30',
            format: 'image/png',
            TRANSPARENT: true,
            NUMCOLORBANDS: '50',
            COLORSCALERANGE: '0,15',
            palete: "occam_pastel-30"
        },
        l_id: null,
        name: "uwnd",
        texto: "Campo de vientos a 10 metros sobre el nivel del mar, proveniente del producto combinado de mas de 6 mediciones satelitales (Microwave Imager-SSMI, Tropical Rainfall Measuring Mission Microwave Imager-TMI, Advanced Microwave Scanning Radiometer-AMSR-E, mas mediciones de dispers&oacute;metros satelitales activos de largo plazo), con una resoluci&oacute;n espacial remuestreada a 1/10&deg;."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bWINDv',
        variable: 'WIND',
        nombre: 'Vientos',
        sp: "spWINDv",
        legendiv: "lWINDv",
        max: 15,
        min: 0,
        center: 7.5,
        unidades: 'm/s',
        p: {
            layers: 'wind',
            STYLES: 'vector/occam_pastel-30',
            format: 'image/png',
            TRANSPARENT: true,
            NUMCOLORBANDS: '50',
            COLORSCALERANGE: '0,15',
            palete: "occam_pastel-30"
        },
        l_id: null,
        name: "uwnd",
        texto: "Campo de vientos a 10 metros sobre el nivel del mar, proveniente del producto combinado de mas de 6 mediciones satelitales (Microwave Imager-SSMI, Tropical Rainfall Measuring Mission Microwave Imager-TMI, Advanced Microwave Scanning Radiometer-AMSR-E, mas mediciones de dispers&oacute;metros satelitales activos de largo plazo), con una resoluci&oacute;n espacial remuestreada a 1/10&deg;."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bWAVES',
        variable: 'WAVES',
        nombre: 'Olas',
        sp: "spWAVES",
        legendiv: "lWAVES",
        max: 5,
        min: 0,
        center: 2.5,
        unidades: 'm',
        p: {
            layers: 'dir',
            COLORSCALERANGE: '0,5',
            STYLES: 'vector/occam_pastel-30',
            NUMCOLORBANDS: '50',
            format: 'image/png',
            TRANSPARENT: true,
            palete: "occam_pastel-30"
        },
        l_id: null,
        name: "vwnd",
        texto: "Predicciones de la altura, direcci&oacute;n y periodo de ola, generadas cada 6 horas (0, 6, 12 y 18H) por el modelo WAVEWATCH III y remuestreadas a una resoluci&oacute;n espacial de 1/10&deg;."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bWAVESv',
        variable: 'WAVES',
        nombre: 'Olas',
        sp: "spWAVESv",
        legendiv: "lWAVESv",
        max: 5,
        min: 0,
        center: 2.5,
        unidades: 'm',
        p: {
            layers: 'dir',
            COLORSCALERANGE: '0,5',
            STYLES: 'linevec/occam_pastel-30',
            NUMCOLORBANDS: '50',
            format: 'image/png',
            TRANSPARENT: true,
            palete: "occam_pastel-30"
        },
        l_id: null,
        name: "vwnd",
        texto: "Predicciones de la altura, direcci&oacute;n y periodo de ola, generadas cada 6 horas (0, 6, 12 y 18H) por el modelo WAVEWATCH III y remuestreadas a una resoluci&oacute;n espacial de 1/10&deg;."
    },
];

// Llena la lista de URLS correspondientes a la ubicación del servicio WMS
function llenarlista(capa) {
    // Obtiene los datos de la siguiente URL
    $.get(homeUrl + "catalog/" + capa.variable + "/latest.xml", function (data) {
        // Trata de obtener los elementos que tengan el nombre "Latest capa.variable"
        // Por ejemplo "SLA-H"
        // Selecciona sólo el último dato y de él obtiene el atributo urlPath
        // Esta es la ubicación donde se encuentran las imágenes WMS
        // Guardas las URL en capa.l
        try {
            capa.l.push(data.getElementsByName("Latest " + capa.variable)[0].attributes.urlPath
                .nodeValue);
        } catch (err) {
            // En caso de que se presente un error, obtiene los elementos con nombre "dataset"
            // Y luego se hace lo mismo de arriba
            capa.l.push(data.getElementsByTagName("dataset")[0].attributes.urlPath.nodeValue);
        }
        // Guarda los datos de las capas en capa.wms
        capa.wms = homeUrl + 'wms/' + capa.l[0];
        console.log(capa.wms);
        if (capa.v) {
            // Si es verdadero el valor de "capa.v" (La variable que controla la visibilidad)
            // Grafica la capa en el mapa
            // Se anexa la tierra (Por el error de que se superponen en la tierra los datos oceanográficos)
            // Cambia el botón de esa capa a ON
            $('#c' + capa.b).bootstrapToggle('on');
            // Pone visible esa capa
            $("#" + capa.legendiv).show();
        }

        // Obtiene los datos de la siguiente URL
        $.get(homeUrl + "catalog/" + capa.variable + "/catalog.xml", function (data2) {
            var historico = [];
            try {
                historico = data2.getElementsByName(capa.variable)[0].children;
                for (var i = 5; i < historico.length; i++) {
                    capa.l.push(historico[i].attributes.urlPath.nodeValue);
                }
            } catch (err) {
                historico = data2.getElementsByTagName("dataset")
                for (var i = 3; i < historico.length; i++) {
                    capa.l.push(historico[i].attributes.urlPath.nodeValue);
                }
            }
        });
    });
};

require([
    'esri/map', 'esri/layers/WMSLayer', 'esri/layers/WMSLayerInfo', 'esri/geometry/Extent', 'esri/layers/FeatureLayer', "esri/InfoTemplate",
], function (Map, WMSLayer, WMSLayerInfo, Extent, FeatureLayer, InfoTemplate) {

    map = new Map('map', {
        basemap: 'streets',
        center: [-75, 16],
        zoom: 6,
        slider: false
    });
    for (var i = 0; i < variables.length; i++) {
        iniciarControl(variables[i]);
        llenarlista(variables[i]);
        // iniciarControles(variables[i]);
    }

    function iniciarControl(capa) {
        // Si el elemento con id "#c capa.b" cambia
        $("#c" + capa.b).change(function () {
            console.log(capa.b);
            // Si NO está seleccionado
            if (!$(this).is(":checked")) {
                // Elimina la capa
                let idx = map.getLayer(capa.l_id)
                map.removeLayer(idx);
                // Cambia el estado de visibilidad a falso
                capa.v = false;
                // Oculta el elemento "#capa.legendiv"
                $("#" + capa.legendiv).hide();
            }
            // En caso de estar chequeado el elemento
            else {
                // Añade la capa al mapa
                wmsLayer = graficar(capa);
                map.addLayer(wmsLayer);
                let idx = map.layerIds;
                capa.l_id = idx[idx.length - 1];
                console.log(capa.l_id);
                // Cambia el estado de visibilidad a true
                capa.v = true;
                // Deja visible el elemento "#capa.legendiv"
                $("#" + capa.legendiv).show();

            }
        });

    };

    // $("#xbEstaciones").change(function () {
    //     // Si NO está seleccionado
    //     if (!$(this).is(":checked")) {
    //         console.log("Eliminar");
    //         // Elimina la capa
    //         // let idx = map.getLayer(capa.l_id)
    //         // map.removeLayer(idx);
    //         // // Cambia el estado de visibilidad a falso
    //         // capa.v = false;
    //         // // Oculta el elemento "#capa.legendiv"
    //         // $("#" + capa.legendiv).hide();
    //     }
    //     // En caso de estar chequeado el elemento
    //     else {
    //         // Añade la capa al mapa
    //         // Agregar las estaciones
    //         var url = "http://gis.invemar.org.co/arcgis/rest/services/CLIMARES/Estaciones_Meteoceanograficas/MapServer/0";
    //         var template = new InfoTemplate("Attributes", "${*}");
    //         var fl = new FeatureLayer(url, {
    //             infoTemplate: template
    //         });
    //         map.addLayer(fl);
    //         let idx = map.layerIds;
    //         id_estacion = idx[idx.length - 1];
    //     }
    // });

    function graficar(capa) {
        wmsLayer = new WMSLayer(
            capa.wms, {
                resourceInfo: {
                    extent: new Extent(-124.71430969199997, -33.741115570999966, 179.77593994100005,
                        53.01194000300006, {
                            wkid: 4269
                        }),
                    customLayerParameters: capa.p,
                    layerInfos: new WMSLayerInfo({ //No sé esto por qué toca ponerlo
                    })
                },
                visibleLayers: ['Todas'] //No sé esto por qué toca ponerlo
            }
        );
        return wmsLayer;
    }



});

sidebar: $('#sidebar').sidebar();