// Función de inicio
$(document).ready(function () {
    //Obtiene los datos de la CTD de la API
    $.get('/api/ctd2/', function (result) {
        // Guarda en la variable ctd los resultados de la API
        ctd = result.results;
        // Llama a la función gráfica
        grafica(ctd);
    });
});

// Sección del selector de las variables a graficar
// Seleccionamos el elemento que contiene el select
var select = document.getElementById('select_grafica');
// Cuando el select cambie
select.addEventListener('change',
    function () {
        var selectedOption = this.options[select.selectedIndex];
        // En este caso imprime el valor y el texto del select seleccionado
        console.log(selectedOption.value + ': ' + selectedOption.text);
    }
);


// Función encargada de graficar los datos de la CTD
function grafica(ctd) {
    // Imprime en consola los datos puros
    console.log(ctd);
    // Se crean los vectores de control
    vector_muestra = [];
    vector_variable = [];
    vector_variable_des = [];
    vector_unidad_des = [];
    // Se recorren todas las posiciones del vector de datos de la CTD
    for (i = 0; i < ctd.length; i++) {
        // Guarda el id de la muestra de la posicón i del vector
        muestra = String(ctd[i]["id_muestra"]);
        // Se elimina la primera posición del id de la muestra, debido a que este número
        // Es variante según la variable a la que corresponda
        var cod_muestra = muestra.slice(1, muestra.length);
        // En esta parte se va a llenar el vector con los identificadores de muestra
        // Para saber cuántos muestras se tomaron y relacionar los datos
        // A partir de este identificador
        // Si aún no se ha añadido el código de muestra de la posición i
        // En el vector de muestra
        if (vector_muestra.includes(cod_muestra) == false) {
            // Se añade el id de muestra
            vector_muestra.push(cod_muestra);
        }
        // Se realiza el mismo proceso anterior pero con el nombre de la variable
        variable = String(ctd[i]["variable"]);
        if (vector_variable.includes(variable) == false) {
            vector_variable.push(variable);
        }
        // Se realiza el mismo proceso anterior pero con la descripción de la variable
        variable_des = String(ctd[i]["variable_des"]);
        if (vector_variable_des.includes(variable_des) == false) {
            vector_variable_des.push(variable_des);
        }
        // Se realiza el mismo proceso anterior pero con la unidad de la variable
        unidad_des = String(ctd[i]["unidades_medida_des"]);
        if (vector_unidad_des.includes(unidad_des) == false) {
            vector_unidad_des.push(unidad_des);
        }
    }
    console.log(vector_muestra);
    console.log(vector_variable);
    console.log(vector_variable_des);
    console.log(vector_unidad_des);

    // Se recorren todas las posiciones del vector que contiene a las variables
    for (i = 0; i < vector_variable_des.length; i++) {
        // Se crea un elemento tipo option
        let z = document.createElement("option");
        // Al cual se le asigna el valor de la variable
        z.setAttribute("value", vector_variable[i]);
        // Y s
        let t = document.createTextNode(vector_variable_des[i]);
        z.appendChild(t);
        document.getElementById("select_grafica").appendChild(z);
    }


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