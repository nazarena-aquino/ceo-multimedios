import React from 'react'
import './Footer.css'

const links = ['inicio', 'nosotros', 'servicios', 'equipo', 'contacto']

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo-color.jpeg" alt="CEO Multimedios" className="footer__logo-img" />
              <div>
                <span className="footer__logo-name">CEO <em>Multimedios</em></span>
                <span className="footer__logo-sub">Comunicación Empresarial Organizada</span>
              </div>
            </div>
            <p className="footer__tagline">
              "Comunicamos lo que somos capaces de hacer."
            </p>
          </div>

          <nav className="footer__nav">
            <span className="footer__nav-title">Navegación</span>
            {links.map(id => (
              <button key={id} onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          <div className="footer__contacto">
            <span className="footer__nav-title">Contacto</span>
            <a href="mailto:ceomultimedios2026@gmail.com">ceomultimedios2026@gmail.com</a>
            <a href="https://wa.me/5493704774883" target="_blank" rel="noopener noreferrer">+54 9 3704774883</a>
            <span>Formosa, Argentina</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} CEO Multimedios. Todos los derechos reservados.</span>
          <span>Hecho con 💜 en Formosa, Argentina</span>
        </div>
      </div>
    </footer>
  )
}
