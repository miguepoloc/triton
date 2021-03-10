# Generador de archivos netcdf para el PORTAL OCEANOGRAFICO - INVEMAR
# Variable: ANOMALIA DEL NIVEL DEL MAR Y CORRIENTES GEOSTROFICAS
# ver: 1.0 (Preliminar)
# Autor: Marco Correa (marco.correa@invemar.org.co)

import numpy as np
import matplotlib.pyplot as plt
from pylab import *
import netCDF4
import gzip
import os
import glob
from scipy.interpolate import griddata
from scipy.interpolate import interp2d

# Fecha objetivo
n = '20160110'

# ruta y prefijo nivel del mar
ndp = "/home/sistemas/geo-conectividad/Python_work/data_proces/SLA-UV/"

# leyendo netcdf nivel del mar
#os.system('gzip -d ' + ncd +n + '*')
#nc=glob.glob(ncd +n + '*.nc')
# nc=nc[0] #nc=nc.pop()
nca = ndp+'vel20210309.nc'

# cuadricula alta resolucion
rlon = array([-90, -60])  # +360
rlat = array([8, 23])
loni, lati = np.mgrid[rlon[0]:rlon[1]:301j, rlat[0]:rlat[1]:151j]

# recuperando variables
file1 = netCDF4.Dataset(nca, 'r')
print(file1)
lat0 = file1.variables['latitude'][:]
print(lat0)
lon0 = file1.variables['longitude'][:]
print(lon0)
time = file1.variables['time'][:]
ugos = file1.variables['ugos'][0, :, :]
vgos = file1.variables['vgos'][0, :, :]
ugosa = file1.variables['ugosa'][0, :, :]
vgosa = file1.variables['vgosa'][0, :, :]

# incrementando resolcion por interpolacion
x0, y0 = meshgrid(lon0, lat0)  # regular de entrada

a = nonzero(ugos > -2147483647)  # indice de datos
ugosi = griddata((x0[a], y0[a]), ugos[a], (loni, lati), method='linear')

a = nonzero(vgos > -2147483647)  # indice de datos
vgosi = griddata((x0[a], y0[a]), vgos[a], (loni, lati), method='linear')

a = nonzero(ugosa > -2147483647)  # indice de datos
ugosai = griddata((x0[a], y0[a]), ugosa[a], (loni, lati), method='linear')

a = nonzero(vgosa > -2147483647)  # indice de datos
vgosai = griddata((x0[a], y0[a]), vgosa[a], (loni, lati), method='linear')


# redimensionando
lon = loni[:, 0]
lat = lati[0, :]

# Generando nuevo netcdf
prosfile = ndp+'vel20210309_0.nc'
#ncfile = netCDF4.Dataset(prosfile,'w',format='NETCDF4_CLASSIC')
ncfile = netCDF4.Dataset(prosfile, 'w', format='NETCDF3_CLASSIC')
#ncfile.description = "Anomalia del nivel del mar - Portal Ocenografico del Caribe Colombiano"

# Create dimensions
ncfile.createDimension('time', 1)
ncfile.createDimension('latitude', len(lat))
ncfile.createDimension('longitude', len(lon))

# define variables
ugp = ncfile.createVariable(
    'ugos', 'i4', ('time', 'latitude', 'longitude'), fill_value=-2147483647)
timep = ncfile.createVariable('time', 'f4', 'time')
latp = ncfile.createVariable('latitude', 'f4', 'latitude')
lonp = ncfile.createVariable('longitude', 'f4', 'longitude')
vgp = ncfile.createVariable(
    'vgos', 'i4', ('time', 'latitude', 'longitude'), fill_value=-2147483647)
ugap = ncfile.createVariable(
    'ugosa', 'i4', ('time', 'latitude', 'longitude'), fill_value=-2147483647)
vgap = ncfile.createVariable(
    'vgosa', 'i4', ('time', 'latitude', 'longitude'), fill_value=-2147483647)

"""
ugp = ncfile.createVariable('ugos','i4',('time','latitude','longitude'), fill_value=-2147483647)
timep= ncfile.createVariable('time','f4','time', chunksizes=1)
latp = ncfile.createVariable('latitude','f4','latitude', chunksizes=50)
lonp = ncfile.createVariable('longitude','f4','longitude', chunksizes=50)
vgp = ncfile.createVariable('vgos','i4',('time','latitude','longitude'), fill_value=-2147483647, chunksizes= [1,  50,  50])
ugap = ncfile.createVariable('ugosa','i4',('time','latitude','longitude'), fill_value=-2147483647, chunksizes= [1,  50,  50])
vgap = ncfile.createVariable('vgosa','i4',('time','latitude','longitude'), fill_value=-2147483647, chunksizes= [1,  50,  50])
"""


# ingresando datos a variables
latp[:] = lat
lonp[:] = lon
timep[:] = time
ugp[:] = ugosi.T
vgp[:] = vgosi.T
ugap[:] = ugosai.T
vgap[:] = vgosai.T


# Ingresando atributos
ugp.coordinates = 'time latitude longitude '
ugp.grid_mapping = 'crs'
ugp.long_name = 'Absolute geostrophic velocity: zonal component'
ugp.scale_factor = 0.0001
ugp.standard_name = 'surface_geostrophic_eastward_sea_water_velocity'
ugp.units = 'm/s'
#ugp._ChunkSizes   = [1, 50, 50]

timep.axis = 'T'
timep.calendar = 'gregorian'
timep.long_name = 'Time'
timep.standard_name = 'time'
timep.units = 'days since 1950-01-01 00:00:00'
#timep._ChunkSizes         = 1
timep._CoordinateAxisType = 'Time'

latp.axis = 'Y'
latp.bounds = 'lat_bnds'
latp.long_name = 'Latitude'
latp.standard_name = 'latitude'
latp.units = 'degrees_north'
latp.valid_max = rlat[1]
latp.valid_min = rlat[0]
#latp._ChunkSizes         = 50
latp._CoordinateAxisType = 'Lat'

lonp.axis = 'X'
lonp.bounds = 'lon_bnds'
lonp.long_name = 'Longitude'
lonp.standard_name = 'longitude'
lonp.units = 'degrees_east'
lonp.valid_max = rlon[1]
lonp.valid_min = rlat[0]
#lonp._ChunkSizes         = 50
lonp._CoordinateAxisType = 'Lon'

vgp.coordinates = 'time latitude longitude '
vgp.grid_mapping = 'crs'
vgp.long_name = 'Absolute geostrophic velocity: meridian component'
vgp.scale_factor = 0.0001
vgp.standard_name = 'surface_geostrophic_northward_sea_water_velocity'
vgp.units = 'm/s'
#vgp._ChunkSizes   = [1, 50, 50]

vgap.ancillary_variables = 'err_vgosa'
vgap.comment = 'The geostrophic velocity anomalies are referenced to the [1993, 2012] period'
vgap.coordinates = 'time latitude longitude '
vgap.grid_mapping = 'crs'
vgap.long_name = 'Geostrophic velocity anomalies: meridian component'
vgap.scale_factor = 0.0001
vgap.standard_name = 'surface_geostrophic_northward_sea_water_velocity_assuming_sea_level_for_geoid'
vgap.units = 'm/s'
#vgap._ChunkSizes         = [1, 50, 50]

ugap.ancillary_variables = 'err_ugosa'
ugap.comment = 'The geostrophic velocity anomalies are referenced to the [1993, 2012] period'
ugap.coordinates = 'time latitude longitude '
ugap.grid_mapping = 'crs'
ugap.long_name = 'Geostrophic velocity anomalies: zonal component'
ugap.scale_factor = 0.0001
ugap.standard_name = 'surface_geostrophic_eastward_sea_water_velocity_assuming_sea_level_for_geoid'
ugap.units = 'm/s'
#ugap._ChunkSizes         = [1, 50, 50]

ncfile.close()

#u = ncfile.createVariable('u','d',('lat','lon'), fill_value=-2147483647)
#v = ncfile.createVariable('v','d',('lat','lon'), fill_value=-2147483647)
#s = ncfile.createVariable('s','d',('lat','lon'), fill_value=-2147483647)
#longitude[:] = lon
#latitude[:] = lat
#sla[:] = h2
#u[:] = gu
#v[:] = gv
#s[:]=u[:]**2 + v[:]**2
# print s
# Atributos nc

#latitude.axis = "Y"
#latitude.bounds = "lat_bnds"
#latitude.long_name = "Latitude"
#latitude.standard_name = "latitude"
#latitude.units = "degrees_north"
#latitude.valid_max = lat.max()
#latitude.valid_min = lat.min()
#latitude.coordinate_defines  = 'center'

#longitude.axis = "X"
#longitude.bounds = "lon_bnds"
#longitude.long_name = "Longitude"
#longitude.standard_name = "longitude"
#longitude.units = "degrees_east"
#longitude.valid_max = lon.max()
#longitude.valid_min = lon.min()
#longitude.coordinate_defines  = 'center'
"""
sla.coordinates = "lon lat"
#sla.grid_mapping = "crs"
sla.long_name = "Sea Level Anomalies"
#sla.scale_factor = 0.0001
sla.standard_name = "sea_surface_height_above_sea_level"
sla.units = "m"
"""
#u.coordinates= "lon lat"
#u.grid_mapping= "crs"
#u.long_name= "Geostrophic velocity anomalies: zonal component"
#u.scale_factor = 0.0001
#u.standard_name = " surface_eastward_geostrophic_sea_water_velocity_assuming_sea_level_for_geoid"
#u.units  = "m s-1"
#u.coordinates   = 'latitude longitude'

#v.coordinates= "lon lat"
#v.grid_mapping= "crs"
#v.long_name= "Geostrophic velocity anomalies: meridian component"
#v.scale_factor = 0.0001
#v.standard_name = " surface_northward_geostrophic_sea_water_velocity_assuming_sea_level_for_geoid"
#v.units  = "m s-1"
#v.coordinates   = 'latitude longitude'
"""
s.coordinates= "lon lat"
s.grid_mapping= "crs"
s.long_name= "Geostrophic velocity anomalies"
#v.scale_factor = 0.0001
s.standard_name = " surface_geostrophic_sea_water_velocity_assuming_sea_level_for_geoid"
s.units  = "m s-1"
"""


# close ncfile
# ncfile.close()
