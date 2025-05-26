import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMedal, FaUsers, FaLaptopCode, FaVolleyballBall } from 'react-icons/fa';
import BackgroundParticles from './BackgroundParticles';

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const achievements = [
    {
      icon: <FaUsers className="text-4xl mb-4 text-primary dark:text-secondary" />,
      title: "Core Member of Data Science Club",
      description: "Served as a core member at IIITDM Kurnool's Data Science Club, mentoring over 200 students in machine learning and data analysis projects.",
    },
    {
      icon: <FaLaptopCode className="text-4xl mb-4 text-primary dark:text-secondary" />,
      title: "Hackathon Participation",
      description: "Participated in prestigious hackathons including Smart India Hackathon, Microsoft Imagine Cup, and Google Solution Challenge.",
    },
    {
      icon: <FaVolleyballBall className="text-4xl mb-4 text-primary dark:text-secondary" />,
      title: "Sports Achievements",
      description: "Represented at the state level in both Volleyball and Handball competitions, demonstrating teamwork and strategic thinking.",
    },
    {
      icon: <FaMedal className="text-4xl mb-4 text-primary dark:text-secondary" />,
      title: "Academic Excellence",
      description: "Consistently maintained high academic performance throughout education, earning recognition for projects and research papers.",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <BackgroundParticles />
      
      <div className="section-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              className="card p-6 text-center"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col items-center">
                {achievement.icon}
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;