import { SEGUNDO_CORTE, FILE_CONFIG } from "../data/evidencias";

export default function CorteDos({ setModal }) {
  return (
    <section className="section corte-dos" id="corte-dos">
      <div className="corte2-header-grid">
        <div>
          <p className="sec-kicker">Segundo corte</p>
          <h2 className="sec-title">
            Estructura visual para <mark>anexar actividades</mark>
          </h2>
          <p className="sec-body">{SEGUNDO_CORTE.descripcion}</p>
        </div>

        <div className="corte2-summary">
          <span>Actividades</span>
          <strong>{SEGUNDO_CORTE.actividades.length}</strong>
          <small>Material de apoyo</small>
        </div>
      </div>

      <div className="corte2-banner">
        <div className="corte2-shape corte2-shape-a" />
        <div className="corte2-shape corte2-shape-b" />
        <div className="corte2-dots corte2-dots-a">••••<br />••••<br />••••</div>
        <div className="corte2-dots corte2-dots-b">••••<br />••••<br />••••</div>
        <span>{SEGUNDO_CORTE.banner}</span>
      </div>

      <div className="corte2-panel">
        <div className="corte2-panel-title">
          <span className="corte2-device">▭</span>
          <span>Material de apoyo</span>
        </div>

        <div className="corte2-list">
          {SEGUNDO_CORTE.actividades.map((actividad, index) => {
            const file = FILE_CONFIG[actividad.tipo_archivo] || FILE_CONFIG.pdf;

            return (
              <article className="corte2-item" key={actividad.id}>
                <div className="corte2-icon">{file.icon}</div>

                <div className="corte2-content">
                  <div className="corte2-meta">
                    <span>Actividad {index + 1}</span>
                    <span>{actividad.categoria}</span>
                  </div>
                  <h3>{actividad.titulo}</h3>
                  <p>{actividad.descripcion}</p>

                  <div className="corte2-tags">
                    {actividad.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="corte2-actions">
                  <button type="button" onClick={() => setModal(actividad)}>
                    Ver detalle
                  </button>
                  <a href={actividad.ruta} target="_blank" rel="noreferrer">
                    Abrir recurso
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
