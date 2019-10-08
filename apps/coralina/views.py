from django.shortcuts import render
from apps.api.models import VmAgm334580310, VmAgm2507816, VTriton

def Estacion(request, idx):
    idx = int(idx)
    print("Este es el id: " + str(idx))
    estacion = VTriton.objects.using('neo_argos').filter(id_estacion=idx).order_by('-fecha_hora')[:1]
    if len(estacion) > 0:
        estacion = estacion[0]
    else:
        estacion = None
    # return the emp_detail.html template file to client, and pass the filtered out Employee object.
    return render(request, 'coralina/coralina.html',{'estacion': estacion})
