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


//Función que convierte la fecha a un vector
function convertidor_fecha(dato, parametro) {
    vector = [];
    for (i = (dato.length - 1); i > -1; i--) {
        vector.push(dato[i][parametro]);
    }
    return vector;
}

//Función que convierte los datos obtenidos en vectores individuales
function convertidor(dato, parametro) {
    vector = [];
    for (i = (dato.length - 1); i > -1; i--) {
        entero = dato[i][parametro].split(",")[0];
        flotante = dato[i][parametro].split(",")[1];
        vector.push(parseFloat(entero + "." + flotante));
    }
    return vector;
}

// Función que convierte las unidades a un vector
function convertidor_u(dato, parametro) {
    vector = [];
    for (i = (dato.length - 1); i > -1; i--) {
        vector.push(dato[i][parametro]);
    }
    for (i = 0; i < vector.length; i++) {
        unidad = vector[i];
        if (unidad != "") {
            break;
        }
    }
    return unidad;
}

function graficar(dato) {

    dato = dato.results;
    //Vector de fecha
    fecha = convertidor_fecha(dato, "fecha_hora");
    for (i = 0; i < fecha.length; i++) {
        anio = fecha[i].slice(0, 4);
        mes = fecha[i].slice(5, 7);
        mes = mes - 1;
        dia = fecha[i].slice(8, 10);
        hora = fecha[i].slice(11, 13);
        minuto = fecha[i].slice(14, 16);
        fecha_unix.push(Date.UTC(anio, mes, dia, hora, minuto));
    }

    //Vectores de datos
    direccion = convertidor(dato, "dir_v");
    temperatura_agua = convertidor(dato, "tem_ag");
    od = convertidor(dato, "od");
    presion_atmosferica = convertidor(dato, "pr_at");
    radiacion = convertidor(dato, "rg");
    nivel = convertidor(dato, "nm");
    precipitacion = convertidor(dato, "pr");
    temperatura_aire = convertidor(dato, "t_ai");
    velocidad = convertidor(dato, "vel_v");
    conductividad = convertidor(dato, "con");
    ph = convertidor(dato, "ph");
    humedad = convertidor(dato, "hr");
    salinidad = convertidor(dato, "sal");

    // Correcciones de valores en 0 de temperatura
    for (i = 0; i < temperatura_aire.length; i++) {
        if (temperatura_aire[i] == 0) {
            temperatura_aire[i] = NaN;
        }
    }

    // Correcciones de valores en 0 de humedad
    for (i = 0; i < humedad.length; i++) {
        if (humedad[i] == 0) {
            humedad[i] = NaN;
        }
    }

    // Unidades de las variables
    u_direccion = convertidor_u(dato, "um_dir_v");
    u_temperatura_agua = convertidor_u(dato, "um_tem_ag");
    u_od = convertidor_u(dato, "um_od");
    u_presion_atmosferica = convertidor_u(dato, "um_pr_at");
    u_radiacion = convertidor_u(dato, "um_rg");
    u_nivel = convertidor_u(dato, "um_nm");
    u_precipitacion = convertidor_u(dato, "um_pr");
    u_temperatura_aire = convertidor_u(dato, "um_t_ai");
    u_velocidad = convertidor_u(dato, "um_vel_v");
    u_conductividad = convertidor_u(dato, "um_con");
    u_ph = convertidor_u(dato, "um_ph");
    u_humedad = convertidor_u(dato, "um_hr");
    u_salinidad = convertidor_u(dato, "um_sal");

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
    document.getElementById("nom_estacion").innerHTML = dato[0].des_estacion;
    document.getElementById("time").innerHTML = "Fecha: " + dato[0].fecha_hora;
    document.getElementById("temp").innerHTML = temp_mostrar + " " + u_temperatura_aire;
    document.getElementById("wind").innerHTML = "Velocidad del viento: " + velocidad_mostrar + " " +
        u_velocidad;


    // Combinación de velocidad y dirección del viento en un solo vector
    data_vientos = [];
    for (i = 0; i < velocidad.length; i++) {
        data_vientos.push([velocidad[i], direccion[i]])
    }

    // Vectores de datos y tiempo
    for (i = 0; i < fecha_unix.length; i++) {
        tiempo_temperatura_aire.push([fecha_unix[i], temperatura_aire[i]])
    }

    for (i = 0; i < fecha_unix.length; i++) {
        tiempo_humedad.push([fecha_unix[i], humedad[i]])
    }

    // create the chart
    chart = new Highcharts.StockChart({
        chart: {
            renderTo: 'container',
            alignTicks: false,
            zoomType: 'x',
            plotBorderWidth: 1,
        },

        rangeSelector: {
            // Alinear la barra de selección de fecha
            x: -80,
            verticalAlign: 'top',
            buttonPosition: {
                align: 'right'
            },
            inputPosition: {
                align: 'left',
                x: 80
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
                text: 'Temperatura',
            },

        }, {
            title: {
                text: 'Humedad'
            },
            opposite: false,
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
                name: 'Humedad',
                data: tiempo_humedad,
                yAxis: 1,
                connectNulls: true,
                valueSuffix: '%',
                color: '#3ad0ff'
            }, {
                type: 'spline',
                name: 'Temperatura',
                data: tiempo_temperatura_aire,
                yAxis: 0,
                connectNulls: true,
                valueSuffix: '°C',
                color: '#ff3e1f'
            },
            {
                type: 'spline',
                name: 'Temperatura',
                data: null,
                yAxis: 0,
                connectNulls: true,
                valueSuffix: '°C',
                color: '#ff3e1f'
            },
        ]
    });
}

Highcharts.getJSON(
    '/api/' + document.getElementById("id_estacion").innerHTML,
    graficar
);