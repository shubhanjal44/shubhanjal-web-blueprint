import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useIntersectionObserver, useCountUp } from '@/hooks/useScrollAnimations';
import ContactForm from './ContactForm';

const Contact = () => {
  // For animated counters
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsVisible = useIntersectionObserver(statsRef);
  const experienceCount = useCountUp(2, 2000, isStatsVisible);
  const projectsCount = useCountUp(10, 2000, isStatsVisible);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shubhanjalsharma@gmail.com",
      href: "mailto:shubhanjalsharma@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6398859169",
      href: "tel:+916398859169",
      color: "secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shubhanjalsharma",
      href: "https://linkedin.com/in/shubhanjalsharma",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hathras, Uttar Pradesh, India",
      href: "#",
      color: "primary"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary bg-primary/10';
      case 'secondary': return 'text-secondary bg-secondary/10';
      case 'accent': return 'text-accent bg-accent/10';
      default: return 'text-primary bg-primary/10';
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-background safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work together to create something amazing
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="fade-right" className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Get in Touch</h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, or potential collaborations.
                Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={info.label} animation="fade-up" delay={200 + index * 100}>
                  <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group">
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${getIconColor(info.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <info.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-foreground text-xs sm:text-sm">{info.label}</h4>
                          <a
                            href={info.href}
                            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all line-clamp-1"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Quick stats with animated counters */}
            <div ref={statsRef} className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-8">
              {[
                { value: `${experienceCount}+`, label: 'Years Exp.' },
                { value: `${projectsCount}+`, label: 'Projects' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <AnimatedSection key={stat.label} animation="fade-up" delay={600 + i * 100} className="text-center">
                  <div className="bg-gradient-card rounded-xl p-3 sm:p-4 border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={200}>
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardHeader className="pb-2 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">Send me a message</CardTitle>
                <p className="text-sm text-muted-foreground">I'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <AnimatedSection animation="fade-up" delay={400} className="border-t border-border/50 mt-16 sm:mt-20 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            © 2025 Shubhanjal Sharma. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 mt-4">
            <a
              href="mailto:shubhanjalsharma@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/shubhanjalsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="tel:+916398859169"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;