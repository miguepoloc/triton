import os
from datetime import date
import time
from django.db.models import Count
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

#TOMADO DEL SIAM
class RestHelper(object):

    def __init__(self, rest_obj, conn=None):
        self.rest_obj = rest_obj
        self.conn = conn

    def connectors(self):
        return {
            'default':{
                'model':VmAgm334580310,
                'db':'neo_argos',
                'serializer':DatosEstacionSerializer
                },
            'neo_argos':{
                'model':VmAgm334580310,
                'db':'neo_argos',
                'serializer':DatosEstacionSerializer
                }
            }
    
    def get_connector(self):
        conn = 'default'
        connectors = self.connectors()
        if self.conn:
            conn = self.conn
        else:
            conn_get = self.rest_obj.request.query_params.get('conn', None)
            if conn_get:
                conn = conn_get
        if conn and conn in connectors:
            return connectors[conn]
        return None

    def get_model(self):
        connector = self.get_connector()
        return connector['model']

    def get_db(self):
        connector = self.get_connector()
        return connector['db']

    def get_order(self):
        connector = self.get_connector()
        if 'order' in connector:
            return connector['order']
        return None

    def get_serializer(self):
        connector = self.get_connector()
        return connector['serializer']

    def get_field_values(self):
        queryset = []
        values = self.get_values()
        if values:
            filters = self.get_filters()
            queryset = self.get_queryset(values, filters)
        return queryset

    def get_data(self, all_fields=False):
        queryset = []
        values = self.get_values()
        if values or all_fields:
            filters = self.get_filters(values)
            queryset = self.get_queryset(values, filters, all_fields)
        return queryset

    def get_legends(self):
        queryset = []
        values = self.get_values()
        if values:
            filters = self.get_filters()
            for filter_name, filter_value in filters.items():
                values.append(filter_name)
            queryset = self.get_queryset(values, filters)
        return queryset

    # require that serializer class extends of DynamicFieldsMixin
    def get_values(self):
        values = []
        fields = self.rest_obj.request.query_params.get('fields', None)
        if fields:
            values = fields.replace(' ','').split(',')
        else:
            print('Does not exists "fields" params in rest request')
        return values

    def get_queryset(self, values=[], filters=[], all_fields=False):
        model = self.get_model()
        db = self.get_db()
        group_by = self.get_group_by()
        order = self.get_order()
        if group_by:
            if order:
                queryset = model.objects.using(db).values(*values).filter(**filters).annotate(
                        **{group_by:Count('*')}
                        ).order_by(order)
            else:
                queryset = model.objects.using(db).values(*values).filter(**filters).annotate(
                        **{group_by:Count('*')}
                        )
        else:
            if order:
                queryset = model.objects.using(db).values(*values).filter(**filters).order_by(order)
            else:
                queryset = model.objects.using(db).values(*values).filter(**filters)
        # print("query=============================", queryset.query)
        return queryset


    def get_group_by(self):
        group_by = self.rest_obj.request.query_params.get('group_by', None)
        if group_by:
            if not group_by == "true":
                return group_by
            return 'dcount'
        return None


    def get_filters(self, values=[], check_null_values=False):
        filters = {}
        not_filters = ['fields','conn','group_by']
        for filter_name, filter_value in self.rest_obj.request.query_params.items():
            if filter_value and filter_name.lower() not in not_filters:
                filters[filter_name] = filter_value
        if check_null_values:
            self.add_filters_null(filters, values)
        return filters


    def add_filters_null(self, filters, values=[]):
        for value in values:
            filters[value+'__isnull'] = False
