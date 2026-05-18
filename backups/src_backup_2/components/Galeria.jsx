import {
  CATEGORIAS,
  FILE_CONFIG,
  fileExistsPreviewType,
} from "../data/evidencias";

export default function Galeria({
  filtro,
  setFiltro,
  viewMode,
  setViewMode,
  search,
  setSearch,
  filtered,
  setModal,
}) {
  return (
    <section className="section" id="galeria">
      <p className="sec-kicker">Explora</p>
      <h2 className="sec-title">
        Galería de <mark className="amber" style={{ color: "var(--orange)" }}>Evidencias</mark>
      </h2>

      <div className="search-row">
        <div className="search-box">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Buscar por título, categoría, archivo, semana o tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="search-hint">búsqueda interactiva en tiempo real</div>
      </div>

      <div className="gallery-toolbar">
        <div className="filter-chips">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              className={`chip ${filtro === cat ? "active" : ""}`}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div className="gallery-count">
            <strong>{filtered.length}</strong>
            evidencias visibles
          </div>
          <div className="gallery-view-toggle">
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Vista cuadrícula"
            >
              ⊞
            </button>
            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="Vista lista"
            >
              ≡
            </button>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <h3>No se encontraron evidencias</h3>
          <p>
            Intenta cambiar el filtro o escribir otra palabra en el buscador.
            Esta sección responde en tiempo real a lo que selecciones.
          </p>
        </div>
      ) : (
        <div className={`cards-grid view-${viewMode}`}>
          {filtered.map((item) => {
            const ft = FILE_CONFIG[item.tipo_archivo] || FILE_CONFIG.imagen;
            const previewType = fileExistsPreviewType(item.tipo_archivo);

            return (
              <article
                key={item.id}
                className={`ev-card ${viewMode === "list" ? "list-mode" : ""}`}
                onClick={() => setModal(item)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setModal(item)}
              >
                <div className="ev-preview">
                  {previewType === "image" && <img src={item.ruta} alt={item.titulo} />}

                  {previewType === "video" && (
                    <video muted preload="metadata">
                      <source src={item.ruta} type="video/mp4" />
                    </video>
                  )}

                  {previewType === "pdf" && (
                    <div className="ev-preview-pdf">
                      <div style={{ fontSize: "2.4rem" }}>📄</div>
                      <div>{item.titulo}</div>
                    </div>
                  )}

                  {previewType === "file" && (
                    <div className="ev-preview-file">
                      <div style={{ fontSize: "2.4rem" }}>📑</div>
                      <div>{item.titulo}</div>
                    </div>
                  )}

                  <div className="ftype-badge">
                    {ft.icon} {ft.label}
                  </div>
                </div>

                <div className="ev-body">
                  <span className="ev-cat" style={{ background: item.color }}>
                    {item.categoria}
                  </span>
                  <h3 className="ev-title">{item.titulo}</h3>
                  <p className="ev-desc">{item.descripcion}</p>
                  <div className="ev-tags">
                    {item.tags.map((t) => (
                      <span key={t} className="ev-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="ev-footer">
                    <span className="ev-semana">{item.semana}</span>
                    <button
                      className="ev-open-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModal(item);
                      }}
                    >
                      Ver evidencia →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
