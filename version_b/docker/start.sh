#!/bin/bash

mkdir -p /run/nginx /var/log/nginx /var/lib/nginx

chown -R www-data:www-data /run/nginx /var/log/nginx /var/lib/nginx

# esperar un poco por si acaso (opcional)
sleep 2

# limpiar y cachear config con ENV reales
php artisan config:clear
php artisan cache:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

php-fpm -D
nginx -g "daemon off;"