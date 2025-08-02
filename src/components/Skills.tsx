import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MotionProgress from '@/components/MotionProgress';
import { useInView } from "react-intersection-observer";
import {
  Code, Database, Globe, Shield, Settings, Server
} from 'lucide-react';

const Skills = () => {
  // Intersection Observer hook, called inside the component!
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "from-yellow-400 via-red-400 to-purple-500",
      iconColor: "text-yellow-900",
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
      icon: Globe,
      color: "from-blue-400 via-cyan-400 to-purple-400",
      iconColor: "text-cyan-900",
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
      color: "from-green-400 via-emerald-400 to-teal-400",
      iconColor: "text-emerald-900",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "Spring Boot", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-pink-400 via-fuchsia-400 to-violet-400",
      iconColor: "text-pink-900",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "Security & Protocols",
      icon: Shield,
      color: "from-orange-300 via-amber-400 to-yellow-400",
      iconColor: "text-orange-900",
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
      color: "from-gray-400 via-zinc-400 to-neutral-400",
      iconColor: "text-gray-900",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Apache Airflow", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
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
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className={`rounded-xl bg-gradient-to-br ${category.color} border-none shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-scale-in`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shadow-sm">
                    <div className="w-14 h-14 rounded-xl bg-white/50 flex items-center justify-center shadow-md">
                      <category.icon className={`h-10 w-10 ${category.iconColor} drop-shadow-lg`} />
                    </div>
                  </div>
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-black">{skill.name}</span>
                      <span className="text-xs text-black/80">{skill.level}%</span>
                    </div>
                    <MotionProgress
                      value={skill.level}
                      active={inView}
                      delay={skillIdx * 0.2}
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
