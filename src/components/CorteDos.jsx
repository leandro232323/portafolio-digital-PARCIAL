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

function ScratchCorteDos({ proyectos = [] }) {
  if (!proyectos.length) return null;

  return (
    <div className="corte2-extra-section corte2-scratch-section">
      <div className="corte2-extra-header">
        <span>Scratch embebido</span>
        <strong>4 actividades interactivas</strong>
      </div>

      <div className="corte2-scratch-grid">
        {proyectos.map((proyecto) => {
          const tieneProyecto = Boolean(proyecto.src?.trim());

          return (
            <div className="corte2-scratch-card" key={proyecto.numero}>
              <div className="corte2-resource-top">
                <span>Actividad {proyecto.numero}</span>
                <strong>{proyecto.titulo}</strong>
              </div>

              <div className="corte2-scratch-frame">
                {tieneProyecto ? (
                  <iframe
                    src={proyecto.src}
                    title={proyecto.titulo}
                    allowTransparency="true"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <div className="corte2-empty-embed">
                    <span>🧩</span>
                    <strong>Espacio listo</strong>
                    <small>Pega aquí la URL /embed del proyecto de Scratch.</small>
                  </div>
                )}
              </div>

              <p>{proyecto.descripcion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ApkButtonsCorteDos({ apks = [] }) {
  if (!apks.length) return null;

  return (
    <div className="corte2-extra-section corte2-apk-section">
      <div className="corte2-extra-header">
        <span>APK App Inventor</span>
        <strong>Botones de descarga</strong>
      </div>

      <div className="corte2-apk-grid">
        {apks.map((apk, index) => (
          <a
            href={apk.ruta}
            className="corte2-apk-btn"
            download
            key={`${apk.ruta}-${index}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{apk.titulo}</strong>
              <small>{apk.archivo}</small>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function YoutubeVideosCorteDos({ videos = [] }) {
  if (!videos.length) return null;

  return (
    <div className="corte2-extra-section corte2-youtube-section">
      <div className="corte2-extra-header">
        <span>Videos embebidos</span>
        <strong>4 espacios para YouTube</strong>
      </div>

      <div className="corte2-youtube-grid">
        {videos.map((video, index) => {
          const tieneVideo = Boolean(video.src?.trim());

          return (
            <div className="corte2-youtube-card" key={`${video.titulo}-${index}`}>
              <div className="corte2-resource-top">
                <span>Video {String(index + 1).padStart(2, "0")}</span>
                <strong>{video.titulo}</strong>
              </div>

              <div className="corte2-youtube-frame">
                {tieneVideo ? (
                  <iframe
                    src={video.src}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <div className="corte2-empty-embed">
                    <span>▶️</span>
                    <strong>Espacio para video</strong>
                    <small>Pega aquí la URL embed de YouTube.</small>
                  </div>
                )}
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
          {/* OpenCode hizo esto — Esquina decorativa */}
          <span className="corte2-corner-deco" aria-hidden="true" />
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
                const tieneScratch = Boolean(actividad.scratchProyectos?.length);
                const tieneApks = Boolean(actividad.apksAppInventor?.length);
                const tieneVideos = Boolean(actividad.youtubeVideos?.length);
                const tieneExtras = tieneScratch || tieneApks || tieneVideos;

                return (
                  <div
                    className={`corte2-activity-card ${tieneExtras ? "corte2-rich-card" : ""}`}
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

                      <ScratchCorteDos proyectos={actividad.scratchProyectos} />
                      <ApkButtonsCorteDos apks={actividad.apksAppInventor} />
                      <YoutubeVideosCorteDos videos={actividad.youtubeVideos} />

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
