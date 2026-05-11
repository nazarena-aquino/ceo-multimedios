import React from 'react'
import './Servicios.css'

const servicios = [
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
        <line x1="12" y1="12" x2="12" y2="18"></line>
        <line x1="9" y1="15" x2="15" y2="15"></line>
      </svg>
    ),
    color: '#5BC8F5',
    title: 'Producción Audiovisual',
    desc: 'Realizamos producción de contenido audiovisual para campañas, redes sociales, instituciones, eventos y medios digitales. Cada pieza se trabaja con enfoque narrativo, visual y estratégico, adaptada al público y objetivo de cada cliente.',
    tags: ['Spots Publicitarios', 'Cobertura de Eventos', 'Reels', 'Streaming', 'Videos Institucionales', 'Postproducción'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    color: '#8B3FA8',
    title: 'Gestión de Redes Sociales',
    desc: 'Diseñamos estrategias de comunicación digital orientadas al crecimiento y posicionamiento de marcas en redes sociales. Buscamos construir presencia digital sólida, coherente y auténtica.',
    tags: ['Planificación de Contenido', 'Diseño Gráfico', 'Redacción', 'Producción Audiovisual', 'Cobertura en Vivo', 'Interacción y Alcance'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M9 21V9"></path>
      </svg>
    ),
    color: '#5BC8F5',
    title: 'Desarrollo Web y Plataformas Digitales',
    desc: 'Creamos sitios web modernos, funcionales y adaptados a las necesidades de cada proyecto. Priorizamos diseño, velocidad, experiencia de usuario y adaptabilidad móvil.',
    tags: ['Sitios Institucionales', 'Portales Informativos', 'Landing Pages', 'Plataformas Multimedia', 'Integraciones Digitales'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    color: '#8B3FA8',
    title: 'Branding e Identidad Visual',
    desc: 'Construimos identidades visuales que representan la esencia y personalidad de cada marca. Buscamos generar marcas reconocibles, profesionales y con identidad propia.',
    tags: ['Logotipos', 'Manuales de Marca', 'Paletas Visuales', 'Identidad para Redes', 'Aplicaciones Gráficas'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    color: '#5BC8F5',
    title: 'Publicidad y Campañas',
    desc: 'Desarrollamos campañas de comunicación pensadas para generar impacto y visibilidad. Cada campaña se diseña en función de objetivos concretos y públicos específicos.',
    tags: ['Campañas Institucionales', 'Promoción de Productos', 'Contenido Publicitario', 'Estrategias Multimedia', 'Adaptación Multiplataforma'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    color: '#8B3FA8',
    title: 'Cobertura Periodística y Prensa',
    desc: 'Brindamos cobertura profesional para eventos, actividades institucionales y acciones de comunicación. Integramos comunicación, información y producción en tiempo real.',
    tags: ['Cobertura Audiovisual', 'Fotografía', 'Redacción Periodística', 'Difusión Digital', 'Entrevistas y Notas'],
  },
  {
    icon: (
      <svg className="icon-multimedios" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14"></path>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M8.46 8.46a5 5 0 0 0 0 7.07"></path>
      </svg>
    ),
    color: '#5BC8F5',
    title: 'Comunicación Estratégica',
    desc: 'Acompañamos proyectos en el diseño de estrategias comunicacionales integrales. Trabajamos la comunicación como una herramienta de construcción, diferenciación y valor.',
    tags: ['Identidad y Posicionamiento', 'Públicos Objetivos', 'Narrativa Institucional', 'Presencia Digital', 'Estrategias de Crecimiento'],
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
