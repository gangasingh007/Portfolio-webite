
import { useEffect } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set(".preloader-text", { opacity: 0, y: 50, filter: "blur(10px)" });
    gsap.set(".progress-bar-fill", { width: "0%" });
    gsap.set(".progress-percentage", { opacity: 0 });

    // Animation sequence
    tl.to(".preloader-text", {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    })
    .to(".progress-percentage", {
      opacity: 1,
      duration: 0.5
    }, "-=0.5")
    .to(".progress-bar-fill", {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        const percentage = document.querySelector(".progress-percentage");
        if (percentage) {
          percentage.textContent = `${progress}%`;
        }
      }
    })
    .to(".preloader-text", {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.inOut"
    }, "-=0.3")
    .to(".preloader", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
        document.querySelector(".preloader")?.remove();
      }
    });

    // Floating particles animation
    gsap.to(".particle", {
      y: -30,
      x: "random(-20, 20)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 2,
        from: "random"
      }
    });

  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`particle absolute w-2 h-2 rounded-full opacity-40 animate-pulse-glow`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? 'hsl(var(--neon-blue))' : 
                       i % 3 === 1 ? 'hsl(var(--neon-purple))' : 'hsl(var(--neon-cyan))'
          }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center z-10">
        <div className="preloader-text">
          <h1 className="text-6xl md:text-8xl font-bold text-glow mb-8">
            Ganga
          </h1>
          <div className="w-80 mx-auto">
            <div className="progress-bar-container relative h-1 bg-muted rounded-full mb-4 overflow-hidden">
              <div className="progress-bar-fill absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full glow-effect"></div>
            </div>
            <div className="progress-percentage text-muted-foreground text-sm font-medium">0%</div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
    </div>
  );
};

export default LoadingScreen;
