from django.db import models

class VmAgm334580310(models.Model):
    id_muestreo = models.IntegerField(primary_key=True)
    id_estacion = models.IntegerField()
    nom_estacion = models.CharField(max_length=100, blank=True, null=True)
    id_proyecto = models.IntegerField()
    id_metodologia = models.IntegerField()
    id_tematicas = models.IntegerField()
    fecha = models.CharField(max_length=100, blank=True, null=True)
    fecha_ano = models.IntegerField(blank=True, null=True)
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


class VmAgm2507816(models.Model):
    id_muestreo = models.IntegerField(primary_key=True)
    id_estacion = models.IntegerField()
    nom_estacion = models.CharField(max_length=100, blank=True, null=True)
    id_proyecto = models.IntegerField()
    id_metodologia = models.IntegerField()
    id_tematicas = models.IntegerField()
    fecha = models.CharField(max_length=100, blank=True, null=True)
    fecha_ano = models.FloatField(blank=True, null=True)
    fecha_mes = models.CharField(max_length=7, blank=True, null=True)
    fecha_descarga = models.DateField(blank=True, null=True)
    proyecto = models.CharField(max_length=2000, blank=True, null=True)
    proyecto_des = models.CharField(max_length=4000, blank=True, null=True)
    des_estacion = models.CharField(max_length=1200, blank=True, null=True)
    cod_estacion = models.CharField(max_length=81, blank=True, null=True)
    sus_estacion = models.CharField(max_length=2, blank=True, null=True)
    sus_estacion_des = models.CharField(max_length=400, blank=True, null=True)
    notas = models.CharField(max_length=1000, blank=True, null=True)
    es_replica = models.FloatField(blank=True, null=True)
    variable = models.CharField(max_length=2000, blank=True, null=True)
    variable_des = models.CharField(max_length=4000, blank=True, null=True)
    fecha_hora = models.CharField(max_length=100, blank=True, null=True)
    valor = models.FloatField(blank=True, null=True)
    unidades = models.CharField(max_length=2000, blank=True, null=True)
    unidades_des = models.CharField(max_length=4000, blank=True, null=True)
    err_creacion = models.CharField(max_length=4000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vm_agm_2507_816'

class VTriton(models.Model):
    id_muestreo = models.IntegerField(primary_key=True)
    id_estacion = models.IntegerField()
    des_estacion = models.CharField(max_length=1200, blank=True, null=True)
    fecha_hora = models.CharField(max_length=100, blank=True, null=True)
    dir_v = models.FloatField(blank=True, null=True)
    tem_ag = models.FloatField(blank=True, null=True)
    od = models.FloatField(blank=True, null=True)
    pr_at = models.FloatField(blank=True, null=True)
    rg = models.FloatField(blank=True, null=True)
    nm = models.FloatField(blank=True, null=True)
    pr = models.FloatField(blank=True, null=True)
    t_ai = models.FloatField(blank=True, null=True)
    vel_v = models.FloatField(blank=True, null=True)
    con = models.FloatField(blank=True, null=True)
    ph = models.FloatField(blank=True, null=True)
    hr = models.FloatField(blank=True, null=True)
    sal = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vm_triton'