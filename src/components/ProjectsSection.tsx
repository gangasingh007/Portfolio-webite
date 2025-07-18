import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  // Removed GSAP scroll animations - using framer motion for consistency

  const projects = [
    {
      id: 1,
      title: "UniConnect",
      description: "A modern study material and resources website designed to ease the prepration of exams for university students and AI summarizer wiht just one click with super sleek UI.",
      image: "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "Gemini API", "PDF-parser"],
      githubUrl: "https://github.com/gangasingh007/Uniconnect",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Invetora",
      description: "An Ecomm Site with minimilistic UI with Eco Friendly delivery system and reward System with role based authentication",
      image: "/lovable-uploads/inventora.png",
      tech: ["Nextjs", "JWT", "MONGODB"],
      githubUrl: "#",
      liveUrl: "https://inventora-ecomm-project.vercel.app/"
    },
    {
      id: 3,
      title: "Carbon Track - Landing Page",
      description: "A good looking landing Page for a service to track carbon emission and provide services to clients",
      image: "/lovable-uploads/carbon.png",
      tech: ["React", "Framer-Motion", "Tailwind"],
      githubUrl: "https://github.com/gangasingh007/frontend",
      liveUrl: "https://ganga-frontend-project.netlify.app/"
    },
    {
      id: 4,
      title: "Banking App",
      description: "A simple banking/payment backend API built with Node.js, Express, and MongoDB.",
      image: "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg",
      tech: ["React", "NodeJs", "MongoDb", "JWT"],
      githubUrl: "https://github.com/gangasingh007/Payment-Project",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Notes App",
      description: "A simple Notes app from where you can download your course notes and lower your hassle to finding the accurate study material.",
      image: "/lovable-uploads/notes.png",
      tech: ["HTML", "CSS", "JS"],
      githubUrl: "#",
      liveUrl: "https://notes-library-ganga.netlify.app/"
    }
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="projects-container container mx-auto max-w-7xl">
        <motion.h2
          className="projects-title text-4xl md:text-5xl font-bold text-center mb-16 text-glow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card relative glass-morphic rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.6, 
                delay: project.id * 0.08, 
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="project-glow absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-glow transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:border-primary/50 transition-colors"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary transition-all"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      />
    </motion.section>
  );
};

export default ProjectsSection;
