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
        return 'border-primary/20 hover:border-primary/40 bg-gradient-card hover:shadow-elegant';
      case 'secondary':
        return 'border-secondary/20 hover:border-secondary/40 bg-gradient-card';
      default:
        return 'border-primary/20 hover:border-primary/40 bg-gradient-card hover:shadow-elegant';
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
    <section id="experience" className="py-16 sm:py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey building scalable applications and contributing to innovative projects
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.company}
              className={`${getColorClasses(exp.color)} transition-all duration-300`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex flex-col gap-4">
                  {/* Title row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="space-y-2 min-w-0">
                      <CardTitle className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-3 flex-wrap">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${getAccentColor(exp.color)} flex items-center justify-center flex-shrink-0`}>
                          <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <span>{exp.title}</span>
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5 flex-shrink-0" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                        <Calendar className="h-3 w-3 mr-1.5 flex-shrink-0" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className={`${getAccentColor(exp.color)} text-xs`}>
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 sm:space-y-6">
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${exp.color === 'primary' ? 'bg-primary' : 'bg-secondary'} mt-2 flex-shrink-0`} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech) => (
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline visualization */}
        <div className="mt-12 sm:mt-16 flex justify-center px-4">
          <div className="flex items-end gap-6 sm:gap-8 lg:gap-12">
            {[
              { year: '2024', color: 'bg-secondary', lineColor: 'bg-secondary/50' },
              { year: '2025', color: 'bg-primary', lineColor: 'bg-primary/50' },
              { year: 'Future', color: 'bg-accent', lineColor: '', isPulse: true },
            ].map((item) => (
              <div key={item.year} className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${item.color} ${item.isPulse ? 'pulse-dot' : ''}`} />
                {item.lineColor && (
                  <div className={`w-px h-12 sm:h-16 ${item.lineColor} mt-0.5`} />
                )}
                <span className="text-xs text-muted-foreground mt-2">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;