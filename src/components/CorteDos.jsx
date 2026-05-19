import { SEGUNDO_CORTE, SEGUNDO_CORTE_SEMANAS, FILE_CONFIG } from "../data/evidencias";

function getPreviewClass(tipo) {
  if (tipo === "imagen") return "corte2-preview-image";
  if (tipo === "video") return "corte2-preview-video";
  if (tipo === "pdf") return "corte2-preview-pdf";
  if (tipo === "presentacion") return "corte2-preview-ppt";
  return "corte2-preview-file";
}

function renderPreview(actividad, file) {
  if (actividad.tipo_archivo === "imagen") {
    return <img src={actividad.ruta} alt={actividad.titulo} />;
  }

  if (actividad.tipo_archivo === "video") {
    return (
      <video muted preload="metadata">
        <source src={actividad.ruta} type="video/mp4" />
      </video>
    );
  }

  if (actividad.tipo_archivo === "pdf") {
    return (
      <iframe
        src={actividad.ruta}
        title={`Vista previa ${actividad.titulo}`}
        loading="lazy"
      />
    );
  }

  return <span>{file.icon}</span>;
}

export default function CorteDos({ setModal }) {
  return (
    <section className="section corte-dos corte2-premium" id="corte-dos">
      <div className="corte2-orb corte2-orb-a" />
      <div className="corte2-orb corte2-orb-b" />

      <div className="corte2-header-grid">
        <div>
          <p className="sec-kicker">Segundo corte</p>
          <h2 className="sec-title">
            Actividades prácticas de <mark>programación visual</mark>
          </h2>
          <p className="sec-body">{SEGUNDO_CORTE.descripcion}</p>
        </div>

        <div className="corte2-summary">
          <span>Actividades</span>
          <strong>{SEGUNDO_CORTE.actividades.length}</strong>
          <small>{SEGUNDO_CORTE_SEMANAS.length} semanas organizadas</small>
        </div>
      </div>

      <div className="corte2-banner" aria-label="Segundo corte">
        <div className="corte2-shape corte2-shape-a" />
        <div className="corte2-shape corte2-shape-b" />
        <div className="corte2-dots corte2-dots-a">••••<br />••••<br />••••</div>
        <div className="corte2-dots corte2-dots-b">••••<br />••••<br />••••</div>
        <span>{SEGUNDO_CORTE.banner}</span>
      </div>

      <div className="corte2-showcase">
        <div className="corte2-showcase-left">
          <span className="corte2-mini-label">CORTE 2</span>
          <h3>{SEGUNDO_CORTE.subtitulo}</h3>
          <p>
            Esta sección presenta el avance del segundo corte con una estructura
            más visual y consistente: Scratch, fundamentos de App Inventor,
            aplicaciones móviles y gestión de datos. Cada tarjeta conserva una
            vista previa, acciones claras y acceso al recurso correspondiente.
          </p>
        </div>

        <div className="corte2-showcase-right">
          <div className="corte2-metric">
            <strong>4</strong>
            <span>Semanas</span>
          </div>
          <div className="corte2-metric">
            <strong>{SEGUNDO_CORTE.actividades.length}</strong>
            <span>Actividades</span>
          </div>
          <div className="corte2-metric">
            <strong>PDF</strong>
            <span>Vista directa</span>
          </div>
        </div>
      </div>

      <div className="corte2-week-grid">
        {SEGUNDO_CORTE_SEMANAS.map((grupo) => (
          <article className="corte2-week-card" key={grupo.semana}>
            <div className="corte2-week-head" style={{ "--week-color": grupo.color }}>
              <div>
                <span>{grupo.semana}</span>
                <strong>{grupo.tema}</strong>
              </div>
              <small>{grupo.actividades.length} evidencia{grupo.actividades.length === 1 ? "" : "s"}</small>
            </div>

            <div className="corte2-activity-list">
              {grupo.actividades.map((actividad) => {
                const file = FILE_CONFIG[actividad.tipo_archivo] || FILE_CONFIG.archivo;

                return (
                  <div
                    className="corte2-activity-card"
                    key={actividad.id}
                    style={{ "--activity-color": actividad.color }}
                  >
                    <div className={`corte2-preview ${getPreviewClass(actividad.tipo_archivo)}`}>
                      {renderPreview(actividad, file)}

                      <div className="corte2-type-badge">
                        {file.icon} {file.label}
                      </div>
                    </div>

                    <div className="corte2-activity-content">
                      <div className="corte2-meta">
                        <span>{actividad.categoria}</span>
                        <span>{actividad.archivo}</span>
                      </div>

                      <h3>{actividad.titulo}</h3>
                      <p>{actividad.descripcion}</p>

                      <div className="corte2-tags">
                        {actividad.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <div className="corte2-actions">
                        <button type="button" onClick={() => setModal(actividad)}>
                          👁 {actividad.tipo_archivo === "pdf" ? "Ver PDF" : "Ver detalle"}
                        </button>
                        {actividad.ruta !== "#" && (
                          <a href={actividad.ruta} target="_blank" rel="noreferrer">
                            ↗ Abrir
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
