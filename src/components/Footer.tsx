
import { useEffect } from 'react';
import { Heart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.set(".footer-content", { opacity: 0, y: 60 });
    gsap.set(".footer-particle", { opacity: 0, scale: 0 });

    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });

    footerTimeline
      .to(".footer-content", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(".footer-particle", {
        opacity: 0.6,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5");

    // Floating particles animation
    gsap.to(".footer-particle", {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 1,
        from: "random"
      }
    });

  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-container relative py-16 px-6 border-t border-border/50">
      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`footer-particle absolute w-2 h-2 rounded-full`}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
            background: i % 3 === 0 ? 'hsl(var(--neon-blue))' : 
                       i % 3 === 1 ? 'hsl(var(--neon-purple))' : 'hsl(var(--neon-cyan))'
          }}
        />
      ))}

      <div className="container mx-auto max-w-6xl">
        <div className="footer-content text-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-glow mb-8">
            Ganga Singh
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground hover:text-glow transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-muted-foreground">
            <span>© 2025 Ganga Singh. Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and lots of hustle</span>
          </div>

          {/* Tech Stack Credits */}
          <div className="mt-4 text-sm text-muted-foreground/60">
            Built with React, GSAP, Tailwind CSS & Spline
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-primary/10 to-transparent blur-3xl"></div>
    </footer>
  );
};

export default Footer;
