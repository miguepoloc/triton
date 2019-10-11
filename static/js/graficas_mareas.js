Highcharts.getJSON(
    '/datos/',
    function (data) {
        //Variables
        var htmlStr = "";
        for (var i = 0; i < data.length; i++) {
            htmlStr += '<tr> <td >' + data[i].hora + '</td>';
            htmlStr += '<td>' + data[i].altura + '</td>' +
                '<td>' + data[i].mareaTexto + '</td> </tr>';
        }
        $("#tbody").html(htmlStr);
    }
);

Highcharts.getJSON(
    '/datos-horas/',
    function (xml) {
        var dataMareas = [];
        var horActual = [];
        var d = new Date();
        var fecha = [];
        //Para el valor actual
        for (var i = 0; i < xml.length; i++) {
            dataMareas.push(xml[i].altura);
            if (d.getMinutes() - 5 < xml[i].minuto && d.getMinutes() + 5 > xml[i].minuto && d.getHours() == xml[i].hora) {
                horActual.push(xml[i].altura);
            } else {
                horActual.push(null);
            }
        }
        
        for (var i = 0; i < xml.length; i++) {
            fecha.push(d.getFullYear() + "-" + xml[i].mes + "-" + xml[i].dia + " " + xml[i].hora + ":" + xml[i].minuto + ":00");
        }

        Highcharts.chart('g-mareas', {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Nivel del mar'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'altura (m)'
                }
            },
            plotOptions: {
                area: {
                    pointStart: Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getDate(), d.getHours()-14, d.getSeconds()),
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                    name: 'Marea',
                    data: dataMareas,
                    connectNulls: true,
                    pointInterval: 60000
                },
                {
                    name: 'Valor actual',
                    data: horActual,
                    connectNulls: true,
                    pointInterval: 60000
                }
            ]
        })
    }
);