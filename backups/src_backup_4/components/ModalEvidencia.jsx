import { FILE_CONFIG, getPreviewMessage } from "../data/evidencias";

export default function ModalEvidencia({ modal, setModal, filtered, modalIdx, goModal }) {
  const preview = getPreviewMessage(modal);

  return (
    <div className="modal-backdrop" onClick={() => setModal(null)}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
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
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="modal-btn-primary" onClick={() => setModal(null)}>
                ✓ Cerrar evidencia
              </button>

              <a
                href={modal.ruta}
                className="modal-btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                🔗 Abrir recurso
              </a>
            </div>
          </div>
        </div>

        {modalIdx >= 0 && (
          <div className="modal-nav">
            <button className="mnav-btn" onClick={() => goModal(-1)} disabled={modalIdx <= 0}>
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
