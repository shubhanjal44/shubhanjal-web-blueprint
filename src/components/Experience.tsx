import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2, Code2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Cyberfort Tech",
      location: "Remote",
      period: "Jun 2025 – Present",
      type: "Full-time",
      description: "Building responsive MERN stack applications for businesses with focus on user experience and performance optimization.",
      achievements: [
        "Built responsive MERN stack applications for diverse business needs",
        "Designed reusable UI components ensuring cross-browser compatibility",
        "Integrated third-party APIs including Stripe for payments and Firebase for real-time features",
        "Participated in Agile methodology and collaborative code reviews",
        "Optimized application performance and user experience"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "Firebase", "Tailwind CSS"],
      color: "primary"
    },
    {
      title: "Full Stack Intern",
      company: "SSRV Multi Services Pvt. Ltd.",
      location: "Remote",
      period: "Oct 2024 – Dec 2024",
      type: "Internship",
      description: "Developed comprehensive modules for a full-stack ERP system designed for educational institutions.",
      achievements: [
        "Built secure REST APIs using Spring Boot with comprehensive error handling",
        "Managed PostgreSQL database operations with optimized queries",
        "Developed mobile-responsive UI components using React and Tailwind CSS",
        "Implemented robust authentication and authorization systems",
        "Created interactive dashboards for data visualization and management"
      ],
      technologies: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS", "JWT", "REST APIs"],
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 hover:border-primary/40 bg-gradient-card';
      case 'secondary':
        return 'border-secondary/20 hover:border-secondary/40 bg-gradient-card';
      default:
        return 'border-primary/20 hover:border-primary/40 bg-gradient-card';
    }
  };

  const getAccentColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'secondary':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      default:
        return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey building scalable applications and contributing to innovative projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company} 
              className={`${getColorClasses(exp.color)} transition-all duration-300 hover:shadow-elegant animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${getAccentColor(exp.color)} flex items-center justify-center`}>
                        <Code2 className="h-6 w-6" />
                      </div>
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className={getAccentColor(exp.color)}>
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex} 
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className={`w-2 h-2 rounded-full ${exp.color === 'primary' ? 'bg-primary' : 'bg-secondary'} mt-2 flex-shrink-0`}></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline visualization */}
        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center space-x-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-secondary rounded-full"></div>
              <div className="w-px h-16 bg-secondary/50"></div>
              <span className="text-xs text-muted-foreground mt-2">2024</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <div className="w-px h-16 bg-primary/50"></div>
              <span className="text-xs text-muted-foreground mt-2">2025</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-accent rounded-full animate-glow"></div>
              <span className="text-xs text-muted-foreground mt-2">Future</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;