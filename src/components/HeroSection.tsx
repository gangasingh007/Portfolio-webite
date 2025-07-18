
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const HeroSection = () => {
  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline({ delay: 0.5 });
    
    gsap.set(".hero-headline", { opacity: 0, y: 50, filter: "blur(10px)" });
    gsap.set(".hero-subtitle", { opacity: 0, y: 30 });
    gsap.set(".hero-cta", { opacity: 0, scale: 0.8 });
    gsap.set(".spline-container", { opacity: 0, x: 100 });

    tl.to(".hero-headline", {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out"
    })
    .to(".hero-subtitle", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to(".hero-cta", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.4")
    .to(".spline-container", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    // Floating orbs animation
    gsap.to(".floating-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
        from: "random"
      }
    });

    // CTA button hover effect setup
    const ctaButton = document.querySelector('.hero-cta-btn');
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Background Spline 3D Model */}
      <motion.div 
        className="spline-container absolute inset-0 z-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
      >
        <iframe 
          src='https://my.spline.design/orb-k58A6F3klVCeli1qGx8EwtuC/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </motion.div>

      {/* Floating Orbs */}
      {/* {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`floating-orb absolute w-4 h-4 rounded-full opacity-60 animate-pulse-glow z-10`}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
            background: i % 3 === 0 ? 'hsl(var(--neon-blue))' : 
                       i % 3 === 1 ? 'hsl(var(--neon-purple))' : 'hsl(var(--neon-cyan))',
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))} */}

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h1 
          className="hero-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow leading-tight"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Ganga Singh
          </span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Full Stack Web Developer crafting immersive digital experiences with cutting-edge technologies
        </motion.p>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "backOut" }}
        >
          <Button 
            onClick={scrollToContact}
            className="hero-cta-btn bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-primary text-lg px-8 py-4 rounded-full glow-effect group"
          >
            Hire Me
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
    </motion.section>
  );
};

export default HeroSection;
