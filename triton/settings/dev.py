from .base import *

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DEBUG = True
TEMPLATES[0]['OPTIONS']['debug'] = DEBUG

ALLOWED_HOSTS = [
    '*',
]

# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.oracle',
        'NAME': 'sci',
        'USER': 'oceanograficos',
        'PASSWORD': 'mareados',
        'HOST': '192.168.3.70',
        'PORT': '1521',
    },
    'neo_argos': {
        'ENGINE': 'django.db.backends.oracle',
        'NAME': 'sci',
        'USER': 'datosdecampo',
        'PASSWORD': 'paseos',
        'HOST': '192.168.3.70',
        'PORT': '1521',
    },
    'oceanograficos': {
        'ENGINE': 'django.db.backends.oracle',
        'NAME': 'sci',
        'USER': 'oceanograficos',
        'PASSWORD': 'mareados',
        'HOST': '192.168.3.70',
        'PORT': '1521',
    },
}