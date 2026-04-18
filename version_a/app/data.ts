import { Course, SortOption } from "./components/CourseList/types";

export const groupsFilter = [
  {
    title: "Área Temática",
    options: [
      {
        label: "Psicología Clínica y Salud Mental Infantil y Adolescente",
        value: "escuela-en-salud-mental-infantojuvenil",
      },
      {
        label: "Psicología Clínica y Salud Mental en la Adultez",
        value: "escuela-en-salud-mental-adultos",
      },
      {
        label: "Educación y Neurodesarrollo",
        value: "escuela-de-educacion-y-neurodesarrollo",
      },
      {
        label: "Psicología Jurídica y Forense",
        value: "escuela-psicosocial-juridica",
      },
      {
        label: "Psicología Organizacional y del Trabajo",
        value: "escuela-de-psicologia-organizacional",
      },
      {
        label: "Neurociencias",
        value: "neurociencias",
      },
    ],
  },
  {
    title: "Tipo de programa",
    options: [
      { label: "Cursos", value: "cursos" },
      { label: "Acreditaciones", value: "acreditaciones" },
      { label: "Especializaciones", value: "especializaciones" },
      { label: "Sesiones Magistrales", value: "sesion-magistral" },
      { label: "Diplomados", value: "diplomados" },
      { label: "Postítulos", value: "postitulos" },
    ],
  },
  {
    title: "Modalidad",
    options: [
      { label: "En Vivo", value: "en-vivo" },
      { label: "Asincrónica", value: "asincronica" },
      { label: "Presencial", value: "presencial" },
      { label: "Mixta", value: "mixta" },
    ],
  },
  /*
  {
    title: "Categoría",
    options: [
      { label: "Autismo", value: "autismo" },
      {
        label: "Primeros auxilios psicológicos",
        value: "primeros-auxilios-psicologicos",
      },
      {
        label: "Psicología Clínica",
        value: "psicologia-clinica",
      },
      {
        label: "Psicología Educacional",
        value: "psicologia-educacional",
      },
      {
        label: "Psicología Jurídica",
        value: "psicologia-juridica",
      },
      {
        label: "Psicología Social Comunitaria",
        value: "psicologia-social-comunitaria",
      },
      {
        label: "Test Psicológicos",
        value: "test-psicologicos",
      },
    ],
  },
  */
  {
    title: "Rango de Precio",
    options: [
      { label: "Menor a $25.000", value: "0-25000" },
      { label: "$25.000 a $50.000", value: "25000-50000" },
      { label: "$50.000 a $100.000", value: "50000-100000" },
      { label: "Más de $100.000", value: "100000+" },
    ],
  },
  {
    title: "Rango de Horas",
    options: [
      { label: "0 a 4 horas", value: "0-4" },
      { label: "5 a 8 horas", value: "5-8" },
      { label: "9 a 16 horas", value: "9-16" },
      { label: "Más de 16 horas", value: "16+" },
    ],
  },
  {
    title: "Rango de Descuento",
    options: [
      { label: "0% a 10%", value: "0-10" },
      { label: "11% a 20%", value: "11-20" },
      { label: "21% a 30%", value: "21-30" },
      { label: "Más de 30%", value: "30+" },
    ],
  },
];

export const rankingFilter = [
  { label: "Todos", value: "*" },
  { label: "Top 10 semanal", value: "topten" },
  { label: "Más Populares", value: "morepopular" },
  { label: "Mejores Valorados", value: "recommended" },
  { label: "Nuevos Lanzamientos", value: "newreleases" },
  {
    label: "Ofertas Flash",
    value: "flash_deals",
    icon: "/assets/flash.webp",
  },
  {
    label: "Pre Lanzamiento",
    value: "presale",
    icon: "/assets/preventa.webp",
  },
];

export const orderFilter: SortOption[] = [
  { label: "Todos", value: "*" },
  { label: "Mayor Precio", value: "price-desc" },
  { label: "Menor Precio", value: "price-asc" },
  { label: "Más próximo", value: "prox-asc" },
  { label: "Menos próximo", value: "prox-desc" },
];

export const coursesData: Course[] = [
  {
    id: "644911",
    title:
      "Curso: Abordaje de niñeces y familias desde el AFT-PF (Acompañamiento Familiar Territorial: Programa de Prevención Focalizada)",
    description:
      "Fortalecer competencias técnicas y relacionales de los equipos AFT-PF para una intervención familiar efectiva, en coherencia con los principios y enfoque del modelo de Mejor Niñez.",
    startDate: "07/04/2026",
    progress: "En progreso",
    rating: 4.9,
    price: "$40.000 CLP",
    originalPrice: "$52.000 CLP",
    discount: 23,
    isLive: true,
    isInProgress: true,
    hours: 12,
    teacher: "Mg. TS. Lorena Carmona y Mg. Ps. Alicia Fuentes",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/05/abordaje-de-nineces-y-familias-desde-el-aft-pf-acompanamiento-familiar-territorial-programa-de-prevencion-focalizada-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/abordaje-de-ninieces-y-familias-desde-el-aft-pf/",
    category: "Cursos",
    modality: "En Vivo",
    areaTematica: "Psicología Social Comunitaria",
  },
  {
    id: "950792",
    title:
      "Masterclass: Salud mental en los contextos educativos: Estrategias preventivas en la infancia y adolescencia autista",
    description:
      "Proporcionar estrategias teóricas y prácticas para el diseño de estrategias preventivas y de acompañamiento integral, que resguarden la salud mental y el bienestar emocional de la infancia y adolescencia autista dentro de los contextos educativos.",
    startDate: "07/04/2026",
    progress: "En progreso",
    price: "$5.000 CLP",
    originalPrice: "$10.000 CLP",
    discount: 50,
    isLive: true,
    isInProgress: true,
    hours: 3,
    teacher:
      "Ps. Alejandra González Cavieres y Mg (c). EDI. Marcela Villegas Otárola",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/04/portada-masterclass-salud-mental-en-los-contextos-educativos-estrategias-preventivas-en-la-infancia-y-adolescencia-autista-abril-26-curso-adipa.webp",
    url: "https://adipa.cl/cursos/salud-mental-contextos-educativos-estrategias-preventivas-autismo/",
    category: "Cursos",
    modality: "En Vivo",
    areaTematica: "neurociencias",
  },
  {
    id: "422846",
    title:
      "Curso: Técnicas Efectivas de Terapia Cognitivo-Conductual en Psicoterapia",
    description:
      "Aplicar conocimientos avanzados y habilidades prácticas en la aplicación de técnicas de Terapia Cognitivo-Conductual (TCC) en diversos contextos de psicoterapia.",
    startDate: "08/04/2026",
    progress: "En progreso",
    rating: 5.0,
    price: "$40.000 CLP",
    originalPrice: "$60.000 CLP",
    discount: 33,
    isLive: true,
    isInProgress: true,
    hours: 16,
    teacher: "PhD. Mg. Ps. Jonathan Martínez",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/07/portada-tecnicas-efectivas-de-terapia-cognitivo-conductual-en-psicoterapia-ene-26-curso-adipa.webp",
    url: "https://adipa.cl/cursos/tecnicas-efectivas-terapia-cognitivo-conductual-psicoterapia/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "2851",
    title:
      "Diplomado en Psicología Educacional: Convivencia escolar, gestión integral de aulas inclusivas y A.M.A.R.-E",
    description:
      "Fortalecer las competencias profesionales para el ejercicio de la psicología en contextos educacionales, integrando marcos normativos, enfoques teóricos y herramientas prácticas que promuevan la inclusión, la convivencia escolar y el bienestar socioemocional en comunidades educativas diversas.",
    startDate: "09/04/2026",
    progress: "En progreso",
    price: "$500.000 CLP",
    originalPrice: "$650.000 CLP",
    discount: 23,
    isLive: true,
    isInProgress: true,
    hours: 240,
    teacher: "Equipo docente en psicología educacional y convivencia escolar",
    imageUrl:
      "https://adipa.cl/content/uploads/2022/06/portada-diplomado-en-psicologia-educacional-convivencia-escolar-gestion-integral-de-aulas-inclusivas-y-a-m-a-r-e-abril-26-curso-adipa.webp",
    url: "https://adipa.cl/diplomados/diplomado-en-psicologia-educacional-convivencia-escolar-gestion-integral-de-aulas-inclusivas-y-amar-e/",
    category: "Diplomados",
    modality: "En Vivo",
  },
  {
    id: "858220",
    title:
      "Curso: Trauma Infantil en procesos judiciales: Estrategias terapéuticas efectivas",
    description:
      "Fortalecer el quehacer clínico de profesionales que intervienen con niños, niñas y adolescentes en contextos de vulneración de derechos, mediante la integración de fundamentos del trauma infantil, estrategias psicoterapéuticas reparatorias y criterios éticos y técnicos para la articulación con el sistema judicial.",
    startDate: "09/04/2026",
    progress: "En progreso",
    price: "$30.000 CLP",
    originalPrice: "$45.000 CLP",
    discount: 33,
    isLive: true,
    isInProgress: true,
    hours: 9,
    teacher: "Ps. María Jesús Salas",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/01/portada-adipa-trauma-infantil-en-procesos-judiciales-estrategias-terapeuticas-efectivas-abril-26-portada-adipa.webp",
    url: "https://adipa.cl/cursos/trauma-infantil-procesos-judiciales-estrategias-terapeuticas/",
    category: "Cursos",
    modality: "Presencial",
  },
  {
    id: "861701",
    title:
      "Curso: Arteterapia y musicoterapia aplicada: Intervenciones psicoterapéuticas en adultos",
    description:
      "Integrar estrategias clínicas de arteterapia y musicoterapia en la atención en salud mental de adultos, utilizándolas como recursos terapéuticos complementarios para la evaluación, intervención y regulación emocional.",
    startDate: "11/04/2026",
    progress: "En progreso",
    price: "$30.000 CLP",
    originalPrice: "$45.000 CLP",
    discount: 33,
    isLive: true,
    isInProgress: true,
    hours: 8,
    teacher: "Dr. Aurelio Riquelme y Mg. Ps. Gabriel Peña Sierra",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/01/arteterapia-y-musicoterapia-aplicada-intervenciones-psicoterapeuticas-en-adultos-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/arteterapia-musicoterapia-aplicada-intervenciones-psicoterapeuticas-adultos/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "383913",
    title: "Curso: Coordinación de Programas de Integración Escolar (PIE)",
    description:
      "Desarrollar competencias profesionales en la gestión de Programas de Integración Escolar desde un enfoque inclusivo basado en la equidad escolar y la justicia social.",
    startDate: "13/04/2026",
    progress: "En progreso",
    rating: 5.0,
    price: "$30.000 CLP",
    originalPrice: "$40.000 CLP",
    discount: 25,
    isLive: true,
    isInProgress: true,
    hours: 12,
    teacher: "Mg. Ps. Pablo Molina-Muñoz",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/11/coordinacion-de-programas-de-integracion-escolar-pie-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/coordinacion-programas-integracion-escolar-pie/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "426211",
    title:
      "Diplomado de Especialización en Neuropsicología Clínica en Adultos: Evaluación, semiología, y psicometría",
    description:
      "Fortalecer las competencias profesionales para realizar procesos de evaluación neuropsicológica en adultos, integrando fundamentos teóricos, procedimientos clínicos, semiológicos y psicométricos, con el fin de interpretar alteraciones cognitivas y elaborar perfiles asociados a distintas neuropatologías.",
    startDate: "13/04/2026",
    progress: "En progreso",
    rating: 5.0,
    price: "$500.000 CLP",
    originalPrice: "$650.000 CLP",
    discount: 23,
    isLive: true,
    isInProgress: true,
    hours: 240,
    teacher: "Equipo docente en neuropsicología clínica en adultos",
    imageUrl:
      "https://adipa.cl/content/uploads/2024/01/diplomado-de-especializacion-en-neuropsicologia-clinica-en-adultos-portada-adipa-cl.webp",
    url: "https://adipa.cl/diplomados/especializacion-neuropsicologia-clinica-adultos/",
    category: "Diplomados",
    modality: "En Vivo",
  },
  {
    id: "791705",
    title:
      "Diplomado en Clínica, Técnica y Teoría Psicoanalítica en la Obra de Sigmund Freud",
    description:
      "Analizar de manera sistemática y profunda las conceptualizaciones de Freud sobre los fenómenos psíquicos, psicopatológicos y técnicos, comprendiendo su articulación en la práctica clínica y su impacto en la teoría psicoanalítica contemporánea.",
    startDate: "13/04/2026",
    progress: "En progreso",
    price: "$500.000 CLP",
    originalPrice: "$650.000 CLP",
    discount: 23,
    isLive: true,
    isInProgress: true,
    hours: 80,
    teacher: "Equipo docente en clínica y teoría psicoanalítica freudiana",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/11/portada-diplomado-en-clinica-tecnica-y-teoria-psicoanalitica-en-la-obra-de-sigmund-freud-curso-adipa.webp",
    url: "https://adipa.cl/diplomados/clinica-tecnica-y-teoria-psicoanalitica-en-la-obra-de-sigmund-freud/",
    category: "Diplomados",
    modality: "En Vivo",
  },
  {
    id: "513412",
    title: "Diplomado Salud Mental en Atención Primaria de Salud",
    description:
      "Fortalecer las competencias clínicas y administrativas de profesionales de la Atención Primaria de Salud para la identificación, evaluación, intervención y gestión de los problemas de salud mental más frecuentes en APS.",
    startDate: "14/04/2026",
    progress: "En progreso",
    rating: 5.0,
    price: "$500.000 CLP",
    originalPrice: "$650.000 CLP",
    discount: 23,
    isLive: true,
    isInProgress: true,
    hours: 240,
    teacher: "Equipo docente en salud mental en atención primaria",
    imageUrl:
      "https://adipa.cl/content/uploads/2024/07/portada-diplomado-salud-mental-en-atencion-primaria-de-salud-abril-26-curso-adipa.webp",
    url: "https://adipa.cl/diplomados/salud-mental-atencion-primaria/",
    category: "Diplomados",
    modality: "En Vivo",
  },
  {
    id: "859214",
    title:
      "Curso: Entrevista Motivacional y su aplicación Clínica en Psicoterapia",
    description:
      "Fortalecer las competencias clínicas de profesionales de la salud mental para la aplicación de la Entrevista Motivacional en psicoterapia, integrando sus fundamentos teóricos y estrategias prácticas para el abordaje de la ambivalencia, la motivación al cambio y la construcción de una alianza terapéutica efectiva.",
    startDate: "14/04/2026",
    progress: "En progreso",
    price: "$30.000 CLP",
    originalPrice: "$45.000 CLP",
    discount: 33,
    isLive: true,
    isInProgress: true,
    hours: 8,
    teacher: "PhD. Mg. Ps. Felipe García",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/01/entrevista-motivacional-y-su-aplicacion-clinica-en-psicoterapia-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/curso-entrevista-motivacional-y-su-aplicacion-clinica-en-psicoterapia/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "605945",
    title:
      "Curso: Autismo, revisión teórica-práctica de modelos de intervención basados en evidencia: Modelo Denver, Integración sensorial y PEERS",
    description:
      "Comprender las estrategias de intervención basadas en evidencia a partir del Modelo Denver, la Integración Sensorial y el programa PEERS, fortaleciendo la evaluación y el diseño de estrategias terapéuticas ajustadas a las necesidades individuales de personas dentro del espectro autista.",
    startDate: "15/04/2026",
    progress: "En progreso",
    rating: 5.0,
    price: "$30.000 CLP",
    originalPrice: "$45.000 CLP",
    discount: 33,
    isLive: true,
    isInProgress: true,
    hours: 8,
    teacher: "TO. Javiera Farías",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/10/autismo-revision-teorica-practica-de-modelos-de-intervencion-basados-en-evidencia-modelo-denver-integracion-sensorial-y-peers-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/autismo-revision-teorica-practica-de-modelos-de-intervencion-basados-en-evidencia-modelo-denver-integracion-sensorial-y-peers/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "2850",
    title:
      "Certificación en Escala Wechsler de Inteligencia para Adultos, cuarta edición (WAIS-IV)",
    description:
      "Aprender a administrar, puntuar e interpretar la prueba de WAIS-IV tanto en un contexto psicoeducativo como clínico.",
    startDate: "16/04/2026",
    progress: "En progreso",
    rating: 5.0,
    price: "$60.000 CLP",
    originalPrice: "$80.000 CLP",
    discount: 25,
    isLive: true,
    isInProgress: true,
    hours: 24,
    teacher: "Mg. Ps. Hermann Thomas Ehrenfeld",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/01/certificacion-en-escala-wechsler-de-inteligencia-para-adultos-cuarta-edicion-wais-iv-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/certificacion-escala-wechsler-inteligencia-adultos-wais-iv/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "707826",
    title:
      "Curso: Ley Karin 21.643 y cumplimiento legal en organizaciones: Gestión de investigaciones internas y estrategias de actuación",
    description:
      "Capacitar a profesionales en la conducción de investigaciones internas ante denuncias de acoso laboral, conforme a los lineamientos de la Ley N° 21.643 (Ley Karin), resguardando el debido proceso, la confidencialidad y los derechos de todas las partes involucradas.",
    startDate: "16/04/2026",
    progress: "En progreso",
    rating: 5.0,
    price: "$30.000 CLP",
    originalPrice: "$45.000 CLP",
    discount: 33,
    isLive: true,
    isInProgress: true,
    hours: 9,
    teacher: "PhD. Mg. Abgda. Fabiola Morales",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/07/curso-ley-karin-21-643-y-cumplimiento-legal-en-organizaciones-gestion-de-investigaciones-internas-y-estrategias-de-actuacion-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/ley-karin-cumplimiento-legal-organizaciones/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "865152",
    title:
      "Curso: Evaluación Psicológica de la idoneidad Parental en el ámbito de Familia",
    description:
      "Fortalecer las competencias teóricas, técnicas y éticas de psicólogos/as y trabajadores/as sociales para la evaluación pericial de la idoneidad parental en el ámbito del derecho de familia, integrando fundamentos jurídicos, variables clínicas relevantes y criterios profesionales para la elaboración de informes periciales técnicamente sólidos y contextualizados.",
    startDate: "21/04/2026",
    price: "$30.000 CLP",
    originalPrice: "$45.000 CLP",
    discount: 33,
    isLive: true,
    isInProgress: false,
    hours: 8,
    teacher: "Mg. Ps. Vania Saavedra",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/02/evaluacion-psicologica-de-la-idoneidad-parental-en-el-ambito-de-familia-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/evaluacion-psicologica-idoneidad-parental-familia/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "255696",
    title:
      "Curso: Actualizaciones en Test Gráficos: Dibujo libre, HTP, Persona bajo la lluvia y familia",
    description:
      "Capacitar a los participantes en el uso efectivo de técnicas proyectivas en la evaluación psicológica Infanto-Juvenil.",
    startDate: "23/04/2026",
    rating: 5.0,
    price: "$30.000 CLP",
    originalPrice: "$45.000 CLP",
    discount: 33,
    isLive: true,
    isInProgress: false,
    hours: 8,
    teacher: "Ps. María Jesús Salas",
    imageUrl:
      "https://adipa.cl/content/uploads/2022/10/actualizaciones-en-test-graficos-dibujo-libre-htp-persona-bajo-la-lluvia-y-familia-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/actualizaciones-test-graficos-dibujo/",
    category: "Cursos",
    modality: "En Vivo",
  },
];
