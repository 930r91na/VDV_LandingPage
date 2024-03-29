import React from "react";
import Instore from "../assets/delivery2.svg";
import Delivery from "../assets/delivery.svg";

const Services = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h1>Servicios</h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* First service */}
        <div className="flex flex-col items-center max-w-full mx-auto my-2">
          <img src={Delivery} alt="delivery image" className="w-60 h-60" />
          <div className="text-center">
            <h2 className="pt-5 text-lg font-semibold text-slate-900">
              Servicio a domicilio
            </h2>
            <p className="text-sm my-2">Descripción breve del servicio...</p>{" "}
            {/* If needed */}
            <button
              onClick={() => {}}
              className="mt-4 bg-indigo-500/80 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded"
            >
              Más información
            </button>
          </div>
        </div>
        {/* Second service */}
        <div className="flex flex-col items-center max-w-full mx-auto my-2">
          <img src={Instore} alt="instore image" className="w-60 h-60" />
          <div className="text-center">
            <h2 className="pt-5 text-lg font-semibold text-slate-900">
              Compra en tienda
            </h2>
            <p className="text-sm my-2">Descripción breve del servicio...</p>{" "}
            {/* If needed */}
            <button
              onClick={() => {}}
              className="mt-4 bg-indigo-500/80 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded"
            >
              Más información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
export default Services;
