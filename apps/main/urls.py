from django.conf.urls import url
from apps.main import views

urlpatterns = [
    url(r'^datos/$', views.MareaList.as_view()),
    url(r'^datos-horas/$', views.MareaHorasList.as_view())
]