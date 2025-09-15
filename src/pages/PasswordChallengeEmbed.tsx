import React from "react";

const PasswordChallengeEmbed = () => {
  return (
    <section className="relative h-[calc(100vh-128px)] w-full bg-background">
      <iframe
        title="Password Challenge"
        src="https://sense-of-security.vercel.app"
        className="absolute inset-0 h-full w-full border-0"
        allow="clipboard-read; clipboard-write; fullscreen;" 
      />
    </section>
  );
};

export default PasswordChallengeEmbed;


