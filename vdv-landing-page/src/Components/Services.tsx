import React from "react";
import { Map } from "../Utils/Map";
import { LocationDeliveryChecker } from "../Utils/LocationDeliveryChecker";
import BackgroundGradient from "../Utils/BackgroundGradient";
import { useNavigate } from "react-router-dom";
import VideoCard from "../Utils/VideoCard";

const Services = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/video");
    window.scrollTo(0, 0);
  };

  return (
    <section className="pt-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
          Servicios
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold">Compra en tienda</h2>
            <div className="shadow-lg rounded-lg overflow-hidden my-4">
              <Map />
              <div className="p-10">
                <p className="text-lg leading-relaxed">
                  Puedes visitarnos en nuestra ubicación para comprar
                  garrafones. Estamos ubicados en:
                  <address className="not-italic mt-2">
                    Cam. Real a San Andrés 1230, Sin Nombre de Col 4, 72810 San
                    Andrés Cholula, Pue., Mexico
                  </address>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">A domicilio</h2>
            <p className="text-lg leading-relaxed my-4">
              Inserta tu ubicación para verificar si ofrecemos servicio a
              domicilio en tu área. Si no es así, puedes visitarnos en nuestra
              ubicación o llamar para tratar la posibilidad de un servicio
              especial.
            </p>
            <LocationDeliveryChecker />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-8 mt-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold ">Servicio 24 horas</h2>
            <p className="text-lg leading-relaxed my-4 ">
              Nuestro dispensador de agua 24 horas está disponible para ti en
              cualquier momento del día. Mira el video a continuación para
              aprender cómo usarlo. Por medio de este puedes llenar por tu
              cuenta un garrafón de agua de 20 litros.
            </p>
          </div>
          <div className="md:w-1/2">
            <VideoCard
              url="https://www.youtube.com/watch?v=IVfE_OQ7a1k&pp=ygUpZGVzcGFjaGFkb3IgZGUgYWd1YSBwdXJpZmljYWRhIGRlIG1vbmVkYXM%3D"
              description="Video tutorial de cómo usar el dispensador de agua 24 horas"
              title="Tutorial de uso dispensador de agua 24 horas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
