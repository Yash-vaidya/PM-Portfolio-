import { motion } from 'framer-motion'
import './Education.css'

const education = [
  {
    degree: 'MBA (Business Administration)',
    school: 'Ongoing',
    year: '2025 - 2027',
    description: 'Pursuing an MBA to develop strategic thinking, leadership skills, and a strong understanding of business operations, with a focus on bridging technology and management.',
    status: 'In Progress',
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'University Name',
    year: '2022 - 2025',
    description: 'Built a solid foundation in software development, web technologies, and database systems, with hands-on experience in developing scalable and efficient applications.',
    status: 'Completed',
  },
  {
    degree: 'MERN Stack Certification',
    school: 'Online Course',
    year: '2024',
    description: 'Completed comprehensive full-stack training in MongoDB, Express.js, React, and Node.js, focusing on building modern, responsive, and production-ready web applications.',
    status: 'Completed',
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

function Education() {
  return (
    <section className="education" id="education">
      <motion.div
        className="education-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic Background</h2>
      </motion.div>
      <motion.div
        className="education-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {education.map((edu, index) => (
          <motion.div key={index} className="education-card" variants={item}>
            <div className="edu-header">
              <h3 className="edu-degree">{edu.degree}</h3>
              <span className="edu-year">{edu.year}</span>
            </div>
            <p className="edu-school">{edu.school}</p>
            <p className="edu-desc">{edu.description}</p>
            <span className="education-status">{edu.status}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Education