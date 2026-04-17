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
      { label: "Postitulos", value: "postitulos" },
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
    icon: "/icons/flash.webp",
  },
  {
    label: "Pre Lanzamiento",
    value: "presale",
    icon: "/icons/preventa.webp",
  },
];

// data/courses.ts
export type Course = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  progress?: string;
  rating?: number;
  price: string;
  originalPrice?: string;
  discount?: number;
  isLive?: boolean;
  isInProgress?: boolean;
  isAsynchronous?: boolean;
  isPresential?: boolean;
  isMixed?: boolean;
  hours?: number;
  teacher?: string;
  imageUrl?: string;
  url?: string;
  category?: string;
  modality?: string;
};

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
    isLive: true,
    isInProgress: true,
    hours: 12,
    teacher: "Mg. TS. Lorena Carmona, Mg. Ps. Alicia Fuentes",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/05/abordaje-de-nineces-y-familias-desde-el-aft-pf-acompanamiento-familiar-territorial-programa-de-prevencion-focalizada-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/abordaje-de-ninieces-y-familias-desde-el-aft-pf/",
    category: "Cursos",
    modality: "En Vivo",
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
    isLive: true,
    isInProgress: true,
    hours: 3,
    teacher:
      "Ps. Alejandra González Cavieres, Mg (c). EDI. Marcela Villegas Otárola",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/04/portada-masterclass-salud-mental-en-los-contextos-educativos-estrategias-preventivas-en-la-infancia-y-adolescencia-autista-abril-26-curso-adipa.webp",
    url: "https://adipa.cl/cursos/salud-mental-contextos-educativos-estrategias-preventivas-autismo/",
    category: "Cursos",
    modality: "En Vivo",
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
    isLive: true,
    isInProgress: true,
    hours: 240,
    teacher:
      "PhD (c). Abgdo. Eduardo Marchant, Ed. Andrés Rivera Duarte, Mg. Ps. Jennyfer Araya, PhD. Mg. Ps. Felipe Lecannelier, Mg. Ps. Carolina Méndez González, PhD. Mg. Ps. Cecilia Banz, Mg. Ed. Natalia Tapia, Mg. Ps. María José Correa, Mg. Ps. Pablo Molina-Muñoz",
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
    isLive: true,
    isInProgress: true,
    hours: 9,
    teacher: "Ps. María Jesús Salas",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/01/portada-adipa-trauma-infantil-en-procesos-judiciales-estrategias-terapeuticas-efectivas-abril-26-portada-adipa.webp",
    url: "https://adipa.cl/cursos/trauma-infantil-procesos-judiciales-estrategias-terapeuticas/",
    category: "Cursos",
    modality: "En Vivo",
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
    isLive: true,
    isInProgress: true,
    hours: 8,
    teacher: "Dr. Aurelio Riquelme, Mg. Ps. Gabriel Peña Sierra",
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
    isLive: true,
    isInProgress: true,
    hours: 240,
    teacher:
      "Mg. Ps. Carmen Olbrich, PhD. Mg. Ps. Marcos Domic Siede, PhD. Ps. Norman Lopez Velasquez, PhD. Mg. Ps. Marcio Soto Añari, PhD (c). Mg. Ps. María Fernanda Porto, PhD. Mg. Ps. Marcela Diaz, Mg. Ps. Ámbar Soto, Mg. Ps. Claudia Dechent Rivera, Mg. Ps. Gada Musa, Mg. Ps. Milena Mea Muñoz, Mg. Ps. Loreto Olavarría, PhD (c) Mg. Ps. Miguel Ángel Ramos",
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
    isLive: true,
    isInProgress: true,
    hours: 80,
    teacher:
      "PhD. Ps. Carlos Barría Román, Ps. Luilly Gómez, Mg. Ps. Rosa Lagos, Ps. Silvia Macri, Mg. Ps. Ricardo Aveggio",
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
    isLive: true,
    isInProgress: true,
    hours: 240,
    teacher:
      "Mg. Ps. Antonieta Solis, Mg. Ps. Carlos Salazar, Mg. Ts. Cristian Valenzuela Stuardo, Dr. Vicente Aliste, Mg. Ps. Flga. Lina Rodríguez, Mg. Ps. Nicole Martínez Bizama, Mg. Ps. Claudia Manresa, PhD. Mg. Ps. Ricardo Henríquez Villegas, PhD(c). Mg. Ps. Rodrigo Mardones, PhD. Mg. Ps. Felipe García",
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
  {
    id: "860605",
    title:
      "Curso: Convivencia en Educación Parvularia: Gestión de conflictos en aula y mediación en contextos educacionales",
    description:
      "Fortalecer las competencias profesionales para la gestión formativa de la convivencia y los conflictos en educación parvularia, integrando el marco normativo vigente, la comprensión del desarrollo socioemocional infantil y estrategias pedagógicas y de mediación acordes a la primera infancia.",
    startDate: "24/04/2026",
    price: "$30.000 CLP",
    isLive: true,
    isInProgress: false,
    hours: 9,
    teacher: "Mg. Ps. Valentina Morales",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/01/convivencia-en-educacion-parvularia-gestion-de-conflictos-en-aula-y-mediacion-en-contextos-educacionales-abril-26-portada.png",
    url: "https://adipa.cl/cursos/convivencia-educacion-parvularia-gestion-conflictos-mediacion/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "617181",
    title:
      "Diplomado en Psicología Criminal: Entrenamiento en Valoración y Gestión del Riesgo de Violencia",
    description:
      "Aplicar herramientas e instrumentos especializados para la evaluación y gestión del riesgo de reincidencia delictual en el sistema penitenciario chileno, integrando variables asociadas a la psicopatía, la violencia contra la pareja, la delincuencia violenta y las agresiones sexuales.",
    startDate: "24/04/2026",
    rating: 4.6,
    price: "$500.000 CLP",
    isLive: true,
    isInProgress: false,
    teacher:
      "Mg. Ps. Roberto Marín, Mg. Ps. Felipe Reyes, Mg. Ps. Andrea Rodríguez, Mg. Ps. Katherine Alvear, PhD. Mg. Ps. Mauricio Valdivia Devia",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/03/portada-diplomado-en-psicologia-criminal-entrenamiento-en-valoracion-y-gestion-del-riesgo-de-violencia-abril-26-curso-adipa.webp",
    url: "https://adipa.cl/diplomados/psicologia-criminal-valoracion-gestion-riesgo-violencia/",
    category: "Diplomados",
    modality: "En Vivo",
  },
  {
    id: "867045",
    title:
      "Curso: Neurobiología del trauma infantojuvenil: Evaluación neurocientífica e intervención basada en plasticidad",
    description:
      "Comprender los fundamentos neurobiológicos del trauma infantojuvenil y su aplicación en la evaluación clínica y el diseño de intervenciones terapéuticas basadas en principios de neuroplasticidad.",
    startDate: "24/04/2026",
    price: "$30.000 CLP",
    isLive: true,
    isInProgress: false,
    hours: 8,
    teacher: "PhD (c). Mg. Ps. Jaime Olivos Daza",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/02/neurobiologia-del-trauma-infantojuvenil-evaluacion-neurocientifica-e-intervencion-basada-en-plasticidad-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/neurobiologia-trauma-infantojuvenil-evaluacion-intervencion-plasticidad/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "44851",
    title: "Acreditación Oficial Clínica Internacional ADOS-2",
    description:
      "Capacitar a los estudiantes para aplicar el instrumento ADOS-2 según estándares internacionales, permitiéndoles obtener la acreditación en su uso.",
    startDate: "25/04/2026",
    rating: 5.0,
    price: "$449.000 CLP",
    originalPrice: "$590.000 CLP",
    discount: 24,
    isLive: true,
    isInProgress: false,
    hours: 24,
    teacher: "PhD. Mg. Ps. Noha Minshawi-Patterson",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/08/portada-acreditacion-oficial-clinica-internacional-ados-2-ene-26-curso-adipa.webp",
    url: "https://adipa.cl/acreditaciones/acreditacion-oficial-clinica-internacional-ados-2/",
    category: "Acreditaciones",
    modality: "En Vivo",
  },
  {
    id: "544609",
    title:
      "Curso: Selectividad alimentaria desde una mirada interdisciplinaria: características, impacto y abordaje a lo largo del ciclo vital",
    description:
      "Comprender la selectividad alimentaria a lo largo del ciclo vital, abordándola desde una perspectiva integral que considere sus características, el impacto en la vida cotidiana y las particularidades personales en la alimentación y el momento de comer.",
    startDate: "27/04/2026",
    rating: 5.0,
    price: "$35.000 CLP",
    isLive: true,
    isInProgress: false,
    hours: 12,
    teacher:
      "Mg. Flga. Daniela Araya González, Mg. Nta. Simón Tello Herrera, TO. Denisse Alvear Muena",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/08/selectividad-alimentaria-desde-una-mirada-interdisciplinaria-caracteristicas-impacto-y-abordaje-a-lo-largo-del-ciclo-vital-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/selectividad-alimentaria-interdisciplinaria/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "865248",
    title:
      "Curso: Diseño Universal para el Aprendizaje (DUA 3.0): Fundamentos y aplicación práctica en contextos educacionales",
    description:
      "Fortalecer las competencias teóricas y prácticas de los profesionales de la educación y la salud mental para la comprensión y aplicación del Diseño Universal para el Aprendizaje (DUA 3.0), promoviendo el diseño de entornos de aprendizaje inclusivos que respondan a la variabilidad del estudiantado desde la planificación pedagógica.",
    startDate: "27/04/2026",
    price: "$30.000 CLP",
    isLive: true,
    isInProgress: false,
    hours: 8,
    teacher: "Mg. Ed. Natalia Tapia",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/02/diseno-universal-para-el-aprendizaje-dua-30-fundamentos-y-aplicacion-practica-en-contextos-educacionales-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/diseno-universal-aprendizaje-dua-3-0-contextos-educacionales/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "873881",
    title:
      "DBT Avanzado para Adultos con Trauma y Comorbilidad: Estrategias Prácticas y Protocolos de Intervención",
    description:
      "Fortalecer las competencias clínicas de profesionales de la salud mental para la formulación, jerarquización del riesgo y diseño de planes de intervención desde el modelo DBT en población adulta con trauma y comorbilidad, favoreciendo intervenciones efectivas en contextos de alta complejidad clínica.",
    startDate: "27/04/2026",
    price: "$30.000 CLP",
    isLive: true,
    isInProgress: false,
    hours: 9,
    teacher: "Mg. Ps. Nicole Maldavsky",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/02/dbt-avanzado-para-adultos-con-trauma-y-comorbilidad-estrategias-practicas-y-protocolos-de-intervencion-abril-26-galeria.webp",
    url: "https://adipa.cl/cursos/dbt-avanzado-adultos-trauma-comorbilidad/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "331282",
    title:
      "Postítulo de Especialización en Trauma Complejo: La Complejidad del Trauma Complejo a través de las trayectorias vitales",
    description:
      "Aplicar un modelo integral en trauma basado en la complejidad humana para el cambio en las experiencias traumáticas, a lo largo del ciclo vital.",
    startDate: "28/04/2026",
    rating: 4.8,
    price: "$960.000 CLP",
    originalPrice: "$1.200.000 CLP",
    discount: 20,
    isLive: true,
    isInProgress: false,
    hours: 300,
    teacher:
      "Dr. Martin Maldonado, Mg. Ps. Fernanda Flores, Mg. Ps. Victor Ojeda, Mg. Ps. Daniela Ibacache, Ps. Paula Arellano, PhD. Mg. Ps. Felipe Lecannelier",
    imageUrl:
      "https://adipa.cl/content/uploads/2023/04/portada-adipa-postitulo-de-especializacion-en-trauma-complejo-portada-abril-26-adipa.webp",
    url: "https://adipa.cl/postitulos/especializacion-en-trauma-complejo-la-complejidad-del-trauma-complejo-a-traves-de-las-trayectorias-vitales/",
    category: "Postítulos",
    modality: "En Vivo",
  },
  {
    id: "865095",
    title:
      "Curso: Estrategias clínicas en terapia de juego: Acompañamiento con metáforas vinculares, títeres y narrativa terapéutica",
    description:
      "Fortalecer las competencias clínicas para el diseño e implementación de intervenciones en Terapia de Juego Vincular Semidirectiva, utilizando metáforas del Lugar Seguro, narrativa terapéutica y recursos simbólicos multimodales en el trabajo con niños y sus familias.",
    startDate: "29/04/2026",
    price: "$30.000 CLP",
    isLive: true,
    isInProgress: false,
    hours: 8,
    teacher: "Ps. Francisca Del Río",
    imageUrl:
      "https://adipa.cl/content/uploads/2026/02/estrategias-clinicas-en-terapia-de-juego-acompanamiento-con-metaforas-vinculares-titeres-y-narrativa-terapeutica-abril-26-potada.webp",
    url: "https://adipa.cl/cursos/estrategias-clinicas-terapia-de-juego-metaforas-vinculares-titeres-narrativa/",
    category: "Cursos",
    modality: "En Vivo",
  },
  {
    id: "649636",
    title:
      "Curso: Pruebas Psicométricas de Inteligencia y Personalidad en Selección de Personal (OTIS, RAVEN, DOMINO, 16PF, EPPS, Kostick, MBTI, Wartegg y Barratt)",
    description:
      "Comprender los fundamentos teóricos y éticos de la evaluación psicológica en selección de personal, y adquirir herramientas prácticas para la correcta aplicación, corrección e interpretación de test de inteligencia y cuestionarios de personalidad.",
    startDate: "30/04/2026",
    rating: 4.8,
    price: "$35.000 CLP",
    isLive: true,
    isInProgress: false,
    hours: 12,
    teacher: "Ps. Rodrigo Miranda, Mg. Ps. Ismael Alfaro",
    imageUrl:
      "https://adipa.cl/content/uploads/2025/09/pruebas-psicometricas-de-inteligencia-y-personalidad-en-seleccion-de-personal-otis-raven-domino-16pf-epps-kostick-mbti-wartegg-y-barratt-abril-26-portada.webp",
    url: "https://adipa.cl/cursos/pruebas-psicometricas-de-inteligencia-y-personalidad-en-seleccion-de-personal/",
    category: "Cursos",
    modality: "En Vivo",
  },
];
