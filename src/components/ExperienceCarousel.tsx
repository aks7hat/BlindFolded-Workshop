import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Eye, Brain, Target, Zap, Users, User, CheckCircle2, Star, Rocket } from "lucide-react";
import { useState } from "react";

const ExperienceCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Auto-play carousel
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const experiences = [
    {
      title: "Blindfolded Challenge",
      subtitle: "Experience the Web Differently",
      icon: <Eye className="h-8 w-8" />,
      content: "Navigate websites using only keyboard and screen readers. Feel the frustration and discover solutions.",
      highlights: ["Real user simulation", "Hands-on experience", "Eye-opening moments"],
      color: "from-primary to-accent"
    },
    {
      title: "Expert Speakers",
      subtitle: "Learn from the Best",
      icon: <Users className="h-8 w-8" />,
      content: "4 industry experts will guide you through accessibility best practices and real-world solutions.",
      highlights: ["Live Q&A sessions", "Real case studies", "Expert insights"],
      color: "from-accent to-text-secondary"
    },
    {
      title: "Instant Impact",
      subtitle: "Transform Your Code",
      icon: <Zap className="h-8 w-8" />,
      content: "Learn simple changes that create massive accessibility improvements in your applications.",
      highlights: ["Quick implementation", "Measurable results", "User-friendly code"],
      color: "from-text-secondary to-primary"
    }
  ];

  const speakers = [
    { name: "Bhavya Jain", role: "Accessibility Expert" },
    { name: "Vishal Pathak", role: "Frontend Architect" },
    { name: "Priyanshu Saxena", role: "UX Engineer" },
    { name: "Anuja Shitole", role: "Product Manager" }
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary font-cyber">
            <Rocket className="h-3 w-3 mr-1" />
            Interactive Experience
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold font-cyber text-foreground mb-4">
            Why You'll <span className="text-transparent bg-clip-text bg-neon-gradient">Love This Workshop</span>
          </h2>
        </div>

        {/* Main Carousel */}
        <Carousel setApi={setApi} className="mb-12" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {experiences.map((experience, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-accent-glow group">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${experience.color} shadow-accent-glow mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-background">
                          {experience.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold font-cyber text-foreground mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-primary font-semibold mb-4">
                        {experience.subtitle}
                      </p>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {experience.content}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {experience.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-accent">
                          <CheckCircle2 className="h-4 w-4" />
                          <span className="text-sm font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-primary/50 hover:border-primary text-primary hover:bg-primary/10" />
          <CarouselNext className="hidden md:flex border-primary/50 hover:border-primary text-primary hover:bg-primary/10" />
        </Carousel>

        {/* Speakers Quick View */}
        <Card className="bg-cyber-gradient border border-accent/30 p-6 animate-fade-in">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold font-cyber text-foreground flex items-center justify-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              Meet Your Speakers
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-speaker-card border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-2 shadow-secondary-glow">
                  <User className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-foreground">{speaker.name}</div>
                {/* <div className="text-xs text-muted-foreground">{speaker.role}</div> */}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceCarousel;