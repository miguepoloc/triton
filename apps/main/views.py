from django.shortcuts import render
from apps.api.models import VmAgm334580310, VmAgm2507816, VTriton

def invemar_hoy(request):
	return render(request, 'main/invemar_hoy.html')

def geovisor(request):
    return render(request, 'main/index.html')

def geovisor2(request):
    return render(request, 'main/index2.html')

def Estacion(request, idx):
    idx = int(idx)
    print("Este es el id: " + str(idx))
    estacion = VTriton.objects.using('neo_argos').filter(id_estacion=idx).order_by('-fecha_hora')[:1]
    if len(estacion) > 0:
        estacion = estacion[0]
    else:
        estacion = None
    return render(request, 'main/estaciones.html',{'estacion': estacion})

def Estacion2(request):
    return render(request, 'main/estaciones2.html')
