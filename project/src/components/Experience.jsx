import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBrain, FaChartBar, FaShieldAlt, FaCode } from 'react-icons/fa';
import BackgroundParticles from './BackgroundParticles';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Deep Learning Intern",
      company: "Yashva Business Analisi Solutions",
      date: "May 2024 – Nov 2024",
      description: "Worked on music generation models using LSTM and Transformer architectures. Fine-tuned models for enhanced performance and implemented solutions using TensorFlow and PyTorch frameworks.",
      icon: <FaBrain />,
      iconBg: "#0d9488",
      iconColor: "#ffffff"
    },
    {
      title: "AIML Trainee",
      company: "CBIT Hyderabad",
      date: "April 2024",
      description: "Participated in a Faculty Development Program on ML Applications. Gained hands-on experience with real-world tools and engaged in collaborative learning environments.",
      icon: <FaCode />,
      iconBg: "#1a365d",
      iconColor: "#ffffff"
    },
    {
      title: "Data Analyst & DL Trainee",
      company: "NIT Warangal",
      date: "March 2023",
      description: "Developed projects for Cardiovascular Disease Prediction and Spotify Genre Segmentation. Utilized Python for data analysis and Power BI for visualization.",
      icon: <FaChartBar />,
      iconBg: "#f97316",
      iconColor: "#ffffff"
    },
    {
      title: "Cyber Security Workshop",
      company: "IIT Hyderabad",
      date: "Jan 2025",
      description: "Learned penetration testing techniques and utilized tools like John the Ripper and Aircrack-ng. Participated in ethical hacking simulations and security auditing exercises.",
      icon: <FaShieldAlt />,
      iconBg: "#4338ca",
      iconColor: "#ffffff"
    }
  ];

  return (
    <div className="relative py-16 md:py-24">
      <BackgroundParticles />
      
      <div className="section-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Professional Experience
        </motion.h2>

        <VerticalTimeline lineColor="#0d9488">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ 
                background: 'var(--tw-gradient-from, #ffffff)', 
                color: '#1f2937',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(229, 231, 235, 0.5)'
              }}
              contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
              date={experience.date}
              dateClassName="text-gray-600 dark:text-gray-300 font-medium"
              iconStyle={{ background: experience.iconBg, color: experience.iconColor }}
              icon={experience.icon}
              visible={inView}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold text-primary dark:text-secondary">
                {experience.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-md font-medium text-gray-600 dark:text-gray-400 mt-1">
                {experience.company}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;