

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.set(".about-image", { opacity: 0, x: -100, scale: 0.8 });
    gsap.set(".about-content", { opacity: 0, y: 50 });
    gsap.set(".skill-icon", { opacity: 0, y: 30, scale: 0.8 });

    aboutTimeline
      .to(".about-image", {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(".about-content", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .to(".skill-icon", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.3");

    // Profile image hover effect
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
      profileImage.addEventListener('mouseenter', () => {
        gsap.to(profileImage, {
          scale: 1.05,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      profileImage.addEventListener('mouseleave', () => {
        gsap.to(profileImage, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

  }, []);

  const skills = [
    { name: 'HTML5', icon: 'i-ph-file-html' },
    { name: 'CSS3', icon: 'i-ph-file-css' },
    { name: 'JavaScript', icon: 'i-ph-file-js' },
    { name: 'React', icon: 'i-ph-atom' },
    { name: 'Node.js', icon: 'i-ph-terminal-window' },
    { name: 'TypeScript', icon: 'i-ph-file-ts' },
    { name: 'GSAP', icon: 'i-ph-lightning' },
    { name: 'MongoDB', icon: 'i-ph-database' }
  ];

  return (
    <motion.section
      id="about"
      className="py-14 px-3 sm:py-16 sm:px-6 md:py-20 md:px-8 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="about-container mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            className="about-image flex justify-center lg:justify-start mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full glass-morphic glow-purple p-2 sm:p-4"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              >
                <img
                  src="/lovable-uploads/6e3785ea-e9c2-4e22-8e31-0f42a7ce2865.png"
                  alt="Ganga Singh"
                  className="profile-image w-full h-full object-cover rounded-full"
                />
              </motion.div>
              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary to-accent animate-float opacity-60"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'backOut' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-accent to-secondary animate-float-delayed opacity-60"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.5, ease: 'backOut' }}
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
              I'm a passionate Full Stack Web Developer with expertise in modern technologies. 
              I love creating immersive digital experiences that combine beautiful design with 
              powerful functionality. My focus is on delivering high-quality, scalable solutions 
              that exceed client expectations.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            >
              With a strong foundation in both frontend and backend development, I specialize 
              in React, Node.js, and cutting-edge animation libraries like GSAP to bring 
              ideas to life.
            </motion.p>

            {/* Skills Grid */}
            {/* <motion.div
              className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12
                  }
                }
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-icon flex flex-col items-center group cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: 'backOut' }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 glass-morphic rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:glow-effect transition-all duration-300 group-hover:scale-110">
                    <i className={`${skill.icon} text-xl sm:text-2xl text-primary`}></i>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-1/4 left-2 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-2 sm:right-10 w-28 h-28 sm:w-48 sm:h-48 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />
    </motion.section>
  );
};

export default AboutSection;
