# Proyecto Next.js – Versión A

Este README contiene todas las instrucciones necesarias para montar el proyecto en un entorno de desarrollo local y para desplegarlo en producción en Vercel.

## Estructura del proyecto

```text
.
├── public/               # Archivos estáticos (imágenes, fuentes, etc.)
├── src/
│   └── app/              # Rutas y componentes de la App Router
        ├── components/   # Componentes de la página
│       ├── layout.tsx
│       ├── page.tsx      # Aquí se llaman los componentes (Header, Footer, ...)
│       └── globals.css
├── .env.example          # Plantilla de variables de entorno
├── next.config.js        # Configuración de Next.js
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
└── yarn.lock             # Versiones de dependencias
```

### Estructura de un componente

```text
├── components/
│   └── nameComponent/
│       ├── index.tsx      # Principal (Html, estilos y lógica)
│       ├── types.ts       # Declaración de los tipos
│       ├── helpers.ts     # Funciones complejas
│       └── index.test.tsx # Archivo con los test de jest
```

## Requisitos previos de instalación

Asegúrate de tener instaladas las siguientes herramientas en tu sistema:

- **Node.js** versión 18.17.0 o superior
- **Yarn** versión 1.22.0 o superior

### Verificar versiones

```bash
node --version
yarn --version
```

### Instalar Yarn (si no está presente)

```bash
npm install --global yarn
```

## Desarrollo local

1. **Clonar el repositorio**

  ```bash
  git clone https://github.com/jctrejosi/adipa_landing.git
  cd adipa_landing/version_a
  ```

2. **Instalar dependencias**

  ```bash
  yarn install
  ```

3. **Iniciar el servidor de desarrollo**

  ```bash
  yarn dev
  ```

  Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

  *La página se recargará automáticamente al editar los archivos del proyecto.

### Scripts disponibles en desarrollo

| Comando      | Descripción                                           |
|--------------|-------------------------------------------------------|
| `yarn dev`   | Inicia el servidor de desarrollo con recarga en caliente. |
| `yarn build` | Compila la aplicación para producción.                |
| `yarn start` | Inicia el servidor en modo producción (requiere `yarn build` previo). |
| `yarn lint`  | Ejecuta el linter para verificar la calidad del código. |
| `yarn test`  | Ejecuta los test de los componentes. |

## Despliegue en producción (Vercel)

El proyecto está optimizado para ser desplegado en Vercel.

### 1. Verificar la compilación local

Antes de desplegar, es recomendable ejecutar la compilación de producción localmente para asegurar que no hay errores:

```bash
yarn build
```

Si la compilación finaliza sin errores, el proyecto está listo para producción.

### 2. Desplegar en Vercel

1. Crea una cuenta en Vercel.
2. En el dashboard de Vercel, haz clic en **Add New… → Project**.
3. Conectar con Github y selecciona el repositorio del proyecto.
4. Vercel detectará automáticamente que se trata de un proyecto Next.js. Los ajustes por defecto son:
  - **Framework Preset**: Next.js
  - **Build Command**: `yarn build`
  - **Output Directory**: `.next`
  - **Install Command**: `yarn install`
5. Dar clic en **Deploy**.

*Una vez finalizado, Vercel te proporcionará una URL pública (por ejemplo, `https://proyecto.vercel.app`) para acceder a la aplicación en producción.
