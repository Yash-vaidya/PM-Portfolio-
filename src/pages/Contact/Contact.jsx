import { motion } from 'framer-motion'
import '../../components/Contact.css'

function ContactPage() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-desc">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision. Feel free to reach out!
        </p>
        <div className="contact-cta">
          <a href="mailto:abhishek@example.com" className="email-link">
            abhishek@example.com
          </a>
        </div>
        <div className="social-links">
          <a href="#" className="social-link" title="LinkedIn">in</a>
          <a href="#" className="social-link" title="GitHub">GH</a>
          <a href="#" className="social-link" title="Twitter">X</a>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactPage