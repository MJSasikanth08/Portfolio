import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import BackgroundParticles from './BackgroundParticles';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Hybrid Speaker Identification System",
      description: "Developed a speaker identification system combining Gaussian Mixture Models (GMM) and Convolutional Neural Networks (CNN). Used MFCC features for audio processing and implemented various audio augmentation techniques to improve model robustness.",
      technologies: ["Python", "TensorFlow", "Librosa", "NumPy", "Scikit-learn"],
      image: "https://images.pexels.com/photos/6942761/pexels-photo-6942761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/MJSasikanth08/speaker-identification",
      demo: "#"
    },
    {
      title: "Real Estate Finder",
      description: "Built a full-stack web application for real estate property searching and listing. Implemented user authentication, property search with filters, saved listings, and contact forms for property inquiries.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Google Maps API"],
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/MJSasikanth08/real-estate-finder",
      demo: "#"
    },
    {
      title: "Zomato Web App",
      description: "Created a restaurant discovery and food ordering platform similar to Zomato. Built using Flask backend with MySQL database. Implemented REST APIs for restaurant search, menu browsing, and order processing.",
      technologies: ["Flask", "MySQL", "JavaScript", "HTML/CSS", "REST APIs"],
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/MJSasikanth08/zomato-clone",
      demo: "#"
    },
    {
      title: "Telugu Sentiment Analysis",
      description: "Developed an NLP system for sentiment analysis of Telugu text. Implemented K-Means clustering for pattern recognition, performed extensive exploratory data analysis, and created methods for outlier detection.",
      technologies: ["Python", "NLTK", "Scikit-learn", "Pandas", "Matplotlib"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/MJSasikanth08/telugu-sentiment",
      demo: "#"
    },
    {
      title: "Real-Time Face Detection",
      description: "Built a real-time face detection application using OpenCV. Integrated with MySQL database for storing detected faces and implemented metadata clustering for similar face grouping.",
      technologies: ["OpenCV", "Python", "MySQL", "TensorFlow", "NumPy"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/MJSasikanth08/face-detection",
      demo: "#"
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative py-16 md:py-24">
      <BackgroundParticles variant="projects" />
      
      <div className="section-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="card card-hover overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-secondary">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm h-20 overflow-hidden mb-4">
                  {project.description.substring(0, 100)}...
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => setActiveProject(project)}
                    className="text-primary dark:text-secondary font-medium text-sm hover:underline"
                  >
                    View Details
                  </button>
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary">
                      <FaGithub className="text-xl" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary">
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={() => setActiveProject(null)}>
            <motion.div 
              className="bg-white dark:bg-gray-800 w-full max-w-3xl rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 md:h-72">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                  onClick={() => setActiveProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary dark:text-secondary">{activeProject.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{activeProject.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <a 
                    href={activeProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a 
                    href={activeProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-white rounded-md hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;