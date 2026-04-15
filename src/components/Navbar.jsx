import React, { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['inicio', 'nosotros', 'servicios', 'proyectos', 'equipo', 'contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map(id => (
            <li key={id}>
              <button
                className={active === id ? 'active' : ''}
                onClick={() => handleNav(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <button className="navbar__hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? 'open' : ''}></span>
          <span className={open ? 'open' : ''}></span>
          <span className={open ? 'open' : ''}></span>
        </button>
      </div>
    </nav>
  )
}