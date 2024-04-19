import HeroContent from "../HomeViews/HeroContent";
import OurTeam from "../HomeViews/OurTeam";
import EmblaCarouselTestimonials from "../HomeViews/Testimonials";
import OurProcess from "../HomeViews/OurProcess";
import OurServices from "../HomeViews/OurServices";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import OurProducts from "../HomeViews/OurProducts";

enum ProductType {
  water,
  plastic,

}
export default function Home() {
  return (
    <>
      <HeroContent />
      <OurServices />
      <EmblaCarouselTestimonials />
      <OurProducts />
      <OurTeam />
      <OurProcess />

      <FloatingWhatsApp
        //TODO: Replace this with correct information
        phoneNumber="2215304660"
        accountName="Valle del Volcan"
        avatar="../../public/VDV.png"
        chatMessage="¡Hola! ¿En qué podemos ayudarte?"
        darkMode={false}
      />
    </>
  );
}
