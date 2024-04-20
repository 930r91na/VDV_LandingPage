import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "../Utils/ProductsCard";
import botella from "../assets/b1.jpg";
import garrafon from "../assets/garrafon.png";
import botella2 from "../assets/b2.jpg";
import garrafon2 from "../assets/garrafon2.png";

const productos = [
  {
    nombre: "Botella de 100 ml",
    precio: 15,
    imagen: botella,
    description: "Agua purificada en botella pequeña.",
  },
  {
    nombre: "Botella de 500 ml",
    precio: 20,
    imagen: botella2,
    description: "Ideal para la oficina o uso personal.",
  },
  {
    nombre: "Garrafón Epura: 20 lts",
    precio: 50,
    imagen: garrafon,
    description: "Perfecto para el hogar o grandes eventos.",
  },
  {
    nombre: "Garragón Bonafont: 20 lts",
    precio: 15,
    imagen: garrafon2,
    description: "Llenado con agua purificada.",
  },
  {
    nombre: "Mini botella de 100 ml",
    precio: 15,
    imagen: botella,
    description: "Agua purificada en botella pequeña.",
  },
  {
    nombre: "Garrafón Ciel: 20 lts",
    precio: 50,
    imagen: garrafon,
    description: "Perfecto para el hogar o grandes eventos.",
  },
];

const OurProducts = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  return (
    <section className="p-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-bold tracking-tight text-gray-900 sm:text-4xl">
          Productos
        </h1>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-2">
            {" "}
            {/* Adjusted margin for better spacing */}
            {productos.map((producto, index) => (
              <div
                className="px-2 flex-none w-full sm:w-1/2 lg:w-1/3" // Responsive breakpoints
                key={index}
              >
                <div className="py-4">
                  {" "}
                  {/* Added vertical padding */}
                  <ProductCard
                    name={producto.nombre}
                    description={producto.description}
                    price={producto.precio}
                    imageUrl={producto.imagen}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
