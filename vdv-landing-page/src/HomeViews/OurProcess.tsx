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
    <section className="pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
          <div>
            <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <h1>Proceso</h1>
            </div>

            <div className="pt-8 flex flex-col justify-center">
              <p>

                El agua del Valle del Volcán atraviesa un proceso de purificación de alta precisión en 12 etapas que incluye captación, filtración, suavización mediante electrólisis, esterilización con ozono y luz ultravioleta, asegurando así su pureza y calidad antes de llegar a tus manos.
              </p>
              <div className="pt-16 flex justify-center">
                <Button text="Más información" variant="primary" onClick={onClick} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-96 max-h-240 mx-auto"
              src={Process}
              alt="Nosotros"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurProcess;
