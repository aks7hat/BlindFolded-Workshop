import React from "react";

const LeaderBoardPage = () => {
  return (
    <section className="relative h-[calc(100vh-128px)] w-full bg-background">
      <iframe
        title="Leaderboard"
        className="absolute inset-0 h-full w-full border-0"
        allow="clipboard-read; clipboard-write; fullscreen;"
        src="https://sense-of-security.vercel.app/leaderboard"
        loading="eager"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
};

export default LeaderBoardPage;


