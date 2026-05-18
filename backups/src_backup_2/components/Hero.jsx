import { MARQUEE_ITEMS } from "../data/evidencias";

export default function Hero() {
  return (
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
  );
}
