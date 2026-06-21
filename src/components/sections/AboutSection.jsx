import { motion } from 'framer-motion';
import { Target, Zap, Heart, Globe } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const storyTimeline = [
    { year: "2021", title: "Started Journey", desc: "Wrote my first 'Hello World' and fell in love with programming." },
    { year: "2022", title: "Problem Solving", desc: "Dove deep into Data Structures & Algorithms, building analytical skills." },
    { year: "2023", title: "Web & Cloud", desc: "Built full-stack applications and explored AWS cloud architecture." },
    { year: "2024", title: "AI & Future", desc: "Exploring Generative AI, LLMs, and building intelligent agentic systems." }
  ];

  const drivers = [
    { icon: <Target size={24} />, title: "Curiosity", desc: "Always asking 'why' and 'how' things work under the hood." },
    { icon: <Zap size={24} />, title: "Continuous Learning", desc: "Embracing new technologies and frameworks." },
    { icon: <Globe size={24} />, title: "Impactful Solutions", desc: "Building tools that solve real-world problems." },
    { icon: <Heart size={24} />, title: "Passion for Code", desc: "Treating software engineering as a craft, not just a job." }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My <span className="text-gradient">Story</span></h2>
          <p className="section-subtitle">A journey of continuous growth and technical exploration.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="story-timeline"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {storyTimeline.map((item, idx) => (
              <div key={idx} className="story-item">
                <div className="story-year text-gradient">{item.year}</div>
                <div className="story-content glass-card">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="drives-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="drives-title">What drives me?</h3>
            <div className="drives-grid">
              {drivers.map((driver, idx) => (
                <div key={idx} className="drive-card glass-card">
                  <div className="drive-icon">{driver.icon}</div>
                  <h4>{driver.title}</h4>
                  <p>{driver.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
