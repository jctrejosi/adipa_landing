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

# copiar solo composer (cache)
COPY composer.json composer.lock ./

# instalar deps
RUN composer install --no-dev --optimize-autoloader --no-scripts

# copiar código completo
COPY . .

# permisos
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# node + build
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install \
    && npm run build \
    && cp public/build/.vite/manifest.json public/build/manifest.json

# nginx
COPY docker/nginx.conf /etc/nginx/sites-enabled/default

# start
COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

RUN mkdir -p /var/log/nginx /var/lib/nginx /run/nginx

EXPOSE 8000

CMD ["/start.sh"]