import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Lightbulb, Target, Users, CheckCircle2, ArrowRight, Zap, Brain } from "lucide-react";
const AboutSection = () => {
  const challenges = [{
    icon: <Eye className="h-6 w-6" />,
    title: "Blindfolded Navigation",
    description: "Navigate websites using only keyboard and screen readers"
  }, {
    icon: <Brain className="h-6 w-6" />,
    title: "Empathy Building",
    description: "Understand the daily challenges faced by visually impaired users"
  }, {
    icon: <Target className="h-6 w-6" />,
    title: "WCAG Compliance",
    description: "Learn to implement Web Content Accessibility Guidelines"
  }, {
    icon: <Zap className="h-6 w-6" />,
    title: "Quick Wins",
    description: "Discover simple changes that make huge accessibility improvements"
  }];
  const benefits = ["Master keyboard navigation patterns", "Understand screen reader behavior", "Implement semantic HTML structures", "Create inclusive user experiences"];
  return <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            Interactive Workshop Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why the <span className="text-transparent bg-clip-text bg-hero-gradient">Blindfolder Challenge?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Most developers never experience their websites the way visually impaired users do. 
            This workshop changes that by putting you in their shoes—literally blindfolded—to build true empathy and expertise in web accessibility.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Challenge Activities */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-accent" />
              What You'll Experience
            </h3>
            <div className="space-y-4">
              {challenges.map((challenge, index) => <Card key={index} className="bg-card-gradient border border-border/50 hover:border-accent/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-accent group-hover:text-accent/80 transition-colors">
                        {challenge.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {challenge.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              What You'll Learn
            </h3>
            <Card className="bg-card-gradient border border-border/50 p-6">
              <div className="space-y-3">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground text-sm">
                      {benefit}
                    </span>
                  </div>)}
              </div>
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                </span>
                  
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <Card className="max-w-2xl mx-auto bg-card-gradient border border-accent/30 p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ready to See the Web Differently?
            </h3>
            <p className="text-muted-foreground mb-6">Join developers, designers, and product managers from different BU's in this eye-opening accessibility workshop.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              
              <Badge variant="outline" className="border-accent/50 text-accent">
                <ArrowRight className="h-3 w-3 mr-1" />
                Limited Seats
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutSection;