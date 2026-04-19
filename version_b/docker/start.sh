#!/bin/bash

# Crear directorios necesarios para Nginx
mkdir -p /run/nginx /var/log/nginx /var/lib/nginx

# Dar permisos
chown -R www-data:www-data /run/nginx /var/log/nginx /var/lib/nginx

# Iniciar PHP-FPM en segundo plano
php-fpm -D

# Iniciar Nginx en primer plano
nginx -g "daemon off;"