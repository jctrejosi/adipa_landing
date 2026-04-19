FROM php:8.4-fpm

# deps sistema
RUN apt-get update && apt-get install -y \
    git unzip curl \
    libzip-dev libpng-dev libonig-dev libxml2-dev \
    nginx \
    && docker-php-ext-install pdo pdo_mysql zip gd mbstring exif pcntl bcmath \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# 1. copiar solo composer (cache)
COPY composer.json composer.lock ./

# 2. instalar deps SIN scripts
RUN composer install --no-dev --optimize-autoloader --no-scripts

# 3. copiar código completo
COPY . .

# 4. ahora sí scripts de laravel
RUN php artisan package:discover \
 && php artisan config:cache \
 && php artisan route:cache \
 && php artisan view:cache

# permisos
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# node + build
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install \
    && npm run build

# nginx
COPY docker/nginx.conf /etc/nginx/sites-enabled/default

# start
COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

RUN mkdir -p /var/log/nginx /var/lib/nginx /run/nginx

EXPOSE 8000

CMD ["/start.sh"]