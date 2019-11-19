from django.shortcuts import render
from rest_framework import views, viewsets, mixins
from rest_framework.response import Response
from .serializers import MareaSerializer, DatosEstacionSerializer10, DatosCoralinaSerializer, DatosTritonSerializer, DatosCTDSerializer, DatosCTDSerializer2
from .helper import MareaHoras, MareaHoy
from .models import VmAgm334580310, VmAgm2507816, VTriton, VmAgm2068822, VmAgm3303822

class MareaList(views.APIView):

    def get(self, request):
        datos_lista = MareaHoy()
        results = MareaSerializer(datos_lista, many=True).data
        return Response(results)

class MareaHorasList(views.APIView):

    def get(self, request):
        datos_lista = MareaHoras()
        results = MareaSerializer(datos_lista, many=True).data
        return Response(results)

class DatosEstacionList10(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosEstacionSerializer10
    queryset = VmAgm334580310.objects.using('neo_argos').order_by('-fecha')

class DatosCoralinaList(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosCoralinaSerializer
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(variable_des__contains="Mar").order_by('fecha')[:120]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38884).filter(variable_des="Nivel del Mar").order_by('-fecha')[:120]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38884).filter(variable_des="Oxigeno Disuelto").order_by('-fecha')[:120]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38884).filter(variable_des="Temperatura del agua").order_by('-fecha')[:120]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38884).filter(variable_des="Conductividad").order_by('-fecha')[:120]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38884).filter(variable_des="pH").order_by('-fecha')[:120]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38884).filter(variable_des="Salinidad").order_by('-fecha')[:120]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38883).filter(variable_des="Radiación solar global").order_by('-fecha')[:120]
    queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38883).order_by('-fecha')[:4320]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38883).filter(variable_des="Presión atmosferica").order_by('-fecha')[:120]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38883).filter(variable_des="Temperatura del aire").order_by('-fecha')[:2]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38883).filter(variable_des="Humedad relativa").order_by('-fecha')[:120]
    #queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38883).filter(variable_des="Dirección del viento").order_by('-fecha')[:120]
#    queryset = VmAgm2507816.objects.using('neo_argos').filter(id_estacion=38883).filter(variable_des="Velocidad del viento").order_by('-fecha')[:120]

class DatosCoralinaList38883(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosTritonSerializer
    queryset = VTriton.objects.using('neo_argos').filter(id_estacion=38883).order_by('-fecha_hora')[:720]

class DatosCoralinaList38884(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosTritonSerializer
    queryset = VTriton.objects.using('neo_argos').filter(id_estacion=38884).order_by('-fecha_hora')[:720]

class DatosCoralinaList38885(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosTritonSerializer
    queryset = VTriton.objects.using('neo_argos').filter(id_estacion=38885).order_by('-fecha_hora')[:720]

class DatosCoralinaList39161(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosTritonSerializer
    queryset = VTriton.objects.using('neo_argos').filter(id_estacion=39161).order_by('-fecha_hora')[:720]

class DatosCoralinaList39162(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosTritonSerializer
    queryset = VTriton.objects.using('neo_argos').filter(id_estacion=39162).order_by('-fecha_hora')[:720]

class DatosCTDList2068(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosCTDSerializer
    queryset = VmAgm2068822.objects.using('neo_argos').filter(id_estacion=36329).order_by('-id_muestra')
    print("queryset")

class DatosCTDList3303(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosCTDSerializer2
    queryset = VmAgm3303822.objects.using('neo_argos').filter(id_estacion=49505).order_by('-id_muestra')
    print("queryset")