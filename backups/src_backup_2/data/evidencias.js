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
    archivo: "Mapa mental fundamentos del Diseño de Contenidos digitales.png",
    ruta: assetPath("/Evidencias/Semana 1/Mapa mental fundamentos del Diseño de Contenidos digitales.png"),
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
    archivo: "infografia de richard mayer.png",
    ruta: assetPath("/Evidencias/Semana 1/infografia de richard mayer.png"),
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
    archivo: "linea de tiempo Tendencias Globales en Diseño Interactivo.png",
    ruta: assetPath("/Evidencias/Semana 1/linea de tiempo Tendencias Globales en Diseño Interactivo.png"),
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
    archivo: "Cuadro comparativo Rol del programador y usuario.png",
    ruta: assetPath("/Evidencias/Semana 1/Cuadro comparativo Rol del programador y usuario.png"),
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
    archivo: "infografia - Licenciamiento de Contenidos Digitales.png",
    ruta: assetPath("/Evidencias/Semana 1/infografia - Licenciamiento de Contenidos Digitales.png"),
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
    archivo: "Importancia en la educación y Ejemplos de buenas prácticas.mp4",
    ruta: assetPath("/Evidencias/Semana 1/Importancia en la educación y Ejemplos de buenas prácticas.mp4"),
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
    archivo: "Contenidos_Digitales_en_Educación.mp4",
    ruta: assetPath("/Evidencias/Semana 2 multimedia/Video introductorio/Contenidos_Digitales_en_Educación.mp4"),
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
    archivo: "MATRIZ PLANEACION DE RECURSOS DE HERRAMIENTAS.png",
    ruta: assetPath("/Evidencias/Semana 2 multimedia/Actividades iniciales/MATRIZ PLANEACION DE RECURSOS DE HERRAMIENTAS.png"),
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
    archivo: "Infografía - Ciclo del Agua.pdf",
    ruta: assetPath("/Evidencias/Semana 2 multimedia/Actividades iniciales/Infografía - Ciclo del Agua.pdf"),
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
    archivo: "El_Ciclo_del_Agua.mp4",
    ruta: assetPath("/Evidencias/Semana 2 multimedia/Actividades iniciales/El_Ciclo_del_Agua.mp4"),
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
    archivo: "DIAPOSITIVA DEL MARKETING DIGITAL VERDE.pptx",
    ruta: assetPath("/Evidencias/Semana 2 multimedia/Presentación Inteligencia Artificial Generativa Sobre Sostenibilidad/DIAPOSITIVA DEL MARKETING DIGITAL VERDE.pptx"),
    tipo_archivo: "presentacion",
    color: "#2A9D8F",
    emoji: "🤖",
    tags: ["IA", "Sostenibilidad", "Semana 2"],
    destacada: true,
  },
];

export const CATEGORIAS = [
  "Todas",
  "Semana 1",
  "Semana 2",
  "Video",
  "Infografía",
  "Reflexión",
  "Presentación",
  "Matriz",
  "Comparativo",
  "Línea de tiempo",
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
  return {
    badge: "Vista previa visual",
    title: "Imagen real mostrada dentro del modal",
    text: "La evidencia se muestra directamente como parte del portafolio interactivo.",
  };
}
