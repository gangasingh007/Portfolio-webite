
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Register ScrollTrigger plugin immediately
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only initialize smooth scrolling after loading is complete
    if (!isLoading) {
      // Initialize smooth scrolling with Lenis - optimized for framer motion
      const lenis = new (window as any).Lenis({
        duration: 1.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOut cubic for smoother feel
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.8, // Reduced for smoother feel
        touchMultiplier: 1.5,
        infinite: false,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Minimal GSAP integration - let framer motion handle most animations
      lenis.on('scroll', () => {
        ScrollTrigger.update();
      });

      // Smooth ticker integration
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      return () => {
        lenis.destroy();
        gsap.ticker.remove(raf);
      };
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
