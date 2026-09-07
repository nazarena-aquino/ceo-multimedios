import React from 'react'
import './Proyectos.css'

const proyectos = [
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
  {
    categoria: 'Aplicación Web',
    title: 'Aplicación web para Antonica',
    desc: 'Solución web a medida para Antonica, con interfaz moderna y funcionalidades adaptadas al negocio.',
    link: 'https://www.antonicamusica.com/',
    
    color: '#8B3FA8',
  },
  {
    categoria: 'Marketing & Redes',
    title: 'Marketing y Gestión de Redes Sociales',
    desc: 'Estrategia, producción de contenido y gestión integral de redes sociales para potenciar la presencia digital de nuestros clientes.',
    linkInstagram: 'https://www.instagram.com/antonica_oficial/',
    linkTiktok: 'https://www.tiktok.com/@antonica_oficial',
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
            Proyectos que <span>hablan por sí solos</span>
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
                <div className="proyecto-card__links">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: p.color }}
                      className="proyecto-link"
                    >
                      Ver web real ↗
                    </a>
                  )}
                  {p.linkInstagram && (
                    <a
                      href={p.linkInstagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: p.color }}
                      className="proyecto-link"
                    >
                      Ver Instagram ↗
                    </a>
                  )}
                  {p.linkTiktok && (
                    <a
                      href={p.linkTiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: p.color }}
                      className="proyecto-link"
                    >
                      Ver TikTok ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
