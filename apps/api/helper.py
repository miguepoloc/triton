import os
from datetime import date
import time
import datetime
from datetimerange import DateTimeRange

# Directorio raiz del proyecto (triton)
BASE_DIR = os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))


def MareaHoy():
    """Leer el archivo mareas y retorna los datos de hoy"""

    archivo = open(BASE_DIR + '/data/mareas', 'r')  # Lee el archivo de mareas
    hoy = date.today()  # Definimos la fecha de hoy
    dia = hoy.day  # Definimos el día de hoy
    mes = hoy.month  # Definimos el mes de hoy

    # Se crea la lista donde se van a almacenar los datos de la marea
    x_list = []
    while True:
        linea = archivo.readline()  # Lee una linea del archivo
        # El archivo marea tiene el formato      x, mes, dia, hora:minuto, altura, marea
        l = linea.split(",")  # Separa el archivo por comas
        try:
            dia_m = l[-4]  # Asigna a dia_m el valor del dia en mareas
            mes_m = l[-5]  # Asigna a mes_m el valor del mes en mareas
        except IndexError:  # En caso de que no esté dentro del rango ese vector
            pass

        if (l[-1].strip() == "B"):  # Si la marea es B (Baja)
            mAB = "Baja"
        elif (l[-1].strip() == "A"):  # Si la marea es A (Alta)
            mAB = "Alta"

        """Si es el día y mes de hoy (Debido a que el archivo de mareas es un pronóstico 
        y tiene datos de todo el año)"""

        if (int(dia_m) == dia) and (int(mes_m) == mes):
            # Strip es para quitar los espacios al inicio y final del string
            x = {'mes': mes_m.strip(), 'dia': dia_m.strip(), 'hora': l[-3].strip(), 'minuto': None,
                 'altura': l[-2].strip(), 'marea': l[-1].strip(), 'mareaTexto': mAB}
            # Se anexan los datos anteriores a una lista
            x_list.append(x)
        if not linea:  # Si no hay más lineas en el archivo
            break  # Cierra el ciclo
    archivo.close  # Cierra el archivo
    return x_list  # Retorna la lista resultante


def MareaHoras():
    """Leer el archivo mareasHoras y retorna los datos de hoy"""

    archivo = open(BASE_DIR + '/data/mareasHoras',
                   'r')  # Lee el archivo de mareas
    hoy = date.today()  # Definimos la fecha de hoy
    dia = hoy.day  # Definimos el día de hoy
    mes = hoy.month  # Definimos el mes de hoy

    # Se crea la lista donde se van a almacenar los datos de la marea
    x_list = []
    while True:
        linea = archivo.readline()  # Lee una linea del archivo
        # El archivo marea tiene el formato      mes, dia, hora, minuto, altura
        l = linea.split(",")  # Separa el archivo por comas
        try:
            dia_m = l[-4]  # Asigna a dia_m el valor del dia en mareas
            mes_m = l[-5]  # Asigna a mes_m el valor del mes en mareas
        except IndexError:  # En caso de que no esté dentro del rango ese vector
            pass

        """Si es el día y mes de hoy (Debido a que el archivo de mareas es un pronóstico 
        y tiene datos de todo el año)"""

        if (int(dia_m) == dia) and (int(mes_m) == mes):
            # Strip es para quitar los espacios al inicio y final del string
            x = {'mes': mes_m.strip(), 'dia': dia_m.strip(), 'hora': int(l[-3].strip()), 'minuto': int(l[-2].strip()),
                 'altura': float(l[-1].strip()), 'marea': None, 'mareaTexto': None}
            # Se anexan los datos anteriores a una lista
            x_list.append(x)
        if not linea:  # Si no hay más lineas en el archivo
            break  # Cierra el ciclo
    archivo.close  # Cierra el archivo
    return x_list  # Retorna la lista resultante


def Coralina():
    """Leer el archivo de datos de la boya de Coralina"""

    # Lee el archivo
    archivo = open(BASE_DIR + '/data/coralina', 'r')
    # Se crea la lista donde se van a almacenar los datos
    x_list = []
    while True:
        linea = archivo.readline()  # Lee una linea del archivo
        l = linea.split(",")  # Separa el archivo por comas

        try:
            DateTime = l[0]
            viento_direccion = l[1]
            u_viento_direccion = "°"
            viento_velocidad = l[2]
            u_viento_velocidad = "m/s"
            precipitacion10 = l[3]
            u_precipitacion10 = "mm"
            voltaje_bateria = l[4]
            u_voltaje_bateria = "V"
            temperatura_ambiente = l[5]
            u_temperatura_ambiente = "°C"
            humedad_relativa = l[6]
            u_humedad_relativa = "%"
            presion_barometrica = l[7]
            u_presion_barometrica = "hPa"
            precipitacion = l[8]
            u_precipitacion = "mm"
            latitud = l[9]
            u_latitud = "°"
            longitud = l[10]
            u_longitud = "°"
            yb = l[11]
            u_yb = "V"
            conductividad = l[12]
            u_conductividad = "mS/cm"
            salinidad = l[13]
            u_salinidad = "ppt"
            ph = l[14]
            u_ph = ""
            temperatura_agua = l[15]
            u_temperatura_agua = "°C"
            od = l[16]
            u_od = "mg/L"
            conductividad2 = l[17]
            u_conductividad2 = "u/cm"
        except IndexError:  # En caso de que no esté dentro del rango ese vector
            pass

        x = {'fecha': DateTime, 'viento_direccion': viento_direccion, "u_viento_direccion": u_viento_direccion, "viento_velocidad": viento_velocidad, "u_viento_velocidad": u_viento_velocidad,
             "precipitacion10": precipitacion10, "u_precipitacion10": u_precipitacion10, "voltaje_bateria": voltaje_bateria, "u_voltaje_bateria": u_voltaje_bateria, "temperatura_ambiente": temperatura_ambiente,
             "u_temperatura_ambiente": u_temperatura_ambiente, "humedad_relativa": humedad_relativa, "u_humedad_relativa": u_humedad_relativa, "presion_barometrica": presion_barometrica,
             "u_presion_barometrica": u_presion_barometrica, "precipitacion": precipitacion, "u_precipitacion": u_precipitacion, "latitud": latitud, "u_latitud": u_latitud, "longitud": longitud,
             "u_longitud": u_longitud, "yb": yb, "u_yb": u_yb, "conductividad": conductividad, "u_conductividad": u_conductividad, "salinidad": salinidad, "u_salinidad": u_salinidad, "u_salinidad": u_salinidad,
             "ph": ph, "u_ph": u_ph, "temperatura_agua": temperatura_agua, "u_temperatura_agua": u_temperatura_agua, "od": od, "u_od": u_od, "conductividad2": conductividad2, "u_conductividad2": u_conductividad2}
        x_list.append(x)
        if not linea:  # Si no hay más lineas en el archivo
            break  # Cierra el ciclo
    archivo.close  # Cierra el archivo
    new_list = []
    # for i in range((len(x_list)-1010), (len(x_list)-1)):
    for i in range((len(x_list)-6248), (len(x_list)-5240)):
        new_list.append(x_list[i])
    return new_list  # Retorna la lista resultante


migue = Coralina()
