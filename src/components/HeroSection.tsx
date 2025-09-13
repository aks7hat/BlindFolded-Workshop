import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eye, Zap, Sparkles, Calendar, Clock, MapPin, Rocket } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(326_100%_74%_/_0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(142_76%_36%_/_0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff69b4' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Hero Content */}
        <div className="text-center mb-8 animate-fade-in">
          {/* Futuristic Badge */}
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary font-cyber animate-pulse">
            <Sparkles className="h-3 w-3 mr-1" />
            Interactive Workshop Experience
          </Badge>

          {/* Main Title */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-cyber font-bold mb-4 animate-scale-in">
              <span className="block text-transparent bg-clip-text bg-neon-gradient mb-2">
                BLINDFOLDED
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-text-secondary">
                CHALLENGE
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            🚀 Experience the web like never before. Master accessibility through 
            <span className="text-primary font-semibold"> hands-on blindfolded navigation</span>
          </p>

          {/* Action Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-background font-cyber font-bold px-8 py-3 shadow-accent-glow hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow mb-8"
          >
            <Rocket className="h-5 w-5 mr-2" />
            JOIN THE EXPERIENCE
          </Button>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-accent font-medium">
              <Eye className="h-5 w-5" />
              <span>4 Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary font-medium">
              <Zap className="h-5 w-5" />
              <span>105 Minutes of Impact</span>
            </div>
          </div>
        </div>

        {/* Countdown Section */}
        <div id="countdown-section" className="max-w-4xl mx-auto mb-8">
          <Card className="bg-card/30 backdrop-blur-xl border-2 border-primary/20 shadow-accent-glow animate-scale-in">
            <CountdownTimer />
          </Card>
        </div>

        {/* Compact Event Details */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-cyber-gradient border border-accent/30 p-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-cyber font-bold text-foreground">Location</div>
                  <div className="text-sm text-muted-foreground">Nagarro Gurugram • Level 7, South Wing</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-cyber font-bold text-foreground">Time</div>
                  <div className="text-sm text-muted-foreground">Sept 20, 2025 • 2:00 PM - 3:45 PM</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;