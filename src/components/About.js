import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaGraduationCap, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const aboutData = [
    {
      icon: FaUser,
      title: 'Professional',
      description: 'Results-driven backend software engineer with 4+ years of expertise in Java, Python, and Ruby.'
    },
    {
      icon: FaCode,
      title: 'Architecture',
      description: 'Specializing in microservices, multitenant architectures, and event-driven architecture.'
    },
    {
      icon: FaGraduationCap,
      title: 'Education',
      description: 'Bachelor of Engineering in Computer Science from Jaypee Institute of Information Technology with 8.1 CGPA.'
    },
    {
      icon: FaHeart,
      title: 'Expertise',
      description: 'Proficient in high-level design (HLD), low-level system design (LLD), and AWS cloud.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a results-driven backend software engineer with 4+ years of expertise in Java, Python, and Ruby, 
              specializing in microservices, multitenant architectures, and event-driven architecture.
            </p>
            <p>
              Currently working as Software Engineer II at Nykaa, I'm a key contributor to the NES team, 
              owning the deployment of 40% of Nykaa microservices in the UAE region. I've designed and documented 
              LLD for features like config management, tenant onboarding, and pipeline deployments.
            </p>
            <p>
              I'm passionate about building scalable systems and have experience with AWS cloud services, 
              high-level design (HLD), and low-level system design (LLD). I've also published research on 
              multi-tenant fault-tolerant systems in Springer's Lecture Notes in Networks and Systems.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Companies Worked</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutData.map((item, index) => (
              <motion.div
                key={item.title}
                className="about-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="card-icon">
                  <item.icon />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
