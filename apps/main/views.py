from django.shortcuts import render
from rest_framework import views
from rest_framework.response import Response
from .serializers import MareaSerializer
from .helper import MareaHoras, MareaHoy


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

def invemar_hoy(request):
	return render(request, 'main/invemar_hoy.html')