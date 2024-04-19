import { Map } from "../Utils/Map";
import { LocationDeliveryChecker } from "../Utils/LocationDeliveryChecker";
import BackgroundGradient from "../Utils/BackgroundGradient";
import { useNavigate } from "react-router-dom";
import VideoCard from "../Utils/VideoCard";

const Services = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/video"); // Update with the correct route
    window.scrollTo(0, 0);
  };

  return (
    <section className="pt-40 bg-white">
      <BackgroundGradient
        topBase="top-[calc(100%-13rem)]"
        topSm="sm:top-[calc(100%-30rem)]"
        leftBase="left-[calc(50%+3rem)]"
        leftSm="sm:left-[calc(50%+36rem)]"
        rotation=""
        colorFrom="#6de3e3"
        colorTo="#473fb5"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Servicios de llenado de agua
        </h1>
        <section className="mt-8 grid grid-cols-1 gap-8">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-2">
              <Map />
              <div className="p-10">
                <h2 className="text-2xl font-bold">
                  Compra en tienda
                </h2>
                <p className="text-sm font-light">
                  Puedes visitarnos en nuestra ubicación para comprar garrafones. Estamos ubicados en:
                  <address className="not-italic">
                    <div>Cam. Real a San Andrés 1230</div>
                    <div>Sin Nombre de Col 4</div>
                    <div>72810 San Andrés Cholula, Pue.</div>
                    <div>Mexico</div>
                  </address>
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold">A domicilio</h2>
          <p className="my-4">
            Inserta tu ubicación para verificar si ofrecemos servicio a
            domicilio en tu área. Si no es así, puedes visitarnos en nuestra
            ubicación o llamar para tratar la posibilidad de un servicio
            especial.
          </p>
          <LocationDeliveryChecker />

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-bold mt-10">Servicio 24 horas</h2>
              <div className="pt-8 pr-8 flex flex-col justify-center">
                <p className=" my-4">
                  Nuestro dispensador de agua 24 horas está disponible para ti en
                  cualquier momento del día. Mira el video a continuación para
                  aprender cómo usarlo. Por medio de este puedes llenar por tu
                  cuenta un garrafón de agua de 20 litors.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <VideoCard
                url="https://www.youtube.com/watch?v=IVfE_OQ7a1k&pp=ygUpZGVzcGFjaGFkb3IgZGUgYWd1YSBwdXJpZmljYWRhIGRlIG1vbmVkYXM%3D"
                description="Video tutorial de cómo usar el dispensador de agua 24 horas"
                title="Tutorial de uso dispensador de agua 24 horas"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
