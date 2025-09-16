import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import EventFooter from "./components/EventFooter";

import AccessibilityChallenge from "./pages/AccessibilityChallenge";
import PasswordChallengeEmbed from "./pages/PasswordChallengeEmbed";
import GuessChallenge from "./pages/GuessChallenge";
import LeaderBoardPage from "./pages/Leaderboard";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen w-screen no-scrollbar overflow-x-hidden overflow-y-auto bg-background">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accessibility-challenge" element={<AccessibilityChallenge />} />
          <Route path="/password-challenge" element={<PasswordChallengeEmbed />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
          <Route path="/guess-me-if-you-can-challenge" element={<GuessChallenge />} />
          <Route path="/game1" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <EventFooter />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
