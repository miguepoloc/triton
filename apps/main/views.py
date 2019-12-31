from django.shortcuts import render
from apps.api.models import VmAgm334580310, VmAgm2507816, VTriton


def invemar_hoy(request):
    return render(request, 'main/invemar_hoy.html')


def geovisor(request):
    return render(request, 'main/index.html')


def geovisor2(request):
    return render(request, 'main/index2.html')


def Estacion(request, idx):
    return render(request, 'main/estaciones.html', {'estacion': idx})


def Estacion2(request):
    return render(request, 'main/estaciones2.html')

def Estacion3(request):
    return render(request, 'main/estaciones3.html')