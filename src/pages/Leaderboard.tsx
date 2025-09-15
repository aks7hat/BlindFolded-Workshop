import React from "react";

const PasswordChallengeEmbed = () => {
  return (
    <section className="relative h-[calc(100vh-128px)] w-full bg-background">
      <iframe
        title="Password Challenge"
        className="absolute inset-0 h-full w-full border-0"
        allow="clipboard-read; clipboard-write; fullscreen;" 
        src="https://sense-of-security.vercel.app/leaderboard"
      />
    </section>
  );
};

export default PasswordChallengeEmbed;


