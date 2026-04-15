import { motion } from 'framer-motion'
import '../../components/Education.css'

const education = [
  {
    degree: 'MBA (Business Administration)',
    school: 'Ongoing',
    year: '2025 - 2027',
    description: 'Currently pursuing MBA to build strong business foundation. Planning to complete it and apply for global certifications to work abroad.',
    status: 'In Progress',
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'University Name',
    year: '2022 - 2025',
    description: 'Graduated with focus on software development, web technologies, and database management.',
    status: 'Completed',
  },
  {
    degree: 'MERN Stack Certification',
    school: 'Online Course',
    year: '2024',
    description: 'Intensive training in MongoDB, Express, React, and Node.js for full-stack development.',
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

function EducationPage() {
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

export default EducationPage