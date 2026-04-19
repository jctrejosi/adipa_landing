# Proyecto Laravel – Versión B

Este README contiene todas las instrucciones necesarias para montar el proyecto en un entorno de desarrollo local y para desplegarlo en producción en Render.

## Estructura del proyecto

```plaintext
.
├── docker/
│   ├── nginx.conf          # Configuración de Nginx para el contenedor
│   └── start.sh            # Script de inicio del contenedor
├── js/
│   ├── app.js              # JavaScript principal
│   └── modules/            # Módulos JavaScript
│       ├── contact-form.js
│       ├── course-filters.js
│       ├── footer.js
│       ├── header.js
│       ├── hero-search.js
│       └── navbar.js
├── public/
│   ├── assets/             # Recursos estáticos
│   │   ├── flash.webp
│   │   ├── icons-whatsapp.svg
│   │   ├── logo-adipa.svg
│   │   └── preventa.webp
│   ├── .htaccess
│   ├── favicon.ico
│   ├── font.ttf
│   ├── hot                 # Archivo de Vite para HMR
│   ├── index.php           # Punto de entrada de la aplicación
│   └── robots.txt
├── stylus/
│   ├── app.styl            # Archivo Stylus principal
│   ├── base/
│   │   ├── reset.styl
│   │   └── variables.styl
│   ├── components/         # Estilos de componentes
│   │   ├── contact-form.styl
│   │   ├── course-list.styl
│   │   ├── filters.styl
│   │   ├── footer.styl
│   │   ├── header.styl
│   │   ├── hero-search.styl
│   │   ├── mobile-drawer.styl
│   │   └── navbar.styl
│   ├── layout/
│   └── pages/
│       └── home.styl
├── views/
│   ├── components/         # Componentes Blade
│   │   ├── contact-form.blade.php
│   │   ├── course-list.blade.php
│   │   ├── dropdown.blade.php
│   │   ├── filters.blade.php
│   │   ├── footer.blade.php
│   │   ├── header.blade.php
│   │   ├── hero-search.blade.php
│   │   ├── mobile-drawer.blade.php
│   │   └── navbar.blade.php
│   ├── data/               # Archivos de datos en PHP
│   │   ├── courses.php
│   │   ├── footer.php
│   │   ├── groupsFilter.php
│   │   ├── navbar.php
│   │   ├── rankingFilter.php
│   │   ├── socialLinks.php
│   │   └── sortOptions.php
│   ├── layouts/
│   │   └── app.blade.php   # Layout principal
│   └── pages/
│       └── home.blade.php  # Página de inicio
├── .env.example            # Plantilla de variables de entorno
├── composer.json           # Dependencias de PHP
├── composer.lock           # Versiones exactas de dependencias PHP
├── Dockerfile              # Definición de la imagen Docker
├── package.json            # Dependencias de Node.js y scripts
└── vite.config.js          # Configuración de Vites
```

## Requisitos previos de instalación

Para el desarrollo local, asegúrate de tener instaladas las siguientes herramientas:

- **PHP** versión 8.1 o superior
- **Composer** (gestor de dependencias de PHP)
- **Node.js** versión 18 o superior
- **npm** o **Yarn**

### Instalación de PHP y configuración de `php.ini`

#### En Windows

1. Descarga PHP desde [windows.php.net/download](https://windows.php.net/download/) (versión Thread Safe).
2. Extrae el contenido en `C:\php`.
3. Agrega `C:\php` a la variable de entorno `PATH`.
4. Renombra `php.ini-development` a `php.ini` y habilita las extensiones necesarias:
    - Descomenta (quita el `;`) las líneas:

      ```ini
      extension=zip
      extension=gd
      extension=mbstring
      extension=pdo_mysql
      extension=fileinfo
      ```

5. Configura:

    ```ini
    memory_limit = 256M
    max_execution_time = 60
    ```

#### En Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install php8.1 php8.1-cli php8.1-common php8.1-zip php8.1-gd php8.1-mbstring php8.1-mysql php8.1-xml php8.1-curl
```

El archivo `php.ini` suele estar en `/etc/php/8.1/cli/php.ini`.

### Instalar Composer

Sigue las instrucciones oficiales en [getcomposer.org/download/](https://getcomposer.org/download/).

### Verificar versiones

```bash
php --version
composer --version
node --version
npm --version
```

## Desarrollo local

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/jctrejosi/adipa_landing
    cd adipa_landing/version_b
    ```

2. Instalar dependencias de PHP:

    ```bash
    composer install
    ```

3. Instalar dependencias de Node.js:

    ```bash
    npm install
    ```

4. Configurar variables de entorno:

    ```bash
    cp .env.example .env
    ```

    Ajusta las siguientes variables según tu entorno:

    ```env
    APP_ENV=local
    APP_DEBUG=true
    APP_URL=http://localhost:8000

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=nombre_bd
    DB_USERNAME=usuario
    DB_PASSWORD=contraseña
    ```

5. Generar clave de aplicación:

    ```bash
    php artisan key:generate
    ```

6. Compilar assets (CSS/JS):
    - Para desarrollo con recarga en caliente:

      ```bash
      npm run dev
      ```

    - Para compilar una vez:

      ```bash
      npm run build
      ```

7. Iniciar el servidor de desarrollo:

    ```bash
    php artisan serve
    ```

    Abre [http://localhost:8000](http://localhost:8000) en tu navegador.

### Scripts disponibles en desarrollo

| Comando                | Descripción                                           |
|------------------------|-------------------------------------------------------|
| `php artisan serve`    | Inicia el servidor de desarrollo de PHP.              |
| `npm run dev`          | Inicia Vite en modo watch con Hot Module Replacement. |
| `npm run build`        | Compila los assets para producción.                   |
| `composer install`     | Instala las dependencias de PHP.                      |
| `php artisan key:generate` | Genera la clave de aplicación.                    |

## Despliegue en producción

El proyecto incluye un Dockerfile listo para ser desplegado en Render como un Web Service con Docker.

### Pasos para desplegar en Render

1. **Preparar el repositorio**: Asegúrate de que el código esté subido a un repositorio de Git.
2. **Crear un nuevo servicio en Render**:
    - Inicia sesión en Render Dashboard.
    - Haz clic en `New +` y selecciona `Web Service`.
    - Conecta el repositorio de Git donde está el proyecto.
    - Render detectará automáticamente el Dockerfile en la raíz.
3. **Configurar el servicio**:
    - **Name**: Elige un nombre único (ej. `adipa-landing`).
    - **Region**: Selecciona la más cercana a tu audiencia.
    - **Branch**: `main` (o la rama que desees desplegar).
    - **Environment**: Docker.
    - **Plan**: Elige el plan adecuado.
4. **Configurar variables de entorno**:
    - Agrega las variables necesarias para producción:

      ```env
      APP_ENV=production
      APP_DEBUG=false
      APP_URL=https://adipa-landing.onrender.com
      APP_KEY=clave_generada
      DB_CONNECTION=null
      CACHE_DRIVER=array
      SESSION_DRIVER=array
      ```

    - Genera `APP_KEY` localmente:

      ```bash
      php artisan key:generate --show
      ```

5. **Desplegar**:
    - Haz clic en `Create Web Service`. Render comenzará a construir la imagen Docker y luego la desplegará.
    - Una vez completado, Render proporcionará una URL pública.

### Actualizaciones posteriores

Cada vez que hagas `git push` a la rama configurada, Render automáticamente reconstruirá y desplegará la nueva versión.

## 🐳 Uso con Docker localmente (alternativa)

1. Construir la imagen:

    ```bash
    docker build -t adipa-landing .
    ```

2. Ejecutar el contenedor:

    ```bash
    docker run -p 8000:8000 --env-file .env adipa-landing
    ```

3. Abrir [http://localhost:8000](http://localhost:8000).

## Solución de problemas comunes

- **Error de permisos en `storage` o `bootstrap/cache`**:

  ```bash
  chmod -R 775 storage bootstrap/cache
  chown -R www-data:www-data storage bootstrap/cache
  ```

- **Error "No application encryption key has been specified"**:
  Asegúrate de haber ejecutado `php artisan key:generate` y que la variable `APP_KEY` esté definida.
- **Los assets no se cargan en producción**:
  Verifica que `npm run build` se haya ejecutado correctamente.
- **Vite no funciona en desarrollo**:
  Asegúrate de tener `npm run dev` ejecutándose en una terminal aparte.
