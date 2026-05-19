function assetPath(path) {
  return encodeURI(path);
}

export const EVIDENCIAS = [
  {
    id: 1,
    semana: "Semana 1",
    categoria: "Reflexión",
    titulo: "Fundamentos del Diseño de Contenidos Digitales",
    descripcion:
      "Mapa mental sobre los fundamentos del diseño de contenidos digitales y multimediales.",
    detalle:
      "Esta evidencia desarrolla el concepto de contenidos digitales como recursos diseñados para comunicar, enseñar e interactuar con diferentes públicos. Incluye la importancia de planificar el mensaje, seleccionar formatos adecuados y crear experiencias útiles para el aprendizaje.",
    archivo: "mapa-mental-fundamentos-contenidos.png",
    ruta: assetPath("/Evidencias/corte1/Semana 1/mapa-mental-fundamentos-contenidos.png"),
    tipo_archivo: "imagen",
    color: "#E76F51",
    emoji: "🗺️",
    tags: ["Conceptual", "Mapa mental", "Semana 1"],
    destacada: true,
  },
  {
    id: 2,
    semana: "Semana 1",
    categoria: "Infografía",
    titulo: "Principios del Diseño Multimedia — Richard Mayer",
    descripcion:
      "Infografía sobre coherencia, señalización, redundancia, contigüidad, segmentación, personalización y multimedia.",
    detalle:
      "La evidencia muestra cómo los principios de Mayer orientan el diseño de materiales educativos más claros, reducen la carga cognitiva y mejoran la comprensión del estudiante mediante combinaciones adecuadas de texto, imagen, audio y organización visual.",
    archivo: "infografia-richard-mayer.png",
    ruta: assetPath("/Evidencias/corte1/Semana 1/infografia-richard-mayer.png"),
    tipo_archivo: "imagen",
    color: "#3D5AF1",
    emoji: "📐",
    tags: ["Mayer", "Infografía", "Semana 1"],
    destacada: true,
  },
  {
    id: 3,
    semana: "Semana 1",
    categoria: "Línea de tiempo",
    titulo: "Tendencias Globales en Diseño Interactivo",
    descripcion:
      "Línea de tiempo sobre personalización, accesibilidad, interactividad, diseño centrado en el usuario y experiencias inmersivas.",
    detalle:
      "Esta actividad explica cómo el diseño interactivo ha evolucionado hacia experiencias más intuitivas, accesibles y centradas en el usuario. Se relaciona con la creación de recursos educativos digitales que respondan a necesidades reales de aprendizaje.",
    archivo: "linea-tiempo-tendencias-interactivo.png",
    ruta: assetPath("/Evidencias/corte1/Semana 1/linea-tiempo-tendencias-interactivo.png"),
    tipo_archivo: "imagen",
    color: "#6C63FF",
    emoji: "📅",
    tags: ["Tendencias", "Interactividad", "Semana 1"],
    destacada: true,
  },
  {
    id: 4,
    semana: "Semana 1",
    categoria: "Comparativo",
    titulo: "Rol del Programador y del Usuario",
    descripcion:
      "Cuadro comparativo entre funciones técnicas del programador y experiencia del usuario final.",
    detalle:
      "Aquí se analiza cómo el programador construye la solución digital mientras el usuario la experimenta, la interpreta y determina si realmente cumple su propósito. Esta relación es clave para diseñar recursos digitales útiles, navegables e interactivos.",
    archivo: "comparativo-programador-usuario.png",
    ruta: assetPath("/Evidencias/corte1/Semana 1/comparativo-programador-usuario.png"),
    tipo_archivo: "imagen",
    color: "#2A9D8F",
    emoji: "⚖️",
    tags: ["UX", "Programación", "Semana 1"],
    destacada: false,
  },
  {
    id: 5,
    semana: "Semana 1",
    categoria: "Infografía",
    titulo: "Licenciamiento de Contenidos Digitales",
    descripcion:
      "Infografía sobre derechos de autor, licencias abiertas, Creative Commons y uso ético de materiales digitales.",
    detalle:
      "La evidencia resalta la importancia de reconocer la autoría, respetar licencias y usar contenidos de forma legal y ética. Este componente es esencial cuando se crean materiales educativos apoyados en imágenes, textos, videos o inteligencia artificial.",
    archivo: "licenciamiento-contenidos-digitales.png",
    ruta: assetPath("/Evidencias/corte1/Semana 1/licenciamiento-contenidos-digitales.png"),
    tipo_archivo: "imagen",
    color: "#C8558E",
    emoji: "⚖️",
    tags: ["Licencias", "Ética", "Semana 1"],
    destacada: false,
  },
  {
    id: 6,
    semana: "Semana 1",
    categoria: "Video",
    titulo: "Importancia de los Contenidos Digitales en la Educación",
    descripcion:
      "Video sobre la influencia de los recursos digitales en procesos de enseñanza y aprendizaje.",
    detalle:
      "Este recurso destaca que los contenidos digitales favorecen motivación, comprensión, participación e innovación educativa. También se mencionan buenas prácticas como claridad visual, adecuación al público, accesibilidad y pertinencia pedagógica.",
    archivo: "importancia-educacion-buenas-practicas.mp4",
    ruta: assetPath("/Evidencias/corte1/Semana 1/importancia-educacion-buenas-practicas.mp4"),
    tipo_archivo: "video",
    color: "#D95D39",
    emoji: "🎬",
    tags: ["Video", "Educación", "Semana 1"],
    destacada: true,
  },
  {
    id: 7,
    semana: "Semana 2",
    categoria: "Video",
    titulo: "Desarrollo de Contenidos Digitales",
    descripcion:
      "Video introductorio del tema y del enfoque del curso en relación con la producción de contenidos educativos digitales.",
    detalle:
      "Esta evidencia introduce el sentido del curso, mostrando cómo la creación de contenidos digitales requiere intención pedagógica, organización, creatividad y uso adecuado de herramientas tecnológicas.",
    archivo: "contenidos-digitales-educacion.mp4",
    ruta: assetPath("/Evidencias/corte1/Semana 2/video-intro/contenidos-digitales-educacion.mp4"),
    tipo_archivo: "video",
    color: "#D95D39",
    emoji: "🎥",
    tags: ["Video introductorio", "Semana 2"],
    destacada: false,
  },
  {
    id: 8,
    semana: "Semana 2",
    categoria: "Matriz",
    titulo: "Diseño de Matriz de Planeación",
    descripcion:
      "Matriz de planeación con objetivos, actividades, recursos, herramientas y propósito educativo.",
    detalle:
      "La matriz permite organizar de forma pedagógica el desarrollo de un recurso digital. Sirve para conectar objetivos de aprendizaje, actividades, herramientas y evidencias, asegurando coherencia en el diseño.",
    archivo: "matriz-planeacion-recursos.png",
    ruta: assetPath("/Evidencias/corte1/Semana 2/actividades-iniciales/matriz-planeacion-recursos.png"),
    tipo_archivo: "imagen",
    color: "#E9A92B",
    emoji: "📊",
    tags: ["Planeación", "Pedagogía", "Semana 2"],
    destacada: false,
  },
  {
    id: 9,
    semana: "Semana 2",
    categoria: "Infografía",
    titulo: "Infografía Interactiva: El Ciclo del Agua",
    descripcion:
      "Recurso visual educativo diseñado para explicar el ciclo del agua de forma clara, secuencial y atractiva.",
    detalle:
      "La actividad evidencia el uso de diseño visual, síntesis de información y secuencialidad didáctica. Puede presentarse dentro del portafolio como un recurso interactivo mediante botones, vista previa o enlace al archivo completo.",
    archivo: "infografia-ciclo-agua.pdf",
    ruta: assetPath("/Evidencias/corte1/Semana 2/actividades-iniciales/infografia-ciclo-agua.pdf"),
    tipo_archivo: "pdf",
    color: "#3D5AF1",
    emoji: "💧",
    tags: ["PDF", "Ciclo del agua", "Semana 2"],
    destacada: true,
  },
  {
    id: 10,
    semana: "Semana 2",
    categoria: "Video",
    titulo: "Video Educativo: El Ciclo del Agua",
    descripcion:
      "Material audiovisual breve para explicar el tema de manera didáctica.",
    detalle:
      "Esta evidencia demuestra la capacidad para transformar un contenido conceptual en un recurso audiovisual comprensible y atractivo. Integra narrativa, secuencia y apoyo visual para facilitar el aprendizaje.",
    archivo: "ciclo-agua.mp4",
    ruta: assetPath("/Evidencias/corte1/Semana 2/actividades-iniciales/ciclo-agua.mp4"),
    tipo_archivo: "video",
    color: "#D95D39",
    emoji: "🎞️",
    tags: ["Video educativo", "Semana 2"],
    destacada: false,
  },
  {
    id: 11,
    semana: "Semana 2",
    categoria: "Presentación",
    titulo: "IA Generativa y Sostenibilidad",
    descripcion:
      "Presentación sobre sostenibilidad y uso de herramientas IA en la generación de contenidos.",
    detalle:
      "Este trabajo conecta el uso de inteligencia artificial generativa con una temática actual. También permite evidenciar el uso ético y responsable de la IA como apoyo en la creación, organización y presentación de recursos digitales.",
    archivo: "marketing-digital-verde.pptx",
    ruta: assetPath("/Evidencias/corte1/Semana 2/ia-sostenibilidad/marketing-digital-verde.pptx"),
    tipo_archivo: "presentacion",
    color: "#2A9D8F",
    emoji: "🤖",
    tags: ["IA", "Sostenibilidad", "Semana 2"],
    destacada: true,
  },

  // ==========================
  // CORTE 2 (SIN MODIFICAR)
  // ==========================

  {
    id: 12,
    corte: "Corte 2",
    semana: "Semana 1",
    categoria: "Scratch",
    titulo: "Actividad 1 – Ejercicios en Scratch",
    descripcion:
      "Material de apoyo y evidencia relacionada con ejercicios prácticos en Scratch para fortalecer la lógica de programación visual.",
    detalle:
      "Esta actividad corresponde al segundo corte y se enfoca en el desarrollo de ejercicios en Scratch. Permite evidenciar comprensión de secuencias, eventos, bloques, interacción y pensamiento computacional aplicado a entornos visuales.",
    archivo: "Actividad_1.pdf",
    ruta: assetPath("/Evidencias/corte2/pdfs2Corte/Actividad_1.pdf"),
    tipo_archivo: "pdf",
    color: "#A8C83A",
    emoji: "🧩",
    tags: ["Corte 2", "Semana 1", "Scratch", "Programación visual"],
    destacada: false,
  },
  {
    id: 13,
    corte: "Corte 2",
    semana: "Semana 2",
    categoria: "App Inventor",
    titulo: "ACTIVIDAD 1 - FUNDAMENTOS EN APP INVENTOR",
    descripcion:
      "Actividad orientada a reconocer los fundamentos de App Inventor y su entorno de desarrollo para aplicaciones móviles.",
    detalle:
      "Esta evidencia introduce el uso de App Inventor como herramienta para crear aplicaciones móviles. Incluye reconocimiento de la interfaz, componentes, bloques, propiedades y lógica básica para construir soluciones interactivas.",
    archivo: "Actividad-2.pdf",
    ruta: assetPath("/Evidencias/corte2/pdfs2Corte/Actividad-2.pdf"),
    tipo_archivo: "pdf",
    color: "#2F6F9F",
    emoji: "📱",
    tags: ["Corte 2", "Semana 2", "App Inventor", "Fundamentos"],
    presentacionAppInventor: {
      titulo: "Presentación de fundamentos en App Inventor",
      descripcion:
        "Espacio destinado para anexar y descargar la presentación trabajada en la Semana 2 del segundo corte.",
      archivo: "presentacion-app-inventor-semana-2.pptx",
      ruta: assetPath("/Evidencias/Corte 2/Semana 2/presentacion-app-inventor-semana-2.pptx"),
    },
    apksAppInventor: [
      {
        titulo: "Descargar APK - Semana 2",
        descripcion: "Aplicación móvil correspondiente a la actividad de fundamentos en App Inventor.",
        archivo: "app-inventor-semana-2.apk",
        ruta: assetPath("/Evidencias/Corte 2/Semana 2/app-inventor-semana-2.apk"),
      },
    ],
    destacada: false,
  },
  {
    id: 14,
    corte: "Corte 2",
    semana: "Semana 3",
    categoria: "App Inventor",
    titulo: "Actividad creación primer aplicación móvil APP INVENTOR",
    descripcion:
      "Evidencia de creación de la primera aplicación móvil usando App Inventor.",
    detalle:
      "Esta actividad evidencia el paso de la teoría a la práctica mediante la construcción de una primera aplicación móvil. Se integran componentes visuales, eventos y bloques de programación para producir una app funcional.",
    archivo: "Activdad_3_1.pdf",
    ruta: assetPath("/Evidencias/corte2/pdfs2Corte/Activdad_3_1.pdf"),
    tipo_archivo: "pdf",
    color: "#3D5AF1",
    emoji: "🚀",
    tags: ["Corte 2", "Semana 3", "Aplicación móvil", "App Inventor"],
    pdfsComplementarios: [
      {
        titulo: "PDF complementario - Semana 3",
        descripcion: "Segundo documento PDF correspondiente a la Semana 3 del segundo corte.",
        archivo: "Activdad_3_2.pdf",
        ruta: assetPath("/Evidencias/corte2/pdfs2Corte/Activdad_3_2.pdf"),
      },
    ],
    apksAppInventor: [
      {
        titulo: "Descargar APK - Proyecto 1",
        descripcion: "Primer proyecto móvil desarrollado en App Inventor durante la Semana 3.",
        archivo: "app-inventor-semana-3-proyecto-1.apk",
        ruta: assetPath("/Evidencias/Corte 2/Semana 3/app-inventor-semana-3-proyecto-1.apk"),
      },
      {
        titulo: "Descargar APK - Proyecto 2",
        descripcion: "Segundo proyecto móvil desarrollado en App Inventor durante la Semana 3.",
        archivo: "app-inventor-semana-3-proyecto-2.apk",
        ruta: assetPath("/Evidencias/Corte 2/Semana 3/app-inventor-semana-3-proyecto-2.apk"),
      },
    ],
    destacada: false,
  },
  {
    id: 15,
    corte: "Corte 2",
    semana: "Semana 4",
    categoria: "CRUD",
    titulo: "Actividad Gestión de Datos y CRUD APP INVENTOR (PREVIO 2)",
    descripcion:
      "Actividad enfocada en la gestión de datos y operaciones CRUD dentro de una aplicación en App Inventor.",
    detalle:
      "Esta evidencia trabaja la gestión de datos dentro de aplicaciones móviles, abordando las operaciones crear, leer, actualizar y eliminar. Fortalece la comprensión de estructuras de información, formularios, almacenamiento y lógica de interacción.",
    archivo: "Sin PDF asociado para Semana 4",
    ruta: "#",
    tipo_archivo: "archivo",
    color: "#2A9D8F",
    emoji: "🗂️",
    tags: ["Corte 2", "Semana 4", "CRUD", "Gestión de datos"],
    apksAppInventor: [
      {
        titulo: "Descargar APK - CRUD 1",
        descripcion: "Primer APK de la actividad de gestión de datos y CRUD.",
        archivo: "app-inventor-semana-4-crud-1.apk",
        ruta: assetPath("/Evidencias/Corte 2/Semana 4/app-inventor-semana-4-crud-1.apk"),
      },
      {
        titulo: "Descargar APK - CRUD 2",
        descripcion: "Segundo APK de la actividad de gestión de datos y CRUD.",
        archivo: "app-inventor-semana-4-crud-2.apk",
        ruta: assetPath("/Evidencias/Corte 2/Semana 4/app-inventor-semana-4-crud-2.apk"),
      },
      {
        titulo: "Descargar APK - CRUD 3",
        descripcion: "Tercer APK de la actividad de gestión de datos y CRUD.",
        archivo: "app-inventor-semana-4-crud-3.apk",
        ruta: assetPath("/Evidencias/Corte 2/Semana 4/app-inventor-semana-4-crud-3.apk"),
      },
      {
        titulo: "Descargar APK - CRUD 4",
        descripcion: "Cuarto APK de la actividad de gestión de datos y CRUD.",
        archivo: "app-inventor-semana-4-crud-4.apk",
        ruta: assetPath("/Evidencias/Corte 2/Semana 4/app-inventor-semana-4-crud-4.apk"),
      },
    ],
    destacada: false,
  },
];

export const CATEGORIAS = [
  "Todas",
  "Corte 1",
  "Corte 2",
  "Semana 1",
  "Semana 2",
  "Semana 3",
  "Semana 4",
  "Video",
  "Infografía",
  "Reflexión",
  "Presentación",
  "Matriz",
  "Comparativo",
  "Línea de tiempo",
  "Scratch",
  "App Inventor",
  "CRUD",
];

export const PILARES = [
  {
    icon: "🎯",
    titulo: "Coherencia pedagógica",
    desc: "Las evidencias responden a objetivos de aprendizaje y a una intención educativa clara.",
    color: "#E76F51",
  },
  {
    icon: "🎨",
    titulo: "Creatividad",
    desc: "Se integran mapas, videos, infografías, líneas de tiempo, matrices y presentaciones.",
    color: "#3D5AF1",
  },
  {
    icon: "🤖",
    titulo: "Uso ético de la IA",
    desc: "La inteligencia artificial se emplea como apoyo responsable en la producción de contenidos.",
    color: "#6C63FF",
  },
  {
    icon: "⚙️",
    titulo: "Dominio técnico",
    desc: "La web organiza recursos y mejora la experiencia de navegación del portafolio.",
    color: "#2A9D8F",
  },
];

export const SEMANA_ITEMS = [
  {
    semana: "Semana 1",
    tema: "Fundamentación conceptual",
    count: 6,
    color: "#3D5AF1",
    items: [
      "Fundamentos del diseño de contenidos digitales",
      "Principios del diseño multimedia de Mayer",
      "Tendencias globales en diseño interactivo",
      "Rol del programador y usuario",
      "Licenciamiento de contenidos",
      "Importancia en la educación y buenas prácticas",
    ],
  },
  {
    semana: "Semana 2",
    tema: "Creación de contenido digital",
    count: 5,
    color: "#2A9D8F",
    items: [
      "Video introductorio: Desarrollo de contenidos digitales",
      "Diseño de matriz de planeación",
      "Infografía interactiva: El Ciclo del Agua",
      "Video educativo corto: El Ciclo del Agua",
      "Presentación sobre IA generativa y sostenibilidad",
    ],
  },
];

export const SEGUNDO_CORTE = {
  titulo: "Segundo Corte",
  subtitulo: "Material de apoyo y actividades",
  descripcion:
    "En esta sección se anexan las actividades del segundo corte, organizadas por semanas para evidenciar el avance desde Scratch hasta App Inventor y gestión de datos.",
  banner: "CORTE 2",
  actividades: EVIDENCIAS.filter((item) => item.corte === "Corte 2"),
};

export const SEGUNDO_CORTE_SEMANAS = [
  {
    semana: "Semana 1",
    tema: "Ejercicios en Scratch",
    color: "#A8C83A",
    actividades: EVIDENCIAS.filter((item) => item.corte === "Corte 2" && item.semana === "Semana 1"),
  },
  {
    semana: "Semana 2",
    tema: "Fundamentos en App Inventor",
    color: "#2F6F9F",
    actividades: EVIDENCIAS.filter((item) => item.corte === "Corte 2" && item.semana === "Semana 2"),
  },
  {
    semana: "Semana 3",
    tema: "Primera aplicación móvil",
    color: "#3D5AF1",
    actividades: EVIDENCIAS.filter((item) => item.corte === "Corte 2" && item.semana === "Semana 3"),
  },
  {
    semana: "Semana 4",
    tema: "Gestión de datos y CRUD",
    color: "#2A9D8F",
    actividades: EVIDENCIAS.filter((item) => item.corte === "Corte 2" && item.semana === "Semana 4"),
  },
];

export const MARQUEE_ITEMS = [
  "Diseño Digital",
  "Multimedia",
  "Contenidos Educativos",
  "IA Generativa",
  "Mayer",
  "Interactividad",
  "Creative Commons",
  "Pedagogía",
  "Producción Digital",
  "React",
];

export const FILE_CONFIG = {
  imagen: { label: "Imagen PNG", icon: "🖼️" },
  video: { label: "Video MP4", icon: "🎬" },
  pdf: { label: "PDF", icon: "📄" },
  presentacion: { label: "PPTX", icon: "📑" },
  archivo: { label: "Recurso", icon: "📁" },
};

export function fileExistsPreviewType(tipo) {
  if (tipo === "imagen") return "image";
  if (tipo === "video") return "video";
  if (tipo === "pdf") return "pdf";
  return "file";
}

export function getPreviewMessage(item) {
  if (item.tipo_archivo === "video") {
    return {
      badge: "Vista previa audiovisual",
      title: "Video real incrustado",
      text: "En este portafolio el video se reproduce directamente dentro del modal.",
    };
  }
  if (item.tipo_archivo === "pdf") {
    return {
      badge: "Vista previa documental",
      title: "PDF incrustado en el portafolio",
      text: "Este recurso puede visualizarse dentro del modal y también abrirse en una pestaña aparte.",
    };
  }
  if (item.tipo_archivo === "presentacion") {
    return {
      badge: "Vista previa de presentación",
      title: "Archivo de presentación asociado",
      text: "Los archivos PPTX normalmente no se previsualizan bien en navegador, por eso aquí se deja acceso directo para abrirlo o convertirlo luego a PDF.",
    };
  }
  if (item.tipo_archivo === "archivo") {
    return {
      badge: "Recurso sin PDF cargado",
      title: "Actividad sin vista previa documental",
      text: "Esta actividad se conserva dentro del segundo corte, pero no se carga PDF en el modal porque la vista previa documental fue solicitada solo hasta la Semana 3.",
    };
  }
  return {
    badge: "Vista previa visual",
    title: "Imagen real mostrada dentro del modal",
    text: "La evidencia se muestra directamente como parte del portafolio interactivo.",
  };
}
