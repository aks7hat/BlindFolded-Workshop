import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase } from "lucide-react";
const speakers = [{
  name: "Bhavya Jain",
  role: "Accessibility Expert",
  expertise: "WCAG Guidelines & Inclusive Design"
}, {
  name: "Vishal Pathak",
  role: "Frontend Architect",
  expertise: "Screen Reader Technologies"
}, {
  name: "Priyanshu Saxena",
  role: "UX Engineer",
  expertise: "Assistive Technologies"
}, {
  name: "Anuja Shitole",
  role: "Product Manager",
  expertise: "Accessibility Strategy"
}];
const SpeakersSection = () => {
  return <section id="speakers" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-hero-gradient">Expert Speakers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders who are passionate about making the web accessible for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => <Card key={speaker.name} className="bg-card-gradient border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 animate-scale-in group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-speaker-card border border-accent/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-accent-glow transition-all duration-300">
                  <User className="h-10 w-10 text-accent" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {speaker.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 mb-3">
                  
                  
                </div>
                
                
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Get insights from professionals who have shaped accessible web experiences
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="border-accent/50 text-accent">
              Live Q&A Session
            </Badge>
            <Badge variant="outline" className="border-primary/50 text-primary">
              Hands-on Workshops
            </Badge>
            <Badge variant="outline" className="border-text-highlight/50 text-text-highlight">
              Best Practices
            </Badge>
          </div>
        </div>
      </div>
    </section>;
};
export default SpeakersSection;