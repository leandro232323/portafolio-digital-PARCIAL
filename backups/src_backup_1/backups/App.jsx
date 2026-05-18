import { useEffect, useMemo, useState } from "react";

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function assetPath(path) {
  return encodeURI(path);
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function fileExistsPreviewType(tipo) {
  if (tipo === "imagen") return "image";
  if (tipo === "video") return "video";
  if (tipo === "pdf") return "pdf";
  return "file";
}

/* ─────────────────────────────────────────
   DATA REAL
───────────────────────────────────────── */
const EVIDENCIAS = [
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

const CATEGORIAS = [
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

const PILARES = [
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

const SEMANA_ITEMS = [
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

const MARQUEE_ITEMS = [
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

const FILE_CONFIG = {
  imagen: { label: "Imagen PNG", icon: "🖼️" },
  video: { label: "Video MP4", icon: "🎬" },
  pdf: { label: "PDF", icon: "📄" },
  presentacion: { label: "PPTX", icon: "📑" },
};

function getPreviewMessage(item) {
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

/* ─────────────────────────────────────────
   STYLES
───────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --ink:#121212;
  --paper:#F8F5EF;
  --warm:#EEE7DC;
  --surface:#FFFFFF;
  --red:#E76F51;
  --blue:#3D5AF1;
  --green:#2A9D8F;
  --amber:#E9A92B;
  --purple:#6C63FF;
  --orange:#F08A24;
  --pink:#C8558E;
  --muted:#6F6F73;
  --border:rgba(18,18,18,0.10);
  --f-head:'Sora',sans-serif;
  --f-body:'Inter',sans-serif;
  --f-mono:'Space Mono',monospace;
  --ease-bounce:cubic-bezier(0.34,1.56,0.64,1);
  --ease-smooth:cubic-bezier(0.4,0,0.2,1);
}
html{scroll-behavior:smooth}
body{background:var(--paper);color:var(--ink);font-family:var(--f-body);overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--red);border-radius:2px}
button,input{font:inherit}
a{text-decoration:none}

.pbar{position:fixed;top:0;left:0;height:3px;z-index:1000;background:linear-gradient(90deg,var(--red),var(--blue),var(--green));transition:width .1s linear}

.nav{
  position:fixed;top:3px;left:0;right:0;z-index:900;
  height:60px;display:flex;align-items:center;justify-content:space-between;
  padding:0 2.5rem;
  background:rgba(248,245,239,0.92);
  backdrop-filter:blur(16px);
  border-bottom:1.5px solid var(--border);
  transition:box-shadow .3s;
}
.nav.shadow{box-shadow:0 4px 32px rgba(0,0,0,0.08)}
.nav-logo{
  font-family:var(--f-head);font-weight:700;font-size:1.04rem;
  display:flex;align-items:center;gap:.5rem;color:var(--ink);
}
.nav-logo-dot{
  width:8px;height:8px;border-radius:50%;background:var(--red);
  animation:blink 2.5s ease-in-out infinite;
}
@keyframes blink{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.4)}}
.nav-links{display:flex;gap:.25rem;list-style:none}
.nav-links a{
  font-size:.71rem;font-weight:500;letter-spacing:.07em;text-transform:uppercase;
  color:var(--muted);padding:.45rem .9rem;border-radius:100px;
  transition:all .2s;
}
.nav-links a:hover{color:var(--ink);background:var(--warm)}

.hero{
  min-height:100vh;padding-top:60px;
  background:var(--ink);
  position:relative;overflow:hidden;
  display:flex;flex-direction:column;
}
.hero-grid-bg{
  position:absolute;inset:0;
  background-image:
    linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);
  background-size:48px 48px;
  pointer-events:none;
}
.hero-glow{
  position:absolute;top:-200px;right:-200px;
  width:700px;height:700px;border-radius:50%;
  background:radial-gradient(circle,rgba(61,90,241,.18) 0%,transparent 70%);
  pointer-events:none;
}
.hero-glow2{
  position:absolute;bottom:-150px;left:-100px;
  width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(231,111,81,.12) 0%,transparent 70%);
  pointer-events:none;
}
.hero-inner{
  flex:1;display:grid;grid-template-columns:1fr 380px;
  position:relative;z-index:1;
}
.hero-left{
  padding:4.5rem 4rem;
  display:flex;flex-direction:column;justify-content:center;
  border-right:1px solid rgba(255,255,255,.08);
}
.hero-eyebrow{
  display:inline-flex;align-items:center;gap:.6rem;
  font-family:var(--f-mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;
  color:var(--red);margin-bottom:2rem;
}
.hero-eyebrow::before{content:'';display:block;width:32px;height:1.5px;background:var(--red)}
.hero-title{
  font-family:var(--f-head);font-weight:700;
  font-size:clamp(3.2rem,6.6vw,5.8rem);line-height:1.03;
  letter-spacing:-.01em;color:#F8F5EF;margin-bottom:1.75rem;
}
.hero-title .word-accent{display:inline-block;position:relative;color:var(--amber)}
.hero-title .word-outline{-webkit-text-stroke:1.25px rgba(248,245,239,.38);color:transparent}
.hero-sub{
  font-size:1rem;line-height:1.8;
  color:rgba(248,245,239,.58);max-width:540px;margin-bottom:3rem;
}
.hero-sub strong{color:rgba(248,245,239,.88);font-weight:500}
.hero-ctas{display:flex;gap:.75rem;flex-wrap:wrap}
.cta-primary{
  font-family:var(--f-head);font-weight:700;font-size:.93rem;
  background:var(--red);color:#fff;border:none;
  padding:.82rem 2rem;cursor:pointer;border-radius:8px;
  display:inline-flex;align-items:center;gap:.5rem;
  transition:transform .2s var(--ease-bounce),box-shadow .2s;
}
.cta-primary:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(231,111,81,.30)}
.cta-secondary{
  font-family:var(--f-head);font-weight:600;font-size:.93rem;
  background:transparent;color:rgba(248,245,239,.76);
  border:1.5px solid rgba(248,245,239,.22);
  padding:.82rem 2rem;cursor:pointer;border-radius:8px;
  display:inline-flex;align-items:center;gap:.5rem;
  transition:all .2s;
}
.cta-secondary:hover{border-color:rgba(248,245,239,.5);color:#F8F5EF}
.hero-right{
  padding:3rem 2.5rem;
  display:flex;flex-direction:column;gap:1rem;justify-content:center;
}
.hero-stat{
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
  padding:1.25rem 1.5rem;border-radius:10px;
  display:flex;align-items:center;justify-content:space-between;
  transition:background .25s,border-color .25s,transform .2s;
}
.hero-stat:hover{background:rgba(255,255,255,.08);border-color:rgba(233,169,43,.3);transform:translateX(4px)}
.stat-val{font-family:var(--f-head);font-size:2.55rem;font-weight:700;line-height:1.05;letter-spacing:-.01em}
.stat-lbl{font-family:var(--f-mono);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(248,245,239,.35);text-align:right;max-width:80px;line-height:1.6}
.hero-course-badge{
  background:linear-gradient(135deg,rgba(61,90,241,.18),rgba(108,99,255,.12));
  border:1px solid rgba(61,90,241,.28);border-radius:10px;
  padding:1.25rem 1.5rem;
  font-family:var(--f-mono);font-size:.68rem;line-height:1.75;
  color:rgba(248,245,239,.62);letter-spacing:.035em;
}
.hero-bar{
  position:relative;z-index:1;
  border-top:1px solid rgba(255,255,255,.06);
  padding:1rem 4rem;
  display:flex;align-items:center;gap:2rem;
  overflow:hidden;
}
.hero-bar-marquee{
  display:flex;gap:3rem;white-space:nowrap;
  animation:marqueeScroll 20s linear infinite;
}
@keyframes marqueeScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.hbm-item{
  display:flex;align-items:center;gap:.75rem;
  font-family:var(--f-mono);font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;
  color:rgba(248,245,239,.3);flex-shrink:0;
}
.hbm-sep{color:var(--red);opacity:.5}

.section{padding:6rem 3rem;max-width:1280px;margin:0 auto}
.section-dark{background:var(--ink);padding:6rem 3rem}
.section-inner{max-width:1280px;margin:0 auto}
.sec-kicker{
  display:inline-flex;align-items:center;gap:.6rem;
  font-family:var(--f-mono);font-size:.64rem;font-weight:700;
  letter-spacing:.18em;text-transform:uppercase;color:var(--red);
  margin-bottom:.95rem;
}
.sec-kicker.light{color:var(--amber)}
.sec-kicker::before{content:'';display:block;width:20px;height:1.5px;background:currentColor}
.sec-title{
  font-family:var(--f-head);font-weight:700;
  font-size:clamp(2.1rem,4vw,3.6rem);line-height:1.08;
  letter-spacing:-.01em;margin-bottom:1.25rem;
}
.sec-title.light{color:#F8F5EF}
.sec-title mark{background:none;color:var(--blue)}
.sec-title mark.amber{color:var(--amber)}
.sec-title mark.green{color:var(--green)}
.sec-body{font-size:1rem;line-height:1.82;color:var(--muted);max-width:720px}
.sec-body.light{color:rgba(248,245,239,.58)}

.quick-grid{
  margin-top:2rem;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:1rem;
}
.quick-card{
  background:var(--surface);
  border:1.5px solid var(--border);
  border-radius:14px;
  padding:1.25rem 1.1rem;
  transition:transform .2s var(--ease-bounce), box-shadow .2s;
}
.quick-card:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,0,0,.06)}
.quick-card strong{
  display:block;
  font-family:var(--f-head);
  font-size:1.65rem;
  font-weight:700;
  margin-bottom:.35rem;
}
.quick-card span{
  font-family:var(--f-mono);
  font-size:.61rem;
  text-transform:uppercase;
  letter-spacing:.12em;
  color:var(--muted);
  line-height:1.7;
}

.tabs-wrapper{margin-top:3rem}
.tabs-nav{
  display:flex;gap:0;border-bottom:2px solid var(--border);margin-bottom:2.5rem;
  flex-wrap:wrap;
}
.tab-btn{
  font-family:var(--f-head);font-size:.9rem;font-weight:600;
  background:transparent;border:none;color:var(--muted);
  padding:.8rem 1.75rem;cursor:pointer;border-bottom:3px solid transparent;
  margin-bottom:-2px;transition:color .2s,border-color .2s;
}
.tab-btn:hover{color:var(--ink)}
.tab-btn.active{color:var(--ink);border-bottom-color:var(--red)}
.tab-panel{display:none;animation:fadePanel .3s var(--ease-smooth)}
.tab-panel.visible{display:block}
@keyframes fadePanel{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.pillars-grid{
  display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;
}
.pillar-card{
  border:1.5px solid var(--border);border-radius:14px;
  padding:2rem 1.75rem;background:var(--surface);
  transition:all .25s var(--ease-smooth);
  position:relative;overflow:hidden;
}
.pillar-card::before{
  content:'';position:absolute;inset:0;border-radius:14px;
  background:var(--pc);opacity:0;transition:opacity .25s;
}
.pillar-card:hover{border-color:var(--pc);transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,0,0,.08)}
.pillar-card:hover::before{opacity:.06}
.pillar-icon{font-size:2rem;margin-bottom:1rem;display:block;position:relative;z-index:1}
.pillar-title{font-family:var(--f-head);font-weight:700;font-size:1rem;color:var(--ink);margin-bottom:.55rem;position:relative;z-index:1;line-height:1.35}
.pillar-desc{font-size:.88rem;line-height:1.72;color:var(--muted);position:relative;z-index:1}
.pillar-num{
  position:absolute;bottom:.75rem;right:1rem;
  font-family:var(--f-head);font-size:4rem;font-weight:700;
  color:var(--ink);opacity:.04;line-height:1;
}

.tool-grid{
  display:flex;
  flex-wrap:wrap;
  gap:1rem;
}
.tool-card{
  display:flex;align-items:center;gap:.75rem;
  padding:.9rem 1.25rem;background:var(--surface);
  border:1.5px solid var(--border);border-radius:12px;
  transition:all .2s;
}
.tool-card:hover{border-color:var(--blue);transform:translateY(-3px)}

.accordion{display:flex;flex-direction:column;gap:.75rem;margin-top:3rem}
.acc-item{
  border:1.5px solid rgba(255,255,255,.08);border-radius:12px;
  overflow:hidden;transition:border-color .25s;
}
.acc-item.open{border-color:rgba(233,169,43,.3)}
.acc-trigger{
  width:100%;background:rgba(255,255,255,.03);
  border:none;padding:1.5rem 2rem;cursor:pointer;
  display:flex;align-items:center;justify-content:space-between;gap:1rem;
  text-align:left;transition:background .2s;
}
.acc-trigger:hover{background:rgba(255,255,255,.06)}
.acc-trigger-left{display:flex;align-items:center;gap:1rem}
.acc-week-badge{
  font-family:var(--f-mono);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;
  background:var(--red);color:#fff;padding:.3rem .7rem;border-radius:6px;white-space:nowrap;
}
.acc-title{
  font-family:var(--f-head);font-weight:700;font-size:1.08rem;
  color:#F8F5EF;line-height:1.35;
}
.acc-count{
  font-family:var(--f-mono);font-size:.65rem;letter-spacing:.1em;
  color:rgba(248,245,239,.35);white-space:nowrap;
}
.acc-arrow{
  font-size:1rem;color:rgba(248,245,239,.4);
  transition:transform .3s var(--ease-smooth);flex-shrink:0;
}
.acc-item.open .acc-arrow{transform:rotate(180deg)}
.acc-body{
  max-height:0;overflow:hidden;
  transition:max-height .4s var(--ease-smooth),padding .3s;
  background:rgba(255,255,255,.02);
}
.acc-item.open .acc-body{max-height:600px;padding:1.5rem 2rem 2rem}
.acc-list{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}
.acc-li{
  display:flex;align-items:flex-start;gap:.75rem;
  padding:.9rem 1rem;border-radius:10px;
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);
  font-size:.88rem;line-height:1.62;color:rgba(248,245,239,.72);
}
.acc-li-dot{
  width:6px;height:6px;border-radius:50%;flex-shrink:0;
  margin-top:.45em;background:var(--color,var(--red));
}

.spotlight{
  margin-top:3rem;
  background:linear-gradient(135deg,#131826,#1b1328);
  border-radius:20px;
  overflow:hidden;
  display:grid;
  grid-template-columns:1.1fr .9fr;
  min-height:360px;
  box-shadow:0 24px 70px rgba(0,0,0,.18);
}
.spotlight-left{
  padding:2.25rem 2.25rem 2rem;
  color:#fff;
}
.spotlight-kicker{
  font-family:var(--f-mono);
  font-size:.62rem;
  text-transform:uppercase;
  letter-spacing:.16em;
  color:rgba(255,255,255,.55);
  margin-bottom:1rem;
}
.spotlight-title{
  font-family:var(--f-head);
  font-size:clamp(1.75rem,3vw,2.75rem);
  line-height:1.08;
  margin-bottom:1rem;
}
.spotlight-desc{
  max-width:580px;
  color:rgba(255,255,255,.72);
  line-height:1.84;
  margin-bottom:1.25rem;
}
.spotlight-tags{
  display:flex;
  flex-wrap:wrap;
  gap:.5rem;
  margin-bottom:1.25rem;
}
.spotlight-tag{
  font-family:var(--f-mono);
  font-size:.62rem;
  letter-spacing:.08em;
  text-transform:uppercase;
  background:rgba(255,255,255,.1);
  border:1px solid rgba(255,255,255,.12);
  color:#fff;
  padding:.35rem .7rem;
  border-radius:999px;
}
.spotlight-actions{
  display:flex;
  flex-wrap:wrap;
  gap:.75rem;
}
.sp-btn{
  border:none;
  border-radius:10px;
  padding:.82rem 1.15rem;
  cursor:pointer;
  font-family:var(--f-head);
  font-weight:700;
  transition:transform .2s var(--ease-bounce), box-shadow .2s;
}
.sp-btn:hover{transform:translateY(-2px)}
.sp-btn.primary{background:var(--amber);color:#111}
.sp-btn.secondary{background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.12)}
.spotlight-right{
  position:relative;
  background:linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.01));
  border-left:1px solid rgba(255,255,255,.08);
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}
.spotlight-art{
  width:min(82%,320px);
  aspect-ratio:4/5;
  border-radius:24px;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 20px 60px rgba(0,0,0,.24);
}
.spotlight-emoji{
  position:relative;
  z-index:1;
  font-size:5rem;
}
.spotlight-mini{
  position:absolute;
  bottom:1rem;
  left:1rem;
  right:1rem;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.12);
  border-radius:14px;
  padding:.85rem 1rem;
  backdrop-filter:blur(10px);
  color:#fff;
}
.spotlight-mini small{
  font-family:var(--f-mono);
  font-size:.58rem;
  text-transform:uppercase;
  letter-spacing:.12em;
  opacity:.75;
}
.spotlight-mini p{
  margin-top:.25rem;
  font-size:.88rem;
  line-height:1.5;
}

.gallery-toolbar{
  display:flex;align-items:flex-end;justify-content:space-between;
  flex-wrap:wrap;gap:1.5rem;margin-bottom:1.5rem;
}
.filter-chips{display:flex;gap:.5rem;flex-wrap:wrap}
.chip{
  font-family:var(--f-mono);font-size:.68rem;font-weight:700;
  letter-spacing:.08em;text-transform:uppercase;
  border:1.5px solid var(--border);border-radius:100px;
  background:var(--surface);color:var(--muted);
  padding:.45rem 1.1rem;cursor:pointer;
  transition:all .2s var(--ease-bounce);
}
.chip:hover{border-color:var(--ink);color:var(--ink);transform:translateY(-2px)}
.chip.active{background:var(--ink);color:#F8F5EF;border-color:var(--ink)}
.gallery-view-toggle{display:flex;gap:.4rem}
.view-btn{
  width:38px;height:38px;display:flex;align-items:center;justify-content:center;
  border:1.5px solid var(--border);border-radius:8px;background:var(--surface);
  cursor:pointer;font-size:.85rem;color:var(--muted);transition:all .2s;
}
.view-btn:hover,.view-btn.active{background:var(--ink);color:#F8F5EF;border-color:var(--ink)}
.gallery-count{
  font-family:var(--f-mono);font-size:.65rem;letter-spacing:.1em;
  text-transform:uppercase;color:var(--muted);
}
.gallery-count strong{color:var(--ink);font-size:1.45rem;font-family:var(--f-head);font-weight:700;display:block;line-height:1.1;margin-bottom:.18rem}
.search-row{
  margin-bottom:2rem;
  display:grid;
  grid-template-columns:1fr auto;
  gap:1rem;
  align-items:center;
}
.search-box{
  background:var(--surface);
  border:1.5px solid var(--border);
  border-radius:16px;
  display:flex;
  align-items:center;
  gap:.8rem;
  padding:.95rem 1rem;
}
.search-box input{
  border:none;
  outline:none;
  width:100%;
  background:transparent;
  color:var(--ink);
  font-size:.96rem;
}
.search-box span{
  color:var(--muted);
}
.search-hint{
  font-family:var(--f-mono);
  font-size:.62rem;
  text-transform:uppercase;
  letter-spacing:.12em;
  color:var(--muted);
}
.cards-grid{
  display:grid;gap:1.25rem;
}
.cards-grid.view-grid{grid-template-columns:repeat(3,1fr)}
.cards-grid.view-list{grid-template-columns:1fr}
.ev-card{
  background:var(--surface);border:1.5px solid var(--border);
  border-radius:16px;overflow:hidden;cursor:pointer;
  transition:transform .25s var(--ease-bounce),box-shadow .25s,border-color .25s;
  display:flex;flex-direction:column;
}
.ev-card:hover{
  transform:translateY(-8px);
  box-shadow:0 24px 64px rgba(0,0,0,.1);
  border-color:rgba(0,0,0,.2);
}
.ev-card.list-mode{
  flex-direction:row;align-items:stretch;
}
.ev-card.list-mode:hover{transform:translateX(6px) translateY(0)}
.ev-preview{
  height:190px;position:relative;overflow:hidden;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;
  background:#ddd;
}
.ev-card.list-mode .ev-preview{width:220px;height:auto}
.ev-preview img,
.ev-preview video{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
.ev-preview-pdf{
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:.6rem;
  background:linear-gradient(135deg, rgba(61,90,241,.15), rgba(108,99,255,.10));
  color:var(--ink);
  font-family:var(--f-head);
  font-weight:700;
  text-align:center;
  padding:1rem;
}
.ev-preview-file{
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:.6rem;
  background:linear-gradient(135deg, rgba(42,157,143,.14), rgba(61,90,241,.10));
  color:var(--ink);
  font-family:var(--f-head);
  font-weight:700;
  text-align:center;
  padding:1rem;
}
.ftype-badge{
  position:absolute;bottom:.75rem;left:.75rem;z-index:2;
  font-family:var(--f-mono);font-size:.58rem;font-weight:700;
  letter-spacing:.1em;text-transform:uppercase;
  background:rgba(0,0,0,.66);color:#fff;
  padding:.25rem .6rem;border-radius:6px;
  display:flex;align-items:center;gap:.3rem;
}
.ev-body{padding:1.5rem;flex:1;display:flex;flex-direction:column}
.ev-cat{
  font-family:var(--f-mono);font-size:.6rem;font-weight:700;
  letter-spacing:.12em;text-transform:uppercase;
  padding:.25rem .6rem;border-radius:6px;
  display:inline-block;margin-bottom:.75rem;color:#fff;
  align-self:flex-start;
}
.ev-title{
  font-family:var(--f-head);font-weight:700;font-size:1rem;
  line-height:1.42;color:var(--ink);margin-bottom:.65rem;
}
.ev-desc{font-size:.84rem;line-height:1.72;color:var(--muted);flex:1;margin-bottom:1rem}
.ev-tags{display:flex;flex-wrap:wrap;gap:.35rem;margin-bottom:1rem}
.ev-tag{
  font-size:.65rem;font-family:var(--f-mono);
  background:var(--warm);color:var(--muted);
  padding:.22rem .55rem;border-radius:5px;letter-spacing:.06em;
}
.ev-footer{
  display:flex;align-items:center;justify-content:space-between;
  gap:.75rem;
  padding-top:.85rem;border-top:1px solid var(--border);
}
.ev-semana{font-family:var(--f-mono);font-size:.6rem;color:var(--muted);letter-spacing:.08em}
.ev-open-btn{
  font-family:var(--f-head);font-size:.78rem;font-weight:700;
  background:transparent;color:var(--ink);border:1.5px solid var(--border);
  padding:.42rem .9rem;border-radius:8px;cursor:pointer;
}
.ev-open-btn:hover{background:var(--ink);color:#F8F5EF;border-color:var(--ink)}
.empty-state{
  margin-top:1.5rem;
  background:var(--surface);
  border:1.5px dashed var(--border);
  border-radius:16px;
  padding:2rem;
  text-align:center;
}
.empty-state h3{
  font-family:var(--f-head);
  font-size:1.25rem;
  margin-bottom:.55rem;
}
.empty-state p{
  color:var(--muted);
  line-height:1.75;
}

.modal-backdrop{
  position:fixed;inset:0;z-index:800;
  background:rgba(13,13,13,.8);backdrop-filter:blur(10px);
  display:flex;align-items:center;justify-content:center;
  padding:2rem;
}
.modal-box{
  background:var(--surface);border-radius:20px;
  max-width:820px;width:100%;
  max-height:90vh;overflow:hidden;
  display:flex;flex-direction:column;
  box-shadow:0 40px 120px rgba(0,0,0,.25);
}
.modal-hero{
  height:210px;position:relative;
  display:flex;align-items:center;justify-content:flex-end;
  padding:2rem;flex-shrink:0;
}
.modal-hero-bg{position:absolute;inset:0;opacity:.18}
.modal-hero-emoji{
  position:relative;z-index:1;
  font-size:6rem;
}
.modal-close{
  position:absolute;top:1.25rem;right:1.25rem;z-index:2;
  width:40px;height:40px;border-radius:50%;
  background:rgba(0,0,0,.4);
  border:1.5px solid rgba(255,255,255,.2);color:#fff;
  font-size:1rem;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
}
.modal-close:hover{background:rgba(231,111,81,.85)}
.modal-cat-badge{
  position:absolute;top:1.25rem;left:1.25rem;z-index:2;
  font-family:var(--f-mono);font-size:.62rem;font-weight:700;
  letter-spacing:.12em;text-transform:uppercase;
  padding:.3rem .8rem;border-radius:6px;color:#fff;
}
.modal-content{overflow-y:auto;flex:1}
.modal-header{padding:2rem 2.5rem 1.5rem;border-bottom:1px solid var(--border)}
.modal-title{
  font-family:var(--f-head);
  font-weight:700;
  font-size:1.55rem;
  line-height:1.24;
  color:var(--ink);
  margin-bottom:1rem
}
.modal-chips{display:flex;gap:.5rem;flex-wrap:wrap}
.modal-chip{font-family:var(--f-mono);font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:var(--warm);color:var(--ink);padding:.28rem .7rem;border-radius:6px}
.modal-body{padding:2rem 2.5rem}
.modal-detail{font-size:.95rem;line-height:1.84;color:rgba(18,18,18,.72);margin-bottom:1.75rem}
.modal-file-box{
  background:var(--warm);border:1.5px solid var(--border);border-radius:12px;
  padding:1.1rem 1.25rem;margin-bottom:1.25rem;
  display:flex;align-items:center;gap:1rem;
}
.modal-file-icon{font-size:1.75rem;flex-shrink:0}
.modal-file-info small{font-family:var(--f-mono);font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.modal-file-info p{font-size:.84rem;font-weight:500;color:var(--ink);margin-top:.15rem;font-family:var(--f-mono);word-break:break-all;line-height:1.7}
.modal-placeholder{
  background:linear-gradient(135deg,rgba(61,90,241,.06),rgba(108,99,255,.06));
  border:1.5px dashed rgba(61,90,241,.22);border-radius:14px;
  padding:1.3rem;margin-bottom:1.25rem;
}
.modal-placeholder strong{
  font-family:var(--f-head);
  font-weight:700;
  font-size:.94rem;
  color:var(--blue);
  display:block;
  margin-bottom:.5rem;
}
.modal-placeholder p{
  font-size:.85rem;
  color:var(--muted);
  line-height:1.72;
}
.preview-canvas{
  margin-top:1rem;
  background:rgba(255,255,255,.82);
  border:1px solid rgba(61,90,241,.14);
  border-radius:16px;
  min-height:180px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:1rem;
  position:relative;
  overflow:hidden;
}
.preview-canvas-inner{
  position:relative;
  z-index:1;
  max-width:100%;
  width:100%;
}
.preview-badge{
  display:inline-flex;
  align-items:center;
  gap:.4rem;
  background:var(--ink);
  color:#fff;
  font-family:var(--f-mono);
  font-size:.58rem;
  text-transform:uppercase;
  letter-spacing:.12em;
  padding:.35rem .65rem;
  border-radius:999px;
  margin-bottom:.85rem;
}
.preview-title{
  font-family:var(--f-head);
  font-size:1.14rem;
  font-weight:700;
  margin-bottom:.45rem;
}
.real-preview{
  margin-top:1rem;
  width:100%;
  border-radius:12px;
  overflow:hidden;
  border:1px solid rgba(18,18,18,.08);
  background:#fff;
}
.real-preview img{
  width:100%;
  display:block;
}
.real-preview video{
  width:100%;
  display:block;
  background:#000;
}
.real-preview iframe{
  width:100%;
  height:420px;
  border:none;
  background:#fff;
}
.pptx-note{
  padding:1rem;
  background:#fff;
  border-radius:12px;
  line-height:1.75;
  color:var(--muted);
}
.modal-actions{display:flex;gap:.75rem;flex-wrap:wrap}
.modal-btn-primary{
  font-family:var(--f-head);font-weight:700;font-size:.9rem;
  background:var(--ink);color:#F8F5EF;border:none;
  padding:.74rem 1.75rem;border-radius:10px;cursor:pointer;
  display:flex;align-items:center;gap:.4rem;
}
.modal-btn-secondary{
  font-family:var(--f-head);font-weight:700;font-size:.9rem;
  background:transparent;color:var(--muted);border:1.5px solid var(--border);
  padding:.74rem 1.75rem;border-radius:10px;cursor:pointer;
  display:flex;align-items:center;gap:.4rem;
}
.modal-btn-secondary:hover{border-color:var(--ink);color:var(--ink)}
.modal-nav{
  display:flex;align-items:center;justify-content:space-between;
  padding:1.25rem 2.5rem;border-top:1px solid var(--border);flex-shrink:0;
}
.mnav-btn{
  font-family:var(--f-head);font-weight:700;font-size:.82rem;
  background:transparent;border:1.5px solid var(--border);
  color:var(--muted);padding:.55rem 1.1rem;border-radius:10px;cursor:pointer;
}
.mnav-btn:hover:not(:disabled){border-color:var(--ink);color:var(--ink)}
.mnav-btn:disabled{opacity:.3;cursor:not-allowed}
.mnav-counter{font-family:var(--f-mono);font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}

.reflex-grid{display:grid;grid-template-columns:240px 1fr;gap:5rem;align-items:start}
.reflex-sidebar{position:sticky;top:7rem}
.reflex-num{font-family:var(--f-head);font-size:6.6rem;font-weight:700;line-height:.95;color:var(--amber)}
.reflex-lbl{font-family:var(--f-mono);font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(248,245,239,.3);margin-bottom:2rem}
.reflex-tag{
  display:inline-block;background:var(--green);color:var(--ink);
  font-family:var(--f-head);font-weight:700;font-size:.86rem;
  padding:.45rem .9rem;border-radius:8px;
}
.reflex-paras{display:flex;flex-direction:column;gap:1.5rem}
.reflex-para{
  padding:1.75rem;border-radius:14px;
  border:1px solid rgba(255,255,255,.06);
  background:rgba(255,255,255,.03);
  position:relative;overflow:hidden;
}
.reflex-para-num{
  position:absolute;top:1rem;right:1.5rem;
  font-family:var(--f-head);font-size:3.3rem;font-weight:700;
  line-height:1;opacity:.07;color:#fff;
}
.reflex-para p{font-size:.96rem;line-height:1.9;color:rgba(248,245,239,.74);position:relative;z-index:1}
.reflex-para-bar{height:3px;border-radius:0 0 12px 12px;margin-top:1.25rem;position:relative;z-index:1}

.refs-list{display:flex;flex-direction:column;gap:0;border:1.5px solid var(--border);border-radius:14px;overflow:hidden;margin-top:2.5rem}
.ref-row{
  display:flex;align-items:flex-start;gap:1.25rem;
  padding:1.5rem 1.75rem;background:var(--surface);
  border-bottom:1px solid var(--border);
}
.ref-row:last-child{border-bottom:none}
.ref-row:hover{background:var(--warm)}
.ref-n{font-family:var(--f-head);font-size:1.9rem;font-weight:700;color:var(--red);line-height:1;min-width:2rem}
.ref-txt{font-size:.9rem;line-height:1.72;color:rgba(18,18,18,.72)}

.footer{
  background:var(--ink);border-top:1px solid rgba(255,255,255,.06);
  padding:3rem;
  display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:2rem;
}
.footer-logo{font-family:var(--f-head);font-size:1.3rem;font-weight:700;color:#F8F5EF;display:flex;align-items:center;gap:.5rem}
.footer-logo-dot{width:8px;height:8px;border-radius:50%;background:var(--red)}
.footer-copy{font-family:var(--f-mono);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(248,245,239,.22);text-align:right;line-height:1.8}

.btt{
  position:fixed;bottom:2rem;right:2rem;z-index:700;
  width:48px;height:48px;border-radius:50%;
  background:var(--ink);color:#F8F5EF;
  border:2px solid rgba(255,255,255,.1);
  font-size:1rem;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 8px 24px rgba(0,0,0,.2);
}
.btt:hover{transform:translateY(-4px) scale(1.08);background:var(--red);border-color:transparent}
.btt.hidden{opacity:0;pointer-events:none;transform:translateY(20px)}

@media(max-width:1100px){
  .cards-grid.view-grid{grid-template-columns:repeat(2,1fr)}
  .pillars-grid{grid-template-columns:1fr 1fr}
  .quick-grid{grid-template-columns:1fr 1fr}
  .spotlight{grid-template-columns:1fr}
}
@media(max-width:860px){
  .hero-inner{grid-template-columns:1fr}
  .nav-links{display:none}
  .section,.section-dark{padding:4rem 1.5rem}
  .reflex-grid{grid-template-columns:1fr}
  .acc-list{grid-template-columns:1fr}
  .search-row{grid-template-columns:1fr}
}
@media(max-width:640px){
  .cards-grid.view-grid{grid-template-columns:1fr}
  .pillars-grid{grid-template-columns:1fr}
  .quick-grid{grid-template-columns:1fr}
  .footer{flex-direction:column;align-items:flex-start}
  .hero-left{padding:4rem 1.5rem}
  .hero-right{padding:1.5rem}
  .hero-bar{padding:1rem 1.5rem}
  .modal-box{max-height:94vh}
  .modal-header,.modal-body,.modal-nav{padding-left:1.25rem;padding-right:1.25rem}
  .real-preview iframe{height:320px}
}
`;

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function App() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showBtt, setShowBtt] = useState(false);

  const [filtro, setFiltro] = useState("Todas");
  const [viewMode, setViewMode] = useState("grid");
  const [modal, setModal] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openAcc, setOpenAcc] = useState(0);
  const [search, setSearch] = useState("");
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const destacadas = useMemo(
    () => EVIDENCIAS.filter((e) => e.destacada),
    []
  );

  const spotlight = destacadas[spotlightIndex % destacadas.length];

  const filtered = useMemo(() => {
    let data = EVIDENCIAS;

    if (filtro !== "Todas") {
      if (filtro === "Semana 1" || filtro === "Semana 2") {
        data = data.filter((e) => e.semana === filtro);
      } else {
        data = data.filter((e) => e.categoria === filtro);
      }
    }

    const q = normalizeText(search.trim());
    if (!q) return data;

    return data.filter((e) => {
      const haystack = normalizeText(
        [
          e.titulo,
          e.descripcion,
          e.detalle,
          e.archivo,
          e.categoria,
          e.semana,
          ...(e.tags || []),
        ].join(" ")
      );
      return haystack.includes(q);
    });
  }, [filtro, search]);

  const modalIdx = modal ? filtered.findIndex((e) => e.id === modal.id) : -1;

  const goModal = (dir) => {
    const next = filtered[modalIdx + dir];
    if (next) setModal(next);
  };

  useEffect(() => {
    const fn = () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(dh > 0 ? (st / dh) * 100 : 0);
      setScrolled(st > 40);
      setShowBtt(st > 500);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") setModal(null);
      if (e.key === "ArrowLeft" && modal) goModal(-1);
      if (e.key === "ArrowRight" && modal) goModal(1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [modal, modalIdx, filtered]);

  useEffect(() => {
    const id = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % destacadas.length);
    }, 4500);
    return () => clearInterval(id);
  }, [destacadas.length]);

  const preview = modal ? getPreviewMessage(modal) : null;

  return (
    <>
      <style>{CSS}</style>

      <div className="pbar" style={{ width: `${progress}%` }} />

      <nav className={`nav ${scrolled ? "shadow" : ""}`}>
        <a href="#inicio" className="nav-logo">
          <span className="nav-logo-dot" />
          Portafolio Digital
        </a>
        <ul className="nav-links">
          {[
            ["#inicio", "Inicio"],
            ["#objetivo", "Objetivo"],
            ["#corte", "Corte I"],
            ["#galeria", "Evidencias"],
            ["#reflexion", "Reflexión"],
            ["#referencias", "Referencias"],
          ].map(([h, l]) => (
            <li key={h}>
              <a href={h}>{l}</a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="hero" id="inicio">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-glow2" />

        <div className="hero-inner">
          <div className="hero-left">
            <p className="hero-eyebrow">Actividad Final · Portafolio interactivo</p>
            <h1 className="hero-title">
              <span style={{ display: "block" }}>PORTA</span>
              <span style={{ display: "block" }} className="word-accent">
                FOLIO
              </span>
              <span style={{ display: "block" }} className="word-outline">
                DIGITAL
              </span>
            </h1>
            <p className="hero-sub">
              Sitio web para reunir, organizar y presentar las evidencias del
              curso <strong>Desarrollo de Contenidos Digitales y Multimediales</strong>,
              demostrando coherencia pedagógica, creatividad, dominio técnico y
              uso ético de herramientas digitales e IA.
            </p>
            <div className="hero-ctas">
              <a href="#galeria" className="cta-primary">
                Explorar evidencias ↓
              </a>
              <a href="#objetivo" className="cta-secondary">
                Ver objetivo →
              </a>
            </div>
          </div>

          <div className="hero-right">
            {[
              ["11", "#E76F51", "Evidencias totales"],
              ["2", "#3D5AF1", "Semanas académicas"],
              ["6", "#2A9D8F", "Tipos de recurso"],
              ["100%", "#C8558E", "Interactividad"],
            ].map(([val, color, label]) => (
              <div className="hero-stat" key={label}>
                <div className="stat-val" style={{ color }}>
                  {val}
                </div>
                <div className="stat-lbl">{label}</div>
              </div>
            ))}
            <div className="hero-course-badge">
              📚 DESARROLLO DE CONTENIDOS DIGITALES Y MULTIMEDIALES
              <br />
              Primer Corte · Semanas 1–2 · Portafolio en React
            </div>
          </div>
        </div>

        <div className="hero-bar">
          <div className="hero-bar-marquee">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
              <span key={i} className="hbm-item">
                {t}
                <span className="hbm-sep">◆</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="section" id="objetivo">
        <p className="sec-kicker">¿Para qué?</p>
        <h2 className="sec-title">
          Objetivo del <mark>portafolio</mark>
        </h2>
        <p className="sec-body">
          Evidenciar la aplicación práctica de los conocimientos adquiridos en
          la creación, organización y presentación de recursos digitales y
          multimediales. Integra actividades, reflexiones, recursos visuales,
          videos, presentaciones y evidencias del semestre dentro de una
          experiencia navegable e interactiva.
        </p>

        <div className="quick-grid">
          <div className="quick-card">
            <strong>01</strong>
            <span>Proyecto académico integrador</span>
          </div>
          <div className="quick-card">
            <strong>02</strong>
            <span>Semanas documentadas</span>
          </div>
          <div className="quick-card">
            <strong>11</strong>
            <span>Evidencias organizadas</span>
          </div>
          <div className="quick-card">
            <strong>UX</strong>
            <span>Navegación interactiva</span>
          </div>
        </div>

        <div className="tabs-wrapper">
          <div className="tabs-nav" role="tablist">
            {[
              "Los 4 pilares del portafolio",
              "¿Por qué React?",
              "Herramientas utilizadas",
            ].map((label, i) => (
              <button
                key={i}
                role="tab"
                className={`tab-btn ${activeTab === i ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className={`tab-panel ${activeTab === 0 ? "visible" : ""}`}>
            <div className="pillars-grid">
              {PILARES.map((p, i) => (
                <div key={i} className="pillar-card" style={{ "--pc": p.color }}>
                  <span className="pillar-icon">{p.icon}</span>
                  <div className="pillar-title">{p.titulo}</div>
                  <div className="pillar-desc">{p.desc}</div>
                  <div className="pillar-num">0{i + 1}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`tab-panel ${activeTab === 1 ? "visible" : ""}`}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                [
                  "✅",
                  "Página web real y navegable",
                  "React permite construir una experiencia completa, con estado, componentes y navegación interna.",
                ],
                [
                  "✅",
                  "Interactividad visible",
                  "Se incluyen filtros, cambio de vista, buscador, acordeones, tabs, modales y navegación con teclado.",
                ],
                [
                  "✅",
                  "Portafolio organizado y profesional",
                  "Las evidencias están distribuidas por semana, tipo y sección académica.",
                ],
                [
                  "✅",
                  "Evidencias reales conectadas",
                  "Imágenes, videos y PDF ya se muestran desde la estructura real de tu proyecto.",
                ],
              ].map(([icon, title, desc]) => (
                <div
                  key={title}
                  style={{
                    padding: "1.5rem",
                    background: "var(--warm)",
                    borderRadius: "14px",
                    border: "1.5px solid var(--border)",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: ".6rem" }}>
                    {icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--f-head)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: ".45rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: ".85rem",
                      lineHeight: 1.7,
                      color: "var(--muted)",
                    }}
                  >
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`tab-panel ${activeTab === 2 ? "visible" : ""}`}>
            <div className="tool-grid">
              {[
                ["⚛️", "React", "Base del portafolio"],
                ["🎨", "CSS Custom", "Diseño y animación"],
                ["🔤", "Sora + Inter", "Tipografía"],
                ["🖥️", "Canva", "Infografías"],
                ["🎬", "Editor de video", "Producción audiovisual"],
                ["📄", "PDF", "Documentos educativos"],
                ["🤖", "IA Generativa", "Apoyo ético y creativo"],
                ["📊", "Presentaciones", "Exposición temática"],
              ].map(([icon, name, role]) => (
                <div key={name} className="tool-card">
                  <span style={{ fontSize: "1.5rem" }}>{icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--f-head)",
                        fontWeight: 700,
                        fontSize: ".95rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--f-mono)",
                        fontSize: ".6rem",
                        color: "var(--muted)",
                        letterSpacing: ".08em",
                        lineHeight: 1.7,
                      }}
                    >
                      {role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-dark" id="corte">
        <div className="section-inner">
          <p className="sec-kicker light">Corte académico I</p>
          <h2 className="sec-title light">
            Primer Corte <mark className="amber">(Semanas 1–2)</mark>
          </h2>
          <p className="sec-body light" style={{ marginBottom: 0 }}>
            En este corte se desarrollaron actividades orientadas a comprender
            los fundamentos del diseño de contenidos digitales y a crear
            recursos educativos usando herramientas tecnológicas.
          </p>

          <div className="accordion" style={{ marginTop: "3rem" }}>
            {SEMANA_ITEMS.map((s, i) => (
              <div key={i} className={`acc-item ${openAcc === i ? "open" : ""}`}>
                <button
                  className="acc-trigger"
                  onClick={() => setOpenAcc(openAcc === i ? -1 : i)}
                >
                  <div className="acc-trigger-left">
                    <span className="acc-week-badge" style={{ background: s.color }}>
                      {s.semana}
                    </span>
                    <span className="acc-title">{s.tema}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span className="acc-count">{s.count} actividades</span>
                    <span className="acc-arrow">▼</span>
                  </div>
                </button>
                <div className="acc-body">
                  <div className="acc-list">
                    {s.items.map((item, j) => (
                      <div key={j} className="acc-li">
                        <span className="acc-li-dot" style={{ "--color": s.color }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {spotlight && (
            <div className="spotlight">
              <div className="spotlight-left">
                <div className="spotlight-kicker">Evidencia destacada</div>
                <h3 className="spotlight-title">{spotlight.titulo}</h3>
                <p className="spotlight-desc">{spotlight.detalle}</p>

                <div className="spotlight-tags">
                  <span className="spotlight-tag">{spotlight.semana}</span>
                  <span className="spotlight-tag">{spotlight.categoria}</span>
                  {(spotlight.tags || []).map((tag) => (
                    <span className="spotlight-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="spotlight-actions">
                  <button className="sp-btn primary" onClick={() => setModal(spotlight)}>
                    Ver detalle
                  </button>
                  <button
                    className="sp-btn secondary"
                    onClick={() =>
                      setSpotlightIndex((prev) => (prev + 1) % destacadas.length)
                    }
                  >
                    Cambiar destacada
                  </button>
                </div>
              </div>

              <div className="spotlight-right">
                <div
                  className="spotlight-art"
                  style={{
                    background: `linear-gradient(135deg, ${spotlight.color}, ${spotlight.color}99)`,
                  }}
                >
                  <div className="spotlight-emoji">{spotlight.emoji}</div>
                </div>
                <div className="spotlight-mini">
                  <small>Archivo asociado</small>
                  <p>{spotlight.archivo}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="section" id="galeria">
        <p className="sec-kicker">Explora</p>
        <h2 className="sec-title">
          Galería de <mark className="amber" style={{ color: "var(--orange)" }}>Evidencias</mark>
        </h2>

        <div className="search-row">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Buscar por título, categoría, archivo, semana o tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="search-hint">búsqueda interactiva en tiempo real</div>
        </div>

        <div className="gallery-toolbar">
          <div className="filter-chips">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                className={`chip ${filtro === cat ? "active" : ""}`}
                onClick={() => setFiltro(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div className="gallery-count">
              <strong>{filtered.length}</strong>
              evidencias visibles
            </div>
            <div className="gallery-view-toggle">
              <button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                title="Vista cuadrícula"
              >
                ⊞
              </button>
              <button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                title="Vista lista"
              >
                ≡
              </button>
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <h3>No se encontraron evidencias</h3>
            <p>
              Intenta cambiar el filtro o escribir otra palabra en el buscador.
              Esta sección responde en tiempo real a lo que selecciones.
            </p>
          </div>
        ) : (
          <div className={`cards-grid view-${viewMode}`}>
            {filtered.map((item) => {
              const ft = FILE_CONFIG[item.tipo_archivo] || FILE_CONFIG.imagen;
              const previewType = fileExistsPreviewType(item.tipo_archivo);

              return (
                <article
                  key={item.id}
                  className={`ev-card ${viewMode === "list" ? "list-mode" : ""}`}
                  onClick={() => setModal(item)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setModal(item)}
                >
                  <div className="ev-preview">
                    {previewType === "image" && (
                      <img src={item.ruta} alt={item.titulo} />
                    )}

                    {previewType === "video" && (
                      <video muted preload="metadata">
                        <source src={item.ruta} type="video/mp4" />
                      </video>
                    )}

                    {previewType === "pdf" && (
                      <div className="ev-preview-pdf">
                        <div style={{ fontSize: "2.4rem" }}>📄</div>
                        <div>{item.titulo}</div>
                      </div>
                    )}

                    {previewType === "file" && (
                      <div className="ev-preview-file">
                        <div style={{ fontSize: "2.4rem" }}>📑</div>
                        <div>{item.titulo}</div>
                      </div>
                    )}

                    <div className="ftype-badge">
                      {ft.icon} {ft.label}
                    </div>
                  </div>

                  <div className="ev-body">
                    <span className="ev-cat" style={{ background: item.color }}>
                      {item.categoria}
                    </span>
                    <h3 className="ev-title">{item.titulo}</h3>
                    <p className="ev-desc">{item.descripcion}</p>
                    <div className="ev-tags">
                      {item.tags.map((t) => (
                        <span key={t} className="ev-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="ev-footer">
                      <span className="ev-semana">{item.semana}</span>
                      <button
                        className="ev-open-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModal(item);
                        }}
                      >
                        Ver evidencia →
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <div className="section-dark" id="reflexion">
        <div className="section-inner">
          <p className="sec-kicker light">Aprendizaje</p>
          <h2 className="sec-title light">
            Reflexión del <mark className="green">Estudiante</mark>
          </h2>

          <div className="reflex-grid" style={{ marginTop: "3rem" }}>
            <div className="reflex-sidebar">
              <div className="reflex-num">03</div>
              <div className="reflex-lbl">Párrafos de reflexión</div>
              <div className="reflex-tag">Primer corte</div>
            </div>

            <div className="reflex-paras">
              {[
                {
                  text: "Durante el desarrollo del primer corte comprendí que crear contenidos digitales va más allá de elaborar piezas visuales. Implica pensar en el propósito educativo, en la forma como aprende el usuario, en la organización del mensaje y en la experiencia de interacción con el recurso.",
                  color: "#E76F51",
                },
                {
                  text: "Los principios multimedia de Mayer me ayudaron a entender que no se trata de poner muchos elementos, sino de seleccionar los adecuados para facilitar la comprensión. También identifiqué la importancia de respetar licencias, reconocer autorías y usar la inteligencia artificial de manera ética y responsable.",
                  color: "#3D5AF1",
                },
                {
                  text: "Finalmente, integrar todo en una página web interactiva permite mostrar las evidencias de manera más clara, creativa y profesional, convirtiendo el portafolio en una experiencia navegable y no solo en una recopilación estática.",
                  color: "#2A9D8F",
                },
              ].map((para, i) => (
                <div key={i} className="reflex-para">
                  <div className="reflex-para-num">0{i + 1}</div>
                  <p>{para.text}</p>
                  <div className="reflex-para-bar" style={{ background: para.color }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="referencias">
        <p className="sec-kicker">Fuentes</p>
        <h2 className="sec-title">
          Referencias <mark>Bibliográficas</mark>
        </h2>
        <p className="sec-body">Formato APA · Pasa el cursor para destacar</p>

        <div className="refs-list">
          {[
            [1, <><em>Multimedia Learning</em>. Mayer, R. E. (2009). Cambridge University Press.</>],
            [2, <><em>About the Licenses</em>. Creative Commons. (2024). creativecommons.org</>],
            [3, <><em>Recursos digitales e innovación educativa</em>. UNESCO. (2023).</>],
          ].map(([n, text]) => (
            <div key={n} className="ref-row">
              <span className="ref-n">0{n}</span>
              <span className="ref-txt">{text}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <span className="footer-logo-dot" />
          Portafolio Digital
        </div>
        <div className="footer-copy">
          Desarrollo de Contenidos Digitales y Multimediales
          <br />
          Primer Corte · Portafolio interactivo en React
        </div>
      </footer>

      <button
        className={`btt ${showBtt ? "" : "hidden"}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Volver arriba"
      >
        ↑
      </button>

      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-hero">
              <div
                className="modal-hero-bg"
                style={{
                  background: `linear-gradient(135deg, ${modal.color}, ${modal.color}88)`,
                }}
              />
              <div className="modal-cat-badge" style={{ background: modal.color }}>
                {modal.categoria}
              </div>
              <div className="modal-hero-emoji">{modal.emoji}</div>
              <button
                className="modal-close"
                onClick={() => setModal(null)}
                title="Cerrar"
              >
                ✕
              </button>
            </div>

            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{modal.titulo}</h2>
                <div className="modal-chips">
                  <span className="modal-chip">{modal.semana}</span>
                  <span className="modal-chip">{modal.categoria}</span>
                  {modal.tags.map((t) => (
                    <span key={t} className="modal-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-body">
                <p className="modal-detail">{modal.detalle}</p>

                <div className="modal-file-box">
                  <span className="modal-file-icon">
                    {FILE_CONFIG[modal.tipo_archivo]?.icon}
                  </span>
                  <div className="modal-file-info">
                    <small>Archivo asociado</small>
                    <p>{modal.archivo}</p>
                  </div>
                </div>

                <div className="modal-placeholder">
                  <strong>{preview.badge}</strong>
                  <p>{preview.text}</p>

                  <div className="preview-canvas">
                    <div className="preview-canvas-inner">
                      <div className="preview-badge">
                        {FILE_CONFIG[modal.tipo_archivo]?.icon}{" "}
                        {FILE_CONFIG[modal.tipo_archivo]?.label}
                      </div>
                      <div className="preview-title">{preview.title}</div>

                      <div className="real-preview">
                        {modal.tipo_archivo === "imagen" && (
                          <img src={modal.ruta} alt={modal.titulo} />
                        )}

                        {modal.tipo_archivo === "video" && (
                          <video controls preload="metadata">
                            <source src={modal.ruta} type="video/mp4" />
                            Tu navegador no soporta video.
                          </video>
                        )}

                        {modal.tipo_archivo === "pdf" && (
                          <iframe src={modal.ruta} title={modal.titulo} />
                        )}

                        {modal.tipo_archivo === "presentacion" && (
                          <div className="pptx-note">
                            Este archivo es una presentación <strong>PPTX</strong>.
                            Puedes abrirla con el botón de abajo. Si después la conviertes a PDF,
                            también podría mostrarse aquí directamente dentro del portafolio.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <button className="modal-btn-primary" onClick={() => setModal(null)}>
                    ✓ Cerrar evidencia
                  </button>

                  <a
                    href={modal.ruta}
                    className="modal-btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 Abrir recurso
                  </a>
                </div>
              </div>
            </div>

            <div className="modal-nav">
              <button
                className="mnav-btn"
                onClick={() => goModal(-1)}
                disabled={modalIdx <= 0}
              >
                ← Anterior
              </button>
              <span className="mnav-counter">
                {modalIdx + 1} / {filtered.length}
              </span>
              <button
                className="mnav-btn"
                onClick={() => goModal(1)}
                disabled={modalIdx >= filtered.length - 1}
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}