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

# Copiar archivos de composer primero
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Copiar resto del código
COPY . .

# Ejecutar scripts de composer
RUN composer run-script post-autoload-dump

# Instalar Node.js 20 LTS y compilar assets
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install \
    && npm run build

# Configurar Nginx
COPY docker/nginx.conf /etc/nginx/sites-enabled/default

# Crear usuario no root
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app /var/lib/nginx /var/log/nginx
USER appuser

EXPOSE 8000

# Iniciar PHP-FPM y Nginx
CMD php-fpm -D && nginx -g "daemon off;"