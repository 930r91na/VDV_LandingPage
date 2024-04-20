import React from "react";
import Button from "../Utils/ButtonProps";
import { useNavigate } from "react-router-dom";
import TeamPhoto from "../assets/herojpg.png";

const OurTeam = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/nosotros");
    window.scrollTo(0, 0);
  };
  return (
    <section className="p-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
        <div className="flex items-center justify-center">
            <img
              className="w-96 max-h-240 mx-auto"
              src={TeamPhoto}
              alt="Nosotros"
            />
          </div>
          <div>
            <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <h1>Nosotros</h1>
            </div>

            <div className="div">
              <p>
              En Agua Valle del Volcán, somos un equipo comprometido con la salud y el bienestar de nuestra comunidad, dedicados a proporcionar agua purificada de la más alta calidad. Con una herencia arraigada en la riqueza natural de nuestra región, trabajamos con pasión y tecnología avanzada para garantizar cada gota que ofrecemos es sinónimo de confianza y pureza.
              </p>
              <div className="pt-16 flex justify-center">
                <Button
                  text="Más información"
                  variant="primary"
                  onClick={onClick}
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
