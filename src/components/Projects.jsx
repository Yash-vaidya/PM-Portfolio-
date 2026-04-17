import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    icon: '📍',
    title: 'Valor',
    category: 'Location Tracking Software',
    description: 'Real-time GPS location tracking software for fleet management and vehicle monitoring with live dashboard and analytics.',
    stats: ['.NET', 'GPS Tracking', 'Real-time', '2025'],
    highlight: true,
  },
  {
    icon: '🛵',
    title: 'Bike Clan',
    category: 'Location Tracking System',
    description: 'Location tracking system designed specifically for bike riders with route mapping, speed monitoring, and safety alerts.',
    stats: ['MERN', 'GPS', 'Mobile App', '2024'],
    highlight: true,
  },
  {
    icon: '📢',
    title: 'Sahu Advertisement',
    category: 'CRM Based Software',
    description: 'Custom CRM solution for advertisement agency managing client relationships, campaigns, and billing workflows.',
    stats: ['.NET', 'CRM', 'Database', '2025'],
    highlight: true,
  },
  {
    icon: '🧹',
    title: 'Clenatech',
    category: 'CRM Based Software',
    description: 'CRM platform for cleaning and maintenance company with client management, service scheduling, and invoice generation.',
    stats: ['.NET', 'CRM', 'Scheduling', '2024'],
    highlight: true,
  },
  {
    icon: '⚙️',
    title: 'GCS',
    category: 'CRM Based Software',
    description: 'General CRM software solution for business process management and customer data handling.',
    stats: ['.NET', 'CRM', 'Management', '2024'],
    highlight: false,
  },
  {
    icon: '🏛️',
    title: 'NGO Website',
    category: 'Dynamic Website',
    description: 'Dynamic NGO website with donation management, event registration, volunteer coordination, and content management system.',
    stats: ['MERN', 'Dynamic', 'CMS', '2024'],
    highlight: true,
  },
  {
    icon: '🍄',
    title: 'Mushroom Spaces',
    category: 'Business Software',
    description: 'Software solution for mushroom farming business with inventory tracking, production management, and sales analytics.',
    stats: ['.NET', 'Inventory', 'Analytics', '2024'],
    highlight: false,
  },
  {
    icon: '💻',
    title: 'D Chandrakan',
    category: 'Business Software',
    description: 'Custom software solution for business operations management with reporting and automation features.',
    stats: ['.NET', 'Business', 'Reports', '2023'],
    highlight: false,
  },
  {
    icon: '🔧',
    title: 'GMK Software',
    category: 'Business Software',
    description: 'Enterprise software solution for operational management and business automation.',
    stats: ['.NET', 'Automation', 'Management', '2023'],
    highlight: false,
  },
  {
    icon: '🎯',
    title: 'Zenith',
    category: 'CRM Based Software',
    description: 'CRM platform for sales management with lead tracking, pipeline management, and performance analytics.',
    stats: ['.NET', 'CRM', 'Sales', '2025'],
    highlight: false,
  },
  {
    icon: '👶',
    title: 'AI Pre School',
    category: 'Educational Platform',
    description: 'AI-powered preschool management system with student tracking, curriculum planning, and parent communication.',
    stats: ['MERN', 'AI', 'Education', '2024'],
    highlight: false,
  },
  {
    icon: '🤖',
    title: 'Plaapy',
    category: 'AI Post Creation Website',
    description: 'AI-generated post creation platform for Over Company with automated content generation and social media integration.',
    stats: ['MERN', 'AI', 'Social Media', '2025'],
    highlight: true,
  },
  {
    icon: '🏥',
    title: 'Santron 1 & 2',
    category: 'Medical Desktop System',
    description: 'Medical desktop application for clinic management with patient records, appointments, prescriptions, and billing.',
    stats: ['.NET', 'Medical', 'Desktop', '2023'],
    highlight: true,
  },
  {
    icon: '🏥',
    title: 'V Care',
    category: 'Medical Software',
    description: 'Healthcare management software for patient care coordination and medical record keeping.',
    stats: ['.NET', 'Medical', 'Healthcare', '2023'],
    highlight: false,
  },
  {
    icon: '📊',
    title: 'PLC',
    category: 'Business Software',
    description: 'Professional business software for enterprise resource planning and process control.',
    stats: ['.NET', 'ERP', 'Management', '2023'],
    highlight: false,
  },
  {
    icon: '👥',
    title: 'HR Neeti',
    category: 'Mobile Application',
    description: 'Mobile application for HR management with employee tracking, attendance, payroll, and leave management.',
    stats: ['Mobile', 'HRM', 'Flutter', '2024'],
    highlight: true,
  },
  {
    icon: '🚚',
    title: 'Movo',
    category: 'Business Software',
    description: 'Logistics and delivery management software for fleet operations and dispatch handling.',
    stats: ['.NET', 'Logistics', 'Fleet', '2024'],
    highlight: false,
  },
  {
    icon: '🏠',
    title: 'Land',
    category: 'Business Software',
    description: 'Property and land management software for real estate business with listing and transaction management.',
    stats: ['.NET', 'Real Estate', 'Management', '2023'],
    highlight: false,
  },
  {
    icon: '📋',
    title: 'STK',
    category: 'HR Management Software',
    description: 'HR management software for employee data management, payroll processing, and attendance tracking.',
    stats: ['.NET', 'HRM', 'Payroll', '2024'],
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