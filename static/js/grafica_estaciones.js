Highcharts.getJSON(
    '/api/' + document.getElementById("id_estacion").innerHTML,
    function (data) {
        //Variables
        dato = data.results;
        var i;
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
        function convertidor(parametro, vector) {
            vector = [];
            for (i = (dato.length - 1); i > -1; i--) {
                vector.push(dato[i][parametro]);
            }
            return vector;
        }
        //Vectore de fecha
        fecha = convertidor("fecha_hora", fecha);
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
        velocidad = convertidor("vel_v", velocidad);
        conductividad = convertidor("con", conductividad);
        ph = convertidor("ph", ph);
        humedad = convertidor("hr", humedad);
        salinidad = convertidor("sal", salinidad);

        for (i = 0; i < temperatura_aire.length; i++) {
            temp_mostrar = temperatura_aire[i];
            if (temp_mostrar !== null){break;}
        }
        for (i = 0; i < velocidad.length; i++) {
            velocidad_mostrar = velocidad[i];
            if (velocidad_mostrar !== null){break;}
        }
        document.getElementById("nom_estacion").innerHTML = dato[0].des_estacion;
        document.getElementById("time").innerHTML = "Fecha: " + dato[0].fecha_hora;
        document.getElementById("temp").innerHTML = temp_mostrar + " °C";
        document.getElementById("wind").innerHTML = "Velocidad del viento: " + velocidad_mostrar + " m/s";


        //Gráfica Precipitación
        Highcharts.chart('containerPre', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Historial precipitación'
            },
            xAxis: {
                type: 'datetime',
                categories: fecha_unix,
                gridLineWidth: 1,
                gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%H', this.value);
                    }
                },
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                xDateFormat: '%A, %b %e, %H:%M, %Y',
                valueSuffix: ' mm'
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
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'spline',
                name: 'Precipitación',
                connectNulls: true,
                data: precipitacion
            }]
        });

        //Gráfica Radiación
        Highcharts.chart('containerRad', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Historial Radiación'
            },
            xAxis: {
                type: 'datetime',
                categories: fecha_unix,
                gridLineWidth: 1,
                gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%H', this.value);
                    }
                },
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                xDateFormat: '%A, %b %e, %H:%M, %Y',
                valueSuffix: ' W/m2'
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
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'spline',
                name: 'Radiación',
                connectNulls: true,
                data: radiacion
            }]
        });

        //*********GRÁFICA VIENTO PRUEBA */
        Highcharts.chart('containerX', {

            title: {
                text: 'Highcharts Wind Barbs'
            },
        
            xAxis: {
                type: 'datetime',
                categories: fecha_unix,
                offset: 40,
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%H', this.value);
                    }
                },
            },
        
            plotOptions: {
                series: {
                    pointInterval: 36e5
                }
            },
        
            series: [{
                type: 'windbarb',
                data: [
                    [9.8, 177.9],
                    [10.1, 177.2],
                    [11.3, 179.7],
                    [10.9, 175.5],
                    [9.3, 159.9],
                    [8.8, 159.6],
                    [7.8, 162.6],
                    [5.6, 186.2],
                    [6.8, 146.0],
                    [6.4, 139.9],
                    [3.1, 180.2],
                    [4.3, 177.6],
                    [5.3, 191.8],
                    [6.3, 173.1],
                    [7.7, 140.2],
                    [8.5, 136.1],
                    [9.4, 142.9],
                    [10.0, 140.4],
                    [5.3, 142.1],
                    [3.8, 141.0],
                    [3.3, 116.5],
                    [1.5, 327.5],
                    [0.1, 1.1],
                    [1.2, 11.1]
                ],
                name: 'Wind',
                color: Highcharts.getOptions().colors[1], //Color de las flechas
                showInLegend: false,
                tooltip: {
                    valueSuffix: ' m/s'
                }
            }, {
                type: 'area',
                keys: ['y', 'rotation'], // rotation is not used here
                data: [
                    [9.8, 177.9],
                    [10.1, 177.2],
                    [11.3, 179.7],
                    [10.9, 175.5],
                    [9.3, 159.9],
                    [8.8, 159.6],
                    [7.8, 162.6],
                    [5.6, 186.2],
                    [6.8, 146.0],
                    [6.4, 139.9],
                    [3.1, 180.2],
                    [4.3, 177.6],
                    [5.3, 191.8],
                    [6.3, 173.1],
                    [7.7, 140.2],
                    [8.5, 136.1],
                    [9.4, 142.9],
                    [10.0, 140.4],
                    [5.3, 142.1],
                    [3.8, 141.0],
                    [3.3, 116.5],
                    [1.5, 327.5],
                    [0.1, 1.1],
                    [1.2, 11.1]
                ],
                color: Highcharts.getOptions().colors[0],
                fillColor: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [
                            1,
                            Highcharts.color(Highcharts.getOptions().colors[0])
                                .setOpacity(0.25).get()
                        ]
                    ]
                },
                name: 'Wind speed',
                tooltip: {
                    valueSuffix: ' m/s'
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