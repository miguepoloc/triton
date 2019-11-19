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

class DatosEstacionSerializer10(serializers.ModelSerializer):
    class Meta:
        model = VmAgm334580310
        fields = '__all__'

class DatosCoralinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = VmAgm2507816
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