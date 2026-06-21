import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, Download, ArrowRight, Rocket } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import './HeroSection.css';

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <span className="typewriter text-gradient">
      {words[index].substring(0, subIndex)}
      <span className={blink ? 'cursor-blink' : 'cursor-hide'}>|</span>
    </span>
  );
};

const HeroSection = () => {
  const [isRocketLaunching, setIsRocketLaunching] = useState(false);

  const words = [
    "Data Structures & Algorithms",
    "Full-Stack Web Development",
    "Cloud Computing",
    "Generative AI",
    "Problem Solving"
  ];

  const handleHireMe = () => {
    setIsRocketLaunching(true);
    setTimeout(() => setIsRocketLaunching(false), 2000);
  };

  return (
    <section id="home" className="hero-section flex-center">
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-wrapper">
            <img 
              src="/profile.jpeg" 
              alt="Rohit Suryawanshi" 
              className="profile-img" 
            />
            <div className="status-badge glass">
              <span className="pulse-dot"></span> Available for Hire
            </div>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Rohit Suryawanshi</span>
          </h1>
          
          <div className="hero-subtitle">
            Building at the intersection of <TypeWriter words={words} />
          </div>
          
          <p className="hero-desc">
            Computer Science Student & Aspiring Software Engineer. Passionate about architecting scalable cloud solutions, building intuitive interfaces, and leveraging AI to solve real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#resume" className="btn btn-glass">
              Download Resume <Download size={18} />
            </a>
            <button className="btn btn-icon hire-btn" onClick={handleHireMe}>
              {isRocketLaunching ? <Rocket size={20} className="rocket-launch" /> : <Mail size={20} />}
              <span>Contact Me</span>
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com/Rohit18457" target="_blank" rel="noreferrer" className="social-icon glass"><Github size={20}/></a>
            <a href="https://www.linkedin.com/in/rohit-suryawanshi-816281290" target="_blank" rel="noreferrer" className="social-icon glass"><Linkedin size={20}/></a>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="social-icon glass"><Code2 size={20}/></a>
          </div>

        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="stat-card glass-card">
            <h3 className="text-gradient">100+</h3>
            <p>DSA Problems</p>
          </div>
          <div className="stat-card glass-card">
            <h3 className="text-gradient">3</h3>
            <p>Major Projects</p>
          </div>
          <div className="stat-card glass-card">
            <h3 className="text-gradient">5</h3>
            <p>Certifications</p>
          </div>
          <div className="stat-card glass-card">
            <h3 className="text-gradient">1</h3>
            <p>Internship Experience</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
