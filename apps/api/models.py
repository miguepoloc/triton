from django.db import models

class VmAgm334580310(models.Model):
    id_muestreo = models.FloatField(primary_key=True)
    id_estacion = models.FloatField()
    nom_estacion = models.CharField(max_length=100, blank=True, null=True)
    id_proyecto = models.FloatField()
    id_metodologia = models.FloatField()
    id_tematicas = models.FloatField()
    fecha = models.DateField()
    fecha_ano = models.FloatField(blank=True, null=True)
    fecha_mes = models.CharField(max_length=7, blank=True, null=True)
    des_estacion = models.CharField(max_length=1200, blank=True, null=True)
    cod_estacion = models.CharField(max_length=81, blank=True, null=True)
    sus_estacion = models.CharField(max_length=2, blank=True, null=True)
    sus_estacion_des = models.CharField(max_length=400, blank=True, null=True)
    punto = models.CharField(max_length=4000, blank=True, null=True)
    punto_des = models.CharField(max_length=4000, blank=True, null=True)
    notas = models.CharField(max_length=1000, blank=True, null=True)
    es_replica = models.FloatField(blank=True, null=True)
    temperatura = models.FloatField(blank=True, null=True)
    presion = models.FloatField(blank=True, null=True)
    humedad_relativa = models.FloatField(blank=True, null=True)
    velocidad_viento = models.FloatField(blank=True, null=True)
    direccion_viento = models.FloatField(blank=True, null=True)
    desviacion_viento = models.FloatField(blank=True, null=True)
    err_creacion = models.CharField(max_length=4000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vm_agm_3345_803_10'