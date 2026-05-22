import React from 'react'
import './Proyectos.css'

const proyectos = [
  {
    categoria: 'Aplicación Web',
    title: 'Aplicación para KeBondiola',
    desc: 'Plataforma de ventas con flujo simple para pedidos y experiencia optimizada.',
    link: 'https://kebondiola.vercel.app/',
    color: '#5BC8F5',
  },
  {
    categoria: 'Aplicación Web',
    title: 'Aplicación para KePastelito',
    desc: 'Plataforma de ventas con flujo simple para pedidos y experiencia optimizada.',
    link: 'https://kepastelito.vercel.app/',
    color: '#8B3FA8',
  },
  {
    categoria: 'Aplicación Web',
    title: 'Aplicación para CEO FM Radio Online',
    desc: 'Radio online con acceso directo para escuchar en vivo.',
    link: 'https://radio-online-ceo.vercel.app/',
    color: '#5BC8F5',
  },
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <div className="container">
        <div className="proyectos__header">
          <p className="section-label">Nuestro trabajo</p>
          <h2 className="section-title">
            Proyectos de <span>desarrollo de aplicaciones</span>
          </h2>



        </div>

        <div className="proyectos__grid">
          {proyectos.map((p, i) => (
            <div className="proyecto-card" key={p.title + i}>
              <div className="proyecto-card__header" style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}>
                <span className="proyecto-card__cat" style={{ color: p.color }}>{p.categoria}</span>
                <div className="proyecto-card__visual" aria-hidden="true">
                  <div className="pv-circle pv-circle--1" style={{ background: p.color }}></div>
                  <div className="pv-circle pv-circle--2" style={{ background: p.color }}></div>
                </div>
              </div>
              <div className="proyecto-card__body">
                <h3 className="proyecto-card__title">{p.title}</h3>
                <p className="proyecto-card__desc">{p.desc}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: p.color,
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      marginTop: '15px',
                      display: 'inline-block',
                      textDecoration: 'none',
                    }}
                  >
                    Ver app real ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

