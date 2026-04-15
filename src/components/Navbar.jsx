import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')
  const location = useLocation()
  const isHome = location.pathname === '/'
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }
  
  const isActive = (path) => location.pathname === path
  const showTransparent = isHome && !scrolled
  
  return (
    <nav className={`navbar ${showTransparent ? 'transparent' : 'solid'}`}>
      <Link to="/" className="nav-logo">VV</Link>
      <ul className="nav-links">
        <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
        <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link></li>
        <li><Link to="/experience" className={isActive('/experience') ? 'active' : ''}>Experience</Link></li>
        <li><Link to="/skills" className={isActive('/skills') ? 'active' : ''}>Skills</Link></li>
        <li><Link to="/education" className={isActive('/education') ? 'active' : ''}>Education</Link></li>
        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
      </ul>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
        <Link to="/contact" className="nav-cta">Let's Talk</Link>
      </div>
    </nav>
  )
}

export default Navbar