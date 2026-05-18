import { useEffect, useMemo, useState } from "react";
import { EVIDENCIAS, PILARES, SEMANA_ITEMS } from "./data/evidencias";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Galeria from "./components/Galeria";
import ModalEvidencia from "./components/ModalEvidencia";
import CorteDos from "./components/CorteDos";

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

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
      if (filtro === "Semana 1" || filtro === "Semana 2" || filtro === "Corte 2") {
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

  return (
    <>
      <div className="pbar" style={{ width: `${progress}%` }} />

      <Navbar scrolled={scrolled} />
      <Hero />

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
            <strong>15</strong>
            <span>Evidencias y actividades</span>
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

      <CorteDos setModal={setModal} />

      <Galeria
        filtro={filtro}
        setFiltro={setFiltro}
        viewMode={viewMode}
        setViewMode={setViewMode}
        search={search}
        setSearch={setSearch}
        filtered={filtered}
        setModal={setModal}
      />

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
          Corte I y II · Portafolio interactivo en React
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
        <ModalEvidencia
          modal={modal}
          setModal={setModal}
          filtered={filtered}
          modalIdx={modalIdx}
          goModal={goModal}
        />
      )}
    </>
  );
}
