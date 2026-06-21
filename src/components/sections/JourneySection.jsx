import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Map } from 'lucide-react';
import './JourneySection.css';

const JourneySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1.5]);

  const roadmap = [
    { year: "Year 1", title: "Learned Programming", desc: "Started with C++, understood the basics of logical thinking." },
    { year: "Year 2", title: "DSA & Problem Solving", desc: "Mastered data structures and conquered hundreds of algorithmic challenges." },
    { year: "Year 3", title: "Web & Cloud", desc: "Built full-stack applications and learned to deploy them on AWS." },
    { year: "Year 4", title: "AI & Placements", desc: "Exploring LLMs, Agentic Systems, and preparing for industry roles." },
    { year: "Future", title: "Software Engineer", desc: "Building scalable and impactful systems as a professional." }
  ];

  return (
    <section id="journey" className="section journey-section" ref={containerRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My <span className="text-gradient">Journey</span></h2>
          <p className="section-subtitle">The roadmap of my evolution as a developer.</p>
        </motion.div>

        <div className="roadmap-container">
          <div className="roadmap-path glass">
            <motion.div 
              className="roadmap-path-fill text-gradient-bg" 
              style={{ scaleY: pathLength, originY: 0 }}
            />
          </div>

          <div className="roadmap-items">
            {roadmap.map((step, idx) => (
              <motion.div 
                key={idx}
                className="roadmap-item"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={`roadmap-content glass-card ${idx % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="roadmap-year text-gradient">{step.year}</div>
                  <h3 className="roadmap-title">{step.title}</h3>
                  <p className="roadmap-desc">{step.desc}</p>
                </div>
                <div className="roadmap-node">
                  <Map size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
