console.log(document.getElementById("id_estacion").innerHTML)
Highcharts.getJSON(
    '/api/'+document.getElementById("id_estacion").innerHTML,
    function (data) {
        //Variables
        dato = data.results;
        console.log(dato);
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
        //Vectores de datos
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
        console.log(fecha);
        console.log(fecha_unix);
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
                data: precipitacion
            }]
        });

        //-------------------------------------Gráfica Radiación

        var startDate = new Date(fecha_unix[fecha_unix.length - 1][0]), // Get year of last data point
            minRate = 1,
            maxRate = 0,
            startPeriod,
            fecha_unix,
            rate,
            index;
        startDate.setMonth(startDate.getMonth() - 3); // a quarter of a year before last data point
        startPeriod = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        data=direccion;
        for (index = data.length - 1; index >= 0; index = index - 1) {
            date = fecha_unix[index]; // data[i][0] is date
            rate = data[index]; // data[i][1] is exchange rate
            if (date < startPeriod) {
                break; // stop measuring highs and lows
            }
            if (rate > maxRate) {
                maxRate = rate;
            }
            if (rate < minRate) {
                minRate = rate;
            }
        }
        Highcharts.stockChart('containerRad', {
            rangeSelector: {
                selected: 1
            },
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
                },
                plotLines: [{
                        value: minRate,
                        color: 'green',
                        dashStyle: 'shortdash',
                        width: 2,
                        label: {
                            text: 'Last quarter minimum'
                        }
                    },
                    {
                        value: maxRate,
                        color: 'red',
                        dashStyle: 'shortdash',
                        width: 2,
                        label: {
                            text: 'Last quarter maximum'
                        }
                    }
                ]
            },
            legend: {
                enabled: false
            },
            tooltip: {
                xDateFormat: '%A, %b %e, %H:%M, %Y',
            },
            plotOptions: {
                area: {
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
                data: direccion
            }]
        });
    });