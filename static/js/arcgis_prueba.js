// URL De datos traidos de Thredds
var homeUrl = 'http://192.168.3.173:8080/thredds/';

// Variables que se toman para configurar los mapas
variables = [{
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
    p: 0,
    // id de la capa
    l_id: null,
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
    p: 1,
    l_id: null,
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
    p: 2,
    l_id: null,
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
    p: 3,
    l_id: null,
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
    p: 4,
    l_id: null,
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
    p: 5,
    l_id: null,
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
    p: 6,
    l_id: null,
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
    p: 7,
    l_id: null,
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
    p: 8,
    l_id: null,
    texto: "Predicciones de la altura, direcci&oacute;n y periodo de ola, generadas cada 6 horas (0, 6, 12 y 18H) por el modelo WAVEWATCH III y remuestreadas a una resoluci&oacute;n espacial de 1/10&deg;."
  }
];

function iniciarControl(capa) {
  // Si el elemento con id "#c capa.b" cambia
  $("#c" + capa.b).change(function () {
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
      map.addLayer(Mapa(capa));
      let idx = map.layerIds;
      capa.l_id = idx[idx.length-1];
      // Cambia el estado de visibilidad a true
      capa.v = true;
      // Deja visible el elemento "#capa.legendiv"
      $("#" + capa.legendiv).show();

    }
  });
};

function llenarlista(capa) {
  // Obtiene los datos de la siguiente URL
  $.get(homeUrl + "catalog/" + capa.variable + "/latest.xml", function (data) {
    // Trata de obtener los elementos que tengan el nombre "Latest capa.variable"
    // Selecciona sólo el último dato y de él obtiene el atributo urlPath
    // Esta es la ubicación donde se encuentran las imágenes WMS
    // Guardas las URL en capa.l
    try {
      capa.l.push(data.getElementsByName("Latest " + capa.variable)[0].attributes.urlPath.nodeValue);
    } catch (err) {
      // En caso de que se presente un error, obtiene los elementos con nombre "dataset"
      // Y luego se hace lo mismo de arriba
      capa.l.push(data.getElementsByTagName("dataset")[0].attributes.urlPath.nodeValue);
    }
    // L.TileLayer.WMS, proporciona la URL WMS base y especifica las opciones de WMS que se necesite (En leaflet)
    // Leaflet NO comprende los documentos GetCapabilities de WMS. En su lugar, debe crear una capa L.TileLayer.WMS, proporcionar la URL WMS base y especificar las opciones de WMS que necesite.
    // Guarda todos los datos de las capas en capa.wms
    capa.wms = homeUrl + 'wms/' + capa.l[0] + "?";
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

// Lista las variables y su histórico, así como la gráfica de leyenda
// Controla el cambio de mapa según si historial

function iniciarControles1(capa) {
  // Detalles de la capa activa como su NOMBRE y CARACTERÍSTICAS
  var html = '<div class="panel panel-info" style="margin-top:1em"><div class="panel-heading">';
  html += capa.nombre;
  html += '</div><div class="panel-body">';
  html += '<p>' + capa.texto + '</p>'
  // Gráfica de leyenda de la capa
  html += '<div class="img-scale" style="height: 10px;"><img class="rotate90" src="';
  html += homeUrl + 'wms/' + capa.l[0] + '?REQUEST=GetLegendGraphic&COLORBARONLY=true&WIDTH=15&HEIGHT=280&PALETTE=' + capa.p.palete + '&NUMCOLORBANDS=' + capa.p.NUMCOLORBANDS;
  // Valores mínimos y máximos de las variaciones en la capa
  html += '" alt=""></div><ul class="nav nav-pills ter"><li class="text-left">';
  html += capa.min;
  html += '</li><li class="text-center">';
  html += capa.center;
  html += '</li><li class="text-right">';
  html += capa.max;
  html += '</li></ul><div class="input-group"><div class="input-group-addon">Historico</div><select class="form-control" name="historial" id="';
  html += capa.sp;
  html += '">';
  // Recorre la cantidad de datos que haya en la lista l (URL complemento de ubicación de los datos históricos) 
  for (var i = 0; i < capa.l.length; i++) {
    html += "<option>" + capa.l[i] + "</option>";
  }
  html += '</select></div></div></div></div>';
  // Anexa el html generado anteriormente en el elemento con id = capa.legendiv
  $("#" + capa.legendiv).html(html);
  // En caso de que se seleccione otra fecha y el elemento capa.legendiv cambie
  $("#" + capa.legendiv).on('change', "#" + capa.sp, function () {
    // Se borra la capa que se está mostrando
    map.removeLayer(capa.wms);
    // Se anexa la nueva capa seleccionada
    capa.wms = L.tileLayer.wms(homeUrl + 'wms/' + $(this).val() + '?', capa.p);
    capa.wms.addTo(map);
    // Se anexa la tierra (Por el error de que se superponen en la tierra los datos oceanográficos)
    tierra.addTo(map);
  });
}

function iniciarControles(capa) {
  // Detalles de la capa activa como su NOMBRE y CARACTERÍSTICAS
  var html = '<div class="panel panel-info" style="margin-top:1em"><div class="panel-heading">';
  html += capa.nombre;
  html += '</div><div class="panel-body">';
  html += '<p>' + capa.texto + '</p>'
  // Gráfica de leyenda de la capa
  html += '<div class="img-scale" style="height: 10px;"><img class="rotate90" src="';
  html += homeUrl + 'wms/' + capa.l[0] + '?REQUEST=GetLegendGraphic&COLORBARONLY=true&WIDTH=15&HEIGHT=280&PALETTE=' + capa.p.palete + '&NUMCOLORBANDS=' + capa.p.NUMCOLORBANDS;
  // Valores mínimos y máximos de las variaciones en la capa
  html += '" alt=""></div><ul class="nav nav-pills ter"><li class="text-left">';
  html += capa.min;
  html += '</li><li class="text-center">';
  html += capa.center;
  html += '</li><li class="text-right">';
  html += capa.max;
  html += '</li></ul><div class="input-group"><div class="input-group-addon">Historico</div><select class="form-control" name="historial" id="';
  html += capa.sp;
  html += '">';
  // Recorre la cantidad de datos que haya en la lista l (URL complemento de ubicación de los datos históricos) 
  for (var i = 0; i < capa.l.length; i++) {
    html += "<option>" + capa.l[i] + "</option>";
  }
  html += '</select></div></div></div></div>';
  // Anexa el html generado anteriormente en el elemento con id = capa.legendiv
  $("#" + capa.legendiv).html(html);
  // En caso de que se seleccione otra fecha y el elemento capa.legendiv cambie
  $("#" + capa.legendiv).on('change', "#" + capa.sp, function () {
    // Se borra la capa que se está mostrando
    map.removeLayer(capa.wms);
    // Se anexa la nueva capa seleccionada
    capa.wms = L.tileLayer.wms(homeUrl + 'wms/' + $(this).val() + '?', capa.p);
    capa.wms.addTo(map);
    // Se anexa la tierra (Por el error de que se superponen en la tierra los datos oceanográficos)
    tierra.addTo(map);
  });
}

/* ------------------------------------------------------------------- GRÁFICA ------------------------------------------------------------------------ */
dojo.require("esri.map");

var parametros;
var capa_actual;
dojo.ready(function () {
  dojo.declare("Mapa", esri.layers.DynamicMapServiceLayer, {
    constructor: function (capax) {
      this.initialExtent = this.fullExtent = new esri.geometry.Extent({
        "xmin": -124.71430969199997,
        "ymin": -33.741115570999966,
        "xmax": 179.77593994100005,
        "ymax": 53.01194000300006,
        "spatialReference": {
          "wkid": 4269
        }
      });
      this.spatialReference = new esri.SpatialReference({
        wkid: 4269
      });

      this.loaded = true;
      this.onLoad(this);
      capa_actual = capax;
    },
    getImageUrl: function (extent, width, height, callback) {
      console.log(capa_actual.wms);

      parametros = [{
          //0
          COLORSCALERANGE: "-0.5,0.5",
          NUMCOLORBANDS: '50',
          STYLES: "boxfill/redblue",
          TRANSPARENT: true,
          format: "image/png",
          height: 256,
          width: 256,
          layers: "sla",
          palete: "redblue",
          request: "GetMap",
          service: "WMS",
          srs: "EPSG:3857",
          version: "1.1.1",
          bbox: extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax,
        },
        {
          //1
          layers: 'surface_geostrophic_sea_water_velocity_assuming_sea_level_for_geoid',
          COLORSCALERANGE: '0,1',
          STYLES: 'linevec/ferret',
          NUMCOLORBANDS: 50,
          format: 'image/png',
          TRANSPARENT: true,
          palete: "ferret",
          height: 256,
          width: 256,
          request: "GetMap",
          service: "WMS",
          srs: "EPSG:3857",
          version: "1.1.1",
          bbox: extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax,
        },
        {
          //2
          layers: 'surface_geostrophic_sea_water_velocity_assuming_sea_level_for_geoid',
          COLORSCALERANGE: '0,1',
          STYLES: 'vector/ferret',
          NUMCOLORBANDS: 50,
          format: 'image/png',
          TRANSPARENT: true,
          palete: "ferret",
          height: 256,
          width: 256,
          request: "GetMap",
          service: "WMS",
          srs: "EPSG:3857",
          version: "1.1.1",
        },
        {
          //3
          layers: 'chl',
          format: 'image/png',
          TRANSPARENT: true,
          COLORSCALERANGE: '0.01,10',
          LOGSCALE: true,
          NUMCOLORBANDS: 50,
          palete: "rainbow",
          height: 256,
          width: 256,
          request: "GetMap",
          service: "WMS",
          srs: "EPSG:3857",
          version: "1.1.1",
          bbox: extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax,
        },
        {
          //4
          layers: 'sst',
          format: 'image/png',
          TRANSPARENT: true,
          COLORSCALERANGE: '23,31',
          NUMCOLORBANDS: '50',
          palete: "rainbow",
          height: 256,
          width: 256,
          request: "GetMap",
          service: "WMS",
          srs: "EPSG:3857",
          version: "1.1.1",
          bbox: extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax,
        },
        {
          //5
          layers: 'wind',
          STYLES: 'barb/occam_pastel-30',
          format: 'image/png',
          TRANSPARENT: true,
          NUMCOLORBANDS: '50',
          COLORSCALERANGE: '0,15',
          palete: "occam_pastel-30",
          height: 256,
          width: 256,
          request: "GetMap",
          service: "WMS",
          srs: "EPSG:3857",
          version: "1.1.1",
          bbox: extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax,
        },
        {
          //6
          layers: 'wind',
          STYLES: 'vector/occam_pastel-30',
          format: 'image/png',
          TRANSPARENT: true,
          NUMCOLORBANDS: '50',
          COLORSCALERANGE: '0,15',
          palete: "occam_pastel-30",
          height: 256,
          width: 256,
          request: "GetMap",
          service: "WMS",
          srs: "EPSG:3857",
          version: "1.1.1",
          bbox: extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax,
        },
        {
          //7
          layers: 'dir',
          COLORSCALERANGE: '0,5',
          STYLES: 'vector/occam_pastel-30',
          NUMCOLORBANDS: '50',
          format: 'image/png',
          TRANSPARENT: true,
          palete: "occam_pastel-30",
          height: 256,
          width: 256,
          request: "GetMap",
          service: "WMS",
          srs: "EPSG:3857",
          version: "1.1.1",
          bbox: extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax,
        },
        {
          //8
          layers: 'dir',
          COLORSCALERANGE: '0,5',
          STYLES: 'linevec/occam_pastel-30',
          NUMCOLORBANDS: '50',
          format: 'image/png',
          TRANSPARENT: true,
          palete: "occam_pastel-30",
          height: 256,
          width: 256,
          request: "GetMap",
          service: "WMS",
          srs: "EPSG:3857",
          version: "1.1.1",
          bbox: extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax,
        },
      ];
      callback(capa_actual.wms + dojo.objectToQuery(parametros[capa_actual.p]));
    }

  });
});


function init() {
  map = new esri.Map("map", {
    basemap: "streets",
    center: [-75, 16],
    zoom: 6,
    slider: false
  });
  // map.addLayer(Mapa());
  // Recorre toda la lista de variables para hacer los controles

  for (var i = 0; i < variables.length; i++) {
    iniciarControl(variables[i]);
    llenarlista(variables[i]);
    iniciarControles(variables[i]);
  }
}

dojo.ready(init);

/* -------------------------------------------------------------------END GRÁFICA ------------------------------------------------------------------------ */

//Control de panel
var tlegend = false;
var tpicker = false;
var trace = false;

var punto = {};

var trazado = [];
var puntos = [];

// Control de la barra lateral


// $("#trigger").click(function () {
//   if (tlegend) {
//     $("#slider").slideReveal("hide");
//     tlegend = false;
//   } else {
//     $("#picker").slideReveal("hide");
//     $("#tracer").slideReveal("hide");
//     $("#slider").slideReveal("show");
//     tlegend = true;
//     tpicker = false;
//     trace = false;
//     map.removeLayer(punto);
//     $('#table').bootstrapTable('removeAll');
//     $('#coor').html('');
//   }
// });

// $("#tpicker").click(function () {
//   if (tpicker) {
//     $("#picker").slideReveal("hide");
//     tpicker = false;
//     map.removeLayer(punto);
//     $('#table').bootstrapTable('removeAll');
//     $('#coor').html('');
//   } else {
//     $("#slider").slideReveal("hide");
//     $("#tracer").slideReveal("hide");
//     $("#picker").slideReveal("show");
//     tpicker = true;
//     tlegend = false;
//     trace = false;
//   }
// });

// $("#trace").click(function () {
//   if (trace) {
//     $("#tracer").slideReveal("hide");
//     tpicker = false;
//     tlegend = false;
//     trace = false;
//   } else {
//     $("#slider").slideReveal("hide");
//     $("#picker").slideReveal("hide");
//     $("#tracer").slideReveal("show");
//     tpicker = false;
//     tlegend = false;
//     trace = true;
//   }
//   console.log("select tracer");
// });

// $(document).ready(function () {
//   $('#table').bootstrapTable();
//   $('#tableTrace').bootstrapTable();
//   $("#slider").show();
//   $("#picker").show();
//   $("#tracer").show();
//   sidebar: $('#sidebar').sidebar();
//   $("#slider").slideReveal({
//     position: "right",
//     width: 317,
//     speed: 100
//   });
//   $("#picker").slideReveal({
//     position: "right",
//     width: 317,
//     speed: 100
//   });
//   $("#tracer").slideReveal({
//     position: "right",
//     width: 317,
//     speed: 100
//   });

// });

/** ESTE ES EL QUE PERMITE EL DESPLAZAMIENTO */
sidebar: $('#sidebar').sidebar();

// $(document).ready(function () {
//   $("#slider").slideReveal({
//     trigger: $("#trigger"),
//     position: "right",
//     width: 317,
//     speed: 700
//   });
//   $("#picker").slideReveal({
//     trigger: $("#tpicker"),
//     position: "right",
//     width: 317,
//     speed: 700
//   });
// });

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
  console.log(csvContent);

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
  element.setAttribute('download', "export.csv");
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// function getFeatureInfo(evt) {
//   if (tpicker) {
//     map.removeLayer(punto);
//     punto = L.marker(evt.latlng);
//     console.log(evt.latlng);
//     punto.addTo(map);
//     $('#coor').html('<span class="glyphicon glyphicon-map-marker"></span>(Lat,Lng):' + evt.latlng.lat.toFixed(4) + ',' + evt.latlng.lng.toFixed(4) + '')
//     $('#table').bootstrapTable('removeAll');
//     for (var i = 0; i < variables.length; i++) {
//       getInfo('#table', variables[i], evt.latlng);
//     }
//   }
//   if (trace) {
//     map.removeLayer(trazadoLine);
//     for (var i = 0; i < trazado.length; i++) {
//       map.removeLayer(trazado[i]);
//     }
//     $('#tableTrace').bootstrapTable('removeAll');
//     //console.log(evt.latlng);
//     trazado.push(L.marker(evt.latlng, {
//       icon: markerIcon
//     }));
//     trazadoLine.addLatLng(evt.latlng);
//     var t = 0;
//     puntos = []
//     $('#traceVar').empty();;
//     for (var i = 0; i < trazado.length; i++) {
//       trazado[i].addTo(map);
//       var p = {
//         punto: i + 1,
//         lon: trazado[i].getLatLng().lat.toFixed(3),
//         lat: trazado[i].getLatLng().lng.toFixed(3),
//       }
//       if (i > 0) {
//         p.dist = map.distance(trazado[i - 1].getLatLng(), trazado[i].getLatLng());
//         t += p.dist;
//         p.total = t;
//         p.dist = (p.dist / 1000).toFixed(1);
//         p.total = (p.total / 1000).toFixed(1);
//       }

//       var ht = '<table class="table" data-toggle="table" id="tv' + i + '"> ';
//       ht += '<caption><span class="glyphicon glyphicon-map-marker"></span>Punto ' + (i + 1) + ',lat:' + p.lat + ',lon:' + p.lon + '</caption>';
//       ht += '<thead><tr>';
//       ht += '<th data-field="variable">Variable</th>';
//       ht += '<th data-field="valor">Valor</th>';
//       ht += '<th data-field="unidades">Unidades</th>';
//       ht += '</tr></thead></table>';

//       $('#traceVar').append(ht);
//       $('#tv' + i).bootstrapTable();
//       $('#tableTrace').bootstrapTable('append', p);
//       $('#table').bootstrapTable('removeAll');
//       for (var j = 0; j < variables.length; j++) {
//         getInfo('#tv' + i, variables[j], trazado[i].getLatLng(), p);
//       }
//       puntos.push(p)
//     }
//     trazadoLine.addTo(map);
//   }
// }

// function clearTrace() {
//   map.removeLayer(trazadoLine);
//   for (var i = 0; i < trazado.length; i++) {
//     map.removeLayer(trazado[i]);
//   }
//   trazado = [];
//   trazadoLine = L.polyline(trazado, {
//     color: 'blue'
//   });
//   $('#tableTrace').bootstrapTable('removeAll');
//   $('#traceVar').empty();
//   puntos = [];
// }

// function getInfo(tabla, capa, latlng, p) {
//   var v = {};
//   if (map.hasLayer(capa.wms)) {
//     var url = getFeatureInfoUrl(latlng, capa.wms);
//     //var capa=variables[i];
//     $.get(url, function (data) {
//       v = {
//         variable: capa.nombre,
//         valor: parseFloat(data.getElementsByTagName("value")[0].childNodes[0].data, 2).toFixed(2),
//         unidades: capa.unidades
//       };
//       if (p) {
//         p[capa.nombre] = v.valor;
//         p[capa.nombre] = v.valor;
//       }
//       $(tabla).bootstrapTable('append', v);
//     });
//   }
//   return v;
// }

// function getFeatureInfoUrl(latlng, wms) {
//   var point = wms._map.latLngToContainerPoint(latlng, wms._map.getZoom()),
//     size = wms._map.getSize(),
//     params = {
//       request: 'GetFeatureInfo',
//       service: 'WMS',
//       srs: 'EPSG:4326',
//       styles: wms.wmsParams.styles,
//       transparent: wms.wmsParams.transparent,
//       version: wms.wmsParams.version,
//       format: wms.wmsParams.format,
//       bbox: wms._map.getBounds().toBBoxString(),
//       height: size.y,
//       width: size.x,
//       layers: wms.wmsParams.layers,
//       query_layers: wms.wmsParams.layers,
//       info_format: 'text/xml'
//     };
//   params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
//   params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;
//   return wms._url + L.Util.getParamString(params, wms._url, true);
// }