import { Map } from "../Utils/Map";
import { LocationDeliveryChecker} from "../Utils/LocationDeliveryChecker";

const Services = () => {
  return (
    <section className="pt-20">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h1> Compra en tienda</h1>
          <div className="max-w-full mx-auto my-2 shadow-lg">
            <div className="flex items-center bg-white">
              <div className="flex-1">
                <Map />
              </div>
              <div className="flex-1 p-10">
                <h2 className="text-xxl font-bold">Purificadora Valle del Volcán </h2>
                <p className="text-sm leading-relaxed font-normal">Cam. Real a San Andrés 1230, Sin Nombre de Col 4, 72810 San Andrés Cholula, Pue.e</p>
                <p className="text-sm leading-relaxed font-normal">+52 221 530 4660</p>
              </div>
            </div>
          </div>

          <h1 className="pt-10">A domicilio</h1>
          <div className="p-10 flex flex-col items-center max-w-full mx-auto my-2"></div>
            <LocationDeliveryChecker />
        </div>
      </div>
    </section>
  );
};

export default Services;
