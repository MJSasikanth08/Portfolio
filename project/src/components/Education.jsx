import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import BackgroundParticles from './BackgroundParticles';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const education = [
    {
      institution: "IIITDM Kurnool",
      degree: "B.Tech Computer Science",
      period: "2021–2025",
      grade: "CGPA: 7.50",
      description: "Studied core computer science subjects, participated in various technical clubs, and developed projects in web development, AI/ML, and data science.",
      icon: <FaGraduationCap />,
      iconBg: "#1a365d"
    },
    {
      institution: "RK Junior College",
      degree: "Intermediate Education",
      period: "2019–2021",
      grade: "CGPA: 9.67",
      description: "Focused on Mathematics, Physics, and Chemistry. Participated in various inter-college competitions and developed a strong foundation in analytical thinking.",
      icon: <FaUniversity />,
      iconBg: "#0d9488"
    },
    {
      institution: "Nirmala High School",
      degree: "Secondary School Certificate",
      period: "2007–2019",
      grade: "CGPA: 9.80",
      description: "Excelled in academics and extracurricular activities. Developed interest in mathematics and science which laid the foundation for future technical pursuits.",
      icon: <FaSchool />,
      iconBg: "#f97316"
    }
  ];

  return (
    <div className="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <BackgroundParticles variant="education" />
      
      <div className="section-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Education
        </motion.h2>

        <VerticalTimeline lineColor="#1a365d">
          {education.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ 
                background: 'var(--tw-gradient-from, #ffffff)', 
                color: '#1f2937',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(229, 231, 235, 0.5)'
              }}
              contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
              date={item.period}
              dateClassName="text-gray-600 dark:text-gray-300 font-medium"
              iconStyle={{ background: item.iconBg, color: '#ffffff' }}
              icon={item.icon}
              visible={inView}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold text-primary dark:text-secondary">
                {item.institution}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-md font-medium text-gray-600 dark:text-gray-400 mt-1">
                {item.degree}
              </h4>
              <div className="mt-2 mb-3 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200">
                {item.grade}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;