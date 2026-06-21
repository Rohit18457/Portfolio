import { motion } from 'framer-motion';
import { Code2, TrendingUp, GitCommit, Users } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import './CodingProfilesSection.css';

const CodingProfilesSection = () => {
  return (
    <section id="profiles" className="section profiles-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Coding <span className="text-gradient">Profiles</span></h2>
          <p className="section-subtitle">My footprint across developer platforms.</p>
        </motion.div>

        <div className="profiles-grid">
          {/* GitHub Profile */}
          <motion.a 
            href="https://github.com/Rohit18457" 
            target="_blank" 
            rel="noreferrer"
            className="profile-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="profile-header">
              <Github size={32} />
              <h3>GitHub</h3>
            </div>
            <div className="profile-stats">
              <div className="stat-item">
                <TrendingUp size={16} className="text-gradient" />
                <span>20 Repositories</span>
              </div>
            </div>
          </motion.a>

          {/* LeetCode Profile */}
          <motion.a 
            href="https://leetcode.com" 
            target="_blank" 
            rel="noreferrer"
            className="profile-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="profile-header">
              <Code2 size={32} color="#ffa116" />
              <h3>LeetCode</h3>
            </div>
            <div className="profile-stats">
              <div className="stat-item">
                <TrendingUp size={16} className="text-gradient" />
                <span>100+ Solved</span>
              </div>
            </div>
            <div className="lc-stats">
              <div className="lc-stat easy">
                <span>Easy</span>
                <strong>40</strong>
              </div>
              <div className="lc-stat medium">
                <span>Medium</span>
                <strong>40</strong>
              </div>
              <div className="lc-stat hard">
                <span>Hard</span>
                <strong>20</strong>
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Profile */}
          <motion.a 
            href="https://www.linkedin.com/in/rohit-suryawanshi-816281290" 
            target="_blank" 
            rel="noreferrer"
            className="profile-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="profile-header">
              <Linkedin size={32} color="#0a66c2" />
              <h3>LinkedIn</h3>
            </div>
            <div className="profile-stats">
              <div className="stat-item">
                <Users size={16} className="text-gradient" />
                <span>500+ Connections</span>
              </div>
            </div>
            <p className="linkedin-desc">
              Active in discussing cloud architectures, AI advancements, and student tech communities.
            </p>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
