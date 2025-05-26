import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BackgroundParticles from './BackgroundParticles';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <BackgroundParticles />
      
      <div className="section-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={childVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-primary dark:text-secondary text-center">
              Software Engineer & AI/ML Enthusiast
            </h3>
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a B.Tech Computer Science graduate with a passion for building innovative solutions using cutting-edge technologies. My journey in tech has equipped me with a strong foundation in software engineering and system design principles.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Specializing in Java, AI/ML, Deep Learning, Full-Stack Web Development, and DevOps, I bring a versatile skill set to tackle complex technical challenges. I'm particularly interested in leveraging artificial intelligence to create impactful applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My approach combines technical expertise with strong problem-solving abilities and effective collaboration skills. I'm always eager to learn new technologies and methodologies to stay at the forefront of the rapidly evolving tech landscape.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;