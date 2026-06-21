import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">Let's connect and build something amazing together.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's talk about everything!</h3>
            <p className="contact-desc">
              Don't like forms? Send me an email. 👋
            </p>
            
            <a href="mailto:rohitsuryawanshi775682@gmail.com" className="contact-link glass-card">
              <div className="contact-icon glass"><Mail size={24} className="text-gradient" /></div>
              <div>
                <h4>Email Me</h4>
                <span>rohitsuryawanshi775682@gmail.com</span>
              </div>
            </a>
            
            <div className="contact-link glass-card" style={{marginTop: '-20px'}}>
              <div className="contact-icon glass"><MessageSquare size={24} className="text-gradient" /></div>
              <div>
                <h4>Call Me</h4>
                <span>+91 7756822035</span>
              </div>
            </div>

            <div className="contact-socials">
              <p>Or connect with me on socials:</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/rohit-suryawanshi-816281290" target="_blank" rel="noreferrer" className="social-icon glass"><Linkedin size={20}/></a>
                <a href="https://github.com/Rohit18457" target="_blank" rel="noreferrer" className="social-icon glass"><Github size={20}/></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                  className="glass"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                  className="glass"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5"
                  placeholder="How can I help you?"
                  className="glass"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
