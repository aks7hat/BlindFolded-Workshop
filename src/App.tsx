import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import EventFooter from "./components/EventFooter";
import Loading from "./components/Loading";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AccessibilityChallenge = lazy(() => import("./pages/AccessibilityChallenge"));
const PasswordChallengeEmbed = lazy(() => import("./pages/PasswordChallengeEmbed"));
const GuessChallenge = lazy(() => import("./pages/GuessChallenge"));
const LeaderBoardPage = lazy(() => import("./pages/Leaderboard"));
const KeyBoardCommerceChallengePage = lazy(() => import("./pages/KeyBoardCommerceChallengePage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen w-screen no-scrollbar overflow-x-hidden overflow-y-auto bg-background">
      <Navigation />
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-[calc(100vh-128px)] flex items-center justify-center">
            <Loading size="lg" text="Loading page..." variant="dots" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/accessibility-challenge" element={<AccessibilityChallenge />} />
            <Route path="/password-challenge" element={<PasswordChallengeEmbed />} />
            <Route path="/leaderboard" element={<LeaderBoardPage />} />
            <Route path="/guess-me-if-you-can-challenge" element={<GuessChallenge />} />
            <Route path="/keyboard-commerce-challenge" element={<KeyBoardCommerceChallengePage />} />
            {/* <Route path="/game3" element={<Game2 />} /> */}

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <EventFooter />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
