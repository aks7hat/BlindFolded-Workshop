import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type CountdownVariant = "default" | "compact" | "header";

const CountdownTimer = ({ variant = "default" }: { variant?: CountdownVariant }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [lastTick, setLastTick] = useState<string>("");
  const [isEventPassed, setIsEventPassed] = useState(false);

  // Event date: September 20, 2025, 2:00 PM IST
  const eventDate = new Date("2025-09-20T14:00:00+05:30");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const eventTime = eventDate.getTime();
      const difference = eventTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setLastTick(`${days}-${hours}-${minutes}-${seconds}`);
        setIsEventPassed(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsEventPassed(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => {
    if (variant === "header") {
      return (
        <div className="px-2 py-1 text-center rounded-lg bg-background/80 border border-primary/40 shadow-secondary-glow">
          <div className={`text-[16px] md:text-[18px] leading-none font-cyber font-black text-transparent bg-clip-text bg-neon-gradient ${lastTick ? 'animate-tick-pop' : ''}`}>
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-[7px] md:text-[8px] text-muted-foreground uppercase tracking-[0.15em] mt-0.5">
            {label}
          </div>
        </div>
      );
    }

    if (variant === "compact") {
      return (
        <div className="px-2 py-1 text-center rounded-md bg-primary/15 border border-primary/30 min-w-[52px]">
          <div className="text-base font-cyber font-bold text-primary leading-none">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
            {label}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 rounded-2xl p-4 text-center min-w-[90px] shadow-secondary-glow backdrop-blur-sm">
        <div className={`text-3xl md:text-4xl font-cyber font-bold text-primary mb-1 ${lastTick ? 'animate-tick-pop' : ''}`}>
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-cyber">
          {label}
        </div>
      </div>
    );
  };

  if (isEventPassed && variant !== "compact") {
    return (
      <div className="text-center py-8 animate-scale-in">
        <div className="text-2xl font-bold text-accent mb-2">Workshop Has Started!</div>
        <div className="text-muted-foreground">Join us now for the Blindfolder Challenge</div>
      </div>
    );
  }

  return (
    <div className={variant === "compact" ? "py-1" : variant === "header" ? "py-0" : "text-center py-8 animate-fade-in"}>
      {variant === "default" && (
        <div className="flex items-center justify-center gap-3 mb-6">
          <Clock className="h-7 w-7 text-primary" />
          <h3 className="text-2xl md:text-3xl font-cyber font-bold text-foreground">
            <span className="text-transparent bg-clip-text bg-neon-gradient">COUNTDOWN</span>
          </h3>
        </div>
      )}

      <div className={
        variant === "compact"
          ? "flex items-center gap-2"
          : variant === "header"
          ? "flex items-center gap-0.5 md:gap-1"
          : "flex items-center justify-center gap-4 md:gap-8 mb-6"
      }>
        <TimeBox value={timeLeft.days} label={variant === "compact" || variant === "header" ? "D" : "DAYS"} />
        <div className={variant === "header" ? "text-primary/60 font-bold" : "hidden"}>:</div>
        <TimeBox value={timeLeft.hours} label={variant === "compact" || variant === "header" ? "H" : "HOURS"} />
        <div className={variant === "header" ? "text-primary/60 font-bold" : "hidden"}>:</div>
        <TimeBox value={timeLeft.minutes} label={variant === "compact" || variant === "header" ? "M" : "MINS"} />
        <div className={variant === "header" ? "text-primary/60 font-bold" : "hidden"}>:</div>
        <TimeBox value={timeLeft.seconds} label={variant === "compact" || variant === "header" ? "S" : "SECS"} />
      </div>

      {variant === "default" && (
        <div className="flex items-center justify-center gap-2 text-accent font-cyber">
          <Calendar className="h-5 w-5" />
          <span className="text-sm md:text-base font-medium">
            SAT, SEP 20TH, 2025 • 14:00 IST
          </span>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;