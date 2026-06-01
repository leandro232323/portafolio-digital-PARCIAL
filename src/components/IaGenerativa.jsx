import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AI_TOOL_CONFIG = {
  "Claude Opus 4.8": { color: "#7C3AED", icon: "🧠", gradient: "linear-gradient(135deg,#7C3AED,#A78BFA)" },
  "Veed.io":         { color: "#0EA5E9", icon: "🎬", gradient: "linear-gradient(135deg,#0EA5E9,#38BDF8)" },
  "Gemini":          { color: "#10B981", icon: "♊", gradient: "linear-gradient(135deg,#10B981,#34D399)" },
  "ChatGPT":         { color: "#F59E0B", icon: "💬", gradient: "linear-gradient(135deg,#F59E0B,#FBBF24)" },
};

const ENTREGABLES = [
  {
    numero: "01",
    titulo: "Economía ambiental y sostenibilidad",
    descripcion: "Infografía conceptual sobre economía ambiental y sostenibilidad dirigida a estudiantes universitarios.",
    ai: "Claude Opus 4.8",
    prompt: `Context: Estudiantes universitarios de economía ambiental, con conocimientos previos sobre microeconomía y análisis de impactos ambientales.
Role: Actúa como un experto en educación universitaria y creación de contenidos visuales educativos.
Action: Crea un recurso educativo visual que explique los conceptos de economía ambiental y sostenibilidad. Puede ser un mapa conceptual, un diagrama de flujo o una infografía interactiva que resuma los conceptos, ejemplos y relaciones entre ellos.
Format: Imagen o infografía en alta calidad lista para presentación o estudio, organizada de manera clara y visualmente atractiva.
Tone: Didáctico, claro y motivador, adecuado para estudiantes universitarios.`,
    resultado: {
      tipo: "imagen",
      src: "/ia-generativa/entregable1-resultado.png",
      alt: "Infografía sobre economía ambiental y sostenibilidad",
    },
  },
  {
    numero: "02",
    titulo: "Sistema de transporte sostenible",
    descripcion: "Video educativo sobre cambio climático, emisiones de CO2 y energías renovables.",
    ai: "Veed.io",
    prompt: `Context: Estudiantes universitarios de ingeniería ambiental aprendiendo sobre transporte sostenible.
Role: Actúa como diseñador educativo.
Action: Crea un recurso visual simple que muestre un "sistema de transporte sostenible" con íconos, flechas y colores para representar cómo diferentes opciones de transporte afectan el medio ambiente. No se necesita código ni simulación real.
Format: Imagen o infografía clara, lista para presentación o estudio.
Tone: Didáctico, creativo y motivador para estudiantes universitarios.`,
    resultado: {
      tipo: "video",
      src: "/ia-generativa/entregable2-video.mp4",
      alt: "Video sobre cambio climático y energías renovables",
    },
  },
  {
    numero: "03",
    titulo: "Cambio climático y energías renovables",
    descripcion: "Infografía SVG sobre transporte sostenible generada con inteligencia artificial.",
    ai: "Gemini",
    prompt: `Context: Estudiantes universitarios de ciencias ambientales estudiando cambio climático y energías renovables.
Role: Actúa como diseñador educativo experto en creación de videos educativos.
Action: Genera un video educativo de 30–60 segundos que explique los conceptos clave del cambio climático, emisiones de CO2 y energías renovables. El video debe incluir gráficos animados, iconografía clara y ejemplos visuales.
Format: Video educativo listo para mostrar en clase o plataforma online, en formato mp4 o similar.
Tone: Visual, claro, atractivo y educativo, orientado a motivar y facilitar el aprendizaje.`,
    resultado: {
      tipo: "svg",
      src: "/ia-generativa/entregable3-infografia.svg",
      alt: "Infografía SVG sobre transporte sostenible",
    },
  },
  {
    numero: "04",
    titulo: "Políticas ambientales y ejercicios",
    descripcion: "Recurso visual interactivo con ejercicios y preguntas sobre políticas ambientales.",
    ai: "ChatGPT",
    prompt: `Context: Estudiantes universitarios de ciencias ambientales con distintos niveles de conocimiento sobre políticas ambientales.
Role: Actúa como diseñador educativo.
Action: Crea un recurso visual que presente ejercicios o preguntas sobre políticas ambientales. Puede ser un diagrama, tabla o esquema visual que muestre niveles de dificultad o relaciones entre conceptos, para que los estudiantes puedan interactuar mentalmente con él.
Format: Imagen clara y atractiva, lista para estudio o presentación.
Tone: Didáctico, motivador y claro para estudiantes universitarios.`,
    resultado: {
      tipo: "imagen",
      src: "/ia-generativa/entregable4-resultado.png",
      alt: "Imagen sobre políticas ambientales",
    },
  },
];

function AiBadge({ ai }) {
  const cfg = AI_TOOL_CONFIG[ai] || { color: "#6B7280", icon: "🤖", gradient: "linear-gradient(135deg,#6B7280,#9CA3AF)" };
  return (
    <span className="iag-badge" style={{ background: cfg.gradient }}>
      <span>{cfg.icon}</span>
      {ai}
    </span>
  );
}

function ImageLightbox({ src, alt, onClose }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const MIN_SCALE = 0.5;
  const MAX_SCALE = 5;
  const STEP = 0.4;

  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(s + STEP, MAX_SCALE));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((s) => {
      const next = s - STEP;
      if (next <= MIN_SCALE) {
        setPosition({ x: 0, y: 0 });
        return MIN_SCALE;
      }
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    };
    const el = imgRef.current?.closest(".iag-lightbox");
    if (el) el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el?.removeEventListener("wheel", handleWheel);
  }, [zoomIn, zoomOut]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "=" || e.key === "+") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, zoomIn, zoomOut, resetZoom]);

  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    setDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging || scale <= 1) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div
      className="iag-lightbox"
      onClick={onClose}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      role="dialog"
      aria-label="Vista ampliada de imagen"
    >
      <div className="iag-lightbox-toolbar">
        <div className="iag-lightbox-zooms">
          <button type="button" onClick={zoomOut} title="Alejar (rueda abajo / -)" disabled={scale <= MIN_SCALE}>−</button>
          <span>{Math.round(scale * 100)}%</span>
          <button type="button" onClick={zoomIn} title="Acercar (rueda arriba / +)" disabled={scale >= MAX_SCALE}>+</button>
          <button type="button" onClick={resetZoom} title="Restablecer (0)" className="iag-lb-reset">⊙</button>
        </div>
        <button type="button" className="iag-lightbox-close" onClick={onClose} title="Cerrar (Esc)">← Atrás</button>
      </div>

      <div
        className="iag-lightbox-body"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="iag-lightbox-img"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: scale > 1 ? (dragging ? "grabbing" : "grab") : "default",
          }}
          onMouseDown={handleMouseDown}
          draggable={false}
        />
      </div>

      <div className="iag-lightbox-bottom">
        <button type="button" className="iag-lightbox-back" onClick={onClose}>
          ← Atrás
        </button>
        <span className="iag-lightbox-hint">Rueda para zoom · Arrastra para mover · Esc para cerrar</span>
      </div>
    </div>
  );
}

function ResultadoPreview({ resultado }) {
  if (resultado.tipo === "imagen" || resultado.tipo === "svg") {
    return <img src={resultado.src} alt={resultado.alt} loading="lazy" />;
  }
  if (resultado.tipo === "video") {
    return (
      <video controls preload="metadata">
        <source src={resultado.src} type="video/mp4" />
      </video>
    );
  }
  return null;
}

function EntregableCard({ e, index, onImageClick }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const cfg = AI_TOOL_CONFIG[e.ai] || { color: "#6B7280" };

  return (
    <motion.div
      className="iag-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      style={{ "--iag-accent": cfg.color }}
    >
      <div className="iag-card-head">
        <div className="iag-card-num">
          <span className="iag-num-digit">{e.numero}</span>
          <span className="iag-num-label">Entregable</span>
        </div>
        <AiBadge ai={e.ai} />
      </div>

      <h3 className="iag-card-title">{e.titulo}</h3>
      <p className="iag-card-desc">{e.descripcion}</p>

      <div className="iag-prompt-area">
        <button
          type="button"
          className="iag-prompt-toggle"
          onClick={() => setShowPrompt(!showPrompt)}
          aria-expanded={showPrompt}
        >
          <span>{showPrompt ? "▼" : "▶"} Prompt utilizado</span>
          <span className="iag-prompt-toggle-line" />
        </button>
        {showPrompt && (
          <motion.div
            className="iag-prompt-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <pre className="iag-prompt-text">{e.prompt}</pre>
          </motion.div>
        )}
      </div>

      <div className="iag-resultado">
        <div className="iag-resultado-label">Resultado</div>
        <div className="iag-resultado-media">
          <ResultadoPreview resultado={e.resultado} />
        </div>
        {(e.resultado.tipo === "imagen" || e.resultado.tipo === "svg") && (
          <button type="button" className="iag-ver-btn" onClick={() => onImageClick?.(e.resultado)}>
            🔍 Ver recurso
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function IaGenerativa() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="section ia-generativa" id="ia-generativa">
      <div className="iag-bg-orb iag-bg-orb-a" />
      <div className="iag-bg-orb iag-bg-orb-b" />
      <div className="iag-bg-orb iag-bg-orb-c" />

      <div className="iag-header">
        <p className="sec-kicker">Innovación y creatividad</p>
        <h2 className="sec-title">
          <mark>IA Generativa</mark> en la educación
        </h2>
        <p className="sec-body">
          Cuatro entregables que demuestran el uso ético y creativo de la inteligencia
          artificial como apoyo en la producción de recursos educativos digitales.
          Cada entregable incluye el prompt utilizado, la herramienta de IA empleada
          y el resultado obtenido.
        </p>
      </div>

      <div className="iag-ai-strip">
        {Object.entries(AI_TOOL_CONFIG).map(([name, cfg]) => (
          <div key={name} className="iag-strip-item" style={{ background: cfg.gradient }}>
            <span>{cfg.icon}</span>
            <span>{name}</span>
          </div>
        ))}
      </div>

      <div className="iag-grid">
        {ENTREGABLES.map((e, i) => (
          <EntregableCard key={e.numero} e={e} index={i} onImageClick={setLightbox} />
        ))}
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
