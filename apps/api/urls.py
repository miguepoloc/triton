from django.conf.urls import url
from django.urls import path, include
from apps.api import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register("estacion", views.DatosEstacionList)


urlpatterns = [
    url(r'^datos/$', views.MareaList.as_view()),
    url(r'^datos-horas/$', views.MareaHorasList.as_view()),
    path('api/', include(router.urls)),
]