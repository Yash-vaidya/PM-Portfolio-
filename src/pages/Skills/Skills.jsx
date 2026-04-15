import { motion } from 'framer-motion'
import '../../components/Skills.css'

const skillCategories = [
  {
    category: 'Technical Skills',
    skills: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Project Management',
    skills: ['Project Coordination', 'Task Management', 'Agile Basics', 'Jira', 'Client Communication'],
  },
  {
    category: 'Soft Skills',
    skills: ['Communication', 'Team Coordination', 'Problem Solving', 'Time Management', 'Stakeholder Management'],
  },
  {
    category: 'Learning & Goals',
    skills: ['MBA Studies', 'Forage Programs', 'PMP Certification', 'Product Management'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

function SkillsPage() {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I Bring to the Table</h2>
      </motion.div>
      {skillCategories.map((cat, catIndex) => (
        <motion.div 
          key={catIndex} 
          className="skills-category"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3>{cat.category}</h3>
          <div className="skills-grid">
            {cat.skills.map((skill, index) => (
              <motion.div key={index} className="skill-tag" variants={item}>
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default SkillsPage