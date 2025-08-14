import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer II',
      company: 'Nykaa',
      period: 'Oct 2024 - Present',
      location: 'Bengaluru, India',
      description: 'Key contributor to the NES team, owning the deployment of 40% Nykaa microservices in the UAE region. Designed and documented LLD for config management, tenant onboarding, and pipeline deployments. Owned Data Science work for NES team, gaining understanding of Redshift, Airflow, and Spark DAGs.',
      technologies: ['Java', 'Spring Boot', 'Python', 'Redshift', 'AWS', 'ECS/EC2', 'DynamoDB', 'SQS'],
      link: 'https://nykaa.com',
      type: 'work'
    },
    {
      id: 2,
      title: 'Software Engineer - Backend',
      company: 'Amoga',
      period: 'Aug 2022 - Oct 2024',
      location: 'Bengaluru, India',
      description: 'Owned the Workflow Automation service, driving v2 development and deployment. Built logic for app studio publish, accelerating application creation by 10x. Designed and implemented RBAC system for precise access control. Optimized socket messaging with Redis, reducing redundancy by 50%.',
      technologies: ['Java', 'Spring Boot', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Socket.IO'],
      link: 'https://amoga.io',
      type: 'work'
    },
    {
      id: 3,
      title: 'Software Engineer - Backend',
      company: 'TailNode',
      period: 'Oct 2021 - Aug 2022',
      location: 'Gurgaon, India',
      description: 'Delivered 3 end-to-end projects, overseeing development, deployment, and post-launch support. Mentored 3 interns, streamlining onboarding and task allocation. Started and owned project development in Python, improving project capabilities and talent hiring.',
      technologies: ['DRF', 'Python', 'Ruby-on-Rails', 'MySQL', 'AWS', 'Heroku'],
      link: 'https://tailnode.com',
      type: 'work'
    },
    {
      id: 4,
      title: 'Bachelor of Engineering, Computer Science',
      company: 'Jaypee Institute of Information Technology',
      period: 'May 2017 - May 2021',
      location: 'Noida, India',
      description: 'Graduated with 8.1 CGPA. Specialized in software engineering and computer science fundamentals. Completed capstone project on multi-tenant fault-tolerant systems.',
      technologies: ['Computer Science', 'Software Engineering', 'System Design', 'Data Structures'],
      link: 'https://jiit.ac.in',
      type: 'education'
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    <FaBriefcase />
                  </div>
                  <div className="timeline-info">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-company">
                      <span className="company-name">{exp.company}</span>
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="company-link">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-period">
                        <FaCalendarAlt />
                        {exp.period}
                      </span>
                      <span className="timeline-location">
                        <FaMapMarkerAlt />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <div className="timeline-technologies">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
