import { motion } from 'framer-motion'
import './About.css'

const aboutCards = [
  {
    icon: '🚀',
    title: 'Transition Journey',
    description: 'From MERN Stack Developer to Project Coordinator — proving that communication and leadership matter more than just code.',
  },
  {
    icon: '📊',
    title: 'Project Management',
    description: 'Managing 22+ projects, tracking progress, and reporting to stakeholders — learning the art of coordination.',
  },
  {
    icon: '🎯',
    title: 'Future Vision',
    description: 'Pursuing MBA while working — aiming for global certifications to work abroad.',
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

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">About Me</p>
        <h2 className="section-title">From Developer to Coordinator</h2>
        <p className="section-desc">
          I started as a MERN Stack Developer but discovered my true passion 
          in Project Coordination. My communication skills helped me transition 
          from a developer role to managing projects — a journey that continues 
          as I pursue my MBA and aim for global certifications to work abroad.
        </p>
      </motion.div>
      <motion.div
        className="about-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {aboutCards.map((card, index) => (
          <motion.div key={index} className="about-card" variants={item}>
            <div className="about-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default About