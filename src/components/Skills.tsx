import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Globe, 
  Shield, 
  Settings, 
  Layers,
  Monitor,
  Server
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Frontend",
      icon: Monitor,
      color: "secondary",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Accertinity UI", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "accent",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "Spring Boot", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "primary",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "Security & Protocols",
      icon: Shield,
      color: "secondary",
      skills: [
        { name: "JWT", level: 85 },
        { name: "OAuth 2.0", level: 80 },
        { name: "HTTPS/TLS", level: 85 },
        { name: "CORS", level: 80 },
        { name: "Bcrypt", level: 90 }
      ]
    },
    {
      title: "Dev Tools",
      icon: Settings,
      color: "accent",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Apache Airflow", level: 65 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 hover:border-primary/40 bg-gradient-primary';
      case 'secondary':
        return 'border-secondary/20 hover:border-secondary/40 bg-gradient-secondary';
      case 'accent':
        return 'border-accent/20 hover:border-accent/40 bg-gradient-accent';
      default:
        return 'border-primary/20 hover:border-primary/40 bg-gradient-primary';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-secondary';
      case 'accent':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across modern web technologies and development tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`${getColorClasses(category.color)} transition-all duration-300 hover:shadow-elegant animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-background/20 flex items-center justify-center`}>
                    <category.icon className={`h-5 w-5 ${getIconColor(category.color)}`} />
                  </div>
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-background/20"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills as badges */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Additional Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'REST APIs', 'GraphQL', 'Redis', 'Firebase', 'Stripe Integration',
              'Responsive Design', 'PWA', 'Microservices', 'CI/CD', 'Testing',
              'Agile', 'Scrum', 'Code Review', 'Performance Optimization'
            ].map((tech, index) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${0.7 + index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;