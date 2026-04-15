import React from 'react'
import './Servicios.css'

const servicios = [
  {
    icon: '📱',
    color: '#5BC8F5',
    title: 'Social Media Management',
    desc: 'Gestión integral de tus redes sociales con estrategia, contenido y análisis de métricas para hacer crecer tu comunidad.',
    tags: ['Instagram', 'Facebook', 'LinkedIn', 'TikTok'],
  },
  {
    icon: '🎨',
    color: '#8B3FA8',
    title: 'Diseño Gráfico & Branding',
    desc: 'Identidad visual que comunica la esencia de tu marca. Desde el logo hasta el manual de marca completo.',
    tags: ['Logotipos', 'Manual de marca', 'Material gráfico'],
  },
  {
    icon: '💻',
    color: '#5BC8F5',
    title: 'Desarrollo Web',
    desc: 'Sitios web modernos, rápidos y responsivos que convierten visitas en clientes. Landing pages y portafolios.',
    tags: ['Landing Pages', 'Portafolios', 'Tiendas online'],
  },
  {
    icon: '📸',
    color: '#8B3FA8',
    title: 'Producción de Contenido',
    desc: 'Fotografía, video y contenido audiovisual profesional para redes sociales, publicidad y comunicación corporativa.',
    tags: ['Fotografía', 'Video', 'Reels', 'Publicidad'],
  },
  {
    icon: '📣',
    color: '#5BC8F5',
    title: 'Publicidad Digital',
    desc: 'Campañas pagadas en Meta Ads y Google Ads optimizadas para maximizar tu ROI y alcanzar a tu audiencia ideal.',
    tags: ['Meta Ads', 'Google Ads', 'Retargeting'],
  },
  {
    icon: '✍️',
    color: '#8B3FA8',
    title: 'Copywriting & Comunicación',
    desc: 'Textos persuasivos que conectan emocionalmente con tu audiencia y convierten. Storytelling estratégico para tu marca.',
    tags: ['Copy', 'Storytelling', 'Email marketing'],
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="servicios__top-blob" aria-hidden="true"></div>
      <div className="container">
        <div className="servicios__header">
          <p className="section-label">Lo que hacemos</p>
          <h2 className="section-title">
            Servicios diseñados para<br />
            <span>hacer crecer tu negocio</span>
          </h2>
          <p className="servicios__sub">
            Soluciones completas de marketing y comunicación digital para empresas y emprendedores que quieren dejar huella.
          </p>
        </div>

        <div className="servicios__grid">
          {servicios.map((s) => (
            <div className="servicio-card" key={s.title}>
              <div className="servicio-card__icon" style={{ background: s.color + '18', color: s.color }}>
                {s.icon}
              </div>
              <h3 className="servicio-card__title">{s.title}</h3>
              <p className="servicio-card__desc">{s.desc}</p>
              <div className="servicio-card__tags">
                {s.tags.map(t => (
                  <span key={t} className="servicio-tag">{t}</span>
                ))}
              </div>
              <div className="servicio-card__line" style={{ background: s.color }}></div>
            </div>
          ))}
        </div>

        {/* Slogan banner con imagen real */}
        <div className="servicios__slogan-banner">
          <img
            src="/slogan-banner.jpeg"
            alt="Comunicamos lo que somos capaces de hacer — CEO Multimedios"
            className="slogan-banner__img"
          />
        </div>
      </div>
    </section>
  )
}
