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
    <section className="pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h1>Servicios</h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* First service */}
        <div className="flex flex-col items-center max-w-full mx-auto my-2">
          <img src={Instore} alt="Instore" className="w-60 h-60" />
          <div className="text-center">
            <h2 className="subtitulo">
              Servicio a domicilio
            </h2>
            <p className="services">
              ¡Llevamos la frescura de nuestra agua purificada hasta tu hogar!</p>{" "}
            <Button
              text="Más información"
              variant="primary"
              onClick={onClick}
            />
          </div>
        </div>
        {/* Second service */}
        <div className="flex flex-col items-center max-w-full mx-auto my-2">
          <img src={Delivery} alt="Delivery" className="w-60 h-60" />
          <div className="text-center">
            <h2 className="subtitulo">
              Compra en tienda
            </h2>
            <p className="services">
              ¡Visítanos y adquiere tu agua!</p>{" "}
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
