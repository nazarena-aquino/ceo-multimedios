import React, { useState } from 'react'
import './Proyectos.css'

const proyectos = [
  {
    categoria: 'Branding',
    title: 'Identidad Visual — Café Raíz',
    desc: 'Rediseño completo de marca para cafetería artesanal. Logotipo, paleta, tipografía y manual de marca.',
    color: '#5BC8F5',
    year: '2024',
  },
  {
    categoria: 'Social Media',
    title: 'Campaña Digital — Estudio Forma',
    desc: 'Gestión de redes sociales y campaña de lanzamiento que alcanzó +15K impresiones orgánicas en el primer mes.',
    color: '#8B3FA8',
    year: '2024',
  },
  {
    categoria: 'Web',
    title: 'Sitio Web — Consultora Nexo',
    desc: 'Desarrollo de sitio web corporativo con integración de CRM, blog y formularios de captación de leads.',
    color: '#5BC8F5',
    year: '2023',
  },
  {
    categoria: 'Publicidad',
    title: 'Meta Ads — Tienda Aura',
    desc: 'Campaña de performance en Instagram y Facebook con ROI del 320% en temporada de ventas navideñas.',
    color: '#8B3FA8',
    year: '2023',
  },
  {
    categoria: 'Contenido',
    title: 'Producción — Gym Titan',
    desc: 'Pack mensual de fotografía y video para redes sociales. Estética coherente que triplicó el engagement.',
    color: '#5BC8F5',
    year: '2024',
  },
  {
    categoria: 'Branding',
    title: 'Marca Personal — Coach Valentina',
    desc: 'Construcción de marca personal completa: identidad, estrategia de contenido y presencia digital.',
    color: '#8B3FA8',
    year: '2024',
  },
]

const categorias = ['Todos', 'Branding', 'Social Media', 'Web', 'Publicidad', 'Contenido']

export default function Proyectos() {
  const [filtro, setFiltro] = useState('Todos')

  const filtrados = filtro === 'Todos' ? proyectos : proyectos.filter(p => p.categoria === filtro)

  return (
    <section id="proyectos" className="proyectos">
      <div className="container">
        <div className="proyectos__header">
          <p className="section-label">Nuestro trabajo</p>
          <h2 className="section-title">
            Proyectos que<br />
            <span>hablan por sí solos</span>
          </h2>
        </div>

        <div className="proyectos__filtros">
          {categorias.map(c => (
            <button
              key={c}
              className={`filtro-btn ${filtro === c ? 'filtro-btn--active' : ''}`}
              onClick={() => setFiltro(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="proyectos__grid">
          {filtrados.map((p, i) => (
            <div className="proyecto-card" key={p.title + i}>
              <div className="proyecto-card__header" style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}>
                <span className="proyecto-card__cat" style={{ color: p.color }}>{p.categoria}</span>
                <span className="proyecto-card__year">{p.year}</span>
                <div className="proyecto-card__visual" aria-hidden="true">
                  <div className="pv-circle pv-circle--1" style={{ background: p.color }}></div>
                  <div className="pv-circle pv-circle--2" style={{ background: p.color }}></div>
                </div>
              </div>
              <div className="proyecto-card__body">
                <h3 className="proyecto-card__title">{p.title}</h3>
                <p className="proyecto-card__desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
