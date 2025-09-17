import React from "react";

const KeyboardCommerceChallenge = () => {
  return (
    <section className="relative min-h-[calc(100vh-128px)] w-full overflow-hidden bg-cosmic-gradient no-scrollbar h-[calc(100vh-64px-64px)] overflow-y-auto">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[20%] bg-[conic-gradient(from_0deg,hsl(200_60%_45%),transparent_30%,hsl(320_50%_55%),transparent_60%,hsl(280_45%_50%),transparent_90%)] opacity-15 blur-3xl animate-rotate-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,hsl(200_50%_12%_/_0.25)_0%,transparent_70%)]" />
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-primary/12 blur-3xl animate-float" />
        <div className="absolute right-[-12%] bottom-[-12%] h-96 w-96 rounded-full bg-accent/12 blur-3xl animate-float" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="font-cyber font-black leading-tight">
            <span className="block text-sm md:text-base text-transparent bg-clip-text bg-neon-gradient tracking-[0.15em]">BLINDFOLDED BROWSING</span>
            <span className="block text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-text-secondary">Keyboard Commerce Challenge</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">Order an item under ₹250 without touching your mouse or trackpad.</p>
        </div>

        {/* Visual Cues */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-1 gap-4">
          {[
            { title: "Ecommerce Shopping with Keyboard", desc: "", key: "cue1", img: "/keyboard-challenge.png" },
          ].map((cue) => (
            <div key={cue.key} className="group relative overflow-hidden rounded-2xl border border-primary/25 bg-background/60 backdrop-blur-sm shadow-accent-glow hover:border-primary/40 transition-colors">
              
              {/* Remove flex and span wrapper */}
              <div className="aspect-video w-full bg-black/70">
                <img
                  src={cue.img}
                  alt={cue.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* <div className="p-1">
                <div className="text-sm md:text-base font-cyber font-semibold text-primary text-center">{cue.title}</div>
              </div> */}
            </div>
          ))}
        </div>


        {/* Quick Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
          {/* <span className="px-3 py-1 rounded-full border border-primary/40 bg-background/70 text-xs md:text-sm font-cyber text-primary">Reimbursement</span> */}
          <span className="px-3 py-1 rounded-full border border-accent/40 bg-background/70 text-xs md:text-sm font-cyber text-accent">Keyboard Only</span>
          <span className="px-3 py-1 rounded-full border border-primary/40 bg-background/70 text-xs md:text-sm font-cyber text-primary">No Mouse</span>
          <span className="px-3 py-1 rounded-full border border-accent/40 bg-background/70 text-xs md:text-sm font-cyber text-accent">3 Winners</span>
        </div>

        {/* Instructions */}
        <div className="w-full text-base md:text-lg space-y-5 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 md:p-7">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-2xl md:text-3xl font-cyber font-black text-transparent bg-clip-text bg-neon-gradient">Instructions</h2>
          </div>
          <ol className="list-decimal pl-6 space-y-4 marker:text-accent marker:font-semibold">
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              Every participant will attempt the challenge on their own laptop.
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              The task is to order any item worth under <span className="font-semibold text-accent">₹250</span> from an e-commerce website without using a mouse or trackpad.
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              You may choose any e-commerce website <span className="font-semibold text-accent">except</span> the following:
              <ul className="list-disc pl-6 mt-2 text-sm md:text-base text-muted-foreground">
                <li>Amazon</li>
                <li>Flipkart</li>
                <li>H&M</li>
                <li>Zara</li>
                <li>Ajio</li>
              </ul>
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              Once you land on the chosen site, you must complete the order using only the keyboard.
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              After successfully placing an order, participants must inform the host immediately for validation.
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              The first three participants to make a validated purchase will be declared the winners. The challenge will end once we have <span className="font-semibold text-accent">Three</span> validated purchases.
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              The order amount will be reimbursed for the winners. The items ordered will serve as the prizes for this challenge.
            </li>
          </ol>
        </div>

        {/* Tips / Keyboard Help (optional visual) */}
        <div className="w-full text-base md:text-lg space-y-5 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 md:p-7 mt-10">
          <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-cyber font-black text-transparent bg-clip-text bg-neon-gradient">Hints</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { k: "tip1", t: "Navigation", d: "Use Tab / Shift+Tab to move focus" },
              { k: "tip2", t: "Activation", d: "Use Enter / Space to activate buttons and links" },
              { k: "tip3", t: "Forms", d: "Use Arrow keys, PageUp/Down where applicable" },
            ].map((tip) => (
              <div key={tip.k} className="rounded-2xl border border-primary/20 bg-background/60 p-4">
                <div className="font-cyber text-primary text-sm md:text-base">{tip.t}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{tip.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyboardCommerceChallenge;