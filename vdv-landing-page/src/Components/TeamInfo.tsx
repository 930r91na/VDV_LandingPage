import React from "react";
import PersonGrid from "../Utils/Grid";

const TeamInfo = () => {
  return (
    <section className="pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nosotros
        </h1>
      
        <blockquote className="p-8  mt-4 bg-gradient-to-r from-transparent to-transparent text-blue-900 italic border-l-4 border-blue-900">
          <p className="text-center text-xl md:text-2xl">
            "En Agua Valle del Volcán, nuestra misión trasciende la simple distribución de agua; buscamos ser guardianes de la pureza y custodios de la salud de nuestras familias. Con orígenes profundamente enraizados en la majestuosidad del entorno natural, cada miembro de nuestro equipo es un ferviente creyente en el valor de un recurso tan vital como el agua."
          </p>
        </blockquote>
        
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r rounded-lg shadow-lg p-6 text-gray-900">
            <h2 className="text-2xl font-bold">
              Misión
            </h2>
            <p className="mt-2">
              Proveer a nuestros clientes agua de la más alta pureza y calidad, nutriendo la salud y bienestar de nuestra comunidad con responsabilidad, sostenibilidad e innovación constante.
            </p>
          </div>
          <div className="bg-gradient-to-r rounded-lg shadow-lg p-6 text-gray-900">
            <h2 className="text-2xl font-bold">
              Visión
            </h2>
            <p className="mt-2">
              Ser la purificadora de agua líder en Cholula, inspirando un futuro donde cada persona tiene acceso a agua limpia y segura, estableciendo nuevos estándares en sostenibilidad y cuidado del medio ambiente.
            </p>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-8">
          Nuestro Equipo
        </h1>
        <p className="my-4">
          Nuestro equipo de Agua Valle del Volcán, desde dedicados repartidores hasta meticulosos empleados, son el corazón de nuestra operación, trabajando unidos para garantizar que cada botella entregada sea sinónimo de calidad y servicio excepcional. Con una ética laboral insuperable y una sonrisa amable, hacen posible que la pureza de la naturaleza llegue directamente a tu puerta.
        </p>

        <PersonGrid />
      </div>
    </section>
  );
};

export default TeamInfo;
