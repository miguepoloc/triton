//var homeUrl='../thredds/';
var homeUrl = 'http://192.168.3.173:8080/thredds/';

var map = L.map('map', {
    zoomControl: false,
    attributionControl: false
}).setView([16, -75], 6);
var tlegend = false;
var tpicker = false;
var trace = false;

var punto = {};

var trazado = [];
var puntos = [];
var trazadoLine = L.polyline(trazado, {
    color: 'blue'
});
L.esri.basemapLayer("Gray").addTo(map);
var p1 = L.point(28, -106),
    p2 = L.point(-11, 28),
    bounds = L.bounds(p1, p2);

map.on('click', getFeatureInfo);
map.setMinZoom(4);
map.setMaxZoom(12);
map.setMaxBounds(bounds);

var markerIcon = L.icon({
    iconUrl: 'static/images/marker.png',
    iconSize: [20, 20]
});

var variables = [{
        wms: null,
        v: true,
        l: [],
        b: 'bSLAh',
        variable: 'SLA-H',
        nombre: 'Nivel del mar',
        sp: "spSLAh",
        legendiv: "lSLAh",
        max: '0.5',
        min: '-0.5',
        center: '0',
        unidades: 'm',
        p: {
            layers: 'sla',
            format: 'image/png',
            COLORSCALERANGE: '-0.5,0.5',
            TRANSPARENT: true,
            STYLES: 'boxfill/redblue',
            NUMCOLORBANDS: 50,
            palete: "redblue"
        },
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
        texto: "Predicciones de la altura, direcci&oacute;n y periodo de ola, generadas cada 6 horas (0, 6, 12 y 18H) por el modelo WAVEWATCH III y remuestreadas a una resoluci&oacute;n espacial de 1/10&deg;."
    }
];

var tierra = L.esri.featureLayer({
    url: "http://gis.invemar.org.co/arcgis/rest/services/Conectividad/ConectividadBase/MapServer/0/"
});

tierra.setStyle({
    color: "#C7C7C7",
    fillColor: "#EFEFEF",
    fillOpacity: 1.0,
    weight: 1
});

tierra.addTo(map);

for (var i = 0; i < variables.length; i++) {
    iniciarControl(variables[i]);
}

$("#trigger").click(function () {
    if (tlegend) {
        $("#slider").slideReveal("hide");
        tlegend = false;
    } else {
        $("#picker").slideReveal("hide");
        $("#tracer").slideReveal("hide");
        $("#slider").slideReveal("show");
        tlegend = true;
        tpicker = false;
        trace = false;
        map.removeLayer(punto);
        $('#table').bootstrapTable('removeAll');
        $('#coor').html('');
    }
});

$("#tpicker").click(function () {
    if (tpicker) {
        $("#picker").slideReveal("hide");
        tpicker = false;
        map.removeLayer(punto);
        $('#table').bootstrapTable('removeAll');
        $('#coor').html('');
    } else {
        $("#slider").slideReveal("hide");
        $("#tracer").slideReveal("hide");
        $("#picker").slideReveal("show");
        tpicker = true;
        tlegend = false;
        trace = false;
    }
});

$("#trace").click(function () {
    if (trace) {
        $("#tracer").slideReveal("hide");
        tpicker = false;
        tlegend = false;
        trace = false;
    } else {
        $("#slider").slideReveal("hide");
        $("#picker").slideReveal("hide");
        $("#tracer").slideReveal("show");
        tpicker = false;
        tlegend = false;
        trace = true;
    }
    //console.log("select tracer");
});

$(document).ready(function () {
    $('#table').bootstrapTable();
    $('#tableTrace').bootstrapTable();
    $("#slider").show();
    $("#picker").show();
    $("#tracer").show();
    sidebar: $('#sidebar').sidebar();
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

});

function llenarlista(capa) {
    $.get(homeUrl + "catalog/" + capa.variable + "/latest.xml", function (data) {
        try {
            capa.l.push(data.getElementsByName("Latest " + capa.variable)[0].attributes.urlPath.nodeValue);
        } catch (err) {
            capa.l.push(data.getElementsByTagName("dataset")[0].attributes.urlPath.nodeValue);
        }
        capa.wms = L.tileLayer.wms(homeUrl + 'wms/' + capa.l[0] + '?', capa.p);
        console.log(capa.wms);
        if (capa.v) {
            capa.wms.addTo(map);
           // console.log(capa.wms.addTo(map));
            tierra.addTo(map);
            $('#c' + capa.b).bootstrapToggle('on');
            $("#" + capa.legendiv).show();
        }
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
            iniciarControles(capa);
        });
    });
};

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
        map.removeLayer(capa.wms);
        capa.wms = L.tileLayer.wms(homeUrl + 'wms/' + $(this).val() + '?', capa.p);
        capa.wms.addTo(map);
        tierra.addTo(map);
    });
}

function iniciarControl(capa) {
    llenarlista(capa);
    $("#c" + capa.b).change(function () {
        if (!$(this).is(":checked")) {
            map.removeLayer(capa.wms);
            capa.v = false;
            $("#" + capa.legendiv).hide();
        } else {
            capa.wms.addTo(map);
            tierra.addTo(map);
            capa.v = true;
            $("#" + capa.legendiv).show();
        }
    });
};

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

function getFeatureInfo(evt) {
    if (tpicker) {
        map.removeLayer(punto);
        punto = L.marker(evt.latlng);
       // console.log(evt.latlng);
        punto.addTo(map);
        $('#coor').html('<span class="glyphicon glyphicon-map-marker"></span>(Lat,Lng):' + evt.latlng.lat.toFixed(4) + ',' + evt.latlng.lng.toFixed(4) + '')
        $('#table').bootstrapTable('removeAll');
        for (var i = 0; i < variables.length; i++) {
            getInfo('#table', variables[i], evt.latlng);
        }
    }
    if (trace) {
        map.removeLayer(trazadoLine);
        for (var i = 0; i < trazado.length; i++) {
            map.removeLayer(trazado[i]);
        }
        $('#tableTrace').bootstrapTable('removeAll');
        //console.log(evt.latlng);
        trazado.push(L.marker(evt.latlng, {
            icon: markerIcon
        }));
        trazadoLine.addLatLng(evt.latlng);
        var t = 0;
        puntos = []
        $('#traceVar').empty();;
        for (var i = 0; i < trazado.length; i++) {
            trazado[i].addTo(map);
            var p = {
                punto: i + 1,
                lon: trazado[i].getLatLng().lat.toFixed(3),
                lat: trazado[i].getLatLng().lng.toFixed(3),
            }
            if (i > 0) {
                p.dist = map.distance(trazado[i - 1].getLatLng(), trazado[i].getLatLng());
                t += p.dist;
                p.total = t;
                p.dist = (p.dist / 1000).toFixed(1);
                p.total = (p.total / 1000).toFixed(1);
            }

            var ht = '<table class="table" data-toggle="table" id="tv' + i + '"> ';
            ht += '<caption><span class="glyphicon glyphicon-map-marker"></span>Punto ' + (i + 1) + ',lat:' + p.lat + ',lon:' + p.lon + '</caption>';
            ht += '<thead><tr>';
            ht += '<th data-field="variable">Variable</th>';
            ht += '<th data-field="valor">Valor</th>';
            ht += '<th data-field="unidades">Unidades</th>';
            ht += '</tr></thead></table>';

            $('#traceVar').append(ht);
            $('#tv' + i).bootstrapTable();
            $('#tableTrace').bootstrapTable('append', p);
            $('#table').bootstrapTable('removeAll');
            for (var j = 0; j < variables.length; j++) {
                getInfo('#tv' + i, variables[j], trazado[i].getLatLng(), p);
            }
            puntos.push(p)
        }
        trazadoLine.addTo(map);
    }
}

function clearTrace() {
    map.removeLayer(trazadoLine);
    for (var i = 0; i < trazado.length; i++) {
        map.removeLayer(trazado[i]);
    }
    trazado = [];
    trazadoLine = L.polyline(trazado, {
        color: 'blue'
    });
    $('#tableTrace').bootstrapTable('removeAll');
    $('#traceVar').empty();
    puntos = [];
}

function getInfo(tabla, capa, latlng, p) {
    var v = {};
    if (map.hasLayer(capa.wms)) {
        var url = getFeatureInfoUrl(latlng, capa.wms);
        //var capa=variables[i];
        $.get(url, function (data) {
            v = {
                variable: capa.nombre,
                valor: parseFloat(data.getElementsByTagName("value")[0].childNodes[0].data, 2).toFixed(2),
                unidades: capa.unidades
            };
            if (p) {
                p[capa.nombre] = v.valor;
                p[capa.nombre] = v.valor;
            }
            $(tabla).bootstrapTable('append', v);
        });
    }
    return v;
}

function getFeatureInfoUrl(latlng, wms) {
    var point = wms._map.latLngToContainerPoint(latlng, wms._map.getZoom()),
        size = wms._map.getSize(),
        params = {
            request: 'GetFeatureInfo',
            service: 'WMS',
            srs: 'EPSG:4326',
            styles: wms.wmsParams.styles,
            transparent: wms.wmsParams.transparent,
            version: wms.wmsParams.version,
            format: wms.wmsParams.format,
            bbox: wms._map.getBounds().toBBoxString(),
            height: size.y,
            width: size.x,
            layers: wms.wmsParams.layers,
            query_layers: wms.wmsParams.layers,
            info_format: 'text/xml'
        };
    params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
    params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;
    return wms._url + L.Util.getParamString(params, wms._url, true);
}