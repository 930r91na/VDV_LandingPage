// Desc: Blur Background for Hero Section
import BackgroundGradient from "../Utils/BackgroundGradient";
import AnnouncementBar from "../Utils/AnnouncementBar";
import colors from "../Utils/Colors.module.css";

export default function HeroContent() {
  return (
    <>
      <BackgroundGradient
        topBase="top-[calc(100%-13rem)]"
        topSm="sm:top-[calc(100%-30rem)]"
        leftBase="left-[calc(50%+3rem)]"
        leftSm="sm:left-[calc(50%+36rem)]"
        rotation="70"
        colorFrom ="#ff80b5"
        colorTo="#9089fc"
      />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <AnnouncementBar
          message="Announcing our next round of funding."
          link="#"
          linkText="Read more"
        />

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <BackgroundGradient
        topBase="-top-40"
        topSm="sm:-top-80"
        leftBase="left-[calc(50%-11rem)]"
        leftSm="sm:left-[calc(50%-30rem)]"
        rotation="rotate-[30deg]"
        colorFrom="#6de3e3"
        colorTo="#473fb5"
      />
    </>
  );
}
