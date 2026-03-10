import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Heart, Target } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-background-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, passion, and commitment to creating exceptional digital experiences
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Profile image */}
          <AnimatedSection animation="fade-right" className="flex justify-center">
            <div className="relative inline-block">
              {/* Image container — fluid sizing */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden shadow-elegant border border-primary/20">
                <img
                  src={profileImage}
                  alt="Shubhanjal Sharma"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Code badge — positioned relative to image, won't clip outside viewport */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-xl flex items-center justify-center shadow-primary">
                <Code className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground" />
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left" delay={200} className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                Passionate Full Stack Developer &amp; CS Student
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Computer Science student at Vision Institute of Science and Management, Aligarh,
                graduating in May 2026. My journey in technology is driven by a passion for creating scalable,
                user-centered web solutions that make a real impact.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in full-stack development, I specialize in modern web technologies
                including the MERN stack and Java ecosystem. I'm committed to continuous learning and
                mastering cutting-edge technologies to deliver exceptional digital experiences.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: GraduationCap, title: "Education", subtitle: "Computer Science", detail: "Graduating May 2026", color: "primary" },
                { icon: Heart, title: "Passion", subtitle: "Web Development", detail: "User-Centered Design", color: "secondary" },
                { icon: Code, title: "Expertise", subtitle: "MERN & Java Stack", detail: "Full Stack Development", color: "accent" },
                { icon: Target, title: "Goal", subtitle: "Scalable Solutions", detail: "Modern Technologies", color: "primary" }
              ].map((item, index) => (
                <AnimatedSection key={item.title} animation="fade-up" delay={400 + index * 100}>
                  <Card className={`bg-gradient-card transition-all duration-300 hover:scale-[1.02] ${
                    item.color === 'primary' ? 'border-primary/20 hover:border-primary/40 hover:shadow-primary' :
                    item.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/40' :
                    'border-accent/20 hover:border-accent/40'
                  }`}>
                    <CardContent className="p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        item.color === 'primary' ? 'bg-primary/20' :
                        item.color === 'secondary' ? 'bg-secondary/20' :
                        'bg-accent/20'
                      }`}>
                        <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${
                          item.color === 'primary' ? 'text-primary' :
                          item.color === 'secondary' ? 'text-secondary' :
                          'text-accent'
                        }`} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">{item.subtitle}</p>
                        <p className="text-xs text-muted-foreground/70 truncate">{item.detail}</p>
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