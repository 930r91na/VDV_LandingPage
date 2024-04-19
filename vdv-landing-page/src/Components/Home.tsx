import HeroContent from "../HomeViews/HeroContent";
import OurTeam from "../HomeViews/OurTeam";
import EmblaCarouselTestimonials from "../HomeViews/Testimonials";
import OurProcess from "../HomeViews/OurProcess";
import OurServices from "../HomeViews/OurServices";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import OurProducts from "../HomeViews/OurProducts";
import Certificate  from "../HomeViews/Certifications";
import Logo from "../assets/android-chrome-512x512.png";

export default function Home() {
  return (
    <>
      <HeroContent />
      <OurServices />
      <EmblaCarouselTestimonials />
      <OurProducts />
      <Certificate />
      <OurTeam />
      <OurProcess />

      <FloatingWhatsApp
        //TODO: Replace this with correct information
        phoneNumber="2215304660"
        accountName="Valle del Volcan"
        avatar={Logo}
        chatMessage="¡Hola! ¿En qué podemos ayudarte?"
        darkMode={false}
      />
    </>
  );
}
