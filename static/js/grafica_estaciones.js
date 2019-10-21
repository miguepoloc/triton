Highcharts.getJSON(
    '/api/' + document.getElementById("id_estacion").innerHTML,
    function (dato) {
        //Variables
        dato = dato.results;
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

        //Función que convierte los datos obtenidos en vectores individuales
        function convertidor_f(parametro, vector) {
            vector = [];
            for (i = (dato.length - 1); i > -1; i--) {
                vector.push(dato[i][parametro]);
            }
            return vector;
        }

        function convertidor(parametro, vector) {
            vector = [];
            for (i = (dato.length - 1); i > -1; i--) {
                entero = dato[i][parametro].split(",")[0];
                flotante = dato[i][parametro].split(",")[1];
                vector.push(parseFloat(entero + "." + flotante));
            }
            return vector;
        }
        //Vector de fecha
        fecha = convertidor_f("fecha_hora", fecha);
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
        direccion = convertidor("dir_v", direccion);
        temperatura_agua = convertidor("tem_ag", temperatura_agua);
        od = convertidor("od", od);
        presion_atmosferica = convertidor("pr_at", presion_atmosferica);
        radiacion = convertidor("rg", radiacion);
        nivel = convertidor("nm", nivel);
        precipitacion = convertidor("pr", precipitacion);
        temperatura_aire = convertidor("t_ai", temperatura_aire);

        for (i = 0; i < temperatura_aire.length; i++) {
            if (temperatura_aire[i] == 0) {
                temperatura_aire[i] = NaN;
            }
        }
        velocidad = convertidor("vel_v", velocidad);
        conductividad = convertidor("con", conductividad);
        ph = convertidor("ph", ph);
        humedad = convertidor("hr", humedad);
        for (i = 0; i < humedad.length; i++) {
            if (humedad[i] == 0) {
                humedad[i] = NaN;
            }
        }
        salinidad = convertidor("sal", salinidad);

        //Vectores Unidades
        function convertidor_u(parametro) {
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

        u_direccion = convertidor_u("um_dir_v");
        u_temperatura_agua = convertidor_u("um_tem_ag");
        u_od = convertidor_u("um_od");
        u_presion_atmosferica = convertidor_u("um_pr_at");
        u_radiacion = convertidor_u("um_rg");
        u_nivel = convertidor_u("um_nm");
        u_precipitacion = convertidor_u("um_pr");
        u_temperatura_aire = convertidor_u("um_t_ai");
        u_velocidad = convertidor_u("um_vel_v");
        u_conductividad = convertidor_u("um_con");
        u_ph = convertidor_u("um_ph");
        u_humedad = convertidor_u("um_hr");
        u_salinidad = convertidor_u("um_sal");

        for (i = (temperatura_aire.length - 1); i > -1; i--) {
            temp_mostrar = temperatura_aire[i];

            if (isNaN(temp_mostrar) == false) {
                break;
            }
        }
        for (i = (velocidad.length - 1); i > -1; i--) {
            velocidad_mostrar = velocidad[i];
            if (isNaN(velocidad_mostrar) == false) {
                break;
            }
        }

        document.getElementById("nom_estacion").innerHTML = dato[0].des_estacion;
        document.getElementById("time").innerHTML = "Fecha: " + dato[0].fecha_hora;
        document.getElementById("temp").innerHTML = temp_mostrar + " " + u_temperatura_aire;
        document.getElementById("wind").innerHTML = "Velocidad del viento: " + velocidad_mostrar + " " + u_velocidad;


        data_vientos = [];
        for (i = 0; i < velocidad.length; i++) {
            data_vientos.push([velocidad[i], direccion[i]])
        }
        console.log(data_vientos);

        /*---------------------------------------GRÁFICAS-------------------------------------*/

        //Gráfica Temperatura
        Highcharts.chart('containerTemp', {
            time: {
                timezoneOffset: 0
            },
            chart: {
                zoomType: 'x',
                marginBottom: 70,
                marginRight: 40,
                marginTop: 50,
                plotBorderWidth: 1,
                height: 310
            },
            title: {
                text: 'Historial temperatura',
                align: 'left'
            },
            xAxis: [{ //Axis principal
                    type: 'datetime',
                    categories: fecha_unix,
                    minorTickInterval: 'auto',
                    gridLineWidth: 1,
                    gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                    labels: {
                        format: '{value:%H}'
                    },
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
                    text: null
                },
                labels: {
                    format: '{value} ' + u_temperatura_aire,
                    style: {
                        fontSize: '10px'
                    },
                    x: -3
                },
                gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0'
            },
            legend: {
                enabled: false
            },
            tooltip: {
                xDateFormat: '%A, %b %e, %H:%M, %Y',
                valueSuffix: ' ' + u_temperatura_aire
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                    },
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'spline',
                name: 'Temperatura',
                connectNulls: true,
                data: temperatura_aire,
            }]
        });

        //Gráfica Humedad
        Highcharts.chart('containerHum', {
            time: {
                timezoneOffset: 0
            },
            chart: {
                zoomType: 'x',
                marginBottom: 70,
                marginRight: 40,
                marginTop: 50,
                plotBorderWidth: 1,
                height: 310
            },
            title: {
                text: 'Historial Humedad',
                align: 'left'
            },
            xAxis: [{ //Axis principal
                    type: 'datetime',
                    categories: fecha_unix,
                    minorTickInterval: 'auto',
                    gridLineWidth: 1,
                    gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                    labels: {
                        format: '{value:%H}'
                    },
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
                    text: null
                },
                labels: {
                    format: '{value} ' + u_humedad,
                    style: {
                        fontSize: '10px'
                    },
                    x: -3
                },
                gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0'
            },
            legend: {
                enabled: false
            },
            tooltip: {
                xDateFormat: '%A, %b %e, %H:%M, %Y',
                valueSuffix: ' ' + u_humedad
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                    },
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'spline',
                name: 'Humedad',
                connectNulls: true,
                data: humedad,
            }]
        });

        //Gráfica Presión
        Highcharts.chart('containerPresion', {
            time: {
                timezoneOffset: 0
            },
            chart: {
                zoomType: 'x',
                marginBottom: 70,
                marginRight: 40,
                marginTop: 50,
                plotBorderWidth: 1,
                height: 310
            },
            title: {
                text: 'Historial presión',
                align: 'left'
            },
            xAxis: [{ //Axis principal
                    type: 'datetime',
                    categories: fecha_unix,
                    minorTickInterval: 'auto',
                    gridLineWidth: 1,
                    gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                    labels: {
                        format: '{value:%H}'
                    },
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
                    text: null
                },
                labels: {
                    format: '{value} ' + u_presion_atmosferica,
                    style: {
                        fontSize: '10px'
                    },
                    x: -3
                },
                gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0'
            },
            legend: {
                enabled: false
            },
            tooltip: {
                xDateFormat: '%A, %b %e, %H:%M, %Y',
                valueSuffix: ' ' + u_presion_atmosferica
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                    },
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'spline',
                name: 'Presión',
                connectNulls: true,
                data: presion_atmosferica,
            }]
        });

        //Gráfica Precipitación
        Highcharts.chart('containerPre', {
            time: {
                timezoneOffset: 0
            },
            chart: {
                zoomType: 'x',
                marginBottom: 70,
                marginRight: 40,
                marginTop: 50,
                plotBorderWidth: 1,
                height: 310
            },
            title: {
                text: 'Historial precipitación',
                align: 'left'
            },
            xAxis: [{ //Axis principal
                    type: 'datetime',
                    categories: fecha_unix,
                    minorTickInterval: 'auto',
                    gridLineWidth: 1,
                    gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                    labels: {
                        format: '{value:%H}'
                    },
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
                    text: null
                },
                labels: {
                    format: '{value} ' + u_precipitacion,
                    style: {
                        fontSize: '10px'
                    },
                    x: -3
                },
                gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0'
            },
            legend: {
                enabled: false
            },
            tooltip: {
                xDateFormat: '%A, %b %e, %H:%M, %Y',
                valueSuffix: ' ' + u_precipitacion
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                    },
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'spline',
                name: 'Precipitación',
                connectNulls: true,
                data: precipitacion,
            }]
        });

        //Gráfica Radiación
        Highcharts.chart('containerRad', {
            time: {
                timezoneOffset: 0
            },
            chart: {
                zoomType: 'x',
                marginBottom: 70,
                marginRight: 40,
                marginTop: 50,
                plotBorderWidth: 1,
                height: 310
            },
            title: {
                text: 'Historial Radiación',
                align: 'left'
            },
            xAxis: [{ //Axis principal
                    type: 'datetime',
                    categories: fecha_unix,
                    minorTickInterval: 'auto',
                    gridLineWidth: 1,
                    gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                    labels: {
                        format: '{value:%H}'
                    },
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
                    text: null
                },
                labels: {
                    format: '{value} ' + u_radiacion,
                    style: {
                        fontSize: '10px'
                    },
                    x: -3
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                xDateFormat: '%A, %b %e, %H:%M, %Y',
                valueSuffix: ' ' + u_radiacion
            },
            series: [{
                type: 'spline',
                name: 'Radiación',
                connectNulls: true,
                data: radiacion,
                color: '#FF3333',
            }]
        });

        //*********GRÁFICA VIENTO PRUEBA */
        Highcharts.chart('containerVientos', {
            time: {
                timezoneOffset: 0
            },
            chart: {
                zoomType: 'x',
                marginBottom: 70,
                marginRight: 40,
                marginTop: 50,
                plotBorderWidth: 1,
                height: 310
            },
            title: {
                text: 'Historial vientos',
                align: 'left'
            },

            xAxis: [{ //Axis principal
                    type: 'datetime',
                    categories: fecha_unix,
                    offset: 40,
                    minorTickInterval: 'auto',
                    gridLineWidth: 1,
                    gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                    labels: {
                        format: '{value:%H}'
                    },
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
                    text: null
                },
                labels: {
                    format: '{value} ' + u_velocidad,
                    style: {
                        fontSize: '10px'
                    },
                    x: -3
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                xDateFormat: '%A, %b %e, %H:%M, %Y',
                valueSuffix: ' ' + u_velocidad
            },

            series: [{
                type: 'windbarb',
                data: data_vientos,
                name: 'Viento',
                color: Highcharts.getOptions().colors[1], //Color de las flechas
                showInLegend: false,
            }, {
                type: 'spline',
                keys: ['y', 'rotation'], // rotation is not used here
                data: data_vientos,
                color: Highcharts.getOptions().colors[0],
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
                        ]
                    ]
                },
                name: 'Velocidad del viento',
                tooltip: {
                    valueSuffix: ' ' + u_velocidad
                },
                states: {
                    inactive: {
                        opacity: 1
                    }
                }
            }]

        });

    }
);