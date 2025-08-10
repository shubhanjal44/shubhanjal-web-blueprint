import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import ParallaxElement from "@/components/ParallaxElement";
import AnimatedSection from "@/components/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

const Hero = () => {
  const scrollY = useScrollAnimation();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decoration with parallax */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <ParallaxElement
        speed={0.3}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"
      >
        <div></div>
      </ParallaxElement>
      <ParallaxElement
        speed={-0.2}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        direction="down"
      >
        <div></div>
      </ParallaxElement>
      <ParallaxElement
        speed={0.1}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl"
      >
        <div></div>
      </ParallaxElement>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <AnimatedSection
            animation="fade-right"
            duration={0.8}
            className="text-center lg:text-left space-y-8"
          >
            <AnimatedSection
              animation="fade-up"
              delay={200}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block text-foreground">Hello, I'm</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Shubhanjal Sharma
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Full Stack Developer & Computer Science Student
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about creating scalable, user-centered web solutions
                with expertise in MERN and Java stacks. Currently pursuing
                Computer Science while building innovative digital experiences.
              </p>
            </AnimatedSection>

            {/* Action buttons */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-primary transition-all duration-300 group"
                  onClick={() => scrollToSection("projects")}
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/50 transition-all duration-300 text-white "
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="mr-2 h-5 w-5 text-white" />
                  Contact Me
                </Button>
                
                 
                 
               
              </div>
            </AnimatedSection>

            {/* Social links */}
            <AnimatedSection animation="fade-up" delay={800}>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary transition-colors text-white "
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary transition-colors text-white"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/shubhanjalsharma",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary transition-colors text-white"
                  onClick={() =>
                    window.open("mailto:shubhanjalsharma@gmail.com")
                  }
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Profile image */}
          <AnimatedSection
            animation="scale"
            delay={300}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <ParallaxElement
                speed={0.1}
                className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow"
              >
                <div></div>
              </ParallaxElement>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img
                  src={profileImage}
                  className="w-full h-full  object-cover hover:scale-105 rounded-full shadow-lg"
                  alt="Profile"
                />
              </div>
              {/* Floating elements */}
              <ParallaxElement
                speed={0.2}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"
              >
                <div></div>
              </ParallaxElement>
              <ParallaxElement
                speed={-0.15}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float"
              >
                <div></div>
              </ParallaxElement>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
