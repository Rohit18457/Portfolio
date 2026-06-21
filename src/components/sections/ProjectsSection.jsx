import { motion } from 'framer-motion';
import { ExternalLink, Layers, Target, BookOpen } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Crop Advisory System",
      desc: "An intelligent system that recommends the most suitable crops to grow based on soil, weather, and other environmental factors.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Machine Learning", "Python", "React", "Node.js"],
      features: ["Predictive Analysis", "Weather Integration", "User-friendly Dashboard"],
      challenges: "Integrating multiple datasets and achieving high accuracy with the ML model.",
      learnings: "Gained hands-on experience in building and deploying ML models within full-stack applications.",
      github: "https://github.com/Rohit18457/Smart-Crop-Advisory-System",
      demo: "https://smart-crop-advisory-system-snowy.vercel.app/"
    },
    {
      title: "AI Chatbot for Student Assistance",
      desc: "An interactive AI chatbot designed to help students with their queries, study material, and academic guidance.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Generative AI", "React", "Node.js"],
      features: ["Natural Language Processing", "Contextual Responses", "Instant Support"],
      challenges: "Fine-tuning prompts to provide accurate, educational, and safe responses.",
      learnings: "Deepened knowledge in prompt engineering and conversational UI design.",
      github: "https://github.com/Rohit18457/studybuddy-ai-77",
      demo: "https://studybuddy-ai-77.vercel.app/auth"
    },
    {
      title: "PCB Defect Detection System",
      desc: "A computer vision based application to automatically detect and classify defects on Printed Circuit Boards.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Computer Vision", "Python", "Deep Learning"],
      features: ["Real-time Detection", "Defect Classification", "High Accuracy Model"],
      challenges: "Handling variations in lighting and PCB orientations during image processing.",
      learnings: "Improved proficiency in OpenCV, CNNs, and image augmentation techniques.",
      github: "https://github.com/Rohit18457/PCB-Defect-Detection-and-Classification-System-Rohit-Suryawanshi",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">Real-world applications I've built from scratch.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-links-overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" className="glass"><Github size={20} /></a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="glass"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag glass">{t}</span>
                  ))}
                </div>

                <div className="project-details">
                  <div className="detail-row">
                    <Target size={16} className="text-gradient" />
                    <span><strong>Features:</strong> {project.features.join(', ')}</span>
                  </div>
                  <div className="detail-row">
                    <Layers size={16} className="text-gradient" />
                    <span><strong>Challenges:</strong> {project.challenges}</span>
                  </div>
                  <div className="detail-row">
                    <BookOpen size={16} className="text-gradient" />
                    <span><strong>Learnings:</strong> {project.learnings}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
