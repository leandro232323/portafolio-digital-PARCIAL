import { SEGUNDO_CORTE, SEGUNDO_CORTE_SEMANAS, FILE_CONFIG } from "../data/evidencias";

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
          <span>Semanas</span>
          <strong>{SEGUNDO_CORTE_SEMANAS.length}</strong>
          <small>{SEGUNDO_CORTE.actividades.length} actividades</small>
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
          <span>Material de apoyo por semanas</span>
        </div>

        <div className="corte2-week-grid">
          {SEGUNDO_CORTE_SEMANAS.map((grupo) => (
            <article className="corte2-week-card" key={grupo.semana}>
              <div className="corte2-week-head" style={{ "--week-color": grupo.color }}>
                <span>{grupo.semana}</span>
                <strong>{grupo.tema}</strong>
              </div>

              <div className="corte2-list">
                {grupo.actividades.map((actividad) => {
                  const file = FILE_CONFIG[actividad.tipo_archivo] || FILE_CONFIG.pdf;

                  return (
                    <div className="corte2-item" key={actividad.id}>
                      <div className="corte2-icon" style={{ background: actividad.color }}>
                        {file.icon}
                      </div>

                      <div className="corte2-content">
                        <div className="corte2-meta">
                          <span>{actividad.corte}</span>
                          <span>{actividad.categoria}</span>
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
                            Ver detalle
                          </button>
                          <a href={actividad.ruta} target="_blank" rel="noreferrer">
                            Abrir recurso
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
      </div>
    </section>
  );
}
