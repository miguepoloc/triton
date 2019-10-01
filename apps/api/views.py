from django.shortcuts import render
from rest_framework import views, viewsets, mixins
from rest_framework.response import Response
from .serializers import MareaSerializer, DatosEstacionSerializer10, DatosCoralinaSerializer
from .helper import MareaHoras, MareaHoy
from .models import VmAgm334580310, VmAgm2507816

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
    queryset = VmAgm2507816.objects.using('neo_argos').order_by('-fecha')[:10]