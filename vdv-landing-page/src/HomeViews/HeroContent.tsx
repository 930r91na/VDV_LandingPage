import React, { useState, useEffect } from "react";
import BackgroundGradient from "../Utils/BackgroundGradient";
import color from "../assets/ColorPalette";
import HeroImg from "../assets/herojpg.png";
import Church from "../assets/stock-photo-church-in-front-of-the-popocatepetl-volcano-in-cholula-mexico-1584024328.jpg";
import Gota from "../assets/gota.jpeg";

// Example image URLs
const images = [
  { src: HeroImg, alt: "Hero image" },
  { src: Church, alt: "Church in front of the Popocatepetl volcano" },
  { src: Gota, alt: "Water drop" },
];

const HeroContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-1/2 pt-10">
      {/* Background image container that fills half of the section */}
      <div
        className="absolute inset-0 w-full h-full" // Ensure it fills the half-height section
        style={{
          backgroundImage: `url(${images[currentImageIndex].src})`, // Corrected to use src property
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Ensures the background is fixed during scroll
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div
        className="relative z-10 mx-auto max-w-7xl py-10 sm:py-20 lg:py-28 flex items-center justify-center h-full"
        style={{ paddingTop: "20px" }}
      >
        <div
          className="text-center text-white p-4"
          style={{ transform: "translateY(80px)" }}
        >
          {" "}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Valle del Volcán
          </h1>
          <blockquote className="italic mt-6">
            <p className="text-center text-xl md:text-2xl">
              Tu purificadora de agua
            </p>
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* Buttons or other content can be placed here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
