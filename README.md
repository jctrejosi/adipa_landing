# Prueba técnica ADIPA

Esta prueba técnica tiene como objetivo evaluar la capacidad de desarrollo frontend en dos stacks diferentes, priorizando criterio técnico, organización del código y consistencia visual.

El ejercicio consiste en construir una landing page de catálogo de cursos inspirada en la plataforma de ADIPA:

<https://adipa.cl/cursos>

---

## Resultados

versión a: <https://adipa-landing.vercel.app/>

versión b: <https://adipa-landing.onrender.com>

## Documentación de cada implementación

Cada versión del proyecto contiene su propia documentación con detalles específicos de instalación, ejecución y build.

- **Versión A (Next.js)**  
  👉 [ver documentación](./version_a/README.md)

- **Versión B (Laravel)**  
  👉 [ver documentación](./version_b/README.md)

## Consideraciones de implementación

### versión a (next.js)

- Next.js con App Router
- TypeScript en modo estricto
- Componentización reutilizable y tipada
- Manejo de datos locales estructurados (JSON o constantes)
- Uso de Tailwind CSS para estilos
- Arquitectura limpia entre componentes, layouts y data

---

### versión b (laravel)

- Blade como motor de plantillas
- Estructura modular de vistas
- Stylus con metodología BEM
- jQuery para interacciones del lado del cliente
- Uso de Gulp o Laravel Mix para build de assets
- Separación clara entre vistas y partials reutilizables

---

## Criterios de evaluación

La evaluación se basa en calidad técnica, implementación y buenas prácticas.

### criterios principales

- **calidad del código**
  - código limpio, legible y mantenible
  - buena organización del proyecto

- **arquitectura**
  - separación clara de responsabilidades
  - componentes/vistas reutilizables
  - estructura coherente con el stack

- **funcionalidad**
  - filtrado de cursos correctamente (client-side)
  - validación de formulario con feedback visual
  - comportamiento consistente

- **ui y responsive**
  - buena interpretación del diseño de referencia
  - coherencia visual
  - adaptación correcta a mobile, tablet y desktop

- **uso del stack**
  - Next.js: TypeScript estricto, App Router, componentes tipados
  - Laravel: Blade modular, Stylus + BEM, jQuery

- **buenas prácticas**
  - uso correcto de Git con commits claros
  - consistencia en naming y estructura

---

### bonus (valor agregado)

- deploy funcional (Vercel o hosting equivalente)
- animaciones y microinteracciones
- accesibilidad (HTML semántico, ARIA básico)
- SEO básico (headings y meta tags)
- dark mode con persistencia
- tests básicos
- buen score en Lighthouse
