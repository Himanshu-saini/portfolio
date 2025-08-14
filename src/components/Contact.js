import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'himanshu.saini@example.com',
      href: 'mailto:himanshu.saini@example.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Current Location',
      value: 'Bengaluru, India',
      href: null
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Hometown',
      value: 'Gurgaon, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/himanshusaini17/',
      label: 'LinkedIn'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/Himanshu-saini',
      label: 'GitHub'
    },
    {
      icon: FaCode,
      href: 'https://leetcode.com/u/ShadowSword/',
      label: 'LeetCode'
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
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and discuss opportunities</p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-header">
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these channels</p>
            </div>
            <div className="info-items">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="info-item"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="info-icon">
                    <info.icon />
                  </div>
                  <div className="info-content">
                    <h4>{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            <div className="social-header">
              <h3>Connect With Me</h3>
              <p>Follow me on social platforms for updates</p>
            </div>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="social-icon">
                    <social.icon />
                  </div>
                  <span className="social-label">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
