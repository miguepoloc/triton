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
    dir_v = models.CharField(max_length=4000, blank=True, null=True)
    um_dir_v = models.CharField(max_length=4000, blank=True, null=True)
    tem_ag = models.CharField(max_length=4000, blank=True, null=True)
    um_tem_ag = models.CharField(max_length=4000, blank=True, null=True)
    od = models.CharField(max_length=4000, blank=True, null=True)
    um_od = models.CharField(max_length=4000, blank=True, null=True)
    pr_at = models.CharField(max_length=4000, blank=True, null=True)
    um_pr_at = models.CharField(max_length=4000, blank=True, null=True)
    rg = models.CharField(max_length=4000, blank=True, null=True)
    um_rg = models.CharField(max_length=4000, blank=True, null=True)
    nm = models.CharField(max_length=4000, blank=True, null=True)
    um_nm = models.CharField(max_length=4000, blank=True, null=True)
    pr = models.CharField(max_length=4000, blank=True, null=True)
    um_pr = models.CharField(max_length=4000, blank=True, null=True)
    t_ai = models.CharField(max_length=4000, blank=True, null=True)
    um_t_ai = models.CharField(max_length=4000, blank=True, null=True)
    vel_v = models.CharField(max_length=4000, blank=True, null=True)
    um_vel_v = models.CharField(max_length=4000, blank=True, null=True)
    con = models.CharField(max_length=4000, blank=True, null=True)
    um_con = models.CharField(max_length=4000, blank=True, null=True)
    ph = models.CharField(max_length=4000, blank=True, null=True)
    um_ph = models.CharField(max_length=4000, blank=True, null=True)
    hr = models.CharField(max_length=4000, blank=True, null=True)
    um_hr = models.CharField(max_length=4000, blank=True, null=True)
    sal = models.CharField(max_length=4000, blank=True, null=True)
    um_sal = models.CharField(max_length=4000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vm_triton'


class VmAgm2068822(models.Model):
    id_muestreo = models.IntegerField(primary_key=True)
    id_estacion = models.IntegerField()
    nom_estacion = models.CharField(max_length=100, blank=True, null=True)
    id_muestreotx = models.CharField(max_length=40, blank=True, null=True)
    id_proyecto = models.IntegerField()
    id_metodologia = models.IntegerField()
    id_tematicas = models.IntegerField()
    fecha = models.DateField()
    fecha_ano = models.FloatField(blank=True, null=True)
    fecha_mes = models.CharField(max_length=7, blank=True, null=True)
    participantes = models.CharField(max_length=4000, blank=True, null=True)
    entidades = models.CharField(max_length=4000, blank=True, null=True)
    notas_generales = models.CharField(max_length=1000, blank=True, null=True)
    componente = models.CharField(max_length=2000, blank=True, null=True)
    componente_des = models.CharField(max_length=4000, blank=True, null=True)
    metodologia = models.CharField(max_length=2000, blank=True, null=True)
    metodologia_des = models.CharField(max_length=4000, blank=True, null=True)
    entidad = models.CharField(max_length=2000, blank=True, null=True)
    entidad_des = models.CharField(max_length=4000, blank=True, null=True)
    proyecto = models.CharField(max_length=2000, blank=True, null=True)
    proyecto_des = models.CharField(max_length=4000, blank=True, null=True)
    des_estacion = models.CharField(max_length=1200, blank=True, null=True)
    cod_estacion = models.CharField(max_length=81, blank=True, null=True)
    sus_estacion = models.CharField(max_length=2, blank=True, null=True)
    sus_estacion_des = models.CharField(max_length=400, blank=True, null=True)
    id_muestra = models.IntegerField(blank=True, null=True)
    notas = models.CharField(max_length=1000, blank=True, null=True)
    es_replica = models.FloatField(blank=True, null=True)
    fecha_registro = models.DateField(blank=True, null=True)
    variable = models.CharField(max_length=2000, blank=True, null=True)
    variable_des = models.CharField(max_length=4000, blank=True, null=True)
    valor = models.FloatField(blank=True, null=True)
    unidades_medida = models.CharField(max_length=2000, blank=True, null=True)
    unidades_medida_des = models.CharField(
        max_length=4000, blank=True, null=True)
    muestra = models.FloatField(blank=True, null=True)
    err_creacion = models.CharField(max_length=4000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vm_agm_2068_822'


class VmAgm3303822(models.Model):
    id_muestreo = models.IntegerField(primary_key=True)
    id_estacion = models.IntegerField()
    nom_estacion = models.CharField(max_length=100, blank=True, null=True)
    id_muestreotx = models.CharField(max_length=40, blank=True, null=True)
    id_proyecto = models.FloatField()
    id_metodologia = models.IntegerField()
    id_tematicas = models.IntegerField()
    fecha = models.DateField()
    fecha_ano = models.FloatField(blank=True, null=True)
    fecha_mes = models.CharField(max_length=7, blank=True, null=True)
    participantes = models.CharField(max_length=4000, blank=True, null=True)
    entidades = models.CharField(max_length=4000, blank=True, null=True)
    notas_generales = models.CharField(max_length=1000, blank=True, null=True)
    componente = models.CharField(max_length=2000, blank=True, null=True)
    componente_des = models.CharField(max_length=4000, blank=True, null=True)
    metodologia = models.CharField(max_length=2000, blank=True, null=True)
    metodologia_des = models.CharField(max_length=4000, blank=True, null=True)
    entidad = models.CharField(max_length=2000, blank=True, null=True)
    entidad_des = models.CharField(max_length=4000, blank=True, null=True)
    proyecto = models.CharField(max_length=2000, blank=True, null=True)
    proyecto_des = models.CharField(max_length=4000, blank=True, null=True)
    des_estacion = models.CharField(max_length=1200, blank=True, null=True)
    cod_estacion = models.CharField(max_length=81, blank=True, null=True)
    sus_estacion = models.CharField(max_length=2, blank=True, null=True)
    sus_estacion_des = models.CharField(max_length=400, blank=True, null=True)
    id_muestra = models.IntegerField(blank=True, null=True)
    notas = models.CharField(max_length=1000, blank=True, null=True)
    es_replica = models.FloatField(blank=True, null=True)
    quality_flag = models.FloatField(blank=True, null=True)
    fecha_registro = models.CharField(max_length=2000, blank=True, null=True)
    variable = models.CharField(max_length=2000, blank=True, null=True)
    variable_des = models.CharField(max_length=4000, blank=True, null=True)
    valor = models.FloatField(blank=True, null=True)
    unidades_medida = models.CharField(max_length=2000, blank=True, null=True)
    unidades_medida_des = models.CharField(
        max_length=4000, blank=True, null=True)
    muestra = models.CharField(max_length=2000, blank=True, null=True)
    err_creacion = models.CharField(max_length=4000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vm_agm_3303_822'


class Ctd_Lances(models.Model):
    id_muestreo = models.IntegerField(primary_key=True)
    id_estacion = models.IntegerField()
    id_proyecto = models.IntegerField()
    id_metodologia = models.IntegerField()
    id_tematicas = models.IntegerField()
    fecha = models.DateField()
    notas = models.CharField(max_length=1000, blank=True, null=True)
    fechasis = models.DateField()
    id_muestreotex = models.CharField(max_length=40, blank=True, null=True)
    latitudinicio_loc = models.FloatField(blank=True, null=True)
    longitudinicio_loc = models.FloatField(blank=True, null=True)
    prof_max_loc = models.FloatField(blank=True, null=True)
    prefijo_cdg_est_loc = models.CharField(
        max_length=1000, blank=True, null=True)
    codigo_estacion_loc = models.IntegerField()
    lugar = models.CharField(max_length=1000, blank=True, null=True)
    titulo = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ctd_lances'
