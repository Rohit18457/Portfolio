import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Database, Cloud, Bot, Server } from 'lucide-react';
import './SkillsSection.css';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Skills', icon: <Code size={16} /> },
    { id: 'Languages', label: 'Languages', icon: <Code size={16} /> },
    { id: 'Web', label: 'Web Dev', icon: <Layout size={16} /> },
    { id: 'Database', label: 'Databases', icon: <Database size={16} /> },
    { id: 'Cloud', label: 'Cloud', icon: <Cloud size={16} /> },
    { id: 'AI', label: 'AI & ML', icon: <Bot size={16} /> },
    { id: 'Core', label: 'Core CS', icon: <Server size={16} /> }
  ];

  const skills = [
    { name: 'C++', category: 'Languages', level: 'Advanced' },
    { name: 'Python', category: 'Languages', level: 'Intermediate' },
    { name: 'JavaScript', category: 'Languages', level: 'Advanced' },
    { name: 'HTML', category: 'Web', level: 'Advanced' },
    { name: 'CSS', category: 'Web', level: 'Advanced' },
    { name: 'React', category: 'Web', level: 'Advanced' },
    { name: 'Node.js', category: 'Web', level: 'Intermediate' },
    { name: 'Express.js', category: 'Web', level: 'Intermediate' },
    { name: 'MySQL', category: 'Database', level: 'Intermediate' },
    { name: 'MongoDB', category: 'Database', level: 'Intermediate' },
    { name: 'AWS', category: 'Cloud', level: 'Intermediate' },
    { name: 'IAM', category: 'Cloud', level: 'Intermediate' },
    { name: 'EC2', category: 'Cloud', level: 'Intermediate' },
    { name: 'S3', category: 'Cloud', level: 'Intermediate' },
    { name: 'Generative AI', category: 'AI', level: 'Intermediate' },
    { name: 'Prompt Engineering', category: 'AI', level: 'Advanced' },
    { name: 'AI Agents', category: 'AI', level: 'Beginner' },
    { name: 'Data Structures', category: 'Core', level: 'Advanced' },
    { name: 'Algorithms', category: 'Core', level: 'Advanced' },
    { name: 'OOP', category: 'Core', level: 'Advanced' },
    { name: 'DBMS', category: 'Core', level: 'Intermediate' },
    { name: 'Operating Systems', category: 'Core', level: 'Intermediate' },
    { name: 'Computer Networks', category: 'Core', level: 'Intermediate' }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I work with.</p>
        </motion.div>

        <div className="skills-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="skills-grid">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="skill-card glass-card"
              >
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <span className={`skill-level level-${skill.level.toLowerCase()}`}>{skill.level}</span>
                </div>
                <div className="skill-category">{skill.category}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
