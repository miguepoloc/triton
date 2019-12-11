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

require(['esri/map',
    'esri/layers/WMSLayer',
    'esri/layers/WMSLayerInfo',
    'esri/geometry/Extent',
    'esri/layers/FeatureLayer',
    "esri/InfoTemplate",
    "dojo/dom",
    "dojo/parser",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/CartographicLineSymbol",
    "esri/Color",
    "esri/toolbars/draw",
    "dojo/on",
    "esri/graphic",
    "esri/tasks/GeometryService",
    "esri/geometry/webMercatorUtils",
    "esri/geometry/Point",
    "esri/SpatialReference",
    "dojo/_base/array",
    "esri/geometry/screenUtils",
    "esri/tasks/query",
    "esri/tasks/QueryTask",
    "esri/request",
    "esri/dijit/PopupTemplate",
    "dojo/dom-construct",
    "dojo/query",

    "dojo/domReady!"
], function (Map,
    WMSLayer,
    WMSLayerInfo,
    Extent,
    FeatureLayer,
    InfoTemplate,
    dom,
    parser,
    SimpleMarkerSymbol,
    CartographicLineSymbol,
    Color,
    Draw,
    on,
    Graphic,
    GeometryService,
    webMercatorUtils,
    Point,
    SpatialReference,
    array,
    screenUtils,
    Query,
    QueryTask,
    esriRequest,
    PopupTemplate,
    domConstruct,
    query,
) {

    var CTD_Layer;

    parser.parse();
    esriConfig.defaults.geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
    esriConfig.defaults.io.proxyUrl = "/proxy/";

    map = new Map('map', {
        basemap: 'gray-vector',
        center: [-75, 16],
        zoom: 5,
        slider: false
    });

    map.on("load", initToolbar);

    // Añandiendo una cpa de tierra para evitar la superposición
    var url = "http://gis.invemar.org.co/arcgis/rest/services/Conectividad/ConectividadBase/MapServer/0/";
    var tierra = new FeatureLayer(url);
    map.addLayer(tierra);

    for (var i = 0; i < variables.length; i++) {
        iniciarControl(variables[i]);
        llenarlista(variables[i]);
        iniciarControles(variables[i]);
    }

    function iniciarControl(capa) {
        // Si el elemento con id "#c capa.b" cambia
        $("#c" + capa.b).on("change", function () {
            // Si NO está seleccionado
            if (!$(this).is(":checked")) {
                // Elimina la capa
                let idx = map.getLayer(capa.l_id)

                map.removeLayer(idx);
                capa.l_id = null;
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
                console.log(idx);
                capa.l_id = idx[idx.length - 1];
                // Cambia el estado de visibilidad a true
                capa.v = true;
                // Deja visible el elemento "#capa.legendiv"
                $("#" + capa.legendiv).show();
            }
        });
    };

    // Añadir las estaciones
    var fl;
    var url = "http://gis.invemar.org.co/arcgis/rest/services/CLIMARES/Estaciones_Meteoceanograficas/MapServer/0";
    var template = new InfoTemplate("Estación", "${Name} <br> <a href='/estacion/${id}' target='_blank'> Ver más </a>");
    fl = new FeatureLayer(url, {
        id: "Estaciones",
        infoTemplate: template,
        outFields: ["*"]
    });

    $("#xbEstaciones").on("change", function () {
        // Si NO está seleccionado
        if (!$(this).is(":checked")) {
            map.removeLayer(fl);
        }
        // En caso de estar chequeado el elemento
        else {
            // Añade la capa al mapa
            // Agregar las estaciones
            console.log(fl);
            map.addLayer(fl);
        }
    });

    // Añadir las CTD
    var featureCollection = {
        "layerDefinition": null,
        "featureSet": {
            "features": [],
            "geometryType": "esriGeometryPoint"
        }
    };
    featureCollection.layerDefinition = {
        "geometryType": "esriGeometryPoint",
        "objectIdField": "ObjectID",
        "drawingInfo": {
            // "renderer": {
            //     "type": "simple",
            //     "symbol": {
            //         "type": "esriPMS",
            //         "url": "{% static 'images/flickr.png' %}",
            //         "contentType": "image/png",
            //         "width": 15,
            //         "height": 15
            //     }
            // }
        },
    };
    // Configuración del Popup
    var popupTemplate = new PopupTemplate({
        title: "{titulo}",
        description: "{descripcion}"
    });
    // Creación de la capa donde se almacenarán las CTS
    CTD_Layer = new FeatureLayer(featureCollection, {
        infoTemplate: popupTemplate
    });
    var contar = 0;
    $("#xbCTD").on("change", function () {
        if (!$(this).is(":checked")) {
            map.removeLayer(CTD_Layer);
        } else {
            var requestHandle = esriRequest({
                url: "/api/ctd_lances/",
                callbackParamName: "jsoncallback"
            });
            if (contar == 0) {
                requestHandle.then(requestSucceeded);
            }
            map.addLayers([CTD_Layer]);
        }
    });

    function requestSucceeded(response) {
        contar = 1;
        //loop through the items and add to the feature layer
        var ctd_features = [];
        array.forEach(response.results, function (item) {
            // console.log(item);
            var attr = {};
            attr["titulo"] = item.titulo;
            attr["descripcion"] = "<b>Fecha: </b>" + item.fecha + "<br>" + "<b>Código de la estación: </b>" + item.prefijo_cdg_est_loc +
                item.codigo_estacion_loc + "<br>" + "<b>Lugar: </b>" + item.lugar + "<br>" + "<b>Profundidad máxima del lance: </b>" +
                item.prof_max_loc + "<br>" + '<button onclick="myFunction()" id="boton_grafica">Graficar</button>'
            var punto_ctd = new Point(item.longitudinicio_loc, item.latitudinicio_loc);
            var graphic_ctd = new Graphic(punto_ctd);
            graphic_ctd.setAttributes(attr);
            if (item.id_estacion !== 39162 && item.id_estacion !== 39161 && item.id_estacion !== 38884 && item.id_estacion !== 38883 && item.id_estacion !== 38885) {
                ctd_features.push(graphic_ctd);
            }
        });
        CTD_Layer.applyEdits(ctd_features, null, null);
    }

    // Cargar capa WMS
    function graficar(capa) {
        var wmsLayer = new WMSLayer(
            capa.wms, {
                resourceInfo: {
                    extent: new Extent(-124.71430969199997, -33.741115570999966, 179.77593994100005,
                        53.01194000300006, {
                            wkid: 4269
                        }),
                    customLayerParameters: capa.p,
                    getFeatureInfoURL: capa.wms,
                    layerInfos: new WMSLayerInfo({ //No sé esto por qué toca ponerlo
                    })
                },
                visibleLayers: ['Todas'] //No sé esto por qué toca ponerlo
            }
        );
        return wmsLayer;
    }

    // PUNTOOOOOOOOOOOO
    $("#tpicker").click(function () {
        if (tpicker) {
            $("#picker").slideReveal("hide");
            tpicker = false;
            map.graphics.clear();
            $('#table').bootstrapTable('removeAll');
            $('#coor').html('');
            document.getElementById("select_grafica").style.display = "none";
            document.getElementById("ctd_grafica").innerHTML = "";
        } else {
            $("#slider").slideReveal("hide");
            $("#tracer").slideReveal("hide");
            $("#slider_graph").slideReveal("hide");
            $("#picker").slideReveal("show");
            tpicker = true;
            tlegend = false;
            trace = false;
            t_graph = false;
        }
    });

    map.on('click', getFeatureInfo);
    var graphic;

    var punto_seleccion;

    function getFeatureInfo(evt) {
        if (tpicker) {
            var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
            // y = Latitud
            // x = Longitud
            // {lat: 18.187606552494625, lng: -68.00537109375001}
            coordenada = {
                lat: Number(mp.y.toFixed(15)),
                lng: Number(mp.x.toFixed(15))
            }
            // coordenada = mp.x.toFixed(15) + ", " + mp.y.toFixed(15);
            console.log(coordenada);
            map.graphics.clear();
            punto_seleccion = new Point(Number(mp.x.toFixed(4)), Number(mp.y.toFixed(4)));
            console.log(punto_seleccion);

            console.log(map);

            var simpleMarkerSymbol = new SimpleMarkerSymbol();
            // simpleMarkerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
            // simpleMarkerSymbol.setColor(new Color("#00FFFF"));
            graphic = new Graphic(punto_seleccion, simpleMarkerSymbol);
            map.graphics.add(graphic);
            $('#coor').html('<span class="glyphicon glyphicon-map-marker"></span>(Lat,Lng):' + mp.y.toFixed(4) + ',' + mp.x.toFixed(4) + '')
            $('#table').bootstrapTable('removeAll');
            for (var i = 0; i < variables.length; i++) {
                getInfo('#table', variables[i], coordenada);
            }
        }
        // if (trace) {
        //     map.removeLayer(trazadoLine);
        //     for (var i = 0; i < trazado.length; i++) {
        //         map.removeLayer(trazado[i]);
        //     }
        //     $('#tableTrace').bootstrapTable('removeAll');
        //     //console.log(evt.latlng);
        //     trazado.push(L.marker(evt.latlng, {
        //         icon: markerIcon
        //     }));
        //     trazadoLine.addLatLng(evt.latlng);
        //     var t = 0;
        //     puntos = []
        //     $('#traceVar').empty();;
        //     for (var i = 0; i < trazado.length; i++) {
        //         trazado[i].addTo(map);
        //         var p = {
        //             punto: i + 1,
        //             lon: trazado[i].getLatLng().lat.toFixed(3),
        //             lat: trazado[i].getLatLng().lng.toFixed(3),
        //         }
        //         if (i > 0) {
        //             p.dist = map.distance(trazado[i - 1].getLatLng(), trazado[i].getLatLng());
        //             t += p.dist;
        //             p.total = t;
        //             p.dist = (p.dist / 1000).toFixed(1);
        //             p.total = (p.total / 1000).toFixed(1);
        //         }

        //         var ht = '<table class="table" data-toggle="table" id="tv' + i + '"> ';
        //         ht += '<caption><span class="glyphicon glyphicon-map-marker"></span>Punto ' + (i + 1) + ',lat:' + p.lat + ',lon:' + p.lon + '</caption>';
        //         ht += '<thead><tr>';
        //         ht += '<th data-field="variable">Variable</th>';
        //         ht += '<th data-field="valor">Valor</th>';
        //         ht += '<th data-field="unidades">Unidades</th>';
        //         ht += '</tr></thead></table>';

        //         $('#traceVar').append(ht);
        //         $('#tv' + i).bootstrapTable();
        //         $('#tableTrace').bootstrapTable('append', p);
        //         $('#table').bootstrapTable('removeAll');
        //         for (var j = 0; j < variables.length; j++) {
        //             getInfo('#tv' + i, variables[j], trazado[i].getLatLng(), p);
        //         }
        //         puntos.push(p)
        //     }
        //     trazadoLine.addTo(map);
        // }
    }

    function getInfo(tabla, capa, latlng, p) {
        var v = {};
        if (capa.l_id) {
            console.log("Soy " + capa.l_id);
            var url = getFeatureInfoUrl(latlng, capa);
            //     //var capa=variables[i];
            //     $.get(url, function (data) {
            //         v = {
            //             variable: capa.nombre,
            //             valor: parseFloat(data.getElementsByTagName("value")[0].childNodes[0].data, 2).toFixed(2),
            //             unidades: capa.unidades
            //         };
            //         if (p) {
            //             p[capa.nombre] = v.valor;
            //             p[capa.nombre] = v.valor;
            //         }
            //         $(tabla).bootstrapTable('append', v);
            //     });
        }
        return v;
    }

    function getFeatureInfoUrl(latlng, capa) {
        var punto_pixel = screenUtils.toScreenPoint(map.extent, map.width, map.height, punto_seleccion);
        console.log("AQUI");
        console.log(map.geographicExtent);
        console.log(map.geographicExtent.toJson());
        bbox_string = String(map.geographicExtent.toJson().xmin) + "," + String(map.geographicExtent.toJson().ymin) + "," + String(map.geographicExtent.toJson().xmax) + "," + String(map.geographicExtent.toJson().ymax)
        console.log(bbox_string);

        params = {
            request: 'GetFeatureInfo',
            service: 'WMS',
            srs: 'EPSG:4326',
            styles: capa.p.STYLES,
            transparent: capa.p.TRANSPARENT,
            format: capa.p.format,
            bbox: bbox_string,
            height: map.height,
            width: map.width,
            layers: capa.p.layers,
            query_layers: capa.p.layers,
            info_format: 'text/xml'
        };

        params[params.version === '1.3.0' ? 'i' : 'x'] = punto_pixel.x;
        params[params.version === '1.3.0' ? 'j' : 'y'] = punto_pixel.y;
        console.log(params);
        console.log(map);
        var query = new Query();
        var queryTask = new QueryTask(capa.p.wms);
        query.where = params;
        query.outSpatialReference = {
            wkid: 102100
        };
        query.returnGeometry = true;
        // query.outFields = ["CITY_NAME"];
        prueba = queryTask.execute(query);
        console.log("LA prueba");
        console.log(prueba);
        // return wms._url + L.Util.getParamString(params, wms._url, true);
    }

    // LA PARTE IZQUIERDA
    // markerSymbol is used for point and multipoint, see http://raphaeljs.com/icons/#talkq for more examples
    var markerSymbol = new SimpleMarkerSymbol();
    markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
    markerSymbol.setColor(new Color("#FFFFFF"));

    // lineSymbol used for freehand polyline, polyline and line. 
    var lineSymbol = new CartographicLineSymbol();
    lineSymbol.setCap(CartographicLineSymbol.CAP_ROUND);
    lineSymbol.setWidth(3);
    lineSymbol.setColor(new Color([0, 112, 255, 1]));

    function initToolbar() {
        tb = new Draw(map);
        tb.on("draw-end", addGraphic);

        // event delegation so a click handler is not
        // needed for each individual button
        on(dom.byId("trace"), "click", function (evt) {
            // if (evt.target.id === "info") {
            //     return;
            // }
            var tool = evt.target.id.toLowerCase();
            map.disableMapNavigation();
            tb.activate("polyline");
        });
    }

    function addGraphic(evt) {
        //deactivate the toolbar and clear existing graphics 
        tb.deactivate();
        map.enableMapNavigation();

        // figure out which symbol to use
        var symbol;
        if (evt.geometry.type === "point" || evt.geometry.type === "multipoint") {
            symbol = markerSymbol;
        } else if (evt.geometry.type === "line" || evt.geometry.type === "polyline") {
            symbol = lineSymbol;
        }

        map.graphics.add(new Graphic(evt.geometry, symbol));
    }

    $("#trace").click(function () {
        if (trace) {
            $("#tracer").slideReveal("hide");
            tpicker = false;
            tlegend = false;
            trace = false;
            t_graph = false;
            map.graphics.clear();
            document.getElementById("select_grafica").style.display = "none";
            document.getElementById("ctd_grafica").innerHTML = "";

        } else {
            $("#slider").slideReveal("hide");
            $("#picker").slideReveal("hide");
            $("#slider_graph").slideReveal("hide");
            $("#tracer").slideReveal("show");
            tpicker = false;
            tlegend = false;
            trace = true;
            t_graph = false;
        }
        //console.log("select tracer");
    });

    on(dom.byId("clearGraphics"), "click", function () {
        if (map) {
            map.graphics.clear();
        }
    });

});

sidebar: $('#sidebar').sidebar();



// La izquierda

var tlegend = false;
var tpicker = false;
var trace = false;
var t_graph = false;

var punto = {};

var trazado = [];
var puntos = [];
// var trazadoLine = L.polyline(trazado, {
//     color: 'blue'
// });
// map.on('click', getFeatureInfo);
// var markerIcon = L.icon({
//     iconUrl: 'static/images/marker.png',
//     iconSize: [20, 20]
// });

// Control de botones
$("#trigger").click(function () {
    if (tlegend) {
        $("#slider").slideReveal("hide");
        tlegend = false;
        document.getElementById("select_grafica").style.display = "none";
        document.getElementById("ctd_grafica").innerHTML = "";
    } else {
        $("#picker").slideReveal("hide");
        $("#tracer").slideReveal("hide");
        $("#slider_graph").slideReveal("hide");
        $("#slider").slideReveal("show");
        tlegend = true;
        tpicker = false;
        trace = false;
        t_graph = false;
        map.removeLayer(punto);
        $('#table').bootstrapTable('removeAll');
        $('#coor').html('');
    }
});

// CONTROL BOTON DE LA GRÁFICA
$("#graph").click(function () {
    if (t_graph) {
        $("#slider_graph").slideReveal("hide");
        t_graph = false;
        document.getElementById("select_grafica").style.display = "none";
        document.getElementById("ctd_grafica").innerHTML = "";
    } else {
        $("#picker").slideReveal("hide");
        $("#tracer").slideReveal("hide");
        $("#slider").slideReveal("hide");
        $("#slider_graph").slideReveal("show");
        tlegend = false;
        tpicker = false;
        trace = false;
        t_graph = true;
        map.removeLayer(punto);
        $('#table').bootstrapTable('removeAll');
        $('#coor').html('');
    }
});

$(document).ready(function () {
    $('#table').bootstrapTable();
    $('#tableTrace').bootstrapTable();
    $("#slider").show();
    $("#picker").show();
    $("#tracer").show();
    $("#slider_graph").show();

    $("#slider").slideReveal({
        position: "right",
        width: 317,
        speed: 400
    });
    $("#picker").slideReveal({
        position: "right",
        width: 317,
        speed: 400
    });
    $("#tracer").slideReveal({
        position: "right",
        width: 317,
        speed: 400
    });
    $("#slider_graph").slideReveal({
        position: "right",
        width: 317,
        speed: 400
    });

});

function iniciarControles(capa) {
    var html = '<div class="panel panel-info" style="margin-top:1em"><div class="panel-heading">';
    html += capa.nombre;
    html += '</div><div class="panel-body">';
    html += '<p>' + capa.texto + '</p>'
    html += '<div class="img-scale" style="height: 10px;"><img class="rotate90" src="';
    html += homeUrl + 'wms/' + capa.l[0] + '?REQUEST=GetLegendGraphic&COLORBARONLY=true&WIDTH=15&HEIGHT=280&PALETTE=' + capa.p.palete + '&NUMCOLORBANDS=' + capa.p.NUMCOLORBANDS;
    html += '" alt=""></div><ul class="nav nav-pills ter"><li class="text-left">';
    html += capa.min;
    html += '</li><li class="text-center">';
    html += capa.center;
    html += '</li><li class="text-right">';
    html += capa.max;
    html += '</li></ul><div class="input-group"><div class="input-group-addon">Historico</div><select class="form-control" name="historial" id="';
    html += capa.sp;
    html += '">';
    for (var i = 0; i < capa.l.length; i++) {
        html += "<option>" + capa.l[i] + "</option>";
    }
    html += '</select></div></div></div></div>';
    $("#" + capa.legendiv).html(html);
    $("#" + capa.legendiv).on('change', "#" + capa.sp, function () {
        // map.removeLayer(capa.wms);
        // capa.wms = L.tileLayer.wms(homeUrl + 'wms/' + $(this).val() + '?', capa.p);
        // capa.wms.addTo(map);
        // tierra.addTo(map);
    });
}

function descargarTrace(evt) {
    let csvContent = "";
    for (v in puntos[puntos.length - 1]) {
        csvContent += v + ";"
    }
    csvContent += "\r\n";
    puntos.forEach(function (r) {
        let row = "";
        for (v in puntos[puntos.length - 1]) {
            row += r[v] + ";"
        }
        csvContent += row + "\r\n";
    });
    // console.log(csvContent);

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
    element.setAttribute('download', "export.csv");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}