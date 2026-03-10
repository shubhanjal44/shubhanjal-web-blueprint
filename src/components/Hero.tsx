import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Decorative blobs — hidden on small screens to prevent overflow */}
      <ParallaxElement
        speed={0.3}
        className="hidden sm:block absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none"
      >
        <div />
      </ParallaxElement>
      <ParallaxElement
        speed={-0.2}
        className="hidden sm:block absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-float pointer-events-none"
        direction="down"
      >
        <div />
      </ParallaxElement>
      <ParallaxElement
        speed={0.1}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-accent/10 rounded-full blur-2xl pointer-events-none"
      >
        <div />
      </ParallaxElement>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text content */}
          <AnimatedSection
            animation="fade-right"
            duration={0.8}
            className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <AnimatedSection
              animation="fade-up"
              delay={200}
              className="space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for work
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Hello, I'm</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Shubhanjal Sharma
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                Full Stack Developer &amp; Computer Science Student
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Passionate about creating scalable, user-centered web solutions
                with expertise in MERN and Java stacks. Currently pursuing
                Computer Science while building innovative digital experiences.
              </p>
            </AnimatedSection>

            {/* Action buttons */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-primary transition-all duration-300 group w-full xs:w-auto"
                  onClick={() => scrollToSection("projects")}
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/50 transition-all duration-300 text-foreground hover:text-primary w-full xs:w-auto"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>
            </AnimatedSection>

            {/* Social links */}
            <AnimatedSection animation="fade-up" delay={800}>
              <div className="flex gap-3 justify-center lg:justify-start">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 hover:text-primary hover:bg-primary/10 transition-all duration-300 text-foreground rounded-full"
                  onClick={() => window.open("https://github.com/shubhanjal", "_blank")}
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 hover:text-primary hover:bg-primary/10 transition-all duration-300 text-foreground rounded-full"
                  onClick={() =>
                    window.open("https://linkedin.com/in/shubhanjalsharma", "_blank")
                  }
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 hover:text-primary hover:bg-primary/10 transition-all duration-300 text-foreground rounded-full"
                  onClick={() => window.open("mailto:shubhanjalsharma@gmail.com")}
                  aria-label="Email"
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
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow */}
              <ParallaxElement
                speed={0.1}
                className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow pointer-events-none"
              >
                <div />
              </ParallaxElement>

              {/* Image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img
                  src={profileImage}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-full"
                  alt="Shubhanjal Sharma - Full Stack Developer"
                />
              </div>

              {/* Floating dots — hidden on smallest screens */}
              <div className="hidden sm:block absolute -top-3 -right-3 w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full animate-float shadow-primary" />
              <div className="hidden sm:block absolute -bottom-3 -left-3 w-4 h-4 lg:w-6 lg:h-6 bg-accent rounded-full animate-float shadow-sm" />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
