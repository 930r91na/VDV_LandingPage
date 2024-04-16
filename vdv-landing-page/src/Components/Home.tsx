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

const products = [
  {
    name: "Botella de 100 ml",
    description: "Botella con etiqueta personalizada",
    image: "/assets/bottle.png",
    price: 10.0,
    type: ProductType.plastic,
  },
  {
    name: "Botella de  500 ml",
    description: "Botella con etiqueta personalizada",
    image: "/../assets/bottle.png",
    price: 15.0,
    type: ProductType.plastic,
  },
  {
    name: "Garrafon de  20 lts",
    description: "Compra de garrafon de agua purificada",
    image: "/../assets/garrafon.png",
    price: 50.0,
    type: ProductType.plastic,
  },
  {
    name: "Garrafon de  20 lts",
    description: "Llenado de garrafon de agua purificada",
    image: "/../assets/garrafon.png",
    price: 15,
    type: ProductType.water,
  },
];

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
        phoneNumber="522212523657"
        accountName="Valle del Volcan"
        avatar="../../public/VDV.png"
        chatMessage="¡Hola! ¿En qué podemos ayudarte?"
        darkMode={false}
      />
    </>
  );
}
