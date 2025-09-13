import { MapPin, Clock } from "lucide-react";

const EventFooter = () => {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border sticky bottom-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 gap-4 md:gap-8 lg:gap-12">
          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <div>
              <div className="text-xs font-semibold text-foreground">Location</div>
              <div className="text-[11px] md:text-[13px] text-muted-foreground">Nagarro Gurugram, Level 7, South Wing</div>
            </div>
          </div>
          
          {/* Time */}
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <div>
              <div className="text-xs font-semibold text-foreground">Time</div>
              <div className="text-[11px] md:text-[13px] text-muted-foreground">Sept 20, 2025 • 2:00 PM - 3:45 PM</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EventFooter;
