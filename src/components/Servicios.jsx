import React from 'react'
import './Servicios.css'

const servicios = [
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    color: '#5BC8F5',
    title: 'Desarrollo Web & Mobile',
    desc: 'Desarrollamos aplicaciones escalables que optimizan procesos y conectan con tus usuarios. Desde sistemas de gestión a medida hasta tiendas online, garantizamos alto rendimiento y una experiencia fluida en cualquier dispositivo para potenciar el crecimiento de tu negocio.',
    tags: ['Web Apps', 'Portafolios', 'Sistemas a Medida', 'Apps Móviles', 'E-commerce'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
    ),
    color: '#8B3FA8',
    title: 'Soluciones Digitales',
    desc: 'No ofrecemos herramientas sueltas, desarrollamos soluciones que funcionan. Creamos ecosistemas digitales pensados para optimizar, escalar y posicionarte. Integramos tecnología, estrategia y experiencia de usuario para que cada desarrollo tenga un impacto real en tu crecimiento.',
    tags: ['Estrategia Digital', 'Automatización', 'UX / UI', 'Integraciones', 'Consultoría'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
        <path d="M12 2v2"></path>
      </svg>
    ),
    color: '#5BC8F5',
    title: 'Social Media Management & Copywriting | Comunicación',
    desc: 'Gestión integral de redes sociales con enfoque estratégico, creación de contenido y análisis de métricas orientadas a resultados. Desarrollamos textos persuasivos que conectan con tu audiencia y fortalecen tu marca. Aplicamos storytelling estratégico para comunicar, generar impacto y construir posicionamiento.',
    tags: ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'Copy', 'Storytelling', 'Email marketing'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A1 1 0 0 1 10 21H6A1 1 0 0 1 5 20V16L9 12V6A1 1 0 0 1 10 5H18A1 1 0 0 1 19 6V11L15 15V19A1 1 0 0 1 14 20H11Z"></path>
        <path d="M19 6L21 4"></path>
        <path d="M21 11L23 13"></path>
        <path d="M18 1L21 2"></path>
      </svg>
    ),
    color: '#8B3FA8',
    title: 'Publicidad Digital',
    desc: 'Gestionamos campañas pagadas en Meta Ads y Google Ads, optimizadas estratégicamente para que cada peso invertido se traduzca en ventas y alcance a tu audiencia ideal.',
    tags: ['Meta Ads', 'Google Ads', 'Retargeting'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
      </svg>
    ),
    color: '#5BC8F5',
    title: 'Diseño Gráfico & Branding',
    desc: 'Diseñamos identidades visuales que comunican la esencia de tu negocio. Desde la creación del logotipo hasta el manual de marca completo.',
    tags: ['Logotipos', 'Manual de Marca', 'Material Gráfico'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
    ),
    color: '#8B3FA8',
    title: 'Producción de Contenido',
    desc: 'Producimos fotografía y video profesional para redes sociales, publicidad y comunicación corporativa, captando la atención de tu audiencia.',
    tags: ['Fotografía', 'Video', 'Reels', 'Publicidad'],
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
            Servicios diseñados para <span>hacer crecer tu negocio</span>
          </h2>
          <p className="servicios__sub">
          Integramos estrategia, contenido y tecnología para generar posicionamiento, optimizar procesos y lograr resultados concretos.
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