import React from 'react'
import './Nosotros.css'

const valores = [
  { icon: '💡', title: 'Creatividad', desc: 'Pensamos diferente para que tu marca destaque en un mercado saturado.' },
  { icon: '🎯', title: 'Estrategia', desc: 'Cada acción tiene un propósito y un objetivo medible.' },
  { icon: '🤝', title: 'Compromiso', desc: 'Trabajamos como socios, no como proveedores.' },
  { icon: '📈', title: 'Resultados', desc: 'Nuestra métrica del éxito es el crecimiento de tu negocio.' },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotros__deco" aria-hidden="true"></div>
      <div className="container">
        <div className="nosotros__grid">
          <div className="nosotros__left">
            <p className="section-label">¿Quiénes somos?</p>
            <h2 className="section-title">
              Más que una agencia,<br />
              <span>somos tu equipo</span>
            </h2>
            <p className="nosotros__text">
              CEO Multimedios nació con una convicción clara: las empresas necesitan comunicar con inteligencia, no solo con volumen. Somos un equipo apasionado por el marketing digital y las soluciones comunicacionales que transforman negocios.
            </p>
            <p className="nosotros__text">
              Combinamos estrategia, creatividad y tecnología para ayudar a emprendedores y empresas a construir su presencia digital de manera sólida y auténtica.
            </p>
            <div className="nosotros__stats">
              <div className="nosotros__stat">
                <span className="stat-num">+50</span>
                <span className="stat-label">Proyectos realizados</span>
              </div>
              <div className="nosotros__stat">
                <span className="stat-num">+30</span>
                <span className="stat-label">Clientes satisfechos</span>
              </div>
              <div className="nosotros__stat">
                <span className="stat-num">5</span>
                <span className="stat-label">Años de experiencia</span>
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
