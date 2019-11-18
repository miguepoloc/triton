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
    vector_unidad_des = [];
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
        unidad_des = String(ctd[i]["unidades_medida_des"]);
        if (vector_unidad_des.includes(unidad_des) == false) {
            vector_unidad_des.push(unidad_des);
        }
    }
    console.log(vector_muestra);
    console.log(vector_variable);
    console.log(vector_variable_des);
    console.log(vector_unidad_des);

    var objeto_variable = new Object();
    
    for (i = 0; i < vector_variable.length; i++) {
        objeto_variable[vector_variable[i]] = [];
    }
    
    for (i = 0; i < ctd.length; i++) {
        for (j = 0; j < vector_variable.length; j++) {
            if (ctd[i].variable == vector_variable[j]) {
                if (ctd[i].variable == "PR") {
                    objeto_variable[vector_variable[j]].push(-1 * ctd[i].valor);
                } else {
                    objeto_variable[vector_variable[j]].push(ctd[i].valor);
                }
            }
        }
    }

    vector_grafica = [];
    objeto_variable["grafica"] = [];
    for (i = 0; i < objeto_variable[vector_variable[0]].length; i++) {
        objeto_variable["grafica"].push([objeto_variable["PR"][i], objeto_variable["TEM"][i]]);
    }

    console.log(objeto_variable["grafica"]);
    Highcharts.chart('container', {
        chart: {
            type: 'spline',
            inverted: true,
            zoomType: 'x',
        },
        title: {
            text: 'Estacion ' + ctd[0].id_estacion
        },
        subtitle: {
            text: 'Temperatura vs Distancia'
        },
        xAxis: {
            reversed: false,
            title: {
                enabled: true,
                text: 'Altitude'
            },
            labels: {
                format: '{value} m'
            },
            maxPadding: 0.05,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: vector_variable_des[0]
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
            pointFormat: '{point.x} m: {point.y}°C'
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
            data: objeto_variable["grafica"]
        }]
    });
}