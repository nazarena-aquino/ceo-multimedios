"use client"
import React from 'react'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="inicio" className="hero">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--blue" aria-hidden="true"></div>
      <div className="hero__blob hero__blob--purple" aria-hidden="true"></div>
      <div className="hero__noise" aria-hidden="true"></div>

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Logo Brand */}
          <div className="hero__brand" style={{animationDelay:'0.1s'}}>
            <div className="hero__brand-main">
              <div className="hero__ceo-badge">
                <span>CEO</span>
              </div>
              <h1 className="hero__brand-name">MultiMedios</h1>
            </div>
            <p className="hero__tagline">Innovación & Tendencia</p>
          </div>

          {/* Botones */}
          <div className="hero__actions" style={{animationDelay:'0.55s'}}>
            <button className="btn btn-primary" onClick={() => scrollTo('servicios')}>
              Ver servicios
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contacto')}>
              Hablemos
            </button>
          </div>
        </div>

        {/* Pelotas Flotantes (Visual) */}
        <div className="hero__visual" style={{animationDelay:'0.3s'}}>
          <div className="hero__logo-mark">
            <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" width="260" height="280">
              <defs>
                <radialGradient id="gBlue" cx="50%" cy="30%">
                  <stop offset="0%" stopColor="#a8e6f7"/>
                  <stop offset="100%" stopColor="#5BC8F5"/>
                </radialGradient>
                <radialGradient id="gPurple" cx="30%" cy="30%">
                  <stop offset="0%" stopColor="#c47de0"/>
                  <stop offset="100%" stopColor="#8B3FA8"/>
                </radialGradient>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.18"/>
                </filter>
              </defs>
              <path d="M120 10 C150 10 175 35 175 70 C175 105 150 125 120 125 C90 125 65 105 65 70 C65 35 90 10 120 10 Z" fill="url(#gBlue)" filter="url(#shadow)"/>
              <path d="M80 100 C110 100 135 125 135 160 C135 195 110 215 80 215 C50 215 25 195 25 160 C25 125 50 100 80 100 Z" fill="url(#gPurple)" filter="url(#shadow)"/>
            </svg>
          </div>
          <div className="hero__ring hero__ring--1"></div>
          <div className="hero__ring hero__ring--2"></div>
        </div>
      </div>
    </section>
  )
}