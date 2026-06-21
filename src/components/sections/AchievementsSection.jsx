import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import './AchievementsSection.css';

const AchievementsSection = () => {

  const achievements = [
    {
      id: 1,
      title: "Intern at Infosys Springboard",
      date: "Recent",
      desc: "Remote Internship. Gained hands-on experience in building and managing various projects.",
      certImage: "/certificates/internship.pdf"
    },
    {
      id: 2,
      title: "DBMS by NPTEL",
      date: "Certification",
      desc: "Completed comprehensive certification course in Database Management Systems.",
      certImage: "/certificates/dbms.pdf"
    },
    {
      id: 3,
      title: "AI by Infosys Springboard",
      date: "Certification",
      desc: "Completed course on Artificial Intelligence fundamentals.",
      certImage: "/certificates/ai.pdf"
    },
    {
      id: 4,
      title: "Machine Learning by Infosys Springboard",
      date: "Certification",
      desc: "Certification focusing on ML algorithms and practical implementations.",
      certImage: null
    },
    {
      id: 5,
      title: "Introduction to Internet of Things by NPTEL",
      date: "Certification",
      desc: "Comprehensive course exploring IoT architectures and protocols.",
      certImage: "/certificates/iot.pdf"
    },
    {
      id: 6,
      title: "AWS by Infosys Springboard",
      date: "Certification",
      desc: "Learned cloud computing concepts and AWS core services.",
      certImage: "/certificates/aws.pdf"
    }
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Achievements & <span className="text-gradient">Certifications</span></h2>
          <p className="section-subtitle">Milestones and recognitions in my journey.</p>
        </motion.div>

        <div className="achievements-timeline">
          {achievements.map((item, idx) => (
            <motion.div 
              key={item.id}
              className="timeline-item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker text-gradient">
                {item.certImage ? <Award size={20} /> : <Star size={20} />}
              </div>
              <div className="timeline-content glass-card">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
                {item.certImage && (
                  <a 
                    href={item.certImage}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-glass"
                    style={{ marginTop: '16px', display: 'inline-flex', padding: '8px 16px', fontSize: '0.85rem' }}
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
