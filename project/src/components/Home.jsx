import React from 'react';
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';
import BackgroundParticles from './BackgroundParticles';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundParticles />
      
      <div className="section-container text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Mikkili Janardhan Sasi Kanth</span>
          </h1>
          <div className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 h-12">
            <TypewriterComponent
              options={{
                strings: [
                  'AI/ML Enthusiast',
                  'Software Engineer',
                  'Full-Stack Developer',
                  'Problem Solver'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            B.Tech Computer Science graduate with a strong foundation in software engineering and system design. 
            Skilled in Java, AI/ML, Deep Learning, Full-Stack Web Development, and DevOps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;