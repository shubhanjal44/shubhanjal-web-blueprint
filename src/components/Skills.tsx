import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MotionProgress from '@/components/MotionProgress';
import { useInView } from "react-intersection-observer";
import {
  Code, Database, Globe, Shield, Settings, Server
} from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
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

  const additionalTech = [
    'REST APIs', 'GraphQL', 'Redis', 'Firebase', 'Stripe Integration',
    'Responsive Design', 'PWA', 'Microservices', 'CI/CD', 'Testing',
    'Agile', 'Scrum', 'Code Review', 'Performance Optimization'
  ];

  
  return (
    <section id="skills" ref={ref} className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across modern web technologies and development tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className={`rounded-xl bg-gradient-to-br ${category.color} border-none shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center space-x-3">
                  {/* Fixed icon container — inner is same size as outer */}
                  <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center shadow-md flex-shrink-0">
                    <category.icon className={`h-7 w-7 ${category.iconColor} drop-shadow`} />
                  </div>
                  <span className="text-foreground font-semibold text-base sm:text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-black">{skill.name}</span>
                      <span className="text-xs font-semibold text-black/80">{skill.level}%</span>
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
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">
            Additional Technologies &amp; Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {additionalTech.map((tech, index) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
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
