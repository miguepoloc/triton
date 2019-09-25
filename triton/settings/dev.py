from .base import *

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

ALLOWED_HOSTS = ['*',]

# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}