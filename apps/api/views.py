from django.shortcuts import render
from rest_framework import views, viewsets, mixins
from rest_framework.response import Response
from .serializers import (MareaSerializer, DatosEstacionSerializer10, DatosTritonSerializer,
                          DatosCTDSerializer, CoralinaSerializer, DatosCTDLancesSerializer, DatosMetereologicosSerializer, DatosOceanograficosSerializer)
from .helper import (MareaHoras, MareaHoy, Coralina,
                     estacion_get_filters_validated)
from .models import (VmAgm334580310, VmAgm2507816, VTriton, VmAgm2068822,
                     VmAgm3303822, Ctd_Lances, VmOceanograficos858, VmMetereologicos803)


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


class CoralinaList(views.APIView):

    def get(self, request):
        datos_lista = Coralina()
        results = CoralinaSerializer(datos_lista, many=True).data
        return Response(results)


class DatosEstacionList10(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosEstacionSerializer10
    queryset = VmAgm334580310.objects.using('neo_argos').order_by('-fecha')


class DatosEstacionesList(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosTritonSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset(request))
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def get_queryset(self, request=None):
        queryset_complete = queryset = filters = []
        if request:
            filters = estacion_get_filters_validated(request)
        try:
            queryset = VTriton.objects.using('neo_argos').filter(
                **filters).order_by('-fecha_hora')[:720]
        except Exception as err:
            print(err)
        if len(queryset) > 0:
            return queryset
        else:
            print("ERROR")
            return (queryset)


class DatosFechaEstacionesList(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosTritonSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset(request))
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def get_queryset(self, request=None):
        queryset_complete = queryset = filters = []
        if request:
            filters = estacion_get_filters_validated(request)
        try:
            queryset = VTriton.objects.using('neo_argos').filter(
                **filters).order_by('fecha_hora')[:1]
        except Exception as err:
            print(err)
        if len(queryset) > 0:
            return queryset
        else:
            print("ERROR")
            return (queryset)


class DatosCTDList3303(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosCTDSerializer
    queryset = VmAgm3303822.objects.using('neo_argos').filter(
        id_estacion=49505).order_by('-id_muestra')


class DatosCTDLancesList(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosCTDLancesSerializer
    queryset = Ctd_Lances.objects.using(
        'oceanograficos').order_by('-id_muestreo')


class DatosMeteorologicosList(mixins.ListModelMixin, viewsets.GenericViewSet):

    serializer_class = DatosMetereologicosSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset(request))
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def get_queryset(self, request=None):
        queryset_complete = queryset = filters = []
        if request:
            filters = estacion_get_filters_validated(request)
        try:
            queryset = VmMetereologicos803.objects.using('oceanograficos').filter(
                **filters).order_by('-fecha_horaregistro')[:500]
        except Exception as err:
            print(err)
        if len(queryset) > 0:
            return queryset
        else:
            print("ERROR")
            return (queryset)
