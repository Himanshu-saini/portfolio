import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaGem, FaDatabase, FaCloud, FaDocker, FaGitAlt, FaAws
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: FaJava, level: 95, color: '#ED8B00' },
        { name: 'Python', icon: FaPython, level: 90, color: '#3776AB' },
        { name: 'Ruby', icon: FaGem, level: 85, color: '#CC342D' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: FaJava, level: 92, color: '#6DB33F' },
        { name: 'Django/FastAPI', icon: FaPython, level: 88, color: '#092E20' },
        { name: 'Ruby on Rails', icon: FaGem, level: 85, color: '#CC0000' }
      ]
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'PostgreSQL/MySQL', icon: FaDatabase, level: 90, color: '#336791' },
        { name: 'Redis/Cassandra', icon: FaDatabase, level: 85, color: '#DC382D' },
        { name: 'Redshift', icon: FaDatabase, level: 80, color: '#FF6B35' }
      ]
    },
    {
      title: 'Cloud Tools & Services',
      skills: [
        { name: 'AWS ECS/EC2', icon: FaAws, level: 88, color: '#FF9900' },
        { name: 'DynamoDB', icon: FaAws, level: 85, color: '#FF9900' },
        { name: 'SQS/SNS', icon: FaAws, level: 82, color: '#FF9900' },
        { name: 'Lambda', icon: FaAws, level: 80, color: '#FF9900' },
        { name: 'IAM & Security', icon: FaAws, level: 85, color: '#FF9900' },
        { name: 'CloudFormation', icon: FaAws, level: 78, color: '#FF9900' }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: FaDocker, level: 90, color: '#2496ED' },
        { name: 'Git', icon: FaGitAlt, level: 95, color: '#F05032' },
        { name: 'Kafka', icon: FaCloud, level: 80, color: '#231F20' },
        { name: 'Airflow', icon: FaCloud, level: 75, color: '#17C1E8' },
        { name: 'Spark', icon: FaCloud, level: 78, color: '#E25A1C' }
      ]
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
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Core Competencies</h3>
          <div className="skills-tags">
            {['REST APIs', 'Microservices Architecture', 'Multi-tenant Systems', 'Event-driven Architecture', 'System Design (HLD/LLD)', 'AI Prompting', 'Data Structures & Algorithms', 'RBAC Systems', 'Socket.IO', 'Kong Gateway', 'Multi-region Deployments', 'Pipeline Deployments', 'Branching Strategy', 'Config Management'].map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
