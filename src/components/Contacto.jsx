import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contacto.css'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCargando(true)

    try {
      // AQUÍ VAN TUS CREDENCIALES DE EMAILJS
      await emailjs.send(
        'service_coegoih',     
        'template_w9hv9b2',    
        {
          nombre: form.nombre,
          email: form.email,
          empresa: form.empresa || 'No especificada',
          mensaje: form.mensaje,
        }, 
        'h3Z-V6OA_s8plFj8w'     
      )
      
      setEnviado(true)
      setTimeout(() => setEnviado(false), 4000)
      setForm({ nombre: '', email: '', empresa: '', mensaje: '' })
    } catch (error) {
      console.error('Error al enviar el mensaje:', error)
      alert('Hubo un problema al enviar el mensaje. Por favor, intentá nuevamente.')
    } finally {
      setCargando(false)
    }
  }

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__blob contacto__blob--1" aria-hidden="true"></div>
      <div className="contacto__blob contacto__blob--2" aria-hidden="true"></div>
      <div className="container">
        <div className="contacto__grid">
          <div className="contacto__left">
            <p className="section-label">Hablemos</p>
            <h2 className="section-title">
              ¿Listo para hacer<br />
              <span>crecer tu marca?</span>
            </h2>
            <p className="contacto__text">
              Contanos sobre tu proyecto y en menos de 24 horas te respondemos con ideas para arrancar.
            </p>

            <div className="contacto__info">
              <a href="mailto:ceomultimedios2026@gmail.com" className="contacto__item">
                <div className="contacto__item-icon">✉️</div>
                <div>
                  <span className="contacto__item-label">Email</span>
                  <span className="contacto__item-value">ceomultimedios2026@gmail.com</span>
                </div>
              </a>
              <a href="https://wa.me/5493704774883" target="_blank" rel="noopener noreferrer" className="contacto__item">
                <div className="contacto__item-icon">💬</div>
                <div>
                  <span className="contacto__item-label">WhatsApp</span>
                  <span className="contacto__item-value">+54 9 3704774883</span>
                </div>
              </a>
              <div className="contacto__item">
                <div className="contacto__item-icon">📍</div>
                <div>
                  <span className="contacto__item-label">Ubicación</span>
                  <span className="contacto__item-value">Formosa, Argentina</span>
                </div>
              </div>
            </div>

            <div className="contacto__redes">
              <span className="contacto__redes-label">Seguinos en</span>
              <div className="contacto__redes-links">
                <a href="https://www.instagram.com/ceomultimedios/" className="red-btn red-btn--ig" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/CeoMultimedios.net" className="red-btn red-btn--fb" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/ceo-multimedios/?viewAsMember=true" className="red-btn red-btn--li" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contacto__right">
            <form className="contacto__form-wrapper" onSubmit={handleSubmit}>
              {enviado && (
                <div className="contacto__success">
                  <span></span>
                  <p>¡Mensaje enviado! Te respondemos pronto.</p>
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="empresa">Empresa / Emprendimiento</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="¿Cómo se llama tu marca?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">¿En qué podemos ayudarte? *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Contanos sobre tu proyecto, tus objetivos y qué servicio te interesa..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary contacto__submit"
                disabled={!form.nombre || !form.email || !form.mensaje || cargando}
              >
                {cargando ? 'Enviando...' : 'Enviar mensaje'}
                {!cargando && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}