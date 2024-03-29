import { useState, useRef } from "react";
import Navigation from "../HomeViews/Navigation";
import HeroContent from "../HomeViews/HeroContent";
import OurTeam from "../HomeViews/OurTeam";
import EmblaCarouselTestimonials from "../HomeViews/Testimonials";
import OurProcess from "../HomeViews/OurProcess";
import Footer from "../HomeViews/Footer";
import OurServices from "../HomeViews/OurServices";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for navigation
  const homeRef = useRef<HTMLElement>(null);
  const ourTeamRef = useRef<HTMLElement>(null);
  const ourProcessRef = useRef<HTMLElement>(null);
  const ourServicesRef = useRef<HTMLElement>(null);

  return (
    <>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        positionRef={{ homeRef, ourTeamRef, ourProcessRef, ourServicesRef }}
      />

      <HeroContent ref={homeRef} />
      <OurServices ref={ourServicesRef} />
      <OurTeam ref={ourTeamRef} />
      <EmblaCarouselTestimonials />
      <OurProcess ref={ourProcessRef} />

      <FloatingWhatsApp
        //TODO: Replace this with correct information
        phoneNumber="522212523657"
        accountName="Valle del Volcan"
        avatar="../../public/VDV.png"
        chatMessage="¡Hola! ¿En qué podemos ayudarte?"
        darkMode={false}
      />
      <Footer />
    </>
  );
}
