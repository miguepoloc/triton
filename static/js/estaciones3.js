function tooltipFormatter(tooltip) {
    // tooltip trae los puntos y sus valores y otros parámetros
    var index = tooltip.points[0].point.index,
        ret = '<small>' + Highcharts.dateFormat('%A, %b %e, %H:%M', tooltip.x) + '</small><br>';
    ret += '<table>';
    var v = this.v;
    // Add all series
    Highcharts.each(tooltip.points, function (point) {
        var series = point.series;
        ret += '<tr><td><span style="color:' + series.color + '">\u25CF</span> ' + series.name +
            ':  </td><td style="white-space:nowrap">' + Highcharts.pick(point.point.value, point.y)
            .toFixed(2) +
            series.userOptions.valueSuffix + '</td></tr>';
    });
    ret += '</table>';
    return ret;
}


// Objeto que almacena las variables
var objeto_variable = new Object();
// Objeto que almacena las unidades
var objeto_unidades = new Object();
var objeto_fecha = new Object();
var objeto_unix = new Object();
var objeto_tiempo_variable = new Object();
var vector_fecha = [];
var vector_variable_des = [];
var vector_unidad_des = [];

function control(datos) {
    console.log(datos);
    // Se recorren todas las posiciones del vector de datos
    for (i = 0; i < datos.length; i++) {
        // Guarda el id de la muestra de la posicón i del vector
        fecha_registro = String(datos[i]["fecha_horaregistro"]);
        // En esta parte se va a llenar el vector con los identificadores de muestra
        // Para saber cuántos muestras se tomaron y relacionar los datos
        // A partir de este identificador
        // Si aún no se ha añadido el código de muestra de la posición i
        // En el vector de muestra
        if (vector_fecha.includes(fecha_registro) == false) {
            // Se añade el id de muestra
            vector_fecha.push(fecha_registro);
        }
        // Se realiza el mismo proceso anterior pero con la descripción de la variable
        variable_des = String(datos[i]["parametro_des"]);
        if (vector_variable_des.includes(variable_des) == false) {
            vector_variable_des.push(variable_des);
            vector_unidad_des.push(datos[i]["unidad_medida_d"]);
        }
    }

    // Para la lista 
    function listas(ind) {
        list = document.getElementById("select_grafica" + ind);
        // As long as <ul> has a child node, remove it
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

        // Para añadir el elemento de seleccione una gráfica    
        z = document.createElement("option");
        t = document.createTextNode("Seleccione una Gráfica");
        z.appendChild(t);
        z.setAttribute("value", "nada");
        list.appendChild(z);
        // Se recorren todas las posiciones del vector que contiene a las variables
        for (i = 0; i < vector_variable_des.length; i++) {
            // Se crea un elemento tipo option
            let z = document.createElement("option");
            // Al cual se le asigna el valor de la variable
            z.setAttribute("value", vector_variable_des[i]);
            // Y se le asigna al valor a mostrar el valor de variable_des
            let t = document.createTextNode(vector_variable_des[i]);
            z.appendChild(t);
            // Luego se añade al html
            document.getElementById("select_grafica" + ind).appendChild(z);
            // Se añade un atributo al objeto de las variables que será una lista vacía
            // que tendrá como nombre la variable de la posición i
            objeto_variable[vector_variable_des[i]] = [];
            objeto_fecha[vector_variable_des[i]] = [];
            objeto_unix[vector_variable_des[i]] = [];
            objeto_tiempo_variable[vector_variable_des[i]] = [];

            // Se añade un atributo al objeto de las unidades que será la unidad
            // de la misma posición i que tendrá como nombre la variable de la posición i
            objeto_unidades[vector_variable_des[i]] = vector_unidad_des[i];
        }
    }

    listas(1);
    listas(2);

    // --------CREA EL VECTOR CON LOS DATOS-----------
    // Se recorren todas las posiciones del vector de datos de la lista CTD
    for (i = 0; i < datos.length; i++) {
        // Se recorren todas las posiciones del vector de datos de la lista de variables
        for (j = 0; j < vector_variable_des.length; j++) {
            // Si el la variable de la lista CTD en la posición i es la misma que
            // La variable del vector variable en la posición j
            if (datos[i].parametro_des == vector_variable_des[j]) {
                // el valor de la ctd en la posición i al objeto variable en su 
                // posición correspondiente a vector variable j
                // vector_fecha_falso.push(datos[i].fecha_horaregistro);
                // if (datos[i].fecha_horaregistro == vector_variable_des[j]) {
                // }
                objeto_variable[vector_variable_des[j]].push(parseFloat(datos[i].valor));
                objeto_fecha[vector_variable_des[j]].push(datos[i].fecha_horaregistro);
            }
        }
    }



    for (q = 0; q < vector_variable_des.length; q++) {
        for (i = 0; i < objeto_fecha[vector_variable_des[q]].length; i++) {
            anio = objeto_fecha[vector_variable_des[q]][i].slice(0, 4);
            mes = objeto_fecha[vector_variable_des[q]][i].slice(5, 7);
            mes = mes - 1;
            dia = objeto_fecha[vector_variable_des[q]][i].slice(8, 10);
            hora = objeto_fecha[vector_variable_des[q]][i].slice(11, 13);
            minuto = objeto_fecha[vector_variable_des[q]][i].slice(14, 16);
            objeto_unix[vector_variable_des[q]].push(Date.UTC(anio, mes, dia, hora, minuto));
        }
    }

    // Vectores de datos y tiempo
    for (q = 0; q < vector_variable_des.length; q++) {
        let m = objeto_fecha[vector_variable_des[q]].length;
        for (i = 0; i < m; i++) {
            objeto_tiempo_variable[vector_variable_des[q]].push([objeto_unix[vector_variable_des[q]][i], objeto_variable[vector_variable_des[q]][i]]);
        }
    }
}

var select1 = document.getElementById('select_grafica1');

var selectedOption1;
// Cuando el select cambie
select1.addEventListener('change',
    function () {
        selectedOption1 = this.options[select1.selectedIndex];
        // En este caso imprime el valor y el texto del select seleccionado
        console.log(selectedOption1.value);
        if (selectedOption1.value !== "nada") {
            grafica_select(1, selectedOption1.value)
        }
    }
);

var select2 = document.getElementById('select_grafica2');

var selectedOption2;
// Cuando el select cambie
select2.addEventListener('change',
    function () {
        selectedOption2 = this.options[select2.selectedIndex];
        // En este caso imprime el valor y el texto del select seleccionado
        if (selectedOption2.value !== "nada") {
            grafica_select(2, selectedOption2.value)
        }
    }
);
var serie_prueba = [0, 0];
var y_data = [0, 0];

function grafica_select(cual, selecto) {
    fecha_unix = [];

    for (i = 0; i < vector_fecha.length; i++) {
        anio = vector_fecha[i].slice(0, 4);
        mes = vector_fecha[i].slice(5, 7);
        mes = mes - 1;
        dia = vector_fecha[i].slice(8, 10);
        hora = vector_fecha[i].slice(11, 13);
        minuto = vector_fecha[i].slice(14, 16);
        fecha_unix.push(Date.UTC(anio, mes, dia, hora, minuto));
    }


    console.log(objeto_variable["Temperatura del aire"]);
    // Último dato de temperatura
    for (i = 0; i < objeto_variable["Temperatura del aire"].length; i++) {
        temp_mostrar = objeto_variable["Temperatura del aire"][i];
        if (isNaN(temp_mostrar) == false) {
            break;
        }
    }
    // Último dato de velocidad del viento
    for (i = 0; i < objeto_variable["Velocidad del viento"].length; i++) {
        velocidad_mostrar = objeto_variable["Velocidad del viento"][i];
        if (isNaN(velocidad_mostrar) == false) {
            break;
        }
    }

    // Datos instantánenos a mostrar
    // document.getElementById("nom_estacion").innerHTML = dato[0].des_estacion;
    document.getElementById("time").innerHTML = "Fecha: " + vector_fecha[0];
    document.getElementById("temp").innerHTML = temp_mostrar + " " + objeto_unidades["Temperatura del aire"];
    document.getElementById("wind").innerHTML = "Velocidad del viento: " + velocidad_mostrar + " " +
        objeto_unidades["Velocidad del viento"];


    // Combinación de velocidad y dirección del viento en un solo vector
    data_vientos = [];
    for (i = 0; i < objeto_variable["Velocidad del viento"].length; i++) {
        data_vientos.push([objeto_variable["Velocidad del viento"][i], objeto_variable["Dirección del viento"][i]])
    }

    console.log(cual);
    if (cual == 1) {
        if (selecto !== "nada") {
            serie_prueba[0] = {
                type: 'spline',
                name: selecto,
                data: objeto_tiempo_variable[selecto],
                yAxis: 0,
                connectNulls: true,
                valueSuffix: objeto_unidades[selecto],
                color: '#3ad0ff'
            }
            y_data[0] = {
                title: {
                    text: selecto,
                }
            }
        } else {
            serie_prueba[0] = 0;
            y_data[0] = "";
        }

    } else {
        if (selecto == "nada") {
            serie_prueba[1] = 0;
            y_data[1] = "";
        } else {
            serie_prueba[1] = {
                type: 'spline',
                name: selecto,
                data: objeto_tiempo_variable[selecto],
                yAxis: 1,
                connectNulls: true,
                valueSuffix: objeto_unidades[selecto],
                color: '#ff3e1f'
            }
            y_data[1] = {
                title: {
                    text: selecto
                },
                opposite: false,
            }
        }

    }

    console.log(serie_prueba);
    chart = new Highcharts.StockChart({
        chart: {
            renderTo: 'container',
            alignTicks: false,
            zoomType: 'x',
            plotBorderWidth: 1,
        },

        legend: {
            enabled: false
        },

        rangeSelector: {
            // Alinear la barra de selección de fecha
            //   x: -80,
            verticalAlign: 'top',
            buttonPosition: {
                align: 'right',
                x: -35
            },
            inputPosition: {
                align: 'left',
                //       x: 80
            },

            // Configruación de botones de selección de fecha
            allButtonsEnabled: true,
            buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1 día'
                },
                {
                    type: 'day',
                    count: 3,
                    text: '3 días'
                },
                {
                    type: 'week',
                    count: 1,
                    text: '1 semana'
                },
                {
                    type: 'all',
                    text: 'Todos'
                }
            ],
            buttonTheme: {
                width: 60
            },
            selected: 3
        },

        title: {
            text: 'Historico'
        },

        yAxis: y_data,

        xAxis: { //Axis principal
            minorTickInterval: 'auto',
            gridLineWidth: 1,
            gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
        },

        navigator: {
            enabled: false
        },
        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function () {
                return tooltipFormatter(this);
            }
        },

        series: serie_prueba
    });
}



function graficar(selecto) {
    //Variables
    fecha_unix = [];
    fecha = [];
    direccion = [];
    temperatura_agua = [];
    od = [];
    presion_atmosferica = [];
    radiacion = [];
    nivel = [];
    precipitacion = [];
    temperatura_aire = [];
    velocidad = [];
    conductividad = [];
    ph = [];
    humedad = [];
    salinidad = [];

    tiempo_direccion = [];
    tiempo_temperatura_agua = [];
    tiempo_od = [];
    tiempo_presion_atmosferica = [];
    tiempo_radiacion = [];
    tiempo_nivel = [];
    tiempo_precipitacion = [];
    tiempo_temperatura_aire = [];
    tiempo_velocidad = [];
    tiempo_conductividad = [];
    tiempo_ph = [];
    tiempo_humedad = [];
    tiempo_salinidad = [];
    //Vector de fecha
    // fecha = convertidor_fecha(vector_fecha, "fecha");
    for (i = 0; i < vector_fecha.length; i++) {
        anio = vector_fecha[i].slice(0, 4);
        mes = vector_fecha[i].slice(5, 7);
        mes = mes - 1;
        dia = vector_fecha[i].slice(8, 10);
        hora = vector_fecha[i].slice(11, 13);
        minuto = vector_fecha[i].slice(14, 16);
        fecha_unix.push(Date.UTC(anio, mes, dia, hora, minuto));
    }

    //Vectores de datos
    direccion = objeto_variable["Dirección del viento"];
    velocidad = objeto_variable["Velocidad del viento"];
    precipitacion = objeto_variable["Precipitación 10 minutos"];
    temperatura_aire = objeto_variable["Temperatura del aire"];
    humedad = objeto_variable["Humedad relativa"];
    presion_atmosferica = objeto_variable["Presión atmosferica"];
    // salinidad = convertidor(dato, "salinidad");
    // ph = convertidor(dato, "ph");
    // temperatura_agua = convertidor(dato, "temperatura_agua");
    // od = convertidor(dato, "od");
    // conductividad = convertidor(dato, "conductividad2");

    // Correcciones de valores
    for (i = 0; i < humedad.length; i++) {
        if (velocidad[i] > 100 || velocidad[i] < 0) {
            velocidad[i] = NaN;
        }
        if (precipitacion[i] < 0) {
            precipitacion[i] = NaN;
        }
        if (temperatura_aire[i] < 23 || temperatura_aire[i] > 32) {
            temperatura_aire[i] = NaN;
        }
        if (humedad[i] < 60 || humedad[i] > 100) {
            humedad[i] = NaN;
        }
        if (presion_atmosferica[i] < 1005 || presion_atmosferica[i] > 10020) {
            presion_atmosferica[i] = NaN;
        }
    }

    // Unidades de las variables
    u_direccion = objeto_unidades["Dirección del viento"];
    u_velocidad = objeto_unidades["Velocidad del viento"];
    u_precipitacion = objeto_unidades["Precipitación 10 minutos"];
    u_temperatura_aire = objeto_unidades["Temperatura del aire"];
    u_humedad = objeto_unidades["Humedad relativa"];
    u_presion_atmosferica = objeto_unidades["Presión atmosferica"];
    // u_salinidad = convertidor_u(dato, "u_salinidad");
    // u_ph = convertidor_u(dato, "u_ph");
    // u_temperatura_agua = convertidor_u(dato, "u_temperatura_agua");
    // u_od = convertidor_u(dato, "u_od");
    // u_conductividad = convertidor_u(dato, "u_conductividad2");

    // console.log(u_direccion + u_velocidad + u_precipitacion + u_temperatura_aire + u_humedad + u_presion_atmosferica + u_salinidad + u_ph + u_temperatura_agua + u_od + u_conductividad)
    // Último dato de temperatura
    for (i = (temperatura_aire.length - 1); i > -1; i--) {
        temp_mostrar = temperatura_aire[i];
        if (isNaN(temp_mostrar) == false) {
            break;
        }
    }
    // Último dato de velocidad del viento
    for (i = (velocidad.length - 1); i > -1; i--) {
        velocidad_mostrar = velocidad[i];
        if (isNaN(velocidad_mostrar) == false) {
            break;
        }
    }

    // Datos instantánenos a mostrar
    // document.getElementById("nom_estacion").innerHTML = dato[0].des_estacion;
    document.getElementById("time").innerHTML = "Fecha: " + vector_fecha[0];
    document.getElementById("temp").innerHTML = temp_mostrar + " " + u_temperatura_aire;
    document.getElementById("wind").innerHTML = "Velocidad del viento: " + velocidad_mostrar + " " +
        u_velocidad;


    // Combinación de velocidad y dirección del viento en un solo vector
    data_vientos = [];
    for (i = 0; i < velocidad.length; i++) {
        data_vientos.push([velocidad[i], direccion[i]])
    }



    for (i = 0; i < fecha_unix.length; i++) {
        tiempo_direccion.push([fecha_unix[i], direccion[i]]);
        tiempo_temperatura_agua.push([fecha_unix[i], temperatura_agua[i]]);
        tiempo_od.push([fecha_unix[i], od[i]]);
        tiempo_nivel.push([fecha_unix[i], nivel[i]]);
        tiempo_precipitacion.push([fecha_unix[i], precipitacion[i]]);
        tiempo_velocidad.push([fecha_unix[i], velocidad[i]]);
        tiempo_conductividad.push([fecha_unix[i], conductividad[i]]);
        tiempo_ph.push([fecha_unix[i], ph[i]]);
        tiempo_salinidad.push([fecha_unix[i], salinidad[i]]);
    }


    var seleccion = {
        tai_h: [objeto_tiempo_variable["Temperatura del aire"], objeto_tiempo_variable["Humedad relativa"], null, "Temperatura del aire", "Humedad", null, u_temperatura_aire, u_humedad, null],
        v_p: [objeto_tiempo_variable["Velocidad del viento"], objeto_tiempo_variable["Presión atmosferica"], null, "Velocidad del viento", "Presión atmosférica", null, u_velocidad, u_presion_atmosferica, null],
        r_l: [objeto_tiempo_variable["Precipitación 10 minutos"], null, null, "Precipitación", null, null, u_precipitacion, null, null],
        // s_tag: [tiempo_salinidad, tiempo_temperatura_agua, null, "Salinidad", "Temperatura del agua", null, u_salinidad, u_temperatura_agua, null],
        // od_ph: [tiempo_od, tiempo_ph, null, "Oxígeno disuelto", "pH", null, u_od, u_ph, null],
        // vv_od: [tiempo_velocidad, tiempo_od, tiempo_ph, "Velocidad del viento", "Oxígeno disuelto", "pH", u_velocidad, u_od, u_ph],
        // tai_tag_p: [tiempo_temperatura_aire, tiempo_temperatura_agua, tiempo_presion_atmosferica, "Temperatura del aire", "Temperatura del agua", "Presión atmosférica", u_temperatura_aire, u_temperatura_agua, u_presion_atmosferica],
    }
    console.log(seleccion);
    if (selecto == "viento") {
        // var primera_fecha = new Date(fecha[0]);
        console.log(fecha_unix);
        data_vientos = data_vientos.splice((data_vientos.length - 1000), data_vientos.length);
        Highcharts.chart('container', {
            chart: {
                zoomType: 'x',
                alignTicks: false,
            },
            title: {
                text: 'Histórico'
            },
            xAxis: [{ //Axis principal
                    type: 'datetime',
                    categories: fecha_unix,
                    minorTickInterval: 'auto',
                    gridLineWidth: 1,
                    offset: 40,
                    gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                    labels: {
                        format: '{value:%H:%M}'
                    },
                    minTickInterval: 20
                },
                { //Axis suplementario (Arriba)
                    linkedTo: 0,
                    type: 'datetime',
                    categories: fecha_unix,
                    labels: {
                        format: '{value:<span style="font-size: 12px; font-weight: bold">%a</span> %b %e}',
                        align: 'left',
                        x: 3,
                        y: -5
                    },
                    opposite: true,
                    tickLength: 20,
                    gridLineWidth: 1,
                    tickPixelInterval: 24 * 3600 * 1000,
                    minTickInterval: 24 * 6
                }
            ],
            yAxis: {
                title: {
                    text: 'Velocidad del viento',
                }
            },

            plotOptions: {
                series: {
                    cursor: 'zoom-in',
                    connectNulls: true,
                }
            },

            series: [{
                type: 'windbarb',
                data: data_vientos,
                name: 'Velocidad del viento',
                color: Highcharts.getOptions().colors[1],
                showInLegend: false,
                tooltip: {
                    valueSuffix: u_velocidad

                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 24, // vector length plus some padding
                    approximation: function (values, directions, c) {
                        var vectorX = 0,
                            vectorY = 0,
                            i,
                            len = values.length;

                        for (i = 0; i < len; i++) {
                            vectorX += values[i] * Math.cos(directions[i] * Highcharts.deg2rad);
                            vectorY += values[i] * Math.sin(directions[i] * Highcharts.deg2rad);
                        }

                        return [
                            Math.round(10 * Math.sqrt(Math.pow(vectorX, 2) + Math.pow(vectorY, 2)) / len) / 10,
                            Math.atan2(vectorY, vectorX) / Highcharts.deg2rad
                        ]
                    },
                }
            }, {
                type: 'area',
                keys: ['y', 'rotation'], // rotation is not used here
                data: data_vientos,
                valueSuffix: u_velocidad,
                color: Highcharts.getOptions().colors[0],
                plotOptions: {
                    series: {
                        connectNulls: true
                    }
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [
                            1,
                            Highcharts.color(Highcharts.getOptions().colors[0])
                            .setOpacity(0.25).get()
                        ]
                    ]
                },
                name: 'Velocidad del viento',
                tooltip: {
                    shared: true,
                    useHTML: true,
                    valueSuffix: u_velocidad,
                    formatter: function () {
                        return tooltipFormatter(this);
                    }
                },
            }]

        });

    } else {
        chart = new Highcharts.StockChart({
            chart: {
                renderTo: 'container',
                alignTicks: false,
                zoomType: 'x',
                plotBorderWidth: 1,
            },

            legend: {
                enabled: false
            },

            rangeSelector: {
                // Alinear la barra de selección de fecha
                //   x: -80,
                verticalAlign: 'top',
                buttonPosition: {
                    align: 'right',
                    x: -35
                },
                inputPosition: {
                    align: 'left',
                    //       x: 80
                },

                // Configruación de botones de selección de fecha
                allButtonsEnabled: true,
                buttons: [{
                        type: 'day',
                        count: 1,
                        text: '1 día'
                    },
                    {
                        type: 'day',
                        count: 3,
                        text: '3 días'
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: '1 semana'
                    },
                    {
                        type: 'all',
                        text: 'Todos'
                    }
                ],
                buttonTheme: {
                    width: 60
                },
                selected: 3
            },

            title: {
                text: 'Historico'
            },

            yAxis: [{
                title: {
                    text: seleccion[selecto][4],
                },

            }, {
                title: {
                    text: seleccion[selecto][3]
                },
                opposite: false,
            }, {
                title: {
                    text: seleccion[selecto][5]
                },
                opposite: true,
            }],

            xAxis: { //Axis principal
                minorTickInterval: 'auto',
                gridLineWidth: 1,
                gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
            },

            navigator: {
                enabled: false
            },
            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    return tooltipFormatter(this);
                }
            },

            series: [{
                    type: 'spline',
                    name: seleccion[selecto][3],
                    data: seleccion[selecto][0],
                    yAxis: 1,
                    connectNulls: true,
                    valueSuffix: seleccion[selecto][6],
                    color: '#3ad0ff'
                }, {
                    type: 'spline',
                    name: seleccion[selecto][4],
                    data: seleccion[selecto][1],
                    yAxis: 0,
                    connectNulls: true,
                    valueSuffix: seleccion[selecto][7],
                    color: '#ff3e1f'
                },
                {
                    type: 'spline',
                    name: seleccion[selecto][5],
                    data: seleccion[selecto][2],
                    yAxis: 2,
                    connectNulls: true,
                    valueSuffix: seleccion[selecto][8],
                    color: '#32ff00'
                },
            ]
        });
    }
}

function myFunction(variables) {
    console.log(variables.id);
    $.get('/api/meteorologicos/?id_estacion=51505', function (result) {
        graficar(variables.id)
    });
}
var variables = document.getElementById('tai_h');
$(document).ready(function () {
    $.get('/api/meteorologicos/?id_estacion=51505', function (result) {
        control(result.results);
        grafica_select(1, "Temperatura del aire")
    });
});