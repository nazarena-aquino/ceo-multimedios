import React from 'react'
import './Nosotros.css'

const valores = [
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Creatividad',
    desc: 'Pensamos diferente para que tu marca destaque en un mercado saturado.'
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Estrategia',
    desc: 'Cada acción tiene un propósito y un objetivo medible.'
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm0 0h8m8 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
      </svg>
    ),
    title: 'Compromiso',
    desc: 'Nos integramos a tu equipo para construir juntos.'
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-6 6" />
      </svg>
    ),
    title: 'Resultados',
    desc: 'Tu crecimiento es la única métrica que importa.'
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotros__deco" aria-hidden="true"></div>
      <div className="container">
        <div className="nosotros__grid">
          <div className="nosotros__left">
            <h1 className="section-label">¿Quiénes somos?</h1>
            <h2 className="section-title">
              Más que una agencia, <span>somos tu equipo</span>
            </h2>
            <p className="nosotros__text">
              En CEO Multimedios tenemos una misión: entender, construir y potenciar lo que cada empresa, emprendedor o institucion son capaces de hacer.
              La comunicación no es un complemento, es una herramienta estratégica de crecimiento, y la trabajamos como tal.
              Pensamos, planificamos y ejecutamos con un objetivo claro: posicionarte, diferenciarte y hacerte crecer.
              No medimos resultados en métricas vacías, medimos impacto, construcción de marca y evolución real.
            </p>
            <p className="nosotros__text">
              Si crecemos nosotros, es porque crecés vos.
              Y si no, no tiene sentido.
            </p>
            <div className="nosotros__stats">
  <div className="nosotros__stat">
    <span className="stat-num">100%</span>
    <span className="stat-label">Compromiso<br/>total</span>
  </div>
  <div className="nosotros__stat">
    <span className="stat-num">360°</span>
    <span className="stat-label">Estrategia<br/>integral</span>
  </div>
  <div className="nosotros__stat">
    <span className="stat-num">1</span>
    <span className="stat-label">Mismo<br/>equipo</span>
  </div>
</div>
          </div>

          <div className="nosotros__right">
            {valores.map((v) => (
              <div className="valor-card" key={v.title}>
                <div className="valor-card__icon">{v.icon}</div>
                <div>
                  <h3 className="valor-card__title">{v.title}</h3>
                  <p className="valor-card__desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
