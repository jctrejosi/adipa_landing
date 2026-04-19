FROM php:8.4-fpm

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    nginx \
    && docker-php-ext-install pdo pdo_mysql zip gd mbstring exif pcntl bcmath \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copiar archivos de Composer primero (mejor caché)
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Copiar el resto del código
COPY . .

# Dar permisos a Laravel
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Ejecutar scripts de Composer
RUN composer run-script post-autoload-dump

# Instalar Node.js 20 LTS y compilar assets
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install \
    && npm run build

# Configurar Nginx
COPY docker/nginx.conf /etc/nginx/sites-enabled/default

# Copiar script de inicio y dar permisos
COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

# Crear directorios necesarios
RUN mkdir -p /var/log/nginx /var/lib/nginx /run/nginx

# Limpiar caché de apt
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

EXPOSE 8000

CMD ["/start.sh"]