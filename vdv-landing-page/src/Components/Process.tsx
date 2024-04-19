import React from "react";
import { useEffect, useRef } from "react";
import Thumbnail from "../Utils/Thumbnail";

// Steps
interface VideoProps {
  url: string;
  description: string;
  title: string;
  index: number;
}

const OurProcessSteps: VideoProps[] = [
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "Iniciamos con la captación del agua, asegurando la selección de una fuente limpia y pura.",
    title: "Paso 1 - Captación del Agua",
    index: 1,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "Almacenamos el agua cruda, preparándola para el proceso de purificación.",
    title: "Paso 2 - Almacenamiento de Agua Cruda",
    index: 2,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "Utilizamos un sistema hidroneumático para optimizar la presión y el flujo del agua.",
    title: "Paso 3 - Sistema Hidroneumático",
    index: 3,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "La filtración se realiza a través de arena y carbón activado para retirar impurezas.",
    title: "Paso 4 - Filtración de Arena y Carbón Activado",
    index: 4,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "Un ablandador remueve los minerales que endurecen el agua, como el calcio y magnesio.",
    title: "Paso 5 - Ablandador",
    index: 5,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "La electrólisis se aplica para descomponer sustancias y desinfectar el agua sin químicos.",
    title: "Paso 6 - Electrólisis",
    index: 6,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "El agua pasa por una etapa de ozonificación para una purificación avanzada y eliminar microorganismos.",
    title: "Paso 7 - Ozonificación",
    index: 7,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "La purificación se completa con luz ultravioleta, que asegura la destrucción de bacterias y virus.",
    title: "Paso 8 - Luz Ultravioleta",
    index: 8,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "El lavado de envases se realiza con la máxima higiene para garantizar la seguridad.",
    title: "Paso 9 - Lavado de Envases",
    index: 9,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "Se procede al llenado de los envases con agua ya purificada, lista para el consumo.",
    title: "Paso 10 - Llenado",
    index: 10,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "El envasado final es cuidadoso, asegurando la integridad y limpieza del producto final.",
    title: "Paso 11 - Envasado",
    index: 11,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU",
    description: "Finalmente, entregamos el agua purificada a domicilio, cumpliendo con los estándares de calidad.",
    title: "Paso 12 - Entrega",
    index: 12,
  },
];


const ProcessSteps = () => {
  const ref = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          } else {
            entry.target.classList.add("opacity-0", "translate-y-10");
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const elements = ref.current;
    elements.forEach(el => {
      if (el) {
        el.classList.add('transition', 'duration-500');
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="pt-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nuestro Proceso
        </h1>
        <p>
          Nuestro proceso de purificación en Agua Valle del Volcán es un compromiso con la excelencia. Comienza con la captación cuidadosa del agua, seguida por una serie de pasos meticulosos: filtración a través de arena y carbón activado, suavización con tecnología de ablandamiento, y desinfección con electrólisis. A esto se suma la ozonificación y la luz ultravioleta para una pureza máxima, culminando en el llenado higiénico y la entrega puntual a nuestros clientes. Cada etapa es supervisada para asegurar que el agua que llega a ti es de la mejor calidad.        </p>
        {OurProcessSteps.map((step, index) => (
          <div
            ref={(el) => (ref.current[index] = el)}
            key={step.title}
            className="opacity-0 translate-y-10"
          >
            <Thumbnail {...step} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Process = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <>
      <ProcessSteps />
    </>
  );
});

export default Process;
