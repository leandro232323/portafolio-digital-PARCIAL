export default function Navbar({ scrolled }) {
  const links = [
    ["#inicio", "Inicio"],
    ["#objetivo", "Objetivo"],
    ["#corte", "Corte I"],
    ["#galeria", "Evidencias"],
    ["#reflexion", "Reflexión"],
    ["#referencias", "Referencias"],
  ];

  return (
    <nav className={`nav ${scrolled ? "shadow" : ""}`}>
      <a href="#inicio" className="nav-logo">
        <span className="nav-logo-dot" />
        Portafolio Digital
      </a>

      <ul className="nav-links">
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
