import { PRIMER_CORTE, PRIMER_CORTE_SEMANAS, FILE_CONFIG } from "../data/evidencias";

function getPreviewClass(tipo) {
  if (tipo === "imagen") return "corte1-preview-image";
  if (tipo === "video") return "corte1-preview-video";
  if (tipo === "pdf") return "corte1-preview-pdf";
  if (tipo === "presentacion") return "corte1-preview-ppt";
  return "corte1-preview-file";
}

export default function CorteUno({ setModal }) {
  return (
    <section className="section corte-uno" id="corte">
      <div className="corte1-orb corte1-orb-a" />
      <div className="corte1-orb corte1-orb-b" />

      <div className="corte1-header-grid">
        <div>
          <p className="sec-kicker">Primer corte</p>
          <h2 className="sec-title">
            Evidencias organizadas por <mark>semanas</mark>
          </h2>
          <p className="sec-body">{PRIMER_CORTE.descripcion}</p>
        </div>

        <div className="corte1-summary-card">
          <span>Actividades</span>
          <strong>{PRIMER_CORTE.actividades.length}</strong>
          <small>{PRIMER_CORTE_SEMANAS.length} semanas documentadas</small>
        </div>
      </div>

      <div className="corte1-banner" aria-label="Primer corte">
        <div className="corte1-banner-shape corte1-banner-shape-a" />
        <div className="corte1-banner-shape corte1-banner-shape-b" />
        <div className="corte1-banner-dots corte1-banner-dots-a">••••<br />••••<br />••••</div>
        <div className="corte1-banner-dots corte1-banner-dots-b">••••<br />••••<br />••••</div>
        <span>{PRIMER_CORTE.banner}</span>
      </div>

      <div className="corte1-showcase">
        <div className="corte1-showcase-left">
          <span className="corte1-mini-label">CORTE 1</span>
          <h3>{PRIMER_CORTE.subtitulo}</h3>
          <p>
            Esta sección reúne los recursos digitales del primer corte:
            fundamentación conceptual, recursos visuales, videos, PDF y
            presentación. Cada evidencia puede abrirse en detalle desde su modal.
          </p>
        </div>

        <div className="corte1-showcase-right">
          <div className="corte1-metric">
            <strong>2</strong>
            <span>Semanas</span>
          </div>
          <div className="corte1-metric">
            <strong>6</strong>
            <span>Semana 1</span>
          </div>
          <div className="corte1-metric">
            <strong>5</strong>
            <span>Semana 2</span>
          </div>
        </div>
      </div>

      <div className="corte1-week-grid">
        {PRIMER_CORTE_SEMANAS.map((grupo) => (
          <article className="corte1-week-card" key={grupo.semana}>
            <div className="corte1-week-head" style={{ "--week-color": grupo.color }}>
              <div>
                <span>{grupo.semana}</span>
                <strong>{grupo.tema}</strong>
              </div>
              <small>{grupo.actividades.length} evidencias</small>
            </div>

            <div className="corte1-activity-list">
              {grupo.actividades.map((actividad) => {
                const file = FILE_CONFIG[actividad.tipo_archivo] || FILE_CONFIG.archivo;

                return (
                  <div
                    className="corte1-activity-card"
                    key={actividad.id}
                    style={{ "--activity-color": actividad.color }}
                  >
                    <div className={`corte1-preview ${getPreviewClass(actividad.tipo_archivo)}`}>
                      {actividad.tipo_archivo === "imagen" ? (
                        <img src={actividad.ruta} alt={actividad.titulo} />
                      ) : actividad.tipo_archivo === "video" ? (
                        <video muted preload="metadata">
                          <source src={actividad.ruta} type="video/mp4" />
                        </video>
                      ) : actividad.tipo_archivo === "pdf" ? (
                        <iframe
                          src={actividad.ruta}
                          title={`Vista previa ${actividad.titulo}`}
                          loading="lazy"
                        />
                      ) : (
                        <span>{file.icon}</span>
                      )}

                      <div className="corte1-type-badge">
                        {file.icon} {file.label}
                      </div>
                    </div>

                    <div className="corte1-activity-content">
                      <div className="corte1-meta">
                        <span>{actividad.categoria}</span>
                        <span>{actividad.archivo}</span>
                      </div>

                      <h3>{actividad.titulo}</h3>
                      <p>{actividad.descripcion}</p>

                      <div className="corte1-tags">
                        {actividad.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <div className="corte1-actions">
                        <button type="button" onClick={() => setModal(actividad)}>
                          👁 {actividad.tipo_archivo === "pdf" ? "Ver PDF" : "Ver"}
                        </button>
                        <a href={actividad.ruta} target="_blank" rel="noreferrer">
                          ↗ {actividad.tipo_archivo === "pdf" ? "Abrir" : "Abrir"}
                        </a>
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
