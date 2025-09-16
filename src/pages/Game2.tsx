import React from "react";

const Game2 = () => {
  return (
    <section className="relative min-h-[calc(100vh-128px)] w-full overflow-hidden bg-cosmic-gradient no-scrollbar">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[20%] bg-[conic-gradient(from_0deg,hsl(200_60%_45%),transparent_30%,hsl(320_50%_55%),transparent_60%,hsl(280_45%_50%),transparent_90%)] opacity-15 blur-3xl animate-rotate-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,hsl(200_50%_12%_/_0.25)_0%,transparent_70%)]" />
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-primary/12 blur-3xl animate-float" />
        <div className="absolute right-[-12%] bottom-[-12%] h-96 w-96 rounded-full bg-accent/12 blur-3xl animate-float" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="relative mx-auto max-w-none px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="font-cyber font-black leading-tight">
            <span className="block text-sm md:text-base text-transparent bg-clip-text bg-neon-gradient tracking-[0.15em]">BLINDFOLDED BROWSING</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-text-secondary">Game 2</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">Follow the instructions below. The black area is your play zone.</p>
        </div>

        <div className="mb-12">
          <div className="h-64 md:h-80 lg:h-96 bg-black/85 border border-primary/30 rounded-2xl shadow-accent-glow flex items-center justify-center">
            <span className="text-muted-foreground font-cyber">Black Middle Section</span>
          </div>
        </div>

        {/* Important Note */}
        <div
          role="note"
          aria-label="Important note about AI tool usage"
          className="mb-8 rounded-xl border border-red-500/30 bg-red-900/20 px-4 py-3 text-red-200"
        >
          <p className="text-sm md:text-base">
            <span className="font-semibold">Important:</span> Use of AI tools is strictly discouraged. Participants found using AI may face disqualification.
          </p>
        </div>


        <div className="w-full text-base md:text-lg space-y-4 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-cyber font-black text-transparent bg-clip-text bg-neon-gradient">Instructions</h2>
          </div>
          <ol className="list-decimal pl-6 space-y-3 marker:text-accent marker:font-semibold">
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Understand the Goal</strong>
              <ul className="list-disc pl-6">
                <li>Use the black section as the main interaction area.</li>
              </ul>
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Build</strong>
              <ul className="list-disc pl-6">
                <li>Implement the required UI/logic scoped to this page.</li>
                <li>Keep it responsive and clean.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Game2;