import React from 'react'
import './Equipo.css'

const equipo = [
  {
    nombre: 'Ana Paula Benitez',
    rol: 'Directora Creativa, SMM & CM',
    bio: 'Diseñadora con gran trayectoria en comunicación visual. Enfocada en construir identidades de marca sólidas y memorables, integrando estrategias de Social Media para potenciar su presencia digital.',
    color: '#8B3FA8',
    initials: 'AB',
    tags: ['Diseño', 'Branding', 'Estrategia', 'Social Media', 'Marketing'],
    linkedin: 'https://www.linkedin.com/in/ana-paula-benitez-00218b362/',
  },
  {
    nombre: 'Nazarena Aquino',
    rol: 'Desarrolladora de Software Multiplataforma',
    bio: 'Especialista en el diseño de soluciones digitales escalables. Orientada a la automatización de procesos y la creación de plataformas eficientes.',
    color: '#5BC8F5',
    initials: 'NA',
    tags: ['Web', 'Mobile', 'Automatización'],
    linkedin: 'https://www.linkedin.com/in/nazarena-ayelen-aquino-b606a2205/',
  },
  {
    nombre: 'Brandon Pzocik',
    rol: 'Desarrollador de Software Multiplataforma & CM',
    bio: 'Desarrollador y estratega digital. Combina la creación de soluciones web y móviles con contenido narrativo que conecta marcas con su audiencia de manera auténtica y directa.',
    color: '#8B3FA8',
    initials: 'BP',
    tags: ['Web', 'Mobile', 'Contenido'],
    linkedin: 'https://www.linkedin.com/in/brandon-pzocik-7a8517232/',
  },
]

export default function Equipo() {
  return (
    <section id="equipo" className="equipo">
      <div className="equipo__blob" aria-hidden="true"></div>
      <div className="container">
        <div className="equipo__header">
          <p className="section-label">Las personas detrás</p>
          <h2 className="section-title">
            Nuestro <span>equipo</span>
          </h2>
          <p className="equipo__sub">
            Un equipo multidisciplinario unido por la pasión de hacer crecer marcas con estrategia y creatividad.
          </p>
        </div>

        <div className="equipo__grid">
          {equipo.map((m) => (
            <div className="miembro-card" key={m.nombre}>
              <div className="miembro-card__avatar" style={{ background: `linear-gradient(135deg, ${m.color}40, ${m.color}90)` }}>
                <span style={{ color: m.color }}>{m.initials}</span>
                <div className="miembro-card__glow" style={{ background: m.color }}></div>
              </div>
              
              <div className="miembro-card__info">
                <div className="miembro-card__textos">
                  <h3 className="miembro-card__nombre">
                    {m.linkedin ? (
                      <a 
                        href={m.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="miembro-card__link"
                      >
                        {m.nombre} ↗
                      </a>
                    ) : (
                      m.nombre
                    )}
                  </h3>
                  <p className="miembro-card__rol" style={{ color: m.color }}>{m.rol}</p>
                  <p className="miembro-card__bio">{m.bio}</p>
                </div>

                <div className="miembro-card__tags">
                  {m.tags.map((tag, index) => (
                    <span key={index} className="miembro-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}