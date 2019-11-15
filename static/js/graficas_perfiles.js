var ctd_prueba;

$(document).ready(function () {
    $.get('/api/ctd/', function (result) {
        ctd_prueba = result.results;
        grafica(ctd_prueba);
    });
});

function grafica(ctd) {
    console.log(ctd);
    vector_muestra = [];
    vector_variable = [];
    vector_variable_des = [];
    for (i = 0; i < ctd.length; i++) {
        muestra = String(ctd[i]["id_muestra"]);
        var cod_muestra = muestra.slice(1, muestra.length);
        if (vector_muestra.includes(cod_muestra) == false) {
            vector_muestra.push(cod_muestra);
        }
        variable = String(ctd[i]["variable"]);
        if (vector_variable.includes(variable) == false) {
            vector_variable.push(variable);
        }
        variable_des = String(ctd[i]["variable_des"]);
        if (vector_variable_des.includes(variable_des) == false) {
            vector_variable_des.push(variable_des);
        }
    }
    console.log(vector_muestra);
    console.log(vector_variable);
    console.log(vector_variable_des);

    var objeto_variable = new Object();
    for (i = 0; i < vector_variable_des.length; i++) {
        objeto_variable[vector_variable[i]] = [];
    }
    console.log(objeto_variable);

    for (i = 0; i < ctd.length; i++) {
        for (j = 0; j < ctd.length; j++) {
            if (ctd[i].variable == vector_variable[j]) {
                objeto_variable[vector_variable[j]].push(ctd[i].valor);
            }
        }
    }
    console.log(objeto_variable);
    Highcharts.chart('container', {
        chart: {
            type: 'spline',
            inverted: true
        },
        title: {
            text: 'Atmosphere Temperature by Altitude'
        },
        subtitle: {
            text: 'According to the Standard Atmosphere Model'
        },
        xAxis: {
            reversed: false,
            title: {
                enabled: true,
                text: 'Altitude'
            },
            labels: {
                format: '{value} km'
            },
            maxPadding: 0.05,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Temperature'
            },
            labels: {
                format: '{value}°'
            },
            lineWidth: 2
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x} km: {point.y}°C'
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                }
            }
        },
        series: [{
            name: 'Temperature',
            data: [
                [0, 15],
                [10, -50],
                [20, -56.5],
                [30, -46.5],
                [40, -22.1],
                [50, -2.5],
                [60, -27.7],
                [70, -55.7],
                [80, -76.5]
            ]
        }]
    });
}