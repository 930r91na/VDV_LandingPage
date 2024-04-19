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
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU&pp=ygUXcHJvY2VzbyBkZSBwdXJpZmljYWNpb24%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    title: "Step 1",
    index: 1,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU&pp=ygUXcHJvY2VzbyBkZSBwdXJpZmljYWNpb24%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    title: "Step 2",
    index: 2,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU&pp=ygUXcHJvY2VzbyBkZSBwdXJpZmljYWNpb24%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    title: "Step 3",
    index: 3,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU&pp=ygUXcHJvY2VzbyBkZSBwdXJpZmljYWNpb24%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    title: "Step 4",
    index: 3,
  },
  {
    url: "https://www.youtube.com/watch?v=eZeulWRFPtU&pp=ygUXcHJvY2VzbyBkZSBwdXJpZmljYWNpb24%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    title: "Step 5",
    index: 3,
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
          nunc, sed sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nemo deserunt nam! Culpa soluta dolor aliquid, consequuntur praesentium corporis mollitia ullam atque ipsam animi facilis ab! Dolores placeat at omnis.
        </p>
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
