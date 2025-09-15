import { useEffect, useMemo, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { Gamepad, Puzzle, Gift, X} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import { Calendar, Clock, MapPin, Rocket, Star, Users, User, Keyboard, Landmark, Volume2, CheckCircle2, Sparkles, Mail, Speaker, Briefcase, Heart } from "lucide-react";

type Slide = {
  id: string;
  content: JSX.Element;
  ariaLabel: string;
};

const FullScreenCarousel = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);

  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      if (!isUserInteracting && api.canScrollNext()) {
        api.scrollNext();
      } else if (!isUserInteracting) {
        api.scrollTo(0);
      }
    }, 7000);
    
    return () => clearInterval(interval);
  }, [api, isUserInteracting]);

  // Handle user interaction
  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    // Resume auto-rotation after 10 seconds of no interaction
    setTimeout(() => setIsUserInteracting(false), 10000);
  };

  // Handle speaker selection for mobile popup
  const handleSpeakerClick = (speaker: any) => {
    setSelectedSpeaker(speaker);
    setIsMobilePopupOpen(true);
  };

  // Close mobile popup
  const closeMobilePopup = () => {
    setIsMobilePopupOpen(false);
    setSelectedSpeaker(null);
  };

  // Listen for carousel events to detect manual navigation
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      handleUserInteraction();
    };

    api.on('select', handleSelect);
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  const slides: Slide[] = useMemo(() => [
    {
      id: "hero",
      ariaLabel: "Accessibility Workshop Hero",
      content: (
        <div className="relative h-full w-full overflow-hidden bg-hero-gradient">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(217_91%_60%_/_0.12)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(291_95%_63%_/_0.12)_0%,transparent_50%)]" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
            <div className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 md:px-6 py-2 md:py-3 text-primary font-cyber backdrop-blur-sm">
              <Star className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base lg:text-md">Change Your Perspective</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-cyber font-black leading-[0.95]">
              <span className="block text-transparent bg-clip-text bg-neon-gradient">BLINDFOLDED</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-text-secondary pb-3">Browsing</span>
            </h1>
            <p className="mt-3 md:mt-4 max-w-2xl text-sm md:text-base lg:text-lg text-muted-foreground">
              The Accessibility Challenge Shaking Up the Web!
            </p>
            <Button 
              size="lg" 
              className="mt-4 md:mt-6 bg-gradient-to-r from-primary to-accent text-background font-cyber font-bold px-6 md:px-8 py-4 md:py-6 shadow-accent-glow hover:opacity-90 transition-opacity cursor-pointer text-sm md:text-base"
              onClick={() => {
                console.log('Join the Experience button clicked!');
                window.open('https://whova.com/portal/webapp/QKiNjaSzKJsvM8UFcsxx/Agenda/4810603', '_blank');
              }}
            >
              <Rocket className="h-4 w-4 md:h-5 md:w-5 mr-2" /> Join the Experience
            </Button>
          </div>
        </div>
      ),
    },
    {
        id: "wow-intro",
        ariaLabel: "Exciting Accessibility Workshop Invitation",
        content: (
            <div className="relative h-full w-full overflow-hidden bg-cosmic-gradient bg-flowing-ribbons">
                <div className="absolute inset-0">
                    <div className="absolute -inset-[20%] bg-[conic-gradient(from_0deg,hsl(200_60%_45%),transparent_30%,hsl(320_50%_55%),transparent_60%,hsl(280_45%_50%),transparent_90%)] opacity-15 blur-3xl animate-rotate-slow" />
                    <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,hsl(200_50%_12%_/_0.25)_0%,transparent_70%)]" />
                    <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-primary/12 blur-3xl animate-float" />
                    <div className="absolute right-[-12%] bottom-[-12%] h-96 w-96 rounded-full bg-accent/12 blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />
                </div>
    
                <div className="relative h-full flex flex-col">
                    {/* Fixed Header Content */}
                    <div className="flex-shrink-0 text-center px-4 md:px-6 py-4 md:py-6 mt-4">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cyber font-black leading-tight tracking-tight">
                            <span className="block text-transparent bg-clip-text bg-neon-gradient">🎮 GAMES • 🧩 FUN • 🎁 PRIZES</span>
                        </h1>
                        <p className="mt-4 md:mt-6 max-w-4xl text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed mx-auto">
                            <span className="font-semibold text-primary">No lectures, no guilt trips!</span> Just pure fun, hands-on learning, and amazing surprises.
                        </p>
                    </div>
    
                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto px-4 md:px-6 pb-4 md:pb-6 pt-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full max-w-5xl mx-auto">
                            {[
                                { icon: <Gamepad className="h-6 w-6 md:h-8 md:w-8 text-primary" />, title: "Fun Games", desc: "Interactive challenges that make learning addictive", animation: "animate-spin-glow" },
                                { icon: <Puzzle className="h-6 w-6 md:h-8 md:w-8 text-accent" />, title: "Creative Quests", desc: "Solve puzzles and unlock new levels of understanding", animation: "animate-heartbeat" },
                                { icon: <Gift className="h-6 w-6 md:h-8 md:w-8 text-primary" />, title: "Awesome Prizes", desc: "Win cool gifts for solving challenges and participating", animation: "animate-pulse-scale" },
                                { icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-accent" />, title: "Team Adventures", desc: "Work together in exciting collaborative missions", animation: "animate-rainbow-glow" },
                                { icon: <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary" />, title: "Empathy", desc: "Creating digital experiences that care", animation: "animate-pulse-scale" },
                                { icon: <Volume2 className="h-6 w-6 md:h-8 md:w-8 text-accent" />, title: "Accessibility Focus", desc: "Learn through hands-on accessibility adventures", animation: "animate-wave" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2 md:gap-3 bg-background/60 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-primary/20 hover:border-primary/40 hover:shadow-accent-glow transition-all duration-300 hover:scale-105">
                                    <div className={`flex-shrink-0 mt-1 ${item.animation}`}>
                                    {item.icon}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-primary text-xs md:text-sm lg:text-base">{item.title}</h3>
                                        <p className="text-[10px] md:text-xs lg:text-sm text-muted-foreground mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
      id: "speakers",
      ariaLabel: "Speakers slide",
      content: (
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,hsl(291_95%_20%_/_0.45)_0%,transparent_70%)]" />
          <div className="relative h-full flex flex-col md:flex-row md:items-center md:justify-center px-4 md:px-6 py-4 md:py-0">
            <Card className="w-full max-w-6xl bg-card/60 backdrop-blur-xl border border-accent/30 flex-1 md:flex-none">
              <CardContent className="p-4 md:p-8 h-full md:h-auto flex flex-col md:block">
                <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-cyber font-bold mb-6 md:mb-8 flex-shrink-0">
                  Meet Your Speakers
                </h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto flex-1 md:flex-none">
                   {[
                      { 
                        name: "Akshat Aggarwal",
                        email: "akshat.aggarwal@nagarro.com",
                        jobTitle: "Associate Staff Engineer",
                        bio: "Akshat Aggarwal is a Full Stack Engineer with over 5.7 years of experience designing and building scalable, production-grade applications across e-commerce and enterprise systems.",
                        linkedin: "https://linkedin.com/in/akshat-aggarwal",
                        image: "/Akshat.jpeg"
                      },
                      { 
                        name: "Anuja Shitole",
                        email: "anujashitole@nagarro.com",
                        jobTitle: "Senior Engineer",
                        bio: "SAP CX Developer with over 4.5 years of experience in designing and implementing end-to-end solutions across SAP Sales Cloud, Service Cloud (C4C), CPQ, FSM, and Commerce Cloud. Specialized in integrating these systems with S/4HANA Cloud using SAP Integration.",
                        linkedin: "https://linkedin.com/in/anuja-shitole",
                        image: "/Anuja.jpg"
                      },
                     { 
                       name: "Bhavya Jain",
                       email: "bhavya.jain@nagarro.com",
                       jobTitle: "Associate Director",
                       bio: "I'm Bhavya Jain, a hands-on technologist who still gets a kick out of solving tricky build errors after twelve years at Nagarro. Most days I'm shaping e-commerce systems—from Java services to React front-ends—while keeping distributed teams in sync with diagram.",
                       linkedin: "https://linkedin.com/in/bhavya-jain",
                       image: "/Bhavya.jpeg"
                     },
                     { 
                       name: "Priyanshu Saxena",
                       email: "priyanshu.saxena@nagarro.com",
                       jobTitle: "Engineer", 
                       bio: "Software Developer with a strong specialization in front-end technologies. With an experience of around 3 years at Nagarro, I have contributed to the development of intuitive and responsive user interfaces for both web and mobile applications.",
                       linkedin: "https://linkedin.com/in/priyanshu-saxena",
                       image: "Priyanshu.jpeg"
                     },
                     { 
                       name: "Suraj Pandey",
                       email: "suraj.pandey01@nagarro.com",
                       jobTitle: "Associate Staff Engineer",
                       bio: "A dynamic and forward-thinking software engineer with over six years of extensive experience in full-stack web development, production support, and emerging technologies.",
                       linkedin: "https://linkedin.com/in/suraj-pandey",
                       image: "/Suraj.png"
                     },
                     { 
                      name: "Vishal Pathak",
                      email: "vishal.pathak@nagarro.com", 
                      jobTitle: "Staff Engineer",
                      bio: "Over 9.5 years of experience in the e-commerce domain, contributing to scalable solutions across platforms such as Salesforce Commerce Cloud (Demandware), VTEX, and AWS. Proficient in backend development with Node.js and Python.",
                      linkedin: "www.linkedin.com/in/vishal-pathak-79a1a1ba",
                      image: "/Vishal.jpeg"
                      }
                   ].map((speaker, idx) => {
                     // Determine card position based on speaker index
                     const getCardPosition = (index: number) => {
                       switch (index) {
                         case 0: // Top left - open right
                         case 1: // Top middle - open right
                           return "left-full ml-4 top-0";
                         case 2: // Top right - open left
                           return "right-full mr-4 top-0";
                         case 3: // Bottom left - open top right
                           return "left-full ml-4 bottom-0";
                         case 4: // Bottom middle - open top
                           return "left-1/2 transform -translate-x-1/2 bottom-full mb-1";
                         case 5: // Bottom right - open top left
                           return "right-full mr-4 bottom-0";
                         default:
                           return "left-full ml-4 top-0";
                       }
                     };

                     return (
                       <div key={idx} className="group relative">
                         <div 
                           className="text-center rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-3 md:p-3 hover:border-primary/40 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover:shadow-accent-glow cursor-pointer md:cursor-default active:scale-95 md:active:scale-100 h-32 md:h-auto flex flex-col justify-between"
                           onClick={() => {
                             // Only trigger on mobile (when hover cards are hidden)
                             handleSpeakerClick(speaker);
                           }}
                         >
                           <div className="flex-shrink-0">
                             <div className="relative mx-auto mb-2 h-14 w-14 md:h-16 md:w-16">
                               <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,theme(colors.primary.DEFAULT)_0%,theme(colors.accent.DEFAULT)_60%,transparent_100%)] opacity-30 blur-sm" />
                               <div className="relative h-full w-full rounded-full border-2 border-primary/30 bg-speaker-card flex items-center justify-center shadow-secondary-glow group-hover:scale-[1.05] transition-transform duration-300 overflow-hidden">
                                 <img 
                                   src={speaker.image} 
                                   alt={speaker.name}
                                   className="h-full w-full object-cover rounded-full"
                                   onError={(e) => {
                                     const target = e.target as HTMLImageElement;
                                     target.style.display = 'none';
                                     target.nextElementSibling?.classList.remove('hidden');
                                   }}
                                 />
                                 <User className="h-7 w-7 md:h-8 md:w-8 text-accent hidden" />
                               </div>
                             </div>
                           </div>
                           <div className="flex-1 flex flex-col justify-center min-h-0 px-1">
                             <div className="font-semibold text-primary tracking-wide text-sm md:text-sm leading-tight" title={speaker.name}>{speaker.name}</div>
                             <div className="text-xs md:text-xs text-accent mt-1 leading-tight" title={speaker.jobTitle}>{speaker.jobTitle}</div>
                           </div>
                           {/* <div className="text-[8px] text-muted-foreground mt-1 md:hidden">Tap for details</div> */}
                         </div>
                         
                         {/* Hover Card with conditional positioning - Hidden on mobile */}
                         <div className={`hidden md:block absolute w-80 bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl border-2 border-slate-600 rounded-2xl shadow-2xl opacity-0 scale-75 rotate-2 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500 ease-out z-50 pointer-events-none group-hover:pointer-events-auto ${getCardPosition(idx)}`}>
                           {/* Arrow pointing to speaker */}
                           <div className={`absolute w-0 h-0 transition-all duration-500 ease-out ${
                             idx === 0 || idx === 1 ? 'left-[-8px] top-6 border-t-[8px] border-b-[8px] border-r-[8px] border-t-transparent border-b-transparent border-r-slate-600' :
                             idx === 2 ? 'right-[-8px] top-6 border-t-[8px] border-b-[8px] border-l-[8px] border-t-transparent border-b-transparent border-l-slate-600' :
                             idx === 3 ? 'left-[-8px] bottom-6 border-t-[8px] border-b-[8px] border-r-[8px] border-t-transparent border-b-transparent border-r-slate-600' :
                             idx === 4 ? 'left-1/2 transform -translate-x-1/2 bottom-[-8px] border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-slate-600' :
                             'right-[-8px] bottom-6 border-t-[8px] border-b-[8px] border-l-[8px] border-t-transparent border-b-transparent border-l-slate-600'
                           }`}></div>
                           <div className="p-5">
                             <div className="flex items-start gap-3 mb-3">
                               <div className="h-16 w-16 rounded-full border-2 border-slate-500 bg-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden flex-shrink-0">
                                 <img 
                                   src={speaker.image} 
                                   alt={speaker.name}
                                   className="h-full w-full object-cover rounded-full"
                                   onError={(e) => {
                                     const target = e.target as HTMLImageElement;
                                     target.style.display = 'none';
                                     target.nextElementSibling?.classList.remove('hidden');
                                   }}
                                 />
                                 <User className="h-7 w-7 text-slate-300 hidden" />
                               </div>
                               <div className="flex-1 min-w-0">
                                 <h3 className="font-bold text-white text-base font-sans group-hover:text-blue-300 transition-colors duration-300">{speaker.name}</h3>
                                 <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                                   <Briefcase className="h-3 w-3" />
                                   {speaker.jobTitle}
                                 </div>
                               </div>
                             </div>
                             
                             <p className="text-xs text-slate-300 mb-3 leading-relaxed font-sans group-hover:text-slate-200 transition-colors duration-300">
                               {speaker.bio}
                             </p>
                             
                             <div className="space-y-1.5">
                               <div className="flex items-center gap-2 text-xs group-hover:translate-x-1 transition-transform duration-300">
                                 <Mail className="h-3 w-3 text-blue-400" />
                                 <span className="text-slate-200 font-sans truncate">{speaker.email}</span>
                               </div>
                               {/* <div className="flex items-center gap-2 text-xs group-hover:translate-x-1 transition-transform duration-300">
                                 <Linkedin className="h-3 w-3 text-blue-400" />
                                 <a 
                                   href={speaker.linkedin} 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="text-blue-400 hover:text-blue-300 transition-colors font-sans"
                                 >
                                   LinkedIn Profile
                                 </a>
                               </div> */}
                             </div>
                           </div>
                         </div>
                       </div>
                     );
                   })}
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
  ], []);

  return (
    <section className="relative h-full w-full overflow-hidden">
      <Carousel className="h-full" opts={{ align: "start", loop: true, skipSnaps: false }} setApi={setApi}>
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="h-full" aria-label={slide.ariaLabel}>
                {slide.content}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious 
          className="left-4 bg-background/80 backdrop-blur-md border-primary/20 hover:bg-background/90 hover:border-primary/30 shadow-accent-glow text-primary hover:text-accent z-50 cursor-pointer" 
        />
        <CarouselNext 
          className="right-4 bg-background/80 backdrop-blur-md border-primary/20 hover:bg-background/90 hover:border-primary/30 shadow-accent-glow text-primary hover:text-accent z-50 cursor-pointer" 
        />
      </Carousel>

      {/* Mobile Speaker Popup */}
      {isMobilePopupOpen && selectedSpeaker && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:hidden">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl border-2 border-slate-600 rounded-2xl shadow-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeMobilePopup}
                className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
            
            {/* Speaker Content */}
            <div className="px-6 pb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-20 w-20 rounded-full border-2 border-slate-500 bg-slate-700 flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={selectedSpeaker.image} 
                    alt={selectedSpeaker.name}
                    className="h-full w-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <User className="h-8 w-8 text-slate-300 hidden" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-lg font-sans">{selectedSpeaker.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                    <Briefcase className="h-4 w-4" />
                    {selectedSpeaker.jobTitle}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-slate-300 mb-4 leading-relaxed font-sans">
                {selectedSpeaker.bio}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-slate-200 font-sans">{selectedSpeaker.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Countdown removed in favor of header countdown */}
    </section>
  );
};

export default FullScreenCarousel;


