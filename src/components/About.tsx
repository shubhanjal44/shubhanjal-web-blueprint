import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Heart, Target } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, passion, and commitment to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elegant border border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Shubhanjal Sharma"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-xl flex items-center justify-center shadow-primary">
                <Code className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
              <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">Computer Science</p>
                    <p className="text-xs text-muted-foreground">Graduating May 2026</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Passion</h4>
                    <p className="text-sm text-muted-foreground">Web Development</p>
                    <p className="text-xs text-muted-foreground">User-Centered Design</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Expertise</h4>
                    <p className="text-sm text-muted-foreground">MERN & Java Stack</p>
                    <p className="text-xs text-muted-foreground">Full Stack Development</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Goal</h4>
                    <p className="text-sm text-muted-foreground">Scalable Solutions</p>
                    <p className="text-xs text-muted-foreground">Modern Technologies</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;