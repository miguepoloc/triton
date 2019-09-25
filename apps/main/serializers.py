from rest_framework import serializers

class MareaSerializer(serializers.Serializer):
    mes = serializers.IntegerField(default=None)
    dia = serializers.IntegerField(default=None)
    hora = serializers.CharField(default=None, max_length=None)
    minuto = serializers.IntegerField(default=None)
    altura = serializers.FloatField(default=None)
    marea = serializers.CharField(default=None, max_length=None)
    mareaTexto = serializers.CharField(default=None, max_length=None)