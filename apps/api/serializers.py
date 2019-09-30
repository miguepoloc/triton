from rest_framework import serializers
from .models import VmAgm334580310, VmAgm3345803

class MareaSerializer(serializers.Serializer):
    mes = serializers.IntegerField(default=None)
    dia = serializers.IntegerField(default=None)
    hora = serializers.CharField(default=None, max_length=None)
    minuto = serializers.IntegerField(default=None)
    altura = serializers.FloatField(default=None)
    marea = serializers.CharField(default=None, max_length=None)
    mareaTexto = serializers.CharField(default=None, max_length=None)

class DatosEstacionSerializer10(serializers.ModelSerializer):
    class Meta:
        model = VmAgm334580310
        fields = '__all__'

class DatosEstacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = VmAgm3345803
        fields = '__all__'