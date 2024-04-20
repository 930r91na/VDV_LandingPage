import React, { useState, useEffect } from "react";
import HeroContent from "../HomeViews/HeroContent";
import OurTeam from "../HomeViews/OurTeam";
import EmblaCarouselTestimonials from "../HomeViews/Testimonials";
import OurProcess from "../HomeViews/OurProcess";
import OurServices from "../HomeViews/OurServices";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import OurProducts from "../HomeViews/OurProducts";
import Certificate from "../HomeViews/Certifications";
import Logo from "../assets/android-chrome-512x512.png";
import AnnouncementBanner from "../Utils/AnnouncementBanner";

const announcements = [
  {
    message: "Descuentos por compras mayores a $500",
    backgroundColor: "bg-blue-100",
    textColor: "text-blue-800",
    hoverColor: "hover:bg-blue-500",
  },
  {
    message: "Promociones especiales en convenios con empresas",
    backgroundColor: "bg-blue-100",
    textColor: "text-blue-800",
    hoverColor: "hover:bg-green-500",
  },
  // Add more announcements as needed
];

export default function Home() {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  
  const dismissBanner = () => {
    setIsBannerVisible(false);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnnouncementIndex(
        (currentIndex) => (currentIndex + 1) % announcements.length
      );
    }, 15000); // Change announcement every 15 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <HeroContent />
      <div className="pt-0">
        {isBannerVisible && (
          <AnnouncementBanner
            message={announcements[currentAnnouncementIndex].message}
            backgroundColor={
              announcements[currentAnnouncementIndex].backgroundColor
            }
            textColor={announcements[currentAnnouncementIndex].textColor}
            hoverColor={announcements[currentAnnouncementIndex].hoverColor}
            onDismiss={dismissBanner} // Pass the dismiss function to the banner
          />
        )}
      </div>

      <OurServices />
      <OurProducts />
      <Certificate />
      <OurTeam />
      <OurProcess />
      <EmblaCarouselTestimonials />

      <FloatingWhatsApp
        phoneNumber="2215304660"
        accountName="Valle del Volcan"
        avatar={Logo}
        chatMessage="¡Hola! ¿En qué podemos ayudarte?"
        darkMode={false}
      />
    </>
  );
}
