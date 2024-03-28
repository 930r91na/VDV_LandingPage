import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface TestimonialProps {
  description: string;
  name: string;
  moreInfo: string;
  imageUrl: string;
}

const demoTestimonials = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    name: "John Doe",
    moreInfo: "CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    name: "Jane Doe",
    moreInfo: "CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam nunc, sed sed. ",
    name: "John Smith",
    moreInfo: "CFO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function EmblaCarouselTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // Access API
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div
        className="embla__container flex" /* Additional styles might be needed here */
      >
        {demoTestimonials.map((testimonial, index) => (
          <div className="embla__slide flex-shrink-0 w-full" key={index}>
            <Testimonials
              description={testimonial.description}
              name={testimonial.name}
              moreInfo={testimonial.moreInfo}
              imageUrl={testimonial.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const Testimonials: React.FC<TestimonialProps> = (person) => {
  return (
    <>
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="" />
        <div className="" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            // TDOD: Replace this with vdv logo or some svg image
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>{person.description}</p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{person.name}</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">{person.moreInfo}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};
