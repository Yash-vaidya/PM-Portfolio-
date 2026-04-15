import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Vishavdip Vaidya. All rights reserved.
        </p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer