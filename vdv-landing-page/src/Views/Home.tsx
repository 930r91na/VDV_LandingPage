import { useState, useRef } from "react";
import Navigation from "./Navigation";
import HeroContent from "./HeroContent";
import OurTeam from "./OurTeam";
import EmblaCarouselTestimonials from "./Testimonials";
import OurProcess from "./OurProcess";
import Footer from "./Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const posRef = useRef<HTMLElement>(null);

  return (
    <>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        positionRef={posRef}
      />

      <HeroContent />
      <OurTeam ref = {posRef}/>
      <EmblaCarouselTestimonials />
      <OurProcess ref = {posRef}/>
      
      <Footer/>
    </>
  );
}
