import HeroContent from "../HomeViews/HeroContent";
import OurTeam from "../HomeViews/OurTeam";
import EmblaCarouselTestimonials from "../HomeViews/Testimonials";
import OurProcess from "../HomeViews/OurProcess";
import OurServices from "../HomeViews/OurServices";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
    <>
      <HeroContent/>
      <OurServices/>
      <OurTeam/>
      <EmblaCarouselTestimonials />
      <OurProcess/>

      <FloatingWhatsApp
        //TODO: Replace this with correct information
        phoneNumber="522212523657"
        accountName="Valle del Volcan"
        avatar="../../public/VDV.png"
        chatMessage="¡Hola! ¿En qué podemos ayudarte?"
        darkMode={false}
      />
    </>
  );
}
