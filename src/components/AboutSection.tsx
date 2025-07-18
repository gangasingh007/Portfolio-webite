
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Atom, Server, FileText, Sparkles, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  // Removed GSAP scroll animations - using framer motion for consistency

  const skills = [
    { name: 'HTML5', icon: 'Code2' },
    { name: 'CSS3', icon: 'Palette' },
    { name: 'JavaScript', icon: 'Zap' },
    { name: 'React', icon: 'Atom' },
    { name: 'Node.js', icon: 'Server' },
    { name: 'TypeScript', icon: 'FileText' },
    { name: 'GSAP', icon: 'Sparkles' },
    { name: 'MongoDB', icon: 'Database' }
  ];

  const iconMap = {
    'Code2': Code2,
    'Palette': Palette,
    'Zap': Zap,
    'Atom': Atom,
    'Server': Server,
    'FileText': FileText,
    'Sparkles': Sparkles,
    'Database': Database
  };

  return (
    <motion.section
      id="about"
      className="py-14 px-3 sm:py-16 sm:px-6 md:py-20 md:px-8 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="about-container mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            className="about-image flex justify-center lg:justify-start mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full glass-morphic glow-purple p-2 sm:p-4"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
            <motion.div
              className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
            >
              {skills.map((skill, index) => {
                const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={skill.name}
                    className="skill-icon flex flex-col items-center group cursor-pointer"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 glass-morphic rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:glow-effect transition-all duration-300">
                      <IconComponent className="text-xl sm:text-2xl text-primary" size={24} />
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
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
