from django.conf.urls import url
from django.urls import path, include
from apps.main import views
from rest_framework import routers

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^grafica_perfiles$', views.grafica_perfiles, name='grafica_perfiles'),
    url(r'^invemar-hoy$', views.invemar_hoy, name='invemar_hoy'),
    url(r'^estacion/(?P<idx>\d{5})/$', views.Estacion),
    url(r'^estacion/0/$', views.Estacion2),
    url(r'^estacion/1/$', views.Estacion3),
]