#!/bin/sh
set -e

echo "=== STARTING CONTAINER ==="

# crear directorios necesarios
mkdir -p /run/nginx /var/log/nginx /var/lib/nginx

# permisos
chown -R www-data:www-data /run/nginx /var/log/nginx /var/lib/nginx /app/storage /app/bootstrap/cache

# info básica (debug)
echo "APP_ENV=$APP_ENV"
echo "APP_DEBUG=$APP_DEBUG"

# limpiar caches (no romper si algo falla)
php artisan config:clear || true
php artisan cache:clear || true
php artisan route:clear || true
php artisan view:clear || true

# reconstruir caches con ENV real
php artisan config:cache || true
php artisan route:cache || true
php artisan view:cache || true

echo "=== LARAVEL READY ==="

# iniciar php-fpm en foreground (logs visibles)
php-fpm -F &

# iniciar nginx en foreground
nginx -g "daemon off;"