import { motion } from 'framer-motion'
import './About.css'

const aboutCards = [
  {
    icon: '🚀',
    title: 'Project Leadership',
    description: 'Started as MERN Stack Developer, transitioned to managing 20+ projects across .NET, MERN, and mobile technologies.',
  },
  {
    icon: '📊',
    title: 'Project Portfolio',
    description: 'Successfully delivered diverse projects including CRM software, location tracking systems, medical desktop apps, and AI platforms.',
  },
  {
    icon: '🎯',
    title: 'Tech Stack',
    description: 'Expertise in .NET, MERN Stack, Flutter for mobile, and desktop applications. Managing end-to-end project delivery.',
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
          I started as a MERN Stack Developer and have grown to manage a diverse portfolio of 20+ projects
          using .NET, MERN Stack, Flutter, and desktop technologies. From location tracking systems to
          CRM software, medical applications to AI platforms — I have delivered solutions across various
          domains while coordinating with teams and clients.
        </p>

        <div className="value-proposition">
          <h3>What I Bring to the Table</h3>
          <ul>
            <li><strong>Technical Leadership:</strong> Guide MERN implementations while managing cross-platform development teams</li>
            <li><strong>Project Orchestration:</strong> Coordinate between developers, designers, and stakeholders across multiple technologies</li>
            <li><strong>Quality Assurance:</strong> Ensure code quality and best practices while managing project timelines and resources</li>
            <li><strong>Business-Technical Bridge:</strong> Translate business requirements into scalable technical solutions</li>
          </ul>
        </div>
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