import PersonGrid from "../Utils/Grid";
import React from "react";

const OurTeam= React.forwardRef<HTMLElement>((props,ref) =>  {
  return (
    <section ref = {ref} className="p-15">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nosotros
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <PersonGrid />
      </div>
    </section>
  );
});

export default OurTeam;