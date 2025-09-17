import React from "react";

const GuessChallenge = () => {
  const visualCues = [
    {
      title: "Pick a Chit",
      subtitle: "Picking chits from a bowl",
      alt: "Animated illustration of picking chits from a bowl",
      src: "/placeholder.svg",
    },
    {
      title: "Pictionary",
      subtitle: "Draw it out",
      alt: "Animated illustration representing pictionary drawing",
      src: "/placeholder.svg",
    },
    {
      title: "Dumb Charades",
      subtitle: "Act it out",
      alt: "Animated illustration representing dumb charades acting",
      src: "/placeholder.svg",
    },
    {
      title: "Taboo",
      subtitle: "Don’t say the word",
      alt: "Animated illustration representing taboo word game",
      src: "/placeholder.svg",
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-128px)] w-full overflow-hidden bg-cosmic-gradient no-scrollbar h-[calc(100vh-64px-64px)] overflow-y-auto">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[20%] bg-[conic-gradient(from_0deg,hsl(200_60%_45%),transparent_30%,hsl(320_50%_55%),transparent_60%,hsl(280_45%_50%),transparent_90%)] opacity-15 blur-3xl animate-rotate-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,hsl(200_50%_12%_/_0.25)_0%,transparent_70%)]" />
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-primary/12 blur-3xl animate-float" />
        <div className="absolute right-[-12%] bottom-[-12%] h-96 w-96 rounded-full bg-accent/12 blur-3xl animate-float" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="relative mx-auto max-w-none px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="font-cyber font-black leading-tight">
            <span className="block text-sm md:text-base text-transparent bg-clip-text bg-neon-gradient tracking-[0.15em]">BLINDFOLDED BROWSING</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-text-secondary">Guess Me If You Can</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">Get the vibe of the game below, then follow the instructions.</p>
        </div>

        {/* Single Visual Banner */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl border border-primary/20 bg-background/60 backdrop-blur-sm shadow-accent-glow">
            <div className="w-full h-[17rem] sm:h-[21rem] md:h-[25rem] lg:h-[27rem] xl:h-[31rem]">
              <img
                src="/Image.png"
                alt="Guess Me If You Can challenge visual"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="w-full text-base md:text-lg space-y-4 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-cyber font-black text-transparent bg-clip-text bg-neon-gradient">Instructions</h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground">Follow the flow below. A speaker will guide and keep the energy high.</p>
          <ol className="list-decimal pl-6 space-y-3 marker:text-accent marker:font-semibold">
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Team Formation</strong>
              <ul className="list-disc pl-6">
                <li>Participants will form <b>3 teams of 3 members each</b> (adjustable depending on total participants).</li>
                <li>Each volunteer picks a <b>chit numbered 1–9</b>.</li>
                <li>Teams are created in sequence (e.g., <b>1-2-3</b>, <b>4-5-6</b>, <b>7-8-9</b>).</li>
              </ul>
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Join the Host if Not in a Team</strong>
              <ul className="list-disc pl-6">
                <li>Participants not in teams can still join the fun by playing with the host (<b>Priyanshu</b>).</li>
                <li>These participants will only guess while the host facilitates.</li>
              </ul>
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Three Rounds</strong>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <b>Round 1: Draw It Out ✏️</b>
                  <ul className="list-[square] pl-6">
                    <li>The Performer draws the action from the chit (no speaking allowed).</li>
                    <li>The Decoders (teammates) try to guess by acting it out.</li>
                  </ul>
                </li>
                <li>
                  <b>Round 2: Act It Out 🎭</b>
                  <ul className="list-[square] pl-6">
                    <li>The Performer enacts the movie on the chit (no speaking allowed).</li>
                    <li>The Decoders try to guess.</li>
                  </ul>
                </li>
                <li>
                  <b>Round 3: Don’t Say the Word 🤐</b>
                  <ul className="list-[square] pl-6">
                    <li>The Performer describes the word on the chit without using the mentioned taboo words.</li>
                    <li>The Decoders try to guess.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Turn-taking and Progression</strong>
              <ul className="list-disc pl-6">
                <li>For each round, <b>team members take turns</b> being the Performer while the others act as Decoders.</li>
                <li>Teams move to the next round <b>only after completing</b> the current one.</li>
              </ul>
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Goal</strong>
              <ul className="list-disc pl-6">
                <li><b>No winners or losers</b> – the goal is to step into the shoes of people with communication barriers and build empathy through play.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default GuessChallenge;
