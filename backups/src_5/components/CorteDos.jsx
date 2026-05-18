import { SEGUNDO_CORTE, SEGUNDO_CORTE_SEMANAS, FILE_CONFIG } from "../data/evidencias";


const SCRATCH_PROYECTOS = [
  {
    numero: "01",
    titulo: "Proyecto Scratch 1",
    descripcion: "Espacio para insertar el primer proyecto de Scratch.",
    // REEMPLAZAR: cambie SOLO este numero por el ID real del proyecto de Scratch.
    // Ejemplo: si el enlace es https://scratch.mit.edu/projects/123456789/, entonces projectId: "123456789"
    projectId: "PON_AQUI_EL_ID_DEL_PROYECTO_1",
  },
  {
    numero: "02",
    titulo: "Proyecto Scratch 2",
    descripcion: "Espacio para insertar el segundo proyecto de Scratch.",
    // REEMPLAZAR: cambie SOLO este numero por el ID real del proyecto de Scratch.
    projectId: "PON_AQUI_EL_ID_DEL_PROYECTO_2",
  },
  {
    numero: "03",
    titulo: "Proyecto Scratch 3",
    descripcion: "Espacio para insertar el tercer proyecto de Scratch.",
    // REEMPLAZAR: cambie SOLO este numero por el ID real del proyecto de Scratch.
    projectId: "PON_AQUI_EL_ID_DEL_PROYECTO_3",
  },
  {
    numero: "04",
    titulo: "Proyecto Scratch 4",
    descripcion: "Espacio para insertar el cuarto proyecto de Scratch.",
    // REEMPLAZAR: cambie SOLO este numero por el ID real del proyecto de Scratch.
    projectId: "PON_AQUI_EL_ID_DEL_PROYECTO_4",
  },
];

function ScratchProyectosGrid() {
  return (
    <div className="scratch-projects-box">
      <div className="scratch-projects-header">
        <span>Actividades Scratch</span>
        <strong>4 proyectos para incrustar</strong>
        <p>
          Reemplace cada ID en el arreglo SCRATCH_PROYECTOS por el ID real del proyecto publicado en Scratch.
        </p>
      </div>

      <div className="scratch-projects-grid">
        {SCRATCH_PROYECTOS.map((proyecto) => {
          const tieneIdReal = !proyecto.projectId.startsWith("PON_AQUI");

          return (
            <div className="scratch-project-card" key={proyecto.numero}>
              <div className="scratch-project-top">
                <span>Actividad {proyecto.numero}</span>
                <strong>{proyecto.titulo}</strong>
              </div>

              <p>{proyecto.descripcion}</p>

              <div className="scratch-embed-space">
                {tieneIdReal ? (
                  <>
                    {/* SCRATCH: aqui se incrusta el proyecto publicado */}
                    <iframe
                      src={`https://scratch.mit.edu/projects/${proyecto.projectId}/embed`}
                    title={proyecto.titulo}
                    allowTransparency="true"
                    frameBorder="0"
                    scrolling="no"
                      allowFullScreen
                    />
                  </>
                ) : (
                  <div className="scratch-placeholder">
                    <span>🧩</span>
                    <strong>Espacio para proyecto de Scratch</strong>
                    <small>
                      Pegue el ID del proyecto en CorteDos.jsx, dentro de projectId.
                    </small>
                  </div>
                )}
              </div>

              <div className="scratch-code-hint">
                <code>projectId: "{proyecto.projectId}"</code>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


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

                        {actividad.id === 12 && <ScratchProyectosGrid />}
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
