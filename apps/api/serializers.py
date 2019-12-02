from rest_framework import serializers
from .models import VmAgm334580310, VmAgm2507816, VTriton, VmAgm2068822, VmAgm3303822


class MareaSerializer(serializers.Serializer):
    mes = serializers.IntegerField(default=None)
    dia = serializers.IntegerField(default=None)
    hora = serializers.CharField(default=None, max_length=None)
    minuto = serializers.IntegerField(default=None)
    altura = serializers.FloatField(default=None)
    marea = serializers.CharField(default=None, max_length=None)
    mareaTexto = serializers.CharField(default=None, max_length=None)


class CoralinaSerializer(serializers.Serializer):
    DateTime = serializers.CharField(default=None, max_length=None)
    viento_direccion = serializers.IntegerField(default=None)
    u_viento_direccion = serializers.CharField(default=None, max_length=None)
    viento_velocidad = serializers.FloatField(default=None)
    u_viento_velocidad = serializers.CharField(default=None, max_length=None)
    precipitacion10 = serializers.FloatField(default=None)
    u_precipitacion10 = serializers.CharField(default=None, max_length=None)
    voltaje_bateria = serializers.FloatField(default=None)
    u_voltaje_bateria = serializers.CharField(default=None, max_length=None)
    temperatura_ambiente = serializers.FloatField(default=None)
    u_temperatura_ambiente = serializers.CharField(
        default=None, max_length=None)
    humedad_relativa = serializers.FloatField(default=None)
    u_humedad_relativa = serializers.CharField(default=None, max_length=None)
    presion_barometrica = serializers.FloatField(default=None)
    u_presion_barometrica = serializers.CharField(
        default=None, max_length=None)
    precipitacion = serializers.FloatField(default=None)
    u_precipitacion = serializers.CharField(default=None, max_length=None)
    latitud = serializers.FloatField(default=None)
    u_latitud = serializers.CharField(default=None, max_length=None)
    longitud = serializers.FloatField(default=None)
    u_longitud = serializers.CharField(default=None, max_length=None)
    yb = serializers.FloatField(default=None)
    u_yb = serializers.CharField(default=None, max_length=None)
    conductividad = serializers.FloatField(default=None)
    u_conductividad = serializers.CharField(default=None, max_length=None)
    salinidad = serializers.FloatField(default=None)
    u_salinidad = serializers.CharField(default=None, max_length=None)
    ph = serializers.FloatField(default=None)
    u_ph = serializers.CharField(default=None, max_length=None)
    temperatura_agua = serializers.FloatField(default=None)
    u_temperatura_agua = serializers.CharField(default=None, max_length=None)
    od = serializers.FloatField(default=None)
    u_od = serializers.CharField(default=None, max_length=None)
    conductividad2 = serializers.FloatField(default=None)
    u_conductividad2 = serializers.CharField(default=None, max_length=None)


class DatosEstacionSerializer10(serializers.ModelSerializer):
    class Meta:
        model = VmAgm334580310
        fields = '__all__'


class DatosTritonSerializer(serializers.ModelSerializer):
    class Meta:
        model = VTriton
        fields = '__all__'


class DatosCTDSerializer(serializers.ModelSerializer):
    class Meta:
        model = VmAgm2068822
        fields = '__all__'


class DatosCTDSerializer2(serializers.ModelSerializer):
    class Meta:
        model = VmAgm3303822
        fields = '__all__'
