import React from 'react'
import './Equipo.css'

const equipo = [
  {
    nombre: 'Valentina Morales',
    rol: 'Directora Creativa & Fundadora',
    bio: 'Diseñadora con más de 7 años en comunicación visual. Apasionada por construir marcas que enamoran.',
    color: '#8B3FA8',
    initials: 'VM',
    redes: ['instagram', 'linkedin'],
  },
  {
    nombre: 'Matías González',
    rol: 'Director de Marketing Digital',
    bio: 'Especialista en performance marketing y estrategia digital. Meta Ads y Google Ads certificado.',
    color: '#5BC8F5',
    initials: 'MG',
    redes: ['linkedin', 'twitter'],
  },
  {
    nombre: 'Camila Torres',
    rol: 'Content Creator & Copywriter',
    bio: 'Storyteller de corazón. Crea contenido que conecta marcas con personas de manera auténtica.',
    color: '#8B3FA8',
    initials: 'CT',
    redes: ['instagram', 'linkedin'],
  },
  {
    nombre: 'Luciano Reyes',
    rol: 'Desarrollador Web & UX',
    bio: 'Transforma ideas en experiencias digitales. Especializado en sitios rápidos, modernos y funcionales.',
    color: '#5BC8F5',
    initials: 'LR',
    redes: ['github', 'linkedin'],
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
                <h3 className="miembro-card__nombre">{m.nombre}</h3>
                <p className="miembro-card__rol" style={{ color: m.color }}>{m.rol}</p>
                <p className="miembro-card__bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
