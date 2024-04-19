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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
            nunc, sed sed. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestro Equipo
          </h1>
          <p className="pb-4 pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
            nunc, sed sed. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>

          <PersonGrid />
        </div>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mision
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              nunc, sed sed. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Corporis nemo deserunt nam!
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vision
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              nunc, sed sed. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Corporis nemo deserunt nam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamInfo;
