import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
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
          <a href="mailto:yashvaidya9623@gmail.com" className="email-link">
            yashvaidya9623@gmail.com
          </a>
        </div>
        <div className="social-links">
          <a href="https://surl.li/yjpluq" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">in</a>
          <a href="https://github.com/Yash-vaidya" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">GH</a>
          <a href="https://instagram.com/the_yash_vaidya" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">IG</a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact