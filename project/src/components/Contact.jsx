import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import BackgroundParticles from './BackgroundParticles';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-primary dark:text-secondary" />,
      title: "Phone",
      value: "+91 7842847412",
      link: "tel:+917842847412"
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary dark:text-secondary" />,
      title: "Email",
      value: "sasikanth.mikkili@gmail.com",
      link: "mailto:sasikanth.mikkili@gmail.com"
    },
    {
      icon: <FaLinkedin className="text-2xl text-primary dark:text-secondary" />,
      title: "LinkedIn",
      value: "janardhan-sasi-kanth-mikkili",
      link: "https://linkedin.com/in/janardhan-sasi-kanth-mikkili"
    },
    {
      icon: <FaGithub className="text-2xl text-primary dark:text-secondary" />,
      title: "GitHub",
      value: "MJSasikanth08",
      link: "https://github.com/MJSasikanth08"
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
    <div className="relative py-16 md:py-24">
      <BackgroundParticles />
      
      <div className="section-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="card p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-primary dark:text-secondary">Get In Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary dark:bg-gray-800"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary dark:bg-gray-800"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary dark:bg-gray-800"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full flex items-center justify-center btn btn-primary"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> Send Message
                    </>
                  )}
                </button>
                {formStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-secondary">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Feel free to reach out to me through any of the channels below. I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center p-4 card card-hover group"
                  >
                    <div className="mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.title}</p>
                      <p className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-secondary">Location</h3>
                <div className="card p-4 flex items-center">
                  <FaMapMarkerAlt className="text-2xl text-primary dark:text-secondary mr-4" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;