import { useState, useEffect } from 'react';
import { Send, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.set(".contact-title", { opacity: 0, y: 50 });
    gsap.set(".contact-form", { opacity: 0, x: -50 });
    gsap.set(".contact-social", { opacity: 0, x: 50 });
    gsap.set(".form-input", { opacity: 0, y: 30 });

    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    contactTimeline
      .to(".contact-title", { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .to(".contact-form", { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .to(".contact-social", { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .to(".form-input", { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.4");

    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 10,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      gsap.to('.submit-btn', {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }, 2000);
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/gangasingh",
      label: "GitHub",
      color: "hover:text-white"
    },
    {
      icon: Twitter,
      href: "https://x.com/gangasingh1734",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:gangsingh1734@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ganga.singh.007/",
      label: "Instagram",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="contact-container container mx-auto max-w-6xl">
        <motion.h2
          className="contact-title text-4xl md:text-5xl font-bold text-center mb-16 text-glow max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Let's Work Together
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="contact-form w-full max-w-xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="glass-morphic rounded-2xl p-6 w-full glow-effect">
              <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-input">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass-morphic border-border/50 focus:border-primary focus:glow-effect transition-all duration-300"
                  />
                </div>
                <div className="form-input">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass-morphic border-border/50 focus:border-primary focus:glow-effect transition-all duration-300"
                  />
                </div>
                <div className="form-input">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="glass-morphic border-border/50 focus:border-primary focus:glow-effect transition-all duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary text-lg py-3 rounded-xl glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="loading-spinner mr-2"></div>
                  ) : (
                    <Send size={20} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="contact-social w-full max-w-xl space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="glass-morphic rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on new projects
                and collaborate with amazing people. Let's create something extraordinary together.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <span className="text-muted-foreground">gangasingh1734@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="i-ph-map-pin text-primary text-xl"></i>
                  <span className="text-muted-foreground">Available Worldwide</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon w-12 h-12 glass-morphic rounded-xl flex items-center justify-center transition-all duration-300 hover:glow-effect ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-morphic rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">Available for new projects</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                Currently accepting freelance work and full-time opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      />
    </motion.section>
  );
};

export default ContactSection;
