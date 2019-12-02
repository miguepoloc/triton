from django.conf.urls import url
from django.urls import path, include
from apps.main import views
from rest_framework import routers

urlpatterns = [
    url(r'^estacion/(?P<idx>\d{5})/$', views.Estacion),
    url(r'^estacion/0/$', views.Estacion2),
]