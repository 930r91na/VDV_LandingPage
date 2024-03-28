import React from 'react'
import { useState } from "react";
import Navigation from "./Navigation";
import HeroContent from "./HeroContent";
import OurTeam from "./OurTeam";
import EmblaCarouselTestimonials from "./Testimonials";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroContent />
      <OurTeam />
      <EmblaCarouselTestimonials />
    </>
  );
}
