FROM php:8.2-cli

# instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    git unzip curl libzip-dev zip \
    && docker-php-ext-install pdo pdo_mysql

# instalar composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# copiar proyecto
COPY . .

# instalar dependencias PHP
RUN composer install --no-dev --optimize-autoloader

# instalar node + build frontend
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install \
    && npm run build

# puerto
EXPOSE 10000

# comando de arranque
CMD php -S 0.0.0.0:${PORT:-10000} -t public