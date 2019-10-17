from django.shortcuts import render
from apps.api.models import VmAgm334580310, VmAgm2507816

def invemar_hoy(request):
	return render(request, 'main/invemar_hoy.html')

def geovisor(request):
    return render(request, 'main/index.html')

def geovisor2(request):
    return render(request, 'main/index2.html')
