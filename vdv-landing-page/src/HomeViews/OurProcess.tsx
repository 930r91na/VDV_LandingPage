import React from "react";
import { useNavigate } from "react-router-dom";
import Process from "../assets/proceso.jpg";
import Button from "../Utils/ButtonProps";

const OurProcess = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/proceso");
    window.scrollTo(0, 0);
  };

  return (
    <section className="p-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center"> 
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Proceso</h1>  
            <p className="text-gray-600 text-lg leading-relaxed">
              El agua del Valle del Volcán atraviesa un proceso de purificación de alta precisión en 12 etapas que incluye captación, filtración, suavización mediante electrólisis, esterilización con ozono y luz ultravioleta, asegurando así su pureza y calidad antes de llegar a tus manos.
            </p>
            <div className="mt-8 flex justify-center">
              <Button text="Más información" variant="primary" onClick={onClick} />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-full max-w-lg h-auto rounded-lg shadow-md"  // Improved sizing and added styles for the image
              src={Process}
              alt="Proceso de purificación"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
