import React from "react";
import PersonGrid from "../Utils/Grid";
import NosotrosTeam from "../assets/herojpg.png";

const TeamInfo = () => {
  return (
    <section className="pt-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nosotros
          </h1>
          <p className="pb-4 pt-4">
            En Agua Valle del Volcán, nuestra misión trasciende la simple
            distribución de agua; buscamos ser guardianes de la pureza y
            custodios de la salud de nuestras familias. Con orígenes
            profundamente enraizados en la majestuosidad del entorno natural,
            cada miembro de nuestro equipo es un ferviente creyente en el valor
            de un recurso tan vital como el agua. Nos enorgullecemos de utilizar
            métodos de purificación vanguardistas y sostenibles para entregar un
            producto que no solo refresca, sino que también nutre y protege.
            Desde nuestros humildes comienzos, hemos crecido con la comunidad
            que nos rodea, aprendiendo y adaptándonos a las necesidades
            cambiantes de un mundo dinámico.
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestro Equipo
          </h1>
          <p className="pb-4 pt-4">
            Nuestro equipo de Agua Valle del Volcán, desde dedicados
            repartidores hasta meticulosos empleados, son el corazón de nuestra
            operación, trabajando unidos para garantizar que cada botella
            entregada sea sinónimo de calidad y servicio excepcional. Con una
            ética laboral insuperable y una sonrisa amable, hacen posible que la
            pureza de la naturaleza llegue directamente a tu puerta.
          </p>

          <PersonGrid />
        </div>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Misión
            </h1>
            <p>
              Proveer a nuestros clientes agua de la más alta pureza y calidad,
              nutriendo la salud y bienestar de nuestra comunidad con
              responsabilidad, sostenibilidad e innovación constante.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vision
            </h1>
            <p>
              Ser la purificadora de agua líder en Cholula, inspirando un futuro
              donde cada persona tiene acceso a agua limpia y segura,
              estableciendo nuevos estándares en sostenibilidad y cuidado del
              medio ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamInfo;
