import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Monitor, ShoppingCart, GraduationCap, Eye } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio website showcasing my skills, experience, and projects. Built with clean design principles and smooth animations.",
      longDescription: "Developed a comprehensive portfolio website featuring responsive design, smooth animations, and optimized performance. Includes sections for projects, skills, experience, and contact information with modern UI components.",
      icon: Monitor,
      technologies: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      features: [
        "Responsive design across all devices",
        "Smooth scrolling and animations",
        "Modern UI with glass morphism effects",
        "Performance optimized",
        "SEO friendly structure"
      ],
      color: "primary",
      status: "Live",
      github: "#",
      live: "#"
    },
    {
      title: "E-commerce Web Application",
      description: "Full-stack e-commerce platform with user authentication, product management, shopping cart functionality, and secure payment processing.",
      longDescription: "Complete e-commerce solution built with MERN stack featuring user authentication, product catalog, shopping cart, order management, and integrated payment processing with Stripe.",
      icon: ShoppingCart,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Order tracking and management",
        "Admin dashboard for inventory management"
      ],
      color: "secondary",
      status: "In Development",
      github: "#",
      live: "#"
    },
    {
      title: "School Management Software",
      description: "Collaborative full-stack application for educational institutions with seamless frontend-backend integration and comprehensive data management.",
      longDescription: "Comprehensive school management system developed in collaboration with team members, featuring student management, course scheduling, grade tracking, and administrative tools.",
      icon: GraduationCap,
      technologies: ["Spring Boot", "React", "PostgreSQL", "JWT", "Bootstrap"],
      features: [
        "Student and teacher management",
        "Course and schedule management",
        "Grade tracking and reporting",
        "Administrative dashboard",
        "Real-time notifications",
        "Data export and reporting tools"
      ],
      color: "accent",
      status: "Completed",
      github: "#",
      live: "#"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 hover:border-primary/40 bg-gradient-card group-hover:shadow-primary';
      case 'secondary':
        return 'border-secondary/20 hover:border-secondary/40 bg-gradient-card group-hover:shadow-secondary';
      case 'accent':
        return 'border-accent/20 hover:border-accent/40 bg-gradient-card group-hover:shadow-accent';
      default:
        return 'border-primary/20 hover:border-primary/40 bg-gradient-card group-hover:shadow-primary';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary bg-primary/10';
      case 'secondary': return 'text-secondary bg-secondary/10';
      case 'accent': return 'text-accent bg-accent/10';
      default: return 'text-primary bg-primary/10';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-success/20 text-success border-success/30';
      case 'In Development': return 'bg-warning/20 text-warning border-warning/30';
      case 'Completed': return 'bg-primary/20 text-primary border-primary/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getButtonGradient = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-gradient-primary hover:shadow-primary';
      case 'secondary': return 'bg-gradient-secondary hover:shadow-secondary';
      case 'accent': return 'bg-gradient-accent hover:shadow-accent';
      default: return 'bg-gradient-primary hover:shadow-primary';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work showcasing full-stack development expertise and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`${getColorClasses(project.color)} transition-all duration-500 hover:scale-[1.03] group card-3d glow-3d`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${getIconColor(project.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <project.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <Badge variant="outline" className={`text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-xs sm:text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          project.color === 'primary' ? 'bg-primary' :
                          project.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-xs sm:text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action buttons — stack on mobile, row on sm+ */}
                <div className="flex flex-col xs:flex-row gap-2 pt-2">
                  <ProjectModal
                    project={{
                      title: project.title,
                      description: project.longDescription,
                      image: '/placeholder.svg',
                      technologies: project.technologies,
                      githubUrl: project.github,
                      liveUrl: project.live,
                      details: project.longDescription
                    }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-foreground hover:text-primary text-xs sm:text-sm"
                    >
                      <Eye className="h-3.5 w-3.5 mr-1.5" />
                      Details
                    </Button>
                  </ProjectModal>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-foreground hover:text-primary text-xs sm:text-sm"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5 mr-1.5" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className={`flex-1 ${getButtonGradient(project.color)} transition-all duration-300 text-primary-foreground text-xs sm:text-sm`}
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="text-center mt-10 sm:mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 transition-all duration-300 text-foreground hover:text-primary hover:border-primary hover:bg-primary/5 group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;