from django.conf.urls import url
from django.urls import path, include
from apps.api import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"estacion", views.DatosEstacionList10, "DatosEstacion10")
router.register(r"ctd", views.DatosCTDList3303, "ctd")
router.register(r"ctd_lances", views.DatosCTDLancesList, "DatosCTDLances"),
router.register(r'estaciones', views.DatosEstacionesList,
                'datos_triton_api_list_view')
router.register(r'meteorologicos', views.DatosMeteorologicosList,
                'datos_meteorologicos_api_list_view')
router.register(r'fecha_estaciones', views.DatosFechaEstacionesList,
                'datos_fecha_api_list_view')

urlpatterns = [
    url(r'^datos/$', views.MareaList.as_view()),
    url(r'^datos-horas/$', views.MareaHorasList.as_view()),
    url(r'^coralina/$', views.CoralinaList.as_view()),
    path('', include(router.urls)),
]
