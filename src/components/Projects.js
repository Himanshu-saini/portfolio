import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDatabase, FaCode, FaCloud } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Multi-tenant Storage Platform',
      description: 'Built a scalable, fault-tolerant storage solution using Cassandra and Redis, leveraging multi-tenancy to reduce infrastructure costs by 25%. Designed for the healthcare industry with focus on data security and compliance.',
      technologies: ['Java', 'Cassandra', 'Redis', 'Multi-tenancy', 'Healthcare'],
      icon: FaDatabase
    },
    {
      id: 2,
      title: 'Workflow Automation Service v2',
      description: 'Owned the Workflow Automation service at Amoga, driving v2 development and deployment for seamless business workflows. Built logic for app studio publish, accelerating application creation by 10x.',
      technologies: ['Java', 'Spring Boot', 'Python', 'Django', 'PostgreSQL'],
      icon: FaCode
    },
    {
      id: 3,
      title: 'RBAC System Implementation',
      description: 'Designed and implemented a comprehensive Role-Based Access Control (RBAC) system for precise access control, enhancing user management capabilities and security across the platform.',
      technologies: ['Java', 'Spring Boot', 'RBAC', 'Security', 'PostgreSQL'],
      icon: FaCode
    },
    {
      id: 4,
      title: 'NES Multi-tenant Services',
      description: 'Key contributor to Nykaa NES team, designing and documenting LLD for config management, tenant onboarding, and pipeline deployments. Owned deployment of 40% Nykaa microservices in UAE region.',
      technologies: ['Java', 'Spring Boot', 'AWS', 'ECS/EC2', 'DynamoDB', 'SQS'],
      icon: FaCloud
    },
    {
      id: 5,
      title: 'Data Science Pipeline Integration',
      description: 'Owned the Data Science side of work for NES team, gaining understanding of Redshift, Airflow, and Spark DAGs for quick feature deployment and data processing.',
      technologies: ['Python', 'Redshift', 'Airflow', 'Spark', 'Data Processing'],
      icon: FaDatabase
    },
    {
      id: 6,
      title: 'Socket Messaging Optimization',
      description: 'Optimized socket messaging with Redis, reducing redundancy by 50% in targeted communication. Improved real-time messaging performance and scalability.',
      technologies: ['Python', 'Socket.IO', 'Redis', 'Real-time', 'Performance'],
      icon: FaDatabase
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <project.icon />
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
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

export default Projects;
