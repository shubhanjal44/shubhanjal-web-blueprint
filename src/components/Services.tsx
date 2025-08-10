import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Code, 
  Database, 
  Globe, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that provide exceptional user experiences across all devices.",
      icon: Palette,
      features: [
        "Responsive web design",
        "User experience optimization",
        "Modern design systems",
        "Accessibility compliance",
        "Cross-browser compatibility"
      ],
      color: "primary",
      pricing: "Starting from $500"
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies like MERN stack and Java/Spring Boot.",
      icon: Code,
      features: [
        "MERN stack applications",
        "Java/Spring Boot backends",
        "RESTful API development",
        "Real-time applications",
        "Performance optimization"
      ],
      color: "secondary",
      pricing: "Starting from $1000"
    },
    {
      title: "Database Design",
      description: "Efficient database architecture and implementation for scalable applications with optimal performance.",
      icon: Database,
      features: [
        "Database schema design",
        "PostgreSQL/MongoDB/MySQL",
        "Query optimization",
        "Data migration services",
        "Backup and recovery planning"
      ],
      color: "accent",
      pricing: "Starting from $300"
    },
    {
      title: "API Development",
      description: "Robust and secure API development and integration services for seamless application communication.",
      icon: Globe,
      features: [
        "RESTful API development",
        "Third-party integrations",
        "Authentication & authorization",
        "API documentation",
        "Rate limiting and security"
      ],
      color: "primary",
      pricing: "Starting from $400"
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

  const getButtonColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-gradient-primary hover:shadow-primary';
      case 'secondary':
        return 'bg-gradient-secondary hover:shadow-secondary';
      case 'accent':
        return 'bg-gradient-accent hover:shadow-accent';
      default:
        return 'bg-gradient-primary hover:shadow-primary';
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development services to bring your digital vision to life with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`${getColorClasses(service.color)} transition-all duration-500 hover:scale-105 group animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl ${getIconColor(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{service.pricing}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle className={`h-5 w-5 ${service.color === 'primary' ? 'text-primary' : service.color === 'secondary' ? 'text-secondary' : 'text-accent'} mt-0.5 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={`w-full ${getButtonColor(service.color)} transition-all duration-300 group/btn`}
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process section */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-foreground">
            My Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", desc: "Building your solution with modern technologies" },
              { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <div 
                key={phase.step} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;