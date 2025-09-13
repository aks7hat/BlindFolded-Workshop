import { useState, useEffect } from "react";
import { X, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      
      if (scrolled && !hasScrolled) {
        setHasScrolled(true);
        
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        // Show popup after user stays scrolled for 3 seconds
        scrollTimeout = setTimeout(() => {
          setShowPopup(true);
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      clearTimeout(scrollTimeout);
    };
  }, [hasScrolled]);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="max-w-md w-full bg-card border-2 border-accent/30 shadow-accent-glow animate-scale-in">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-bold text-foreground">Still Interested?</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-6 w-6 p-0 hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-muted-foreground mb-6">
            We can see you're engaged! This accessibility workshop has limited seats. 
            Join fellow developers in experiencing the web from a new perspective.
          </p>
          
          <div className="flex items-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2 text-accent">
              <Clock className="h-4 w-4" />
              <span>1hr 45min</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Users className="h-4 w-4" />
              <span>Expert Speakers</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="default" 
              className="flex-1 animate-pulse-glow"
              onClick={handleClose}
            >
              Count Me In!
            </Button>
            <Button 
              variant="outline" 
              onClick={handleClose}
              className="px-4"
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ScrollPopup;