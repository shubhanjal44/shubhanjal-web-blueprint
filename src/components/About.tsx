import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Heart, Target } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import AnimatedSection from '@/components/AnimatedSection';
import ParallaxElement from '@/components/ParallaxElement';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6  text-white">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, passion, and commitment to creating exceptional digital experiences
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <AnimatedSection animation="fade-right" className="flex justify-center">
            <div className="relative">
              <ParallaxElement speed={0.1} className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elegant border border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Shubhanjal Sharma"
                  className="w-full h-full object-cover hover:scale-105 "
                />
              </ParallaxElement>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-xl flex items-center justify-center shadow-primary">
                <Code className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left" delay={200} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Passionate Full Stack Developer & CS Student
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Computer Science student at Vision Institute of Science and Management, Aligarh, 
                graduating in May 2026. My journey in technology is driven by a passion for creating scalable, 
                user-centered web solutions that make a real impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in full-stack development, I specialize in modern web technologies 
                including the MERN stack and Java ecosystem. I'm committed to continuous learning and 
                mastering cutting-edge technologies to deliver exceptional digital experiences.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, title: "Education", subtitle: "Computer Science", detail: "Graduating May 2026", color: "primary" },
                { icon: Heart, title: "Passion", subtitle: "Web Development", detail: "User-Centered Design", color: "secondary" },
                { icon: Code, title: "Expertise", subtitle: "MERN & Java Stack", detail: "Full Stack Development", color: "accent" },
                { icon: Target, title: "Goal", subtitle: "Scalable Solutions", detail: "Modern Technologies", color: "primary" }
              ].map((item, index) => (
                <AnimatedSection key={item.title} animation="fade-up" delay={400 + index * 100}>
                  <Card className={`bg-gradient-card transition-all duration-300 ${
                    item.color === 'primary' ? 'border-primary/20 hover:border-primary/40' :
                    item.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/40' :
                    'border-accent/20 hover:border-accent/40'
                  }`}>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.color === 'primary' ? 'bg-primary/20' :
                        item.color === 'secondary' ? 'bg-secondary/20' :
                        'bg-accent/20'
                      }`}>
                        <item.icon className={`h-6 w-6 ${
                          item.color === 'primary' ? 'text-primary' :
                          item.color === 'secondary' ? 'text-secondary' :
                          'text-accent'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;