from django.conf.urls import url
from django.urls import path, include
from apps.coralina import views
from rest_framework import routers

urlpatterns = [
    url(r'^estacion/(?P<idx>\d{5})/$', views.Estacion),
]