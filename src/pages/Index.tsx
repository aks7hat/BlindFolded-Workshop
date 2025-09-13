// Update this page (the content is just a fallback if you fail to update the page)

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollPopup from "@/components/ScrollPopup";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import EventFooter from "@/components/EventFooter";

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <Navigation />
      <main className="h-[calc(100vh-128px)]">{/* Reserve space for 64px header + 64px footer */}
        <FullScreenCarousel />
      </main>
      <EventFooter />
      <Footer />
      <ScrollPopup />
    </div>
  );
};

export default Index;
