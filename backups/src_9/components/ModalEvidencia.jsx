import { FILE_CONFIG, getPreviewMessage } from "../data/evidencias";

const SCRATCH_PROYECTOS = [
  {
    numero: "01",
    titulo: "Ortografía Game",
    descripcion: "Primer proyecto de Scratch incrustado directamente en el modal.",
    src: "https://scratch.mit.edu/projects/1319230786/embed",
  },
  {
    numero: "02",
    titulo: "Cuento Interactivo",
    descripcion: "Segundo proyecto de Scratch incrustado directamente en el modal.",
    src: "https://scratch.mit.edu/projects/1321768147/embed",
  },
  {
    numero: "03",
    titulo: "Proyecto Scratch 3",
    descripcion: "Espacio para insertar el tercer proyecto de Scratch.",
    src: "",
  },
  {
    numero: "04",
    titulo: "Proyecto Scratch 4",
    descripcion: "Espacio para insertar el cuarto proyecto de Scratch.",
    src: "",
  },
];

function ScratchProyectosModal() {
  return (
    <div className="scratch-modal-section">
      <div className="scratch-projects-header">
        <span>Actividades Scratch</span>
        <strong>4 proyectos incrustados dentro del modal</strong>
        <p>
          Cada recuadro muestra un proyecto de Scratch embebido. Los proyectos
          activos se cargan automáticamente con la URL de Scratch terminada en /embed.
        </p>
      </div>

      <div className="scratch-projects-grid scratch-projects-grid-modal">
        {SCRATCH_PROYECTOS.map((proyecto) => {
          const tieneProyecto = proyecto.src.trim() !== "";

          return (
            <div className="scratch-project-card" key={proyecto.numero}>
              <div className="scratch-project-top">
                <span>Actividad {proyecto.numero}</span>
                <strong>{proyecto.titulo}</strong>
              </div>

              <p>{proyecto.descripcion}</p>

              <div className="scratch-embed-space">
                {tieneProyecto ? (
                  <iframe
                    src={proyecto.src}
                    title={proyecto.titulo}
                    allowTransparency="true"
                    width="485"
                    height="402"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                  />
                ) : (
                  <div className="scratch-placeholder">
                    <span>🧩</span>
                    <strong>Espacio para proyecto de Scratch</strong>
                    <small>
                      Aquí irá el código embebido del proyecto cuando lo tengas.
                    </small>
                  </div>
                )}
              </div>

              <div className="scratch-code-hint">
                <code>
                  {tieneProyecto
                    ? "Proyecto Scratch incrustado"
                    : "Pendiente por insertar"}
                </code>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AppInventorRecursos({ modal }) {
  const tienePresentacion = Boolean(modal.presentacionAppInventor);
  const apks = modal.apksAppInventor || [];

  if (!tienePresentacion && apks.length === 0) return null;

  return (
    <div className="appinventor-modal-section">
      <div className="appinventor-header">
        <span>Recursos App Inventor</span>
        <strong>Descarga de evidencias y APK</strong>
        <p>
          Estos botones permiten descargar los archivos asociados al proyecto.
          Los APK se instalan en celulares Android o en emuladores Android.
        </p>
      </div>

      {tienePresentacion && (
        <div className="appinventor-feature-card">
          <div className="appinventor-feature-icon">📑</div>
          <div className="appinventor-feature-content">
            <small>Presentación asociada</small>
            <h3>{modal.presentacionAppInventor.titulo}</h3>
            <p>{modal.presentacionAppInventor.descripcion}</p>
            <div className="appinventor-file-name">
              {modal.presentacionAppInventor.archivo}
            </div>
            <div className="appinventor-actions">
              <a
                href={modal.presentacionAppInventor.ruta}
                className="appinventor-btn primary"
                download
              >
                ⬇ Descargar presentación
              </a>
              <a
                href={modal.presentacionAppInventor.ruta}
                className="appinventor-btn secondary"
                target="_blank"
                rel="noreferrer"
              >
                🔗 Abrir presentación
              </a>
            </div>
          </div>
        </div>
      )}

      {apks.length > 0 && (
        <div className="appinventor-apk-grid">
          {apks.map((apk, index) => (
            <div className="appinventor-apk-card" key={apk.ruta}>
              <div className="appinventor-apk-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="appinventor-apk-body">
                <h3>{apk.titulo}</h3>
                <p>{apk.descripcion}</p>
                <div className="appinventor-file-name">{apk.archivo}</div>
                <a href={apk.ruta} className="appinventor-btn primary" download>
                  📱 Descargar APK
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="appinventor-note">
        <strong>Nota:</strong> para que los botones funcionen, los archivos APK
        y PPTX deben estar guardados en la carpeta <code>public</code> del proyecto,
        respetando exactamente las rutas configuradas en <code>evidencias.js</code>.
      </div>
    </div>
  );
}

function PdfComplementariosModal({ pdfs }) {
  if (!pdfs?.length) return null;

  return (
    <div className="pdf-extra-section">
      <div className="pdf-extra-header">
        <span>PDF adicional</span>
        <strong>Documento complementario de la actividad</strong>
        <p>
          Este espacio permite visualizar documentos adicionales del segundo corte
          sin salir del modal.
        </p>
      </div>

      {pdfs.map((pdf) => (
        <div className="pdf-extra-card" key={pdf.ruta}>
          <div className="pdf-extra-info">
            <small>{pdf.archivo}</small>
            <h3>{pdf.titulo}</h3>
            <p>{pdf.descripcion}</p>
          </div>

          <div className="pdf-extra-frame">
            <iframe src={pdf.ruta} title={pdf.titulo} />
          </div>

          <div className="pdf-extra-actions">
            <a href={pdf.ruta} target="_blank" rel="noreferrer">
              🔗 Abrir PDF en otra pestaña
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ModalEvidencia({
  modal,
  setModal,
  filtered,
  modalIdx,
  goModal,
}) {
  const preview = getPreviewMessage(modal);
  const tieneRecursosAppInventor =
    Boolean(modal.presentacionAppInventor) ||
    Boolean(modal.apksAppInventor?.length);
  const tienePdfsComplementarios = Boolean(modal.pdfsComplementarios?.length);

  return (
    <div className="modal-backdrop" onClick={() => setModal(null)}>
      <div
        className={`modal-box ${
          modal.id === 12 || tieneRecursosAppInventor || tienePdfsComplementarios
            ? "modal-box-wide"
            : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
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

            {modal.id === 12 && <ScratchProyectosModal />}

            {tieneRecursosAppInventor && <AppInventorRecursos modal={modal} />}

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

                    {modal.tipo_archivo === "archivo" && (
                      <div className="pptx-note">
                        Esta actividad no tiene PDF cargado en el modal. La visualización
                        documental del segundo corte se configuró únicamente desde la
                        <strong> Semana 1 hasta la Semana 3</strong>.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {tienePdfsComplementarios && (
              <PdfComplementariosModal pdfs={modal.pdfsComplementarios} />
            )}

            <div className="modal-actions">
              <button
                className="modal-btn-primary"
                onClick={() => setModal(null)}
              >
                ✓ Cerrar evidencia
              </button>

              {modal.ruta && modal.ruta !== "#" && (
                <a
                  href={modal.ruta}
                  className="modal-btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 Abrir recurso
                </a>
              )}
            </div>
          </div>
        </div>

        {modalIdx >= 0 && (
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
        )}
      </div>
    </div>
  );
}
