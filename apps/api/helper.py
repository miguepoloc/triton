import os
from datetime import date
import time
from .models import VmAgm334580310
from .serializers import DatosEstacionSerializer

#Directorio raiz del proyecto (triton)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

def MareaHoy():
    """Leer el archivo mareas y retorna los datos de hoy"""

    archivo = open(BASE_DIR + '/data/mareas','r')   #Lee el archivo de mareas
    hoy = date.today()                              #Definimos la fecha de hoy
    dia = hoy.day                                   #Definimos el día de hoy
    mes = hoy.month                                 #Definimos el mes de hoy

    #Se crea la lista donde se van a almacenar los datos de la marea
    x_list=[]
    while True:
        linea = archivo.readline()  #Lee una linea del archivo
        #El archivo marea tiene el formato      x, mes, dia, hora:minuto, altura, marea
        l = linea.split(",")        #Separa el archivo por comas
        try:
            dia_m = l[-4]           #Asigna a dia_m el valor del dia en mareas
            mes_m = l[-5]           #Asigna a mes_m el valor del mes en mareas
        except IndexError:          #En caso de que no esté dentro del rango ese vector
            pass

        if (l[-1].strip() == "B"):  #Si la marea es B (Baja)
            mAB = "Baja"
        elif (l[-1].strip() == "A"):##Si la marea es A (Alta)
            mAB = "Alta"

        """Si es el día y mes de hoy (Debido a que el archivo de mareas es un pronóstico 
        y tiene datos de todo el año)"""

        if (int(dia_m) == dia) and (int(mes_m) == mes): 
            #Strip es para quitar los espacios al inicio y final del string
            x= {'mes': mes_m.strip(), 'dia': dia_m.strip(), 'hora': l[-3].strip(), 'minuto': None, 
                'altura': l[-2].strip(), 'marea': l[-1].strip(), 'mareaTexto': mAB}
            #Se anexan los datos anteriores a una lista
            x_list.append(x)
        if not linea:               #Si no hay más lineas en el archivo
            break                   #Cierra el ciclo
    archivo.close                   #Cierra el archivo
    return x_list                   #Retorna la lista resultante

def MareaHoras():
    """Leer el archivo mareasHoras y retorna los datos de hoy"""

    archivo = open(BASE_DIR + '/data/mareasHoras','r')   #Lee el archivo de mareas
    hoy = date.today()                              #Definimos la fecha de hoy
    dia = hoy.day                                   #Definimos el día de hoy
    mes = hoy.month                                 #Definimos el mes de hoy

    #Se crea la lista donde se van a almacenar los datos de la marea
    x_list=[]
    while True:
        linea = archivo.readline()  #Lee una linea del archivo
        #El archivo marea tiene el formato      mes, dia, hora, minuto, altura
        l = linea.split(",")        #Separa el archivo por comas
        try:
            dia_m = l[-4]           #Asigna a dia_m el valor del dia en mareas
            mes_m = l[-5]           #Asigna a mes_m el valor del mes en mareas
        except IndexError:          #En caso de que no esté dentro del rango ese vector
            pass

        """Si es el día y mes de hoy (Debido a que el archivo de mareas es un pronóstico 
        y tiene datos de todo el año)"""

        if (int(dia_m) == dia) and (int(mes_m) == mes): 
            #Strip es para quitar los espacios al inicio y final del string
            x= {'mes': mes_m.strip(), 'dia': dia_m.strip(), 'hora': int(l[-3].strip()), 'minuto': int(l[-2].strip()), 
                'altura': float(l[-1].strip()), 'marea': None, 'mareaTexto': None}
            #Se anexan los datos anteriores a una lista
            x_list.append(x)
        if not linea:               #Si no hay más lineas en el archivo
            break                   #Cierra el ciclo
    archivo.close                   #Cierra el archivo
    return x_list                   #Retorna la lista resultante
