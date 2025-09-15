import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import EventFooter from "./components/EventFooter";

import AccessibilityChallenge from "./pages/AccessibilityChallenge";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen w-screen overflow-x-hidden overflow-y-auto bg-background">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accessibility-challenge" element={<AccessibilityChallenge />} />

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
