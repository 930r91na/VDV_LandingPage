import { Map } from "../Utils/Map";
import { LocationDeliveryChecker } from "../Utils/LocationDeliveryChecker";

const Services = () => {
  return (
    <section className="pt-20">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
        <h1 className=" font-bold text-gray-900 sm: text-4xl ">
          {" "}
          Servicios de llenado de agua LOL
        </h1>
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          <h2> Compra en tienda</h2>
          <div className="max-w-full mx-auto my-2 shadow-lg">
            <div className="flex items-center bg-white">
              <div className="flex-1">
                <Map />
              </div>
              <div className="flex-1 p-10">
                <h2 className="text-xxl font-bold">
                  Purificadora Valle del Volcán{" "}
                </h2>
                <p className="text-sm leading-relaxed font-normal">
                  Cam. Real a San Andrés 1230, Sin Nombre de Col 4, 72810 San
                  Andrés Cholula, Pue.e
                </p>
                <p className="text-sm leading-relaxed font-normal">
                  +52 221 530 4660
                </p>
              </div>
            </div>
          </div>

          <h2 className="pt-10">A domicilio</h2>
          <LocationDeliveryChecker />

          <h2 className="pt-10">Servicio 24 horas</h2>
        </div>
        <h1 className=" font-bold text-gray-900 sm: text-4xl ">
          {" "}
          Servicios de embotellado de agua{" "}
        </h1>
      </div>
    </section>
  );
};

export default Services;
