import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="nav-logo">VV</Link>
      <ul className="nav-links">
        <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
        <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link></li>
        <li><Link to="/experience" className={isActive('/experience') ? 'active' : ''}>Experience</Link></li>
        <li><Link to="/skills" className={isActive('/skills') ? 'active' : ''}>Skills</Link></li>
        <li><Link to="/education" className={isActive('/education') ? 'active' : ''}>Education</Link></li>
        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
      </ul>
      <Link to="/contact" className="nav-cta">Let's Talk</Link>
    </motion.nav>
  )
}

export default Navbar