import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Monitor, ShoppingCart, GraduationCap } from 'lucide-react';

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-success text-black';
      case 'In Development':
        return 'bg-warning text-black';
      case 'Completed':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work showcasing full-stack development expertise and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`${getColorClasses(project.color)} transition-all duration-500 hover:scale-105 group animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${getIconColor(project.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${project.color === 'primary' ? 'bg-primary' : project.color === 'secondary' ? 'bg-secondary' : 'bg-accent'} mt-1.5 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
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

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 ${project.color === 'primary' ? 'bg-gradient-primary' : project.color === 'secondary' ? 'bg-gradient-secondary' : 'bg-gradient-accent'} hover:shadow-elegant transition-all duration-300`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More projects button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary hover:text-color-white transition-all duration-300"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;