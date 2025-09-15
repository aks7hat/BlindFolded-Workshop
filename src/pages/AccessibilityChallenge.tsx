import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const AccessibilityChallenge = () => {
  const htmlSnippets = [
    `<div>
  <h1>Template 1</h1>
  <p>This is a sample HTML template for Column 1.</p>
</div>`,
    `<div>
  <h2>Template 2</h2>
  <button>Click Me</button>
</div>`,
    `<div>
  <h3>Template 3</h3>
  <ul>
    <li>Item One</li>
    <li>Item Two</li>
  </ul>
</div>`,
  ];

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (snippet: string, index: number) => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-128px)] w-full overflow-hidden bg-cosmic-gradient no-scrollbar">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[20%] bg-[conic-gradient(from_0deg,hsl(200_60%_45%),transparent_30%,hsl(320_50%_55%),transparent_60%,hsl(280_45%_50%),transparent_90%)] opacity-15 blur-3xl animate-rotate-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,hsl(200_50%_12%_/_0.25)_0%,transparent_70%)]" />
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-primary/12 blur-3xl animate-float" />
        <div className="absolute right-[-12%] bottom-[-12%] h-96 w-96 rounded-full bg-accent/12 blur-3xl animate-float" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="relative mx-auto max-w-none px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-primary font-cyber backdrop-blur-sm">
            <span className="text-sm">Accessibility Challenge</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-black leading-tight">
            <span className="block text-transparent bg-clip-text bg-neon-gradient">BLINDFOLDED</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-text-secondary">Browsing</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">Copy a snippet, build it, and optimize it for accessibility.</p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-12">
          {htmlSnippets.map((snippet, index) => (
            <div
              key={index}
              className="border border-primary/20 rounded-2xl bg-background/60 backdrop-blur-sm shadow-accent-glow p-4 flex flex-col hover:border-primary/40 transition min-h-56 md:min-h-60"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm md:text-base font-cyber font-semibold text-transparent bg-clip-text bg-neon-gradient">Challenge {index + 1}</span>
              </div>
              <div className="relative flex-1">
                <pre className="h-full min-h-40 md:min-h-48 overflow-auto text-sm bg-slate-900/60 border border-primary/20 p-3 rounded-md text-muted-foreground">
                  <code>{snippet}</code>
                </pre>
                <button
                  onClick={() => handleCopy(snippet, index)}
                  aria-label="Copy code snippet"
                  className="absolute top-2 right-2 inline-flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-r from-primary to-accent text-background shadow-accent-glow hover:opacity-90 transition"
                  title={copiedIndex === index ? "Copied" : "Copy"}
                >
                  {copiedIndex === index ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="sr-only">{copiedIndex === index ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="w-full text-base md:text-lg space-y-4 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-cyber font-black text-transparent bg-clip-text bg-neon-gradient">Instructions</h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground">Follow these steps to build, test, and improve your snippet for accessibility.</p>
          <ol className="list-decimal pl-6 space-y-3 marker:text-accent marker:font-semibold">
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Choose a Snippet</strong>
              <ul className="list-disc pl-6">
                <li>Choose one of the three available HTML snippets.</li>
              </ul>
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Set Up Your Coding Environment</strong>
              <ul className="list-disc pl-6">
                <li>
                  Visit <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-accent">CodeSandbox</a>.
                </li>
                <li>Sign up for a free account if you don’t already have one.</li>
                <li>
                  Create a new project:
                  <ul className="list-disc pl-6">
                    <li>Select <b>HTML + CSS</b> as the project type.</li>
                    <li>Give your project a name.</li>
                    <li>Set runtime as Sandbox.</li>
                    <li>Click Create.</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Add and Run Your HTML Page</strong>
              <ul className="list-disc pl-6">
                <li>Open the <code>index.html</code> file in your project.</li>
                <li>Copy and paste the entire HTML snippet you chose earlier.</li>
                <li>Save the file.</li>
                <li>
                  Go to the Preview tab, copy the preview URL, and open it in a
                  new browser tab.
                </li>
              </ul>
            </li>

            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Generate the Accessibility Report</strong>
              <ul className="list-disc pl-6">
                <li>Right-click anywhere on your page and select <b>Inspect Element</b>.</li>
                <li>Go to the <b>Lighthouse</b> tab.</li>
                <li>
                  Configure Lighthouse:
                  <ul className="list-disc pl-6">
                    <li>Mode: Navigation</li>
                    <li>Device: Desktop</li>
                    <li>Categories: Accessibility</li>
                  </ul>
                </li>
                <li>Click <b>Analyze Page Load</b> and review your Accessibility Report.</li>
              </ul>
            </li>

            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Improve Accessibility</strong>
              <ul className="list-disc pl-6">
                <li>Edit the HTML/CSS to enhance accessibility.</li>
                <li>Do not change the basic layout/features.</li>
                <li>Achieve at least a <b>95% accessibility score</b>.</li>
              </ul>
            </li>

            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Submit for Review</strong>
              <ul className="list-disc pl-6">
                <li>Raise your hand and inform a volunteer once you’re done.</li>
                <li>
                  Volunteers will also perform a manual accessibility check.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityChallenge;
