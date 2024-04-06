import React from "react";
import Thumbnail from "../Utils/Thumbnail";
import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";

// Steps
interface VideoProps {
  url: string;
  description: string;
  title: string;
  index: number;
}

const OurProcessSteps: VideoProps[] = [
  {
    url: "https://www.youtube.com/watch?v=8ZtInClXe1Q",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    title: "Step 1",
    index: 1,
  },
  {
    url: "https://www.youtube.com/watch?v=8ZtInClXe1Q",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    title: "Step 2",
    index: 2,
  },
  {
    url: "https://www.youtube.com/watch?v=8ZtInClXe1Q",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    title: "Step 3",
    index: 3,
  },
];

const ProcessSteps = () => {
  return (
    <section className="pt-20">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nuestro Proceso
        </h1>
        {OurProcessSteps.map((step) => (
          <Thumbnail {...step} />
        ))}
      </div>
    </section>
  );
};

const Process = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <>
      
      <ProcessSteps />
      <Footer />
    </>
  );
});

export default Process;
