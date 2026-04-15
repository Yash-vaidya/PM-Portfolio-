import { useState, useEffect } from 'react'
import './Hero.css'
import lightModeImg from '../../../assets/lightmode.png'

const name = "Vishavdip Vaidya"

function Hero() {
  const [theme, setTheme] = useState('dark')
  const [key, setKey] = useState(0)
  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme')
      if (currentTheme !== theme) {
        setTheme(currentTheme || 'dark')
        setKey(prev => prev + 1)
      }
    })
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-theme'] 
    })
    
    return () => observer.disconnect()
  }, [theme])
  
  return (
    <section 
      className="hero" 
      id="hero" 
      key={key}
      style={{ '--light-bg': `url(${lightModeImg})` }}
    >
      <div className="hero-content">
        <p className="greeting">Hello, I'm</p>
        <h1>
          <span className="name-wrapper">
            <span className="name-text">{name}</span>
          </span>
          <span className="hero-title-highlight">Project Coordinator</span>
        </h1>
        <p className="hero-subtitle">
          Aspiring Product Manager | MBA Student
        </p>
        <p className="hero-desc">
          Project Coordinator with a developer background — combining technical 
          understanding with communication skills to manage projects effectively. 
          Currently pursuing MBA while building experience in product leadership.
        </p>
        <div className="hero-meta">
          <div className="meta-item">
            <span className="meta-value">22+</span>
            <span className="meta-label">Projects Managed</span>
          </div>
          <div className="meta-item">
            <span className="meta-value">2025</span>
            <span className="meta-label">Started Journey</span>
          </div>
        </div>
        <div className="hero-cta">
          <a href="/contact" className="btn-primary">Get In Touch</a>
          <a href="/projects" className="btn-secondary">View Work</a>
        </div>
      </div>
    </section>
  )
}

export default Hero