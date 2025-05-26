import React, { useCallback, useContext } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ThemeContext from '../context/ThemeContext';

const BackgroundParticles = ({ variant = 'default' }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Different particle configurations based on section
  const getParticlesConfig = () => {
    const baseConfig = {
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: isDarkMode ? "#ffffff" : "#000000"
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: isDarkMode ? "#ffffff" : "#000000",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    };

    // Variants for different sections
    switch (variant) {
      case 'skills':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: { value: 60, density: { enable: true, value_area: 800 } },
            shape: { type: ["circle", "triangle", "polygon"] },
            color: { value: isDarkMode ? ["#0d9488", "#f97316", "#4f46e5"] : ["#0d9488", "#f97316", "#1d4ed8"] }
          }
        };
      case 'projects':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: { value: 30, density: { enable: true, value_area: 800 } },
            shape: { type: "square" },
            move: { ...baseConfig.particles.move, speed: 2 }
          }
        };
      case 'education':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: { value: 25, density: { enable: true, value_area: 800 } },
            color: { value: isDarkMode ? "#9ca3af" : "#4b5563" },
            line_linked: { ...baseConfig.particles.line_linked, opacity: 0.3 }
          }
        };
      default:
        return baseConfig;
    }
  };

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={getParticlesConfig()}
      />
    </div>
  );
};

export default BackgroundParticles;