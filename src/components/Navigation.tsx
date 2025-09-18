import CountdownTimer from "./CountdownTimer";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <img src="/nagarro.webp" alt="Company Logo" className="h-15 w-16 md:h-17 md:w-20 object-contain" />
            <img src="/FLO.avif" alt="FLO 2025 Event Logo" className="h-10 w-20 md:h-14 md:w-25 object-contain" />
          </div>

          {/* Header Countdown */}
          <div className="flex items-center">
            <div className="rounded-lg border border-primary/40 bg-background/80 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 shadow-secondary-glow whitespace-nowrap">
              <CountdownTimer variant="header" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;