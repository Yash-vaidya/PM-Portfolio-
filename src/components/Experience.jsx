import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    role: 'Project Coordinator',
    company: 'Current Company',
    period: 'Dec 2024 - Present',
    description: 'Started as MERN Stack Developer, transitioned to Project Coordinator due to excellent communication skills. Managing multiple projects while coordinating between teams and clients.',
    highlights: ['Managing 5+ web applications', '3 medical desktop software', '22+ projects coordinated', 'Client communication', 'Progress tracking & reporting'],
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

function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.div
        className="experience-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Experience</p>
        <h2 className="section-title">My Professional Journey</h2>
      </motion.div>
      <motion.div
        className="experience-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} className="experience-card" variants={item}>
            <div className="exp-header">
              <h3 className="exp-role">{exp.role}</h3>
              <span className="exp-period">{exp.period}</span>
            </div>
            <p className="exp-company">{exp.company}</p>
            <p className="exp-desc">{exp.description}</p>
            <ul className="exp-highlights">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience