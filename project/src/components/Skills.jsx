import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaDocker, FaAws, FaGoogle, FaMicrosoft, 
  FaComments, FaUsers, FaHandshake, FaBrain, FaClock, FaPuzzlePiece
} from 'react-icons/fa';
import { SiCplusplus, SiKubernetes, SiJenkins } from 'react-icons/si';
import BackgroundParticles from './BackgroundParticles';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-3xl" /> },
        { name: "Python", icon: <FaPython className="text-3xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-3xl" /> }
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-3xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-3xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-3xl" /> },
        { name: "React", icon: <FaReact className="text-3xl" /> }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Java", icon: <FaJava className="text-3xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-3xl" /> },
        { name: "REST APIs", icon: <FaReact className="text-3xl" /> },
        { name: "SQL/NoSQL", icon: <FaDatabase className="text-3xl" /> }
      ]
    },
    {
      name: "DevOps",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-3xl" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-3xl" /> },
        { name: "Jenkins", icon: <SiJenkins className="text-3xl" /> }
      ]
    },
    {
      name: "Cloud",
      skills: [
        { name: "AWS", icon: <FaAws className="text-3xl" /> },
        { name: "GCP", icon: <FaGoogle className="text-3xl" /> },
        { name: "Azure", icon: <FaMicrosoft className="text-3xl" /> }
      ]
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Communication", icon: <FaComments className="text-3xl" /> },
        { name: "Leadership", icon: <FaUsers className="text-3xl" /> },
        { name: "Collaboration", icon: <FaHandshake className="text-3xl" /> },
        { name: "Critical Thinking", icon: <FaBrain className="text-3xl" /> },
        { name: "Time Management", icon: <FaClock className="text-3xl" /> },
        { name: "Problem Solving", icon: <FaPuzzlePiece className="text-3xl" /> }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <BackgroundParticles variant="skills" />
      
      <div className="section-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="card p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center justify-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <div className="text-primary dark:text-secondary mb-2">
                      {skill.icon}
                    </div>
                    <p className="font-medium text-sm text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Custom icon for Database since it's missing from the imports
const FaDatabase = (props) => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 448 512" 
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path>
  </svg>
);

export default Skills;