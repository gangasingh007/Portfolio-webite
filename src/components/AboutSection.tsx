
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <section id="about" className="py-20 px-6 relative">
      <div className="about-container container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="about-image flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full glass-morphic glow-purple p-4">
                <img
                  src="/lovable-uploads/6e3785ea-e9c2-4e22-8e31-0f42a7ce2865.png"
                  alt="Ganga Singh"
                  className="profile-image w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent animate-float opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 rounded-full bg-gradient-to-r from-accent to-secondary animate-float-delayed opacity-60"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate Full Stack Web Developer with expertise in modern technologies. 
              I love creating immersive digital experiences that combine beautiful design with 
              powerful functionality. My focus is on delivering high-quality, scalable solutions 
              that exceed client expectations.
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              With a strong foundation in both frontend and backend development, I specialize 
              in React, Node.js, and cutting-edge animation libraries like GSAP to bring 
              ideas to life.
            </p>

            {/* Skills Grid */}
            {/* <div className="grid grid-cols-4 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-icon flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-16 h-16 glass-morphic rounded-xl flex items-center justify-center mb-3 group-hover:glow-effect transition-all duration-300 group-hover:scale-110">
                    <i className={`${skill.icon} text-2xl text-primary`}></i>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
