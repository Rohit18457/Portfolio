import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import './ResumeSection.css';

const ResumeSection = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <motion.div 
          className="resume-container glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="resume-content">
            <div className="resume-icon-wrapper glass">
              <FileText size={48} className="text-gradient" />
            </div>
            
            <h2 className="resume-title">My <span className="text-gradient">Resume</span></h2>
            <p className="resume-desc">
              Get a detailed overview of my experience, education, and technical skills. 
              Available for full-time Software Engineering roles.
            </p>

            <div className="resume-actions">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-glass">
                <Eye size={18} /> Preview Resume
              </a>
              <a href="/resume.pdf" download="Rohit_Suryawanshi_Resume.pdf" className="btn btn-primary">
                <Download size={18} /> Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
