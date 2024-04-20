import React from "react";
import { useNavigate } from "react-router-dom";
import Instore from "../assets/delivery2.svg";
import Delivery from "../assets/delivery.svg";
import Button from "../Utils/ButtonProps";

const Services = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/servicios");
    window.scrollTo(0, 0);
  };

  return (
    <section className="p-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Servicios</h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col items-center max-w-full mx-auto my-2">
          <img src={Instore} alt="Instore" className="w-48 h-48 md:w-60 md:h-60" />
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Servicio a domicilio</h2>
            <p className="text-base text-gray-700">¡Llevamos la frescura de nuestra agua purificada hasta tu hogar!</p>
            <Button
              text="Más información"
              variant="primary"
              onClick={onClick}
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-full mx-auto my-2">
          <img src={Delivery} alt="Delivery" className="w-48 h-48 md:w-60 md:h-60" />
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Compra en tienda</h2>
            <p className="text-base text-gray-700">¡Visítanos y adquiere tu agua!</p>
            <Button
              text="Más información"
              variant="primary"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
