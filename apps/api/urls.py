from django.conf.urls import url
from django.urls import path, include
from apps.api import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register("estacion", views.DatosEstacionList10)
router.register("ctd", views.DatosCTDList2068, "ctd")
router.register("ctd2", views.DatosCTDList3303, "ctd2")
router.register("ctd_lances", views.DatosCTDLancesList),
router.register(r'estaciones', views.DatosEstacionesList,
                'datos_triton_api_list_view')

urlpatterns = [
    url(r'^datos/$', views.MareaList.as_view()),
    url(r'^datos-horas/$', views.MareaHorasList.as_view()),
    url(r'^coralina/$', views.CoralinaList.as_view()),
    path('api/', include(router.urls)),
]
