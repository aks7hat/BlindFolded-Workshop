// Update this page (the content is just a fallback if you fail to update the page)

import FullScreenCarousel from "@/components/FullScreenCarousel";
import ScrollPopup from "@/components/ScrollPopup";
import { Fragment } from "react/jsx-runtime";

const Index = () => {
  return (
      <main className="h-[calc(100vh-128px)]">{/* Reserve space for 64px header + 64px footer */}
        <FullScreenCarousel />
      </main>
  );
};

export default Index;
