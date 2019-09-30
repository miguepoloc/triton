from django.shortcuts import render

def invemar_hoy(request):
	return render(request, 'main/invemar_hoy.html')

def geovisor(request):
    return render(request, 'main/index.html')