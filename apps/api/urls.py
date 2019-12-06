from django.conf.urls import url
from django.urls import path, include
from apps.api import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register("estacion", views.DatosEstacionList10)
router.register("estacion/38883", views.DatosCoralinaList38883, "38883")
router.register("estacion/38884", views.DatosCoralinaList38884, "38884")
router.register("estacion/38885", views.DatosCoralinaList38885, "38885")
router.register("estacion/39161", views.DatosCoralinaList39161, "39161")
router.register("estacion/39162", views.DatosCoralinaList39162, "39162")
router.register("ctd", views.DatosCTDList2068, "ctd")
router.register("ctd2", views.DatosCTDList3303, "ctd2")
router.register("ctd_lances", views.DatosCTDLancesList),
router.register(
    r'estaciones/(\w+)',
    views.DatosTritonList,
    'datos_triton_api_list_view',
)

urlpatterns = [
    url(r'^datos/$', views.MareaList.as_view()),
    url(r'^datos-horas/$', views.MareaHorasList.as_view()),
    url(r'^coralina/$', views.CoralinaList.as_view()),
    path('api/', include(router.urls)),
]
