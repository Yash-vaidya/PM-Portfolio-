import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    icon: '🛒',
    title: 'E-Commerce Platform',
    category: 'Full Stack Web Application',
    description: 'Complete shopping platform with cart, checkout, payment gateway integration, and comprehensive admin dashboard for inventory and order management.',
    stats: ['MERN Stack', 'Stripe/PayU', 'Admin Panel', '3 Months'],
    highlight: true,
  },
  {
    icon: '🏥',
    title: 'Healthcare Management System',
    category: 'Medical Web Application',
    description: 'Full-featured patient management portal enabling appointment scheduling, medical history tracking, prescription management, and doctor coordination.',
    stats: ['React', 'Node.js', 'MongoDB', 'Real-time'],
    highlight: true,
  },
  {
    icon: '📦',
    title: 'Inventory Pro',
    category: 'Business Web Application',
    description: 'Enterprise-grade inventory system with barcode scanning, automated stock alerts, purchase order management, and detailed analytics dashboards.',
    stats: ['Full Stack', 'Analytics', 'Auto Alerts', '2 Months'],
    highlight: false,
  },
  {
    icon: '💊',
    title: 'Clinic Management Suite',
    category: 'Medical Desktop Software',
    description: 'Comprehensive clinic software handling patient registrations, appointments, prescriptions, billing, and medical records with offline capability.',
    stats: ['Desktop', 'Medical', 'Offline Mode', 'Windows'],
    highlight: true,
  },
  {
    icon: '🧪',
    title: 'Pharmacy Management System',
    category: 'Medical Desktop Software',
    description: 'Complete pharmacy solution with medicine inventory, expiry tracking, barcode-based billing, and supplier management features.',
    stats: ['Desktop', 'Inventory', 'Barcode', '1 Month'],
    highlight: false,
  },
  {
    icon: '🔬',
    title: 'Lab Information System',
    category: 'Medical Desktop Software',
    description: 'Laboratory management software for test booking, sample tracking, result generation, and patient report delivery.',
    stats: ['Desktop', 'Reports', 'Sample Tracking', '2 Weeks'],
    highlight: false,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Projects</p>
        <h2 className="section-title">Featured Work</h2>
      </motion.div>
      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={`project-card ${project.highlight ? 'highlight' : ''}`} 
            variants={item}
          >
            <span className="project-icon">{project.icon}</span>
            <p className="project-type">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-stats">
              {project.stats.map((stat, i) => (
                <span key={i} className="stat">{stat}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects