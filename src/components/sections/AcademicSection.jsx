import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import './AcademicSection.css';

const AcademicSection = () => {
  const academics = {
    degree: "Bachelor of Technology in Computer Science",
    college: "MGM'S COLLEGE OF ENGINEERING, NANDED",
    university: "Dr. Babasaheb Ambedkar Technological University, Lonere",
    year: "2023 - 2027",
    cgpa: "7.4 / 10.0",
    coursework: "Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, AI"
  };

  const progressBars = [
    { name: "Data Structures & Algorithms", value: 90 },
    { name: "Full-Stack Web Development", value: 85 },
    { name: "Cloud Computing (AWS)", value: 75 },
    { name: "Generative AI", value: 70 }
  ];

  return (
    <section id="academics" className="section academics-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Academic <span className="text-gradient">Background</span></h2>
          <p className="section-subtitle">Formal education and core competencies.</p>
        </motion.div>

        <div className="academic-content">
          <motion.div 
            className="academic-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              <div className="icon-wrapper glass">
                <GraduationCap size={32} className="text-gradient" />
              </div>
              <div>
                <h3 className="degree-title">{academics.degree}</h3>
                <h4 className="college-name">{academics.college}</h4>
              </div>
            </div>
            
            <div className="card-details">
              <div className="detail-item">
                <MapPin size={16} />
                <span>{academics.university}</span>
              </div>
              <div className="detail-item">
                <Calendar size={16} />
                <span>{academics.year}</span>
              </div>
              <div className="detail-item highlight">
                <Award size={16} />
                <span>CGPA: <strong>{academics.cgpa}</strong></span>
              </div>
            </div>

            <div className="coursework">
              <h5>Relevant Coursework</h5>
              <p>{academics.coursework}</p>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
