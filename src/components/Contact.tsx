import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabaseClient'; // adjust path accordingly

import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Send,
  CheckCircle
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useIntersectionObserver, useCountUp } from '@/hooks/useScrollAnimations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const { data, error } = await supabase
    .from('contact_form')
    .insert([
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    ]);

  if (error) {
    setIsSubmitting(false);
    toast({
      title: "Error sending message",
      description: error.message,
      variant: "destructive",
    });
    return;
  }

  toast({
    title: "Message Sent Successfully!",
    description: "Thank you for reaching out. I'll get back to you soon.",
  });

  setFormData({ name: '', email: '', subject: '', message: '' });
  setIsSubmitting(false);
};


  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10';
      case 'secondary':
        return 'text-secondary bg-secondary/10';
      case 'accent':
        return 'text-accent bg-accent/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work together to create something amazing
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="fade-right" className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, or potential collaborations. 
                Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={info.label} animation="fade-up" delay={200 + index * 100}>
                  <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl ${getIconColor(info.color)} flex items-center justify-center`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.label}</h4>
                          <a 
                            href={info.href} 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
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
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8">
              <AnimatedSection animation="fade-up" delay={600} className="text-center">
                <div className="text-2xl font-bold text-primary">{experienceCount}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={700} className="text-center">
                <div className="text-2xl font-bold text-primary">{projectsCount}+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={800} className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={200}>
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send me a message</CardTitle>
              </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <AnimatedSection animation="fade-up" delay={400} className="border-t border-border/50 mt-20 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Shubhanjal Sharma. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="mailto:shubhanjalsharma@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/shubhanjalsharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="tel:+916398859169" 
              className="text-muted-foreground hover:text-primary transition-colors"
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