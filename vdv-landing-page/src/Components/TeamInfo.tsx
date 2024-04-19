import React from "react";
import PersonGrid from "../Utils/Grid";

const TeamInfo = () => {
  return (
    <section className="pt-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nosotros
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
          nunc, sed sed. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corporis nemo deserunt nam! Culpa soluta dolor aliquid,
          consequuntur praesentium corporis mollitia ullam atque ipsam animi
          facilis ab! Dolores placeat at omnis.
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nuestro Equipo
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
          nunc, sed sed. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corporis nemo deserunt nam! Culpa soluta dolor aliquid,
          consequuntur praesentium corporis mollitia ullam atque ipsam animi
          facilis ab! Dolores placeat at omnis.
        </p>
        <PersonGrid />

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
